import { useEffect } from "react";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {

  return (
    <div className={`fixed top-0 left-0 w-full bg-[#2A245D] z-40 flex flex-col items-center justify-center 
    transition-all duration-200 ease-in-out
    
    ${
        menuOpen ? "h-screen opacity-100 pointer-events-auto" 
        : "h-0 opacity-0 pointer-events-none"
    }
    `}>

        <button onClick={() => setMenuOpen(false)} className = "absolute top-6 right-6 text-white text-3xl focus:outline-none-cursor-pointer">
            &times; 

        </button>

    </div>
 );
};