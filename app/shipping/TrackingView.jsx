'use client';

import React, { useState } from 'react';
import {
  Package,
  Barcode,
  Share2,
  Printer,
  Scale,
  Copy,
  Building2,
  ArrowRight,
  MapPin,
  Truck,
  CalendarCheck,
  User,
  Key,
  Box,
  GitCommit,
  RotateCw,
  Check,
  Building,
  PackageCheck,
  BadgeCheck,
  MessageSquare,
  UserCheck,
  Compass,
  Flag,
  ShieldCheck,
  FileCheck,
  Download,
  HelpCircle,
  ChevronRight,
  ClipboardEdit,
  X,
  Headset,
  Loader2,
  ArrowLeft,
  Search,
  Clock,
} from 'lucide-react';

export default function TrackingView({ consignment, onSearchAnother }) {
  const [copyToast, setCopyToast] = useState(false);
  const [addressToast, setAddressToast] = useState(false);
  const [shareToast, setShareToast] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [refreshSuccess, setRefreshSuccess] = useState(false);

  // Modals state
  const [instructionsModalOpen, setInstructionsModalOpen] = useState(false);
  const [selectedInstruction, setSelectedInstruction] = useState('Call before reaching TATA Community Center');
  const [customNote, setCustomNote] = useState('');
  const [instructionSent, setInstructionSent] = useState(false);
  const [supportModalOpen, setSupportModalOpen] = useState(false);

  // Top quick search state
  const [topSearchVal, setTopSearchVal] = useState(consignment.trackingNumber);

  const copyToClipboard = (text, type = 'code') => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
    } else {
      const tempInput = document.createElement('input');
      tempInput.value = text;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand('copy');
      document.body.removeChild(tempInput);
    }

    if (type === 'code') {
      setCopyToast(true);
      setTimeout(() => setCopyToast(false), 2200);
    } else if (type === 'address') {
      setAddressToast(true);
      setTimeout(() => setAddressToast(false), 2200);
    }
  };

  const handleShare = () => {
    const shareData = {
      title: `Consignment Tracking - ${consignment.trackingNumber}`,
      text: `Consignment ${consignment.trackingNumber} (${consignment.grossWeight}) is currently ${consignment.status} to ${consignment.recipient.name}, ${consignment.destination.location}.`,
      url: typeof window !== 'undefined' ? window.location.href : '',
    };

    if (typeof navigator !== 'undefined' && navigator.share) {
      navigator.share(shareData).catch(() => {});
    } else {
      copyToClipboard(typeof window !== 'undefined' ? window.location.href : consignment.trackingNumber, 'code');
      setShareToast(true);
      setTimeout(() => setShareToast(false), 2500);
    }
  };

  const handlePrintWaybill = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
      setRefreshSuccess(true);
      setTimeout(() => setRefreshSuccess(false), 2000);
    }, 600);
  };

  const handleSendInstructions = () => {
    setInstructionSent(true);
    setTimeout(() => {
      setInstructionsModalOpen(false);
      setInstructionSent(false);
      setCustomNote('');
    }, 1500);
  };

  const handleTopSearchSubmit = (e) => {
    e.preventDefault();
    if (topSearchVal.trim()) {
      onSearchAnother(topSearchVal.trim());
    }
  };

  return (
    <div className="bg-slate-50 text-slate-800 antialiased min-h-screen flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* TOP HEADER */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Brand Logo & Back Button */}
            <div className="flex items-center space-x-3">
              <button
                onClick={() => onSearchAnother('')}
                className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors mr-1"
                title="Search another shipment"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>

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

            {/* Quick AWB Search Input Bar */}
            <form onSubmit={handleTopSearchSubmit} className="hidden md:flex items-center flex-1 max-w-sm mx-6">
              <div className="relative w-full">
                <input
                  type="text"
                  value={topSearchVal}
                  onChange={(e) => setTopSearchVal(e.target.value)}
                  placeholder="Enter Tracking ID..."
                  className="w-full bg-slate-100 border border-slate-200 text-xs font-mono font-bold rounded-lg pl-9 pr-20 py-2 text-slate-700 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
                  title="Click to change tracking ID"
                />
                <Barcode className="w-4 h-4 text-slate-400 absolute left-2.5 top-2.5" />
                <button
                  type="submit"
                  className="absolute right-1.5 top-1 text-[10px] font-semibold text-blue-700 bg-blue-50 hover:bg-blue-100 border border-blue-200 px-2 py-1 rounded transition-colors"
                >
                  Lookup
                </button>
              </div>
            </form>

            {/* Header Actions */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              <button
                onClick={handleShare}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
              >
                <Share2 className="w-4 h-4 text-blue-600" />
                <span className="hidden sm:inline">Share</span>
              </button>
              <button
                onClick={handlePrintWaybill}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors shadow-sm"
              >
                <Printer className="w-4 h-4" />
                <span>Waybill</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* LIVE DELIVERY TICKER BANNER */}
      <div className="shipping-ticker-banner text-white px-4 py-2.5 shadow-inner">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm">
          <div className="flex items-center gap-2">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-300 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-400"></span>
            </span>
            <span className="font-bold tracking-wide">STATUS NOTIFICATION:</span>
            <span className="font-medium text-blue-100">{consignment.statusMessage}</span>
          </div>
          <div className="flex items-center gap-2 font-mono text-xs bg-blue-900/50 px-2.5 py-1 rounded-md border border-blue-400/30">
            <Clock className="w-3.5 h-3.5 text-amber-300" />
            <span>
              Slot: <strong>{consignment.deliverySlot}</strong>
            </span>
          </div>
        </div>
      </div>

      {/* MAIN BODY CONTENT */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-6">
        {/* HERO CARD: SHIPMENT OVERVIEW & STATUS */}
        <div className="glass-card rounded-2xl border-2 border-blue-500/30 p-5 sm:p-7 relative overflow-hidden bg-white shadow-xl">
          {/* Ambient Backdrops */}
          <div className="absolute -right-20 -top-20 w-72 h-72 bg-blue-100/60 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -left-20 -bottom-20 w-72 h-72 bg-amber-100/50 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 pb-6 border-b border-slate-200">
            {/* Tracking Header Details */}
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-extrabold bg-amber-500 text-white shadow-md shadow-amber-500/25 animate-pulse-fast">
                  <span className="w-2.5 h-2.5 rounded-full bg-white"></span>
                  {consignment.status}
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200">
                  <Scale className="w-3.5 h-3.5 text-blue-600" />
                  Consignment Weight: <strong>{consignment.grossWeight}</strong>
                </span>
                <span className="text-xs font-mono text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200">
                  Dispatched {consignment.dispatchedDate}
                </span>
              </div>

              <div className="flex items-baseline flex-wrap gap-2.5 pt-1">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight font-mono">
                  {consignment.trackingNumber}
                </h1>
                <button
                  onClick={() => copyToClipboard(consignment.trackingNumber, 'code')}
                  className="p-1.5 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors border border-transparent hover:border-blue-200"
                  title="Copy tracking number"
                >
                  <Copy className="w-4 h-4" />
                </button>
                {copyToast && (
                  <span className="text-xs font-semibold text-blue-700 bg-blue-100 px-2.5 py-1 rounded-full border border-blue-300">
                    Tracking code copied!
                  </span>
                )}
                {shareToast && (
                  <span className="text-xs font-semibold text-blue-700 bg-blue-100 px-2.5 py-1 rounded-full border border-blue-300">
                    Link copied to clipboard!
                  </span>
                )}
              </div>

              <p className="text-xs sm:text-sm text-slate-600 flex flex-wrap items-center gap-2">
                <span className="font-semibold text-slate-800 flex items-center gap-1.5">
                  <Building2 className="w-4 h-4 text-slate-400" />
                  {consignment.origin.name}
                </span>
                <ArrowRight className="w-4 h-4 text-blue-500 font-bold" />
                <span className="font-semibold text-slate-800 flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-blue-600" />
                  {consignment.destination.name}
                </span>
              </p>
            </div>

            {/* Big Highlight Banner */}
            <div className="shipping-hero-status-card text-white rounded-2xl p-5 sm:p-6 shadow-lg shadow-blue-700/20 flex items-center gap-5 sm:min-w-[340px]">
              <div className="p-3.5 bg-white/15 backdrop-blur-sm rounded-2xl border border-white/20 text-amber-300 flex-shrink-0 animate-subtle-bounce">
                <Truck className="w-10 h-10" />
              </div>
              <div>
                <div className="text-[11px] uppercase tracking-wider font-extrabold text-blue-200 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span>
                  Current Status
                </div>
                <div className="text-2xl sm:text-3xl font-black tracking-tight text-white mt-0.5">
                  {consignment.arrivalStatusText}
                </div>
                <div className="text-sm font-semibold text-amber-200 mt-1 flex items-center gap-1.5">
                  <CalendarCheck className="w-4 h-4" />
                  {consignment.deliverySlotHighlight}
                </div>
              </div>
            </div>
          </div>

          {/* PROGRESS BAR OF SHIPMENT JOURNEY */}
          <div className="mt-6">
            <div className="flex items-center justify-between text-xs font-semibold text-slate-600 mb-2">
              <span>{consignment.origin.facility}</span>
              <span className="hidden sm:inline">Cross-Country Transit</span>
              <span className="hidden sm:inline">{consignment.destination.facility}</span>
              <span className="text-amber-600 font-extrabold flex items-center gap-1">
                <Truck className="w-3.5 h-3.5 animate-subtle-bounce" />
                Out for Delivery ({consignment.destination.location.split('/')[0].trim()})
              </span>
              <span className="text-slate-400">Delivered</span>
            </div>
            <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden p-0.5 border border-slate-200">
              <div
                className="shipping-progress-fill h-full rounded-full transition-all duration-700"
                style={{ width: `${consignment.progressPercentage}%` }}
              ></div>
            </div>
          </div>

          {/* Quick Highlights Metric Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 text-sm">
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
              <span className="text-xs text-slate-500 block font-medium">Consignment Weight</span>
              <span className="font-extrabold text-blue-700 flex items-center gap-1.5 mt-0.5 text-base">
                <Scale className="w-4 h-4 text-blue-600" />
                {consignment.weightDescription}
              </span>
            </div>
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
              <span className="text-xs text-slate-500 block font-medium">Consignee Name</span>
              <span className="font-bold text-slate-800 flex items-center gap-1 mt-0.5">
                <User className="w-4 h-4 text-blue-600" />
                {consignment.recipient.name}
              </span>
            </div>
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
              <span className="text-xs text-slate-500 block font-medium">Destination PIN</span>
              <span className="font-mono font-bold text-slate-800 flex items-center gap-1.5 mt-0.5">
                <MapPin className="w-4 h-4 text-blue-600" />
                {consignment.destination.pin} ({consignment.destination.location})
              </span>
            </div>
            <div className="bg-amber-50/70 p-3 rounded-xl border border-amber-200">
              <span className="text-xs text-amber-900 block font-medium">Delivery PIN (OTP)</span>
              <span className="font-mono font-bold text-amber-700 bg-white px-2 py-0.5 rounded border border-amber-300 inline-flex items-center gap-1.5 mt-0.5">
                <Key className="w-3.5 h-3.5" />
                OTP: <span>{consignment.otp}</span>
              </span>
            </div>
          </div>
        </div>

        {/* TWO COLUMN LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* LEFT COLUMN: CONSIGNMENT DETAILS & CHRONOLOGICAL TIMELINE (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* CONSIGNMENT & CARGO SPECIFICATIONS */}
            <div className="glass-card rounded-2xl border border-slate-200 p-5 sm:p-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                    <Box className="w-4 h-4" />
                  </div>
                  <h2 className="text-base font-bold text-slate-900">Consignment Specifications</h2>
                </div>
                <span className="text-xs font-mono font-bold text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-1 rounded-md">
                  {consignment.serviceType}
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs">
                <div>
                  <span className="text-slate-400 block mb-0.5">Gross Weight</span>
                  <strong className="text-blue-700 font-extrabold text-sm">{consignment.grossWeight}</strong>
                  <p className="text-[11px] text-slate-500">Volumetric: {consignment.volumetricWeight}</p>
                </div>
                <div>
                  <span className="text-slate-400 block mb-0.5">Origin Facility</span>
                  <strong className="text-slate-800 text-sm">{consignment.origin.facility}</strong>
                  <p className="text-[11px] text-slate-500">{consignment.origin.detail}</p>
                </div>
                <div>
                  <span className="text-slate-400 block mb-0.5">Dispatched Date</span>
                  <strong className="text-slate-800 text-sm">{consignment.dispatchedDateTime.split('•')[0]}</strong>
                  <p className="text-[11px] text-slate-500">Carrier Outward: {consignment.dispatchedDateTime.split('•')[1] || '05:20 PM'}</p>
                </div>
                <div>
                  <span className="text-slate-400 block mb-0.5">Destination Facility</span>
                  <strong className="text-slate-800 text-sm">{consignment.destination.facility}</strong>
                  <p className="text-[11px] text-slate-500">{consignment.destination.detail}</p>
                </div>
                <div>
                  <span className="text-slate-400 block mb-0.5">Expected Delivery</span>
                  <strong className="text-emerald-700 font-bold text-sm">{consignment.expectedDelivery}</strong>
                  <p className="text-[11px] text-emerald-600 font-medium">{consignment.expectedDeliverySubtitle}</p>
                </div>
                <div>
                  <span className="text-slate-400 block mb-0.5">Handling Tier</span>
                  <strong className="text-slate-800 text-sm">{consignment.handlingTier}</strong>
                  <p className="text-[11px] text-slate-500">{consignment.handlingSubtext}</p>
                </div>
              </div>
            </div>

            {/* DETAILED SHIPMENT TIMELINE */}
            <div className="glass-card rounded-2xl border border-slate-200 p-6 sm:p-7">
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-100">
                <div>
                  <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                    <GitCommit className="w-5 h-5 text-blue-600" />
                    Detailed Shipment Milestones
                  </h2>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {consignment.origin.city} Fulfillment Center &rarr; {consignment.destination.name}
                  </p>
                </div>
                <button
                  onClick={handleRefresh}
                  disabled={isRefreshing}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-700 bg-blue-50 hover:bg-blue-100 px-3 py-1.5 rounded-lg border border-blue-200 transition-colors"
                >
                  {isRefreshing ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      <span>Updating...</span>
                    </>
                  ) : refreshSuccess ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Updated Just Now</span>
                    </>
                  ) : (
                    <>
                      <RotateCw className="w-3.5 h-3.5" />
                      <span>Refresh</span>
                    </>
                  )}
                </button>
              </div>

              {/* Vertical Timeline Steps */}
              <div className="relative pl-6 sm:pl-8 space-y-7 before:absolute before:left-3 before:top-3 before:bottom-3 before:w-0.5 before:bg-slate-200">
                {consignment.milestones.map((milestone) => {
                  if (milestone.status === 'active') {
                    return (
                      <div key={milestone.id} className="relative flex items-start gap-4">
                        <div className="absolute -left-[27px] sm:-left-[35px] top-0 w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center ring-4 ring-amber-100 shadow-md z-10">
                          <span className="animate-ping absolute inset-0 rounded-full bg-amber-400 opacity-60"></span>
                          <Truck className="w-4 h-4 z-10" />
                        </div>
                        <div className="flex-1 bg-amber-50/70 border-2 border-amber-400/80 p-4 rounded-xl shadow-sm">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                            <div className="flex items-center gap-2">
                              <h3 className="font-extrabold text-amber-950 text-sm sm:text-base">{milestone.title}</h3>
                              {milestone.badge && (
                                <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-amber-500 text-white animate-pulse">
                                  {milestone.badge}
                                </span>
                              )}
                            </div>
                            <span className="text-xs font-mono font-bold text-amber-800">{milestone.timestamp}</span>
                          </div>
                          <p className="text-xs sm:text-sm text-slate-700 mt-1.5">{milestone.description}</p>
                          {(milestone.highlight || milestone.subnote) && (
                            <div className="mt-3 flex flex-wrap items-center gap-2 pt-2 border-t border-amber-200/60 text-xs">
                              {milestone.highlight && (
                                <span className="bg-white px-2.5 py-1 rounded-md text-amber-800 font-semibold border border-amber-200">
                                  {milestone.highlight}
                                </span>
                              )}
                              {milestone.subnote && <span className="text-slate-600">{milestone.subnote}</span>}
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  }

                  if (milestone.status === 'upcoming') {
                    return (
                      <div key={milestone.id} className="relative flex items-start gap-4 opacity-70">
                        <div className="absolute -left-[27px] sm:-left-[35px] top-0 w-8 h-8 rounded-full bg-slate-100 text-slate-400 border-2 border-slate-300 flex items-center justify-center ring-4 ring-white z-10">
                          <PackageCheck className="w-4 h-4" />
                        </div>
                        <div className="flex-1 bg-white p-4 rounded-xl border border-dashed border-slate-300">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                            <h3 className="font-bold text-slate-700 text-sm sm:text-base">{milestone.title}</h3>
                            <span className="text-xs font-mono text-blue-700 font-bold bg-blue-50 px-2 py-0.5 rounded">
                              {milestone.timestamp}
                            </span>
                          </div>
                          <p className="text-xs sm:text-sm text-slate-500 mt-1">{milestone.description}</p>
                        </div>
                      </div>
                    );
                  }

                  return (
                    <div key={milestone.id} className="relative flex items-start gap-4">
                      <div className="absolute -left-[27px] sm:-left-[35px] top-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center ring-4 ring-white shadow-sm z-10">
                        <Check className="w-4 h-4 stroke-[3]" />
                      </div>
                      <div className="flex-1 bg-slate-50 p-4 rounded-xl border border-slate-200">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                          <h3 className="font-bold text-slate-900 text-sm sm:text-base">{milestone.title}</h3>
                          <span className="text-xs font-mono font-medium text-slate-500">{milestone.timestamp}</span>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-600 mt-1">{milestone.description}</p>
                        {milestone.facility && (
                          <div className="mt-2 text-xs font-medium text-slate-500 flex items-center gap-1.5">
                            <Building className="w-3.5 h-3.5 text-slate-400" />
                            <span>{milestone.facility}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: DELIVERY EXECUTIVE + RECIPIENT CARD + ACTIONS (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* ASSIGNED DELIVERY EXECUTIVE CARD */}
            <div className="glass-card rounded-2xl border-2 border-blue-500/80 p-5 sm:p-6 shadow-md relative overflow-hidden bg-white">
              <div className="absolute top-0 right-0 bg-blue-700 text-white text-[10px] uppercase font-black px-3.5 py-1.5 rounded-bl-xl tracking-wider shadow-sm">
                Assigned Delivery Agent
              </div>

              <div className="flex items-center gap-4 pb-4 border-b border-slate-100">
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl shipping-avatar-badge text-white flex items-center justify-center font-bold text-xl shadow-md">
                    {consignment.executive.initials}
                  </div>
                  <span
                    className="w-4 h-4 rounded-full bg-emerald-500 border-2 border-white absolute -bottom-1 -right-1 flex items-center justify-center text-[9px] text-white"
                    title="Active"
                  >
                    ✓
                  </span>
                </div>
                <div>
                  <h3 className="font-extrabold text-slate-900 text-lg">{consignment.executive.name}</h3>
                  <p className="text-xs text-slate-500 flex items-center gap-1 mt-0.5">
                    <BadgeCheck className="w-3.5 h-3.5 text-blue-600" />
                    {consignment.executive.designation}
                  </p>
                  <div className="flex items-center gap-1.5 text-xs text-amber-600 font-bold mt-1">
                    <div className="flex text-amber-500 text-xs">★★★★★</div>
                    <span className="text-slate-700 font-semibold">{consignment.executive.rating}</span>
                    <span className="text-slate-400 font-normal">({consignment.executive.totalDeliveries})</span>
                  </div>
                </div>
              </div>

              {/* Courier Details & Security PIN */}
              <div className="pt-4 space-y-3">
                <div className="flex items-center justify-between text-xs bg-slate-50 p-3 rounded-xl border border-slate-200">
                  <span className="text-slate-500 font-medium">Delivery Vehicle:</span>
                  <span className="font-mono font-bold text-slate-800 bg-white px-2 py-0.5 rounded border border-slate-200">
                    {consignment.executive.vehicleNumber}
                  </span>
                </div>

                {/* OTP prompt badge */}
                <div className="p-3.5 shipping-otp-box rounded-xl border border-amber-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-amber-800 block">
                        Delivery Verification PIN
                      </span>
                      <span className="text-xs text-slate-600">Share this code only upon parcel receipt</span>
                    </div>
                    <div className="font-mono font-black text-2xl text-amber-700 bg-white px-3.5 py-1 rounded-xl border border-amber-300 shadow-sm">
                      {consignment.otp}
                    </div>
                  </div>
                </div>

                {/* Note/Instruction Trigger */}
                <div className="pt-1">
                  <button
                    onClick={() => setInstructionsModalOpen(true)}
                    className="w-full flex items-center justify-center gap-2 py-3 px-3 bg-blue-50 hover:bg-blue-100 text-blue-800 border border-blue-200 font-semibold text-xs rounded-xl transition-colors shadow-sm"
                  >
                    <MessageSquare className="w-4 h-4 text-blue-600" />
                    <span>Add Delivery Instructions / Landmark Note</span>
                  </button>
                </div>
              </div>
            </div>

            {/* RECIPIENT & EXACT DELIVERY ADDRESS CARD */}
            <div className="glass-card rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-sm">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-blue-50 text-blue-700">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">Delivery Destination</h3>
                    <p className="text-[11px] text-slate-500">Registered {consignment.destination.location} Address</p>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(consignment.destination.fullAddress, 'address')}
                  className="text-xs font-semibold text-blue-700 hover:text-blue-800 flex items-center gap-1 bg-blue-50 hover:bg-blue-100 px-2.5 py-1 rounded-lg border border-blue-200 transition-colors"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy</span>
                </button>
              </div>

              {/* Exact Recipient Address */}
              <div className="mt-4 space-y-3 text-xs sm:text-sm text-slate-700">
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                  <span className="text-[10px] uppercase tracking-wider font-extrabold text-slate-500 block mb-0.5">
                    Recipient Consignee:
                  </span>
                  <p className="font-extrabold text-slate-900 text-base flex items-center gap-1.5">
                    <User className="w-4 h-4 text-blue-600" />
                    {consignment.recipient.name}
                  </p>
                </div>

                <div className="space-y-2 pl-1 leading-relaxed">
                  {consignment.recipient.careOf && (
                    <div className="flex items-start gap-2">
                      <UserCheck className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" />
                      <span className="font-semibold text-slate-800">{consignment.recipient.careOf}</span>
                    </div>
                  )}
                  {consignment.recipient.landmark && (
                    <div className="flex items-start gap-2">
                      <Compass className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" />
                      <span>{consignment.recipient.landmark}</span>
                    </div>
                  )}
                  <div className="flex items-start gap-2">
                    <Building className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" />
                    <span>{consignment.recipient.area}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Flag className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" />
                    <span>
                      {consignment.recipient.stateWithPin}{' '}
                      <strong className="font-mono text-blue-800 bg-blue-50 px-2 py-0.5 rounded border border-blue-200 font-bold">
                        {consignment.recipient.pin}
                      </strong>
                    </span>
                  </div>
                </div>

                {addressToast && (
                  <div className="text-xs text-blue-800 bg-blue-50 p-2 rounded-lg border border-blue-200 font-medium">
                    Address copied to clipboard!
                  </div>
                )}

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-blue-600" /> Verified Postal Area: {consignment.destination.pin}
                  </span>
                  <button
                    onClick={() => setInstructionsModalOpen(true)}
                    className="text-blue-700 font-semibold hover:underline"
                  >
                    Add Landmark Note
                  </button>
                </div>
              </div>
            </div>

            {/* QUICK UTILITY TILES */}
            <div className="space-y-2.5">
              <button
                onClick={handlePrintWaybill}
                className="w-full flex items-center justify-between p-3.5 rounded-xl border border-slate-200 bg-white hover:border-blue-500 hover:bg-blue-50/30 transition-all text-left shadow-sm group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-slate-100 text-slate-700 group-hover:bg-slate-900 group-hover:text-white transition-colors">
                    <FileCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-bold text-slate-900">
                      Download Consignment Receipt / Waybill
                    </div>
                    <div className="text-[11px] text-slate-500">
                      Official {consignment.grossWeight} docket from {consignment.origin.city} to {consignment.destination.location}
                    </div>
                  </div>
                </div>
                <Download className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                onClick={() => setSupportModalOpen(true)}
                className="w-full flex items-center justify-between p-3.5 rounded-xl border border-slate-200 bg-white hover:border-blue-500 hover:bg-blue-50/30 transition-all text-left shadow-sm group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-amber-100 text-amber-700 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                    <HelpCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-bold text-slate-900">
                      {consignment.support.hubName} Helpdesk
                    </div>
                    <div className="text-[11px] text-slate-500">Local hub regional support</div>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="bg-white border-t border-slate-200 mt-12 py-6 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-800">SwiftTrack Express</span>
            <span>&bull;</span>
            <span>
              {consignment.origin.city} to {consignment.destination.location} Express Corridor
            </span>
          </div>
          <div className="flex items-center gap-4 text-slate-500">
            <span>
              Target: <strong>{consignment.expectedDelivery}</strong>
            </span>
            <span>&bull;</span>
            <button onClick={() => setSupportModalOpen(true)} className="hover:text-blue-600 underline">
              Customer Support
            </button>
          </div>
        </div>
      </footer>

      {/* MODAL: DELIVERY INSTRUCTIONS / LANDMARK */}
      {instructionsModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-100">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                  <ClipboardEdit className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-slate-900 text-sm">Instructions for {consignment.executive.name}</h3>
              </div>
              <button
                onClick={() => setInstructionsModalOpen(false)}
                className="text-slate-400 hover:text-slate-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="py-4 space-y-3">
              <p className="text-xs text-slate-600 leading-relaxed">
                Destination: <strong>{consignment.destination.fullAddress}</strong>
                <br />
                Updates will be relayed instantly to the courier&apos;s handheld terminal.
              </p>

              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">Standard Instruction</label>
                <select
                  value={selectedInstruction}
                  onChange={(e) => setSelectedInstruction(e.target.value)}
                  className="w-full text-xs p-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-50"
                >
                  <option>Call before reaching delivery location</option>
                  <option>Ring doorbell and authenticate with OTP {consignment.otp}</option>
                  <option>Deliver to security / reception if recipient is not available</option>
                  <option>Please deliver between 04:00 PM – 07:30 PM</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">Custom Landmark / House Note</label>
                <textarea
                  value={customNote}
                  onChange={(e) => setCustomNote(e.target.value)}
                  rows={2.5}
                  className="w-full text-xs p-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., Adjacent to Community Center gate, yellow building..."
                ></textarea>
              </div>

              {instructionSent && (
                <div className="text-xs text-blue-800 bg-blue-50 p-2.5 rounded-lg border border-blue-200 font-medium">
                  ✓ Instructions transmitted to delivery executive!
                </div>
              )}
            </div>

            <div className="flex justify-end gap-2 pt-2 border-t border-slate-100">
              <button
                onClick={() => setInstructionsModalOpen(false)}
                className="px-3.5 py-1.5 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={handleSendInstructions}
                className="px-4 py-1.5 text-xs font-semibold bg-blue-600 text-white hover:bg-blue-700 rounded-lg shadow-sm"
              >
                Send to Agent
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL: SUPPORT DESK */}
      {supportModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-100">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h3 className="font-bold text-slate-900 flex items-center gap-2">
                <Headset className="w-4 h-4 text-blue-600" />
                {consignment.support.hubName} Support Desk
              </h3>
              <button onClick={() => setSupportModalOpen(false)} className="text-slate-400 hover:text-slate-600">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="py-4 space-y-3 text-xs text-slate-700">
              <div className="p-3 bg-blue-50/60 rounded-xl space-y-1.5 border border-blue-200">
                <div className="font-bold text-slate-900">{consignment.support.hubName}</div>
                <div className="text-slate-600">Address: {consignment.support.hubAddress}</div>
                <div className="text-blue-700 font-bold font-mono">Toll-Free Helpline: {consignment.support.helpline}</div>
              </div>
              <p className="text-slate-500">
                Quote tracking ID <strong>{consignment.trackingNumber}</strong> for status verification regarding this delivery.
              </p>
            </div>
            <div className="flex justify-end">
              <button
                onClick={() => setSupportModalOpen(false)}
                className="px-4 py-2 text-xs font-semibold bg-slate-900 text-white rounded-lg"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* PRINTABLE WAYBILL TEMPLATE (Appears only during window.print) */}
      <div id="printable-waybill" className="hidden font-sans p-8 max-w-3xl mx-auto bg-white border border-slate-300 text-slate-900">
        <div className="border-b-2 border-slate-900 pb-4 mb-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-black tracking-tight">SwiftTrack Express &bull; Consignment Waybill</h1>
            <p className="text-xs text-slate-500 font-mono">AWB # {consignment.trackingNumber} | {consignment.serviceType}</p>
          </div>
          <div className="text-right">
            <span className="text-xs bg-amber-500 text-white px-3 py-1 font-bold uppercase rounded-full">
              {consignment.status}
            </span>
            <div className="text-xs font-mono font-bold mt-1 text-slate-700">Date: {consignment.expectedDelivery}</div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 my-6 border p-4 rounded text-xs leading-relaxed">
          <div>
            <h3 className="font-bold uppercase text-slate-500 text-[10px] mb-1">Origin (Shipper)</h3>
            <p className="font-bold text-sm">{consignment.origin.facility}</p>
            <p>{consignment.origin.fullAddress}</p>
            <p className="mt-1 font-semibold text-slate-700">Dispatched: {consignment.dispatchedDateTime}</p>
          </div>
          <div>
            <h3 className="font-bold uppercase text-slate-500 text-[10px] mb-1">Destination (Consignee)</h3>
            <p className="font-bold text-sm">{consignment.recipient.name}</p>
            <p>{consignment.destination.fullAddress}</p>
            <p className="font-bold text-slate-900">PIN: {consignment.destination.pin}</p>
          </div>
        </div>

        <table className="w-full text-xs text-left border-collapse border border-slate-300 my-4">
          <thead className="bg-slate-100">
            <tr>
              <th className="border border-slate-300 p-2">Package Weight</th>
              <th className="border border-slate-300 p-2">Assigned Agent &amp; Vehicle</th>
              <th className="border border-slate-300 p-2">Current Status</th>
              <th className="border border-slate-300 p-2">Delivery Target</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-300 p-2 font-bold text-blue-700">{consignment.grossWeight}</td>
              <td className="border border-slate-300 p-2 font-semibold">
                {consignment.executive.name} ({consignment.executive.vehicleNumber})
              </td>
              <td className="border border-slate-300 p-2 font-bold text-amber-700">{consignment.status}</td>
              <td className="border border-slate-300 p-2 font-bold text-emerald-700">{consignment.expectedDelivery}</td>
            </tr>
          </tbody>
        </table>

        <div className="p-3 bg-slate-50 border border-slate-200 rounded text-xs flex justify-between items-center my-4">
          <span>
            OTP Verification PIN: <strong className="font-mono text-sm">{consignment.otp}</strong>
          </span>
          <span>
            Distribution Center: <strong>{consignment.destination.facility}</strong>
          </span>
        </div>

        <div className="text-[10px] text-slate-500 border-t pt-3 mt-4">
          <p>
            Official cargo docket from SwiftTrack Express / SNS Logistics. Recipient signature or OTP authentication required for handover in {consignment.destination.location}.
          </p>
        </div>
      </div>
    </div>
  );
}
