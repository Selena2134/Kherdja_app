'use client'
import { useState } from "react";

function Like () {
    const [likes, setLikes] = useState(0);
    return (    
        <>
            <button onClick={()=>{setLikes(likes+1)}} className="p-1 bg-blue-700 m-1 rounded-md text-white">Like</button>
            <h1>${likes}</h1>
        </>
)};
  
export default Like;
