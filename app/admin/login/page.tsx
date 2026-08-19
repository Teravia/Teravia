"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAdminAuth } from "@/contexts/AdminAuthContext";

export default function AdminLoginPage() {
  const router = useRouter();
  const { loginAdmin } = useAdminAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    setTimeout(() => {
      const success = loginAdmin(email, password);
      if (success) {
        router.push("/dashboard");
      } else {
        setError("Email atau password admin salah.");
        setLoading(false);
      }
    }, 500);
  };

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4 font-sans">
      <div className="bg-white p-8 rounded-3xl shadow-2xl max-w-sm w-full space-y-6">
        <div className="text-center space-y-2">
          <span className="bg-green-700 text-white text-[10px] font-black px-2.5 py-1 rounded-md tracking-wider">
            ADMIN PANEL
          </span>
          <h1 className="text-xl font-extrabold text-slate-900">
            Masuk Dashboard Admin
          </h1>
          <p className="text-xs text-slate-500">
            Khusus pengelola & tim internal Teravia
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Email Admin
            </label>
            <input
              type="email"
              required
              placeholder="admin@teravia.co.id"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-green-600 outline-none text-slate-800"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Password
            </label>
            <input
              type="password"
              required
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-green-600 outline-none text-slate-800"
            />
          </div>

          {error && (
            <p className="text-red-500 text-xs font-medium bg-red-50 border border-red-200 rounded-lg px-3 py-2">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 rounded-xl text-xs transition shadow-md cursor-pointer disabled:opacity-50"
          >
            {loading ? "Memeriksa..." : "Masuk ke Dashboard"}
          </button>
        </form>

        <div className="bg-amber-50 p-3 rounded-xl border border-amber-200 text-[11px] text-amber-800 space-y-0.5">
          <div className="font-bold">
            ⚠️ Kredensial Tester (hapus sebelum production):
          </div>
          <div>Email: <code className="text-amber-900">admin@teravia.co.id</code></div>
          <div>Pass: <code className="text-amber-900">admin123</code></div>
        </div>

        <div className="text-center border-t border-slate-100 pt-3">
          <Link
            href="/"
            className="text-xs font-bold text-slate-400 hover:text-slate-600 transition"
          >
            &larr; Kembali ke Website Utama
          </Link>
        </div>
      </div>
    </div>
  );
}
