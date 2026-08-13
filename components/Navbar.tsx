"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useAuth } from "@/contexts/AuthContext";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const { user, isLoading, logout } = useAuth();

  const initials = user?.name
    ? user.name
        .split(" ")
        .map((s) => s[0])
        .slice(0, 2)
        .join("")
        .toUpperCase()
    : "";

  const handleLogout = () => {
    logout();
    setIsUserMenuOpen(false);
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Teravia */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="Teravia Logo"
              width={180}
              height={50}
              className="h-10 sm:h-12 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/buy"
              className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
            >
              Beli
            </Link>
            <Link
              href="/rent"
              className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
            >
              Sewa
            </Link>
            <Link
              href="/agents"
              className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
            >
              Cari Agen
            </Link>
          </nav>

          {/* Action Buttons (Desktop) */}
          <div className="hidden md:flex items-center gap-4">
            {!isLoading && !user && (
              <>
                <Link
                  href="/auth"
                  className="text-sm font-semibold text-slate-700 hover:text-blue-600 px-3 py-2 transition-colors"
                >
                  Masuk
                </Link>
                <Link
                  href="/dashboard/member/add-listing"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2.5 rounded-xl transition shadow-sm shadow-blue-200"
                >
                  <span>+</span>
                  <span>Pasang Iklan</span>
                </Link>
              </>
            )}

            {!isLoading && user && (
              <>
                <Link
                  href="/dashboard/member/add-listing"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2.5 rounded-xl transition shadow-sm shadow-blue-200"
                >
                  <span>+</span>
                  <span>Pasang Iklan</span>
                </Link>

                <div className="relative">
                  <button
                    onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                    className="flex items-center gap-2 pl-2 pr-3 py-1.5 rounded-xl border border-slate-200 hover:bg-slate-50 transition"
                  >
                    <div className="w-8 h-8 rounded-full bg-green-600 text-white text-xs font-bold flex items-center justify-center">
                      {initials}
                    </div>
                    <span className="text-sm font-semibold text-slate-700 max-w-[110px] truncate">
                      {user.name}
                    </span>
                    <svg
                      className={`w-3.5 h-3.5 text-slate-400 transition-transform ${
                        isUserMenuOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {isUserMenuOpen && (
                    <div className="absolute right-0 mt-2 w-52 bg-white rounded-xl border border-slate-200 shadow-lg py-1.5 z-50">
                      <div className="px-3.5 py-2 border-b border-slate-100">
                        <p className="text-xs font-bold text-slate-900 truncate">
                          {user.name}
                        </p>
                        <p className="text-[10px] text-slate-400 truncate">
                          {user.email}
                        </p>
                        <span className="inline-block mt-1 text-[9px] font-bold bg-green-100 text-green-700 px-1.5 py-0.5 rounded uppercase">
                          {user.tier}
                        </span>
                      </div>
                      <Link
                        href="/dashboard/member"
                        onClick={() => setIsUserMenuOpen(false)}
                        className="block px-3.5 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50"
                      >
                        Dashboard Saya
                      </Link>
                      <Link
                        href="/dashboard/member/listings"
                        onClick={() => setIsUserMenuOpen(false)}
                        className="block px-3.5 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50"
                      >
                        Listing Saya
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="w-full text-left px-3.5 py-2 text-xs font-semibold text-red-600 hover:bg-red-50"
                      >
                        Keluar
                      </button>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3">
          <Link
            href="/buy"
            className="block px-3 py-2 rounded-lg text-base font-medium text-slate-700 hover:bg-slate-50"
            onClick={() => setIsMenuOpen(false)}
          >
            Beli Properti
          </Link>
          <Link
            href="/rent"
            className="block px-3 py-2 rounded-lg text-base font-medium text-slate-700 hover:bg-slate-50"
            onClick={() => setIsMenuOpen(false)}
          >
            Sewa Properti
          </Link>
          <Link
            href="/agents"
            className="block px-3 py-2 rounded-lg text-base font-medium text-slate-700 hover:bg-slate-50"
            onClick={() => setIsMenuOpen(false)}
          >
            Cari Agen
          </Link>
          <hr className="my-2 border-slate-100" />

          {!isLoading && !user && (
            <div className="flex flex-col gap-2 pt-1">
              <Link
                href="/auth"
                className="w-full text-center py-2.5 text-sm font-semibold text-slate-700 bg-slate-100 rounded-xl"
                onClick={() => setIsMenuOpen(false)}
              >
                Masuk
              </Link>
              <Link
                href="/dashboard/member/add-listing"
                className="w-full text-center py-2.5 text-sm font-semibold text-white bg-blue-600 rounded-xl"
                onClick={() => setIsMenuOpen(false)}
              >
                + Pasang Iklan
              </Link>
            </div>
          )}

          {!isLoading && user && (
            <div className="pt-1">
              <div className="flex items-center gap-3 px-3 py-2 mb-2">
                <div className="w-9 h-9 rounded-full bg-green-600 text-white text-xs font-bold flex items-center justify-center">
                  {initials}
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">{user.name}</p>
                  <span className="text-[9px] font-bold bg-green-100 text-green-700 px-1.5 py-0.5 rounded uppercase">
                    {user.tier}
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <Link
                  href="/dashboard/member"
                  className="w-full text-center py-2.5 text-sm font-semibold text-slate-700 bg-slate-100 rounded-xl"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Dashboard Saya
                </Link>
                <Link
                  href="/dashboard/member/add-listing"
                  className="w-full text-center py-2.5 text-sm font-semibold text-white bg-blue-600 rounded-xl"
                  onClick={() => setIsMenuOpen(false)}
                >
                  + Pasang Iklan
                </Link>
                <button
                  onClick={handleLogout}
                  className="w-full text-center py-2.5 text-sm font-semibold text-red-600 bg-red-50 rounded-xl"
                >
                  Keluar
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </header>
  );
}
