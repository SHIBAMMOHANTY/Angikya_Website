import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const Whatsapp = () => {
  const handleClick = () => {
    
    window.open('https://wa.me/9319489404', '_blank'); // Replace with your number
  };

  return (
    <div
      onClick={handleClick}
      className="fixed bottom-6 right-6  text-white  bg-green-500 rounded-full shadow-lg cursor-pointer  transition-all z-50"
    >
      <FaWhatsapp size={40} />
    </div>
  );
};

export default Whatsapp;
