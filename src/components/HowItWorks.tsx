'use client';

import { motion } from 'framer-motion';
import { BadgeCheck, CarFront, KeyRound, PlayCircle } from 'lucide-react';

const steps = [
  { icon: CarFront, title: 'Choose your car', text: 'Filter by city, category, transmission and price.' },
  { icon: BadgeCheck, title: 'Verify & confirm', text: 'Submit your CNIC and driving licence, then confirm your booking.' },
  { icon: KeyRound, title: 'Pick up & drive', text: 'Collect your car from the selected branch or arrange delivery.' },
];

export default function HowItWorks(){
  return <section className="section-shell py-20">
    <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
      <div><p className="eyebrow">How It Works</p><h2 className="section-title">Book in minutes, drive with confidence</h2><p className="mt-3 max-w-2xl text-white/55">A simple process from vehicle search to verification and pickup.</p></div>
      <a href="/services" className="outline-button gap-2 self-start md:self-auto"><PlayCircle size={17}/> View all services</a>
    </motion.div>
    <div className="grid gap-6 lg:grid-cols-[1.1fr_.9fr]">
      <motion.div initial={{opacity:0,x:-25}} whileInView={{opacity:1,x:0}} viewport={{once:true}} className="overflow-hidden rounded-2xl border border-cyan/25 bg-[#090d14] shadow-[0_0_35px_rgba(0,240,255,.08)]">
        <div className="aspect-video">
          <iframe className="h-full w-full" src="https://www.youtube.com/embed/8V0HETilr4I?rel=0&modestbranding=1" title="How car rental works" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
        </div>
      </motion.div>
      <div className="grid gap-4">
        {steps.map(({icon:Icon,title,text},i)=><motion.div key={title} initial={{opacity:0,x:25}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{delay:i*.08}} className="rounded-2xl border border-white/10 bg-white/[.035] p-5 transition hover:-translate-y-1 hover:border-cyan/40 hover:bg-cyan/[.04]">
          <div className="flex gap-4"><div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-cyan/35 bg-cyan/10 text-cyan"><Icon size={21}/></div><div><span className="text-xs font-bold uppercase tracking-[.18em] text-cyan">Step {i+1}</span><h3 className="mt-1 text-lg font-semibold">{title}</h3><p className="mt-2 text-sm leading-6 text-white/50">{text}</p></div></div>
        </motion.div>)}
      </div>
    </div>
  </section>;
}
