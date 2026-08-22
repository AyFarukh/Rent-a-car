import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp(){
  return <a aria-label="Chat on WhatsApp" href="https://wa.me/923001234567?text=Hi%20DriveIstan%2C%20I%20want%20to%20book%20a%20car" target="_blank" rel="noreferrer" className="floating-whatsapp"><MessageCircle size={26}/><span className="whatsapp-dot">1</span></a>;
}
