import { useEffect } from "react";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {

  return (
    <div className={`w-full bg-[rgba(42,36,93,0.9)] bg-opacity-20 z-40 flex flex-col items-center justify-center 
    transition-all duration-200 ease-in-out
    
    ${
        menuOpen ? "h-screen opacity-100 pointer-events-auto" 
        : "h-0 opacity-0 pointer-events-none"
    }
    `}>

        <button onClick={() => setMenuOpen(false)} 
        className = "absolute top-6 right-6 text-white text-3xl focus:outline-none-cursor-pointer"
        aria-label="Close Menu">
            &times; 

        </button>
      <a
        href="#home"
        onClick={() => setMenuOpen(false)}
        className={`text-2xl text-[#D4D9F4] hover:text-white transition-colors my-4 transform transition-transform duration-300
                    ${
                      menuOpen
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-5"
                    }        
            `}
      >
        Home
      </a>
      <a
        href="#about"
        onClick={() => setMenuOpen(false)}
        className={`text-2xl text-[#D4D9F4] hover:text-white transition-colors my-4 transform transition-transform duration-300
                    ${
                      menuOpen
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-5"
                    }        
            `}
      >
        About
      </a>
      <a
        href="#projects"
        onClick={() => setMenuOpen(false)}
        className={`text-2xl text-[#D4D9F4] hover:text-white transition-colors my-4 transform transition-transform duration-300
                    ${
                      menuOpen
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-5"
                    }        
            `}
      >
        Projects
      </a>
      <a
        href="#contact"
        onClick={() => setMenuOpen(false)}
        className={`text-2xl text-[#D4D9F4] hover:text-white transition-colors my-4 transform transition-transform duration-300
                    ${
                      menuOpen
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-5"
                    }        
            `}
      >
        Contact
      </a>

    </div>
 );
};