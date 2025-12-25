import { Phone, MessageCircle } from "lucide-react";

export default function FloatingContact() {
  const phoneNumber = "919918804522"; // WhatsApp (no +)
  const callNumber = "+919918804522"; // Call

  return (
    <>
      {/* 📞 CALL ICON (LEFT) */}
      <a
        href={`tel:${callNumber}`}
        className="
          fixed bottom-6 left-6 z-50
          w-14 h-14
          flex items-center justify-center
          bg-blue-600 text-white
          rounded-full shadow-lg
          animate-pulse
          hover:scale-110 transition
        "
        aria-label="Call Me"
        title="Call Me"
      >
        <Phone size={22} />
      </a>

      {/* 💬 WHATSAPP ICON (RIGHT) */}
      <a
        href={`https://wa.me/${phoneNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="
          fixed bottom-6 right-6 z-50
          w-14 h-14
          flex items-center justify-center
          bg-green-600 text-white
          rounded-full shadow-lg
          animate-pulse
          hover:scale-110 transition
        "
        aria-label="WhatsApp Me"
        title="WhatsApp Me"
      >
        <MessageCircle size={22} />
      </a>
    </>
  );
}
