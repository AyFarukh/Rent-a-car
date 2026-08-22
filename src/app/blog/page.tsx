'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, CalendarDays, Clock3 } from 'lucide-react';

const posts=[
 {slug:'best-cars-for-northern-pakistan-road-trip',title:'Best cars for a northern Pakistan road trip',date:'20 Aug 2026',time:'6 min read',image:'https://images.unsplash.com/photo-1464278533981-50106e6176b1?auto=format&fit=crop&w=1200&q=85'},
 {slug:'self-drive-vs-chauffeur-pakistan',title:'Self-drive vs chauffeur: which rental fits your trip?',date:'16 Aug 2026',time:'5 min read',image:'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=85'},
 {slug:'documents-needed-to-rent-car-in-pakistan',title:'What documents do you need to rent a car in Pakistan?',date:'10 Aug 2026',time:'4 min read',image:'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=85'},
];

export default function BlogPage(){return <main className="min-h-screen bg-background pt-24"><section className="section-shell py-14"><p className="eyebrow">DriveIstan Journal</p><h1 className="mt-3 max-w-4xl text-4xl font-bold sm:text-6xl">Travel ideas, rental guides and road-trip planning.</h1><p className="mt-5 max-w-2xl text-white/55">Helpful information for customers booking city rentals, airport transfers and long-distance journeys.</p></section><section className="section-shell pb-20"><div className="grid gap-6 lg:grid-cols-3">{posts.map((p,i)=><motion.article key={p.title} initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.06}} whileHover={{y:-8}} className="overflow-hidden rounded-3xl border border-white/10 bg-white/[.025]"><Link href={`/blog/${p.slug}`} className="block"><div className="relative h-56"><Image src={p.image} alt={p.title} fill className="object-cover transition duration-700 hover:scale-105"/></div></Link><div className="p-6"><div className="flex gap-4 text-xs text-white/40"><span className="flex items-center gap-1"><CalendarDays size={13}/>{p.date}</span><span className="flex items-center gap-1"><Clock3 size={13}/>{p.time}</span></div><h2 className="mt-4 text-xl font-semibold leading-7"><Link href={`/blog/${p.slug}`} className="transition hover:text-cyan">{p.title}</Link></h2><Link href={`/blog/${p.slug}`} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan">Read article <ArrowRight size={15}/></Link></div></motion.article>)}</div></section></main>}
