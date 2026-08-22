'use client';

import { useSearchParams } from 'next/navigation';
import { useMemo, useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, CreditCard, FileText, ShieldCheck, Upload } from 'lucide-react';

export default function BookingPage(){
  const params = useSearchParams();
  const [submitted,setSubmitted] = useState(false);
  const [form,setForm] = useState({name:'',email:'',phone:'',cnic:'',license:'',payment:'JazzCash'});
  const vehicle = params.get('vehicle') || 'toyota-fortuner';
  const pickup = params.get('pickup') || 'Islamabad Airport';
  const pickupDate = params.get('pickupDate') || '';
  const returnDate = params.get('returnDate') || '';
  const addons = params.get('addons')?.split(',').filter(Boolean) || [];
  const days = useMemo(()=> pickupDate && returnDate ? Math.max(1,Math.ceil((new Date(returnDate).getTime()-new Date(pickupDate).getTime())/86400000)) : 1,[pickupDate,returnDate]);
  const total = 20000*days + (addons.includes('chauffeur')?4000*days:0) + (addons.includes('outcity')?2500:0) + (addons.includes('babyseat')?1000:0) + (addons.includes('meal')?1500*days:0);

  function submit(e:React.FormEvent){e.preventDefault();setSubmitted(true)}

  if(submitted) return <main className="min-h-[70vh] bg-background pt-28"><section className="section-shell py-20"><div className="mx-auto max-w-2xl rounded-3xl border border-cyan/30 bg-white/[.03] p-8 text-center"><CheckCircle2 className="mx-auto text-cyan" size={52}/><h1 className="mt-5 text-3xl font-bold">Booking request received</h1><p className="mt-3 text-white/55">Your booking reference is <strong className="text-white">DRI-{Date.now().toString().slice(-6)}</strong>. Our team will verify your documents and payment before confirming the vehicle.</p><Link href="/" className="cyan-button mt-7">Back to homepage</Link></div></section></main>;

  return <main className="min-h-screen bg-background pt-24"><section className="section-shell py-10"><Link href="/fleet" className="inline-flex items-center gap-2 text-sm text-white/55 hover:text-cyan"><ArrowLeft size={16}/>Back to fleet</Link><div className="mt-7 grid gap-8 lg:grid-cols-[1fr_.7fr]">
    <form onSubmit={submit} className="rounded-3xl border border-white/10 bg-white/[.025] p-6 sm:p-8">
      <p className="eyebrow">Secure checkout</p><h1 className="section-title">Complete your booking</h1><div className="mt-7 grid gap-4 sm:grid-cols-2">
        {[["Full name","name","text"],["Email","email","email"],["Phone","phone","tel"],["CNIC number","cnic","text"]].map(([label,key,type])=><label key={key} className="block"><span className="mb-2 block text-xs text-white/55">{label}</span><input required type={type} value={form[key as keyof typeof form]} onChange={e=>setForm({...form,[key]:e.target.value})} className="field-box w-full outline-none"/></label>)}
      </div>
      <div className="mt-6 grid gap-4 sm:grid-cols-2"><label className="rounded-2xl border border-dashed border-white/15 bg-white/[.02] p-5"><Upload className="text-cyan" size={20}/><span className="mt-3 block text-sm font-medium">Upload CNIC</span><input required type="file" className="mt-3 block w-full text-xs text-white/50"/></label><label className="rounded-2xl border border-dashed border-white/15 bg-white/[.02] p-5"><FileText className="text-cyan" size={20}/><span className="mt-3 block text-sm font-medium">Upload driving license</span><input required type="file" className="mt-3 block w-full text-xs text-white/50"/></label></div>
      <div className="mt-7"><span className="mb-3 block text-sm font-medium">Payment method</span><div className="grid gap-3 sm:grid-cols-3">{['JazzCash','EasyPaisa','Card'].map(p=><button type="button" key={p} onClick={()=>setForm({...form,payment:p})} className={`rounded-xl border px-4 py-4 text-sm ${form.payment===p?'border-cyan bg-cyan/10':'border-white/10 bg-white/[.02]'}`}><CreditCard size={18} className="mx-auto mb-2 text-cyan"/>{p}</button>)}</div></div>
      <button className="cyan-button mt-8 w-full py-4">Submit booking request</button>
    </form>
    <aside className="booking-card h-fit"><p className="eyebrow">Booking summary</p><h2 className="mt-2 text-2xl font-semibold capitalize">{vehicle.replaceAll('-',' ')}</h2><div className="mt-6 space-y-3 text-sm text-white/55"><div className="flex justify-between"><span>Pickup</span><strong className="text-white">{pickup}</strong></div><div className="flex justify-between"><span>Rental duration</span><strong className="text-white">{days} days</strong></div><div className="flex justify-between"><span>Selected add-ons</span><strong className="text-white">{addons.length || 'None'}</strong></div></div><div className="mt-6 border-t border-white/10 pt-5"><div className="flex items-end justify-between"><span className="text-sm text-white/55">Estimated total</span><strong className="text-3xl text-cyan">PKR {total.toLocaleString()}</strong></div></div><div className="mt-6 space-y-3 text-xs text-white/45"><p className="flex gap-2"><ShieldCheck size={15} className="text-cyan"/>Documents are reviewed before confirmation.</p><p className="flex gap-2"><CheckCircle2 size={15} className="text-cyan"/>No hidden rental charges.</p></div></aside>
  </div></section></main>
}
