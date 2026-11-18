'use client';

import React, { useState } from 'react';
import {
  Calendar,
  CheckCircle2,
  AlertCircle,
  Building2,
  Mail,
  Phone,
  User,
  MapPin,
  Utensils,
  ArrowRight,
  Loader2,
  Sparkles,
  ShieldCheck
} from 'lucide-react';

interface DemoFormProps {
  headline?: string;
  subheadline?: string;
  compact?: boolean;
}

export default function DemoForm({
  headline = 'Book a Personalized DawatDesk Walkthrough',
  subheadline = 'Our restaurant workflow specialist will demonstrate how DawatDesk streamlines order flow, kitchen communication, and daily billing for your specific outlet format.',
  compact = false,
}: DemoFormProps) {
  const [formData, setFormData] = useState({
    customerName: '',
    phoneNumber: '',
    email: '',
    restaurantName: '',
    restaurantType: 'Fine Dine / Casual Dine',
    city: '',
    numberOfBranches: '1',
    preferredDate: '',
    requirements: '',
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await fetch('/api/demo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Failed to submit demo request');
      }

      setSuccess(true);
    } catch (err: any) {
      setError(err.message || 'An unexpected error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="bg-white rounded-3xl p-8 sm:p-12 border border-emerald-200 shadow-premium text-center space-y-6 animate-in zoom-in-95 duration-300">
        <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
          <CheckCircle2 className="w-9 h-9" />
        </div>
        <div className="space-y-2">
          <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-900">
            Demo Request Confirmed!
          </h3>
          <p className="text-slate-600 text-sm sm:text-base max-w-md mx-auto">
            Thank you, <span className="font-semibold text-slate-900">{formData.customerName}</span>. Your demo request for <span className="font-semibold text-slate-900">{formData.restaurantName}</span> has been logged directly into our scheduling system.
          </p>
        </div>

        <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5 text-left text-xs sm:text-sm text-slate-700 space-y-2 max-w-md mx-auto">
          <div className="flex justify-between">
            <span className="text-slate-500">Contact:</span>
            <span className="font-medium">{formData.phoneNumber}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-500">Email:</span>
            <span className="font-medium">{formData.email}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-500">Outlet Type:</span>
            <span className="font-medium">{formData.restaurantType}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-500">Location:</span>
            <span className="font-medium">{formData.city}</span>
          </div>
        </div>

        <p className="text-xs text-slate-500">
          Our restaurant onboarding specialist will connect via phone and email within 24 business hours to share your custom session invite.
        </p>

        <button
          onClick={() => {
            setSuccess(false);
            setFormData({
              customerName: '',
              phoneNumber: '',
              email: '',
              restaurantName: '',
              restaurantType: 'Fine Dine / Casual Dine',
              city: '',
              numberOfBranches: '1',
              preferredDate: '',
              requirements: '',
            });
          }}
          className="inline-flex items-center gap-2 text-xs font-semibold text-[#c89b3c] hover:underline"
        >
          <span>Schedule another demo or modify details</span>
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-premium">
      <div className="space-y-2 mb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#c89b3c]/15 text-[#8e6121] text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-[#c89b3c]" />
          <span>Interactive Product Tour</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 tracking-tight">
          {headline}
        </h3>
        <p className="text-slate-600 text-sm leading-relaxed">
          {subheadline}
        </p>
      </div>

      {error && (
        <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm flex items-start gap-3">
          <AlertCircle className="w-5 h-5 shrink-0 text-red-600 mt-0.5" />
          <span>{error}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Name & Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              Your Full Name <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              <input
                type="text"
                required
                placeholder="e.g. Rahul Sharma"
                value={formData.customerName}
                onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#c89b3c] focus:border-transparent transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              <input
                type="tel"
                required
                placeholder="e.g. +91 98765 43210"
                value={formData.phoneNumber}
                onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#c89b3c] focus:border-transparent transition-all"
              />
            </div>
          </div>
        </div>

        {/* Email & Restaurant Name */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              Business Email <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              <input
                type="email"
                required
                placeholder="e.g. manager@yourrestaurant.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#c89b3c] focus:border-transparent transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              Restaurant / Outlet Name <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <Building2 className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              <input
                type="text"
                required
                placeholder="e.g. Hariom Grand Kitchen"
                value={formData.restaurantName}
                onChange={(e) => setFormData({ ...formData, restaurantName: e.target.value })}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#c89b3c] focus:border-transparent transition-all"
              />
            </div>
          </div>
        </div>

        {/* Outlet Type & Number of Branches */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              Outlet Type
            </label>
            <div className="relative">
              <Utensils className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              <select
                value={formData.restaurantType}
                onChange={(e) => setFormData({ ...formData, restaurantType: e.target.value })}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#c89b3c] focus:border-transparent transition-all appearance-none cursor-pointer"
              >
                <option value="Fine Dine / Casual Dine">Fine Dine / Casual Dining</option>
                <option value="Cafe / Bakery">Cafe, Coffee Bar & Bakery</option>
                <option value="Quick Service / Fast Food">Quick Service Restaurant (QSR)</option>
                <option value="Food Court Counter">Food Court Counter</option>
                <option value="Cloud / Dark Kitchen">Cloud / Delivery Kitchen</option>
                <option value="Multi-Outlet Chain">Multi-Outlet Restaurant Chain</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              Number of Outlets
            </label>
            <select
              value={formData.numberOfBranches}
              onChange={(e) => setFormData({ ...formData, numberOfBranches: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#c89b3c] focus:border-transparent transition-all appearance-none cursor-pointer"
            >
              <option value="1">Single Outlet (1 location)</option>
              <option value="2-3">2 – 3 Outlets</option>
              <option value="4-10">4 – 10 Outlets</option>
              <option value="10+">10+ Multi-City Franchise</option>
            </select>
          </div>
        </div>

        {/* City & Preferred Date */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              City / State <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              <input
                type="text"
                required
                placeholder="e.g. Mumbai, Bengaluru, Ahmedabad"
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#c89b3c] focus:border-transparent transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              Preferred Demo Date
            </label>
            <div className="relative">
              <Calendar className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              <input
                type="date"
                value={formData.preferredDate}
                onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#c89b3c] focus:border-transparent transition-all"
              />
            </div>
          </div>
        </div>

        {/* Operational Needs */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
            Key Priorities or Specific Questions
          </label>
          <textarea
            rows={3}
            placeholder="Tell us what you'd like to see (e.g. Waiter order flow, Kitchen display timers, UPI checkout, Thermal KOT setup)..."
            value={formData.requirements}
            onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#c89b3c] focus:border-transparent transition-all resize-none"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full py-4 rounded-xl text-base font-bold text-white bg-[#c89b3c] hover:bg-[#b38029] shadow-glow transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
        >
          {loading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Scheduling Your Demo...</span>
            </>
          ) : (
            <>
              <span>Schedule Free 1-on-1 Walkthrough</span>
              <ArrowRight className="w-5 h-5" />
            </>
          )}
        </button>

        <div className="flex items-center justify-center gap-2 pt-2 text-xs text-slate-500">
          <ShieldCheck className="w-4 h-4 text-[#c89b3c]" />
          <span>No credit card required. Personalized demo without obligation.</span>
        </div>
      </form>
    </div>
  );
}
