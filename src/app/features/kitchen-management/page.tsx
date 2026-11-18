import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ChefHat,
  Flame,
  Clock,
  Printer,
  Bell,
  CheckCircle2,
  Check,
  Calendar,
  Sparkles,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import DemoForm from '@/components/DemoForm';

export const metadata = {
  title: 'Kitchen Display System (KDS) & Thermal KOT Printing | DawatDesk',
  description: 'Paperless kitchen order tickets, live prep countdown timers, automated 15-minute urgency flags, item 86 sold-out toggling, and 80mm thermal receipt KOT printing.',
};

export default function KitchenManagementPage() {
  return (
    <div className="py-12 sm:py-20 space-y-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
          <Link href="/" className="hover:text-slate-900">Home</Link>
          <span>/</span>
          <Link href="/features" className="hover:text-slate-900">Features</Link>
          <span>/</span>
          <span className="text-[#c89b3c]">Kitchen KDS & KOT</span>
        </div>

        {/* Feature Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c89b3c]/15 text-[#8e6121] text-xs font-bold uppercase tracking-wider">
              <ChefHat className="w-3.5 h-3.5 text-[#c89b3c]" />
              <span>Back of House Kitchen Operations</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-slate-900 tracking-tight leading-tight">
              A High-Visibility Kitchen Display System Built for Peak Heat
            </h1>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Replace messy paper tickets with a smart digital Kitchen Display System (KDS). Give your chefs live elapsed timers, urgent delay highlights, 1-tap item sold-out toggling, and standard 80mm thermal KOT printing with sequential continuation numbers.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/demo"
                className="px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-[#c89b3c] hover:bg-[#b38029] shadow-glow transition-all flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Schedule Kitchen Demo</span>
              </Link>
              <a
                href="https://dawatdesk.vercel.app/login"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-700 hover:text-slate-900 border border-slate-200 hover:bg-slate-50 transition-all"
              >
                Launch Chef KDS Live
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl p-3 bg-slate-100 border border-slate-200 shadow-xl overflow-hidden">
              <div className="relative aspect-[16/10] bg-slate-950 rounded-2xl overflow-hidden">
                <Image
                  src="/images/screenshots/10_chef_kds.png"
                  alt="DawatDesk Kitchen Display System (KDS) Screen"
                  fill
                  priority
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars of DawatDesk Kitchen Management */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-lg">Elapsed Prep Timers</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Every incoming ticket shows exact elapsed minutes. Tickets automatically turn red and trigger urgency badges once prep exceeds 15 minutes.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-[#c89b3c]/20 text-[#8e6121] flex items-center justify-center font-bold">
              <Printer className="w-5 h-5 text-[#c89b3c]" />
            </div>
            <h3 className="font-bold text-slate-900 text-lg">Thermal KOT Printing</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              One tap generates standard 80mm ESC/POS thermal KOT receipts with sequential continuation tracking (KOT-1, KOT-2 Continued) and table numbers.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-red-100 text-red-700 flex items-center justify-center font-bold">
              <Flame className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-lg">1-Tap 86 Item Toggle</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              When fresh ingredients run out, chefs toggle dishes sold-out directly on the KDS screen, disabling them instantly across all waiter pads.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
              <Bell className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-lg">Audio Ready Bell</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Marking a dish or whole table "Ready" sends an audio chime signal directly to the floor waitstaff’s device, getting hot dishes out instantly.
            </p>
          </div>
        </div>

        {/* Thermal KOT Specification Showcase */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c89b3c]/20 text-[#e8ba5d] text-xs font-semibold">
              <span>Standard 80mm ESC/POS Compatibility</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
              Hardware-Agnostic Kitchen Order Tickets
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Whether your kitchen prefers full paperless screens or traditional printed slips mounted on the chef’s pass, DawatDesk supports both concurrently. Print formatted slips with customer notes, waiter names, table numbers, and itemized dish quantities with zero driver setup.
            </p>
            <ul className="text-xs text-slate-400 space-y-2 pt-2">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#c89b3c]" />
                <span>Thermal printer auto-formatting for 80mm paper roll</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#c89b3c]" />
                <span>Automatic continuation counter (KOT - 1, KOT - 2 Continued)</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#c89b3c]" />
                <span>Clear distinction between Dine-In and Parcel/Takeaway tickets</span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <div className="w-72 bg-white text-slate-900 font-mono text-xs p-5 rounded-2xl shadow-2xl border border-slate-200 space-y-3">
              <div className="text-center border-b border-dashed border-slate-300 pb-2 space-y-0.5">
                <div className="font-extrabold text-sm tracking-wider">KOT - 1</div>
                <div className="text-[10px] text-slate-500">DAWATDESK KITCHEN PASS</div>
                <div className="font-bold text-xs pt-1">TABLE NO: 4</div>
                <div className="text-[10px] text-slate-500">Waiter: John W. | 12:45 PM</div>
              </div>
              <div className="space-y-1 py-1 border-b border-dashed border-slate-300 text-xs">
                <div className="flex justify-between font-bold">
                  <span>1x Paneer Butter Masala</span>
                  <span>[M-1]</span>
                </div>
                <div className="text-[10px] text-red-600 pl-2">Note: Mild spice, less cream</div>
                <div className="flex justify-between font-bold pt-1">
                  <span>2x Butter Garlic Naan</span>
                  <span>[B-2]</span>
                </div>
                <div className="flex justify-between font-bold pt-1">
                  <span>1x Masala Chaas</span>
                  <span>[D-1]</span>
                </div>
              </div>
              <div className="text-center text-[10px] text-slate-400 pt-1">
                *** DIGITAL PASS PRINTED ***
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <DemoForm
          headline="See the Kitchen Display System in Action"
          subheadline="Book a walkthrough to see how DawatDesk’s paperless KDS streamlines prep flow and stops kitchen chaos."
        />
      </div>
    </div>
  );
}
