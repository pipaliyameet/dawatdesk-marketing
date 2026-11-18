import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  BarChart3,
  TrendingUp,
  Download,
  Calendar,
  Sparkles,
  ArrowRight,
  Receipt,
  FileSpreadsheet,
  Check
} from 'lucide-react';
import DemoForm from '@/components/DemoForm';

export const metadata = {
  title: 'Executive Sales Reports & Restaurant Analytics | DawatDesk',
  description: 'Track daily GMV, Average Order Value (AOV), top-selling food categories, hourly sales rush trends, tender breakdown, and export CSV financial summaries.',
};

export default function ReportsPage() {
  return (
    <div className="py-12 sm:py-20 space-y-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
          <Link href="/" className="hover:text-slate-900">Home</Link>
          <span>/</span>
          <Link href="/features" className="hover:text-slate-900">Features</Link>
          <span>/</span>
          <span className="text-[#c89b3c]">Analytics & Reports</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c89b3c]/15 text-[#8e6121] text-xs font-bold uppercase tracking-wider">
              <BarChart3 className="w-3.5 h-3.5 text-[#c89b3c]" />
              <span>Owner Financial Intelligence</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-slate-900 tracking-tight leading-tight">
              Real-Time Revenue Analytics & Executive Reporting
            </h1>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Eliminate end-of-day guesswork. DawatDesk gives restaurant owners instant visibility into gross merchandise volume (GMV), net sales after GST, Average Order Value (AOV), payment method splits, and top-selling food categories across any custom date range.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/demo"
                className="px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-[#c89b3c] hover:bg-[#b38029] shadow-glow transition-all flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Reporting Demo</span>
              </Link>
              <a
                href="https://dawatdesk.vercel.app/login"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-700 hover:text-slate-900 border border-slate-200 hover:bg-slate-50 transition-all"
              >
                Inspect Live Analytics
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl p-3 bg-slate-100 border border-slate-200 shadow-xl overflow-hidden">
              <div className="relative aspect-[16/10] bg-slate-950 rounded-2xl overflow-hidden">
                <Image
                  src="/images/screenshots/06_restaurant_reports.png"
                  alt="DawatDesk Sales and Revenue Reports Analytics Screen"
                  fill
                  priority
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Analytics Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-3xl p-8 border border-slate-200 space-y-3 shadow-xs">
            <h3 className="text-xl font-bold text-slate-900">GMV & Average Ticket Size</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Track daily sales velocity and Average Order Value (AOV) to measure whether your upsell tactics and combos are working.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-slate-200 space-y-3 shadow-xs">
            <h3 className="text-xl font-bold text-slate-900">Payment Method Mix</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Instant breakdown of total settlements collected in Cash, UPI / QR digital wallets, and Card swipes for seamless bank deposits.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-slate-200 space-y-3 shadow-xs">
            <h3 className="text-xl font-bold text-slate-900">CSV & Excel Export</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Export complete transaction registers and sales ledgers with one click for your accountant or tax auditor.
            </p>
          </div>
        </div>

        <DemoForm
          headline="Unlock Operational Clarity and Business Visibility"
          subheadline="Book a walkthrough to see how DawatDesk turns raw order logs into actionable restaurant growth insights."
        />
      </div>
    </div>
  );
}
