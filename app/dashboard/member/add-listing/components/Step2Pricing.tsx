"use client";

import React, { useState, useMemo } from "react";

interface Step2Props {
  transactionType?: string;
  onNext: () => void;
  onPrev: () => void;
  updateFormData?: (data: Record<string, any>) => void;
  initialData?: Record<string, any>;
}

export default function Step2Pricing({
  transactionType = "Jual",
  onNext,
  onPrev,
  updateFormData,
  initialData = {},
}: Step2Props) {
  // State field harga utama
  const [price, setPrice] = useState<string>(initialData.price || "");
  const [priceNegotiable, setPriceNegotiable] = useState<string>(
    initialData.priceNegotiable || ""
  );
  const [pricePerSqm, setPricePerSqm] = useState<string>(
    initialData.pricePerSqm || ""
  );
  const [priceNotes, setPriceNotes] = useState<string>(
    initialData.priceNotes || ""
  );

  // State khusus Sewa
  const [rentalPeriod, setRentalPeriod] = useState<string>(
    initialData.rentalPeriod || ""
  );
  const [minimumRentalDuration, setMinimumRentalDuration] = useState<string>(
    initialData.minimumRentalDuration || ""
  );
  const [securityDeposit, setSecurityDeposit] = useState<string>(
    initialData.securityDeposit || ""
  );

  // State khusus Over Kredit
  const [remainingInstallmentCount, setRemainingInstallmentCount] =
    useState<string>(initialData.remainingInstallmentCount || "");
  const [monthlyInstallment, setMonthlyInstallment] = useState<string>(
    initialData.monthlyInstallment || ""
  );
  const [originalBank, setOriginalBank] = useState<string>(
    initialData.originalBank || ""
  );

  // State khusus Lelang
  const [auctionDate, setAuctionDate] = useState<string>(
    initialData.auctionDate || ""
  );
  const [auctionOrganizer, setAuctionOrganizer] = useState<string>(
    initialData.auctionOrganizer || ""
  );
  const [auctionLocation, setAuctionLocation] = useState<string>(
    initialData.auctionLocation || ""
  );

  // State Error Validation (muncul setelah field disentuh / tombol dicoba diklik)
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  // Label harga dinamis mengikuti Status Transaksi dari Step 1
  const priceLabel = useMemo(() => {
    switch (transactionType) {
      case "Sewa":
        return "Harga Sewa";
      case "Over Kredit":
        return "Harga Take Over (Sisa Cicilan)";
      case "Lelang":
        return "Harga Limit Lelang";
      default:
        return "Harga Jual";
    }
  }, [transactionType]);

  // Daftar field yang WAJIB diisi, tergantung Status Transaksi
  const requiredFields = useMemo(() => {
    const base = ["price", "priceNegotiable"];
    if (transactionType === "Sewa") return [...base, "rentalPeriod"];
    if (transactionType === "Lelang") return [...base, "auctionDate"];
    return base;
  }, [transactionType]);

  const fieldValues: Record<string, string> = {
    price,
    priceNegotiable,
    rentalPeriod,
    auctionDate,
  };

  // Validasi realtime: true jika semua field wajib sudah terisi
  const isFormValid = useMemo(() => {
    return requiredFields.every((key) => {
      const val = fieldValues[key];
      return val !== undefined && val !== null && val.toString().trim() !== "";
    });
  }, [requiredFields, price, priceNegotiable, rentalPeriod, auctionDate]);

  const markTouched = (key: string) => {
    setTouched((prev) => ({ ...prev, [key]: true }));
  };

  const showError = (key: string) => {
    const val = fieldValues[key];
    return (
      touched[key] &&
      requiredFields.includes(key) &&
      (val === undefined || val === null || val.toString().trim() === "")
    );
  };

  const handleLanjut = () => {
    if (!isFormValid) {
      const allTouched: Record<string, boolean> = {};
      requiredFields.forEach((key) => (allTouched[key] = true));
      setTouched((prev) => ({ ...prev, ...allTouched }));
      return;
    }

    if (updateFormData) {
      updateFormData({
        price,
        priceNegotiable,
        pricePerSqm,
        priceNotes,
        rentalPeriod,
        minimumRentalDuration,
        securityDeposit,
        remainingInstallmentCount,
        monthlyInstallment,
        originalBank,
        auctionDate,
        auctionOrganizer,
        auctionLocation,
      });
    }
    onNext();
  };

  const inputClass = (key: string) =>
    `w-full px-3.5 py-2.5 rounded-xl border text-xs font-medium outline-none focus:ring-2 focus:ring-blue-500 bg-white transition-all ${
      showError(key) ? "border-red-400 bg-red-50/50" : "border-slate-300"
    }`;

  return (
    <div className="space-y-6 font-sans">
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-sm font-bold text-slate-900 border-b pb-3">
          Step 2: Harga
        </h2>

        {/* HARGA UTAMA */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              {priceLabel} <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400">
                Rp
              </span>
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                onBlur={() => markTouched("price")}
                placeholder="0"
                className={`${inputClass("price")} pl-9`}
              />
            </div>
            {showError("price") && (
              <p className="text-red-500 text-[10px] font-medium mt-1">
                {priceLabel} wajib diisi
              </p>
            )}
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Harga per m² <span className="text-slate-400 font-normal">(Opsional)</span>
            </label>
            <div className="relative">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400">
                Rp
              </span>
              <input
                type="number"
                value={pricePerSqm}
                onChange={(e) => setPricePerSqm(e.target.value)}
                placeholder="0"
                className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-slate-300 text-xs font-medium outline-none focus:ring-2 focus:ring-blue-500 bg-white transition-all"
              />
            </div>
          </div>
        </div>

        {/* STATUS NEGO */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-2">
            Status Harga <span className="text-red-500">*</span>
          </label>
          <div className="grid grid-cols-2 gap-2">
            {["Harga Pas (Nett)", "Bisa Nego"].map((item) => (
              <label
                key={item}
                className={`flex items-center justify-center gap-2 p-3 rounded-xl border text-xs font-bold cursor-pointer transition-all ${
                  priceNegotiable === item
                    ? "bg-blue-50 border-blue-600 text-blue-600 shadow-sm"
                    : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100"
                }`}
              >
                <input
                  type="radio"
                  name="priceNegotiable"
                  value={item}
                  checked={priceNegotiable === item}
                  onChange={(e) => {
                    setPriceNegotiable(e.target.value);
                    markTouched("priceNegotiable");
                  }}
                  className="accent-blue-600 w-3.5 h-3.5"
                />
                {item}
              </label>
            ))}
          </div>
          {showError("priceNegotiable") && (
            <p className="text-red-500 text-[10px] font-medium mt-1">
              Pilih status harga
            </p>
          )}
        </div>

        {/* FIELD KHUSUS SEWA */}
        {transactionType === "Sewa" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-slate-100">
            <div className="sm:col-span-2 pt-4">
              <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                Detail Sewa
              </p>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Periode Sewa <span className="text-red-500">*</span>
              </label>
              <select
                value={rentalPeriod}
                onChange={(e) => setRentalPeriod(e.target.value)}
                onBlur={() => markTouched("rentalPeriod")}
                className={inputClass("rentalPeriod")}
              >
                <option value="">-- Pilih Periode --</option>
                <option value="per Hari">per Hari</option>
                <option value="per Bulan">per Bulan</option>
                <option value="per Tahun">per Tahun</option>
              </select>
              {showError("rentalPeriod") && (
                <p className="text-red-500 text-[10px] font-medium mt-1">
                  Periode sewa wajib dipilih
                </p>
              )}
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Minimal Masa Sewa
              </label>
              <input
                type="text"
                value={minimumRentalDuration}
                onChange={(e) => setMinimumRentalDuration(e.target.value)}
                placeholder="Contoh: 1 Tahun"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs font-medium outline-none focus:ring-2 focus:ring-blue-500 bg-white transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Uang Jaminan / Deposit
              </label>
              <div className="relative">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400">
                  Rp
                </span>
                <input
                  type="number"
                  value={securityDeposit}
                  onChange={(e) => setSecurityDeposit(e.target.value)}
                  placeholder="0"
                  className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-slate-300 text-xs font-medium outline-none focus:ring-2 focus:ring-blue-500 bg-white transition-all"
                />
              </div>
            </div>
          </div>
        )}

        {/* FIELD KHUSUS OVER KREDIT */}
        {transactionType === "Over Kredit" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-slate-100">
            <div className="sm:col-span-2 pt-4">
              <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                Detail Take Over / Kredit
              </p>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Bank Pemberi KPR
              </label>
              <input
                type="text"
                value={originalBank}
                onChange={(e) => setOriginalBank(e.target.value)}
                placeholder="Masukkan Nama Bank"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs font-medium outline-none focus:ring-2 focus:ring-blue-500 bg-white transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Sisa Jumlah Cicilan
              </label>
              <input
                type="number"
                value={remainingInstallmentCount}
                onChange={(e) => setRemainingInstallmentCount(e.target.value)}
                placeholder="Contoh: 24 (bulan)"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs font-medium outline-none focus:ring-2 focus:ring-blue-500 bg-white transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Cicilan per Bulan
              </label>
              <div className="relative">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400">
                  Rp
                </span>
                <input
                  type="number"
                  value={monthlyInstallment}
                  onChange={(e) => setMonthlyInstallment(e.target.value)}
                  placeholder="0"
                  className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-slate-300 text-xs font-medium outline-none focus:ring-2 focus:ring-blue-500 bg-white transition-all"
                />
              </div>
            </div>
          </div>
        )}

        {/* FIELD KHUSUS LELANG */}
        {transactionType === "Lelang" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-slate-100">
            <div className="sm:col-span-2 pt-4">
              <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                Detail Lelang
              </p>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Tanggal Lelang <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                value={auctionDate}
                onChange={(e) => setAuctionDate(e.target.value)}
                onBlur={() => markTouched("auctionDate")}
                className={inputClass("auctionDate")}
              />
              {showError("auctionDate") && (
                <p className="text-red-500 text-[10px] font-medium mt-1">
                  Tanggal lelang wajib diisi
                </p>
              )}
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Penyelenggara Lelang
              </label>
              <input
                type="text"
                value={auctionOrganizer}
                onChange={(e) => setAuctionOrganizer(e.target.value)}
                placeholder="Contoh: KPKNL / Balai Lelang Swasta"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs font-medium outline-none focus:ring-2 focus:ring-blue-500 bg-white transition-all"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Lokasi Pelaksanaan Lelang
              </label>
              <input
                type="text"
                value={auctionLocation}
                onChange={(e) => setAuctionLocation(e.target.value)}
                placeholder="Masukkan Lokasi Pelaksanaan Lelang"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs font-medium outline-none focus:ring-2 focus:ring-blue-500 bg-white transition-all"
              />
            </div>
          </div>
        )}

        {/* CATATAN HARGA */}
        <div className="pt-2 border-t border-slate-100">
          <label className="block text-xs font-semibold text-slate-700 mb-1 mt-4">
            Catatan Harga <span className="text-slate-400 font-normal">(Opsional)</span>
          </label>
          <textarea
            value={priceNotes}
            onChange={(e) => setPriceNotes(e.target.value)}
            rows={3}
            placeholder="Contoh: Harga sudah termasuk PPN, belum termasuk biaya balik nama, dll."
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs font-medium outline-none focus:ring-2 focus:ring-blue-500 bg-white transition-all resize-none"
          />
        </div>
      </div>

      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
        <button
          type="button"
          onClick={onPrev}
          className="px-6 py-2.5 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-50 text-xs font-bold transition-colors"
        >
          &larr; Kembali
        </button>
        <button
          type="button"
          onClick={handleLanjut}
          disabled={!isFormValid}
          className={`px-6 py-2.5 rounded-xl text-xs font-bold shadow-sm transition-colors ${
            isFormValid
              ? "bg-blue-600 hover:bg-blue-700 text-white cursor-pointer"
              : "bg-slate-200 text-slate-400 cursor-not-allowed"
          }`}
        >
          Lanjut &rarr;
        </button>
      </div>
    </div>
  );
}
