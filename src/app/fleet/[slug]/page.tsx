'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, CalendarDays, CheckCircle2, Fuel, MapPin, ShieldCheck, Settings2, Star, Users } from 'lucide-react';

const car = {
  name:'Toyota Fortuner', price:20000, weekly:126000, monthly:480000, seats:7, fuel:'Diesel', transmission:'Automatic', rating:'4.9',
  gallery:[
    'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1600&q=90',
    'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1600&q=90',
    'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1600&q=90',
    'https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=1600&q=90'
  ]
};

const addons = [
  {key:'chauffeur', label:'Chauffeur Service', price:4000, perDay:true},
  {key:'outcity', label:'Out-of-city Surcharge', price:2500, perDay:false},
  {key:'babyseat', label:'Baby Safety Seat', price:1000, perDay:false},
  {key:'meal', label:'Driver Meal Allowance', price:1500, perDay:true},
];

export default function VehicleDetailPage(){
  const [activeImage,setActiveImage] = useState(0);
  const [plan,setPlan] = useState<'daily'|'weekly'|'monthly'>('daily');
  const [pickup,setPickup] = useState('Islamabad Airport');
  const [pickupDate,setPickupDate] = useState('2026-08-25T10:00');
  const [returnDate,setReturnDate] = useState('2026-08-28T18:00');
  const [selected,setSelected] = useState<Record<string,boolean>>({});

  const days = useMemo(()=>Math.max(1,Math.ceil((new Date(returnDate).getTime()-new Date(pickupDate).getTime())/86400000)),[pickupDate,returnDate]);
  const base = plan==='daily' ? car.price*days : plan==='weekly' ? car.weekly*Math.max(1,Math.ceil(days/7)) : car.monthly*Math.max(1,Math.ceil(days/30));
  const addonsTotal = addons.reduce((sum,a)=>sum+(selected[a.key] ? a.price*(a.perDay?days:1) : 0),0);
  const total = base+addonsTotal;
  const bookingHref = `/booking?vehicle=toyota-fortuner&pickup=${encodeURIComponent(pickup)}&pickupDate=${encodeURIComponent(pickupDate)}&returnDate=${encodeURIComponent(returnDate)}&plan=${plan}&addons=${encodeURIComponent(Object.keys(selected).filter(k=>selected[k]).join(','))}`;

  return <main className="min-h-screen bg-background pt-24">
    <section className="section-shell py-8">
      <Link href="/fleet" className="inline-flex items-center gap-2 text-sm text-white/55 transition hover:text-cyan"><ArrowLeft size={16}/>Back to fleet</Link>
      <div className="mt-6 grid gap-8 xl:grid-cols-[1.25fr_.75fr]">
        <motion.div initial={{opacity:0,x:-24}} animate={{opacity:1,x:0}} className="space-y-4">
          <div className="relative h-[520px] overflow-hidden rounded-3xl border border-white/10">
            <Image key={activeImage} src={car.gallery[activeImage]} alt={car.name} fill priority className="object-cover"/>
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent"/>
            <button onClick={()=>setActiveImage((activeImage+1)%car.gallery.length)} className="absolute right-5 top-5 rounded-full border border-cyan/40 bg-black/60 px-4 py-2 text-sm backdrop-blur">360° View</button>
            <div className="absolute bottom-5 left-5"><span className="rounded-full bg-cyan px-3 py-1 text-xs font-bold text-black">Premium SUV</span><h1 className="mt-3 text-4xl font-bold">{car.name}</h1></div>
          </div>
          <div className="grid grid-cols-4 gap-3">{car.gallery.map((img,i)=><motion.button key={img} type="button" onClick={()=>setActiveImage(i)} whileHover={{y:-4}} className={`relative h-24 overflow-hidden rounded-xl border ${activeImage===i?'border-cyan':'border-white/10'}`}><Image src={img} alt={`${car.name} ${i+1}`} fill className="object-cover"/></motion.button>)}</div>
        </motion.div>

        <motion.aside initial={{opacity:0,x:24}} animate={{opacity:1,x:0}} className="booking-card h-fit xl:sticky xl:top-24">
          <div className="flex items-start justify-between"><div><p className="text-sm text-white/50">Starting from</p><div className="mt-1 text-3xl font-bold text-cyan">PKR {car.price.toLocaleString()}</div><span className="text-xs text-white/40">per day</span></div><div className="flex items-center gap-1 rounded-full bg-gold/10 px-3 py-1 text-gold"><Star size={14} fill="currentColor"/>{car.rating}</div></div>
          <div className="mt-6 grid grid-cols-3 gap-2 rounded-xl bg-black/25 p-1">{(['daily','weekly','monthly'] as const).map(p=><button key={p} onClick={()=>setPlan(p)} className={`rounded-lg px-3 py-2 text-sm ${plan===p?'bg-white/10 text-white':'text-white/55'}`}>{p[0].toUpperCase()+p.slice(1)}</button>)}</div>
          <div className="mt-5 space-y-3">
            <label className="field-box"><MapPin size={17} className="text-cyan"/><select value={pickup} onChange={e=>setPickup(e.target.value)} className="w-full bg-transparent outline-none"><option className="bg-[#0b0f16]">Islamabad Airport</option><option className="bg-[#0b0f16]">Gulberg, Lahore</option><option className="bg-[#0b0f16]">Saddar, Karachi</option><option className="bg-[#0b0f16]">Peshawar Cantt</option></select></label>
            <label className="field-box"><CalendarDays size={17} className="text-cyan"/><input type="datetime-local" value={pickupDate} onChange={e=>setPickupDate(e.target.value)} className="w-full bg-transparent outline-none [color-scheme:dark]"/></label>
            <label className="field-box"><CalendarDays size={17} className="text-cyan"/><input type="datetime-local" value={returnDate} min={pickupDate} onChange={e=>setReturnDate(e.target.value)} className="w-full bg-transparent outline-none [color-scheme:dark]"/></label>
          </div>
          <div className="mt-6 space-y-3 text-sm">{addons.map(a=><label key={a.key} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[.025] p-3"><input type="checkbox" checked={!!selected[a.key]} onChange={e=>setSelected(s=>({...s,[a.key]:e.target.checked}))} className="accent-cyan"/><span>{a.label} · PKR {a.price.toLocaleString()}{a.perDay?'/day':''}</span></label>)}</div>
          <div className="mt-6 border-t border-white/10 pt-5"><div className="flex justify-between text-sm text-white/50"><span>Estimated total</span><span>{days} day{days===1?'':'s'}</span></div><div className="mt-2 flex items-end justify-between gap-4"><strong className="text-2xl">PKR {total.toLocaleString()}</strong><span className="text-xs text-white/40">Taxes calculated at checkout</span></div></div>
          <Link href={bookingHref} className="cyan-button mt-6 w-full gap-2 py-4">Continue Booking <ArrowRight size={17}/></Link>
        </motion.aside>
      </div>
    </section>

    <section className="section-shell py-14"><div className="grid gap-5 md:grid-cols-4">{[[Users,`${car.seats} Seats`],[Settings2,car.transmission],[Fuel,car.fuel],[ShieldCheck,'Fully Insured']].map(([Icon,label])=>{const I=Icon as typeof Users;return <div key={String(label)} className="benefit-item rounded-2xl border border-white/10"><div className="benefit-icon"><I size={22}/></div><strong>{String(label)}</strong></div>})}</div></section>
    <section className="section-shell pb-20"><div className="grid gap-8 lg:grid-cols-2"><div className="rounded-3xl border border-white/10 bg-white/[.025] p-7"><p className="eyebrow">Included</p><h2 className="section-title">Rental essentials</h2><div className="mt-6 grid gap-3 sm:grid-cols-2">{['Verified vehicle','Basic insurance','24/7 roadside support','Airport handover option','Clean & sanitized cabin','Transparent pricing'].map(x=><div key={x} className="flex items-center gap-2 text-sm text-white/65"><CheckCircle2 size={16} className="text-cyan"/>{x}</div>)}</div></div><div className="rounded-3xl border border-white/10 bg-white/[.025] p-7"><p className="eyebrow">Requirements</p><h2 className="section-title">Before you drive</h2><div className="mt-6 space-y-3 text-sm text-white/60"><p>Valid CNIC or passport</p><p>Valid driving license</p><p>Security deposit depending on vehicle category</p><p>Minimum driver age may apply for premium vehicles</p></div></div></div></section>
  </main>
}
