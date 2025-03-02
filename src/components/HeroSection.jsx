import { TypeAnimation } from "react-type-animation";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const HeroSection = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center mt-6 lg:mt-20 px-4 md:px-8 lg:px-16">
      {/* Text Section */}
      <div className="lg:w-1/2 text-center lg:text-left px-4">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-wide">
          Angikya Software{" "}
          <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
            Technology
          </span>
        </h1>

        {/* Typing Effect */}
        <h2 className="text-xl sm:text-3xl lg:text-4xl mt-4 text-gray-300">
          We excel in{" "}
          <span className="text-orange-500 font-semibold">
            <TypeAnimation
              sequence={[
                "Software Development", 1500,
                "Android & iOS Development", 1500,
                "Web Development", 1500,
                "AI Solutions", 1500,
                "Cloud Computing", 1500,
                "UI/UX Design", 1500,
                "Cybersecurity", 1500,
                "Custom Enterprise Solutions", 1500
              ]}
              speed={50}
              repeat={Infinity}
              cursor={true}
            />
          </span>
        </h2>

        <p className="mt-6 text-lg text-neutral-400 max-w-lg">
          Empower your creativity and bring your ideas to life with our cutting-edge
          development solutions. Join us to turn your imagination into reality!
        </p>
      </div>

      {/* Video Section */}
      <div className="relative lg:w-1/2 flex justify-center items-center mt-8 lg:mt-0">
        {/* Main Video */}
        <div className="w-5/6 md:w-3/4 lg:w-2/3 rounded-xl overflow-hidden shadow-lg border border-orange-700 hover:scale-105 transition-transform duration-500 relative">
          <video autoPlay loop muted className="w-full h-auto rounded-xl">
            <source src={video1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Small Floating Video */}
        <div className="absolute -bottom-6 -right-6 w-28 sm:w-36 md:w-44 lg:w-52 border border-orange-500 rounded-xl overflow-hidden shadow-md hover:scale-110 transition-transform duration-500">
          <video autoPlay loop muted className="w-full h-auto rounded-xl">
            <source src={video2} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
