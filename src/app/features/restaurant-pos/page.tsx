import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  UtensilsCrossed,
  CheckCircle2,
  Clock,
  BellRing,
  ArrowRight,
  Smartphone,
  Tablet,
  Printer,
  Calendar,
  Layers,
  Check
} from 'lucide-react';
import DemoForm from '@/components/DemoForm';

export const metadata = {
  title: 'Restaurant POS & Floor Waitstaff Order Pad | DawatDesk',
  description: 'Enable waitstaff to punch table orders at the diner table using tablets or mobile phones. Live table floor status, custom cooking notes, dish search, and real-time food ready chime alerts.',
};

export default function RestaurantPosPage() {
  return (
    <div className="py-12 sm:py-20 space-y-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
          <Link href="/" className="hover:text-slate-900">Home</Link>
          <span>/</span>
          <Link href="/features" className="hover:text-slate-900">Features</Link>
          <span>/</span>
          <span className="text-[#c89b3c]">Restaurant POS</span>
        </div>

        {/* Feature Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c89b3c]/15 text-[#8e6121] text-xs font-bold uppercase tracking-wider">
              <UtensilsCrossed className="w-3.5 h-3.5 text-[#c89b3c]" />
              <span>Front of House Floor Management</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-slate-900 tracking-tight leading-tight">
              At-The-Table POS Ordering Built for High-Volume Service
            </h1>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Equip your floor waitstaff with an intuitive digital ordering pad that runs directly in the browser on any phone or tablet. Punch orders beside the dining table, specify customer cooking preferences, and eliminate handwriting confusion completely.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/demo"
                className="px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-[#c89b3c] hover:bg-[#b38029] shadow-glow transition-all flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Book a Floor Walkthrough</span>
              </Link>
              <a
                href="https://dawatdesk.vercel.app/login"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-700 hover:text-slate-900 border border-slate-200 hover:bg-slate-50 transition-all"
              >
                Try Waiter View Live
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl p-3 bg-slate-100 border border-slate-200 shadow-xl overflow-hidden">
              <div className="relative aspect-[16/10] bg-slate-950 rounded-2xl overflow-hidden">
                <Image
                  src="/images/screenshots/08_waiter_pos.png"
                  alt="DawatDesk Waiter POS Table Grid Screen"
                  fill
                  priority
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>

        {/* The Problem It Solves */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 space-y-6">
          <div className="max-w-3xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#c89b3c]">
              Operational Bottleneck Solved
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
              Why Paper Notepads Fail Modern Dining Rooms
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              In traditional restaurants, a waiter takes 5 minutes writing by hand, walks to the kitchen to deliver a physical slip, and often discovers 10 minutes later that an ingredient is sold out. DawatDesk eliminates these wasted steps: orders transmit to the kitchen in under 500 milliseconds, and sold-out items are grayed out before the waiter even punches them.
            </p>
          </div>
        </div>

        {/* Step-by-Step Flow */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#c89b3c]">
              Operational Flow
            </span>
            <h2 className="text-3xl font-display font-bold text-slate-900">
              How Waiters Use DawatDesk Step by Step
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3 shadow-xs">
              <div className="w-8 h-8 rounded-lg bg-[#c89b3c]/20 text-[#8e6121] flex items-center justify-center font-bold text-sm">
                1
              </div>
              <h4 className="font-bold text-slate-900 text-base">Select Table</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Waiter views the interactive table floor map. Green tables are free; amber/blue are occupied with active orders.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3 shadow-xs">
              <div className="w-8 h-8 rounded-lg bg-[#c89b3c]/20 text-[#8e6121] flex items-center justify-center font-bold text-sm">
                2
              </div>
              <h4 className="font-bold text-slate-900 text-base">Punch Dishes</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Filter by category (Starters, Mains, Drinks) or use instant search. Tap + / - to set quantities and enter custom preparation notes.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3 shadow-xs">
              <div className="w-8 h-8 rounded-lg bg-[#c89b3c]/20 text-[#8e6121] flex items-center justify-center font-bold text-sm">
                3
              </div>
              <h4 className="font-bold text-slate-900 text-base">Send to Kitchen</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                One tap transmits the ticket instantly to the chef’s kitchen display. The table automatically switches to occupied status.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3 shadow-xs">
              <div className="w-8 h-8 rounded-lg bg-[#c89b3c]/20 text-[#8e6121] flex items-center justify-center font-bold text-sm">
                4
              </div>
              <h4 className="font-bold text-slate-900 text-base">Serve Hot Food</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                When the chef marks dishes ready, an audio chime plays on the waiter’s device. Waiter delivers the food and marks it Served.
              </p>
            </div>
          </div>
        </div>

        {/* Mobile View Preview */}
        <div className="bg-slate-50 rounded-3xl p-8 sm:p-12 border border-slate-200 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
              <Smartphone className="w-3.5 h-3.5" />
              <span>Mobile Smartphone Optimized</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-900">
              Runs on Any Android or iOS Smartphone
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              No need to buy $800 industrial handhelds. Your waitstaff can use compact Android smartphones or mini tablets. The mobile view features quick-scroll categories, bottom drawer cart summary, and tactile haptic feedback when marking tables served.
            </p>
            <ul className="text-xs text-slate-700 space-y-2 pt-2">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#c89b3c]" />
                <span>Responsive mobile cart floating summary bar</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#c89b3c]" />
                <span>Audio chime alert on food completion</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#c89b3c]" />
                <span>Offline network status awareness</span>
              </li>
            </ul>
          </div>

          <div className="flex justify-center">
            <div className="w-72 rounded-[36px] p-3 bg-slate-900 shadow-2xl border-4 border-slate-800">
              <div className="relative aspect-[9/19] rounded-[28px] overflow-hidden bg-slate-950">
                <Image
                  src="/images/screenshots/09_waiter_mobile.png"
                  alt="DawatDesk Waiter Mobile View"
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <DemoForm
          headline="Experience Waiter Ordering in a Live Walkthrough"
          subheadline="Let us show you how quickly your waitstaff can punch orders and manage tables on DawatDesk."
        />
      </div>
    </div>
  );
}
