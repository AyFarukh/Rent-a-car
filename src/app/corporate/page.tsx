'use client';

import { motion } from 'framer-motion';
import { ArrowRight, BadgeCheck, BarChart3, Building2, CarFront, FileText, Headphones } from 'lucide-react';

const perks=[
 {icon:Building2,title:'Company Accounts',text:'Centralized billing, approved users and company-specific rental rules.'},
 {icon:FileText,title:'Monthly Invoicing',text:'Simple consolidated billing for recurring rentals and chauffeur services.'},
 {icon:CarFront,title:'Dedicated Fleet Options',text:'Reserve recurring vehicles for teams, executives and field operations.'},
 {icon:BarChart3,title:'Usage Reporting',text:'Track rental frequency, spend and booking activity by department or employee.'},
 {icon:Headphones,title:'Priority Support',text:'Dedicated contact channel for urgent changes, bookings and roadside coordination.'},
 {icon:BadgeCheck,title:'Verified Drivers',text:'Chauffeur options with documented verification and service history.'},
];

export default function CorporatePage(){return <main className="min-h-screen bg-background pt-24"><section className="section-shell py-16"><div className="grid gap-10 lg:grid-cols-[1.05fr_.95fr] lg:items-center"><motion.div initial={{opacity:0,x:-30}} animate={{opacity:1,x:0}}><p className="eyebrow">Corporate Mobility</p><h1 className="mt-3 text-4xl font-bold sm:text-6xl">Business travel without the fleet management headache.</h1><p className="mt-5 max-w-2xl text-white/55">DriveIstan corporate plans support employee rentals, airport transfers, recurring chauffeur services and multi-city travel with centralized control.</p><button className="cyan-button mt-7 gap-2">Request Corporate Account <ArrowRight size={17}/></button></motion.div><motion.div initial={{opacity:0,x:30}} animate={{opacity:1,x:0}} className="booking-card"><p className="eyebrow">For Teams</p><h2 className="mt-2 text-2xl font-semibold">Tell us what your company needs</h2><div className="mt-6 space-y-3"><input className="field-box w-full outline-none" placeholder="Company name"/><input className="field-box w-full outline-none" placeholder="Work email"/><input className="field-box w-full outline-none" placeholder="Phone number"/><textarea className="min-h-32 w-full rounded-xl border border-white/10 bg-black/25 p-4 text-sm outline-none focus:border-cyan/50" placeholder="Monthly rental needs, cities, vehicle types..."/></div><button className="cyan-button mt-5 w-full py-4">Submit Inquiry</button></motion.div></div></section><section className="section-shell pb-20"><div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">{perks.map(({icon:Icon,title,text},i)=><motion.div key={title} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.05}} className="rounded-2xl border border-white/10 bg-white/[.025] p-6"><div className="benefit-icon"><Icon size={22}/></div><h3 className="mt-5 text-lg font-semibold">{title}</h3><p className="mt-2 text-sm leading-6 text-white/50">{text}</p></motion.div>)}</div></section></main>}
