import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
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
  Printer,
  BellRing,
  ExternalLink
} from 'lucide-react';

export const metadata = {
  title: 'All Features & Operational Modules | DawatDesk Restaurant POS',
  description: 'Explore the complete suite of verified DawatDesk features: Waiter POS, Kitchen Display System (KDS), thermal KOT printing, cashier checkout, menu engineering, and executive reporting.',
};

export default function FeaturesPage() {
  const features = [
    {
      slug: 'restaurant-pos',
      title: 'Restaurant POS & Waiter Floor Pad',
      role: 'Waitstaff',
      desc: 'Interactive table selection, category filtering, instant item search, dish notes, and live audio chime when dishes are ready.',
      benefit: 'Eliminates paper pads and cuts order turnaround time in half.',
      screenshot: '/images/screenshots/08_waiter_pos.png',
      tags: ['Floor Management', 'Table Grid', 'Dish Notes', 'Service Chime']
    },
    {
      slug: 'kitchen-management',
      title: 'Kitchen Display System (KDS) & KOT Printing',
      role: 'Chef & Kitchen Line',
      desc: 'Paperless ticket screen with prep countdowns, 15-minute urgency flags, item 86 availability quick-toggles, and thermal KOT printing.',
      benefit: 'Stops kitchen shouting and prevents forgotten orders during dinner rush.',
      screenshot: '/images/screenshots/10_chef_kds.png',
      tags: ['KDS Screen', 'Thermal KOT', 'Urgency Timers', '86 Sold-Out Toggle']
    },
    {
      slug: 'billing',
      title: 'Cashier Counter POS & Multi-Tender Billing',
      role: 'Cashier',
      desc: '3-click checkout with split tenders: Cash with change calculation, UPI QR, and Card payments. Official PDF invoice generation and thermal receipts.',
      benefit: 'Clears checkout lines fast and produces GST-compliant invoices.',
      screenshot: '/images/screenshots/11_cashier_pos.png',
      tags: ['UPI QR', 'Cash Tender', 'Split Payments', 'PDF Invoices', 'GST Ready']
    },
    {
      slug: 'table-management',
      title: 'Table Layout & Digital Walk-in Queue',
      role: 'Host & Manager',
      desc: 'Visual floor map with occupied, available, and reserved statuses. Integrated customer waitlist queue with party size and phone recording.',
      benefit: 'Maximizes floor utilization and prevents double-booking.',
      screenshot: '/images/screenshots/04_restaurant_tables.png',
      tags: ['Visual Floor Grid', 'Capacity Presets', 'Walk-in Queue', 'Table Seating']
    },
    {
      slug: 'menu-management',
      title: 'Menu Architecture & Dynamic Hierarchy',
      role: 'Restaurant Admin',
      desc: 'Organize menu categories, dish prices, descriptions, and preparation time estimates. Update specials instantly across all staff devices.',
      benefit: 'Enables quick seasonal menu pivots with zero reprint expenses.',
      screenshot: '/images/screenshots/03_restaurant_menu.png',
      tags: ['Categories', 'Dish Pricing', 'Prep Times', 'Instant Sync']
    },
    {
      slug: 'staff-management',
      title: 'Staff Onboarding & Role-Based Security',
      role: 'Restaurant Admin',
      desc: 'Separate, credentialed access for Waiter, Chef, Cashier, and Manager. Each staff member accesses only what is necessary for their job.',
      benefit: 'Protects billing data and avoids accidental operational overrides.',
      screenshot: '/images/screenshots/07_restaurant_staff.png',
      tags: ['Role Access', 'Staff Credentials', 'Permissions', 'Audit Trail']
    },
    {
      slug: 'reports',
      title: 'Executive Sales Reports & Revenue Analytics',
      role: 'Owner & Management',
      desc: 'Daily GMV, Average Order Value (AOV), top dishes by volume, hourly rush patterns, payment tender shares, and CSV data export.',
      benefit: 'Gives restaurant owners clear visibility into profitability and inventory demands.',
      screenshot: '/images/screenshots/06_restaurant_reports.png',
      tags: ['GMV Analytics', 'Hourly Trends', 'Tender Breakdown', 'CSV Export']
    },
    {
      slug: 'multi-outlet',
      title: 'Multi-Outlet Network Command Center',
      role: 'Super Admin / Brand Owner',
      desc: 'Centralized administration for restaurant chains and franchises. Onboard outlets, monitor cross-outlet sales, and audit branch activities.',
      benefit: 'Enables multi-branch expansion with unified platform control.',
      screenshot: '/images/screenshots/12_admin_dashboard.png',
      tags: ['Franchise Oversight', 'Outlet Onboarding', 'Network GMV', 'Multi-Venue']
    }
  ];

  return (
    <div className="py-12 sm:py-20 space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c89b3c]/15 text-[#8e6121] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#c89b3c]" />
            <span>Product Modules</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-slate-900 tracking-tight">
            The Complete DawatDesk Module Suite
          </h1>
          <p className="text-slate-600 text-base sm:text-lg">
            Every module is designed to eliminate a specific point of friction in your daily dining operations. Explore how each tool powers your restaurant.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12">
          {features.map((f) => (
            <div
              key={f.slug}
              className="bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-card hover:border-[#c89b3c]/40 transition-all duration-300 overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/10] bg-slate-900 overflow-hidden border-b border-slate-100">
                  <Image
                    src={f.screenshot}
                    alt={f.title}
                    fill
                    className="object-cover object-top hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-md bg-slate-900/80 backdrop-blur-sm text-[11px] font-bold text-[#e8ba5d]">
                    Role: {f.role}
                  </div>
                </div>

                <div className="p-6 sm:p-8 space-y-4">
                  <div className="flex flex-wrap gap-1.5">
                    {f.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 text-slate-600"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900">
                    {f.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed">
                    {f.desc}
                  </p>

                  <div className="p-3 rounded-xl bg-emerald-50 text-emerald-800 text-xs font-medium border border-emerald-200/60">
                    <span className="font-bold">Operational Benefit:</span> {f.benefit}
                  </div>
                </div>
              </div>

              <div className="px-6 sm:px-8 pb-6 pt-2 border-t border-slate-100 flex items-center justify-between">
                <Link
                  href={`/features/${f.slug}`}
                  className="text-sm font-bold text-slate-900 hover:text-[#c89b3c] transition-colors flex items-center gap-1.5"
                >
                  <span>Read Detailed Module Breakdown</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <span className="text-xs text-slate-400 font-mono">Verified Active</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
