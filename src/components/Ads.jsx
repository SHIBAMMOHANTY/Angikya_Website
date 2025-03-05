import { motion } from "framer-motion";

export default function ContactUs() {
  return (
    <div className="relative flex items-center h-[2px] justify-end min-h-[0px] p-4 bg-gradient-to-r  bg-blue-400  text-white  shadow-md overflow-hidden hidden md:block">
      {/* Animated Twinkling Stars */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-[2px] h-[2px] bg-white rounded-full opacity-70"
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [0.6, 1.4, 0.6],
            x: [0, Math.random() * 10 - 5], // Slight movement effect
            y: [0, Math.random() * 10 - 5],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 1.5,
          }}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}

      {/* Contact Information */}
      <div className="flex flex-col sm:flex-row items-center justify-end gap-4 text-sm sm:text-base">
        <p className="font-medium tracking-wide">📞 +91 98765 43210</p>
        <p className="font-medium tracking-wide">📧 connect@angikya.com</p>
        <p className="font-medium tracking-wide">🌐 www.angikya.com</p>
      </div>
    </div>
  );
}
