'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle2,
  CreditCard,
  Fuel,
  Headphones,
  Heart,
  MapPin,
  Play,
  Settings2,
  ShieldCheck,
  Star,
  Users,
} from 'lucide-react';
import BookingSearch from '@/components/BookingSearch';
import HowItWorks from '@/components/HowItWorks';

const fleet = [
  { slug:'toyota-yaris', name: 'Toyota Yaris', badge: 'POPULAR', price: 'PKR 7,500', seats: 5, fuel: 'Petrol', image: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&w=1000&q=85' },
  { slug:'honda-civic', name: 'Honda Civic', badge: 'BEST SELLER', price: 'PKR 10,000', seats: 5, fuel: 'Petrol', image: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&w=1000&q=85' },
  { slug:'kia-sportage', name: 'Kia Sportage', badge: '', price: 'PKR 14,500', seats: 5, fuel: 'Petrol', image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1000&q=85' },
  { slug:'toyota-fortuner', name: 'Toyota Fortuner', badge: '', price: 'PKR 20,000', seats: 7, fuel: 'Diesel', image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1000&q=85' },
  { slug:'mercedes-e-class', name: 'Mercedes E-Class', badge: 'LUXURY', price: 'PKR 30,000', seats: 5, fuel: 'Petrol', image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1000&q=85' },
];

const benefits = [
  { icon: ShieldCheck, title: 'Verified Drivers', text: 'Background checked' },
  { icon: Headphones, title: '24/7 Roadside', text: 'Assistance' },
  { icon: CreditCard, title: 'Secure Payments', text: 'JazzCash, EasyPaisa' },
  { icon: CheckCircle2, title: 'CNIC Verified', text: 'Safe & secure' },
  { icon: ShieldCheck, title: 'Insurance Covered', text: 'Complete protection' },
];

const locations = [
  ['Gulberg, Lahore', '+92 42 111 123 456'],
  ['Islamabad Airport', '+92 51 111 789 456'],
  ['Saddar, Karachi', '+92 21 111 321 654'],
  ['Peshawar Cantt', '+92 91 111 987 321'],
];

const fadeUp = { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0 } };

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-background pt-[72px]">
      <section className="hero-stage relative">
        <video className="hero-video" autoPlay muted loop playsInline poster="https://images.unsplash.com/photo-1464278533981-50106e6176b1?auto=format&fit=crop&w=2200&q=90">
          <source src="https://cdn.coverr.co/videos/coverr-driving-in-the-mountains-1570/1080p.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay absolute inset-0" />
        <div className="hero-light absolute inset-0" />
        <div className="relative z-10 mx-auto grid min-h-[720px] max-w-[1440px] gap-12 px-5 py-16 lg:grid-cols-[1.1fr_.9fr] lg:items-center lg:px-8 xl:gap-20">
          <motion.div initial="hidden" animate="show" variants={{ hidden: {}, show: { transition: { staggerChildren: .1 } } }}>
            <motion.span variants={fadeUp} className="hero-pill">Pakistan-wide premium mobility</motion.span>
            <motion.h1 variants={fadeUp} className="hero-title mt-5 max-w-3xl text-5xl font-extrabold leading-[1.02] sm:text-6xl xl:text-7xl">Premium Car Rentals <span>Across Pakistan</span></motion.h1>
            <motion.p variants={fadeUp} className="mt-5 max-w-2xl text-base leading-7 text-white/72 sm:text-lg">Self-Drive & Chauffeur Services. Instant Booking, verified vehicles and support wherever the road takes you.</motion.p>
            <motion.div variants={fadeUp} className="mt-7 flex flex-wrap gap-6 text-sm">
              <TrustMini icon={ShieldCheck} label="Verified Fleet" sub="100% inspected"/>
              <TrustMini icon={CheckCircle2} label="Best Price" sub="Guaranteed"/>
              <TrustMini icon={Headphones} label="24/7 Support" sub="Always here"/>
            </motion.div>
            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
              <Link href="/fleet" className="cyan-button gap-2 px-6 py-3">Explore Fleet <ArrowRight size={18}/></Link>
              <a href="#how-it-works" className="outline-button gap-2 px-6 py-3">How It Works <Play size={16}/></a>
            </motion.div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 40, scale: .97 }} animate={{ opacity: 1, x: 0, scale: 1 }} transition={{ duration: .7, delay: .2 }}><BookingSearch /></motion.div>
        </div>
      </section>

      <section id="fleet" className="section-shell py-20">
        <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="mb-8 flex items-end justify-between">
          <div><p className="eyebrow">Featured Fleet</p><h2 className="section-title">Choose your perfect drive</h2></div>
          <Link href="/fleet" className="outline-button hidden md:inline-flex">View all vehicles <ArrowRight size={16}/></Link>
        </motion.div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">{fleet.map((vehicle, i) => <FleetCard key={vehicle.name} {...vehicle} index={i} />)}</div>
      </section>

      <section id="services" className="section-shell pb-14"><div className="benefit-bar">{benefits.map(({icon:Icon,title,text}) => <div key={title} className="benefit-item"><div className="benefit-icon"><Icon size={23}/></div><div><strong>{title}</strong><span>{text}</span></div></div>)}</div></section>

      <div id="how-it-works"><HowItWorks /></div>

      <section id="locations" className="section-shell py-16">
        <div className="grid gap-10 lg:grid-cols-[.65fr_1.35fr] lg:items-stretch">
          <motion.div initial={{opacity:0,x:-30}} whileInView={{opacity:1,x:0}} viewport={{once:true}}>
            <p className="eyebrow">Our Locations</p><h2 className="section-title">Rent across Pakistan</h2><p className="mt-4 max-w-lg leading-7 text-white/60">Multiple branches in major cities to serve you better. More locations coming soon.</p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">{locations.map(([name,phone]) => <div key={name} className="location-card"><MapPin size={18}/><div><strong>{name}</strong><span>{phone}</span></div><ArrowRight size={16}/></div>)}</div>
            <Link href="/locations" className="outline-button mt-5 gap-2">Explore all locations <ArrowRight size={16}/></Link>
          </motion.div>
          <motion.div initial={{opacity:0,x:30}} whileInView={{opacity:1,x:0}} viewport={{once:true}} className="map-panel">
            <div className="map-grid"/><div className="map-line line-a"/><div className="map-line line-b"/><div className="map-line line-c"/>
            <MapDot className="dot-isb" name="Islamabad" sub="Airport"/><MapDot className="dot-lhr" name="Lahore" sub="Gulberg"/><MapDot className="dot-khi" name="Karachi" sub="Saddar"/><MapDot className="dot-pew" name="Peshawar" sub="Cantt"/>
            <div className="branch-card"><span>Lahore - Gulberg</span><strong>25+</strong><small>Cars Available</small><div className="mt-3 flex items-center gap-1 text-gold"><Star size={15} fill="currentColor"/> 4.8</div><Link href="/locations" className="outline-button mt-4 w-full justify-center">View Branch <ArrowRight size={15}/></Link></div>
          </motion.div>
        </div>
      </section>

      <section className="section-shell pb-16"><div className="stats-bar">{[['10K+','Happy Customers'],['2500+','Cars in Fleet'],['15+','Cities Covered'],['99%','Satisfaction Rate']].map(([n,t]) => <div key={t}><strong>{n}</strong><span>{t}</span></div>)}</div></section>

      <footer className="footer-shell"><div className="section-shell grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-5"><div><div className="brand-mark text-2xl font-extrabold">drive<span>i</span>stan</div><p className="mt-4 max-w-xs text-sm leading-6 text-white/50">Pakistan&apos;s premium car rental service. Drive your journey with confidence.</p></div><div><h4 className="font-semibold">Company</h4><div className="mt-4 space-y-3 text-sm text-white/50"><Link href="/about" className="block hover:text-cyan">About Us</Link><Link href="/corporate" className="block hover:text-cyan">Corporate</Link><Link href="/blog" className="block hover:text-cyan">Blog</Link><Link href="/locations" className="block hover:text-cyan">Locations</Link></div></div><div><h4 className="font-semibold">Explore</h4><div className="mt-4 space-y-3 text-sm text-white/50"><Link href="/fleet" className="block hover:text-cyan">Fleet</Link><Link href="/services" className="block hover:text-cyan">Services</Link><Link href="/locations" className="block hover:text-cyan">Locations</Link><Link href="/blog" className="block hover:text-cyan">Blog</Link></div></div><div><h4 className="font-semibold">Support</h4><div className="mt-4 space-y-3 text-sm text-white/50"><span className="block">Help Center</span><span className="block">Terms & Conditions</span><span className="block">Privacy Policy</span><span className="block">Cancellation Policy</span></div></div><div><h4 className="font-semibold">Newsletter</h4><p className="mt-4 text-sm text-white/50">Stay updated with latest offers</p><div className="newsletter mt-4"><input placeholder="Enter your email"/><button><ArrowRight size={18}/></button></div></div></div><div className="section-shell flex flex-col gap-3 border-t border-white/8 py-5 text-xs text-white/40 sm:flex-row sm:justify-between"><span>© 2026 DriveIstan. All rights reserved.</span><span>Secure booking · Verified fleet · 24/7 support</span></div></footer>
    </main>
  );
}

function TrustMini({ icon:Icon, label, sub }: { icon: typeof ShieldCheck; label: string; sub: string }) { return <div className="flex items-center gap-2"><div className="mini-trust-icon"><Icon size={18}/></div><div><strong className="block text-white">{label}</strong><span className="text-xs text-white/45">{sub}</span></div></div>; }

function FleetCard({ slug, name, badge, price, seats, fuel, image, index }: { slug:string; name:string; badge:string; price:string; seats:number; fuel:string; image:string; index:number }) {
  return <motion.article initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:index*.07}} whileHover={{y:-10}} className="fleet-card group"><div className="relative h-44 overflow-hidden"><Image src={image} alt={name} fill className="object-cover transition duration-700 group-hover:scale-110"/>{badge && <span className={`fleet-badge ${badge==='LUXURY'?'gold':''}`}>{badge}</span>}<button className="heart-btn"><Heart size={17}/></button></div><div className="p-4"><h3 className="text-base font-semibold">{name}</h3><div className="mt-3 flex flex-wrap gap-3 text-[11px] text-white/45"><span><Users size={13}/> {seats} Seats</span><span><Settings2 size={13}/> Auto</span><span><Fuel size={13}/> {fuel}</span></div><div className="mt-4"><strong className="text-cyan">{price}</strong><span className="text-xs text-white/45"> / day</span></div><Link href={`/fleet/${slug}`} className="card-button mt-4">View Details <ArrowRight size={15}/></Link></div></motion.article>;
}

function MapDot({className,name,sub}:{className:string;name:string;sub:string}) { return <div className={`map-dot ${className}`}><span className="pulse-dot"/><div><strong>{name}</strong><small>{sub}</small></div></div>; }
