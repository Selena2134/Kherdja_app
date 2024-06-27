import axios from "axios";
import Like from "@/components/Like";

export default async function CardList() {
  const res = await axios.get("http://localhost:3000/kherja")
  return (
    <div> 
    <div className=" grid grid-cols-2 ml-40 mt-14">
    {
      res.data.map((product , index)=>{
        return (
            <div className="relative ml-24">
              <h1 className="absolute top-2 text-white border-solid border-2 border-red-400 rounded-full bg-red-400 right-44 px-1 py-3 ">${product.price}</h1>
              <img className="w-2/3 h-2/3" src= {product.picture_link} /> 
              <div>
              <h2 className="font-semibold text-white  absolute bottom-24 left-6">{product.name}</h2>
              <img className="absolute bottom-12 left-24" src="etoiles.png" alt=""/>
              <Like></Like>
           </div>
         </div>
        )
      })
      }
      </div>
    </div>
  );
}