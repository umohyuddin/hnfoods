import { MessageCircle } from "lucide-react";

export function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/923041110915"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 h-14 w-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_8px_30px_-5px_rgba(37,211,102,0.6)] hover:scale-110 transition-transform"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
    </a>
  );
}
