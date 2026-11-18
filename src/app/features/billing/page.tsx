import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Receipt,
  CheckCircle2,
  Calendar,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CreditCard,
  Banknote,
  QrCode,
  FileSpreadsheet,
  Download,
  Check
} from 'lucide-react';
import DemoForm from '@/components/DemoForm';

export const metadata = {
  title: 'Restaurant Billing & Cashier Counter POS | DawatDesk',
  description: 'Fast 3-click checkout counter POS. Split bills, calculate GST automatically, accept UPI QR, cards, and cash, and generate branded PDF invoices in seconds.',
};

export default function BillingPage() {
  return (
    <div className="py-12 sm:py-20 space-y-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
          <Link href="/" className="hover:text-slate-900">Home</Link>
          <span>/</span>
          <Link href="/features" className="hover:text-slate-900">Features</Link>
          <span>/</span>
          <span className="text-[#c89b3c]">Billing & Payments</span>
        </div>

        {/* Feature Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c89b3c]/15 text-[#8e6121] text-xs font-bold uppercase tracking-wider">
              <Receipt className="w-3.5 h-3.5 text-[#c89b3c]" />
              <span>Checkout Counter POS</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-slate-900 tracking-tight leading-tight">
              Rapid Counter Billing That Keeps Exit Lines Moving
            </h1>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Clear peak dining queues in seconds. Cashiers can view open table bills, adjust items or apply custom discounts on the fly, accept multi-tender payments (Cash with change calculation, UPI QR, or Card), and generate official GST tax invoices instantly.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/demo"
                className="px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-[#c89b3c] hover:bg-[#b38029] shadow-glow transition-all flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Schedule Billing Demo</span>
              </Link>
              <a
                href="https://dawatdesk.vercel.app/login"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-700 hover:text-slate-900 border border-slate-200 hover:bg-slate-50 transition-all"
              >
                Try Cashier POS Live
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl p-3 bg-slate-100 border border-slate-200 shadow-xl overflow-hidden">
              <div className="relative aspect-[16/10] bg-slate-950 rounded-2xl overflow-hidden">
                <Image
                  src="/images/screenshots/11_cashier_pos.png"
                  alt="DawatDesk Cashier POS Billing Screen"
                  fill
                  priority
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Multi-Tender Payment Capabilities */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-3xl p-8 border border-slate-200 space-y-4 shadow-xs">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
              <Banknote className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Cash With Change Calc</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Record cash tendered amounts with automated change return calculation. Single-tap checkout when exact cash is received avoids mental math errors.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-slate-200 space-y-4 shadow-xs">
            <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
              <QrCode className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Dynamic UPI & Digital QR</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Supports UPI / Digital Wallet settlements for Google Pay, PhonePe, Paytm, and BHIM. Cashiers mark wallet transactions with clean reconciliation codes.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-slate-200 space-y-4 shadow-xs">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
              <CreditCard className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Credit / Debit Card Tenders</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Process card payments seamlessly alongside your bank POS swipe terminal. Record transaction notes for effortless end-of-day bank settlement reconciliation.
            </p>
          </div>
        </div>

        {/* GST Tax & PDF Invoice Generation */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 space-y-6">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#c89b3c]">
              Built-in Compliance
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
              Automated GST Computation & Branded PDF Receipts
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              DawatDesk calculates itemized GST (CGST + SGST) according to your configured restaurant tax percentage. Instantly generate downloadable, printable PDF receipts with your restaurant logo, address, FSSAI / GST numbers, itemized breakdown, and customer info.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-800 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#c89b3c]" />
              <span>jsPDF Client-Side Invoice Engine</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#c89b3c]" />
              <span>Configurable CGST & SGST Percentages</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#c89b3c]" />
              <span>80mm Thermal Receipt or Full A4 PDF</span>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <DemoForm
          headline="Experience Fast Billing & POS Settlements"
          subheadline="Book a walkthrough to see how DawatDesk accelerates your counter checkout and eliminates billing mistakes."
        />
      </div>
    </div>
  );
}
