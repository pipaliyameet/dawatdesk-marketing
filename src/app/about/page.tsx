import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  ArrowRight,
  ExternalLink,
  UtensilsCrossed,
  Zap,
  Users,
  Building2
} from 'lucide-react';

export const metadata = {
  title: 'About DawatDesk — The Digital Control Desk for Modern Restaurants',
  description: 'Learn why we built DawatDesk. Our mission is to eliminate restaurant operational chaos and connect front-of-house, kitchen lines, and checkout counters into a cohesive digital workflow.',
};

export default function AboutPage() {
  return (
    <div className="py-12 sm:py-20 space-y-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* About Hero */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c89b3c]/15 text-[#8e6121] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#c89b3c]" />
            <span>Our Mission & Story</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-slate-900 tracking-tight">
            Built to Bring Restaurant Operations Together
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            DawatDesk was born from a simple observation: restaurants are among the most fast-paced, high-pressure businesses in the world, yet most teams still rely on disjointed, legacy systems that break down during peak hours.
          </p>
        </div>

        {/* Narrative Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-slate-600 text-base leading-relaxed">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900">
              Run Your Restaurant. Not Behind It.
            </h2>
            <p>
              When a dining room gets busy on a Saturday night, the breakdown is rarely about cooking quality—it is almost always an operational breakdown in communication. Waiters miss cooking notes, kitchen tickets pile up without clear urgency, dishes sit cold on the kitchen pass, and customers wait impatiently at the billing counter.
            </p>
            <p>
              Traditional restaurant management software was built as a single cash register terminal sitting in a corner. In contrast, DawatDesk is architected as an integrated <strong>digital control desk</strong>: an intelligent web-native network connecting the waiter taking orders at table 14, the head chef on the kitchen line, and the cashier handling payments.
            </p>
            <p>
              We believe in honesty, reliability, and zero hardware lock-in. Restaurant owners should not be forced into proprietary hardware contracts or trapped by opaque transaction percentages.
            </p>

            <div className="pt-2">
              <Link
                href="/demo"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-[#c89b3c] hover:bg-[#b38029] shadow-glow transition-all"
              >
                <span>Schedule a 1-on-1 Conversation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl p-3 bg-slate-100 border border-slate-200 shadow-xl overflow-hidden">
              <div className="relative aspect-[16/10] bg-slate-950 rounded-2xl overflow-hidden">
                <Image
                  src="/images/screenshots/02_restaurant_dashboard.png"
                  alt="DawatDesk Product Platform"
                  fill
                  priority
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-3xl p-8 border border-slate-200 space-y-3 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-[#c89b3c]/20 text-[#8e6121] flex items-center justify-center font-bold">
              <Zap className="w-5 h-5 text-[#c89b3c]" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Simplicity & Speed</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Every interface in DawatDesk is designed for minimal cognitive load so new waitstaff and kitchen workers can learn it in less than 15 minutes.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-slate-200 space-y-3 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Truth in Software</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              We never advertise unverified features or fabricate marketing statistics. If a module is active, we demonstrate it; if it is in development, we are transparent about it.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-slate-200 space-y-3 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
              <Building2 className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Scalable Control</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              From an independent cafe to a 10-outlet franchise, DawatDesk provides the operational foundation to maintain consistency across every shift.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
