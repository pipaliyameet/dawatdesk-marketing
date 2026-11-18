import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  UtensilsCrossed,
  CheckCircle2,
  Calendar,
  Sparkles,
  ArrowRight,
  Layers,
  ChefHat,
  Receipt,
  Check
} from 'lucide-react';
import DemoForm from '@/components/DemoForm';

export const metadata = {
  title: 'POS & Operations Software for Dine-In Restaurants | DawatDesk',
  description: 'Streamline full-service dine-in restaurants. Interactive table layouts, waiter tablet pads, paperless kitchen display systems, and multi-tender counter billing.',
};

export default function RestaurantSolutionPage() {
  return (
    <div className="py-12 sm:py-20 space-y-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
          <Link href="/" className="hover:text-slate-900">Home</Link>
          <span>/</span>
          <Link href="/solutions" className="hover:text-slate-900">Solutions</Link>
          <span>/</span>
          <span className="text-[#c89b3c]">Dine-In Restaurants</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c89b3c]/15 text-[#8e6121] text-xs font-bold uppercase tracking-wider">
              <UtensilsCrossed className="w-3.5 h-3.5 text-[#c89b3c]" />
              <span>Full Service Solutions</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-slate-900 tracking-tight leading-tight">
              Crafted for Fine & Casual Dine-In Restaurants
            </h1>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Dine-in service requires high attention to detail: managing course pacing, noting customized spice levels and food allergies, coordinating multiple waitstaff across dining zones, and ensuring smooth table turns. DawatDesk connects all these elements seamlessly.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/demo"
                className="px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-[#c89b3c] hover:bg-[#b38029] shadow-glow transition-all flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Restaurant Demo</span>
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl p-3 bg-slate-100 border border-slate-200 shadow-xl overflow-hidden">
              <div className="relative aspect-[16/10] bg-slate-950 rounded-2xl overflow-hidden">
                <Image
                  src="/images/screenshots/04_restaurant_tables.png"
                  alt="DawatDesk Table Floor Layout for Dine-In Restaurants"
                  fill
                  priority
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>

        {/* 3 Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-3xl p-8 border border-slate-200 space-y-3 shadow-xs">
            <h3 className="text-xl font-bold text-slate-900">Floor Table Map</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Clear visual map of all tables color-coded by occupancy, active kitchen orders, and billed tables awaiting departure.
            </p>
          </div>
          <div className="bg-white rounded-3xl p-8 border border-slate-200 space-y-3 shadow-xs">
            <h3 className="text-xl font-bold text-slate-900">Course & Prep Timing</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Chefs track prep duration on the KDS and print thermal KOT tickets with continuation sequence tracking.
            </p>
          </div>
          <div className="bg-white rounded-3xl p-8 border border-slate-200 space-y-3 shadow-xs">
            <h3 className="text-xl font-bold text-slate-900">Split Counter Billing</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Handle guest payment requests with flexible payment modes: Cash, Card, and UPI QR code with instant GST tax invoices.
            </p>
          </div>
        </div>

        <DemoForm
          headline="Elevate Your Dining Room Experience"
          subheadline="Schedule a live session to see how DawatDesk powers fine and casual dine-in restaurant operations."
        />
      </div>
    </div>
  );
}
