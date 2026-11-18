import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Users,
  CheckCircle2,
  Calendar,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Lock,
  Check
} from 'lucide-react';
import DemoForm from '@/components/DemoForm';

export const metadata = {
  title: 'Staff Management & Role-Based Access Control | DawatDesk',
  description: 'Compartmentalized logins and strict role-based permissions for Waiters, Chefs, Cashiers, and Managers. Protect financial records and keep screens uncluttered.',
};

export default function StaffManagementPage() {
  return (
    <div className="py-12 sm:py-20 space-y-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
          <Link href="/" className="hover:text-slate-900">Home</Link>
          <span>/</span>
          <Link href="/features" className="hover:text-slate-900">Features</Link>
          <span>/</span>
          <span className="text-[#c89b3c]">Staff Management</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c89b3c]/15 text-[#8e6121] text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5 text-[#c89b3c]" />
              <span>Security & Roles</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-slate-900 tracking-tight leading-tight">
              Role-Based Access Control for Complete Team Security
            </h1>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Every employee sees only what they need to do their job. Waitstaff access floor ordering, chefs access kitchen tickets, cashiers process payments, and only authorized managers inspect financial reports and configure tax rates.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/demo"
                className="px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-[#c89b3c] hover:bg-[#b38029] shadow-glow transition-all flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Security Walkthrough</span>
              </Link>
              <a
                href="https://dawatdesk.vercel.app/login"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-700 hover:text-slate-900 border border-slate-200 hover:bg-slate-50 transition-all"
              >
                Inspect Staff Portal Live
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl p-3 bg-slate-100 border border-slate-200 shadow-xl overflow-hidden">
              <div className="relative aspect-[16/10] bg-slate-950 rounded-2xl overflow-hidden">
                <Image
                  src="/images/screenshots/07_restaurant_staff.png"
                  alt="DawatDesk Staff Onboarding and Management Screen"
                  fill
                  priority
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Roles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-3xl p-6 border border-slate-200 space-y-2 shadow-xs">
            <h3 className="text-lg font-bold text-slate-900">Waiter</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Table ordering, special notes, ready chime notifications, and serving tracking.
            </p>
          </div>
          <div className="bg-white rounded-3xl p-6 border border-slate-200 space-y-2 shadow-xs">
            <h3 className="text-lg font-bold text-slate-900">Chef</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              KDS tickets, prep countdowns, KOT printing, and 1-tap item sold-out toggling.
            </p>
          </div>
          <div className="bg-white rounded-3xl p-6 border border-slate-200 space-y-2 shadow-xs">
            <h3 className="text-lg font-bold text-slate-900">Cashier</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Invoice generation, split tenders, UPI QR verification, and waitlist queues.
            </p>
          </div>
          <div className="bg-white rounded-3xl p-6 border border-slate-200 space-y-2 shadow-xs">
            <h3 className="text-lg font-bold text-slate-900">Manager</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Menu configuration, floor layout, staff onboarding, and executive analytics.
            </p>
          </div>
        </div>

        <DemoForm
          headline="Keep Your Restaurant Operations Organized and Secure"
          subheadline="Schedule a demo to see how DawatDesk’s role-based access control protects your business data."
        />
      </div>
    </div>
  );
}
