import "./globals.css";

function App() {
  return (
        <div>
          <div className="flex justify-center gap-32 mt-22 "> 
          <div className="mt-24">
            <div className="flex items-center ">
            <h5 className=" font-bold text-orange-500 ">Explore the world  </h5>
            <img src="./etoile.png" alt="" />
            </div>
            <h1 className="font-medium text-2xl font-semibold mb-6  ">
              Plan your trip with us <br /> whenever you want 
            </h1>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br/> Rem
              nesciunt accusamus, aliquid veniam sint commodi <br/>facilis numquam
              rerum ipsum quas tempore, iusto a <br/> adipisci odio odit delectus fuga
              atque amet?
            </p>
            
            <button className=" flex gap-2 border-solid border-2 border-[#5DC1B8] rounded-full px-4 py-2 text-white bg-[#5DC1B8] mt-6 font-semibold"> 
              <span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
              </svg>
              </span>
              Contact Us
            </button>
           
          </div>
          <div>
            <img className="mt-12" src="./world photo.png" alt="world" />
          </div>
        </div>
       {/* part2 of main  */}

         <div className="border-r-4 border-indigo-500 ">
          <p className="flex ">where <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
           </svg>
          </span></p> 

         </div>
      
        </div>
     

      
      
  );
}

export default App;
