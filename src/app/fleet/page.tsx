'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Fuel, Search, Settings2, SlidersHorizontal, Users } from 'lucide-react';

const vehicles = [
  { slug:'toyota-yaris', name:'Toyota Yaris', type:'Economy', price:'PKR 7,500', seats:5, fuel:'Petrol', image:'https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&w=1200&q=85' },
  { slug:'honda-civic', name:'Honda Civic', type:'Sedan', price:'PKR 10,000', seats:5, fuel:'Petrol', image:'https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&w=1200&q=85' },
  { slug:'kia-sportage', name:'Kia Sportage', type:'SUV', price:'PKR 14,500', seats:5, fuel:'Petrol', image:'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1200&q=85' },
  { slug:'toyota-fortuner', name:'Toyota Fortuner', type:'Premium SUV', price:'PKR 20,000', seats:7, fuel:'Diesel', image:'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=85' },
  { slug:'mercedes-e-class', name:'Mercedes E-Class', type:'Luxury', price:'PKR 30,000', seats:5, fuel:'Petrol', image:'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=85' },
  { slug:'toyota-corolla', name:'Toyota Corolla', type:'Sedan', price:'PKR 9,000', seats:5, fuel:'Petrol', image:'https://images.unsplash.com/photo-1623869675781-80aa31012a5a?auto=format&fit=crop&w=1200&q=85' },
];

export default function FleetPage(){
  return <main className="min-h-screen bg-background pt-24">
    <section className="section-shell py-12">
      <motion.div initial={{opacity:0,y:24}} animate={{opacity:1,y:0}}>
        <p className="eyebrow">DriveIstan Fleet</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">Find the right car for every road.</h1>
        <p className="mt-5 max-w-2xl text-white/55">Economy cars for city commutes, premium SUVs for northern routes, and chauffeur-ready luxury vehicles for business travel.</p>
      </motion.div>
      <div className="mt-10 grid gap-4 rounded-2xl border border-white/10 bg-white/[.03] p-4 lg:grid-cols-[1fr_auto_auto]">
        <div className="field-box"><Search size={17} className="text-cyan"/><input className="w-full bg-transparent outline-none" placeholder="Search Toyota, Honda, SUV..."/></div>
        <button className="outline-button gap-2"><SlidersHorizontal size={17}/> Filters</button>
        <button className="cyan-button">Search Fleet</button>
      </div>
    </section>
    <section className="section-shell pb-20">
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {vehicles.map((v,i)=><motion.article key={v.slug} initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.05}} whileHover={{y:-8}} className="fleet-card group">
          <div className="relative h-64 overflow-hidden"><Image src={v.image} alt={v.name} fill className="object-cover transition duration-700 group-hover:scale-110"/></div>
          <div className="p-5"><div className="flex items-start justify-between gap-4"><div><span className="text-xs uppercase tracking-[.18em] text-cyan">{v.type}</span><h2 className="mt-1 text-xl font-semibold">{v.name}</h2></div><div className="text-right"><strong className="text-cyan">{v.price}</strong><span className="block text-xs text-white/40">per day</span></div></div>
          <div className="mt-4 flex gap-4 text-xs text-white/45"><span className="flex items-center gap-1"><Users size={14}/>{v.seats} seats</span><span className="flex items-center gap-1"><Settings2 size={14}/>Auto</span><span className="flex items-center gap-1"><Fuel size={14}/>{v.fuel}</span></div>
          <Link href={`/fleet/${v.slug}`} className="card-button mt-5">View Details <ArrowRight size={15}/></Link></div>
        </motion.article>)}
      </div>
    </section>
  </main>
}
