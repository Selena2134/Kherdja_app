"use client"
import React, { useEffect, useState } from 'react';
import { Carousel, Typography, Button } from "@material-tailwind/react";
import axios from "axios";

export default function CarouselList() {
  const [voyages, setVoyages] = useState([]);

  useEffect(() => {
    async function fetchVoyages() {
      try {
        const res = await axios.get("https://localhost:3000/kherdja");
        setVoyages(res.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des données:", error);
      }
    }

    fetchVoyages();
  }, []);

  return (
    <Carousel>
      {voyages.map((voyage, index) => (
        <div key={index} className="relative h-full w-full">
          <img
            src={voyage.picture_link}
            alt="image 1"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
            <div className="w-3/4 text-center md:w-2/4">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
              >
                {voyage.name}
              </Typography>
              <div className="flex justify-center gap-2">
                <Button size="lg" color="white">
                  Explore
                </Button>
                <Button size="lg" color="white" variant="text">
                  Book Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
}
