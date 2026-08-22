'use client';

import { useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowRight, CalendarDays, MapPin } from 'lucide-react';

const cities = ['Islamabad, Pakistan','Lahore, Pakistan','Karachi, Pakistan','Peshawar, Pakistan'];

export default function BookingSearch(){
  const router = useRouter();
  const [mode,setMode] = useState<'self'|'driver'>('self');
  const [pickup,setPickup] = useState(cities[0]);
  const [dropoff,setDropoff] = useState(cities[1]);
  const [pickupDate,setPickupDate] = useState('2026-08-25T10:00');
  const [returnDate,setReturnDate] = useState('2026-08-28T18:00');
  const invalid = useMemo(() => !pickup || !dropoff || !pickupDate || !returnDate || new Date(returnDate) <= new Date(pickupDate), [pickup,dropoff,pickupDate,returnDate]);

  function submit(e: React.FormEvent){
    e.preventDefault();
    if(invalid) return;
    const qs = new URLSearchParams({mode,pickup,dropoff,pickupDate,returnDate});
    router.push(`/fleet?${qs.toString()}`);
  }

  return <form onSubmit={submit} className="booking-card">
    <div className="booking-tabs">
      <button type="button" onClick={()=>setMode('self')} className={mode==='self'?'active':''}>Self-Drive</button>
      <button type="button" onClick={()=>setMode('driver')} className={mode==='driver'?'active':''}>With Driver</button>
    </div>
    <div className="mt-5 space-y-4">
      <label className="block"><span className="mb-2 block text-xs text-white/55">Pickup Location</span><div className="field-box"><MapPin size={17} className="text-cyan"/><select value={pickup} onChange={e=>setPickup(e.target.value)} className="w-full bg-transparent outline-none">{cities.map(c=><option key={c} value={c} className="bg-[#0b0f16]">{c}</option>)}</select></div></label>
      <label className="block"><span className="mb-2 block text-xs text-white/55">Drop-off Location</span><div className="field-box"><MapPin size={17} className="text-cyan"/><select value={dropoff} onChange={e=>setDropoff(e.target.value)} className="w-full bg-transparent outline-none">{cities.map(c=><option key={c} value={c} className="bg-[#0b0f16]">{c}</option>)}</select></div></label>
      <label className="block"><span className="mb-2 block text-xs text-white/55">Pickup Date & Time</span><div className="field-box"><CalendarDays size={17} className="text-cyan"/><input type="datetime-local" value={pickupDate} onChange={e=>setPickupDate(e.target.value)} className="w-full bg-transparent outline-none [color-scheme:dark]"/></div></label>
      <label className="block"><span className="mb-2 block text-xs text-white/55">Return Date & Time</span><div className="field-box"><CalendarDays size={17} className="text-cyan"/><input type="datetime-local" value={returnDate} onChange={e=>setReturnDate(e.target.value)} className="w-full bg-transparent outline-none [color-scheme:dark]"/></div></label>
      {invalid && <p className="text-xs text-red-300">Please select valid pickup and return details. Return time must be after pickup.</p>}
      <button disabled={invalid} className="cyan-button mt-2 w-full justify-center py-4 text-base disabled:cursor-not-allowed disabled:opacity-50">Find My Car <ArrowRight size={18}/></button>
    </div>
  </form>;
}
