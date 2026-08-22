'use client';

import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Phone, Clock3, Car } from 'lucide-react';

const branches=[
 {city:'Lahore',name:'Gulberg Branch',address:'Main Boulevard Gulberg III, Lahore',phone:'+92 42 111 123 456',cars:25},
 {city:'Islamabad',name:'Airport Branch',address:'Islamabad International Airport',phone:'+92 51 111 789 456',cars:18},
 {city:'Karachi',name:'Saddar Branch',address:'Saddar, Karachi',phone:'+92 21 111 321 654',cars:32},
 {city:'Peshawar',name:'Cantt Branch',address:'Peshawar Cantt',phone:'+92 91 111 987 321',cars:14},
];

export default function LocationsPage(){
 return <main className="min-h-screen bg-background pt-24">
   <section className="section-shell py-14"><motion.p initial={{opacity:0,y:15}} animate={{opacity:1,y:0}} className="eyebrow">Pakistan Branch Network</motion.p><motion.h1 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:.08}} className="mt-3 max-w-4xl text-4xl font-bold sm:text-6xl">Pick up your car from major cities across Pakistan.</motion.h1><p className="mt-5 max-w-2xl text-white/55">Airport pickups, city branches and inter-city drop-off support from our expanding rental network.</p></section>
   <section className="section-shell pb-10"><div className="map-panel min-h-[520px]"><div className="map-grid"/><div className="absolute inset-x-[18%] top-[16%] h-[62%] rounded-[45%] border border-cyan/20 bg-cyan/[.02]"/><CityDot left="57%" top="24%" city="Islamabad"/><CityDot left="62%" top="49%" city="Lahore"/><CityDot left="31%" top="70%" city="Karachi"/><CityDot left="43%" top="29%" city="Peshawar"/></div></section>
   <section className="section-shell py-14"><div className="grid gap-5 md:grid-cols-2">{branches.map((b,i)=><motion.article key={b.name} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.05}} whileHover={{y:-5}} className="rounded-2xl border border-white/10 bg-white/[.025] p-6"><div className="flex items-start justify-between gap-4"><div><span className="text-xs uppercase tracking-[.18em] text-cyan">{b.city}</span><h2 className="mt-1 text-xl font-semibold">{b.name}</h2></div><div className="rounded-xl bg-cyan/10 p-3 text-cyan"><MapPin size={20}/></div></div><div className="mt-5 space-y-3 text-sm text-white/55"><p className="flex gap-2"><MapPin size={16}/>{b.address}</p><p className="flex gap-2"><Phone size={16}/>{b.phone}</p><p className="flex gap-2"><Clock3 size={16}/>Open daily · 08:00 AM to 10:00 PM</p><p className="flex gap-2"><Car size={16}/>{b.cars}+ vehicles available</p></div><button className="outline-button mt-6 gap-2">View Branch <ArrowRight size={15}/></button></motion.article>)}</div></section>
 </main>
}

function CityDot({left,top,city}:{left:string;top:string;city:string}){return <motion.div initial={{scale:0}} animate={{scale:1}} transition={{type:'spring'}} className="absolute z-10" style={{left,top}}><span className="pulse-dot block"/><strong className="mt-2 block text-sm">{city}</strong></motion.div>}
