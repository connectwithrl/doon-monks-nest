"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsappButton() {
  const handleClick = () => {
    window.open(
      "https://wa.me/918439606941?text=Hi%2C%20I%E2%80%99d%20like%20to%20book%20a%20stay%20at%20DoonMonks.",
      "_blank"
    );
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className="w-6 h-6" />
    </button>
  );
}
