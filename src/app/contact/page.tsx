'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Sparkles,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  ExternalLink,
  ShieldCheck
} from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Product Inquiry',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Failed to submit contact message');
      }

      setSuccess(true);
    } catch (err: any) {
      setError(err.message || 'Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-12 sm:py-20 space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Contact Hero */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c89b3c]/15 text-[#8e6121] text-xs font-bold uppercase tracking-wider">
            <Mail className="w-3.5 h-3.5 text-[#c89b3c]" />
            <span>Direct Communication</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-slate-900 tracking-tight">
            Contact the DawatDesk Team
          </h1>
          <p className="text-slate-600 text-base sm:text-lg">
            Have questions about table setups, thermal printer integrations, or volume licensing for multiple outlets? We’re here to help.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
          {/* Contact Details (Left) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <h3 className="text-2xl font-display font-bold text-slate-900">
                Get in Touch
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Connect with our team for operational consultations, customized demonstrations, and technical support.
              </p>
            </div>

            <div className="space-y-4 text-sm text-slate-700">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                <Mail className="w-5 h-5 text-[#c89b3c] shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-slate-900">Sales & Demonstrations</div>
                  <div className="text-slate-600">sales@dawatdesk.com</div>
                  <div className="text-xs text-slate-400 mt-1">Average response: &lt; 4 hours</div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                <Phone className="w-5 h-5 text-[#c89b3c] shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-slate-900">Phone & WhatsApp Support</div>
                  <div className="text-slate-600">+91 98765 43210</div>
                  <div className="text-xs text-slate-400 mt-1">Monday – Saturday, 9:00 AM – 9:00 PM IST</div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                <ExternalLink className="w-5 h-5 text-[#c89b3c] shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-slate-900">Live Running Application</div>
                  <a
                    href="https://dawatdesk.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#c89b3c] hover:underline font-medium"
                  >
                    https://dawatdesk.vercel.app/
                  </a>
                  <div className="text-xs text-slate-400 mt-1">Official product production instance</div>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#c89b3c]/10 border border-[#c89b3c]/20 text-xs text-[#8e6121] space-y-1">
              <div className="font-bold flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4" />
                <span>Encrypted & Logged</span>
              </div>
              <p>
                All inquiries submitted through this website are securely registered in our MongoDB Atlas enterprise database.
              </p>
            </div>
          </div>

          {/* Form (Right) */}
          <div className="lg:col-span-7">
            {success ? (
              <div className="bg-white rounded-3xl p-8 sm:p-12 border border-emerald-200 shadow-premium text-center space-y-5">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="text-2xl font-display font-bold text-slate-900">
                  Message Sent Successfully!
                </h3>
                <p className="text-slate-600 text-sm max-w-md mx-auto">
                  Thank you for reaching out. Our restaurant consultant will review your inquiry and contact you within 24 business hours.
                </p>
                <button
                  onClick={() => {
                    setSuccess(false);
                    setFormData({
                      name: '',
                      email: '',
                      phone: '',
                      subject: 'General Product Inquiry',
                      message: '',
                    });
                  }}
                  className="text-xs font-semibold text-[#c89b3c] hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-premium space-y-6">
                <div className="space-y-1">
                  <h3 className="text-xl font-display font-bold text-slate-900">
                    Send Us a Message
                  </h3>
                  <p className="text-xs text-slate-500">
                    Fill out the form below and we will get back to you promptly.
                  </p>
                </div>

                {error && (
                  <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{error}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Amit Patel"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#c89b3c] focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. amit@restaurant.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#c89b3c] focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="e.g. +91 98200 12345"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#c89b3c] focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Subject
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#c89b3c] focus:border-transparent"
                      >
                        <option value="General Product Inquiry">General Product Inquiry</option>
                        <option value="Pricing & Quote Request">Pricing & Quote Request</option>
                        <option value="Printer & Hardware Setup">Printer & Hardware Setup</option>
                        <option value="Multi-Outlet Franchise Plan">Multi-Outlet Franchise Plan</option>
                        <option value="Technical Support">Technical Support</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Your Message *
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Tell us about your restaurant, questions, or requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#c89b3c] focus:border-transparent resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 rounded-xl text-sm font-bold text-white bg-[#c89b3c] hover:bg-[#b38029] shadow-glow transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Inquiry</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
