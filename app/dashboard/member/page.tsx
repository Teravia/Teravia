"use client";

import Link from "next/link";
import { useAuth } from "@/contexts/AuthContext";

export default function MemberDashboardHome() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-slate-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 mb-6">
          <p className="text-xs text-slate-500 mb-1">Selamat datang kembali,</p>
          <h1 className="text-xl font-extrabold text-slate-900">
            {user?.name || "Member"} 👋
          </h1>
          {user && (
            <div className="flex items-center gap-2 mt-2">
              <span className="text-[10px] font-bold bg-green-100 text-green-700 px-2 py-0.5 rounded-full uppercase">
                {user.tier}
              </span>
              <span className="text-[11px] text-slate-400">
                ID Member: {user.memberId}
              </span>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link
            href="/dashboard/member/add-listing"
            className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 hover:shadow-md hover:border-green-300 transition"
          >
            <div className="text-2xl mb-2">+</div>
            <h3 className="text-sm font-bold text-slate-900 mb-1">
              Pasang Iklan Baru
            </h3>
            <p className="text-xs text-slate-500">
              Buat listing properti baru untuk dijual atau disewakan
            </p>
          </Link>

          <Link
            href="/dashboard/member/listings"
            className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 hover:shadow-md hover:border-green-300 transition"
          >
            <div className="text-2xl mb-2">📋</div>
            <h3 className="text-sm font-bold text-slate-900 mb-1">
              Listing Saya
            </h3>
            <p className="text-xs text-slate-500">
              Kelola semua listing properti yang sudah kamu pasang
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
