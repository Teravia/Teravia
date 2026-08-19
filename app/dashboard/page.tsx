"use client";

import React, { useState } from "react";
import Link from "next/link";

// Mock Data Listing Pending Approval
const INITIAL_PENDING_LISTINGS = [
  {
    id: "PROP-001",
    title: "Rumah Minimalis Modern 2 Lantai Cluster Exclusive",
    category: "Hunian • Rumah",
    price: 850000000,
    location: "Kopo, Bandung, Jawa Barat",
    seller: "Budi Pratama (Agen)",
    createdAt: "2026-08-08",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=80",
    status: "pending",
  },
  {
    id: "PROP-002",
    title: "Ruko Strategis Pinggir Jalan Utama 3 Lantai",
    category: "Komersial • Ruko",
    price: 2100000000,
    location: "Bogor Timur, Kota Bogor, Jawa Barat",
    seller: "Siti Rahma (Owner)",
    createdAt: "2026-08-08",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
    status: "pending",
  },
];

// Mock Data Membership Pending Approval
const INITIAL_PENDING_MEMBERS = [
  {
    id: "MEM-101",
    name: "Agus Setiawan",
    email: "agus.agent@gmail.com",
    role: "Agen Properti",
    agency: "Era Star Property",
    phone: "081298765432",
    createdAt: "2026-08-07",
    status: "pending",
  },
  {
    id: "MEM-102",
    name: "Notaris Handoko, S.H.",
    email: "notaris.handoko@gmail.com",
    role: "Notaris / PPAT",
    agency: "Kantor Notaris Handoko & Partners",
    phone: "081122334455",
    createdAt: "2026-08-08",
    status: "pending",
  },
];

export default function AdminDashboardPage() {
  const router = useRouter();
  const { admin, isLoading, logoutAdmin } = useAdminAuth();

  // Gerbang proteksi: kalau belum login sebagai admin, lempar ke /admin/login
  useEffect(() => {
    if (!isLoading && !admin) {
      router.push("/admin/login");
    }
  }, [isLoading, admin, router]);

  // Navigation State
  const [activeTab, setActiveTab] = useState<"overview" | "listings" | "members">(
    "overview"
  );

  // States Data
  const [listings, setListings] = useState(INITIAL_PENDING_LISTINGS);
  const [members, setMembers] = useState(INITIAL_PENDING_MEMBERS);

  // Action Handlers
  const handleApproveListing = (id: string) => {
    setListings((prev) => prev.filter((item) => item.id !== id));
    alert(`✅ Listing ${id} berhasil disetujui & dipublikasikan ke marketplace!`);
  };

  const handleRejectListing = (id: string) => {
    const reason = prompt("Masukkan alasan penolakan listing ini:");
    if (reason !== null) {
      setListings((prev) => prev.filter((item) => item.id !== id));
      alert(`❌ Listing ${id} telah ditolak dengan alasan: "${reason}"`);
    }
  };

  const handleApproveMember = (id: string) => {
    setMembers((prev) => prev.filter((item) => item.id !== id));
    alert(`🎉 Membership ${id} disetujui! User sekarang menyandang Verified Partner.`);
  };

  const handleRejectMember = (id: string) => {
    setMembers((prev) => prev.filter((item) => item.id !== id));
    alert(`❌ Permohonan membership ${id} ditolak.`);
  };

  // Selagi memeriksa sesi admin, atau sedang di-redirect ke /admin/login,
  // tampilkan loading ringan saja (bukan render dashboard sebelum yakin admin login)
  if (isLoading || !admin) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-slate-400 text-xs font-semibold animate-pulse">
          Memeriksa sesi admin...
        </div>
      </div>
    );
  }

  // TAMPILAN 2: TAMPILAN UTAMA DASHBOARD ADMIN (SESUDAH LOGIN)
  return (
    <div className="min-h-screen bg-slate-100 font-sans">
      {/* Top Navigation Admin Bar */}
      <header className="bg-slate-900 text-white border-b border-slate-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="bg-green-600 text-white text-xs font-black px-2.5 py-1 rounded-md tracking-wider">
              ADMIN PANEL
            </span>
            <h1 className="text-base font-bold text-slate-100">
              Teravia Central Control
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xs text-slate-400 hidden sm:inline">
              Superadmin: <strong className="text-slate-200">{admin?.email}</strong>
            </span>
            <button
              onClick={() => {
                logoutAdmin();
                router.push("/admin/login");
              }}
              className="text-xs bg-rose-600 hover:bg-rose-700 text-white font-bold px-3 py-1.5 rounded-lg transition cursor-pointer"
            >
              Keluar 🚪
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        {/* Tab Switcher */}
        <div className="flex bg-white p-1.5 rounded-2xl border border-slate-200 shadow-xs max-w-md">
          <button
            onClick={() => setActiveTab("overview")}
            className={`flex-1 py-2.5 text-xs font-bold rounded-xl transition cursor-pointer ${
              activeTab === "overview"
                ? "bg-slate-900 text-white shadow-sm"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            📊 Analytics
          </button>
          <button
            onClick={() => setActiveTab("listings")}
            className={`flex-1 py-2.5 text-xs font-bold rounded-xl transition cursor-pointer relative ${
              activeTab === "listings"
                ? "bg-slate-900 text-white shadow-sm"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            🏠 Approval Listing
            {listings.length > 0 && (
              <span className="ml-1.5 bg-amber-500 text-white text-[10px] font-black px-1.5 py-0.5 rounded-full">
                {listings.length}
              </span>
            )}
          </button>
          <button
            onClick={() => setActiveTab("members")}
            className={`flex-1 py-2.5 text-xs font-bold rounded-xl transition cursor-pointer relative ${
              activeTab === "members"
                ? "bg-slate-900 text-white shadow-sm"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            👤 Membership
            {members.length > 0 && (
              <span className="ml-1.5 bg-green-500 text-white text-[10px] font-black px-1.5 py-0.5 rounded-full">
                {members.length}
              </span>
            )}
          </button>
        </div>

        {/* TAB 1: OVERVIEW & MONITORING ANALYTICS */}
        {activeTab === "overview" && (
          <div className="space-y-6">
            {/* Stat Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-2">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Total Listing Tayang
                </p>
                <div className="text-3xl font-black text-slate-900">1,248</div>
                <span className="text-[11px] text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded">
                  ↑ +12.5% bulan ini
                </span>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-2">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Menunggu Approval
                </p>
                <div className="text-3xl font-black text-amber-600">
                  {listings.length}
                </div>
                <span className="text-[11px] text-amber-700 font-bold bg-amber-50 px-2 py-0.5 rounded">
                  Membutuhkan tindakan
                </span>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-2">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Total Agen & Partner
                </p>
                <div className="text-3xl font-black text-slate-900">342</div>
                <span className="text-[11px] text-green-600 font-bold bg-green-50 px-2 py-0.5 rounded">
                  Verified Partners
                </span>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-2">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Estimasi Nilai Transaksi
                </p>
                <div className="text-2xl font-black text-emerald-600">
                  Rp 14.8 Milyar
                </div>
                <span className="text-[11px] text-slate-500 font-medium">
                  Atas properti aktif
                </span>
              </div>
            </div>

            {/* Status Server & Integrasi */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
              <h3 className="text-sm font-bold text-slate-900 border-b border-slate-100 pb-3">
                ⚡ System Health & Integration Status
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-slate-800">
                      Supabase Database
                    </div>
                    <div className="text-[11px] text-slate-500">
                      goontgeilithnzirveet
                    </div>
                  </div>
                  <span className="flex h-3 w-3 rounded-full bg-emerald-500 ring-4 ring-emerald-100" />
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-slate-800">
                      Gemini 2.5 Flash AI
                    </div>
                    <div className="text-[11px] text-slate-500">Auto Copywriter</div>
                  </div>
                  <span className="flex h-3 w-3 rounded-full bg-emerald-500 ring-4 ring-emerald-100" />
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-slate-800">
                      Vercel Serverless
                    </div>
                    <div className="text-[11px] text-slate-500">Production Mode</div>
                  </div>
                  <span className="flex h-3 w-3 rounded-full bg-emerald-500 ring-4 ring-emerald-100" />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: APPROVAL LISTING PROPERTI */}
        {activeTab === "listings" && (
          <div className="space-y-4">
            <div className="flex justify-between items-center bg-white p-4 rounded-2xl border border-slate-200">
              <div>
                <h2 className="text-sm font-bold text-slate-900">
                  Moderasi Submission Listing Properti
                </h2>
                <p className="text-xs text-slate-500">
                  Periksa kelayakan foto, keabsahan harga, dan kualitas deskripsi sebelum ditayangkan.
                </p>
              </div>
              <span className="text-xs bg-amber-100 text-amber-800 font-bold px-3 py-1 rounded-full border border-amber-200">
                {listings.length} Perlu Peninjauan
              </span>
            </div>

            {listings.length === 0 ? (
              <div className="bg-white p-12 text-center rounded-2xl border border-slate-200 text-slate-400 space-y-2">
                <div className="text-3xl">🎉</div>
                <div className="text-sm font-bold text-slate-700">
                  Semua Listing Sudah Di-review!
                </div>
                <p className="text-xs text-slate-400">
                  Tidak ada listing properti pending yang membutuhkan persetujuan saat ini.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-4">
                {listings.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col md:flex-row gap-5 items-start md:items-center justify-between"
                  >
                    <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center w-full md:w-auto">
                      <div className="w-full sm:w-36 h-24 rounded-xl overflow-hidden bg-slate-100 shrink-0 border border-slate-200">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="space-y-1">
                        <span className="text-[10px] font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded border border-green-100">
                          {item.category}
                        </span>
                        <h3 className="text-sm font-bold text-slate-900">
                          {item.title}
                        </h3>
                        <p className="text-xs text-slate-500">📍 {item.location}</p>
                        <div className="flex items-center gap-3 text-xs pt-1">
                          <span className="font-extrabold text-emerald-600">
                            Rp {item.price.toLocaleString("id-ID")}
                          </span>
                          <span className="text-slate-400">•</span>
                          <span className="text-slate-500">
                            Penjual: <strong>{item.seller}</strong>
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 w-full md:w-auto justify-end pt-3 md:pt-0 border-t md:border-t-0 border-slate-100">
                      <button
                        onClick={() => handleRejectListing(item.id)}
                        className="px-4 py-2 rounded-xl border border-rose-200 bg-rose-50 hover:bg-rose-100 text-rose-700 text-xs font-bold transition cursor-pointer"
                      >
                        Tolak ✕
                      </button>
                      <button
                        onClick={() => handleApproveListing(item.id)}
                        className="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition shadow-xs cursor-pointer"
                      >
                        Setujui & Terbitkan ✓
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* TAB 3: APPROVAL MEMBERSHIP & AGEN */}
        {activeTab === "members" && (
          <div className="space-y-4">
            <div className="flex justify-between items-center bg-white p-4 rounded-2xl border border-slate-200">
              <div>
                <h2 className="text-sm font-bold text-slate-900">
                  Verifikasi Pendaftaran Agen & Partner Ekosistem
                </h2>
                <p className="text-xs text-slate-500">
                  Verifikasi legalitas dan identitas agen/notaris/vendor untuk pemberian lencana centang biru.
                </p>
              </div>
              <span className="text-xs bg-green-100 text-green-800 font-bold px-3 py-1 rounded-full border border-green-200">
                {members.length} Permohonan
              </span>
            </div>

            {members.length === 0 ? (
              <div className="bg-white p-12 text-center rounded-2xl border border-slate-200 text-slate-400 space-y-2">
                <div className="text-3xl">✅</div>
                <div className="text-sm font-bold text-slate-700">
                  Semua Permohonan Verifikasi Selesai!
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
                <table className="w-full text-left text-xs text-slate-700">
                  <thead className="bg-slate-50 text-slate-500 border-b border-slate-200 font-bold uppercase tracking-wider">
                    <tr>
                      <th className="p-4">Nama & Kategori</th>
                      <th className="p-4">Perusahaan / Kantor</th>
                      <th className="p-4">Kontak</th>
                      <th className="p-4">Tanggal Daftar</th>
                      <th className="p-4 text-right">Tindakan</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {members.map((member) => (
                      <tr key={member.id} className="hover:bg-slate-50/80 transition">
                        <td className="p-4">
                          <div className="font-bold text-slate-900">{member.name}</div>
                          <span className="text-[10px] font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded border border-green-100">
                            {member.role}
                          </span>
                        </td>
                        <td className="p-4 font-medium text-slate-600">
                          {member.agency}
                        </td>
                        <td className="p-4">
                          <div className="text-slate-800 font-semibold">{member.phone}</div>
                          <div className="text-slate-400 text-[11px]">{member.email}</div>
                        </td>
                        <td className="p-4 text-slate-500">{member.createdAt}</td>
                        <td className="p-4 text-right space-x-2">
                          <button
                            onClick={() => handleRejectMember(member.id)}
                            className="px-3 py-1.5 rounded-lg border border-rose-200 bg-rose-50 text-rose-700 text-xs font-bold hover:bg-rose-100 transition cursor-pointer"
                          >
                            Tolak
                          </button>
                          <button
                            onClick={() => handleApproveMember(member.id)}
                            className="px-3 py-1.5 rounded-lg bg-green-600 text-white text-xs font-bold hover:bg-green-700 transition cursor-pointer shadow-xs"
                          >
                            Setujui Verified Partner
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
