import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Building2,
  CheckCircle2,
  Calendar,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Server,
  Activity,
  Check
} from 'lucide-react';
import DemoForm from '@/components/DemoForm';

export const metadata = {
  title: 'Multi-Outlet Restaurant Chain & Franchise Management | DawatDesk',
  description: 'Centralized network command center for multi-branch dining brands. Onboard outlets, monitor cross-branch GMV, and manage team access across all locations.',
};

export default function MultiOutletPage() {
  return (
    <div className="py-12 sm:py-20 space-y-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
          <Link href="/" className="hover:text-slate-900">Home</Link>
          <span>/</span>
          <Link href="/features" className="hover:text-slate-900">Features</Link>
          <span>/</span>
          <span className="text-[#c89b3c]">Multi-Outlet Network</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c89b3c]/15 text-[#8e6121] text-xs font-bold uppercase tracking-wider">
              <Building2 className="w-3.5 h-3.5 text-[#c89b3c]" />
              <span>Enterprise Brand Command</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-slate-900 tracking-tight leading-tight">
              Manage Multiple Outlets from One Central Command Center
            </h1>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Growing from a single restaurant to multiple branches or cloud kitchens? DawatDesk’s Super Admin network console gives franchise owners unified oversight over all operating locations, cross-outlet live order feeds, and branch-level configuration.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/demo"
                className="px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-[#c89b3c] hover:bg-[#b38029] shadow-glow transition-all flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Multi-Outlet Demo</span>
              </Link>
              <a
                href="https://dawatdesk.vercel.app/login"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-700 hover:text-slate-900 border border-slate-200 hover:bg-slate-50 transition-all"
              >
                Inspect Network Console
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl p-3 bg-slate-100 border border-slate-200 shadow-xl overflow-hidden">
              <div className="relative aspect-[16/10] bg-slate-950 rounded-2xl overflow-hidden">
                <Image
                  src="/images/screenshots/13_admin_restaurants.png"
                  alt="DawatDesk Multi-Outlet Restaurants Network Administration"
                  fill
                  priority
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Multi-Branch Capabilities */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-3xl p-8 border border-slate-200 space-y-3 shadow-xs">
            <h3 className="text-xl font-bold text-slate-900">Rapid Outlet Onboarding</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Launch a new dining location or cloud kitchen outlet in minutes with automated branch creation, table presets, and tax configuration.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-slate-200 space-y-3 shadow-xs">
            <h3 className="text-xl font-bold text-slate-900">Cross-Venue Inspection</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Drill down into any branch’s live kitchen tickets, active floor status, and cashier settlement records with one click without needing separate passwords.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-slate-200 space-y-3 shadow-xs">
            <h3 className="text-xl font-bold text-slate-900">Network Revenue Rollup</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Aggregate sales volume, top dishes across all locations, and overall franchise growth on an executive command dashboard.
            </p>
          </div>
        </div>

        <DemoForm
          headline="Scale Your Restaurant Brand Across Multiple Locations"
          subheadline="Schedule a consultation to see how DawatDesk powers multi-branch restaurant chains and franchise expansion."
        />
      </div>
    </div>
  );
}
