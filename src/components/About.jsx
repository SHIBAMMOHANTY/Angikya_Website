// import { CheckCircle2 } from "lucide-react";
// import { pricingOptions } from "../constants";

// const Pricing = () => {
//   return (
//     <div className="mt-20">
//       <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide">
//         Pricing
//       </h2>
//       <div className="flex flex-wrap">
//         {pricingOptions.map((option, index) => (
//           <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
//             <div className="p-10 border border-neutral-700 rounded-xl">
//               <p className="text-4xl mb-8">
//                 {option.title}
//                 {option.title === "Pro" && (
//                   <span className="bg-gradient-to-r from-blue-500 to-red-400 text-transparent bg-clip-text text-xl mb-4 ml-2">
//                     (Most Popular)
//                   </span>
//                 )}
//               </p>
//               <p className="mb-8">
//                 <span className="text-5xl mt-6 mr-2">{option.price}</span>
//                 <span className="text-neutral-400 tracking-tight">/Month</span>
//               </p>
//               <ul>
//                 {option.features.map((feature, index) => (
//                   <li key={index} className="mt-8 flex items-center">
//                     <CheckCircle2 />
//                     <span className="ml-2">{feature}</span>
//                   </li>
//                 ))}
//               </ul>
//               <a
//                 href="#"
//                 className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-20 tracking-tight text-xl hover:bg-blue-900 border border-blue-900 rounded-lg transition duration-200"
//               >
//                 Subscribe
//               </a>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Pricing;

import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <div className="relative bg-[#0F0F0F] text-white py-24 px-6 overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-500/10 via-transparent to-blue-500/10 blur-3xl opacity-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      />

      <div className="relative max-w-6xl mx-auto text-center">
        {/* Title */}
        <motion.h2
          className="text-5xl sm:text-6xl font-extrabold tracking-wide bg-gradient-to-r from-blue-500 to-red-500 text-transparent bg-clip-text"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Who We Are
        </motion.h2>

        {/* Description */}
        <motion.p
          className="mt-6 text-lg sm:text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          We are a team of innovators, creators, and tech enthusiasts committed
          to shaping the future. Our expertise spans AI, Web3, and next-gen
          solutions to empower businesses and revolutionize industries.
        </motion.p>
      </div>

      {/* Glassmorphic Info Cards */}
      <div className="relative max-w-7xl mx-auto grid md:grid-cols-3 gap-10 mt-16">
        {[
          { number: "1+", label: "Years of Innovation" },
          { number: "10+", label: "Successful Projects" },
          { number: "100%", label: "Client Satisfaction" },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="p-8 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-5xl font-bold text-blue-400">{item.number}</h3>
            <p className="text-neutral-300 text-lg mt-2">{item.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Call to Action */}
      <motion.div
        className="mt-20 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <a
          href="#"
          className="px-10 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-red-500 rounded-lg hover:scale-105 transition-all"
        >
          Join Us
        </a>
      </motion.div>
    </div>
  );
};

export default AboutUs;
