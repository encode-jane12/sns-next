'use client';

import React, { useState } from 'react';
import {
  Package,
  Barcode,
  Search,
  Truck,
  ShieldCheck,
  FileCheck,
  Clock,
  ArrowRight,
  AlertCircle,
  HelpCircle,
  Headset,
} from 'lucide-react';
import { DEMO_TRACKING_IDS } from '@/src/data/consignments';

export default function SearchPortal({ onSearch, notFoundId, onClearNotFound }) {
  const [trackingInput, setTrackingInput] = useState(notFoundId || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (trackingInput.trim()) {
      onSearch(trackingInput.trim());
    }
  };

  const handleSelectDemo = (id) => {
    setTrackingInput(id);
    if (onClearNotFound) onClearNotFound();
    onSearch(id);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* HEADER */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl shipping-logo-badge flex items-center justify-center text-white shadow-md shadow-blue-600/20">
                <Package className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-xl font-black tracking-tight text-slate-900">SwiftTrack</span>
                  <span className="text-[10px] uppercase tracking-wider font-extrabold bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full border border-blue-200">
                    Express Cargo
                  </span>
                </div>
                <span className="text-[11px] text-slate-500 font-medium block -mt-0.5">
                  SNS Logistics Network &bull; India
                </span>
              </div>
            </div>

            <div className="hidden sm:flex items-center gap-4 text-xs font-semibold text-slate-600">
              <span className="flex items-center gap-1 text-emerald-600">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                National Network Active
              </span>
              <span>Helpdesk: 1800-245-8820</span>
            </div>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <main className="flex-1 max-w-5xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-10">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-extrabold bg-blue-50 text-blue-700 border border-blue-200">
            <Truck className="w-3.5 h-3.5 text-blue-600" />
            Live National Consignment Telematics
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Track Your Consignment &amp; Express Cargo
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Enter your unique Consignment AWB / Shipping ID below to view real-time location checkpoints, assigned
            delivery associate, and handover OTP.
          </p>
        </div>

        {/* SEARCH CARD */}
        <div className="glass-card bg-white rounded-3xl border-2 border-blue-500/30 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="absolute -right-20 -top-20 w-72 h-72 bg-blue-100/50 rounded-full blur-3xl pointer-events-none"></div>

          {/* Not Found Alert */}
          {notFoundId && (
            <div className="mb-6 p-4 rounded-xl bg-amber-50 border border-amber-300 text-amber-900 flex items-start gap-3 text-xs sm:text-sm">
              <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <div className="space-y-1">
                <p className="font-bold">Consignment &ldquo;{notFoundId}&rdquo; was not found in active manifest.</p>
                <p className="text-slate-600">
                  Please verify the AWB number or click one of the verified demo consignments below to view the tracking
                  dashboard.
                </p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
              Unique Consignment ID / Waybill (AWB)
            </label>
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <input
                  type="text"
                  value={trackingInput}
                  onChange={(e) => {
                    setTrackingInput(e.target.value);
                    if (notFoundId && onClearNotFound) onClearNotFound();
                  }}
                  placeholder="e.g., EXP-BLR-DHN-74192026"
                  className="w-full bg-slate-50 border-2 border-slate-200 focus:border-blue-600 rounded-2xl pl-11 pr-4 py-4 text-sm sm:text-base font-mono font-bold text-slate-900 placeholder:font-sans placeholder:font-normal placeholder:text-slate-400 focus:outline-none focus:bg-white shadow-inner transition-all"
                  autoFocus
                />
                <Barcode className="w-5 h-5 text-slate-400 absolute left-4 top-4" />
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 shipping-btn-primary text-white font-bold text-sm sm:text-base rounded-2xl shadow-lg shadow-blue-600/30 transition-all hover:scale-[1.01] active:scale-[0.99]"
              >
                <Search className="w-5 h-5" />
                <span>Track Consignment</span>
              </button>
            </div>
          </form>

          {/* QUICK SAMPLES */}
          {/* <div className="mt-6 pt-6 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
            <span className="font-semibold text-slate-500">Quick Test Sample Consignments:</span>
            <div className="flex flex-wrap gap-2">
              {DEMO_TRACKING_IDS.map((demo) => (
                <button
                  key={demo.id}
                  onClick={() => handleSelectDemo(demo.id)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-lg border border-blue-200 font-mono font-bold transition-colors"
                  title={demo.desc}
                >
                  <span>{demo.label}</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              ))}
            </div>
          </div> */}
        </div>

        {/* TRUST TILES */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
              <Truck className="w-5 h-5" />
            </div>
            <h2 className="font-bold text-slate-900 text-sm">Real-Time Telematics</h2>
            <p className="text-xs text-slate-500 leading-relaxed">
              Live highway checkpoints &amp; transit hub clearance timestamps.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h2 className="font-bold text-slate-900 text-sm">OTP Doorstep Handover</h2>
            <p className="text-xs text-slate-500 leading-relaxed">
              Secure 4-digit authentication code required for final parcel release.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
              <FileCheck className="w-5 h-5" />
            </div>
            <h2 className="font-bold text-slate-900 text-sm">Instant Waybill &amp; POD</h2>
            <p className="text-xs text-slate-500 leading-relaxed">
              Download and print official logistics docket receipt with one click.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
              <Headset className="w-5 h-5" />
            </div>
            <h2 className="font-bold text-slate-900 text-sm">24/7 Regional Helpdesk</h2>
            <p className="text-xs text-slate-500 leading-relaxed">
              Direct hub escalation channels and delivery associate coordination.
            </p>
          </div>
        </div>

        {/* FAQ ACCORDION */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-4">
          <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <HelpCircle className="w-4 h-4 text-blue-600" />
            Frequently Asked Tracking Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-600 leading-relaxed pt-2">
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
              <strong className="text-slate-800 block text-xs">Where do I find my Tracking / AWB ID?</strong>
              <p>Your tracking number is printed on your physical booking docket and was sent via SMS upon dispatch.</p>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
              <strong className="text-slate-800 block text-xs">When do I share the delivery OTP?</strong>
              <p>Only share the 4-digit verification code with the driver after physically inspecting your package.</p>
            </div>
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="bg-white border-t border-slate-200 py-6 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-800">SwiftTrack Express Cargo</span>
            <span>&bull;</span>
            <span>SNS Construction &amp; Logistics Infrastructure</span>
          </div>
          <div>All consignments are subject to standard carrier terms &amp; conditions.</div>
        </div>
      </footer>
    </div>
  );
}
