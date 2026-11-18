import React from 'react';
import Link from 'next/link';
import {
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Sparkles,
  ArrowRight,
  Building2,
  HelpCircle,
  PhoneCall,
  Check
} from 'lucide-react';
import DemoForm from '@/components/DemoForm';

export const metadata = {
  title: 'Pricing & Tailored Restaurant Consultation | DawatDesk',
  description: 'Transparent, tailored restaurant management plans based on your outlet format and table count. Request a personalized consultation with zero hardware lock-in.',
};

export default function PricingPage() {
  const plans = [
    {
      name: 'Single Outlet Plan',
      tagline: 'Ideal for independent restaurants, cafes, and QSR outlets.',
      pricingText: 'Contact Us for Custom Pricing',
      subText: 'Tailored to your floor table count and station setup',
      badge: 'Most Popular',
      features: [
        'Complete Restaurant POS for unlimited waitstaff',
        'Kitchen Display System (KDS) & thermal KOT printing',
        'Cashier billing counter with split payments (Cash, UPI QR, Card)',
        'Table layout floor map & walk-in waitlist queue',
        'Menu management with 1-tap 86 item availability toggles',
        'Daily sales reports, GMV analytics, and CSV data export',
        'Dedicated onboarding and team training session'
      ],
      cta: 'Request Single Outlet Quote',
      highlight: true
    },
    {
      name: 'Multi-Branch & Franchise',
      tagline: 'For growing restaurant chains, cloud kitchens, and franchise groups.',
      pricingText: 'Contact Us for Volume Pricing',
      subText: 'Volume licensing with centralized network command center',
      badge: 'Enterprise Expansion',
      features: [
        'Everything in Single Outlet Plan across all branches',
        'Platform Super Admin Multi-Venue Command Console',
        'Cross-branch performance comparison & aggregated GMV rollups',
        'Centralized menu item & category architecture',
        'Role-based branch administration with custom permissions',
        'Priority technical support & dedicated account manager',
        'Custom integration consultation (hardware & data exports)'
      ],
      cta: 'Request Multi-Branch Consultation',
      highlight: false
    }
  ];

  return (
    <div className="py-12 sm:py-20 space-y-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c89b3c]/15 text-[#8e6121] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#c89b3c]" />
            <span>Honest Consultation</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-slate-900 tracking-tight">
            Tailored Plans for Your Specific Dining Format
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Every dining establishment has unique needs—from a 10-table boutique cafe to a 100-table multi-story fine dining venue. We tailor our pricing based on your outlet scale, kitchen stations, and team size, with zero expensive hardware lock-in.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`rounded-3xl p-8 sm:p-10 border transition-all duration-300 flex flex-col justify-between ${
                p.highlight
                  ? 'bg-white border-[#c89b3c] shadow-premium relative ring-2 ring-[#c89b3c]/20'
                  : 'bg-white border-slate-200/90 shadow-sm'
              }`}
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#c89b3c]/15 text-[#8e6121]">
                    {p.badge}
                  </span>
                  <span className="text-xs font-mono text-slate-400">Zero Hardware Lock-In</span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-display font-bold text-slate-900">
                    {p.name}
                  </h3>
                  <p className="text-sm text-slate-600">
                    {p.tagline}
                  </p>
                </div>

                <div className="py-4 border-y border-slate-100 space-y-1">
                  <div className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900">
                    {p.pricingText}
                  </div>
                  <p className="text-xs text-slate-500">
                    {p.subText}
                  </p>
                </div>

                <div className="space-y-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Plan Inclusions:
                  </span>
                  <ul className="space-y-2.5">
                    {p.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-[#c89b3c] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-8">
                <Link
                  href="/demo"
                  className={`w-full py-4 rounded-xl text-sm font-bold transition-all flex items-center justify-center gap-2 ${
                    p.highlight
                      ? 'bg-[#c89b3c] text-white hover:bg-[#b38029] shadow-glow'
                      : 'bg-slate-900 text-white hover:bg-slate-800'
                  }`}
                >
                  <span>{p.cta}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Principles */}
        <div className="bg-slate-50 rounded-3xl p-8 sm:p-12 border border-slate-200/90 max-w-4xl mx-auto space-y-6">
          <h3 className="text-xl font-display font-bold text-slate-900 text-center">
            Our Transparent Pricing Philosophy
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs sm:text-sm text-slate-600">
            <div className="space-y-1 text-center sm:text-left">
              <span className="font-bold text-slate-900 block">No Proprietary Terminals</span>
              <span>Use existing iPads, Android tablets, laptops, and thermal printers.</span>
            </div>
            <div className="space-y-1 text-center sm:text-left">
              <span className="font-bold text-slate-900 block">No Hidden Per-Transaction Surcharges</span>
              <span>We do not take a percentage cut of your restaurant’s daily food sales.</span>
            </div>
            <div className="space-y-1 text-center sm:text-left">
              <span className="font-bold text-slate-900 block">Free 1-on-1 Walkthrough</span>
              <span>Test the real system with our team before committing to any agreement.</span>
            </div>
          </div>
        </div>

        <DemoForm
          headline="Request a Tailored Pricing Consultation"
          subheadline="Share your restaurant details below, and our team will prepare a transparent quote customized for your outlet size."
        />
      </div>
    </div>
  );
}
