'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from './Logo';
import {
  ChevronDown,
  Menu,
  X,
  ExternalLink,
  Calendar,
  UtensilsCrossed,
  ChefHat,
  Receipt,
  Layers,
  Users,
  BarChart3,
  Building2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setFeaturesOpen(false);
  }, [pathname]);

  const featureLinks = [
    {
      title: 'Restaurant POS & Floor',
      desc: 'Table grid, live status & instant waiter order punching',
      href: '/features/restaurant-pos',
      icon: UtensilsCrossed,
      tag: 'Core'
    },
    {
      title: 'Kitchen Display (KDS)',
      desc: 'Paperless kitchen queue, urgency timers & 86 toggle',
      href: '/features/kitchen-management',
      icon: ChefHat,
      tag: 'Live Sync'
    },
    {
      title: 'Billing & Cashier Counter',
      desc: '3-click checkout, UPI QR, card, split bill & PDF invoices',
      href: '/features/billing',
      icon: Receipt,
      tag: 'GST Ready'
    },
    {
      title: 'Table & Waitlist Queue',
      desc: 'Floor capacity management & digital walk-in queue',
      href: '/features/table-management',
      icon: Layers,
    },
    {
      title: 'Menu & Category Hierarchy',
      desc: 'Dynamic category hierarchy, dish pricing & prep times',
      href: '/features/menu-management',
    },
    {
      title: 'Staff & Role-Based Access',
      desc: 'Compartmentalized logins for Waiter, Chef & Cashier',
      href: '/features/staff-management',
      icon: Users,
    },
    {
      title: 'Sales Reports & Analytics',
      desc: 'GMV metrics, AOV, category mix & date-range exports',
      href: '/features/reports',
      icon: BarChart3,
    },
    {
      title: 'Multi-Outlet Administration',
      desc: 'Platform-level command center for multi-branch chains',
      href: '/features/multi-outlet',
      icon: Building2,
    },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3'
          : 'bg-white/80 backdrop-blur-sm border-b border-slate-100 py-4.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-11">
          {/* Logo (Left) */}
          <div className="flex items-center z-10">
            <Logo size="md" />
          </div>

          {/* Desktop Navigation (Centered & Non-wrapping) */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 absolute left-1/2 -translate-x-1/2 whitespace-nowrap">
            <Link
              href="/"
              className={`px-2.5 py-1.5 xl:px-3 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                pathname === '/'
                  ? 'text-[#c89b3c] font-semibold bg-[#c89b3c]/10'
                  : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100/70'
              }`}
            >
              Overview
            </Link>

            {/* Features Dropdown */}
            <div className="relative" onMouseLeave={() => setFeaturesOpen(false)}>
              <button
                onClick={() => setFeaturesOpen(!featuresOpen)}
                onMouseEnter={() => setFeaturesOpen(true)}
                className={`flex items-center gap-1 px-2.5 py-1.5 xl:px-3 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                  pathname.startsWith('/features')
                    ? 'text-[#c89b3c] font-semibold bg-[#c89b3c]/10'
                    : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100/70'
                }`}
              >
                <span>Features</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    featuresOpen ? 'rotate-180 text-[#c89b3c]' : 'text-slate-400'
                  }`}
                />
              </button>

              {/* Dropdown Menu */}
              {featuresOpen && (
                <div
                  onMouseEnter={() => setFeaturesOpen(true)}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[540px] bg-white rounded-2xl shadow-premium border border-slate-200/90 p-4 grid grid-cols-2 gap-2 animate-in fade-in slide-in-from-top-2 duration-200"
                >
                  {featureLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="group flex flex-col p-3 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-200/60"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-slate-900 group-hover:text-[#c89b3c] transition-colors">
                          {item.title}
                        </span>
                        {item.tag && (
                          <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-[#c89b3c]/10 text-[#8e6121]">
                            {item.tag}
                          </span>
                        )}
                      </div>
                      <span className="text-xs text-slate-500 mt-1 line-clamp-1">
                        {item.desc}
                      </span>
                    </Link>
                  ))}
                  <div className="col-span-2 pt-2 border-t border-slate-100 mt-1 flex items-center justify-between px-2">
                    <span className="text-xs text-slate-500">
                      Explore all verified modules in action
                    </span>
                    <Link
                      href="/features"
                      className="text-xs font-semibold text-[#c89b3c] hover:underline flex items-center gap-1"
                    >
                      <span>View All Features</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/how-it-works"
              className={`px-2.5 py-1.5 xl:px-3 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                pathname === '/how-it-works'
                  ? 'text-[#c89b3c] font-semibold bg-[#c89b3c]/10'
                  : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100/70'
              }`}
            >
              How It Works
            </Link>

            <Link
              href="/solutions"
              className={`px-2.5 py-1.5 xl:px-3 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                pathname.startsWith('/solutions')
                  ? 'text-[#c89b3c] font-semibold bg-[#c89b3c]/10'
                  : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100/70'
              }`}
            >
              Solutions
            </Link>

            <Link
              href="/roles"
              className={`px-2.5 py-1.5 xl:px-3 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                pathname === '/roles'
                  ? 'text-[#c89b3c] font-semibold bg-[#c89b3c]/10'
                  : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100/70'
              }`}
            >
              Roles
            </Link>

            <Link
              href="/about"
              className={`px-2.5 py-1.5 xl:px-3 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                pathname === '/about'
                  ? 'text-[#c89b3c] font-semibold bg-[#c89b3c]/10'
                  : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100/70'
              }`}
            >
              About
            </Link>

            <Link
              href="/contact"
              className={`px-2.5 py-1.5 xl:px-3 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                pathname === '/contact'
                  ? 'text-[#c89b3c] font-semibold bg-[#c89b3c]/10'
                  : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100/70'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center ml-auto">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top-4 duration-200">
          <Link
            href="/"
            className="block px-3 py-2.5 rounded-lg text-base font-semibold text-slate-800 hover:bg-slate-50"
          >
            Overview
          </Link>
          <Link
            href="/features"
            className="block px-3 py-2.5 rounded-lg text-base font-semibold text-slate-800 hover:bg-slate-50"
          >
            All Features
          </Link>
          <div className="pl-4 space-y-1 border-l-2 border-[#c89b3c]/20 ml-2">
            <Link
              href="/features/restaurant-pos"
              className="block px-2 py-1.5 text-sm text-slate-600 hover:text-slate-900"
            >
              Restaurant POS & Floor
            </Link>
            <Link
              href="/features/kitchen-management"
              className="block px-2 py-1.5 text-sm text-slate-600 hover:text-slate-900"
            >
              Kitchen Display (KDS) & KOT
            </Link>
            <Link
              href="/features/billing"
              className="block px-2 py-1.5 text-sm text-slate-600 hover:text-slate-900"
            >
              Billing & Cashier Counter
            </Link>
            <Link
              href="/features/reports"
              className="block px-2 py-1.5 text-sm text-slate-600 hover:text-slate-900"
            >
              Sales Analytics & Reports
            </Link>
          </div>
          <Link
            href="/how-it-works"
            className="block px-3 py-2.5 rounded-lg text-base font-semibold text-slate-800 hover:bg-slate-50"
          >
            How It Works (Workflow)
          </Link>
          <Link
            href="/solutions"
            className="block px-3 py-2.5 rounded-lg text-base font-semibold text-slate-800 hover:bg-slate-50"
          >
            Solutions by Industry
          </Link>
          <Link
            href="/roles"
            className="block px-3 py-2.5 rounded-lg text-base font-semibold text-slate-800 hover:bg-slate-50"
          >
            Role-Based Control
          </Link>
          <Link
            href="/about"
            className="block px-3 py-2.5 rounded-lg text-base font-semibold text-slate-800 hover:bg-slate-50"
          >
            About DawatDesk
          </Link>
          <Link
            href="/contact"
            className="block px-3 py-2.5 rounded-lg text-base font-semibold text-slate-800 hover:bg-slate-50"
          >
            Contact Sales
          </Link>
        </div>
      )}
    </header>
  );
}
