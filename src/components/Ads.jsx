import { motion } from "framer-motion";

export default function ContactUs() {
  return (
    <div className="relative flex items-center justify-center min-h-[0px] p-4 bg-gradient-to-r from-pink-500 via-pink-400 to-pink-300 text-white rounded-lg shadow-md overflow-hidden">
      {/* Animated Twinkling Stars */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-[4px] h-[4px] bg-white rounded-full opacity-70"
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
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm sm:text-base">
        <p className="font-semibold">📞 +91 98765 43210</p>
        <p className="font-semibold">📧 contact@angikya.com</p>
        <p className="font-semibold">🌐 www.angikya.com</p>
      </div>
    </div>
  );
}
