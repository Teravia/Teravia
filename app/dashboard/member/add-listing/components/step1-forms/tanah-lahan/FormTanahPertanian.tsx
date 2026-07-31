"use client";

import React, { useState } from 'react';

export interface FormTanahPertanianData {
  judulIklan: string;
  jenisTransaksi: string;
  namaLahan: string;
  jenisPertanianSelect: string;
  statusKepemilikan: string;
  kondisiLahan: string;
  statusPenggunaan: string;
  statusListing: string;
  luasTanahM2: number | '';
  luasTanahHa: number | '';
  panjangLahanM: number | '';
  lebarLahanM: number | '';
  bentukLahan: string;
  konturTanah: string;
  elevasi: string;
  jenisTanah: string;
  tingkatKesuburan: string;
  kemiringanLahanPersen: number | '';
  drainaseLahan: string;
  sudahDigarap: boolean;
  sawah: boolean;
  ladang: boolean;
  hortikultura: boolean;
  padi: boolean;
  jagung: boolean;
  kedelai: boolean;
  sayuran: boolean;
  buahBuahan: boolean;
  tanamanOrganik: boolean;
  greenhouse: boolean;
  hidroponik: boolean;
  pertanianTerpadu: boolean;
  irigasiTeknis: boolean;
  irigasiSetengahTeknis: boolean;
  irigasiSederhana: boolean;
  sumurBor: boolean;
  embung: boolean;
  sungai: boolean;
  mataAir: boolean;
  saluranIrigasi: boolean;
  pompaAir: boolean;
  ketersediaanAirSepanjangTahun: boolean;
  jalanAspal: boolean;
  jalanMakadam: boolean;
  jalanTanah: boolean;
  aksesTruk: boolean;
  listrikPln: boolean;
  gudang: boolean;
  rumahPenjaga: boolean;
  pagar: boolean;
  drainaseInfrastruktur: boolean;
  internet: boolean;
  sedangProduksi: boolean;
  masapanen: string;
  frekuensiPanenTahun: number | '';
  produktivitasPerHa: number | '';
  sistemOrganik: boolean;
  sertifikasiOrganik: boolean;
  mekanisasiPertanian: boolean;
  smartFarming: boolean;
  bebasBanjir: boolean;
  dekatSungai: boolean;
  dekatBendungan: boolean;
  dekatJalanRaya: boolean;
  dekatPasar: boolean;
  dekatKawasanIndustri: boolean;
  dekatPermukiman: boolean;
  dekatGudangDistribusu: boolean;
  sertifikat: string;
  shm: boolean;
  hgu: boolean;
  hakPakai: boolean;
  ajb: boolean;
  girik: boolean;
  letterC: boolean;
  pbbLengkap: boolean;
  kkpr: boolean;
  lp2b: boolean;
  cocokSawah: boolean;
  cocokHortikultura: boolean;
  cocokGreenhouse: boolean;
  cocokPeternakan: boolean;
  cocokAgrowisata: boolean;
  cocokPerkebunan: boolean;
  cocokInvestasi: boolean;
  bisaMekanisasi: boolean;
  sudahDipagar: boolean;
  tersediaGudang: boolean;
  tersediaRumahPekerja: boolean;
  bebasSengketa: boolean;
  siapAjb: boolean;
  catatanTambahan: string;
}

interface FormTanahPertanianProps {
  onNext: () => void;
  transactionType: string;
}

const initialFormData: FormTanahPertanianData = {
  judulIklan: '',
  jenisTransaksi: '',
  namaLahan: '',
  jenisPertanianSelect: '',
  statusKepemilikan: '',
  kondisiLahan: '',
  statusPenggunaan: '',
  statusListing: '',
  luasTanahM2: '',
  luasTanahHa: '',
  panjangLahanM: '',
  lebarLahanM: '',
  bentukLahan: '',
  konturTanah: '',
  elevasi: '',
  jenisTanah: '',
  tingkatKesuburan: '',
  kemiringanLahanPersen: '',
  drainaseLahan: '',
  sudahDigarap: false,
  sawah: false,
  ladang: false,
  hortikultura: false,
  padi: false,
  jagung: false,
  kedelai: false,
  sayuran: false,
  buahBuahan: false,
  tanamanOrganik: false,
  greenhouse: false,
  hidroponik: false,
  pertanianTerpadu: false,
  irigasiTeknis: false,
  irigasiSetengahTeknis: false,
  irigasiSederhana: false,
  sumurBor: false,
  embung: false,
  sungai: false,
  mataAir: false,
  saluranIrigasi: false,
  pompaAir: false,
  ketersediaanAirSepanjangTahun: false,
  jalanAspal: false,
  jalanMakadam: false,
  jalanTanah: false,
  aksesTruk: false,
  listrikPln: false,
  gudang: false,
  rumahPenjaga: false,
  pagar: false,
  drainaseInfrastruktur: false,
  internet: false,
  sedangProduksi: false,
  masapanen: '',
  frekuensiPanenTahun: '',
  produktivitasPerHa: '',
  sistemOrganik: false,
  sertifikasiOrganik: false,
  mekanisasiPertanian: false,
  smartFarming: false,
  bebasBanjir: false,
  dekatSungai: false,
  dekatBendungan: false,
  dekatJalanRaya: false,
  dekatPasar: false,
  dekatKawasanIndustri: false,
  dekatPermukiman: false,
  dekatGudangDistribusu: false,
  sertifikat: '',
  shm: false,
  hgu: false,
  hakPakai: false,
  ajb: false,
  girik: false,
  letterC: false,
  pbbLengkap: false,
  kkpr: false,
  lp2b: false,
  cocokSawah: false,
  cocokHortikultura: false,
  cocokGreenhouse: false,
  cocokPeternakan: false,
  cocokAgrowisata: false,
  cocokPerkebunan: false,
  cocokInvestasi: false,
  bisaMekanisasi: false,
  sudahDipagar: false,
  tersediaGudang: false,
  tersediaRumahPekerja: false,
  bebasSengketa: false,
  siapAjb: false,
  catatanTambahan: '',
};

export default function FormTanahPertanian({ onNext, transactionType }: FormTanahPertanianProps) {
  const [formData, setFormData] = useState<FormTanahPertanianData>({
    ...initialFormData,
    jenisTransaksi: transactionType || 'Jual',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else if (type === 'number') {
      setFormData((prev) => ({ ...prev, [name]: value === '' ? '' : Number(value) }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleNextStep = () => {
    console.log('Form Tanah Pertanian Data Saved:', formData);
    onNext();
  };

  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6">
      <div>
        <h2 className="text-base font-bold text-slate-800">Spesifikasi Tanah Pertanian</h2>
        <p className="text-xs text-slate-500">
          Isi detail spesifikasi lahan pertanian untuk jenis transaksi: <span className="font-semibold text-blue-600">{transactionType}</span>
        </p>
      </div>

      {/* 1. INFORMASI DASAR */}
      <div className="space-y-3">
        <h3 className="text-xs font-bold text-slate-700 uppercase tracking-wider border-b pb-1">1. Informasi Dasar</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div>
            <label className="block font-medium text-slate-700 mb-1">Judul Iklan *</label>
            <input type="text" name="judulIklan" value={formData.judulIklan} onChange={handleChange} required className="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div>
            <label className="block font-medium text-slate-700 mb-1">Nama Lahan</label>
            <input type="text" name="namaLahan" value={formData.namaLahan} onChange={handleChange} className="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div>
            <label className="block font-medium text-slate-700 mb-1">Jenis Pertanian *</label>
            <select name="jenisPertanianSelect" value={formData.jenisPertanianSelect} onChange={handleChange} required className="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 bg-white">
              <option value="">-- Pilih --</option>
              <option value="Sawah Irigasi">Sawah Irigasi</option>
              <option value="Sawah Tadah Hujan">Sawah Tadah Hujan</option>
              <option value="Ladang">Ladang</option>
              <option value="Hortikultura">Hortikultura</option>
              <option value="Tanaman Pangan">Tanaman Pangan</option>
              <option value="Pertanian Organik">Pertanian Organik</option>
              <option value="Greenhouse">Greenhouse</option>
              <option value="Hidroponik">Hidroponik</option>
              <option value="Agrofarm">Agrofarm</option>
              <option value="Pertanian Terpadu">Pertanian Terpadu</option>
            </select>
          </div>
          <div>
            <label className="block font-medium text-slate-700 mb-1">Status Kepemilikan *</label>
            <select name="statusKepemilikan" value={formData.statusKepemilikan} onChange={handleChange} required className="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 bg-white">
              <option value="">-- Pilih --</option>
              <option value="SHM">SHM</option>
              <option value="HGU">HGU</option>
              <option value="Hak Pakai">Hak Pakai</option>
              <option value="AJB">AJB</option>
              <option value="Girik">Girik</option>
              <option value="Letter C">Letter C</option>
              <option value="Lainnya">Lainnya</option>
            </select>
          </div>
        </div>
      </div>

      {/* 2. INFORMASI LAHAN */}
      <div className="space-y-3">
        <h3 className="text-xs font-bold text-slate-700 uppercase tracking-wider border-b pb-1">2. Informasi Lahan</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div>
            <label className="block font-medium text-slate-700 mb-1">Luas Tanah (m²)</label>
            <input type="number" name="luasTanahM2" value={formData.luasTanahM2} onChange={handleChange} className="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div>
            <label className="block font-medium text-slate-700 mb-1">Luas Tanah (Ha)</label>
            <input type="number" step="0.01" name="luasTanahHa" value={formData.luasTanahHa} onChange={handleChange} className="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
        </div>
      </div>

      {/* CATATAN TAMBAHAN */}
      <div className="space-y-2 text-xs">
        <label className="block font-medium text-slate-700">Catatan Tambahan</label>
        <textarea name="catatanTambahan" value={formData.catatanTambahan} onChange={handleChange} rows={3} className="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500" />
      </div>

      {/* TOMBOL LANJUT SINKRON STEP 2 */}
      <div className="pt-4 border-t flex justify-end">
        <button
          type="button"
          onClick={handleNextStep}
          className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-6 rounded-xl transition-all shadow-md text-xs"
        >
          Lanjut ke Step 2 (Legalitas & Harga) →
        </button>
      </div>
    </div>
  );
}
