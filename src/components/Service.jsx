// import { features } from "../constants";

// const FeatureSection = () => {
//   return (
//     <div className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
//       <div className="text-center">
//         <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
//           Feature
//         </span>
//         <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
//           Our{" "}
//           <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
//            Services
//           </span>
//         </h2>
//       </div>
//       <div className="flex flex-wrap mt-10 lg:mt-20">
//         {features.map((feature, index) => (
//           <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
//             <div className="flex">
//               <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-orange-700 justify-center items-center rounded-full">
//                 {feature.icon}
//               </div>
//               <div>
//                 <h5 className="mt-1 mb-6 text-xl">{feature.text}</h5>
//                 <p className="text-md p-2 mb-20 text-neutral-500">
//                   {feature.description}
//                 </p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FeatureSection;

import { FaLaptopCode, FaMobileAlt, FaCloud, FaRobot, FaShieldAlt, FaDatabase, FaCogs, FaServer, FaUsers } from "react-icons/fa";

const services = [
  { icon: <FaLaptopCode size={24} />, title: "Web Development", description: "Custom websites, web apps, and e-commerce solutions with modern tech stacks." },
  { icon: <FaMobileAlt size={24} />, title: "Mobile App Development", description: "Native and cross-platform mobile applications with smooth UI/UX." },
  { icon: <FaCloud size={24} />, title: "Cloud Computing", description: "Cloud migration, architecture design, and serverless solutions." },
  { icon: <FaRobot size={24} />, title: "AI & Automation", description: "AI-driven automation, chatbots, and machine learning solutions." },
  { icon: <FaShieldAlt size={24} />, title: "Cybersecurity", description: "Secure software solutions with encryption, firewall, and threat detection." },
  { icon: <FaDatabase size={24} />, title: "Database Management", description: "Optimized databases, data warehousing, and real-time analytics." },
  { icon: <FaCogs size={24} />, title: "SaaS Development", description: "Scalable SaaS applications with multi-tenant architecture." },
  { icon: <FaServer size={24} />, title: "DevOps & Hosting", description: "CI/CD pipelines, AWS, Azure, and Google Cloud hosting solutions." },
  { icon: <FaUsers size={24} />, title: "UI/UX Design", description: "User-centric interfaces with Figma, Adobe XD, and modern UI trends." },
];

const FeatureSection = () => {
  return (
    <div className="relative mt-20 border-b border-neutral-800 py-16">
      {/* Title */}
      <div className="text-center">
        <span className="bg-neutral-900 text-orange-500 rounded-full text-sm font-medium px-3 py-1 uppercase">
          Our Services
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 tracking-wide">
          Elevating Businesses with{" "}
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
            Cutting-Edge Tech
          </span>
        </h2>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto mt-16">
        {services.map((service, index) => (
          <div key={index} className="p-6 bg-neutral-900 rounded-xl border border-neutral-800 hover:border-orange-500 transition-all duration-300">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-orange-500/20 text-orange-500 rounded-full">
                {service.icon}
              </div>
              <h5 className="text-xl font-semibold">{service.title}</h5>
            </div>
            <p className="text-neutral-400 mt-4">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
