import CarouselList from "@/components/CarouselList";
import "./globals.css";


function App() {
  return (
    <div>
      <div className="flex justify-center gap-32 mt-22 ">
        <div className="mt-24">
          <div className="flex items-center ">
            <h5 className=" font-bold text-orange-500 ">Explore the world </h5>
            <img src="./etoile.png" alt="" />
          </div>
          <h1 className="font-medium text-2xl font-semibold mb-6  ">
            Plan your trip with us <br /> whenever you want
          </h1>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            <br /> Rem nesciunt accusamus, aliquid veniam sint commodi <br />
            facilis numquam rerum ipsum quas tempore, iusto a <br /> adipisci
            odio odit delectus fuga atque amet?
          </p>

          <button className=" flex gap-2 border-solid border-2 border-[#5DC1B8] rounded-full px-4 py-2 text-white bg-[#5DC1B8] mt-6 font-semibold">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                 strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                />
              </svg>
            </span>
            Contact Us
          </button>
        </div>
        <div>
          <img className="mt-24 " src="./world photo.png" alt="world" />
        </div>
      </div>
      {/* part2 of main  */}

      <div className="flex gap-4 ml-40 mt-10  w-[35%] shadow-lg fit-content shadow-gray-300 border-solid border-2 rounded-full py-3 px-4">
        <div className="ml-2 mt-1">
          <p className="flex ">
            where{" "}
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>
            </span>
          </p>
        </div>

        <div className="border-x-2 px-3 border-[#5DC1B8] mt-1 ">
          <p className="flex ">
            when
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                />
              </svg>
            </span>
          </p>
        </div>

        <div className="mt-1 ">
          <p className="flex ">
            Travel type{" "}
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
            </span>
          </p>
        </div>
        <div>
          <button className=" flex gap-2 border-solid border-2 border-[#5DC1B8] rounded-full px-4 py-1 text-white bg-[#5DC1B8]  font-semibold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
            Search
          </button>
        </div>
      </div>
      {/* part3 */}
      <div className="flex justify-center mt-14">
        <img src="./part3.png" alt="" />
      </div>
      {/* part4 */}
      <div className="flex justify-center mt-14">
        <img src="./part4.png" alt="" />
      </div>
      < CarouselList />
    </div>
  );
}

export default App;
