import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  UtensilsCrossed,
  ChefHat,
  BellRing,
  Receipt,
  BarChart3,
  Calendar,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  ExternalLink,
  Flame,
  Check
} from 'lucide-react';
import DemoForm from '@/components/DemoForm';

export const metadata = {
  title: 'How It Works — Complete Restaurant Order Lifecycle | DawatDesk',
  description: 'Understand the end-to-end operational lifecycle: from waiter table punching and paperless kitchen KDS tickets to rapid checkout and owner revenue analytics.',
};

export default function HowItWorksPage() {
  const steps = [
    {
      num: '01',
      title: 'Floor Waitstaff Punches Table Order',
      actor: 'Waitstaff',
      desc: 'When diners are seated, the waiter opens DawatDesk on any tablet or smartphone, taps the table number on the floor map, browses categorized dishes with prices, adds custom cooking instructions (e.g. "Less oil", "Extra sauce"), and transmits the order with one tap.',
      screenshot: '/images/screenshots/08_waiter_pos.png',
      details: [
        'Interactive floor grid prevents table double-booking',
        'Dish search by category or typing the first few letters',
        'Custom allergy and preparation notes stored with the ticket',
        'Table locks into "Occupied" status across the entire restaurant system'
      ]
    },
    {
      num: '02',
      title: 'Kitchen Receives Live Ticket & Prints KOT',
      actor: 'Chef & Line Cooks',
      desc: 'The order appears instantly on the Kitchen Display System (KDS) mounted in the kitchen. A live elapsed timer starts ticking, and the system automatically flags tickets taking longer than 15 minutes. If physical slips are needed, an 80mm thermal KOT slip prints automatically.',
      screenshot: '/images/screenshots/10_chef_kds.png',
      details: [
        'KDS categorizes orders into Dine-in vs Takeaway/Parcel',
        'Thermal KOT prints with sequential continuation numbers (KOT-1, KOT-2 Continued)',
        'Chef can mark dishes as "Preparing" or 86 sold-out ingredients with one tap',
        'Zero shouted orders or missing handwritten notes'
      ]
    },
    {
      num: '03',
      title: 'Food Is Plated & Audio Chime Rings on Floor',
      actor: 'Chef → Waiter',
      desc: 'The moment the chef finishes plating the meal, they tap "Ready" on the KDS screen. Instantly, an audible chime plays on the waiter’s phone or tablet, and the table card flashes with a "Ready to Serve" badge.',
      screenshot: '/images/screenshots/09_waiter_mobile.png',
      details: [
        'Food arrives hot at the diner’s table without cooling down on the pass',
        'Waitstaff knows exactly which items are ready without asking the kitchen',
        'Waiter marks items as "Served" with haptic confirmation',
        'Kitchen display clears the ticket automatically'
      ]
    },
    {
      num: '04',
      title: 'Cashier Generates Bill & Settles Multi-Tender Payment',
      actor: 'Cashier & Counter Staff',
      desc: 'When the diner requests the bill, the cashier opens the table view on the billing counter POS. The system computes subtotal, itemized discounts, and GST. The diner can pay via UPI QR code, Cash (with change calculation), or Credit/Debit Card.',
      screenshot: '/images/screenshots/11_cashier_pos.png',
      details: [
        'Instant multi-tender payment processing (Cash, UPI, Card)',
        'On-the-fly item adjustments before finalizing payment',
        'Generates compliant GST tax invoices and PDF receipts in 1 click',
        'Table immediately resets to vacant green status for new walk-ins'
      ]
    },
    {
      num: '05',
      title: 'Owner Inspects Sales Metrics in Real Time',
      actor: 'Restaurant Admin / Owner',
      desc: 'Every completed transaction feeds directly into executive reports. Restaurant owners can log in from home, their office, or a mobile phone to inspect live GMV, daily order volume, Average Order Value (AOV), and top-selling food items.',
      screenshot: '/images/screenshots/06_restaurant_reports.png',
      details: [
        'Real-time gross and net sales tracking with GST breakdowns',
        'Hourly volume charts highlighting dining peak periods',
        'Performance tracking by waitstaff and food category mix',
        'Single-click export to CSV for accounting and audit compliance'
      ]
    }
  ];

  return (
    <div className="py-12 sm:py-20 space-y-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Page Hero */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c89b3c]/15 text-[#8e6121] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#c89b3c]" />
            <span>Operational Architecture</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-slate-900 tracking-tight">
            How DawatDesk Orchestrates Your Entire Restaurant
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Discover how every diner’s meal travels through DawatDesk’s digital control desk. From the initial table order to the final cashier receipt, every station stays synchronized.
          </p>
        </div>

        {/* Workflow Steps Vertical Stack */}
        <div className="space-y-16">
          {steps.map((step, idx) => (
            <div
              key={step.num}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Left Column (Description) */}
              <div className={`lg:col-span-6 space-y-6 ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#c89b3c]/15 text-[#8e6121] text-xs font-bold font-mono">
                  <span>STEP {step.num}</span>
                  <span>•</span>
                  <span>{step.actor}</span>
                </div>

                <h2 className="text-2xl sm:text-4xl font-display font-bold text-slate-900 tracking-tight">
                  {step.title}
                </h2>

                <p className="text-slate-600 text-base leading-relaxed">
                  {step.desc}
                </p>

                <div className="space-y-2 pt-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    What Happens in the Software:
                  </span>
                  <ul className="space-y-2">
                    {step.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2.5 text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-[#c89b3c] shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Column (Authentic Screenshot) */}
              <div className={`lg:col-span-6 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="rounded-3xl p-3 bg-slate-100 border border-slate-200 shadow-xl overflow-hidden">
                  <div className="relative aspect-[16/10] bg-slate-950 rounded-2xl overflow-hidden">
                    <Image
                      src={step.screenshot}
                      alt={step.title}
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Form */}
        <DemoForm
          headline="Ready to See This Workflow in Your Own Restaurant?"
          subheadline="Book a personalized live demonstration with our team. We’ll guide you through each station and show you how DawatDesk will look in your kitchen and dining room."
        />
      </div>
    </div>
  );
}
