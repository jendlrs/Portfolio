export const Home = () => {
    return (
      <section 
        id="home" 
        className="min-h-screen flex items-center justify-center px-8 md:px-16 lg:px-24"
      >
        {/* Container for two columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full max-w-5xl">
          
          <div className="text-left space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold text-[#2A245D] leading-tight">
            <span className="text-2xl text-gray-600">Hi, I am</span> <br />
            <span className="text-3xl text-[2A245D]-600">Ma. Jensen Nicole Dela Rosa</span>
            </h1>
            <p className="text-md text-gray-700">
            I’m a Computer Engineering student specializing in 
            Big Data Analytics, with a strong passion for software 
            development and web technologies. My goal is to create 
            innovative and efficient software solutions that solve 
            real-world problems.
            </p>
            <a 
              href="#contact"
              className="bg-[#2A245D] text-white px-6 py-4 rounded-full text-sm shadow-lg hover:text-black hover:bg-[#D4D9F4] transition"
            >
              Contact Me
            </a>
          </div>
  
          <div className="flex justify-center">
            <img 
              src="src/assets/logo.png"
              alt="Profile"
              className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full shadow-xl"
            />
          </div>
          
        </div>
      </section>
    );
  };
  