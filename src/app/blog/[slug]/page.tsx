import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, CalendarDays, Clock3, MessageCircle } from 'lucide-react';

const whatsappHref='https://wa.me/923001234567?text=Hi%20DriveIstan%2C%20I%20have%20a%20question%20about%20car%20rental%20in%20Pakistan.';

const articles={
  'best-cars-for-northern-pakistan-road-trip':{
    title:'Best cars for a northern Pakistan road trip',
    date:'20 Aug 2026',time:'6 min read',
    image:'https://images.unsplash.com/photo-1464278533981-50106e6176b1?auto=format&fit=crop&w=1800&q=90',
    intro:'Northern Pakistan rewards the right vehicle. Route quality, luggage, passenger count and weather should determine whether you choose a sedan, crossover or full-size SUV.',
    sections:[
      ['For paved routes and city-to-city travel','A comfortable sedan such as a Toyota Corolla or Honda Civic works well for Islamabad, Abbottabad and other primarily paved routes. It keeps fuel costs lower while remaining easy to drive in busy towns.'],
      ['For mountain routes and mixed surfaces','A crossover such as the Kia Sportage gives you more ground clearance, luggage room and confidence on uneven roads without the size of a full SUV.'],
      ['For tougher northern journeys','For destinations where road conditions can change quickly, a Toyota Fortuner-style SUV is the safer premium choice. Extra clearance, stronger road presence and seven-seat capacity make it useful for families and groups.'],
      ['Plan before departure','Check seasonal road conditions, weather, fuel stops and mobile coverage before leaving. DriveIstan can help match your route with the right rental category and chauffeur option.']
    ]
  },
  'self-drive-vs-chauffeur-pakistan':{
    title:'Self-drive vs chauffeur: which rental fits your trip?',date:'16 Aug 2026',time:'5 min read',
    image:'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=90',
    intro:'Both rental styles can work well. The better option depends on how much control, convenience and local driving support you want during the journey.',
    sections:[
      ['Choose self-drive for flexibility','Self-drive is ideal when you want your own schedule, private travel and the freedom to stop whenever you choose. It works especially well for familiar city routes and independent road trips.'],
      ['Choose a chauffeur for convenience','A chauffeur is useful for airport transfers, business travel, events, unfamiliar routes and long-distance trips where you would rather focus on work or rest.'],
      ['Think about the route','Busy city traffic, night travel and mountain roads may make a professional driver more comfortable. Straightforward city rentals and shorter journeys often suit self-drive customers.'],
      ['Compare the complete cost','Look beyond the daily rental price. Consider chauffeur charges, out-of-city fees, fuel, parking and any driver meal allowance before deciding.']
    ]
  },
  'documents-needed-to-rent-car-in-pakistan':{
    title:'What documents do you need to rent a car in Pakistan?',date:'10 Aug 2026',time:'4 min read',
    image:'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1800&q=90',
    intro:'Rental verification protects both the customer and the vehicle. Exact requirements can vary by vehicle category, rental type and company policy.',
    sections:[
      ['Identity document','Pakistani customers should normally be ready to provide a valid CNIC. International customers may need a passport and additional identification depending on the booking.'],
      ['Driving licence','Self-drive bookings require a valid driving licence accepted for the rental. Premium vehicle categories may have additional age or driving-history conditions.'],
      ['Contact and booking details','A working mobile number, email address and confirmed pickup and return details help the rental team verify and manage the reservation.'],
      ['Security and payment verification','Some vehicles may require a security deposit or additional payment verification. DriveIstan shows these requirements during the booking process so the customer knows what is needed before pickup.']
    ]
  }
} as const;

export default async function ArticlePage({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;
  const article=articles[slug as keyof typeof articles];
  if(!article) notFound();
  return <main className="min-h-screen bg-background pt-24">
    <article>
      <section className="section-shell py-10">
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-white/55 transition hover:text-cyan"><ArrowLeft size={16}/>Back to Journal</Link>
        <div className="mt-8 max-w-4xl"><p className="eyebrow">DriveIstan Journal</p><h1 className="mt-3 text-4xl font-bold leading-tight sm:text-6xl">{article.title}</h1><div className="mt-5 flex gap-5 text-sm text-white/40"><span className="flex items-center gap-2"><CalendarDays size={15}/>{article.date}</span><span className="flex items-center gap-2"><Clock3 size={15}/>{article.time}</span></div></div>
      </section>
      <section className="section-shell"><div className="relative h-[420px] overflow-hidden rounded-3xl border border-white/10 sm:h-[560px]"><Image src={article.image} alt={article.title} fill priority className="object-cover"/><div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent"/></div></section>
      <section className="section-shell py-14"><div className="mx-auto max-w-4xl"><p className="text-lg leading-8 text-white/70">{article.intro}</p><div className="mt-10 space-y-10">{article.sections.map(([heading,body])=><section key={heading}><h2 className="text-2xl font-semibold">{heading}</h2><p className="mt-3 leading-8 text-white/58">{body}</p></section>)}</div><div className="mt-12 rounded-3xl border border-cyan/25 bg-cyan/[.04] p-7"><p className="eyebrow">Need help choosing?</p><h2 className="mt-2 text-2xl font-semibold">Talk to the DriveIstan booking team.</h2><p className="mt-3 text-sm leading-6 text-white/55">Tell us your route, passengers and travel dates and we can help you choose a suitable rental category.</p><a href={whatsappHref} target="_blank" rel="noreferrer" className="cyan-button mt-5 gap-2"><MessageCircle size={17}/>Chat on WhatsApp</a></div></div></section>
    </article>
  </main>;
}
