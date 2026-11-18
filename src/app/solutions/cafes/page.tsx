import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Sparkles,
  CheckCircle2,
  Calendar,
  ArrowRight,
  Utensils,
  Receipt,
  Check
} from 'lucide-react';
import DemoForm from '@/components/DemoForm';

export const metadata = {
  title: 'POS Software for Cafes, Bakeries & Coffee Bars | DawatDesk',
  description: 'Fast, modern POS platform for artisan cafes and bakeries. Barista drink ticket routing, 1-tap sold-out item toggles, takeaway orders, and UPI QR settlements.',
};

export default function CafeSolutionPage() {
  return (
    <div className="py-12 sm:py-20 space-y-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
          <Link href="/" className="hover:text-slate-900">Home</Link>
          <span>/</span>
          <Link href="/solutions" className="hover:text-slate-900">Solutions</Link>
          <span>/</span>
          <span className="text-[#c89b3c]">Cafes & Bakeries</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c89b3c]/15 text-[#8e6121] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#c89b3c]" />
              <span>Artisan & Beverage Outlets</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-slate-900 tracking-tight leading-tight">
              Rapid Counter Orders for Cafes & Coffee Shops
            </h1>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Cafes demand fast order punching, flexible combo modifiers (milk substitutes, syrup pumps, temperature preferences), quick takeaway parcel orders, and instant 86 sold-out controls for freshly baked items that run out mid-day.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/demo"
                className="px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-[#c89b3c] hover:bg-[#b38029] shadow-glow transition-all flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Cafe Demo</span>
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl p-3 bg-slate-100 border border-slate-200 shadow-xl overflow-hidden">
              <div className="relative aspect-[16/10] bg-slate-950 rounded-2xl overflow-hidden">
                <Image
                  src="/images/screenshots/03_restaurant_menu.png"
                  alt="DawatDesk Menu Categories for Cafes and Bakeries"
                  fill
                  priority
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Cafe Strengths */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-3xl p-8 border border-slate-200 space-y-3 shadow-xs">
            <h3 className="text-xl font-bold text-slate-900">1-Tap 86 Pastry Toggle</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              When croissants or seasonal cheesecakes sell out, staff mark them unavailable with one tap so counter attendants never accept paid orders for empty trays.
            </p>
          </div>
          <div className="bg-white rounded-3xl p-8 border border-slate-200 space-y-3 shadow-xs">
            <h3 className="text-xl font-bold text-slate-900">Custom Drink Notes</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Easily append special preparation instructions ("Oat milk", "Extra espresso shot", "Sugar-free") directly onto barista slips.
            </p>
          </div>
          <div className="bg-white rounded-3xl p-8 border border-slate-200 space-y-3 shadow-xs">
            <h3 className="text-xl font-bold text-slate-900">Instant UPI QR Settlements</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Fast counter billing lets morning commuters pay via UPI in seconds, keeping coffee lines moving without bottlenecking the entrance.
            </p>
          </div>
        </div>

        <DemoForm
          headline="Keep Your Cafe Service Flowing Smoothly"
          subheadline="Book a walkthrough to see how DawatDesk simplifies artisan cafe and bakery operations."
        />
      </div>
    </div>
  );
}
