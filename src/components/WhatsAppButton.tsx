
import { Phone } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "6281573635143"; // Indonesian format with country code
  const message = encodeURIComponent("Halo, saya ingin bertanya tentang Jeep Wisata Merapi.");
  
  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };
  
  return (
    <button 
      onClick={handleClick}
      className="whatsapp-button bg-green-500 hover:bg-green-600 text-white rounded-full p-3 shadow-lg flex items-center transition-transform hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      <Phone className="h-6 w-6" />
      <span className="ml-2 hidden md:inline">Chat with us</span>
    </button>
  );
};

export default WhatsAppButton;
