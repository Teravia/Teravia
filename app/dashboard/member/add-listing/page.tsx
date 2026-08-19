"use client";

import React, { useState } from "react";
import Step1Information from "./components/Step1Information";
import Step2Pricing from "./components/Step2Pricing";
import Step3Location from "./components/Step3Location";
import Step4Media from "./components/Step4Media";
import Step5Preview from "./components/Step5Preview";

const STEPS = [
  { number: 1, label: "Informasi Properti" },
  { number: 2, label: "Harga" },
  { number: 3, label: "Lokasi" },
  { number: 4, label: "Upload Media" },
  { number: 5, label: "Preview" },
];

export default function AddListingPage() {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [transactionType, setTransactionType] = useState<"Jual" | "Sewa" | "Take Over" | "Lelang">("Jual");
  const [formData, setFormData] = useState<Record<string, any>>({});

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, 5));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  const updateFormData = (newData: Record<string, any>) => {
    setFormData((prev) => ({ ...prev, ...newData }));
  };

  const handlePublish = () => {
    console.log("Submit Payload ke API:", formData);
    alert("Listing Berhasil Dipublikasikan!");
  };

  return (
    <div className="min-h-screen bg-slate-50 py-8 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-5xl mx-auto space-y-6">

        {/* STATUS TRANSAKSI */}
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
                      ? "bg-green-600 text-white shadow-md shadow-green-500/20 scale-[1.02]"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* STEPPER BAR (5 STEPS - READ ONLY) */}
        <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm">
          <div className="grid grid-cols-5 gap-1 sm:gap-2 text-center">
            {STEPS.map((step) => {
              const isActive = currentStep === step.number;
              const isPassed = currentStep > step.number;

              return (
                <div
                  key={step.number}
                  className={`flex flex-col items-center select-none pointer-events-none cursor-default transition-all ${
                    currentStep >= step.number ? "opacity-100" : "opacity-40"
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs sm:text-sm transition-all ${
                      isActive
                        ? "bg-green-600 text-white ring-4 ring-green-100"
                        : isPassed
                        ? "bg-green-500 text-white"
                        : "bg-slate-200 text-slate-600"
                    }`}
                  >
                    {isPassed ? "✓" : step.number}
                  </div>
                  <span
                    className={`text-[10px] sm:text-[11px] mt-1 text-center leading-tight ${
                      isActive ? "font-bold text-green-600" : "font-medium text-slate-600"
                    }`}
                  >
                    {step.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* RENDER STEP */}
        <div className="transition-all duration-300">
          {currentStep === 1 && (
            <Step1Information
              transactionType={transactionType}
              onNext={nextStep}
              updateFormData={updateFormData}
              initialData={formData}
            />
          )}

          {currentStep === 2 && (
            <Step2Pricing
              transactionType={transactionType}
              onNext={nextStep}
              onPrev={prevStep}
              updateFormData={updateFormData}
              initialData={formData}
            />
          )}

          {currentStep === 3 && (
            <Step3Location
              onNext={nextStep}
              onPrev={prevStep}
              updateFormData={updateFormData}
              initialData={formData}
            />
          )}

          {currentStep === 4 && (
            <Step4Media
              onNext={nextStep}
              onPrev={prevStep}
              updateFormData={updateFormData}
              initialData={formData}
            />
          )}

          {currentStep === 5 && (
            <Step5Preview
              onPrev={prevStep}
              onPublish={handlePublish}
              formData={formData}
              transactionType={transactionType}
            />
          )}
        </div>

      </div>
    </div>
  );
}
