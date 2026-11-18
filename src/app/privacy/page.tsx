import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy | DawatDesk',
  description: 'DawatDesk privacy policy and data governance practices.',
};

export default function PrivacyPage() {
  return (
    <div className="py-12 sm:py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      <div className="space-y-3">
        <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-slate-900">
          Privacy Policy
        </h1>
        <p className="text-sm text-slate-500">Last updated: November 2026</p>
      </div>

      <div className="prose prose-slate max-w-none text-sm sm:text-base leading-relaxed space-y-6 text-slate-700">
        <p>
          At DawatDesk (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;), we take your business and customer data confidentiality with utmost seriousness. This Privacy Policy describes how we collect, store, and protect information when you visit our website or evaluate our restaurant software.
        </p>

        <h2 className="text-xl font-display font-bold text-slate-900 pt-4">
          1. Information We Collect
        </h2>
        <p>
          When you book a demo or submit an inquiry through our marketing website, we collect your name, phone number, email address, restaurant/business name, outlet format, city, and operational notes. This information is utilized solely to contact you regarding your evaluation of DawatDesk.
        </p>

        <h2 className="text-xl font-display font-bold text-slate-900 pt-4">
          2. Restaurant Operational Data Protection
        </h2>
        <p>
          DawatDesk is a separate marketing presentation site. When you use the DawatDesk operational application, all menu items, orders, table allocations, and financial transaction summaries are stored in encrypted cloud databases protected by industry-standard authentication tokens. We do not sell, rent, or monetize your restaurant&apos;s customer lists or operational records to third-party advertisers.
        </p>

        <h2 className="text-xl font-display font-bold text-slate-900 pt-4">
          3. Security & Infrastructure
        </h2>
        <p>
          Our web services and databases use HTTPS/TLS encryption in transit and secure database cluster protocols at rest. Inquiries submitted via this website are securely registered in enterprise database clusters.
        </p>

        <h2 className="text-xl font-display font-bold text-slate-900 pt-4">
          4. Contact Information
        </h2>
        <p>
          If you have questions regarding this policy or wish to request data removal, please contact our privacy compliance team at privacy@dawatdesk.com.
        </p>
      </div>
    </div>
  );
}
