import { FaLaptopCode, FaMobileAlt, FaCloud, FaRobot, FaShieldAlt, FaDatabase, FaCogs, FaServer, FaUsers } from "react-icons/fa";

const services = [
  { icon: <FaLaptopCode size={28} />, title: "Web Development", description: "Custom websites, web apps, and e-commerce solutions with modern tech stacks." },
  { icon: <FaMobileAlt size={28} />, title: "Mobile App Development", description: "Native and cross-platform mobile applications with smooth UI/UX." },
  { icon: <FaRobot size={28} />, title: "AI & Automation", description: "AI-driven automation, chatbots, and machine learning solutions." },
  { icon: <FaDatabase size={28} />, title: "Database Management", description: "Optimized databases, data warehousing, and real-time analytics." },
  { icon: <FaCogs size={28} />, title: "SaaS Development", description: "Scalable SaaS applications with multi-tenant architecture." },
  { icon: <FaServer size={28} />, title: "DevOps & Hosting", description: "CI/CD pipelines, AWS, Azure, and Google Cloud hosting solutions." },
  { icon: <FaUsers size={28} />, title: "UI/UX Design", description: "User-centric interfaces with Figma, Adobe XD, and modern UI trends." },
  { icon: <FaCloud size={28} />, title: "Cloud Computing", description: "Cloud migration, architecture design, and serverless solutions." },
  { icon: <FaShieldAlt size={28} />, title: "Cybersecurity", description: "Secure software solutions with encryption, firewall, and threat detection." },
];

const FeatureSection = () => {
  return (
    <div className="relative md:mt-6 lg:mt-12 xl:mt-16  border-neutral-800 py-16 px-6 sm:px-12">
      {/* Title */}
      <div className="text-center">
        <span className="bg-blue-600 text-white rounded-full text-sm font-medium px-4 py-1 uppercase shadow-lg md:tracking-wider">
          What We Offer
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-8 tracking-wide font-extrabold text-dark">
          Transforming Ideas with
          <span className="bg-gradient-to-r from-blue-400 to-blue-700 text-transparent bg-clip-text"> Innovation</span>
        </h2>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 max-w-6xl mx-auto mt-8 md:mt-14">
        {services.map((service, index) => (
          <div key={index} className="p-6 bg-gray-900 rounded-2xl border border-gray-800 shadow-md hover:border-blue-500 transition-all duration-300">
            <div className="flex items-center space-x-4">
              <div className="p-4 bg-blue-500/20 text-blue-500 rounded-full">
                {service.icon}
              </div>
              <h5 className="text-xl font-semibold text-white tracking-wider">{service.title}</h5>
            </div>
            <p className="text-gray-100 tracking-wider mt-4 text-sm leading-relaxed">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;


// import { FaLaptopCode, FaMobileAlt, FaCloud, FaRobot, FaShieldAlt, FaDatabase, FaCogs, FaServer, FaUsers } from "react-icons/fa";

// const services = [
//   { icon: <FaLaptopCode size={28} />, title: "Web Development", description: "Custom websites, web apps, and e-commerce solutions with modern tech stacks." },
//   { icon: <FaMobileAlt size={28} />, title: "Mobile App Development", description: "Native and cross-platform mobile applications with smooth UI/UX." },
//   // { icon: <FaCloud size={28} />, title: "Cloud Computing", description: "Cloud migration, architecture design, and serverless solutions." },
//   { icon: <FaRobot size={28} />, title: "AI & Automation", description: "AI-driven automation, chatbots, and machine learning solutions." },
//   { icon: <FaShieldAlt size={28} />, title: "Cybersecurity", description: "Secure software solutions with encryption, firewall, and threat detection." },
//   { icon: <FaDatabase size={28} />, title: "Database Management", description: "Optimized databases, data warehousing, and real-time analytics." },
//   { icon: <FaCogs size={28} />, title: "SaaS Development", description: "Scalable SaaS applications with multi-tenant architecture." },
//   { icon: <FaServer size={28} />, title: "DevOps & Hosting", description: "CI/CD pipelines, AWS, Azure, and Google Cloud hosting solutions." },
//   { icon: <FaUsers size={28} />, title: "UI/UX Design", description: "User-centric interfaces with Figma, Adobe XD, and modern UI trends." },
// ];

// const FeatureSection = () => {
//   return (
//     <div className="relative mt-16 border-neutral-800 py-16 px-4 sm:px-8">
//       {/* Title */}
//       <div className="text-center">
//         <span className="bg-blue-600 text-white rounded-full text-sm font-medium px-4 py-1 uppercase shadow-lg">
//           What We Offer
//         </span>
//         <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-6 tracking-wide font-extrabold text-dark">
//           Transforming Ideas with
//           <br />
//           <span className="bg-gradient-to-r from-blue-400 to-blue-700 text-transparent bg-clip-text"> Innovation</span>
//         </h2>
//       </div>

//       {/* Services Grid */}
//       <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-14">
//         {services.map((service, index) => (
//           <div
//             key={index}
//             className="flex flex-col items-center text-center bg-gray-900 rounded-xl border border-gray-800 shadow-lg p-6 
//             hover:border-blue-500 hover:shadow-xl transition-all duration-300"
//           >
//             <div className="w-16 h-16 flex items-center justify-center bg-blue-500/20 text-blue-500 rounded-full mb-4">
//               {service.icon}
//             </div>
//             <h5 className="text-lg font-semibold text-white">{service.title}</h5>
//             <p className="text-gray-400 mt-3 text-sm leading-relaxed">{service.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FeatureSection;
