import React from 'react';
import Link from 'next/link';
import Logo from './Logo';
import {
  ExternalLink,
  ShieldCheck,
  Mail,
  MapPin,
  Clock,
  Sparkles,
  PhoneCall,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Banner: Quick Call to Action */}
        <div className="rounded-3xl bg-gradient-to-r from-slate-900 via-slate-850 to-slate-900 border border-slate-800/80 p-8 sm:p-12 mb-16 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c89b3c]/20 border border-[#c89b3c]/30 text-[#e8ba5d] text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Experience The Difference</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
              Ready to Bring Your Restaurant Operations Together?
            </h3>
            <p className="text-slate-400 text-sm sm:text-base max-w-xl">
              See how DawatDesk connects your waitstaff, kitchen display system, billing counter, and owner visibility into one synchronized digital desk.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
            <Link
              href="/demo"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-[#c89b3c] hover:bg-[#b38029] shadow-glow transition-all flex items-center justify-center gap-2"
            >
              <span>Schedule Free Demo</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://dawatdesk.vercel.app/login"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-200 hover:text-white bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 transition-all flex items-center justify-center gap-2"
            >
              <span>Launch App</span>
              <ExternalLink className="w-4 h-4 text-slate-400" />
            </a>
          </div>
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 sm:gap-10 pb-12 border-b border-slate-800/80">
          {/* Brand info (2 cols on md) */}
          <div className="col-span-2 space-y-4">
            <Logo variant="dark" size="md" />
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              The Digital Control Desk of Your Restaurant. Run your restaurant with seamless front-of-house table ordering, paperless kitchen display tickets, and lightning-fast POS billing.
            </p>
            <div className="pt-2 text-xs text-slate-400 space-y-1.5">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#c89b3c]" />
                <span>Enterprise MongoDB Cloud & SSL Hardened</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#c89b3c]" />
                <span>Zero hardware lock-in (runs on standard browsers)</span>
              </div>
            </div>
          </div>

          {/* Core Modules */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              Core Modules
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <Link href="/features/restaurant-pos" className="hover:text-[#c89b3c] transition-colors">
                  Restaurant POS
                </Link>
              </li>
              <li>
                <Link href="/features/kitchen-management" className="hover:text-[#c89b3c] transition-colors">
                  Kitchen KDS & KOT
                </Link>
              </li>
              <li>
                <Link href="/features/billing" className="hover:text-[#c89b3c] transition-colors">
                  Billing & Counter POS
                </Link>
              </li>
              <li>
                <Link href="/features/table-management" className="hover:text-[#c89b3c] transition-colors">
                  Table Layout & Queue
                </Link>
              </li>
              <li>
                <Link href="/features/menu-management" className="hover:text-[#c89b3c] transition-colors">
                  Menu & Categories
                </Link>
              </li>
              <li>
                <Link href="/features/reports" className="hover:text-[#c89b3c] transition-colors">
                  Analytics & Reports
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions & Roles */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              Solutions & Roles
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <Link href="/solutions/restaurants" className="hover:text-[#c89b3c] transition-colors">
                  Dine-In Restaurants
                </Link>
              </li>
              <li>
                <Link href="/solutions/cafes" className="hover:text-[#c89b3c] transition-colors">
                  Cafes & Bakeries
                </Link>
              </li>
              <li>
                <Link href="/solutions/quick-service" className="hover:text-[#c89b3c] transition-colors">
                  Quick Service (QSR)
                </Link>
              </li>
              <li>
                <Link href="/roles" className="hover:text-[#c89b3c] transition-colors">
                  Waiter & Chef Workflows
                </Link>
              </li>
              <li>
                <Link href="/features/multi-outlet" className="hover:text-[#c89b3c] transition-colors">
                  Multi-Branch Chains
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="hover:text-[#c89b3c] transition-colors">
                  Complete Lifecycle
                </Link>
              </li>
            </ul>
          </div>

          {/* Platform & Company */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              Platform & Access
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <a
                  href="https://dawatdesk.vercel.app/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white flex items-center gap-1 text-[#c89b3c] font-medium"
                >
                  <span>DawatDesk App Login</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-[#c89b3c] transition-colors">
                  Pricing & Consultation
                </Link>
              </li>
              <li>
                <Link href="/demo" className="hover:text-[#c89b3c] transition-colors">
                  Book Live Demo
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#c89b3c] transition-colors">
                  About Our Mission
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#c89b3c] transition-colors">
                  Contact Sales Team
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-[#c89b3c] transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Operational Details */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} DawatDesk. All rights reserved. The digital control desk for modern dining establishments.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-slate-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-slate-400 transition-colors">
              Terms of Service
            </Link>
            <a
              href="https://dawatdesk.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#c89b3c] transition-colors flex items-center gap-1"
            >
              <span>Running App v1.0</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
