"use client";

import React, { useState } from "react";
import Step1Information from "./components/Step1Information";
import Step2Pricing from "./components/Step2Pricing";
import Step3Location from "./components/Step3Location";
import Step4Preview from "./components/Step4Preview";

export default function AddListingPage() {
  // --- STATE UTAMA (PARENT) ---
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [transactionType, setTransactionType] = useState<"Jual" | "Sewa" | "Take Over" | "Lelang">("Jual");

  // State terpusat untuk menyimpan seluruh payload listing dari Step 1 - 3 (Siap dikirim saat submit di Step 4)
  const [formData, setFormData] = useState<Record<string, any>>({});

  // --- HANDLER NAVIGASI STEP ---
  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, 4));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  // Handler update data dari sub-form
  const updateFormData = (newData: Record<string, any>) => {
    setFormData((prev) => ({ ...prev, ...newData }));
  };

  return (
    <div className="min-h-screen bg-slate-50 py-8 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-5xl mx-auto space-y-6">

        {/* STATUS TRANSAKSI (STICKY) */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-3 sticky top-4 z-30 backdrop-blur-md bg-white/95 transition-all">
          <div className="flex flex-wrap gap-2 justify-between items-center">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider px-2">
              Status Transaksi:
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 w-full sm:w-auto">
              {(["Jual", "Sewa", "Take Over", "Lelang"] as const).map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setTransactionType(type)}
                  className={`py-2 px-5 text-xs font-bold rounded-xl transition-all duration-200 ${
                    transactionType === type
                      ? "bg-blue-600 text-white shadow-md shadow-blue-500/20 scale-[1.02]"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* STEPPER BAR NAVIGASI (READ-ONLY INDICATOR) */}
        <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm">
          <div className="grid grid-cols-4 gap-2 text-center">
            
            {/* Step 1 Indicator */}
            <div
              className={`flex flex-col items-center select-none pointer-events-none cursor-default transition-all ${
                currentStep >= 1 ? "opacity-100" : "opacity-40"
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-all ${
                  currentStep === 1
                    ? "bg-blue-600 text-white ring-4 ring-blue-100"
                    : currentStep > 1
                    ? "bg-emerald-600 text-white"
                    : "bg-slate-200 text-slate-600"
                }`}
              >
                {currentStep > 1 ? "✓" : "1"}
              </div>
              <span className={`text-[11px] mt-1 ${currentStep === 1 ? "font-bold text-blue-600" : "font-medium text-slate-600"}`}>
                Informasi & Detail
              </span>
            </div>

            {/* Step 2 Indicator */}
            <div
              className={`flex flex-col items-center select-none pointer-events-none cursor-default transition-all ${
                currentStep >= 2 ? "opacity-100" : "opacity-40"
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-all ${
                  currentStep === 2
                    ? "bg-blue-600 text-white ring-4 ring-blue-100"
                    : currentStep > 2
                    ? "bg-emerald-600 text-white"
                    : "bg-slate-200 text-slate-600"
                }`}
              >
                {currentStep > 2 ? "✓" : "2"}
              </div>
              <span className={`text-[11px] mt-1 ${currentStep === 2 ? "font-bold text-blue-600" : "font-medium text-slate-600"}`}>
                Legalitas & Harga
              </span>
            </div>

            {/* Step 3 Indicator */}
            <div
              className={`flex flex-col items-center select-none pointer-events-none cursor-default transition-all ${
                currentStep >= 3 ? "opacity-100" : "opacity-40"
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-all ${
                  currentStep === 3
                    ? "bg-blue-600 text-white ring-4 ring-blue-100"
                    : currentStep > 3
                    ? "bg-emerald-600 text-white"
                    : "bg-slate-200 text-slate-600"
                }`}
              >
                {currentStep > 3 ? "✓" : "3"}
              </div>
              <span className={`text-[11px] mt-1 ${currentStep === 3 ? "font-bold text-blue-600" : "font-medium text-slate-600"}`}>
                Lokasi & Peta
              </span>
            </div>

            {/* Step 4 Indicator */}
            <div
              className={`flex flex-col items-center select-none pointer-events-none cursor-default transition-all ${
                currentStep === 4 ? "opacity-100" : "opacity-40"
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-all ${
                  currentStep === 4
                    ? "bg-blue-600 text-white ring-4 ring-blue-100"
                    : "bg-slate-200 text-slate-600"
                }`}
              >
                4
              </div>
              <span className={`text-[11px] mt-1 ${currentStep === 4 ? "font-bold text-blue-600" : "font-medium text-slate-600"}`}>
                Full Preview
              </span>
            </div>

          </div>
        </div>

        {/* RENDERING KONTEN STEP */}
        <div className="transition-all duration-300">
          {currentStep === 1 && (
            <Step1Information
              transactionType={transactionType}
              onNext={nextStep}
            />
          )}

          {currentStep === 2 && (
            <Step2Pricing
              onNext={nextStep}
              onPrev={prevStep}
              transactionType={transactionType}
            />
          )}

          {currentStep === 3 && (
            <Step3Location
              onNext={nextStep}
              onPrev={prevStep}
            />
          )}

          {currentStep === 4 && (
            <Step4Preview
              onPrev={prevStep}
              transactionType={transactionType}
            />
          )}
        </div>

      </div>
    </div>
  );
}
