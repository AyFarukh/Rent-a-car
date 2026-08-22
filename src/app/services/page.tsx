'use client';

import { motion } from 'framer-motion';
import { ArrowRight, BriefcaseBusiness, Car, Headphones, MapPinned, ShieldCheck, UserRoundCheck } from 'lucide-react';

const services=[
 {icon:Car,title:'Self-Drive Rentals',text:'Flexible daily, weekly and monthly rentals with transparent pricing and verified vehicles.'},
 {icon:UserRoundCheck,title:'Chauffeur Service',text:'Professional drivers for airport transfers, business travel, weddings and inter-city trips.'},
 {icon:BriefcaseBusiness,title:'Corporate Mobility',text:'Dedicated company plans, monthly invoicing, assigned account support and fleet options.'},
 {icon:MapPinned,title:'Outstation Travel',text:'Comfortable vehicles and driver packages for northern areas and long-distance journeys.'},
 {icon:ShieldCheck,title:'Verified & Insured Fleet',text:'Inspection-first fleet operations, verification workflows and roadside support coverage.'},
 {icon:Headphones,title:'24/7 Support',text:'Booking help, roadside coordination and customer assistance whenever your journey needs it.'},
];

export default function ServicesPage(){return <main className="min-h-screen bg-background pt-24"><section className="section-shell py-14"><p className="eyebrow">DriveIstan Services</p><h1 className="mt-3 max-w-4xl text-4xl font-bold sm:text-6xl">Mobility built around how Pakistan travels.</h1><p className="mt-5 max-w-2xl text-white/55">From quick city rentals to chauffeur-driven inter-city travel, every service is designed to be simple to book and easy to manage.</p></section><section className="section-shell pb-20"><div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">{services.map(({icon:Icon,title,text},i)=><motion.article key={title} initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.06}} whileHover={{y:-8,scale:1.01}} className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[.04] to-white/[.015] p-7"><div className="benefit-icon"><Icon size={24}/></div><h2 className="mt-6 text-xl font-semibold">{title}</h2><p className="mt-3 leading-7 text-white/52">{text}</p><button className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan">Learn more <ArrowRight size={15}/></button></motion.article>)}</div></section></main>}
