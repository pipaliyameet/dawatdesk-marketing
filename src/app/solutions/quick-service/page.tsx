import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Zap,
  CheckCircle2,
  Calendar,
  ArrowRight,
  Receipt,
  Printer,
  Check
} from 'lucide-react';
import DemoForm from '@/components/DemoForm';

export const metadata = {
  title: 'POS Software for Quick Service Restaurants (QSR) & Food Courts | DawatDesk',
  description: 'Designed for high transaction velocity. Fast order entry, numbered parcel takeaway tickets, instant KDS line cook routing, and 3-click counter checkout.',
};

export default function QsrSolutionPage() {
  return (
    <div className="py-12 sm:py-20 space-y-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
          <Link href="/" className="hover:text-slate-900">Home</Link>
          <span>/</span>
          <Link href="/solutions" className="hover:text-slate-900">Solutions</Link>
          <span>/</span>
          <span className="text-[#c89b3c]">Quick Service (QSR)</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c89b3c]/15 text-[#8e6121] text-xs font-bold uppercase tracking-wider">
              <Zap className="w-3.5 h-3.5 text-[#c89b3c]" />
              <span>Velocity & Volume Operations</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-slate-900 tracking-tight leading-tight">
              Speed and Simplicity for Quick Service Outlets
            </h1>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              In QSR, every second saved at the order counter directly increases outlet capacity. DawatDesk streamlines counter punching, assigns sequential parcel takeaway numbers, and transmits orders directly to line cooks without waiting for manual batching.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/demo"
                className="px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-[#c89b3c] hover:bg-[#b38029] shadow-glow transition-all flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Book QSR Demo</span>
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl p-3 bg-slate-100 border border-slate-200 shadow-xl overflow-hidden">
              <div className="relative aspect-[16/10] bg-slate-950 rounded-2xl overflow-hidden">
                <Image
                  src="/images/screenshots/11_cashier_pos.png"
                  alt="DawatDesk Cashier Fast Order Punching for QSR"
                  fill
                  priority
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>

        {/* QSR Strengths */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-3xl p-8 border border-slate-200 space-y-3 shadow-xs">
            <h3 className="text-xl font-bold text-slate-900">3-Click Checkout</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Punch dishes, select payment method, and generate customer receipts in 3 clicks with automated cash change calculation.
            </p>
          </div>
          <div className="bg-white rounded-3xl p-8 border border-slate-200 space-y-3 shadow-xs">
            <h3 className="text-xl font-bold text-slate-900">Numbered Parcel Tickets</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Differentiate Takeaway/Parcel tickets clearly on kitchen screens and customer receipts for effortless order collection.
            </p>
          </div>
          <div className="bg-white rounded-3xl p-8 border border-slate-200 space-y-3 shadow-xs">
            <h3 className="text-xl font-bold text-slate-900">Line Cook Speed</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Incoming tickets appear immediately on kitchen display screens with elapsed prep timers, keeping line assembly fast and organized.
            </p>
          </div>
        </div>

        <DemoForm
          headline="Accelerate Your Counter Service and Throughput"
          subheadline="Book a walkthrough to see how DawatDesk handles high-speed QSR ordering and fast payment reconciliation."
        />
      </div>
    </div>
  );
}
