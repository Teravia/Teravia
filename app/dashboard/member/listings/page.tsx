"use client";

import { useState } from "react";
import Link from "next/link";

export default function MemberDashboardListings() {
  const [showAdsModal, setShowAdsModal] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState("meta");

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 max-w-5xl mx-auto space-y-6">
      {/* Profil Banner */}
      <div className="bg-gradient-to-r from-gray-900 to-indigo-950 text-white p-5 rounded-2xl flex justify-between items-center">
        <div>
          <span className="bg-emerald-500 text-black text-[10px] font-black px-2 py-0.5 rounded tracking-wide uppercase">
            Emerald Member
          </span>
          <h1 className="text-xl font-bold mt-1">Dashboard Penjual</h1>
          <p className="text-xs text-gray-300">Membership Berakhir: 28 Agustus 2026</p>
        </div>
        <Link
          href="/dashboard/member/add-listing"
          className="bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-bold px-3 py-2 rounded-lg transition"
        >
          + Pasang Iklan
        </Link>
      </div>

      {/* List Iklan Member */}
      <div className="space-y-4">
        <h2 className="text-lg font-bold text-gray-800">Iklan Anda (1 Active)</h2>

        <div className="bg-white p-4 rounded-xl border shadow-sm flex flex-col sm:flex-row justify-between gap-4 items-start sm:items-center">
          <div className="flex gap-3">
            <img
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=200&q=80"
              alt="properti"
              className="w-20 h-20 rounded-lg object-cover"
            />
            <div>
              <h3 className="font-bold text-sm text-gray-800">Rumah Minimalis Modern 2 Lantai Cluster</h3>
              <p className="text-xs text-blue-600 font-bold mt-1">Rp 850.000.000</p>
              <p className="text-[11px] text-gray-400 mt-1">Terakhir di-bump: Baru saja</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex sm:flex-col gap-2 w-full sm:w-auto">
            <button className="flex-1 bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold py-2 px-3 rounded-lg transition">
              ⚡ Auto-Bump
            </button>
            <button
              onClick={() => setShowAdsModal(true)}
              className="flex-1 bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold py-2 px-3 rounded-lg transition"
            >
              🚀 Boost Ads
            </button>
          </div>
        </div>
      </div>

      {/* Pop-up Modal Connect to Ads */}
      {showAdsModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex justify-center items-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 space-y-4">
            <div className="flex justify-between items-center border-b pb-3">
              <h3 className="font-bold text-lg text-gray-800">Boost Listingan via Ads</h3>
              <button onClick={() => setShowAdsModal(false)} className="text-gray-400 text-xl font-bold">
                ✕
              </button>
            </div>

            <div className="space-y-3">
              <label className="text-xs font-bold text-gray-700">1. Pilih Platform Ads:</label>
              <div className="grid grid-cols-3 gap-2">
                {["meta", "google", "tiktok"].map((plat) => (
                  <button
                    key={plat}
                    onClick={() => setSelectedPlatform(plat)}
                    className={`py-2 px-1 text-xs font-bold rounded-lg border capitalize ${
                      selectedPlatform === plat
                        ? "border-purple-600 bg-purple-50 text-purple-700"
                        : "border-gray-200 text-gray-600"
                    }`}
                  >
                    {plat} Ads
                  </button>
                ))}
              </div>

              <label className="text-xs font-bold text-gray-700 block pt-2">2. Pilih Budget Pemasaran:</label>
              <select className="w-full p-2.5 border rounded-lg text-sm bg-white">
                <option>Rp 100.000 / 3 Hari (+ Fee 10% Platform)</option>
                <option>Rp 250.000 / 7 Hari (+ Fee 10% Platform)</option>
                <option>Rp 500.000 / 14 Hari (+ Fee 10% Platform)</option>
              </select>

              <div className="bg-purple-50 p-3 rounded-lg text-[11px] text-purple-800 leading-relaxed">
                ℹ️ Iklan akan otomatis dibuatkan oleh sistem dan ditargetkan ke pengguna sosmed di sekitar wilayah properti kamu.
              </div>
            </div>

            <button
              onClick={() => {
                alert("Redirecting to Payment Gateway...");
                setShowAdsModal(false);
              }}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold text-sm py-3 rounded-xl transition"
            >
              Bayar & Buka Kampanye Iklan
            </button>
          </div>
        </div>
      )}
    </div>
  );
                      }
