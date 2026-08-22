'use client';

import { motion } from 'framer-motion';
import { BadgeCheck, Headphones, MapPinned, ShieldCheck, Sparkles, Users } from 'lucide-react';

const values=[
 {icon:ShieldCheck,title:'Trust first',text:'Verified vehicles, clear pricing and documented customer verification.'},
 {icon:Sparkles,title:'Premium experience',text:'A polished booking experience across web, mobile and branch operations.'},
 {icon:Headphones,title:'Always available',text:'Support for bookings, roadside help and rental changes around the clock.'},
 {icon:MapPinned,title:'Built for Pakistan',text:'City branches, airport pickup and inter-city rental workflows designed for local travel.'},
];

export default function AboutPage(){return <main className="min-h-screen bg-background pt-24"><section className="section-shell py-16"><div className="grid gap-10 lg:grid-cols-2 lg:items-center"><motion.div initial={{opacity:0,x:-30}} animate={{opacity:1,x:0}}><p className="eyebrow">About DriveIstan</p><h1 className="mt-3 text-4xl font-bold sm:text-6xl">A smarter way to rent, drive and move across Pakistan.</h1><p className="mt-6 max-w-xl leading-8 text-white/55">DriveIstan is designed as a modern mobility platform for self-drive rentals, chauffeur services and corporate transportation. The goal is simple: make vehicle booking reliable, transparent and easy to manage from any device.</p></motion.div><motion.div initial={{opacity:0,x:30}} animate={{opacity:1,x:0}} className="grid grid-cols-2 gap-4"><Stat n="10K+" t="Customers"/><Stat n="2.5K+" t="Fleet records"/><Stat n="15+" t="Cities planned"/><Stat n="99%" t="Service target"/></motion.div></div></section><section className="section-shell pb-20"><div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">{values.map(({icon:Icon,title,text},i)=><motion.article key={title} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.06}} className="rounded-3xl border border-white/10 bg-white/[.025] p-6"><div className="benefit-icon"><Icon size={22}/></div><h2 className="mt-5 text-lg font-semibold">{title}</h2><p className="mt-3 text-sm leading-6 text-white/50">{text}</p></motion.article>)}</div></section></main>}

function Stat({n,t}:{n:string;t:string}){return <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[.05] to-white/[.015] p-7"><strong className="text-3xl text-cyan">{n}</strong><span className="mt-2 block text-sm text-white/45">{t}</span></div>}
