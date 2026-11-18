import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Users,
  UtensilsCrossed,
  ChefHat,
  Receipt,
  Building2,
  CheckCircle2,
  Calendar,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Check,
  Lock
} from 'lucide-react';
import DemoForm from '@/components/DemoForm';

export const metadata = {
  title: 'Role-Based Management & Employee Portals | DawatDesk',
  description: 'Explore the 5 distinct user roles in DawatDesk: Super Admin, Restaurant Admin, Waitstaff, Kitchen Chef, and Cashier. Role-segregated screens for security and focus.',
};

export default function RolesPage() {
  const roles = [
    {
      title: 'Restaurant Admin / General Manager',
      badge: 'Outlet Management',
      icon: Building2,
      desc: 'Oversees the entire restaurant outlet. Configures floor table layouts, authors the digital menu, onboards staff with custom passwords, inspects daily sales charts, and tracks table turns.',
      screenshot: '/images/screenshots/02_restaurant_dashboard.png',
      permissions: [
        'Live overview of active tables, open tickets, and GMV',
        'Create, edit, and organize menu categories and dish prices',
        'Configure floor tables, seat capacities, and section layouts',
        'Add, activate, or deactivate staff accounts (Waiters, Chefs, Cashiers)',
        'Access date-range analytics, GMV trends, and export sales to CSV'
      ]
    },
    {
      title: 'Waitstaff & Order Taker',
      badge: 'Floor Operations',
      icon: UtensilsCrossed,
      desc: 'Operates directly at the diner’s table using any mobile phone or tablet. Views floor table status, punches dishes with custom notes, receives audio chime alerts when food is ready, and marks orders served.',
      screenshot: '/images/screenshots/08_waiter_pos.png',
      permissions: [
        'Visual interactive floor map with table status (vacant/occupied)',
        'Instant menu item search and category filters with +/- counters',
        'Append special culinary and allergy instructions per dish',
        'Audio chime and visual badge alert when chef marks dishes Ready',
        'Tactile "Mark as Served" confirmation to release kitchen tickets'
      ]
    },
    {
      title: 'Kitchen Chef & Line Staff',
      badge: 'Back of House',
      icon: ChefHat,
      desc: 'Works in the kitchen on a paperless Kitchen Display System (KDS). Views incoming tickets sorted by table and parcel, monitors elapsed prep timers, marks dishes ready, and prints 80mm thermal KOT slips.',
      screenshot: '/images/screenshots/10_chef_kds.png',
      permissions: [
        'Live paperless queue of incoming dine-in and parcel orders',
        'Elapsed prep timer with automated 15-minute urgency threshold',
        'Status progression: Pending → Preparing (Cooking) → Ready (Plated)',
        'One-tap "86 / Sold Out" availability toggle for depleted ingredients',
        'Sequential 80mm thermal KOT printing with continuation numbers'
      ]
    },
    {
      title: 'Cashier & Front Desk Host',
      badge: 'Checkout Desk',
      icon: Receipt,
      desc: 'Controls billing and reception. Opens table bills, modifies items or discounts before finalization, processes multi-tender settlements (Cash, UPI QR, Card), prints GST invoices, and manages walk-in waitlists.',
      screenshot: '/images/screenshots/11_cashier_pos.png',
      permissions: [
        '3-click checkout with split tenders: Cash, UPI QR, and Card',
        'On-the-fly item adjustments before finalizing payment',
        'Automated GST tax computation and official PDF invoice generation',
        'Customer waitlist queue with party size, phone, and direct table seating',
        'Historical transaction lookup and daily settlement reconciliation'
      ]
    },
    {
      title: 'Platform Super Admin',
      badge: 'Multi-Outlet Network',
      icon: ShieldCheck,
      desc: 'The corporate command center for multi-branch restaurant owners and franchise operators. Onboards new dining branches, tracks network GMV, and audits cross-venue activities.',
      screenshot: '/images/screenshots/12_admin_dashboard.png',
      permissions: [
        'Centralized dashboard tracking network GMV, total outlets, and staff',
        'Onboard new restaurant outlets with custom table limits and tax setups',
        'Drill down into any branch’s live kitchen and floor operations',
        'Cross-venue staff directory and system-wide audit logging',
        'Global tax rates and system configuration parameters'
      ]
    }
  ];

  return (
    <div className="py-12 sm:py-20 space-y-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c89b3c]/15 text-[#8e6121] text-xs font-bold uppercase tracking-wider">
            <Users className="w-3.5 h-3.5 text-[#c89b3c]" />
            <span>Compartmentalized Security</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-slate-900 tracking-tight">
            Role-Based Control Built for Real Restaurant Teams
          </h1>
          <p className="text-slate-600 text-base sm:text-lg">
            DawatDesk eliminates screen confusion. Each team member logs in to a purpose-built view designed specifically for their daily tasks.
          </p>
        </div>

        {/* Roles Stack */}
        <div className="space-y-16">
          {roles.map((r, idx) => {
            const Icon = r.icon;
            return (
              <div
                key={r.title}
                className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                <div className="lg:col-span-6 space-y-6">
                  <div className="space-y-2">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider">
                      <Icon className="w-3.5 h-3.5 text-[#c89b3c]" />
                      <span>{r.badge}</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900">
                      {r.title}
                    </h2>
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                      {r.desc}
                    </p>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Verified Permissions & Actions:
                    </span>
                    <ul className="space-y-2">
                      {r.permissions.map((perm, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-[#c89b3c] shrink-0 mt-0.5" />
                          <span>{perm}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="lg:col-span-6">
                  <div className="rounded-2xl p-2 bg-slate-100 border border-slate-200 shadow-xl overflow-hidden">
                    <div className="relative aspect-[16/10] bg-slate-950 rounded-xl overflow-hidden">
                      <Image
                        src={r.screenshot}
                        alt={r.title}
                        fill
                        className="object-cover object-top"
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <DemoForm
          headline="See How DawatDesk Roles Streamline Your Shift"
          subheadline="Book a walkthrough to experience how your waitstaff, chefs, and cashiers will collaborate on DawatDesk."
        />
      </div>
    </div>
  );
}
