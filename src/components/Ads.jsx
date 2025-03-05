import { motion } from "framer-motion";

export default function ContactUs() {
  return (
    <div className="relative flex items-center h-[2px] justify-end min-h-[0px] p-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white  shadow-md overflow-hidden hidden md:flex">
      {/* Animated Twinkling Stars */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-[3px] h-[3px] bg-white rounded-full opacity-70"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [0.5, 1.5, 0.5],
            x: [0, Math.random() * 15 - 7], // Slight movement effect
            y: [0, Math.random() * 15 - 7],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}

      {/* Contact Information with Animation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col sm:flex-row items-center justify-center md:justify-end gap-3 text-sm sm:text-base"
      >
        <motion.p
          className="font-medium tracking-wide flex items-center gap-2"
          whileHover={{ scale: 1.1 }}
        >
          📞 +91 98765 43210
        </motion.p>
        <motion.p
          className="font-medium tracking-wide flex items-center gap-2"
          whileHover={{ scale: 1.1 }}
        >
          📧 connect@angikya.com
        </motion.p>
        <motion.p
          className="font-medium tracking-wide flex items-center gap-2"
          whileHover={{ scale: 1.1 }}
        >
          🌐 www.angikya.com
        </motion.p>
      </motion.div>
    </div>
  );
}
