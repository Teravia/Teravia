"use client";

import React, { useState, useEffect, useMemo } from "react";

interface RegionItem {
  id: string;
  name: string;
}

interface Step3Props {
  onNext: () => void;
  onPrev: () => void;
  updateFormData?: (data: Record<string, any>) => void;
  initialData?: Record<string, any>;
}

export default function Step3Location({
  onNext,
  onPrev,
  updateFormData,
  initialData = {},
}: Step3Props) {
  // State Data Wilayah Emsifa
  const [provinces, setProvinces] = useState<RegionItem[]>([]);
  const [regencies, setRegencies] = useState<RegionItem[]>([]);
  const [districts, setDistricts] = useState<RegionItem[]>([]);
  const [villages, setVillages] = useState<RegionItem[]>([]);

  // Loading States
  const [loadingProv, setLoadingProv] = useState<boolean>(false);
  const [loadingReg, setLoadingReg] = useState<boolean>(false);
  const [loadingDis, setLoadingDis] = useState<boolean>(false);
  const [loadingVil, setLoadingVil] = useState<boolean>(false);

  // Selected ID States
  const [provinceId, setProvinceId] = useState<string>(initialData.provinceId || "");
  const [regencyId, setRegencyId] = useState<string>(initialData.regencyId || "");
  const [districtId, setDistrictId] = useState<string>(initialData.districtId || "");
  const [villageId, setVillageId] = useState<string>(initialData.villageId || "");

  // Selected Name States
  const [provinceName, setProvinceName] = useState<string>(initialData.provinceName || "");
  const [regencyName, setRegencyName] = useState<string>(initialData.regencyName || "");
  const [districtName, setDistrictName] = useState<string>(initialData.districtName || "");
  const [villageName, setVillageName] = useState<string>(initialData.villageName || "");

  // Detail Alamat
  const [address, setAddress] = useState<string>(initialData.address || "");
  const [postalCode, setPostalCode] = useState<string>(initialData.postalCode || "");

  // Validation State
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  // Fetch Daftar Provinsi
  useEffect(() => {
    const fetchProvinces = async () => {
      setLoadingProv(true);
      try {
        const res = await fetch(
          "https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json"
        );
        const data = await res.json();
        setProvinces(data);
      } catch (error) {
        console.error("Gagal mengambil data provinsi:", error);
      } finally {
        setLoadingProv(false);
      }
    };

    fetchProvinces();
  }, []);

  // Fetch Kabupaten/Kota jika Province ID berubah
  useEffect(() => {
    if (!provinceId) {
      setRegencies([]);
      setRegencyId("");
      setRegencyName("");
      return;
    }

    const fetchRegencies = async () => {
      setLoadingReg(true);
      try {
        const res = await fetch(
          `https://www.emsifa.com/api-wilayah-indonesia/api/regencies/${provinceId}.json`
        );
        const data = await res.json();
        setRegencies(data);
      } catch (error) {
        console.error("Gagal mengambil data kabupaten/kota:", error);
      } finally {
        setLoadingReg(false);
      }
    };

    fetchRegencies();
  }, [provinceId]);

  // Fetch Kecamatan jika Regency ID berubah
  useEffect(() => {
    if (!regencyId) {
      setDistricts([]);
      setDistrictId("");
      setDistrictName("");
      return;
    }

    const fetchDistricts = async () => {
      setLoadingDis(true);
      try {
        const res = await fetch(
          `https://www.emsifa.com/api-wilayah-indonesia/api/districts/${regencyId}.json`
        );
        const data = await res.json();
        setDistricts(data);
      } catch (error) {
        console.error("Gagal mengambil data kecamatan:", error);
      } finally {
        setLoadingDis(false);
      }
    };

    fetchDistricts();
  }, [regencyId]);

  // Fetch Kelurahan jika District ID berubah
  useEffect(() => {
    if (!districtId) {
      setVillages([]);
      setVillageId("");
      setVillageName("");
      return;
    }

    const fetchVillages = async () => {
      setLoadingVil(true);
      try {
        const res = await fetch(
          `https://www.emsifa.com/api-wilayah-indonesia/api/villages/${districtId}.json`
        );
        const data = await res.json();
        setVillages(data);
      } catch (error) {
        console.error("Gagal mengambil data kelurahan:", error);
      } finally {
        setLoadingVil(false);
      }
    };

    fetchVillages();
  }, [districtId]);

  // Validasi Required
  const requiredFields = useMemo(
    () => ["provinceId", "regencyId", "districtId", "villageId", "address"],
    []
  );

  const fieldValues: Record<string, string> = {
    provinceId,
    regencyId,
    districtId,
    villageId,
    address,
  };

  const isFormValid = useMemo(() => {
    return requiredFields.every((key) => {
      const val = fieldValues[key];
      return val !== undefined && val !== null && val.trim() !== "";
    });
  }, [requiredFields, provinceId, regencyId, districtId, villageId, address]);

  const markTouched = (key: string) => {
    setTouched((prev) => ({ ...prev, [key]: true }));
  };

  const showError = (key: string) => {
    const val = fieldValues[key];
    return (
      touched[key] &&
      requiredFields.includes(key) &&
      (!val || val.trim() === "")
    );
  };

  // Handler Lanjut
  const handleLanjut = () => {
    if (!isFormValid) {
      const allTouched: Record<string, boolean> = {};
      requiredFields.forEach((key) => (allTouched[key] = true));
      setTouched((prev) => ({ ...prev, ...allTouched }));
      return;
    }

    if (updateFormData) {
      updateFormData({
        provinceId,
        provinceName,
        regencyId,
        regencyName,
        districtId,
        districtName,
        villageId,
        villageName,
        address,
        postalCode,
      });
    }
    onNext();
  };

  const selectClass = (key: string, disabled: boolean = false) =>
    `w-full px-3.5 py-2.5 rounded-xl border text-xs font-medium outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
      disabled
        ? "bg-slate-100 text-slate-400 cursor-not-allowed border-slate-200"
        : showError(key)
        ? "border-red-400 bg-red-50/50"
        : "bg-white border-slate-300"
    }`;

  return (
    <div className="space-y-6 font-sans">
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-sm font-bold text-slate-900 border-b pb-3">
          Step 3: Lokasi Properti
        </h2>

        {/* DROPDOWN REGIONAL BERDAMPINGAN */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Provinsi */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Provinsi <span className="text-red-500">*</span>
            </label>
            <select
              value={provinceId}
              disabled={loadingProv}
              onChange={(e) => {
                const selected = provinces.find((p) => p.id === e.target.value);
                setProvinceId(e.target.value);
                setProvinceName(selected?.name || "");

                // Reset turunan
                setRegencyId("");
                setRegencyName("");
                setDistrictId("");
                setDistrictName("");
                setVillageId("");
                setVillageName("");

                markTouched("provinceId");
              }}
              onBlur={() => markTouched("provinceId")}
              className={selectClass("provinceId", loadingProv)}
            >
              <option value="">
                {loadingProv ? "Memuat Provinsi..." : "-- Pilih Provinsi --"}
              </option>
              {provinces.map((prov) => (
                <option key={prov.id} value={prov.id}>
                  {prov.name}
                </option>
              ))}
            </select>
            {showError("provinceId") && (
              <p className="text-red-500 text-[10px] font-medium mt-1">
                Provinsi wajib dipilih
              </p>
            )}
          </div>

          {/* Kabupaten / Kota */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Kabupaten / Kota <span className="text-red-500">*</span>
            </label>
            <select
              value={regencyId}
              disabled={!provinceId || loadingReg}
              onChange={(e) => {
                const selected = regencies.find((r) => r.id === e.target.value);
                setRegencyId(e.target.value);
                setRegencyName(selected?.name || "");

                // Reset turunan
                setDistrictId("");
                setDistrictName("");
                setVillageId("");
                setVillageName("");

                markTouched("regencyId");
              }}
              onBlur={() => markTouched("regencyId")}
              className={selectClass("regencyId", !provinceId || loadingReg)}
            >
              <option value="">
                {loadingReg
                  ? "Memuat Kabupaten/Kota..."
                  : "-- Pilih Kabupaten / Kota --"}
              </option>
              {regencies.map((reg) => (
                <option key={reg.id} value={reg.id}>
                  {reg.name}
                </option>
              ))}
            </select>
            {showError("regencyId") && (
              <p className="text-red-500 text-[10px] font-medium mt-1">
                Kabupaten / Kota wajib dipilih
              </p>
            )}
          </div>

          {/* Kecamatan */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Kecamatan <span className="text-red-500">*</span>
            </label>
            <select
              value={districtId}
              disabled={!regencyId || loadingDis}
              onChange={(e) => {
                const selected = districts.find((d) => d.id === e.target.value);
                setDistrictId(e.target.value);
                setDistrictName(selected?.name || "");

                // Reset turunan
                setVillageId("");
                setVillageName("");

                markTouched("districtId");
              }}
              onBlur={() => markTouched("districtId")}
              className={selectClass("districtId", !regencyId || loadingDis)}
            >
              <option value="">
                {loadingDis ? "Memuat Kecamatan..." : "-- Pilih Kecamatan --"}
              </option>
              {districts.map((dis) => (
                <option key={dis.id} value={dis.id}>
                  {dis.name}
                </option>
              ))}
            </select>
            {showError("districtId") && (
              <p className="text-red-500 text-[10px] font-medium mt-1">
                Kecamatan wajib dipilih
              </p>
            )}
          </div>

          {/* Kelurahan / Desa */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Kelurahan / Desa <span className="text-red-500">*</span>
            </label>
            <select
              value={villageId}
              disabled={!districtId || loadingVil}
              onChange={(e) => {
                const selected = villages.find((v) => v.id === e.target.value);
                setVillageId(e.target.value);
                setVillageName(selected?.name || "");

                markTouched("villageId");
              }}
              onBlur={() => markTouched("villageId")}
              className={selectClass("villageId", !districtId || loadingVil)}
            >
              <option value="">
                {loadingVil
                  ? "Memuat Kelurahan..."
                  : "-- Pilih Kelurahan / Desa --"}
              </option>
              {villages.map((vil) => (
                <option key={vil.id} value={vil.id}>
                  {vil.name}
                </option>
              ))}
            </select>
            {showError("villageId") && (
              <p className="text-red-500 text-[10px] font-medium mt-1">
                Kelurahan / Desa wajib dipilih
              </p>
            )}
          </div>
        </div>

        {/* ALAMAT LENGKAP & KODE POS */}
        <div className="pt-2 border-t border-slate-100 space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Alamat Lengkap / Nama Jalan <span className="text-red-500">*</span>
            </label>
            <textarea
              rows={3}
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              onBlur={() => markTouched("address")}
              placeholder="Masukkan jalan, nomor rumah, RT/RW, atau nama perumahan/komplek..."
              className={`w-full px-3.5 py-2.5 rounded-xl border text-xs font-medium outline-none focus:ring-2 focus:ring-blue-500 bg-white transition-all resize-none ${
                showError("address")
                  ? "border-red-400 bg-red-50/50"
                  : "border-slate-300"
              }`}
            />
            {showError("address") && (
              <p className="text-red-500 text-[10px] font-medium mt-1">
                Alamat lengkap wajib diisi
              </p>
            )}
          </div>

          <div className="w-full sm:w-1/2">
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Kode Pos <span className="text-slate-400 font-normal">(Opsional)</span>
            </label>
            <input
              type="text"
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
              placeholder="Contoh: 12345"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs font-medium outline-none focus:ring-2 focus:ring-blue-500 bg-white transition-all"
            />
          </div>
        </div>
      </div>

      {/* FOOTER NAVIGASI STEP 3 */}
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
