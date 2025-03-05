import { TypeAnimation } from "react-type-animation";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const HeroSection = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center mt-4 lg:mt-8 px-6 md:px-12 lg:px-20 relative">
      {/* Cursor Effect */}
      <div className="absolute inset-0 pointer-events-none animate-pulse bg-gradient-radial from-transparent via-blue-300/20 to-transparent"></div>

      {/* Text Section */}
      <div className="lg:w-1/2 text-center lg:text-left px-4">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-wide">
          ANGIKYA {" "}
          <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 text-transparent bg-clip-text">
            
          </span>
        </h1>

        {/* Typing Effect */}
        <h2 className="text-xl sm:text-3xl lg:text-4xl mt-4 text-gray-600">
          We excel in{" "}
          <span className="text-blue-600 font-semibold">
            <TypeAnimation
              sequence={[
                "Software Development", 1500,
                "Android & iOS Development", 1500,
                "Web Development", 1500,
                "AI Solutions", 1500,
                "Cloud Computing", 1500,
                "UI/UX Design", 1500,
                "Cybersecurity", 1500,
                "Custom Enterprise Solutions", 1500,
              ]}
              speed={50}
              repeat={Infinity}
              cursor={true}
            />
          </span>
        </h2>

        <p className="mt-6 text-lg text-gray-500 max-w-lg">
          Empower your creativity and bring your ideas to life with our cutting-edge
          development solutions. Join us to turn your imagination into reality!
        </p>

        <div className="mt-6 flex justify-center lg:justify-start gap-4">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300" >
          <a href="/" className="hover:text-blue-600 transition-all duration-300">Join Team</a>
          </button>
          {/* <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 hover:text-white transition-all duration-300">
            Learn More
          </button> */}
        </div>
      </div>

      {/* Video Section */}
      <div className="relative lg:w-1/2 flex justify-center items-center mt-10 lg:mt-0">
        {/* Main Video - Enlarged */}
        <div className="w-3/4 md:w-4/5 lg:w-[550px] rounded-xl overflow-hidden shadow-xl border border-blue-500 backdrop-blur-lg bg-white/10 hover:scale-105 hover:shadow-blue-500/50 transition-all duration-500 relative">
          <video
            autoPlay
            loop
            muted
            className="w-full h-auto rounded-xl border border-white/20"
          >
            <source src={video1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Floating Video - Bigger & Better Positioned */}
        <div className="absolute -bottom-8 -right-10 w-36 sm:w-44 md:w-56 lg:w-64 border border-blue-400 rounded-xl overflow-hidden shadow-lg backdrop-blur-lg bg-white/10 hover:scale-110 hover:shadow-blue-400/50 transition-transform duration-500">
          <video
            autoPlay
            loop
            muted
            className="w-full h-auto rounded-xl border border-white/20"
          >
            <source src={video2} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
