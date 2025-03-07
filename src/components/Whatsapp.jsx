import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Whatsapp = () => {
  const handleClick = () => {
    window.open('https://wa.me/9777668069', '_blank'); // Replace with your number
  };

  return (
    <motion.div
      onClick={handleClick}
      className="fixed bottom-6 right-6 text-white bg-green-500 rounded-full shadow-lg cursor-pointer z-50"
      // Animate the scale and apply a repeating effect
      animate={{
        scale: [1, 1.3, 1], // Repeats the scaling animation (back and forth)
      }}
      transition={{
        duration: 3, // Duration for one cycle of scaling
        ease: 'easeInOut', // Smooth transition for scaling
        repeat: Infinity, // Repeat the animation infinitely
        repeatType: 'loop', // Loop the animation
      }}
    >
      <FaWhatsapp size={40} />
    </motion.div>
  );
};

export default Whatsapp;
