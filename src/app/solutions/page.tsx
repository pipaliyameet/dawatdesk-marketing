import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Building2,
  UtensilsCrossed,
  Sparkles,
  Zap,
  ArrowRight,
  CheckCircle2,
  Check
} from 'lucide-react';
import DemoForm from '@/components/DemoForm';

export const metadata = {
  title: 'Tailored Restaurant Solutions by Food Business Format | DawatDesk',
  description: 'Discover how DawatDesk adapts to your exact business format: Dine-In Restaurants, Cafes & Bakeries, Quick Service (QSR), Cloud Kitchens, and Multi-Outlet Chains.',
};

export default function SolutionsPage() {
  const solutions = [
    {
      slug: 'restaurants',
      title: 'Dine-In Restaurants',
      subtitle: 'Fine & Casual Dining Establishments',
      desc: 'Orchestrate multi-course meals, table floor layouts, course pacing, wine & beverage service, waiter order pads, and split bill settlements.',
      features: ['Visual floor map with table states', 'Kitchen Order Tickets (KOT) with continuation counters', 'Audible food-ready chime on waitstaff phones', 'Split tender payments: UPI QR, Card & Cash'],
      screenshot: '/images/screenshots/04_restaurant_tables.png',
      tag: 'Full Service'
    },
    {
      slug: 'cafes',
      title: 'Cafes, Bakeries & Coffee Bars',
      subtitle: 'High-Volume Artisan Food & Beverages',
      desc: 'Speed up counter lines with instant drink tickets for baristas, quick combo punching, 1-tap 86 item availability toggles for fresh bakery goods, and seamless UPI QR checkouts.',
      features: ['Quick barista station ticket routing', '1-tap sold-out toggle for limited daily pastries', 'Takeaway vs Dine-in quick switch', 'Fast UPI QR code counter settlements'],
      screenshot: '/images/screenshots/03_restaurant_menu.png',
      tag: 'Counter & Table'
    },
    {
      slug: 'quick-service',
      title: 'Quick Service Restaurants (QSR)',
      subtitle: 'Fast Food, Takeaway Counters & Food Courts',
      desc: 'Designed for transaction velocity. Punch orders at high speed, print order numbers on customer slips, and push tickets directly to line cooks without pause.',
      features: ['Numbered parcel & takeaway tickets', 'Fast counter checkout with change calculation', 'Instant cooking status tracking', 'Peak lunch rush performance optimization'],
      screenshot: '/images/screenshots/11_cashier_pos.png',
      tag: 'High Velocity'
    }
  ];

  return (
    <div className="py-12 sm:py-20 space-y-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c89b3c]/15 text-[#8e6121] text-xs font-bold uppercase tracking-wider">
            <Building2 className="w-3.5 h-3.5 text-[#c89b3c]" />
            <span>Format-Specific Engineering</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-slate-900 tracking-tight">
            Restaurant Solutions Built for Your Operating Style
          </h1>
          <p className="text-slate-600 text-base sm:text-lg">
            Every food venue operates differently. Explore how DawatDesk’s flexible control desk configures itself to suit your exact dining service model.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((s) => (
            <div
              key={s.slug}
              className="bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-card transition-all duration-300 overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/10] bg-slate-900 overflow-hidden border-b border-slate-100">
                  <Image
                    src={s.screenshot}
                    alt={s.title}
                    fill
                    className="object-cover object-top hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-md bg-slate-900/80 backdrop-blur-sm text-[11px] font-bold text-[#e8ba5d]">
                    {s.tag}
                  </div>
                </div>

                <div className="p-6 sm:p-8 space-y-4">
                  <div className="space-y-1">
                    <h3 className="text-2xl font-display font-bold text-slate-900">
                      {s.title}
                    </h3>
                    <p className="text-xs font-bold text-[#c89b3c] uppercase tracking-wider">
                      {s.subtitle}
                    </p>
                  </div>

                  <p className="text-slate-600 text-sm leading-relaxed">
                    {s.desc}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Core Advantages:
                    </span>
                    <ul className="space-y-1.5">
                      {s.features.map((feat, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs text-slate-700">
                          <Check className="w-3.5 h-3.5 text-[#c89b3c] shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="px-6 sm:px-8 pb-6 pt-2">
                <Link
                  href={`/solutions/${s.slug}`}
                  className="w-full py-3 rounded-xl text-sm font-bold text-slate-900 bg-slate-100 hover:bg-[#c89b3c] hover:text-white transition-all flex items-center justify-center gap-1.5"
                >
                  <span>Explore {s.title} Details</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <DemoForm
          headline="Find Out How DawatDesk Fits Your Specific Outlet"
          subheadline="Book a consultation with our restaurant operations specialist to discuss your service model, menu size, and seating capacity."
        />
      </div>
    </div>
  );
}
