'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Phone, Clock3, Car } from 'lucide-react';

const branches=[
 {slug:'lahore',city:'Lahore',name:'Gulberg Branch',address:'Main Boulevard Gulberg III, Lahore',phone:'+92 42 111 123 456',cars:25},
 {slug:'islamabad',city:'Islamabad',name:'Airport Branch',address:'Islamabad International Airport',phone:'+92 51 111 789 456',cars:18},
 {slug:'karachi',city:'Karachi',name:'Saddar Branch',address:'Saddar, Karachi',phone:'+92 21 111 321 654',cars:32},
 {slug:'peshawar',city:'Peshawar',name:'Cantt Branch',address:'Peshawar Cantt',phone:'+92 91 111 987 321',cars:14},
];

export default function LocationsPage(){
 return <main className="min-h-screen bg-background pt-24">
   <section className="section-shell py-14"><motion.p initial={{opacity:0,y:15}} animate={{opacity:1,y:0}} className="eyebrow">Pakistan Branch Network</motion.p><motion.h1 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:.08}} className="mt-3 max-w-4xl text-4xl font-bold sm:text-6xl">Pick up your car from major cities across Pakistan.</motion.h1><p className="mt-5 max-w-2xl text-white/55">Airport pickups, city branches and inter-city drop-off support from our expanding rental network.</p></section>
   <section className="section-shell pb-10">
     <div className="map-panel min-h-[560px]">
       <div className="map-grid"/>
       <svg viewBox="0 0 700 700" className="absolute inset-0 h-full w-full p-10" aria-label="Stylized map of Pakistan">
         <defs><linearGradient id="pkFill" x1="0" x2="1"><stop offset="0" stopColor="#07131b"/><stop offset="1" stopColor="#0a2029"/></linearGradient><filter id="glow"><feGaussianBlur stdDeviation="4" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>
         <motion.path initial={{pathLength:0,opacity:.2}} animate={{pathLength:1,opacity:1}} transition={{duration:2,ease:'easeInOut'}} d="M335 52 L395 81 L431 132 L480 156 L501 211 L470 249 L500 300 L466 354 L486 400 L451 446 L457 492 L419 533 L390 594 L348 635 L306 608 L273 560 L236 528 L224 480 L186 436 L177 386 L145 342 L162 293 L193 260 L205 213 L247 180 L268 132 L303 105 Z" fill="url(#pkFill)" stroke="#00F0FF" strokeWidth="3" filter="url(#glow)"/>
         <motion.path initial={{pathLength:0}} animate={{pathLength:1}} transition={{duration:2.4,delay:.4}} d="M278 230 C330 250 370 280 414 322 C375 350 348 408 315 500" fill="none" stroke="rgba(0,240,255,.38)" strokeWidth="2" strokeDasharray="8 8"/>
       </svg>
       <CityDot left="58%" top="24%" city="Islamabad"/><CityDot left="62%" top="48%" city="Lahore"/><CityDot left="42%" top="75%" city="Karachi"/><CityDot left="46%" top="29%" city="Peshawar"/>
       <div className="branch-card"><span>Pakistan Network</span><strong>4</strong><small>Live branch hubs</small><div className="mt-3 text-xs text-white/50">Lahore · Islamabad · Karachi · Peshawar</div></div>
     </div>
   </section>
   <section className="section-shell py-14"><div className="grid gap-5 md:grid-cols-2">{branches.map((b,i)=><motion.article id={b.slug} key={b.name} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.05}} whileHover={{y:-5}} className="scroll-mt-28 rounded-2xl border border-white/10 bg-white/[.025] p-6"><div className="flex items-start justify-between gap-4"><div><span className="text-xs uppercase tracking-[.18em] text-cyan">{b.city}</span><h2 className="mt-1 text-xl font-semibold">{b.name}</h2></div><div className="rounded-xl bg-cyan/10 p-3 text-cyan"><MapPin size={20}/></div></div><div className="mt-5 space-y-3 text-sm text-white/55"><p className="flex gap-2"><MapPin size={16}/>{b.address}</p><p className="flex gap-2"><Phone size={16}/>{b.phone}</p><p className="flex gap-2"><Clock3 size={16}/>Open daily · 08:00 AM to 10:00 PM</p><p className="flex gap-2"><Car size={16}/>{b.cars}+ vehicles available</p></div><div className="mt-6 flex flex-wrap gap-3"><Link href={`/fleet?pickup=${encodeURIComponent(b.city+', Pakistan')}`} className="outline-button gap-2">View Branch Fleet <ArrowRight size={15}/></Link><a href={`tel:${b.phone.replace(/\s/g,'')}`} className="cyan-button gap-2">Call Branch <Phone size={15}/></a></div></motion.article>)}</div></section>
 </main>
}

function CityDot({left,top,city}:{left:string;top:string;city:string}){return <motion.div initial={{scale:0}} animate={{scale:1}} transition={{type:'spring'}} className="absolute z-10" style={{left,top}}><span className="pulse-dot block"/><strong className="mt-2 block text-sm">{city}</strong></motion.div>}
