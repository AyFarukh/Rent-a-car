'use client';

import Link from 'next/link';
import { ArrowRight, Facebook, Instagram, MessageCircle, Youtube } from 'lucide-react';

const whatsappHref = 'https://wa.me/923001234567?text=Hi%20DriveIstan%2C%20I%20want%20to%20book%20a%20car.';

export default function SiteFooter(){
  return <footer className="footer-shell mt-16">
    <div className="section-shell grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-5">
      <div>
        <Link href="/" className="brand-mark text-2xl font-extrabold">drive<span>i</span>stan</Link>
        <p className="mt-4 max-w-xs text-sm leading-6 text-white/50">Pakistan&apos;s premium self-drive and chauffeur rental platform with verified vehicles, transparent pricing and 24/7 support.</p>
        <div className="mt-5 flex gap-3 text-white/55"><Facebook size={18}/><Instagram size={18}/><Youtube size={18}/></div>
      </div>
      <div><h4 className="font-semibold">Company</h4><div className="mt-4 space-y-3 text-sm text-white/50"><Link href="/about" className="block hover:text-cyan">About Us</Link><Link href="/corporate" className="block hover:text-cyan">Corporate</Link><Link href="/blog" className="block hover:text-cyan">Blog</Link><Link href="/locations" className="block hover:text-cyan">Locations</Link></div></div>
      <div><h4 className="font-semibold">Explore</h4><div className="mt-4 space-y-3 text-sm text-white/50"><Link href="/fleet" className="block hover:text-cyan">Fleet</Link><Link href="/services" className="block hover:text-cyan">Services</Link><Link href="/locations" className="block hover:text-cyan">Branches</Link><a href={whatsappHref} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-cyan"><MessageCircle size={15}/> WhatsApp</a></div></div>
      <div><h4 className="font-semibold">Support</h4><div className="mt-4 space-y-3 text-sm text-white/50"><span className="block">Help Center</span><span className="block">Terms & Conditions</span><span className="block">Privacy Policy</span><span className="block">Cancellation Policy</span></div></div>
      <div><h4 className="font-semibold">Newsletter</h4><p className="mt-4 text-sm text-white/50">Offers, road-trip guides and fleet updates.</p><div className="newsletter mt-4"><input aria-label="Email" placeholder="Enter your email"/><button aria-label="Subscribe"><ArrowRight size={18}/></button></div></div>
    </div>
    <div className="section-shell flex flex-col gap-3 border-t border-white/8 py-5 text-xs text-white/40 sm:flex-row sm:justify-between"><span>© 2026 DriveIstan. All rights reserved.</span><span>Secure booking · Verified fleet · 24/7 support</span></div>
  </footer>;
}
