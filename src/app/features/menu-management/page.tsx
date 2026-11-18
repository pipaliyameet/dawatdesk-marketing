import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Utensils,
  CheckCircle2,
  Calendar,
  Sparkles,
  ArrowRight,
  Flame,
  Clock,
  Check
} from 'lucide-react';
import DemoForm from '@/components/DemoForm';

export const metadata = {
  title: 'Menu Architecture & Dynamic Category Management | DawatDesk',
  description: 'Manage restaurant categories, dish descriptions, pricing, preparation time buffers, and 1-tap item availability 86 toggling.',
};

export default function MenuManagementPage() {
  return (
    <div className="py-12 sm:py-20 space-y-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
          <Link href="/" className="hover:text-slate-900">Home</Link>
          <span>/</span>
          <Link href="/features" className="hover:text-slate-900">Features</Link>
          <span>/</span>
          <span className="text-[#c89b3c]">Menu Management</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c89b3c]/15 text-[#8e6121] text-xs font-bold uppercase tracking-wider">
              <Utensils className="w-3.5 h-3.5 text-[#c89b3c]" />
              <span>Menu Engineering</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-slate-900 tracking-tight leading-tight">
              Dynamic Categories & Instant Dish Availability
            </h1>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Take complete control over your food offerings. Organize custom categories (Appetizers, Tandoor, Main Course, Beverages, Desserts), adjust dish prices in seconds, add mouthwatering descriptions, and let chefs 86 sold-out dishes instantly.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/demo"
                className="px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-[#c89b3c] hover:bg-[#b38029] shadow-glow transition-all flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Menu Walkthrough</span>
              </Link>
              <a
                href="https://dawatdesk.vercel.app/login"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-700 hover:text-slate-900 border border-slate-200 hover:bg-slate-50 transition-all"
              >
                Explore Menu Editor Live
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl p-3 bg-slate-100 border border-slate-200 shadow-xl overflow-hidden">
              <div className="relative aspect-[16/10] bg-slate-950 rounded-2xl overflow-hidden">
                <Image
                  src="/images/screenshots/03_restaurant_menu.png"
                  alt="DawatDesk Menu and Category Management Screen"
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
            <h3 className="text-xl font-bold text-slate-900">Multi-Category Hierarchy</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Create unlimited custom categories with emojis and sort orders so waitstaff find dishes within 2 seconds of a diner asking.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-slate-200 space-y-3 shadow-xs">
            <h3 className="text-xl font-bold text-slate-900">Instant Price Updates</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Update dish pricing across your entire restaurant system instantly without reprinting menus or rebooting terminals.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-slate-200 space-y-3 shadow-xs">
            <h3 className="text-xl font-bold text-slate-900">Kitchen 86 Availability</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              When kitchen stock runs low, line cooks toggle dishes unavailable with a single tap, updating waiter order pads immediately.
            </p>
          </div>
        </div>

        <DemoForm
          headline="Keep Your Menu Fresh, Flexible, and Synchronized"
          subheadline="Book a walkthrough to see how DawatDesk simplifies menu engineering and instant price adjustments."
        />
      </div>
    </div>
  );
}
