import React from 'react';
import Link from 'next/link';
import DemoForm from '@/components/DemoForm';
import {
  Sparkles,
  CheckCircle2,
  Calendar,
  ShieldCheck,
  Clock,
  Laptop,
  Check,
  ExternalLink
} from 'lucide-react';

export const metadata = {
  title: 'Book a Free 1-on-1 Product Demo | DawatDesk',
  description: 'Experience DawatDesk live. Schedule a personalized walkthrough of the waiter floor pad, kitchen KDS display, cashier counter billing, and owner analytics.',
};

export default function DemoPage() {
  return (
    <div className="py-12 sm:py-20 space-y-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c89b3c]/15 text-[#8e6121] text-xs font-bold uppercase tracking-wider">
            <Calendar className="w-3.5 h-3.5 text-[#c89b3c]" />
            <span>Personalized Walkthrough</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-slate-900 tracking-tight">
            See DawatDesk in Action
          </h1>
          <p className="text-slate-600 text-base sm:text-lg">
            Schedule a personalized 30-minute demonstration tailored to your exact restaurant service format.
          </p>
        </div>

        {/* Demo Details & Form Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: What to expect */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-900 text-white rounded-3xl p-8 border border-slate-800 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#c89b3c]">
                  What You Will Experience:
                </span>
                <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
                  30-Minute Live Walkthrough
                </h3>
              </div>

              <ul className="space-y-3.5 text-xs sm:text-sm text-slate-300">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#c89b3c] shrink-0 mt-0.5" />
                  <span>Interactive demonstration of Waiter order punching on phone/tablet</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#c89b3c] shrink-0 mt-0.5" />
                  <span>Real-time Kitchen Display System (KDS) order receipt & elapsed timers</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#c89b3c] shrink-0 mt-0.5" />
                  <span>Thermal KOT 80mm slip printing demonstration</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#c89b3c] shrink-0 mt-0.5" />
                  <span>3-click cashier checkout with UPI QR & official GST invoice creation</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#c89b3c] shrink-0 mt-0.5" />
                  <span>Q&A regarding your hardware, tables, and outlet setup</span>
                </li>
              </ul>

              <div className="pt-4 border-t border-slate-800 text-xs text-slate-400 space-y-2">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#c89b3c]" />
                  <span>Zero pressure sales consultation</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#c89b3c]" />
                  <span>Flexible time slots arranged to fit your service schedule</span>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2 text-center">
              <span className="text-xs font-bold text-slate-800 block">
                Prefer to explore immediately on your own?
              </span>
              <a
                href="https://dawatdesk.vercel.app/login"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#c89b3c] hover:underline"
              >
                <span>Launch the live application in your browser</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Demo Form */}
          <div className="lg:col-span-7">
            <DemoForm
              headline="Reserve Your 1-on-1 Session"
              subheadline="Provide your details below, and our restaurant technology specialist will confirm your session time."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
