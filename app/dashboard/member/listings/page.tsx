"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { useAuth } from "@/contexts/AuthContext";

type ListingStatus = "Aktif" | "Menunggu Persetujuan" | "Ditolak" | "Expired";

interface MyListing {
  id: string;
  title: string;
  price: number;
  image: string;
  status: ListingStatus;
  lastBumped: string; // teks siap tampil, mis. "Baru saja" / "3 jam lalu"
}

const MOCK_MY_LISTINGS: MyListing[] = [
  {
    id: "1",
    title: "Rumah Minimalis Modern 2 Lantai Cluster Exclusive",
    price: 850000000,
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=300&q=80",
    status: "Aktif",
    lastBumped: "Baru saja",
  },
  {
    id: "6",
    title: "Rumah Cluster Nyaman Bebas Banjir One Gate System",
    price: 980000000,
    image:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=300&q=80",
    status: "Menunggu Persetujuan",
    lastBumped: "-",
  },
];

// Batas auto-bump harian per tier — sesuai benefit membership yang sudah dikunci
const AUTO_BUMP_LIMIT: Record<string, number> = {
  free: 0,
  kavling: 1,
  cluster: 3,
  penthouse: 5,
};

const TIER_LABEL: Record<string, string> = {
  free: "Free",
  kavling: "Kavling",
  cluster: "Cluster",
  penthouse: "Penthouse",
};

// Paket Boost Ads — sesuai dokumen model bisnis (fee tiered, bukan flat 10%)
const AD_PACKAGES = [
  {
    id: "starter",
    label: "Starter — Meta Ads",
    adSpend: 800000,
    feePercent: 25,
    duration: "30 hari",
    platforms: ["Meta"],
  },
  {
    id: "growth",
    label: "Growth — Google + Meta Ads",
    adSpend: 4000000,
    feePercent: 20,
    duration: "30 hari",
    platforms: ["Google", "Meta"],
  },
  {
    id: "pro",
    label: "Pro — Google + Meta Ads (Budget Besar)",
    adSpend: 8500000,
    feePercent: 15,
    duration: "30 hari",
    platforms: ["Google", "Meta"],
  },
];

function formatRupiah(value: number) {
  return "Rp " + value.toLocaleString("id-ID");
}

function StatusBadge({ status }: { status: ListingStatus }) {
  const styles: Record<ListingStatus, string> = {
    Aktif: "bg-green-100 text-green-700",
    "Menunggu Persetujuan": "bg-amber-100 text-amber-700",
    Ditolak: "bg-red-100 text-red-700",
    Expired: "bg-slate-100 text-slate-500",
  };
  return (
    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${styles[status]}`}>
      {status}
    </span>
  );
}

function ListingCardSkeleton() {
  return (
    <div className="bg-white p-4 rounded-xl border border-slate-200 animate-pulse flex flex-col sm:flex-row gap-4">
      <div className="w-full sm:w-20 h-20 rounded-lg bg-slate-200 shrink-0" />
      <div className="flex-1 space-y-2">
        <div className="h-4 w-2/3 bg-slate-200 rounded" />
        <div className="h-3 w-1/3 bg-slate-200 rounded" />
        <div className="h-3 w-1/4 bg-slate-200 rounded" />
      </div>
      <div className="flex sm:flex-col gap-2 w-full sm:w-32">
        <div className="h-8 flex-1 bg-slate-200 rounded-lg" />
        <div className="h-8 flex-1 bg-slate-200 rounded-lg" />
      </div>
    </div>
  );
}

function EmptyListingsState() {
  return (
    <div className="bg-white rounded-2xl border border-dashed border-slate-300 py-14 px-6 text-center">
      <div className="text-5xl mb-4">🏠</div>
      <h3 className="text-sm font-bold text-slate-800 mb-1">
        Belum ada listing yang kamu pasang
      </h3>
      <p className="text-xs text-slate-500 max-w-xs mx-auto mb-5">
        Mulai pasang properti pertamamu dan jangkau calon pembeli/penyewa di
        seluruh Teravia.
      </p>
      <Link
        href="/dashboard/member/add-listing"
        className="inline-block bg-green-700 hover:bg-green-800 text-white text-xs font-bold px-5 py-2.5 rounded-xl transition"
      >
        + Pasang Iklan Sekarang
      </Link>
    </div>
  );
}

export default function MemberDashboardListings() {
  const { user } = useAuth();

  const [isLoading, setIsLoading] = useState(true);
  const [listings, setListings] = useState<MyListing[]>([]);
  const [showAdsModal, setShowAdsModal] = useState(false);
  const [activeListingId, setActiveListingId] = useState<string | null>(null);
  const [selectedPackage, setSelectedPackage] = useState(AD_PACKAGES[0].id);
  const [bumpedToday, setBumpedToday] = useState<Record<string, boolean>>({});

  const tier = user?.tier || "free";
  const bumpLimit = AUTO_BUMP_LIMIT[tier] ?? 0;

  useEffect(() => {
    const timer = setTimeout(() => {
      setListings(MOCK_MY_LISTINGS);
      setIsLoading(false);
    }, 700);
    return () => clearTimeout(timer);
  }, []);

  const activeCount = listings.filter((l) => l.status === "Aktif").length;

  const handleBump = (id: string) => {
    if (bumpLimit === 0) return;
    setBumpedToday((prev) => ({ ...prev, [id]: true }));
    setListings((prev) =>
      prev.map((l) => (l.id === id ? { ...l, lastBumped: "Baru saja" } : l))
    );
  };

  const openAdsModal = (id: string) => {
    setActiveListingId(id);
    setShowAdsModal(true);
  };

  const selectedPkg = useMemo(
    () => AD_PACKAGES.find((p) => p.id === selectedPackage)!,
    [selectedPackage]
  );
  const feeAmount = Math.round((selectedPkg.adSpend * selectedPkg.feePercent) / 100);
  const totalCharge = selectedPkg.adSpend + feeAmount;

  return (
    <div className="min-h-screen bg-slate-50 p-4 sm:p-6 max-w-5xl mx-auto space-y-6">
      {/* Profil Banner */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-5 rounded-2xl flex flex-col sm:flex-row justify-between sm:items-center gap-4">
        <div>
          <span className="bg-green-600 text-white text-[10px] font-black px-2 py-0.5 rounded tracking-wide uppercase">
            {TIER_LABEL[tier]} Member
          </span>
          <h1 className="text-xl font-bold mt-1">
            Dashboard Penjual{user?.name ? ` — ${user.name}` : ""}
          </h1>
          <p className="text-xs text-slate-300">
            Auto-bump tersisa: {bumpLimit}x/hari sesuai tier kamu
          </p>
        </div>
        <Link
          href="/dashboard/member/add-listing"
          className="bg-green-700 hover:bg-green-800 text-white text-xs sm:text-sm font-bold px-4 py-2.5 rounded-xl transition text-center shrink-0"
        >
          + Pasang Iklan
        </Link>
      </div>

      {/* List Iklan Member */}
      <div className="space-y-4">
        <h2 className="text-sm font-bold text-slate-800">
          Iklan Anda {!isLoading && `(${activeCount} Aktif dari ${listings.length})`}
        </h2>

        {isLoading ? (
          <div className="space-y-4">
            <ListingCardSkeleton />
            <ListingCardSkeleton />
          </div>
        ) : listings.length === 0 ? (
          <EmptyListingsState />
        ) : (
          <div className="space-y-4">
            {listings.map((item) => (
              <div
                key={item.id}
                className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col sm:flex-row justify-between gap-4 items-start sm:items-center"
              >
                <div className="flex gap-3 flex-1 min-w-0">
                  <div className="relative w-20 h-20 rounded-lg overflow-hidden shrink-0 bg-slate-100">
                    <Image src={item.image} alt={item.title} fill className="object-cover" unoptimized />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5 mb-1 flex-wrap">
                      <StatusBadge status={item.status} />
                    </div>
                    <h3 className="font-bold text-sm text-slate-800 truncate">{item.title}</h3>
                    <p className="text-xs text-green-700 font-bold mt-1">{formatRupiah(item.price)}</p>
                    <p className="text-[11px] text-slate-400 mt-1">
                      Terakhir di-bump: {item.lastBumped}
                    </p>
                  </div>
                </div>

                <div className="flex sm:flex-col gap-2 w-full sm:w-36 shrink-0">
                  <button
                    onClick={() => handleBump(item.id)}
                    disabled={bumpLimit === 0 || bumpedToday[item.id] || item.status !== "Aktif"}
                    className="flex-1 bg-amber-500 hover:bg-amber-600 disabled:bg-slate-200 disabled:text-slate-400 disabled:cursor-not-allowed text-white text-xs font-bold py-2 px-3 rounded-lg transition"
                  >
                    ⚡ {bumpedToday[item.id] ? "Sudah Di-bump" : "Auto-Bump"}
                  </button>
                  <button
                    onClick={() => openAdsModal(item.id)}
                    disabled={item.status !== "Aktif"}
                    className="flex-1 bg-green-700 hover:bg-green-800 disabled:bg-slate-200 disabled:text-slate-400 disabled:cursor-not-allowed text-white text-xs font-bold py-2 px-3 rounded-lg transition"
                  >
                    🚀 Boost Ads
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {!isLoading && bumpLimit === 0 && listings.length > 0 && (
          <p className="text-[11px] text-slate-400 text-center">
            Auto-Bump cuma tersedia untuk member berbayar (Kavling ke atas).{" "}
            <Link href="/auth" className="text-green-700 font-semibold hover:underline">
              Upgrade tier
            </Link>
          </p>
        )}
      </div>

      {/* Pop-up Modal Boost Ads */}
      {showAdsModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex justify-center items-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 space-y-4 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center border-b border-slate-100 pb-3">
              <h3 className="font-bold text-lg text-slate-800">Boost Listingan via Ads</h3>
              <button
                onClick={() => setShowAdsModal(false)}
                className="text-slate-400 hover:text-slate-600 text-xl font-bold leading-none"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3">
              <label className="text-xs font-bold text-slate-700">Pilih Paket:</label>
              <div className="space-y-2">
                {AD_PACKAGES.map((pkg) => (
                  <label
                    key={pkg.id}
                    className={`flex items-start gap-3 p-3.5 rounded-xl border-2 cursor-pointer transition-all ${
                      selectedPackage === pkg.id
                        ? "border-green-600 bg-green-50/60"
                        : "border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    <input
                      type="radio"
                      name="adPackage"
                      value={pkg.id}
                      checked={selectedPackage === pkg.id}
                      onChange={(e) => setSelectedPackage(e.target.value)}
                      className="accent-green-600 w-4 h-4 mt-0.5"
                    />
                    <div className="flex-1">
                      <p className="text-xs font-bold text-slate-800">{pkg.label}</p>
                      <p className="text-[11px] text-slate-500 mt-0.5">
                        Ad spend {formatRupiah(pkg.adSpend)} / {pkg.duration} + fee jasa kelola {pkg.feePercent}%
                      </p>
                    </div>
                  </label>
                ))}
              </div>

              <div className="bg-slate-50 rounded-xl p-3.5 border border-slate-200 space-y-1.5">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-slate-500">Ad Spend</span>
                  <span className="font-semibold text-slate-700">{formatRupiah(selectedPkg.adSpend)}</span>
                </div>
                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-slate-500">Fee Jasa Kelola ({selectedPkg.feePercent}%)</span>
                  <span className="font-semibold text-slate-700">{formatRupiah(feeAmount)}</span>
                </div>
                <div className="border-t border-slate-200 pt-1.5 flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-800">Total Bayar</span>
                  <span className="text-sm font-extrabold text-green-700">{formatRupiah(totalCharge)}</span>
                </div>
              </div>

              <div className="bg-green-50 p-3 rounded-lg text-[11px] text-green-800 leading-relaxed">
                ℹ️ Campaign dijalankan oleh tim TERAVIA (bukan akun ads kamu
                sendiri) selama {selectedPkg.duration}, ditargetkan ke calon
                pembeli/penyewa yang relevan di platform {selectedPkg.platforms.join(" & ")}.
                Laporan performa (impressions/klik) akan dikirim berkala.
              </div>
            </div>

            <button
              onClick={() => {
                // TODO: sambungkan ke payment gateway asli (Midtrans/Xendit)
                alert("Simulasi: Redirecting to Payment Gateway...");
                setShowAdsModal(false);
              }}
              className="w-full bg-green-700 hover:bg-green-800 text-white font-bold text-sm py-3 rounded-xl transition"
            >
              Bayar & Aktifkan Campaign
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
