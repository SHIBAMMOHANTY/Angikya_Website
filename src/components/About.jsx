import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <div className="relative text-white py-24 px-6 overflow-hidden rounded-3xl">
      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full  via-transparent to-purple-500/10 blur-3xl opacity-30 rounded-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      />

      <div className="relative max-w-6xl mx-auto text-center">
        {/* Title */}
        <motion.h2
          className="text-5xl sm:text-6xl font-extrabold tracking-wide bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Who We Are
        </motion.h2>

        {/* Description */}
        <motion.p
          className="mt-6 text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <span className="font-bold tracking-wide bg-gradient-to-r from-red-800 via-blue-500 to-blue-400 text-transparent bg-clip-text">Angikya </span>
          is a software company specializing in innovative solutions for businesses. Our skilled team collaborates closely with clients to deliver customized services, including web and mobile app development, cloud computing, and e-commerce solutions.
        </motion.p>
      </div>

      {/* Glassmorphic Info Cards */}
      <div className="relative max-w-7xl mx-auto grid md:grid-cols-3 gap-10 mt-16">
        {[{ number: "1+", label: "Years of Innovation" }, { number: "2+", label: "Successful Projects" }, { number: "100%", label: "Client Satisfaction" }].map((item, index) => (
          <motion.div
            key={index}
            className="p-8 rounded-3xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-5xl font-bold text-blue-400">{item.number}</h3>
            <p className="text-gray-300 text-lg mt-2">{item.label}</p>
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
          href="/"
          className="px-10 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg hover:scale-105 transition-all"
        >
          <a href="/" className="hover:text-blue-400 transition-all duration-300">Join Us</a>
        </a>
      </motion.div>
    </div>
  );
};

export default AboutUs;