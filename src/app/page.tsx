'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { CalendarDays, Car, Fuel, MapPin, MessageCircle, Settings2, Users } from 'lucide-react';

const fleet = [
  { name: 'Toyota Yaris', price: 'PKR 7,500', image: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&w=900&q=80' },
  { name: 'Honda Civic', price: 'PKR 10,000', image: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&w=900&q=80' },
  { name: 'Kia Sportage', price: 'PKR 14,500', image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=900&q=80' },
  { name: 'Toyota Fortuner', price: 'PKR 20,000', image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=900&q=80' },
  { name: 'Mercedes E-Class', price: 'PKR 30,000', image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=900&q=80' },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <header className="glass fixed inset-x-0 top-0 z-50">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">
          <a href="#" className="text-xl font-bold tracking-tight">drive<span className="text-cyan">i</span>stan</a>
          <nav className="hidden items-center gap-8 text-sm text-muted md:flex">
            <a href="#fleet" className="hover:text-white">Fleet</a><a href="#services" className="hover:text-white">Services</a><a href="#locations" className="hover:text-white">Locations</a><a href="#" className="hover:text-white">Corporate</a><a href="#" className="hover:text-white">Blog</a>
          </nav>
          <button className="rounded-lg bg-cyan px-4 py-2 text-sm font-semibold text-black transition hover:scale-105">Book Now</button>
        </div>
      </header>

      <section className="relative min-h-[760px] overflow-hidden pt-16">
        <Image src="https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=2000&q=85" alt="Northern Pakistan mountain road" fill priority className="object-cover" />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 mx-auto grid max-w-7xl gap-12 px-5 py-24 lg:grid-cols-[1.1fr_.9fr] lg:items-center lg:py-36">
          <motion.div initial="hidden" animate="show" variants={{ hidden: {}, show: { transition: { staggerChildren: .1 } } }}>
            {[
              <span key="badge" className="mb-5 inline-flex rounded-full border border-cyan/30 bg-cyan/10 px-3 py-1 text-xs font-medium text-cyan">Pakistan-wide premium mobility</span>,
              <h1 key="h1" className="text-gradient max-w-3xl text-5xl font-bold leading-[1.05] md:text-6xl">Premium Car Rentals Across Pakistan</h1>,
              <p key="p" className="mt-5 max-w-xl text-lg text-muted">Self-Drive & Chauffeur Services. Instant Booking, verified vehicles and support wherever the road takes you.</p>,
              <div key="route" className="mt-7 flex gap-3"><span className="rounded-lg bg-cyan px-4 py-2 text-sm font-semibold text-black">Naran Valley</span><span className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm">Islamabad</span></div>,
            ].map((el, i) => <motion.div key={i} variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }}>{el}</motion.div>)}
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .35 }} className="glass rounded-2xl p-5 shadow-2xl">
            <div className="mb-5 grid grid-cols-2 rounded-xl bg-black/30 p-1 text-sm"><button className="rounded-lg bg-white/10 px-4 py-3 font-semibold text-white">Self-Drive</button><button className="px-4 py-3 text-muted">With Driver</button></div>
            <div className="space-y-4">
              <Field icon={<MapPin size={17}/>} label="Pickup Location" value="Islamabad, Pakistan" />
              <Field icon={<MapPin size={17}/>} label="Drop-off Location" value="Lahore, Pakistan" />
              <div className="grid grid-cols-2 gap-3"><Field icon={<CalendarDays size={17}/>} label="Pickup" value="25 Aug, 10:00" /><Field icon={<CalendarDays size={17}/>} label="Return" value="28 Aug, 18:00" /></div>
              <button className="w-full rounded-xl bg-cyan py-3.5 font-semibold text-black shadow-cyan transition hover:brightness-110">Find My Car</button>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="fleet" className="mx-auto max-w-7xl px-5 py-20">
        <div className="mb-8 flex items-end justify-between"><div><p className="text-sm font-semibold uppercase tracking-[.2em] text-cyan">Featured Fleet</p><h2 className="mt-2 text-3xl font-semibold">Choose your drive</h2></div><a href="#" className="hidden text-sm text-muted md:block">View all vehicles →</a></div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {fleet.map((vehicle) => <FleetCard key={vehicle.name} {...vehicle} />)}
        </div>
      </section>

      <section id="locations" className="border-y border-border/70 bg-surface/60">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 md:grid-cols-2 md:items-center">
          <div><p className="text-sm font-semibold uppercase tracking-[.2em] text-cyan">Our Locations</p><h2 className="mt-3 text-3xl font-semibold">Rent across Pakistan</h2><p className="mt-4 max-w-lg text-muted">Start from major hubs in Lahore, Islamabad, Karachi and Peshawar, with more branch coverage planned.</p><div className="mt-8 grid grid-cols-2 gap-3 text-sm">{['Gulberg, Lahore','Islamabad Airport','Saddar, Karachi','Peshawar Cantt'].map(x => <div key={x} className="rounded-xl border border-border bg-background/60 p-4"><MapPin className="mb-3 text-cyan" size={18}/>{x}</div>)}</div></div>
          <div className="relative min-h-[340px] overflow-hidden rounded-2xl border border-border bg-[#0b0e16] p-6"><div className="absolute inset-0 opacity-30" style={{backgroundImage:'radial-gradient(circle at 1px 1px, #2D303E 1px, transparent 0)',backgroundSize:'24px 24px'}}/><div className="relative flex h-full min-h-[290px] items-center justify-center text-center"><div><MapPin className="mx-auto text-cyan" size={48}/><p className="mt-4 font-semibold">Interactive Pakistan branch map</p><p className="mt-2 text-sm text-muted">Leaflet integration is the next implementation step.</p></div></div></div>
        </div>
      </section>

      <footer className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-10 text-sm text-muted md:flex-row md:items-center md:justify-between"><span>© 2026 DriveIstan. Premium mobility across Pakistan.</span><span>Secure booking · Verified fleet · 24/7 support</span></footer>

      <button aria-label="WhatsApp" className="fixed bottom-6 right-6 z-50 rounded-full bg-[#25D366] p-4 text-black shadow-xl animate-pulse"><MessageCircle size={25}/></button>
    </main>
  );
}

function Field({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return <label className="block"><span className="mb-1.5 block text-xs text-muted">{label}</span><div className="flex items-center gap-2 rounded-xl border border-border bg-black/25 px-3 py-3 text-sm"><span className="text-cyan">{icon}</span><span className="truncate">{value}</span></div></label>;
}

function FleetCard({ name, price, image }: { name: string; price: string; image: string }) {
  return <motion.article whileHover={{ y: -8 }} className="group overflow-hidden rounded-2xl border border-border bg-surface transition-colors hover:border-cyan hover:shadow-cyan"><div className="relative h-40 overflow-hidden"><Image src={image} alt={name} fill className="object-cover transition duration-500 group-hover:scale-105" /></div><div className="p-4"><h3 className="font-semibold">{name}</h3><div className="mt-3 grid grid-cols-3 gap-1 text-[11px] text-muted"><span className="flex items-center gap-1"><Users size={13}/>5</span><span className="flex items-center gap-1"><Settings2 size={13}/>Auto</span><span className="flex items-center gap-1"><Fuel size={13}/>Petrol</span></div><div className="mt-4"><span className="font-semibold text-cyan">{price}</span><span className="text-xs text-muted"> / day</span></div><button className="mt-4 w-full rounded-lg border border-border py-2 text-sm font-medium transition hover:border-cyan hover:bg-cyan hover:text-black">View Details</button></div></motion.article>;
}
