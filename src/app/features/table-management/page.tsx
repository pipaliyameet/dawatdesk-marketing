import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Layers,
  CheckCircle2,
  Calendar,
  Sparkles,
  ArrowRight,
  Users,
  Clock,
  Check
} from 'lucide-react';
import DemoForm from '@/components/DemoForm';

export const metadata = {
  title: 'Table Layout & Floor Management | DawatDesk',
  description: 'Interactive restaurant floor plan, real-time table status tracking (occupied, available, reserved), capacity planning, and walk-in waitlist queue.',
};

export default function TableManagementPage() {
  return (
    <div className="py-12 sm:py-20 space-y-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
          <Link href="/" className="hover:text-slate-900">Home</Link>
          <span>/</span>
          <Link href="/features" className="hover:text-slate-900">Features</Link>
          <span>/</span>
          <span className="text-[#c89b3c]">Table Management</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c89b3c]/15 text-[#8e6121] text-xs font-bold uppercase tracking-wider">
              <Layers className="w-3.5 h-3.5 text-[#c89b3c]" />
              <span>Dining Floor Architecture</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-slate-900 tracking-tight leading-tight">
              Visual Table Layout & Walk-in Waitlist Queue
            </h1>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Maximize your dining room seating. DawatDesk gives managers and hosts a visual table grid showing real-time table states, seating capacities, and active orders. Coupled with a digital customer waitlist queue, you can organize peak-hour walk-ins with ease.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/demo"
                className="px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-[#c89b3c] hover:bg-[#b38029] shadow-glow transition-all flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Floor Walkthrough</span>
              </Link>
              <a
                href="https://dawatdesk.vercel.app/login"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-700 hover:text-slate-900 border border-slate-200 hover:bg-slate-50 transition-all"
              >
                Inspect Tables Live
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl p-3 bg-slate-100 border border-slate-200 shadow-xl overflow-hidden">
              <div className="relative aspect-[16/10] bg-slate-950 rounded-2xl overflow-hidden">
                <Image
                  src="/images/screenshots/04_restaurant_tables.png"
                  alt="DawatDesk Table Floor Layout Screen"
                  fill
                  priority
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-3xl p-8 border border-slate-200 space-y-3 shadow-xs">
            <h3 className="text-xl font-bold text-slate-900">Color-Coded Status</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Green indicates available tables, amber shows dining guests with orders pending in kitchen, and blue marks served tables nearing checkout.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-slate-200 space-y-3 shadow-xs">
            <h3 className="text-xl font-bold text-slate-900">Configurable Capacities</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Define 2-seater booths, 4-person dining tables, or 8+ party banquet tables so hosts seat walk-ins according to party sizes without wasting seats.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-slate-200 space-y-3 shadow-xs">
            <h3 className="text-xl font-bold text-slate-900">Integrated Waitlist Queue</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Log waiting guests with phone number, party size, and waiting timer directly at the counter. Seat guests into vacant tables with one click.
            </p>
          </div>
        </div>

        <DemoForm
          headline="Optimize Your Dining Floor and Turnaround Times"
          subheadline="Schedule a live session to see how DawatDesk streamlines floor layouts and walk-in queue management."
        />
      </div>
    </div>
  );
}
