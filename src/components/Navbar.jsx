import Link from "next/link";

const Navbar = () => (
  <nav className=" mb-2 ">
    <div className="flex gap-4 justify-between mt-3 font-serif text-lg text-gray-600">
      <h4 className="ml-24 font-bold text-2xl tracking-wide mt-1 ">
        Kher
        <span className=" font-medium text-2xl  text-orange-600 tracking-wide">dja</span>
      </h4>
      <ul className="flex gap-12 mr-32  ">
        <li className=" underline underline-offset-8 decoration-teal-400 decoration-2  mt-2 ">
          <Link href="/">Home</Link>
        </li>
        <li className=" mt-2 hover:underline hover:underline-offset-8 hover:decoration-teal-400 hover:decoration-2 transition duration-300 ">
          <Link href="/destination">Destination</Link>
        </li>
        <li className=" mt-2 hover:underline hover:underline-offset-8 hover:decoration-teal-400 hover:decoration-2 transition duration-150 ">
          <Link href="/about">About</Link>
        </li>
        <li className=" mt-2 hover:underline hover:underline-offset-8 hover:decoration-teal-400 hover:decoration-2 transition duration-150 ">
          <Link href="/blog">Blog</Link>
        </li>
        <li className=" mt-2 hover:underline hover:underline-offset-8 hover:decoration-teal-400 hover:decoration-2 transition duration-150 ">
          <Link href="/contact">Contact</Link>
        </li>
        <li><button className="ml-6 border-solid border-2 border-orange-400 rounded-full px-3 py-2 text-sm flex gap-2 bg-orange-400 text-white font-medium">
       
       <span>
         <svg
           xmlns="http://www.w3.org/2000/svg"
           fill="none"
           viewBox="0 0 24 24"
           strokeWidth="1.5"
           stroke="currentColor"
           className="size-4 mt-0.5 "
         >
           <path
             strokeLinecap="round"
             strokeLinejoin="round"
             d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
           />
         </svg>
       </span>
       Book Trip 
     </button></li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
