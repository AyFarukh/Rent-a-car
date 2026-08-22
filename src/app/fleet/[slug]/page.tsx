'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, CalendarDays, CheckCircle2, Fuel, MapPin, ShieldCheck, Settings2, Star, Users } from 'lucide-react';

const car = {
  name:'Toyota Fortuner', price:20000, weekly:126000, monthly:480000, seats:7, fuel:'Diesel', transmission:'Automatic', rating:'4.9',
  hero:'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1600&q=90',
  gallery:[
    'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=900&q=85',
    'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=900&q=85',
    'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=900&q=85',
    'https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=900&q=85'
  ]
};

export default function VehicleDetailPage(){
  return <main className="min-h-screen bg-background pt-24">
    <section className="section-shell py-8">
      <Link href="/fleet" className="inline-flex items-center gap-2 text-sm text-white/55 transition hover:text-cyan"><ArrowLeft size={16}/>Back to fleet</Link>
      <div className="mt-6 grid gap-8 xl:grid-cols-[1.25fr_.75fr]">
        <motion.div initial={{opacity:0,x:-24}} animate={{opacity:1,x:0}} className="space-y-4">
          <div className="relative h-[520px] overflow-hidden rounded-3xl border border-white/10"><Image src={car.hero} alt={car.name} fill priority className="object-cover"/><div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent"/><button className="absolute right-5 top-5 rounded-full border border-cyan/40 bg-black/60 px-4 py-2 text-sm backdrop-blur">360° View</button><div className="absolute bottom-5 left-5"><span className="rounded-full bg-cyan px-3 py-1 text-xs font-bold text-black">Premium SUV</span><h1 className="mt-3 text-4xl font-bold">{car.name}</h1></div></div>
          <div className="grid grid-cols-4 gap-3">{car.gallery.map((img,i)=><motion.div key={img} whileHover={{y:-4}} className="relative h-24 overflow-hidden rounded-xl border border-white/10"><Image src={img} alt={`${car.name} ${i+1}`} fill className="object-cover"/></motion.div>)}</div>
        </motion.div>

        <motion.aside initial={{opacity:0,x:24}} animate={{opacity:1,x:0}} className="booking-card h-fit xl:sticky xl:top-24">
          <div className="flex items-start justify-between"><div><p className="text-sm text-white/50">Starting from</p><div className="mt-1 text-3xl font-bold text-cyan">PKR {car.price.toLocaleString()}</div><span className="text-xs text-white/40">per day</span></div><div className="flex items-center gap-1 rounded-full bg-gold/10 px-3 py-1 text-gold"><Star size={14} fill="currentColor"/>{car.rating}</div></div>
          <div className="mt-6 grid grid-cols-3 gap-2 rounded-xl bg-black/25 p-1"><button className="rounded-lg bg-white/10 px-3 py-2 text-sm">Daily</button><button className="rounded-lg px-3 py-2 text-sm text-white/55">Weekly</button><button className="rounded-lg px-3 py-2 text-sm text-white/55">Monthly</button></div>
          <div className="mt-5 space-y-3"><div className="field-box"><MapPin size={17} className="text-cyan"/>Islamabad Airport</div><div className="field-box"><CalendarDays size={17} className="text-cyan"/>25 Aug 2026 · 10:00 AM</div><div className="field-box"><CalendarDays size={17} className="text-cyan"/>28 Aug 2026 · 06:00 PM</div></div>
          <div className="mt-6 space-y-3 text-sm">{['Chauffeur Service · PKR 4,000/day','Out-of-city Surcharge · PKR 2,500','Baby Safety Seat · PKR 1,000','Driver Meal Allowance · PKR 1,500/day'].map(x=><label key={x} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[.025] p-3"><input type="checkbox" className="accent-cyan"/><span>{x}</span></label>)}</div>
          <div className="mt-6 border-t border-white/10 pt-5"><div className="flex justify-between text-sm text-white/50"><span>Estimated total</span><span>3 days</span></div><div className="mt-2 flex items-end justify-between"><strong className="text-2xl">PKR 60,000</strong><span className="text-xs text-white/40">Taxes calculated at checkout</span></div></div>
          <button className="cyan-button mt-6 w-full gap-2 py-4">Continue Booking <ArrowRight size={17}/></button>
        </motion.aside>
      </div>
    </section>

    <section className="section-shell py-14"><div className="grid gap-5 md:grid-cols-4">{[[Users,`${car.seats} Seats`],[Settings2,car.transmission],[Fuel,car.fuel],[ShieldCheck,'Fully Insured']].map(([Icon,label])=>{const I=Icon as typeof Users;return <div key={String(label)} className="benefit-item rounded-2xl border border-white/10"><div className="benefit-icon"><I size={22}/></div><strong>{String(label)}</strong></div>})}</div></section>
    <section className="section-shell pb-20"><div className="grid gap-8 lg:grid-cols-2"><div className="rounded-3xl border border-white/10 bg-white/[.025] p-7"><p className="eyebrow">Included</p><h2 className="section-title">Rental essentials</h2><div className="mt-6 grid gap-3 sm:grid-cols-2">{['Verified vehicle','Basic insurance','24/7 roadside support','Airport handover option','Clean & sanitized cabin','Transparent pricing'].map(x=><div key={x} className="flex items-center gap-2 text-sm text-white/65"><CheckCircle2 size={16} className="text-cyan"/>{x}</div>)}</div></div><div className="rounded-3xl border border-white/10 bg-white/[.025] p-7"><p className="eyebrow">Requirements</p><h2 className="section-title">Before you drive</h2><div className="mt-6 space-y-3 text-sm text-white/60"><p>Valid CNIC or passport</p><p>Valid driving license</p><p>Security deposit depending on vehicle category</p><p>Minimum driver age may apply for premium vehicles</p></div></div></div></section>
  </main>
}
