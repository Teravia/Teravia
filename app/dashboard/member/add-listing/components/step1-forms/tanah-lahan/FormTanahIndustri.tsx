import React from "react";
import { useForm } from "react-hook-form";

export interface FormTanahIndustriValues {
  // 1. Informasi Dasar (8 Field)
  judulIklan: string;
  jenisTransaksi: string;
  namaKawasanIndustri?: string;
  developerKawasan?: string;
  pengelolaKawasan?: string;
  statusKepemilikan: string;
  kondisiLahan: string;
  statusListing: string;

  // 2. Informasi Lahan (12 Field)
  luasTanahM2?: number;
  luasTanahHa?: number;
  panjangTanahM?: number;
  lebarDepanM?: number;
  lebarBelakangM?: number;
  bentukTanah?: string;
  konturTanah?: string;
  elevasiTanah?: string;
  hookSudut?: boolean;
  frontageJalanM?: number;
  siapBangunLahan?: boolean;
  sudahCutFill?: boolean;

  // 3. Tata Ruang & Zonasi (10 Field)
  zonaIndustri?: string;
  jenisIndustri?: string;
  kdbMaksimumPercent?: number;
  klbMaksimum?: number;
  kdhPercent?: number;
  tinggiBangunanMaksimumM?: number;
  garisSempadanBangunanM?: number;
  koefisienTapakBasement?: number;
  kkprZonasi?: boolean;
  sitePlanDisetujui?: boolean;

  // 4. Infrastruktur Kawasan (12 Field)
  jalanBeton?: boolean;
  lebarJalanM?: number;
  drainase?: boolean;
  fiberOptic?: boolean;
  airPDAM?: boolean;
  airIndustri?: boolean;
  listrikPLN?: boolean;
  garduListrik?: boolean;
  gasIndustri?: boolean;
  wwtpKawasan?: boolean;
  wtpKawasan?: boolean;
  streetLighting?: boolean;

  // 5. Akses Logistik (12 Field)
  jalanArteri?: boolean;
  jalanKolektor?: boolean;
  dekatJalanTol?: boolean;
  dekatGerbangTol?: boolean;
  dekatPelabuhan?: boolean;
  dekatDryPort?: boolean;
  dekatBandaraCargo?: boolean;
  dekatJalurKeretaBarang?: boolean;
  aksesKontainer20Feet?: boolean;
  aksesKontainer40Feet?: boolean;
  radiusPutarTrailerM?: number;
  truckFriendly?: boolean;

  // 6. Potensi Pengembangan (10 Field)
  cocokPabrik?: boolean;
  cocokGudang?: boolean;
  cocokDistributionCenter?: boolean;
  cocokLogisticsHub?: boolean;
  cocokColdStorage?: boolean;
  cocokWorkshop?: boolean;
  cocokDataCenter?: boolean;
  cocokDryPort?: boolean;
  cocokKawasanIndustri?: boolean;
  buildToSuitPotensi?: boolean;

  // 7. Lingkungan Industri (10 Field)
  dalamKawasanIndustri?: boolean;
  estateManagement?: boolean;
  oneGateSystem?: boolean;
  security24Jam?: boolean;
  cctvKawasan?: boolean;
  fireStation?: boolean;
  klinikKawasan?: boolean;
  bank?: boolean;
  spbu?: boolean;
  kantin?: boolean;

  // 8. Utilitas (8 Field)
  kapasitasListrikTersediaKVA?: number;
  kapasitasAirM3Hari?: number;
  kapasitasGasIndustri?: number;
  internetDedicated?: boolean;
  smartUtilityMonitoring?: boolean;
  solarPanelReady?: boolean;
  gensetArea?: boolean;
  jalurUtilitasBawahTanah?: boolean;

  // 9. Legalitas (12 Field)
  sertifikatSelect?: string;
  shm?: boolean;
  hgb?: boolean;
  hpl?: boolean;
  hakPakai?: boolean;
  ajb?: boolean;
  ppjb?: boolean;
  kkprLegalitas?: boolean;
  amdal?: boolean;
  nib?: boolean;
  izinKawasanIndustri?: boolean;
  pbbLengkap?: boolean;

  // 10. Informasi Investasi (8 Field)
  cocokInvestasi?: boolean;
  capitalGainTinggi?: boolean;
  roiPotensialTinggi?: boolean;
  buildToSuitInvestasi?: boolean;
  jointVenture?: boolean;
  bisaKPR?: boolean;
  bisaCicilanDeveloper?: boolean;
  readyForDevelopment?: boolean;

  // 11. Informasi Tambahan (6 Field)
  bebasBanjir?: boolean;
  sudahDipagar?: boolean;
  sudahDiurug?: boolean;
  siapAJB?: boolean;
  tidakDalamSengketa?: boolean;
  catatanTambahan?: string;
}

export default function FormTanahIndustri({ onNext, transactionType }: any) {
  const { register, handleSubmit } = useForm<FormTanahIndustriValues>();

  const onSubmit = (data: FormTanahIndustriValues) => {
    if (onNext) {
      onNext(data);
    }
  };

  const inputClass =
    "w-full px-3 py-2 border border-slate-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent";
  const selectClass =
    "w-full px-3 py-2 border border-slate-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white";
  const checkboxLabelClass =
    "flex items-center space-x-2 text-sm text-slate-700 cursor-pointer";
  const sectionTitleClass =
    "text-lg font-bold text-slate-800 border-b border-slate-200 pb-2 mb-4";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
      {/* 1. INFORMASI DASAR (8 FIELD) */}
      <section>
        <h3 className={sectionTitleClass}>1. Informasi Dasar</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">
              Judul Iklan <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              {...register("judulIklan")}
              className={inputClass}
              placeholder="Masukkan judul iklan"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">
              Jenis Transaksi <span className="text-red-500">*</span>
            </label>
            <select required {...register("jenisTransaksi")} className={selectClass} defaultValue={transactionType || ""}>
              <option value="">-- Pilih Jenis Transaksi --</option>
              <option value="Jual">Jual</option>
              <option value="Sewa">Sewa</option>
              <option value="Jual/Sewa">Jual / Sewa</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">
              Nama Kawasan Industri
            </label>
            <input
              type="text"
              {...register("namaKawasanIndustri")}
              className={inputClass}
              placeholder="Contoh: Kawasan Industri Jababeka"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">
              Developer Kawasan
            </label>
            <input
              type="text"
              {...register("developerKawasan")}
              className={inputClass}
              placeholder="Nama Developer Kawasan"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">
              Pengelola Kawasan
            </label>
            <input
              type="text"
              {...register("pengelolaKawasan")}
              className={inputClass}
              placeholder="Nama Pengelola Kawasan"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">
              Status Kepemilikan <span className="text-red-500">*</span>
            </label>
            <select required {...register("statusKepemilikan")} className={selectClass}>
              <option value="">-- Pilih Status Kepemilikan --</option>
              <option value="SHM">SHM (Sertifikat Hak Milik)</option>
              <option value="HGB">HGB (Hak Guna Bangunan)</option>
              <option value="HPL">HPL (Hak Pengelolaan)</option>
              <option value="Hak Pakai">Hak Pakai</option>
              <option value="Lainnya">Lainnya</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">
              Kondisi Lahan <span className="text-red-500">*</span>
            </label>
            <select required {...register("kondisiLahan")} className={selectClass}>
              <option value="">-- Pilih Kondisi Lahan --</option>
              <option value="Siap Bangun">Siap Bangun</option>
              <option value="Sudah Diurug">Sudah Diurug</option>
              <option value="Sudah Dipagar">Sudah Dipagar</option>
              <option value="Perlu Pembersihan">Perlu Pembersihan</option>
              <option value="Perlu Cut & Fill">Perlu Cut & Fill</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">
              Status Listing <span className="text-red-500">*</span>
            </label>
            <select required {...register("statusListing")} className={selectClass}>
              <option value="">-- Pilih Status Listing --</option>
              <option value="Available">Available</option>
              <option value="Reserved">Reserved</option>
              <option value="Sold">Sold</option>
              <option value="Rented">Rented</option>
            </select>
          </div>
        </div>
      </section>

      {/* 2. INFORMASI LAHAN (12 FIELD) */}
      <section>
        <h3 className={sectionTitleClass}>2. Informasi Lahan</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">
              Luas Tanah (m²)
            </label>
            <input
              type="number"
              step="any"
              {...register("luasTanahM2")}
              className={inputClass}
              placeholder="m²"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">
              Luas Tanah (Ha)
            </label>
            <input
              type="number"
              step="any"
              {...register("luasTanahHa")}
              className={inputClass}
              placeholder="Ha"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">
              Panjang Tanah (m)
            </label>
            <input
              type="number"
              step="any"
              {...register("panjangTanahM")}
              className={inputClass}
              placeholder="m"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">
              Lebar Depan (m)
            </label>
            <input
              type="number"
              step="any"
              {...register("lebarDepanM")}
              className={inputClass}
              placeholder="m"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">
              Lebar Belakang (m)
            </label>
            <input
              type="number"
              step="any"
              {...register("lebarBelakangM")}
              className={inputClass}
              placeholder="m"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">
              Bentuk Tanah
            </label>
            <select {...register("bentukTanah")} className={selectClass}>
              <option value="">-- Pilih Bentuk Tanah --</option>
              <option value="Persegi">Persegi</option>
              <option value="Persegi Panjang">Persegi Panjang</option>
              <option value="Trapesium">Trapesium</option>
              <option value="Segitiga">Segitiga</option>
              <option value="Tidak Beraturan">Tidak Beraturan</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">
              Kontur Tanah
            </label>
            <select {...register("konturTanah")} className={selectClass}>
              <option value="">-- Pilih Kontur Tanah --</option>
              <option value="Datar">Datar</option>
              <option value="Miring Ringan">Miring Ringan</option>
              <option value="Berkontur">Berkontur</option>
              <option value="Perlu Cut & Fill">Perlu Cut & Fill</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">
              Elevasi Tanah
            </label>
            <input
              type="text"
              {...register("elevasiTanah")}
              className={inputClass}
              placeholder="Misal: Lebih Tinggi dari Jalan (+50cm)"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">
              Frontage Jalan (m)
            </label>
            <input
              type="number"
              step="any"
              {...register("frontageJalanM")}
              className={inputClass}
              placeholder="m"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-t pt-3">
          <label className={checkboxLabelClass}>
            <input type="checkbox" {...register("hookSudut")} className="rounded text-blue-600 h-4 w-4" />
            <span>Hook / Sudut</span>
          </label>
          <label className={checkboxLabelClass}>
            <input type="checkbox" {...register("siapBangunLahan")} className="rounded text-blue-600 h-4 w-4" />
            <span>Siap Bangun</span>
          </label>
          <label className={checkboxLabelClass}>
            <input type="checkbox" {...register("sudahCutFill")} className="rounded text-blue-600 h-4 w-4" />
            <span>Sudah Cut & Fill</span>
          </label>
        </div>
      </section>

      {/* 3. TATA RUANG & ZONASI (10 FIELD) */}
      <section>
        <h3 className={sectionTitleClass}>3. Tata Ruang & Zonasi</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">
              Zona Industri
            </label>
            <select {...register("zonaIndustri")} className={selectClass}>
              <option value="">-- Pilih Zona Industri --</option>
              <option value="Heavy Industry">Heavy Industry</option>
              <option value="Medium Industry">Medium Industry</option>
              <option value="Light Industry">Light Industry</option>
              <option value="Logistics Zone">Logistics Zone</option>
              <option value="Automotive">Automotive</option>
              <option value="Electronics">Electronics</option>
              <option value="Food & Beverage">Food & Beverage</option>
              <option value="Pharmaceutical">Pharmaceutical</option>
              <option value="Chemical">Chemical</option>
              <option value="Mixed Industrial">Mixed Industrial</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">
              Jenis Industri
            </label>
            <select {...register("jenisIndustri")} className={selectClass}>
              <option value="">-- Pilih Jenis Industri --</option>
              <option value="Manufaktur">Manufaktur</option>
              <option value="Gudang">Gudang</option>
              <option value="Logistik">Logistik</option>
              <option value="Distribution Center">Distribution Center</option>
              <option value="Cold Storage">Cold Storage</option>
              <option value="Workshop">Workshop</option>
              <option value="Data Center">Data Center</option>
              <option value="Otomotif">Otomotif</option>
              <option value="Elektronik">Elektronik</option>
              <option value="Farmasi">Farmasi</option>
              <option value="Kimia">Kimia</option>
              <option value="FMCG">FMCG</option>
              <option value="Lainnya">Lainnya</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">
              KDB Maksimum (%)
            </label>
            <input
              type="number"
              step="any"
              {...register("kdbMaksimumPercent")}
              className={inputClass}
              placeholder="Contoh: 60"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">
              KLB Maksimum
            </label>
            <input
              type="number"
              step="any"
              {...register("klbMaksimum")}
              className={inputClass}
              placeholder="Contoh: 2.4"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">
              KDH (%)
            </label>
            <input
              type="number"
              step="any"
              {...register("kdhPercent")}
              className={inputClass}
              placeholder="Contoh: 20"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">
              Tinggi Bangunan Maksimum
            </label>
            <input
              type="number"
              step="any"
              {...register("tinggiBangunanMaksimumM")}
              className={inputClass}
              placeholder="Maksimum meter / lantai"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">
              Garis Sempadan Bangunan (GSB) (m)
            </label>
            <input
              type="number"
              step="any"
              {...register("garisSempadanBangunanM")}
              className={inputClass}
              placeholder="GSB dalam meter"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">
              Koefisien Tapak Basement (KTB) (%)
            </label>
            <input
              type="number"
              step="any"
              {...register("koefisienTapakBasement")}
              className={inputClass}
              placeholder="KTB (%)"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t pt-3">
          <label className={checkboxLabelClass}>
            <input type="checkbox" {...register("kkprZonasi")} className="rounded text-blue-600 h-4 w-4" />
            <span>KKPR</span>
          </label>
          <label className={checkboxLabelClass}>
            <input type="checkbox" {...register("sitePlanDisetujui")} className="rounded text-blue-600 h-4 w-4" />
            <span>Site Plan Disetujui</span>
          </label>
        </div>
      </section>

      {/* 4. INFRASTRUKTUR KAWASAN (12 FIELD) */}
      <section>
        <h3 className={sectionTitleClass}>4. Infrastruktur Kawasan</h3>
        <div className="mb-4">
          <label className="block text-sm font-semibold text-slate-700 mb-1">
            Lebar Jalan (m)
          </label>
          <input
            type="number"
            step="any"
            {...register("lebarJalanM")}
            className={inputClass}
            placeholder="Lebar jalan dalam meter"
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <label className={checkboxLabelClass}>
            <input type="checkbox" {...register("jalanBeton")} className="rounded text-blue-600 h-4 w-4" />
            <span>Jalan Beton</span>
          </label>
          <label className={checkboxLabelClass}>
            <input type="checkbox" {...register("drainase")} className="rounded text-blue-600 h-4 w-4" />
            <span>Drainase</span>
          </label>
          <label className={checkboxLabelClass}>
            <input type="checkbox" {...register("fiberOptic")} className="rounded text-blue-600 h-4 w-4" />
            <span>Fiber Optic</span>
          </label>
          <label className={checkboxLabelClass}>
            <input type="checkbox" {...register("airPDAM")} className="rounded text-blue-600 h-4 w-4" />
            <span>Air PDAM</span>
          </label>

          <label className={checkboxLabelClass}>
            <input type="checkbox" {...register("airIndustri")} className="rounded text-blue-600 h-4 w-4" />
            <span>Air Industri</span>
          </label>
          <label className={checkboxLabelClass}>
            <input type="checkbox" {...register("listrikPLN")} className="rounded text-blue-600 h-4 w-4" />
            <span>Listrik PLN</span>
          </label>
          <label className={checkboxLabelClass}>
            <input type="checkbox" {...register("garduListrik")} className="rounded text-blue-600 h-4 w-4" />
            <span>Gardu Listrik</span>
          </label>
          <label className={checkboxLabelClass}>
            <input type="checkbox" {...register("gasIndustri")} className="rounded text-blue-600 h-4 w-4" />
            <span>Gas Industri</span>
          </label>

          <label className={checkboxLabelClass}>
            <input type="checkbox" {...register("wwtpKawasan")} className="rounded text-blue-600 h-4 w-4" />
            <span>WWTP Kawasan</span>
          </label>
          <label className={checkboxLabelClass}>
            <input type="checkbox" {...register("wtpKawasan")} className="rounded text-blue-600 h-4 w-4" />
            <span>WTP Kawasan</span>
          </label>
          <label className={checkboxLabelClass}>
            <input type="checkbox" {...register("streetLighting")} className="rounded text-blue-600 h-4 w-4" />
            <span>Street Lighting</span>
          </label>
        </div>
      </section>

      {/* 5. AKSES LOGISTIK (12 FIELD) */}
      <section>
        <h3 className={sectionTitleClass}>5. Akses Logistik</h3>
        <div className="mb-4">
          <label className="block text-sm font-semibold text-slate-700 mb-1">
            Radius Putar Trailer (m)
          </label>
          <input
            type="number"
            step="any"
            {...register("radiusPutarTrailerM")}
            className={inputClass}
            placeholder="Radius putar trailer dalam meter"
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <label className={checkboxLabelClass}>
            <input type="checkbox" {...register("jalanArteri")} className="rounded text-blue-600 h-4 w-4" />
            <span>Jalan Arteri</span>
          </label>
          <label className={checkboxLabelClass}>
            <input type="checkbox" {...register("jalanKolektor")} className="rounded text-blue-600 h-4 w-4" />
            <span>Jalan Kolektor</span>
          </label>
          <label className={checkboxLabelClass}>
            <input type="checkbox" {...register("dekatJalanTol")} className="rounded text-blue-600 h-4 w-4" />
            <span>Dekat Jalan Tol</span>
          </label>
          <label className={checkboxLabelClass}>
            <input type="checkbox" {...register("dekatGerbangTol")} className="rounded text-blue-600 h-4 w-4" />
            <span>Dekat Gerbang Tol</span>
          </label>

          <label className={checkboxLabelClass}>
            <input type="checkbox" {...register("dekatPelabuhan")} className="rounded text-blue-600 h-4 w-4" />
            <span>Dekat Pelabuhan</span>
          </label>
          <label className={checkboxLabelClass}>
            <input type="checkbox" {...register("dekatDryPort")} className="rounded text-blue-600 h-4 w-4" />
            <span>Dekat Dry Port</span>
          </label>
          <label className={checkboxLabelClass}>
            <input type="checkbox" {...register("dekatBandaraCargo")} className="rounded text-blue-600 h-4 w-4" />
            <span>Dekat Bandara Cargo</span>
          </label>
          <label className={checkboxLabelClass}>
            <input type="checkbox" {...register("dekatJalurKeretaBarang")} className="rounded text-blue-600 h-4 w-4" />
            <span>Dekat Jalur Kereta Barang</span>
          </label>

          <label className={checkboxLabelClass}>
            <input type="checkbox" {...register("aksesKontainer20Feet")} className="rounded text-blue-600 h-4 w-4" />
            <span>Akses Kontainer 20 Feet</span>
          </label>
          <label className={checkboxLabelClass}>
            <input type="checkbox" {...register("aksesKontainer40Feet")} className="rounded text-blue-600 h-4 w-4" />
            <span>Akses Kontainer 40 Feet</span>
          </label>
          <label className={checkboxLabelClass}>
            <input type="checkbox" {...register("truckFriendly")} className="rounded text-blue-600 h-4 w-4" />
            <span>Truck Friendly</span>
          </label>
        </div>
      </section>

      {/* 6. POTENSI PENGEMBANGAN (10 FIELD) */}
      <section>
        <h3 className={sectionTitleClass}>6. Potensi Pengembangan</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <label className={checkboxLabelClass}>
            <input type="checkbox" {...register("cocokPabrik")} className="rounded text-blue-600 h-4 w-4" />
            <span>Cocok Pabrik</span>
          </label>
          <label className={checkboxLabelClass}>
            <input type="checkbox" {...register("cocokGudang")} className="rounded text-blue-600 h-4 w-4" />
            <span>Cocok Gudang</span>
          </label>
          <label className={checkboxLabelClass}>
            <input type="checkbox" {...register("cocokDistributionCenter")} className="rounded text-blue-600 h-4 w-4" />
            <span>Cocok Distribution Center</span>
          </label>
          <label className={checkboxLabelClass}>
            <input type="checkbox" {...register("cocokLogisticsHub")} className="rounded text-blue-600 h-4 w-4" />
            <span>Cocok Logistics Hub</span>
          </label>

          <label className={checkboxLabelClass}>
            <input type="checkbox" {...register("cocokColdStorage")} className="rounded text-blue-600 h-4 w-4" />
            <span>Cocok Cold Storage</span>
          </label>
          <label className={checkboxLabelClass}>
            <input type="checkbox" {...register("cocokWorkshop")} className="rounded text-blue-600 h-4 w-4" />
            <span>Cocok Workshop</span>
          </label>
          <label className={checkboxLabelClass}>
            <input type="checkbox" {...register("cocokDataCenter")} className="rounded text-blue-600 h-4 w-4" />
            <span>Cocok Data Center</span>
          </label>
          <label className={checkboxLabelClass}>
            <input type="checkbox" {...register("cocokDryPort")} className="rounded text-blue-600 h-4 w-4" />
            <span>Cocok Dry Port</span>
          </label>

          <label className={checkboxLabelClass}>
            <input type="checkbox" {...register("cocokKawasanIndustri")} className="rounded text-blue-600 h-4 w-4" />
            <span>Cocok Kawasan Industri</span>
          </label>
          <label className={checkboxLabelClass}>
            <input type="checkbox" {...register("buildToSuitPotensi")} className="rounded text-blue-600 h-4 w-4" />
            <span>Build to Suit</span>
          </label>
        </div>
      </section>

      {/* 7. LINGKUNGAN INDUSTRI (10 FIELD) */}
      <section>
        <h3 className={sectionTitleClass}>7. Lingkungan Industri</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <label className={checkboxLabelClass}>
            <input type="checkbox" {...register("dalamKawasanIndustri")} className="rounded text-blue-600 h-4 w-4" />
            <span>Dalam Kawasan Industri</span>
          </label>
          <label className={checkboxLabelClass}>
            <input type="checkbox" {...register("estateManagement")} className="rounded text-blue-600 h-4 w-4" />
            <span>Estate Management</span>
          </label>
          <label className={checkboxLabelClass}>
            <input type="checkbox" {...register("oneGateSystem")} className="rounded text-blue-600 h-4 w-4" />
            <span>One Gate System</span>
          </label>
          <label className={checkboxLabelClass}>
            <input type="checkbox" {...register("security24Jam")} className="rounded text-blue-600 h-4 w-4" />
            <span>Security 24 Jam</span>
          </label>

          <label className={checkboxLabelClass}>
            <input type="checkbox" {...register("cctvKawasan")} className="rounded text-blue-600 h-4 w-4" />
            <span>CCTV Kawasan</span>
          </label>
          <label className={checkboxLabelClass}>
            <input type="checkbox" {...register("fireStation")} className="rounded text-blue-600 h-4 w-4" />
            <span>Fire Station</span>
          </label>
          <label className={checkboxLabelClass}>
            <input type="checkbox" {...register("klinikKawasan")} className="rounded text-blue-600 h-4 w-4" />
            <span>Klinik Kawasan</span>
          </label>
          <label className={checkboxLabelClass}>
            <input type="checkbox" {...register("bank")} className="rounded text-blue-600 h-4 w-4" />
            <span>Bank</span>
          </label>

          <label className={checkboxLabelClass}>
            <input type="checkbox" {...register("spbu")} className="rounded text-blue-600 h-4 w-4" />
            <span>SPBU</span>
          </label>
          <label className={checkboxLabelClass}>
            <input type="checkbox" {...register("kantin")} className="rounded text-blue-600 h-4 w-4" />
            <span>Kantin</span>
          </label>
        </div>
      </section>

      {/* 8. UTILITAS (8 FIELD) */}
      <section>
        <h3 className={sectionTitleClass}>8. Utilitas</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">
              Kapasitas Listrik Tersedia (kVA)
            </label>
            <input
              type="number"
              step="any"
              {...register("kapasitasListrikTersediaKVA")}
              className={inputClass}
              placeholder="kVA"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">
              Kapasitas Air (m³/hari)
            </label>
            <input
              type="number"
              step="any"
              {...register("kapasitasAirM3Hari")}
              className={inputClass}
              placeholder="m³/hari"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">
              Kapasitas Gas Industri
            </label>
            <input
              type="number"
              step="any"
              {...register("kapasitasGasIndustri")}
              className={inputClass}
              placeholder="Kapasitas Gas"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <label className={checkboxLabelClass}>
            <input type="checkbox" {...register("internetDedicated")} className="rounded text-blue-600 h-4 w-4" />
            <span>Internet Dedicated</span>
          </label>
          <label className={checkboxLabelClass}>
            <input type="checkbox" {...register("smartUtilityMonitoring")} className="rounded text-blue-600 h-4 w-4" />
            <span>Smart Utility Monitoring</span>
          </label>
          <label className={checkboxLabelClass}>
            <input type="checkbox" {...register("solarPanelReady")} className="rounded text-blue-600 h-4 w-4" />
            <span>Solar Panel Ready</span>
          </label>
          <label className={checkboxLabelClass}>
            <input type="checkbox" {...register("gensetArea")} className="rounded text-blue-600 h-4 w-4" />
            <span>Genset Area</span>
          </label>

          <label className={checkboxLabelClass}>
            <input type="checkbox" {...register("jalurUtilitasBawahTanah")} className="rounded text-blue-600 h-4 w-4" />
            <span>Jalur Utilitas Bawah Tanah</span>
          </label>
        </div>
      </section>

      {/* 9. LEGALITAS (12 FIELD) */}
      <section>
        <h3 className={sectionTitleClass}>9. Legalitas</h3>
        <div className="mb-4">
          <label className="block text-sm font-semibold text-slate-700 mb-1">
            Sertifikat
          </label>
          <select {...register("sertifikatSelect")} className={selectClass}>
            <option value="">-- Pilih Sertifikat --</option>
            <option value="SHM">SHM</option>
            <option value="HGB">HGB</option>
            <option value="HPL">HPL</option>
            <option value="Hak Pakai">Hak Pakai</option>
            <option value="AJB">AJB</option>
            <option value="PPJB">PPJB</option>
            <option value="Lainnya">Lainnya</option>
          </select>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <label className={checkboxLabelClass}>
            <input type="checkbox" {...register("shm")} className="rounded text-blue-600 h-4 w-4" />
            <span>SHM</span>
          </label>
          <label className={checkboxLabelClass}>
            <input type="checkbox" {...register("hgb")} className="rounded text-blue-600 h-4 w-4" />
            <span>HGB</span>
          </label>
          <label className={checkboxLabelClass}>
            <input type="checkbox" {...register("hpl")} className="rounded text-blue-600 h-4 w-4" />
            <span>HPL</span>
          </label>
          <label className={checkboxLabelClass}>
            <input type="checkbox" {...register("hakPakai")} className="rounded text-blue-600 h-4 w-4" />
            <span>Hak Pakai</span>
          </label>

          <label className={checkboxLabelClass}>
            <input type="checkbox" {...register("ajb")} className="rounded text-blue-600 h-4 w-4" />
            <span>AJB</span>
          </label>
          <label className={checkboxLabelClass}>
            <input type="checkbox" {...register("ppjb")} className="rounded text-blue-600 h-4 w-4" />
            <span>PPJB</span>
          </label>
          <label className={checkboxLabelClass}>
            <input type="checkbox" {...register("kkprLegalitas")} className="rounded text-blue-600 h-4 w-4" />
            <span>KKPR</span>
          </label>
          <label className={checkboxLabelClass}>
            <input type="checkbox" {...register("amdal")} className="rounded text-blue-600 h-4 w-4" />
            <span>AMDAL</span>
          </label>

          <label className={checkboxLabelClass}>
            <input type="checkbox" {...register("nib")} className="rounded text-blue-600 h-4 w-4" />
            <span>NIB</span>
          </label>
          <label className={checkboxLabelClass}>
            <input type="checkbox" {...register("izinKawasanIndustri")} className="rounded text-blue-600 h-4 w-4" />
            <span>Izin Kawasan Industri</span>
          </label>
          <label className={checkboxLabelClass}>
            <input type="checkbox" {...register("pbbLengkap")} className="rounded text-blue-600 h-4 w-4" />
            <span>PBB Lengkap</span>
          </label>
        </div>
      </section>

      {/* 10. INFORMASI INVESTASI (8 FIELD) */}
      <section>
        <h3 className={sectionTitleClass}>10. Informasi Investasi</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <label className={checkboxLabelClass}>
            <input type="checkbox" {...register("cocokInvestasi")} className="rounded text-blue-600 h-4 w-4" />
            <span>Cocok Investasi</span>
          </label>
          <label className={checkboxLabelClass}>
            <input type="checkbox" {...register("capitalGainTinggi")} className="rounded text-blue-600 h-4 w-4" />
            <span>Capital Gain Tinggi</span>
          </label>
          <label className={checkboxLabelClass}>
            <input type="checkbox" {...register("roiPotensialTinggi")} className="rounded text-blue-600 h-4 w-4" />
            <span>ROI Potensial Tinggi</span>
          </label>
          <label className={checkboxLabelClass}>
            <input type="checkbox" {...register("buildToSuitInvestasi")} className="rounded text-blue-600 h-4 w-4" />
            <span>Build to Suit</span>
          </label>

          <label className={checkboxLabelClass}>
            <input type="checkbox" {...register("jointVenture")} className="rounded text-blue-600 h-4 w-4" />
            <span>Joint Venture</span>
          </label>
          <label className={checkboxLabelClass}>
            <input type="checkbox" {...register("bisaKPR")} className="rounded text-blue-600 h-4 w-4" />
            <span>Bisa KPR</span>
          </label>
          <label className={checkboxLabelClass}>
            <input type="checkbox" {...register("bisaCicilanDeveloper")} className="rounded text-blue-600 h-4 w-4" />
            <span>Bisa Cicilan Developer</span>
          </label>
          <label className={checkboxLabelClass}>
            <input type="checkbox" {...register("readyForDevelopment")} className="rounded text-blue-600 h-4 w-4" />
            <span>Ready for Development</span>
          </label>
        </div>
      </section>

      {/* 11. INFORMASI TAMBAHAN (6 FIELD) */}
      <section>
        <h3 className={sectionTitleClass}>11. Informasi Tambahan</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
          <label className={checkboxLabelClass}>
            <input type="checkbox" {...register("bebasBanjir")} className="rounded text-blue-600 h-4 w-4" />
            <span>Bebas Banjir</span>
          </label>
          <label className={checkboxLabelClass}>
            <input type="checkbox" {...register("sudahDipagar")} className="rounded text-blue-600 h-4 w-4" />
            <span>Sudah Dipagar</span>
          </label>
          <label className={checkboxLabelClass}>
            <input type="checkbox" {...register("sudahDiurug")} className="rounded text-blue-600 h-4 w-4" />
            <span>Sudah Diurug</span>
          </label>
          <label className={checkboxLabelClass}>
            <input type="checkbox" {...register("siapAJB")} className="rounded text-blue-600 h-4 w-4" />
            <span>Siap AJB</span>
          </label>
          <label className={checkboxLabelClass}>
            <input type="checkbox" {...register("tidakDalamSengketa")} className="rounded text-blue-600 h-4 w-4" />
            <span>Tidak Dalam Sengketa</span>
          </label>
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1">
            Catatan Tambahan
          </label>
          <textarea
            rows={4}
            {...register("catatanTambahan")}
            className={inputClass}
            placeholder="Tambahkan informasi atau rincian tambahan terkait tanah industri ini..."
          ></textarea>
        </div>
      </section>

      {/* ACTION BUTTON */}
      <div className="pt-4 border-t border-slate-200 flex justify-end">
        <button
          type="submit"
          className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm rounded-lg transition-colors shadow-sm"
        >
          Lanjut
        </button>
      </div>
    </form>
  );
}
