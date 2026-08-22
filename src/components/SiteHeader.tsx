'use client';

import Link from 'next/link';
import { Menu, MessageCircle, Phone, X } from 'lucide-react';
import { useState } from 'react';

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const nav = [
    ['/fleet', 'Fleet'],
    ['/services', 'Services'],
    ['/locations', 'Locations'],
    ['/corporate', 'Corporate'],
    ['/blog', 'Blog'],
    ['/about', 'About Us'],
  ] as const;

  return (
    <header className="glass fixed inset-x-0 top-0 z-[100] border-x-0 border-t-0">
      <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between px-5 lg:px-8">
        <Link href="/" className="brand-mark text-2xl font-extrabold tracking-tight">drive<span>i</span>stan</Link>
        <nav className="hidden items-center gap-8 text-sm text-white/75 lg:flex">
          {nav.map(([href, label]) => <Link key={href} href={href} className="nav-link">{label}</Link>)}
        </nav>
        <div className="flex items-center gap-3">
          <a href="tel:+923001234567" className="hidden items-center gap-2 text-xs text-white/70 xl:flex"><Phone size={16} className="text-cyan"/><div><strong className="block text-sm text-white">+92 300 1234567</strong><span>24/7 Support</span></div></a>
          <Link href="/fleet" className="cyan-button hidden sm:inline-flex">Book Now</Link>
          <a href="https://wa.me/923001234567?text=Hi%20DriveIstan%2C%20I%20want%20to%20book%20a%20car" target="_blank" rel="noreferrer" aria-label="WhatsApp" className="header-whatsapp"><MessageCircle size={20}/></a>
          <button onClick={() => setOpen(v => !v)} aria-label="Toggle navigation" className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/5 lg:hidden">{open ? <X size={20}/> : <Menu size={20}/>}</button>
        </div>
      </div>
      {open && <div className="border-t border-white/10 bg-[#08090cf2] px-5 py-4 backdrop-blur-xl lg:hidden"><nav className="mx-auto flex max-w-[1440px] flex-col gap-2">{nav.map(([href,label]) => <Link key={href} href={href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 text-white/80 hover:bg-white/5 hover:text-cyan">{label}</Link>)}<Link href="/fleet" onClick={() => setOpen(false)} className="cyan-button mt-2">Book Now</Link></nav></div>}
    </header>
  );
}
