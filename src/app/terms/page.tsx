import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Terms of Service | DawatDesk',
  description: 'DawatDesk terms of service and website usage conditions.',
};

export default function TermsPage() {
  return (
    <div className="py-12 sm:py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      <div className="space-y-3">
        <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-slate-900">
          Terms of Service
        </h1>
        <p className="text-sm text-slate-500">Last updated: November 2026</p>
      </div>

      <div className="prose prose-slate max-w-none text-sm sm:text-base leading-relaxed space-y-6 text-slate-700">
        <p>
          Welcome to DawatDesk. By accessing this marketing website or requesting a product demonstration, you agree to comply with and be bound by the following terms and conditions.
        </p>

        <h2 className="text-xl font-display font-bold text-slate-900 pt-4">
          1. Purpose of the Marketing Platform
        </h2>
        <p>
          This website serves as an official product information and presentation platform for DawatDesk. It is independently hosted and operated alongside the production restaurant operations application located at https://dawatdesk.vercel.app/.
        </p>

        <h2 className="text-xl font-display font-bold text-slate-900 pt-4">
          2. Intellectual Property
        </h2>
        <p>
          All trademarks, vector marks, logos, user interface designs, screenshots, and written materials displayed on this site are the intellectual property of DawatDesk Technologies. Unauthorized reproduction or scraping is prohibited.
        </p>

        <h2 className="text-xl font-display font-bold text-slate-900 pt-4">
          3. Fair Representation
        </h2>
        <p>
          All descriptions of product capabilities represent verified functionality of the active software platform. We do not provide guarantees of specific percentage revenue increases, which depend on individual restaurant operational practices.
        </p>

        <h2 className="text-xl font-display font-bold text-slate-900 pt-4">
          4. Contact
        </h2>
        <p>
          For legal or operational inquiries, contact us at legal@dawatdesk.com.
        </p>
      </div>
    </div>
  );
}
