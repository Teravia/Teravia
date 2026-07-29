"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo Teravia */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="Teravia Logo"
              width={140}
              height={40}
              className="h-9 w-auto object-contain"
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
            <Link
              href="/login"
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
          <div className="flex flex-col gap-2 pt-1">
            <Link
              href="/login"
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
        </div>
      )}
    </header>
  );
          }
