'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Calendar,
  UtensilsCrossed,
  ChefHat,
  Receipt,
  Layers,
  Users,
  BarChart3,
  Building2,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  ExternalLink,
  ShieldCheck,
  Clock,
  Printer,
  BellRing,
  Smartphone,
  Laptop,
  Check,
  ChevronRight,
  TrendingUp,
  FileText,
  HelpCircle,
  PhoneCall,
  Zap,
  Split,
  ChevronDown
} from 'lucide-react';
import DemoForm from '@/components/DemoForm';

export default function HomePage() {
  const [activeRoleTab, setActiveRoleTab] = useState<'waiter' | 'chef' | 'cashier' | 'admin'>('waiter');
  const [activeWorkflowStep, setActiveWorkflowStep] = useState<number>(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const workflowSteps = [
    {
      step: '01',
      title: 'Order Punched at Table',
      actor: 'Waiter',
      icon: UtensilsCrossed,
      desc: 'Waitstaff taps table number on tablet or mobile, browses clean digital menu categories, selects dishes with special instructions, and transmits ticket to the kitchen with one tap.',
      screenshot: '/images/screenshots/08_waiter_pos.png',
      badge: 'Zero Writing Errors'
    },
    {
      step: '02',
      title: 'KDS & KOT Instant Alert',
      actor: 'Kitchen / Chef',
      icon: ChefHat,
      desc: 'Chef receives incoming order on the Kitchen Display System with live elapsed timer. System generates thermal KOT slip with continuation number (KOT-1, KOT-2) for cooking stations.',
      screenshot: '/images/screenshots/10_chef_kds.png',
      badge: 'Real-Time KDS'
    },
    {
      step: '03',
      title: 'Ready Chime & Hot Service',
      actor: 'Chef → Waiter',
      icon: BellRing,
      desc: 'When food is plated, chef taps "Ready". Waitstaff device rings with an audio chime and visual alert. Waiter delivers hot dishes to the guest and marks items "Served".',
      screenshot: '/images/screenshots/09_waiter_mobile.png',
      badge: 'Zero Kitchen Shouting'
    },
    {
      step: '04',
      title: 'Instant Checkout & PDF Bill',
      actor: 'Cashier',
      icon: Receipt,
      desc: 'Cashier reviews table tally, modifies items if requested, chooses payment mode (Cash, UPI QR, or Card), prints GST receipt, or downloads official PDF invoice in seconds.',
      screenshot: '/images/screenshots/11_cashier_pos.png',
      badge: 'GST & Multi-Tender'
    },
    {
      step: '05',
      title: 'Real-Time Analytics & Settlement',
      actor: 'Restaurant Admin',
      icon: BarChart3,
      desc: 'The table resets to vacant immediately. Owner dashboard logs GMV, top-performing categories, waiter sales, and settlement records across all active outlets.',
      screenshot: '/images/screenshots/06_restaurant_reports.png',
      badge: 'Live Revenue Visibility'
    },
  ];

  const coreModules = [
    {
      id: 'pos',
      title: 'Restaurant POS & Floor Management',
      tag: 'Floor Operations',
      desc: 'Visual table layout with occupied, vacant, and reserved indicators. Rapid search, special notes per dish, and quick parcel / takeaway orders.',
      benefit: 'Eliminates paper order pads, speeds up table turns, and prevents double-booking.',
      screenshot: '/images/screenshots/04_restaurant_tables.png',
      link: '/features/restaurant-pos',
    },
    {
      id: 'kds',
      title: 'Kitchen Display System (KDS)',
      tag: 'Back of House',
      desc: 'Paperless kitchen queue with elapsed prep timers, 15-minute urgency flags, and status transitions from Pending to Cooking to Plated.',
      benefit: 'Stops kitchen bottlenecks, tracks prep speed, and organizes multiple chef stations.',
      screenshot: '/images/screenshots/10_chef_kds.png',
      link: '/features/kitchen-management',
    },
    {
      id: 'kot',
      title: 'Thermal KOT Printing & Continuity',
      tag: 'Kitchen Slips',
      desc: 'Direct 80mm thermal receipt printing with sequential continuation numbering (KOT - 1, KOT - 2 Continued) and item notes.',
      benefit: 'Provides crisp physical slips for traditional cooks while maintaining full digital tracking.',
      screenshot: '/images/screenshots/10_chef_kds.png',
      link: '/features/kitchen-management',
    },
    {
      id: 'billing',
      title: 'Cashier Counter POS & Billing',
      tag: 'Checkout Desk',
      desc: 'Instant invoice calculation with split tenders: Cash, UPI / QR digital wallets, and cards. On-the-fly item adjustments and PDF bill printing.',
      benefit: 'Clears long billing lines during peak dining rushes with 3-click payment settlements.',
      screenshot: '/images/screenshots/11_cashier_pos.png',
      link: '/features/billing',
    },
    {
      id: '86toggle',
      title: 'Instant "86" Item Availability',
      tag: 'Menu Control',
      desc: 'Chefs and managers can mark dishes sold out directly from the kitchen screen with one tap, updating all waitstaff menus immediately.',
      benefit: 'Prevents staff from punching unavailable dishes, saving guest embarrassment.',
      screenshot: '/images/screenshots/03_restaurant_menu.png',
      link: '/features/menu-management',
    },
    {
      id: 'waitlist',
      title: 'Digital Table Waitlist Queue',
      tag: 'Host & Greeting',
      desc: 'Track walk-in parties, guest contact numbers, party sizes, and waiting times. Assign tables with a single click as soon as bills settle.',
      benefit: 'Keeps entrance organized during busy weekends and captures valuable customer contacts.',
      screenshot: '/images/screenshots/11_cashier_pos.png',
      link: '/features/table-management',
    },
    {
      id: 'menu',
      title: 'Menu & Category Hierarchy',
      tag: 'Menu Engineering',
      desc: 'Configure multi-level categories (Starters, Mains, Desserts, Beverages), descriptions, item prices, and prep time estimates.',
      benefit: 'Update dish pricing and seasonal specials instantly without costly reprint delays.',
      screenshot: '/images/screenshots/03_restaurant_menu.png',
      link: '/features/menu-management',
    },
    {
      id: 'staff',
      title: 'Role-Based Access Control',
      tag: 'Team Security',
      desc: 'Dedicated credential access for Waiters, Chefs, Cashiers, and Managers. Each team member sees only their relevant workflow.',
      benefit: 'Protects financial data, prevents unauthorized bill voids, and keeps screens focused.',
      screenshot: '/images/screenshots/07_restaurant_staff.png',
      link: '/features/staff-management',
    },
    {
      id: 'analytics',
      title: 'Executive Sales & Revenue Analytics',
      tag: 'Owner Insights',
      desc: 'Track daily GMV, Average Order Value (AOV), hourly rush volume, tender breakdowns, and export complete reports to CSV.',
      benefit: 'Reveals top-selling dishes and revenue trends so owners make data-backed purchasing choices.',
      screenshot: '/images/screenshots/06_restaurant_reports.png',
      link: '/features/reports',
    },
  ];

  const roleDetails = {
    waiter: {
      role: 'Waitstaff & Order Taker',
      tagline: 'Take orders at the table, punch instantly, and serve food hot.',
      actions: [
        'Visual interactive table layout showing free vs occupied tables',
        'Search dishes by category or name with 1-tap quantity increments',
        'Add special culinary notes (e.g. "Less spicy", "No onion")',
        'Audible chime notification when the kitchen marks food Ready',
        'One-tap "Mark as Served" action with visual confirmation'
      ],
      screenshot: '/images/screenshots/08_waiter_pos.png',
      mobileScreenshot: '/images/screenshots/09_waiter_mobile.png',
      badge: 'Floor Efficiency'
    },
    chef: {
      role: 'Head Chef & Kitchen Staff',
      tagline: 'A paperless Kitchen Display System designed for high-heat rushes.',
      actions: [
        'Live orders feed sorted by Dine-in and Takeaway/Parcel tickets',
        'Elapsed prep timer with automated 15-minute urgency indicator',
        'Status progression: Pending → Preparing (Cooking) → Ready (Plated)',
        'One-tap "86 / Sold Out" availability toggle for depleted ingredients',
        'Standard 80mm thermal KOT printing with sequence continuation'
      ],
      screenshot: '/images/screenshots/10_chef_kds.png',
      mobileScreenshot: '/images/screenshots/10_chef_kds.png',
      badge: 'Kitchen Flow'
    },
    cashier: {
      role: 'Cashier & Front Desk Host',
      tagline: 'Rapid 3-click bill settlements, split tenders, and queue handling.',
      actions: [
        'Direct table billing with item editing prior to final settlement',
        'Multi-tender options: Cash, Digital UPI / QR Code, and Credit/Debit Card',
        'Accurate GST tax computation and discount percentage application',
        'Instant branded PDF invoice generation and thermal receipt printing',
        'Walk-in waiting queue management with party size & phone logging'
      ],
      screenshot: '/images/screenshots/11_cashier_pos.png',
      mobileScreenshot: '/images/screenshots/11_cashier_pos.png',
      badge: 'Counter Speed'
    },
    admin: {
      role: 'Restaurant Owner & General Manager',
      tagline: 'Complete operational visibility over staff, floor, and finances.',
      actions: [
        'Centralized dashboard tracking live sales, active tables, and open orders',
        'Menu management: dish descriptions, pricing, and category sorting',
        'Floor configuration: table count, section presets, and capacity planning',
        'Staff onboarding: create team logins and manage role permissions',
        'Date-range sales analytics, GMV trends, and exportable financial summaries'
      ],
      screenshot: '/images/screenshots/02_restaurant_dashboard.png',
      mobileScreenshot: '/images/screenshots/06_restaurant_reports.png',
      badge: 'Executive Control'
    },
  };

  const faqs = [
    {
      q: 'What is DawatDesk and how is it different from traditional POS machines?',
      a: 'DawatDesk is a modern, web-native restaurant management SaaS and digital control desk. Unlike bulky legacy offline billing machines that isolate data on a single counter PC, DawatDesk connects your waitstaff taking orders at the table, your chefs cooking in the kitchen via a live Kitchen Display System (KDS), your cashier settling payments, and the restaurant owner monitoring live performance from anywhere on any standard browser.'
    },
    {
      q: 'Does DawatDesk require expensive specialized hardware?',
      a: 'No. DawatDesk is built with zero hardware lock-in. It operates seamlessly on standard hardware you already own: Android tablets, iPads, touchscreen POS terminals, laptops, desktop computers, and smartphones. For printing, it supports standard 80mm ESC/POS thermal receipt printers and browser PDF printing.'
    },
    {
      q: 'How does the order workflow travel between Waiter, Kitchen, and Cashier?',
      a: 'When a waiter punches an order at the table, it instantly appears on the Chef’s Kitchen Display System (KDS) and prints a thermal KOT if configured. The chef updates the ticket as items are prepared and marks them Ready. The waiter receives an instant audio chime on their device, delivers the dishes, and marks them Served. When the guest is ready to leave, the cashier opens the table bill, confirms payment method (Cash, UPI, or Card), and completes the order, automatically resetting the table to vacant.'
    },
    {
      q: 'Can our kitchen print physical Kitchen Order Tickets (KOT)?',
      a: 'Yes! DawatDesk has built-in 80mm thermal KOT printing. When an order arrives or items are added to an existing table, the chef can print a formatted KOT slip showing table number, waiter name, order time, dish quantities, cooking notes, and continuation counters (KOT - 1, KOT - 2 Continued).'
    },
    {
      q: 'What payment methods does DawatDesk support at the counter?',
      a: 'Cashier checkout supports Cash, Digital Wallet / UPI QR code, and Credit/Debit Card payments. Cashiers can also record tendered amounts with automatic change calculation, apply percentage discounts, and generate official GST-compliant tax invoices in PDF format.'
    },
    {
      q: 'How does DawatDesk handle temporary internet interruptions?',
      a: 'DawatDesk includes real-time connection status awareness. When connectivity drops, the system displays an offline indicator to inform staff, retains active view states, and alerts users when connectivity returns to resume synchronized operations.'
    },
    {
      q: 'Can DawatDesk manage multiple restaurant branches or cloud kitchens?',
      a: 'Yes. DawatDesk features a dedicated Multi-Venue Super Admin network architecture that allows multi-outlet brand owners to inspect branch performance, onboard new locations, monitor network-wide GMV, and manage staff permissions across multiple dining outlets.'
    },
    {
      q: 'How do I test or evaluate DawatDesk before purchasing?',
      a: 'You can explore our running demo at https://dawatdesk.vercel.app/ or book a personalized 1-on-1 walkthrough with our restaurant technology specialist using the form on this website. We will walk you through the exact setup for your restaurant format.'
    },
  ];

  return (
    <div className="space-y-24 sm:space-y-32 pb-16">
      {/* ──────────────────────────────────────────────────────────────────────── */}
      {/* SECTION 2 — HERO                                                        */}
      {/* ──────────────────────────────────────────────────────────────────────── */}
      <section className="relative pt-6 sm:pt-12 pb-12 overflow-hidden">
        {/* Subtle Ambient Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-[#c89b3c]/10 via-[#c89b3c]/5 to-transparent blur-3xl -z-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            {/* Brand Positioning Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 text-white text-xs sm:text-sm font-medium shadow-md">
              <span className="w-2 h-2 rounded-full bg-[#c89b3c] animate-pulse" />
              <span className="font-semibold text-[#e8ba5d]">DawatDesk:</span>
              <span className="text-slate-300">The Digital Control Desk of Your Restaurant</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold text-slate-900 tracking-tight leading-[1.08]">
              Your Entire Restaurant.{' '}
              <span className="gradient-gold-text">One Smart Control Desk.</span>
            </h1>

            {/* Core Brand Message */}
            <p className="text-lg sm:text-2xl font-display font-medium text-slate-700">
              Run Your Restaurant. <span className="text-slate-900 font-bold underline decoration-[#c89b3c]/60">Not Behind It.</span>
            </p>

            {/* Supporting Explanation */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              From taking orders at the table and coordinating live kitchen displays to processing fast counter billing and tracking executive sales, DawatDesk connects your daily restaurant operations into one synchronized web platform.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-3">
              <Link
                href="/demo"
                className="w-full sm:w-auto px-8 py-4 rounded-xl text-base font-bold text-white bg-[#c89b3c] hover:bg-[#b38029] shadow-glow transition-all flex items-center justify-center gap-2.5 active:scale-[0.98]"
              >
                <Calendar className="w-5 h-5" />
                <span>Book a Free Demo</span>
              </Link>
              <Link
                href="#features"
                className="w-full sm:w-auto px-8 py-4 rounded-xl text-base font-semibold text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-50 border border-slate-300/80 transition-all flex items-center justify-center gap-2 shadow-xs"
              >
                <span>Explore Features</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="pt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs sm:text-sm text-slate-500 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#c89b3c]" />
                <span>Zero hardware lock-in</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#c89b3c]" />
                <span>Tablet, PC & mobile compatible</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#c89b3c]" />
                <span>Live Kitchen KDS & KOT Printing</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#c89b3c]" />
                <span>GST-ready counter billing</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────────── */}
      {/* SECTION 3 — THE RESTAURANT MANAGEMENT PROBLEM                           */}
      {/* ──────────────────────────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-14 border border-slate-800 shadow-2xl space-y-12">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#c89b3c]">
              The Reality of Running a Food Business
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-bold tracking-tight text-white">
              Why Traditional Restaurant Workflows Break During Peak Hours
            </h2>
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
              When front-of-house staff, kitchen chefs, and the checkout counter operate in silos, small mistakes multiply into delayed food, frustrated diners, and lost revenue.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-850/80 border border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-red-500/10 text-red-400 flex items-center justify-center font-bold">
                01
              </div>
              <h3 className="text-lg font-bold text-white">
                Paper Slips & Hand-Writing Errors
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Waiters scribbling dish codes leads to incorrect orders, missed custom allergies, and wasted kitchen ingredients when chefs misread handwriting.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-850/80 border border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center font-bold">
                02
              </div>
              <h3 className="text-lg font-bold text-white">
                Kitchen Noise & Blind Bottlenecks
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Chefs shouting order numbers across loud kitchens creates chaos. Tickets get lost under stove hoods, causing 40-minute wait times for simple appetizers.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-850/80 border border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center font-bold">
                03
              </div>
              <h3 className="text-lg font-bold text-white">
                Slow Checkout & Reconciliation Headaches
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Guests standing at the counter waiting for manual bill calculation delays table turns. At midnight, owners struggle to balance cash drawers against receipts.
              </p>
            </div>
          </div>

          {/* The DawatDesk Answer */}
          <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <div className="text-sm font-semibold text-slate-300">
                The Solution: A Single Connected Digital Control Desk
              </div>
              <p className="text-xs text-slate-500">
                Waitstaff, kitchen staff, and cashiers share the same live order state in real time.
              </p>
            </div>
            <Link
              href="#how-it-works"
              className="px-6 py-3 rounded-xl text-sm font-bold text-slate-900 bg-white hover:bg-slate-100 transition-all flex items-center gap-2 shrink-0"
            >
              <span>See The Unified Workflow</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────────── */}
      {/* SECTION 4 — INTRODUCING DAWATDESK                                       */}
      {/* ──────────────────────────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c89b3c]/15 text-[#8e6121] text-xs font-bold uppercase tracking-wider">
              <Zap className="w-3.5 h-3.5 text-[#c89b3c]" />
              <span>Unified Operations Engine</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-slate-900 tracking-tight leading-tight">
              Connect Every Station in Your Restaurant
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              DawatDesk is built around the actual operational reality of busy restaurants. Rather than forcing your team into generic spreadsheet software, DawatDesk establishes dedicated, synchronized portals tailored to each team member’s role.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3.5">
                <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900">
                    Floor Waitstaff: Quick Table Order Punching
                  </h4>
                  <p className="text-sm text-slate-500">
                    Staff view color-coded table occupancy, punch dishes with custom instructions, and receive chime rings when food is plated.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900">
                    Kitchen Display & Thermal KOT
                  </h4>
                  <p className="text-sm text-slate-500">
                    Chefs track prep timers, mark items ready, print 80mm station slips, and toggle unavailable ingredients with one tap.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900">
                    Cashier POS & Executive Visibility
                  </h4>
                  <p className="text-sm text-slate-500">
                    Instant split billing with UPI QR, cards, and cash. Owners monitor live GMV, AOV, and top-selling categories on any device.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-4">
              <Link
                href="/features"
                className="px-6 py-3 rounded-xl text-sm font-bold text-white bg-slate-900 hover:bg-slate-800 transition-all flex items-center gap-2"
              >
                <span>Browse All Features</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://dawatdesk.vercel.app/login"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl text-sm font-semibold text-slate-700 hover:text-slate-900 border border-slate-200 hover:bg-slate-50 transition-all flex items-center gap-2"
              >
                <span>Try Live App</span>
                <ExternalLink className="w-4 h-4 text-slate-400" />
              </a>
            </div>
          </div>

          {/* Genuine App Screenshot Preview: Tables Layout */}
          <div className="relative">
            <div className="rounded-3xl p-3 bg-slate-100 border border-slate-200/90 shadow-xl">
              <div className="rounded-2xl overflow-hidden bg-slate-900 border border-slate-800">
                <div className="h-8 bg-slate-850 px-3 flex items-center justify-between border-b border-slate-800 text-[11px] text-slate-400 font-mono">
                  <span>DawatDesk Table & Floor Engine</span>
                  <span className="text-[#c89b3c]">Verified Feature</span>
                </div>
                <div className="relative w-full aspect-[4/3]">
                  <Image
                    src="/images/screenshots/04_restaurant_tables.png"
                    alt="Authentic DawatDesk Table Floor Layout Management"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────────── */}
      {/* SECTION 5 — CORE FEATURES                                               */}
      {/* ──────────────────────────────────────────────────────────────────────── */}
      <section id="features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c89b3c]/15 text-[#8e6121] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#c89b3c]" />
            <span>Fully Verified Functionality</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-slate-900 tracking-tight">
            Built for Every Corner of Your Dining Room
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Every feature shown below is active and operational in the live DawatDesk platform. Explore how each module solves daily restaurant friction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreModules.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-card hover:border-[#c89b3c]/40 transition-all duration-300 flex flex-col overflow-hidden"
            >
              {/* Actual Screenshot Window */}
              <div className="relative w-full aspect-[16/10] bg-slate-100 border-b border-slate-100 overflow-hidden">
                <Image
                  src={item.screenshot}
                  alt={item.title}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-slate-900/80 backdrop-blur-sm text-[10px] uppercase font-bold tracking-wider text-[#e8ba5d]">
                  {item.tag}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#c89b3c] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                  <div className="pt-2 text-xs font-medium text-emerald-700 bg-emerald-50 rounded-lg p-2.5 border border-emerald-200/60">
                    <span className="font-bold">Benefit:</span> {item.benefit}
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={item.link}
                    className="text-xs font-bold text-slate-900 group-hover:text-[#c89b3c] transition-colors flex items-center gap-1"
                  >
                    <span>Explore Module Details</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                  <span className="text-[11px] text-slate-400 font-mono">100% Tested</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────────── */}
      {/* SECTION 6 — HOW DAWATDESK WORKS (ORDER LIFECYCLE)                       */}
      {/* ──────────────────────────────────────────────────────────────────────── */}
      <section id="how-it-works" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="bg-gradient-to-b from-slate-900 to-slate-950 text-white rounded-3xl p-8 sm:p-14 border border-slate-800 shadow-2xl space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#c89b3c]">
              End-to-End Restaurant Lifecycle
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-bold tracking-tight text-white">
              How DawatDesk Moves Orders from Table to Kitchen to Checkout
            </h2>
            <p className="text-slate-400 text-base sm:text-lg">
              Follow the synchronized journey of a diner’s meal. Zero lost slips, zero loud kitchen shouting, and zero billing surprises.
            </p>
          </div>

          {/* Interactive Steps Navigation */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 border-b border-slate-800 pb-4">
            {workflowSteps.map((s, idx) => {
              const Icon = s.icon;
              return (
                <button
                  key={s.step}
                  onClick={() => setActiveWorkflowStep(idx)}
                  className={`p-3 rounded-2xl text-left transition-all flex flex-col gap-2 ${
                    activeWorkflowStep === idx
                      ? 'bg-[#c89b3c]/20 border border-[#c89b3c]/50 text-white'
                      : 'hover:bg-slate-800/60 border border-transparent text-slate-400'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#c89b3c]">
                      {s.step}
                    </span>
                    <Icon className="w-4 h-4 text-slate-400" />
                  </div>
                  <span className="text-xs font-bold leading-tight">
                    {s.actor}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Step Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Step Description */}
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c89b3c]/15 text-[#e8ba5d] text-xs font-semibold">
                <span>Stage {workflowSteps[activeWorkflowStep].step}</span>
                <span>•</span>
                <span>{workflowSteps[activeWorkflowStep].badge}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
                {workflowSteps[activeWorkflowStep].title}
              </h3>
              <p className="text-slate-300 text-base leading-relaxed">
                {workflowSteps[activeWorkflowStep].desc}
              </p>

              <div className="pt-4 flex items-center gap-3">
                <button
                  disabled={activeWorkflowStep === 0}
                  onClick={() => setActiveWorkflowStep((prev) => Math.max(0, prev - 1))}
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-slate-800 text-slate-300 hover:text-white disabled:opacity-40"
                >
                  Previous Step
                </button>
                <button
                  disabled={activeWorkflowStep === workflowSteps.length - 1}
                  onClick={() => setActiveWorkflowStep((prev) => Math.min(workflowSteps.length - 1, prev + 1))}
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-[#c89b3c] text-white hover:bg-[#b38029] disabled:opacity-40"
                >
                  Next Step
                </button>
              </div>
            </div>

            {/* Step Genuine Product Visual */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl p-2 bg-slate-800/80 border border-slate-700/80 shadow-2xl">
                <div className="rounded-xl overflow-hidden bg-slate-950 aspect-[16/10] relative">
                  <Image
                    src={workflowSteps[activeWorkflowStep].screenshot}
                    alt={workflowSteps[activeWorkflowStep].title}
                    fill
                    className="object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────────── */}
      {/* SECTION 7 — ROLE-BASED MANAGEMENT                                       */}
      {/* ──────────────────────────────────────────────────────────────────────── */}
      <section id="roles" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c89b3c]/15 text-[#8e6121] text-xs font-bold uppercase tracking-wider">
            <Users className="w-3.5 h-3.5 text-[#c89b3c]" />
            <span>Tailored Staff Portals</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-slate-900 tracking-tight">
            Designed Specifically for Every Restaurant Employee
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            No single screen tries to do everything. Each role logs in to a clean, focused portal built for their exact job responsibilities.
          </p>
        </div>

        {/* Role Tabs */}
        <div className="flex flex-wrap justify-center gap-3">
          {(['waiter', 'chef', 'cashier', 'admin'] as const).map((roleKey) => (
            <button
              key={roleKey}
              onClick={() => setActiveRoleTab(roleKey)}
              className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all capitalize ${
                activeRoleTab === roleKey
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200'
              }`}
            >
              {roleKey === 'admin' ? 'Restaurant Manager' : roleKey}
            </button>
          ))}
        </div>

        {/* Selected Role Deep Dive */}
        <div className="bg-slate-50 rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#c89b3c]">
                {roleDetails[activeRoleTab].badge}
              </span>
              <h3 className="text-2xl sm:text-4xl font-display font-bold text-slate-900">
                {roleDetails[activeRoleTab].role}
              </h3>
              <p className="text-slate-600 text-base">
                {roleDetails[activeRoleTab].tagline}
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Key Responsibilities & Actions:
              </span>
              <ul className="space-y-2.5">
                {roleDetails[activeRoleTab].actions.map((act, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#c89b3c] shrink-0 mt-0.5" />
                    <span>{act}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4">
              <Link
                href="/roles"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#c89b3c] hover:underline"
              >
                <span>Read Full Role Breakdown & Permissions</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-2xl p-2 bg-white border border-slate-200 shadow-xl overflow-hidden">
              <div className="relative aspect-[16/10] bg-slate-900 rounded-xl overflow-hidden">
                <Image
                  src={roleDetails[activeRoleTab].screenshot}
                  alt={roleDetails[activeRoleTab].role}
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────────── */}
      {/* SECTION 8 — BUSINESS BENEFITS                                           */}
      {/* ──────────────────────────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-slate-900 text-white p-8 sm:p-14 border border-slate-800 space-y-12">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#c89b3c]">
              Tangible Operational Value
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-bold tracking-tight text-white">
              Real Improvements for Your Daily Operations
            </h2>
            <p className="text-slate-400 text-base sm:text-lg">
              We focus on practical operational clarity rather than unrealistic marketing hype. Here is how DawatDesk strengthens your daily business:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-slate-850 border border-slate-800 space-y-2">
              <div className="text-2xl font-bold text-[#c89b3c]">Synchronized</div>
              <h4 className="text-base font-bold text-white">Connected Staff</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Waiters, kitchen staff, and cashiers share immediate status updates without shouts or repeated inquiries.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-850 border border-slate-800 space-y-2">
              <div className="text-2xl font-bold text-[#c89b3c]">Paperless</div>
              <h4 className="text-base font-bold text-white">Kitchen Flow</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Clear digital timers replace messy kitchen paper tickets, reducing prep confusion and missing orders.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-850 border border-slate-800 space-y-2">
              <div className="text-2xl font-bold text-[#c89b3c]">3-Click</div>
              <h4 className="text-base font-bold text-white">Fast Billing</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Rapid checkout counters clear exit lines fast with multi-tender support and automated GST tax breakdowns.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-850 border border-slate-800 space-y-2">
              <div className="text-2xl font-bold text-[#c89b3c]">100% Cloud</div>
              <h4 className="text-base font-bold text-white">Owner Oversight</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Check sales, active floor status, and staff metrics from your laptop or phone wherever you are.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────────── */}
      {/* SECTION 9 — INDUSTRY SOLUTIONS                                          */}
      {/* ──────────────────────────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c89b3c]/15 text-[#8e6121] text-xs font-bold uppercase tracking-wider">
            <Building2 className="w-3.5 h-3.5 text-[#c89b3c]" />
            <span>Tailored By Venue Format</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-slate-900 tracking-tight">
            How Food Businesses Use DawatDesk
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            DawatDesk adapts to your service format, whether you run a high-volume cafe or a multi-story fine dining establishment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Solution 1: Restaurants */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm hover:shadow-card transition-all space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#c89b3c]/20 text-[#8e6121] flex items-center justify-center font-bold">
              <UtensilsCrossed className="w-6 h-6 text-[#c89b3c]" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">
              Dine-In Restaurants
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Full table layout management, course handling, waiter order pads, KOT printing, and split bill settlements for fine and casual dining.
            </p>
            <ul className="text-xs text-slate-500 space-y-2 pt-2">
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-[#c89b3c]" />
                <span>Visual floor grid up to 50+ tables</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-[#c89b3c]" />
                <span>Walk-in table waitlist queue</span>
              </li>
            </ul>
            <div className="pt-2">
              <Link
                href="/solutions/restaurants"
                className="text-xs font-bold text-[#c89b3c] hover:underline flex items-center gap-1"
              >
                <span>Read Full Solution</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Solution 2: Cafes */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm hover:shadow-card transition-all space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">
              Cafes & Bakeries
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Quick barista station tickets, combo orders, instant 86 sold-out toggles for fresh bakery items, and seamless UPI QR counter checkouts.
            </p>
            <ul className="text-xs text-slate-500 space-y-2 pt-2">
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-[#c89b3c]" />
                <span>Quick takeaway & dine-in toggle</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-[#c89b3c]" />
                <span>1-tap item availability management</span>
              </li>
            </ul>
            <div className="pt-2">
              <Link
                href="/solutions/cafes"
                className="text-xs font-bold text-[#c89b3c] hover:underline flex items-center gap-1"
              >
                <span>Read Full Solution</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Solution 3: QSR */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm hover:shadow-card transition-all space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">
              Quick Service (QSR)
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Counter punching optimized for velocity. Orders route directly to line cooks with parcel numbers, clearing lunch queues rapidly.
            </p>
            <ul className="text-xs text-slate-500 space-y-2 pt-2">
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-[#c89b3c]" />
                <span>Parcel & takeaway sequence numbers</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-[#c89b3c]" />
                <span>Minimal clicks for counter staff</span>
              </li>
            </ul>
            <div className="pt-2">
              <Link
                href="/solutions/quick-service"
                className="text-xs font-bold text-[#c89b3c] hover:underline flex items-center gap-1"
              >
                <span>Read Full Solution</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────────── */}
      {/* SECTION 11 — WHY CHOOSE DAWATDESK (COMPARISON)                          */}
      {/* ──────────────────────────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c89b3c]/15 text-[#8e6121] text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5 text-[#c89b3c]" />
            <span>Honest Evaluation</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-slate-900 tracking-tight">
            How DawatDesk Compares with Traditional Approaches
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            See the practical differences between legacy single-terminal machines, paper tickets, and DawatDesk’s integrated control desk.
          </p>
        </div>

        <div className="bg-white rounded-3xl border border-slate-200 shadow-premium overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50/80">
                  <th className="p-4 sm:p-5 text-sm font-bold text-slate-900">Operational Capability</th>
                  <th className="p-4 sm:p-5 text-sm font-bold text-slate-500">Manual / Paper System</th>
                  <th className="p-4 sm:p-5 text-sm font-bold text-slate-500">Legacy Counter POS PC</th>
                  <th className="p-4 sm:p-5 text-sm font-bold text-[#8e6121] bg-[#c89b3c]/10">DawatDesk Platform</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm text-slate-700">
                <tr>
                  <td className="p-4 sm:p-5 font-semibold text-slate-900">Table Order Taking</td>
                  <td className="p-4 sm:p-5 text-slate-500">Paper pad & handwritten notes</td>
                  <td className="p-4 sm:p-5 text-slate-500">Waiter walks to counter to punch</td>
                  <td className="p-4 sm:p-5 font-semibold text-[#8e6121] bg-[#c89b3c]/5">At-the-table tablet / mobile entry</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-semibold text-slate-900">Kitchen Communication</td>
                  <td className="p-4 sm:p-5 text-slate-500">Physical paper slips & shouting</td>
                  <td className="p-4 sm:p-5 text-slate-500">Basic printer slip only</td>
                  <td className="p-4 sm:p-5 font-semibold text-[#8e6121] bg-[#c89b3c]/5">Live KDS screen + thermal KOT slip</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-semibold text-slate-900">Food Ready Alert</td>
                  <td className="p-4 sm:p-5 text-slate-500">Chef yells across dining floor</td>
                  <td className="p-4 sm:p-5 text-slate-500">None (manual checks by waiter)</td>
                  <td className="p-4 sm:p-5 font-semibold text-[#8e6121] bg-[#c89b3c]/5">Instant chime & visual device badge</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-semibold text-slate-900">Sold-Out Dish (86) Handling</td>
                  <td className="p-4 sm:p-5 text-slate-500">Discovered after guest already ordered</td>
                  <td className="p-4 sm:p-5 text-slate-500">Complex admin menu editing required</td>
                  <td className="p-4 sm:p-5 font-semibold text-[#8e6121] bg-[#c89b3c]/5">1-tap toggle directly on kitchen screen</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-semibold text-slate-900">Hardware Requirements</td>
                  <td className="p-4 sm:p-5 text-slate-500">Notepads & pens</td>
                  <td className="p-4 sm:p-5 text-slate-500">Costly proprietary desktop terminal</td>
                  <td className="p-4 sm:p-5 font-semibold text-[#8e6121] bg-[#c89b3c]/5">Any tablet, phone, laptop or PC</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-semibold text-slate-900">Remote Owner Visibility</td>
                  <td className="p-4 sm:p-5 text-slate-500">Wait for end-of-day register count</td>
                  <td className="p-4 sm:p-5 text-slate-500">Must be physically in the restaurant</td>
                  <td className="p-4 sm:p-5 font-semibold text-[#8e6121] bg-[#c89b3c]/5">Live GMV & orders from any browser</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────────── */}
      {/* SECTION 12 — TRANSPARENT CREDIBILITY & LIVE DEMO INVITATION             */}
      {/* ──────────────────────────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-slate-50 border border-slate-200/90 p-8 sm:p-12 text-center max-w-4xl mx-auto space-y-6">
          <div className="w-12 h-12 rounded-2xl bg-[#c89b3c]/20 text-[#8e6121] mx-auto flex items-center justify-center">
            <ShieldCheck className="w-6 h-6 text-[#c89b3c]" />
          </div>
          <div className="space-y-2">
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-900">
              Our Commitment to Honest Product Truth
            </h3>
            <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              We do not fabricate fake customer quotes, non-existent 5-star ratings, or unrealistic revenue promises. We let the product speak for itself. You can test the actual software right now or book a live session to evaluate how it performs for your dining format.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href="https://dawatdesk.vercel.app/login"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl text-sm font-semibold text-slate-800 bg-white border border-slate-300 hover:bg-slate-100 transition-all flex items-center gap-2"
            >
              <span>Explore Live Software</span>
              <ExternalLink className="w-4 h-4 text-slate-400" />
            </a>
            <Link
              href="/demo"
              className="px-6 py-3 rounded-xl text-sm font-bold text-white bg-[#c89b3c] hover:bg-[#b38029] transition-all flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Request Personal Demo</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────────── */}
      {/* SECTION 14 — FREQUENTLY ASKED QUESTIONS (FAQ)                           */}
      {/* ──────────────────────────────────────────────────────────────────────── */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#c89b3c]">
            Answers to Common Questions
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Everything you need to know about DawatDesk features, hardware compatibility, and deployment.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200/90 shadow-xs overflow-hidden transition-colors"
            >
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full p-5 sm:p-6 text-left font-display font-bold text-base sm:text-lg text-slate-900 flex items-center justify-between gap-4 cursor-pointer"
              >
                <span>{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                    openFaq === idx ? 'rotate-180 text-[#c89b3c]' : ''
                  }`}
                />
              </button>
              {openFaq === idx && (
                <div className="px-5 sm:px-6 pb-6 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4 animate-in fade-in duration-200">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────────── */}
      {/* SECTION 15 — FINAL CTA & DEMO BOOKING SYSTEM                            */}
      {/* ──────────────────────────────────────────────────────────────────────── */}
      <section id="demo" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <DemoForm
          headline="Ready to Bring Your Restaurant Operations Together?"
          subheadline="Experience the digital control desk firsthand. Complete the form below to schedule a personalized 1-on-1 walkthrough with our restaurant technology team."
        />
      </section>
    </div>
  );
}
