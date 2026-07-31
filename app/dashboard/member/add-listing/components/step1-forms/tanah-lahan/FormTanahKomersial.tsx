import React, { useState } from 'react';

// --- INTERFACES & TYPES ---
export interface FormTanahKomersialData {
  // 1. Informasi Dasar (8)
  judulIklan: string;
  jenisTransaksi: string;
  namaKawasan: string;
  namaProyek: string;
  developer: string;
  statusKepemilikan: string;
  kondisiLahanSelect: string;
  statusListing: string;

  // 2. Informasi Lahan (12)
  luasTanah: number | '';
  panjangTanah: number | '';
  lebarDepan: number | '';
  lebarBelakang: number | '';
  bentukTanah: string;
  konturTanah: string;
  elevasiTanah: string;
  arahHadap: string;
  hookSudut: boolean;
  frontageJalan: number | '';
  jumlahSisiJalan: number | '';
  siapBangun: boolean;

  // 3. Tata Ruang & Perizinan (10)
  peruntukan: string;
  zonaTataRuang: string;
  kdbMaksimum: number | '';
  klbMaksimum: number | '';
  kdh: number | '';
  tinggiBangunanMaksimum: number | '';
  garisSempadanBangunan: number | '';
  koefisienTapakBasement: number | '';
  persetujuanSitePlan: boolean;
  kesesuaianTataRuangKkpr: boolean;

  // 4. Infrastruktur (12)
  jalanAspal: boolean;
  jalanBeton: boolean;
  lebarJalan: number | '';
  jalanArteri: boolean;
  jalanKolektor: boolean;
  drainase: boolean;
  airPdam: boolean;
  listrikPln: boolean;
  gasKota: boolean;
  fiberOptic: boolean;
  internetDedicated: boolean;
  lampuJalan: boolean;

  // 5. Aksesibilitas (12)
  pinggirJalanRaya: boolean;
  jalanDuaArah: boolean;
  jalanSatuArah: boolean;
  dekatJalanTol: boolean;
  dekatGerbangTol: boolean;
  dekatStasiun: boolean;
  dekatMrt: boolean;
  dekatLrt: boolean;
  dekatTerminal: boolean;
  dekatBandara: boolean;
  dekatPelabuhan: boolean;
  aksesBus: boolean;

  // 6. Potensi Pengembangan (13)
  cocokMall: boolean;
  cocokRuko: boolean;
  cocokRukan: boolean;
  cocokPerkantoran: boolean;
  cocokHotel: boolean;
  cocokApartemen: boolean;
  cocokMixedUse: boolean;
  cocokRumahSakit: boolean;
  cocokSekolah: boolean;
  cocokShowroom: boolean;
  cocokSpbu: boolean;
  cocokRestoran: boolean;
  cocokGudang: boolean;

  // 7. Lingkungan Sekitar (10)
  cbd: boolean;
  kawasanBisnis: boolean;
  kawasanPerkantoran: boolean;
  kawasanIndustri: boolean;
  kawasanPerumahan: boolean;
  dekatMall: boolean;
  dekatHotel: boolean;
  dekatRumahSakit: boolean;
  dekatKampus: boolean;
  dekatTempatWisata: boolean;

  // 8. Legalitas (11)
  sertifikat: string;
  shm: boolean;
  hgb: boolean;
  hakPakai: boolean;
  hpl: boolean;
  ajb: boolean;
  ppjb: boolean;
  pbbLengkap: boolean;
  kkpr: boolean;
  amdal: boolean;
  sitePlanDisetujui: boolean;

  // 9. Informasi Investasi (8)
  cocokInvestasi: boolean;
  capitalGainTinggi: boolean;
  roiPotensialTinggi: boolean;
  buildToSuit: boolean;
  jointVenture: boolean;
  bisaKpr: boolean;
  bisaCicilanDeveloper: boolean;
  potensiSewaTinggi: boolean;

  // 10. Informasi Tambahan (6)
  sudahDipagar: boolean;
  sudahDiurug: boolean;
  bebasBanjir: boolean;
  siapAjb: boolean;
  tidakDalamSengketa: boolean;
  catatanTambahan: string;
}

const initialFormData: FormTanahKomersialData = {
  // 1. Informasi Dasar
  judulIklan: '',
  jenisTransaksi: '',
  namaKawasan: '',
  namaProyek: '',
  developer: '',
  statusKepemilikan: '',
  kondisiLahanSelect: '',
  statusListing: '',

  // 2. Informasi Lahan
  luasTanah: '',
  panjangTanah: '',
  lebarDepan: '',
  lebarBelakang: '',
  bentukTanah: '',
  konturTanah: '',
  elevasiTanah: '',
  arahHadap: '',
  hookSudut: false,
  frontageJalan: '',
  jumlahSisiJalan: '',
  siapBangun: false,

  // 3. Tata Ruang & Perizinan
  peruntukan: '',
  zonaTataRuang: '',
  kdbMaksimum: '',
  klbMaksimum: '',
  kdh: '',
  tinggiBangunanMaksimum: '',
  garisSempadanBangunan: '',
  koefisienTapakBasement: '',
  persetujuanSitePlan: false,
  kesesuaianTataRuangKkpr: false,

  // 4. Infrastruktur
  jalanAspal: false,
  jalanBeton: false,
  lebarJalan: '',
  jalanArteri: false,
  jalanKolektor: false,
  drainase: false,
  airPdam: false,
  listrikPln: false,
  gasKota: false,
  fiberOptic: false,
  internetDedicated: false,
  lampuJalan: false,

  // 5. Aksesibilitas
  pinggirJalanRaya: false,
  jalanDuaArah: false,
  jalanSatuArah: false,
  dekatJalanTol: false,
  dekatGerbangTol: false,
  dekatStasiun: false,
  dekatMrt: false,
  dekatLrt: false,
  dekatTerminal: false,
  dekatBandara: false,
  dekatPelabuhan: false,
  aksesBus: false,

  // 6. Potensi Pengembangan
  cocokMall: false,
  cocokRuko: false,
  cocokRukan: false,
  cocokPerkantoran: false,
  cocokHotel: false,
  cocokApartemen: false,
  cocokMixedUse: false,
  cocokRumahSakit: false,
  cocokSekolah: false,
  cocokShowroom: false,
  cocokSpbu: false,
  cocokRestoran: false,
  cocokGudang: false,

  // 7. Lingkungan Sekitar
  cbd: false,
  kawasanBisnis: false,
  kawasanPerkantoran: false,
  kawasanIndustri: false,
  kawasanPerumahan: false,
  dekatMall: false,
  dekatHotel: false,
  dekatRumahSakit: false,
  dekatKampus: false,
  dekatTempatWisata: false,

  // 8. Legalitas
  sertifikat: '',
  shm: false,
  hgb: false,
  hakPakai: false,
  hpl: false,
  ajb: false,
  ppjb: false,
  pbbLengkap: false,
  kkpr: false,
  amdal: false,
  sitePlanDisetujui: false,

  // 9. Informasi Investasi
  cocokInvestasi: false,
  capitalGainTinggi: false,
  roiPotensialTinggi: false,
  buildToSuit: false,
  jointVenture: false,
  bisaKpr: false,
  bisaCicilanDeveloper: false,
  potensiSewaTinggi: false,

  // 10. Informasi Tambahan
  sudahDipagar: false,
  sudahDiurug: false,
  bebasBanjir: false,
  siapAjb: false,
  tidakDalamSengketa: false,
  catatanTambahan: '',
};

export const FormTanahKomersial: React.FC = () => {
  const [formData, setFormData] = useState<FormTanahKomersialData>(initialFormData);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Submit Data:', formData);
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '900px', margin: '0 auto', padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Form Klasifikasi Tanah Komersial (Commercial Land)</h1>
      <p style={{ color: '#555' }}>
        Lahan yang diperuntukkan untuk kegiatan bisnis, perdagangan, jasa, perkantoran, perhotelan, pusat perbelanjaan, rumah sakit, pendidikan, mixed use, maupun pengembangan properti komersial lainnya[cite: 3].
      </p>

      {/* 1. INFORMASI DASAR (8 FIELD) */}
      <fieldset style={{ marginBottom: '20px', padding: '15px' }}>
        <legend><h2>1. Informasi Dasar</h2></legend>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
          <div>
            <label>Judul Iklan *</label>
            <input type="text" name="judulIklan" value={formData.judulIklan} onChange={handleChange} required style={{ width: '100%' }} />
          </div>
          <div>
            <label>Jenis Transaksi *</label>
            <select name="jenisTransaksi" value={formData.jenisTransaksi} onChange={handleChange} required style={{ width: '100%' }}>
              <option value="">-- Pilih --</option>
              <option value="Jual">Jual</option>
              <option value="Sewa">Sewa</option>
            </select>
          </div>
          <div>
            <label>Nama Kawasan</label>
            <input type="text" name="namaKawasan" value={formData.namaKawasan} onChange={handleChange} style={{ width: '100%' }} />
          </div>
          <div>
            <label>Nama Proyek</label>
            <input type="text" name="namaProyek" value={formData.namaProyek} onChange={handleChange} style={{ width: '100%' }} />
          </div>
          <div>
            <label>Developer</label>
            <input type="text" name="developer" value={formData.developer} onChange={handleChange} style={{ width: '100%' }} />
          </div>
          <div>
            <label>Status Kepemilikan *</label>
            <select name="statusKepemilikan" value={formData.statusKepemilikan} onChange={handleChange} required style={{ width: '100%' }}>
              <option value="">-- Pilih --</option>
              <option value="SHM">SHM</option>
              <option value="HGB">HGB</option>
              <option value="Hak Pakai">Hak Pakai</option>
              <option value="HPL">HPL</option>
              <option value="Lainnya">Lainnya</option>
            </select>
          </div>
          <div>
            <label>Kondisi Lahan *</label>
            <select name="kondisiLahanSelect" value={formData.kondisiLahanSelect} onChange={handleChange} required style={{ width: '100%' }}>
              <option value="">-- Pilih --</option>
              <option value="Siap Bangun">Siap Bangun</option>
              <option value="Sudah Dipagar">Sudah Dipagar</option>
              <option value="Sudah Diurug">Sudah Diurug</option>
              <option value="Perlu Pembersihan">Perlu Pembersihan</option>
              <option value="Perlu Cut & Fill">Perlu Cut & Fill</option>
            </select>
          </div>
          <div>
            <label>Status Listing *</label>
            <select name="statusListing" value={formData.statusListing} onChange={handleChange} required style={{ width: '100%' }}>
              <option value="">-- Pilih --</option>
              <option value="Tersedia">Tersedia</option>
              <option value="Terjual">Terjual</option>
              <option value="Tersewa">Tersewa</option>
            </select>
          </div>
        </div>
      </fieldset>

      {/* 2. INFORMASI LAHAN (12 FIELD) */}
      <fieldset style={{ marginBottom: '20px', padding: '15px' }}>
        <legend><h2>2. Informasi Lahan</h2></legend>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
          <div>
            <label>Luas Tanah (m²)</label>
            <input type="number" name="luasTanah" value={formData.luasTanah} onChange={handleChange} style={{ width: '100%' }} />
          </div>
          <div>
            <label>Panjang Tanah (m)</label>
            <input type="number" name="panjangTanah" value={formData.panjangTanah} onChange={handleChange} style={{ width: '100%' }} />
          </div>
          <div>
            <label>Lebar Depan (m)</label>
            <input type="number" name="lebarDepan" value={formData.lebarDepan} onChange={handleChange} style={{ width: '100%' }} />
          </div>
          <div>
            <label>Lebar Belakang (m)</label>
            <input type="number" name="lebarBelakang" value={formData.lebarBelakang} onChange={handleChange} style={{ width: '100%' }} />
          </div>
          <div>
            <label>Bentuk Tanah</label>
            <select name="bentukTanah" value={formData.bentukTanah} onChange={handleChange} style={{ width: '100%' }}>
              <option value="">-- Pilih --</option>
              <option value="Persegi">Persegi</option>
              <option value="Persegi Panjang">Persegi Panjang</option>
              <option value="Trapesium">Trapesium</option>
              <option value="Segitiga">Segitiga</option>
              <option value="Tidak Beraturan">Tidak Beraturan</option>
            </select>
          </div>
          <div>
            <label>Kontur Tanah</label>
            <select name="konturTanah" value={formData.konturTanah} onChange={handleChange} style={{ width: '100%' }}>
              <option value="">-- Pilih --</option>
              <option value="Datar">Datar</option>
              <option value="Miring Ringan">Miring Ringan</option>
              <option value="Miring Sedang">Miring Sedang</option>
              <option value="Berkontur">Berkontur</option>
            </select>
          </div>
          <div>
            <label>Elevasi Tanah</label>
            <select name="elevasiTanah" value={formData.elevasiTanah} onChange={handleChange} style={{ width: '100%' }}>
              <option value="">-- Pilih --</option>
              <option value="Sama Dengan Jalan">Sama Dengan Jalan</option>
              <option value="Lebih Tinggi Dari Jalan">Lebih Tinggi Dari Jalan</option>
              <option value="Lebih Rendah Dari Jalan">Lebih Rendah Dari Jalan</option>
            </select>
          </div>
          <div>
            <label>Arah Hadap</label>
            <select name="arahHadap" value={formData.arahHadap} onChange={handleChange} style={{ width: '100%' }}>
              <option value="">-- Pilih --</option>
              <option value="Utara">Utara</option>
              <option value="Selatan">Selatan</option>
              <option value="Timur">Timur</option>
              <option value="Barat">Barat</option>
              <option value="Timur Laut">Timur Laut</option>
              <option value="Barat Daya">Barat Daya</option>
              <option value="Barat Laut">Barat Laut</option>
              <option value="Tenggara">Tenggara</option>
            </select>
          </div>
          <div>
            <label>Frontage Jalan (m)</label>
            <input type="number" name="frontageJalan" value={formData.frontageJalan} onChange={handleChange} style={{ width: '100%' }} />
          </div>
          <div>
            <label>Jumlah Sisi Jalan</label>
            <input type="number" name="jumlahSisiJalan" value={formData.jumlahSisiJalan} onChange={handleChange} style={{ width: '100%' }} />
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginTop: '15px' }}>
          <label><input type="checkbox" name="hookSudut" checked={formData.hookSudut} onChange={handleChange} /> Hook / Sudut</label>
          <label><input type="checkbox" name="siapBangun" checked={formData.siapBangun} onChange={handleChange} /> Siap Bangun</label>
        </div>
      </fieldset>

      {/* 3. TATA RUANG & PERIZINAN (10 FIELD) */}
      <fieldset style={{ marginBottom: '20px', padding: '15px' }}>
        <legend><h2>3. Tata Ruang & Perizinan</h2></legend>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
          <div>
            <label>Peruntukan</label>
            <select name="peruntukan" value={formData.peruntukan} onChange={handleChange} style={{ width: '100%' }}>
              <option value="">-- Pilih --</option>
              <option value="Perkantoran">Perkantoran</option>
              <option value="Ruko">Ruko</option>
              <option value="Rukan">Rukan</option>
              <option value="Hotel">Hotel</option>
              <option value="Apartemen">Apartemen</option>
              <option value="Mall">Mall</option>
              <option value="Mixed Use">Mixed Use</option>
              <option value="Rumah Sakit">Rumah Sakit</option>
              <option value="Pendidikan">Pendidikan</option>
              <option value="Showroom">Showroom</option>
              <option value="SPBU">SPBU</option>
              <option value="Gudang">Gudang</option>
              <option value="Restoran">Restoran</option>
              <option value="Pusat Niaga">Pusat Niaga</option>
              <option value="Lainnya">Lainnya</option>
            </select>
          </div>
          <div>
            <label>Zona Tata Ruang</label>
            <select name="zonaTataRuang" value={formData.zonaTataRuang} onChange={handleChange} style={{ width: '100%' }}>
              <option value="">-- Pilih --</option>
              <option value="Komersial">Komersial</option>
              <option value="Mixed Use">Mixed Use</option>
              <option value="Perdagangan">Perdagangan</option>
              <option value="Jasa">Jasa</option>
              <option value="CBD">CBD</option>
              <option value="Transit Oriented Development (TOD)">Transit Oriented Development (TOD)</option>
              <option value="Kawasan Khusus">Kawasan Khusus</option>
            </select>
          </div>
          <div>
            <label>KDB Maksimum (%)</label>
            <input type="number" name="kdbMaksimum" value={formData.kdbMaksimum} onChange={handleChange} style={{ width: '100%' }} />
          </div>
          <div>
            <label>KLB Maksimum</label>
            <input type="number" step="0.1" name="klbMaksimum" value={formData.klbMaksimum} onChange={handleChange} style={{ width: '100%' }} />
          </div>
          <div>
            <label>KDH (%)</label>
            <input type="number" name="kdh" value={formData.kdh} onChange={handleChange} style={{ width: '100%' }} />
          </div>
          <div>
            <label>Tinggi Bangunan Maksimum</label>
            <input type="number" name="tinggiBangunanMaksimum" value={formData.tinggiBangunanMaksimum} onChange={handleChange} style={{ width: '100%' }} />
          </div>
          <div>
            <label>Garis Sempadan Bangunan (GSB)</label>
            <input type="number" name="garisSempadanBangunan" value={formData.garisSempadanBangunan} onChange={handleChange} style={{ width: '100%' }} />
          </div>
          <div>
            <label>Koefisien Tapak Basement (KTB)</label>
            <input type="number" name="koefisienTapakBasement" value={formData.koefisienTapakBasement} onChange={handleChange} style={{ width: '100%' }} />
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginTop: '15px' }}>
          <label><input type="checkbox" name="persetujuanSitePlan" checked={formData.persetujuanSitePlan} onChange={handleChange} /> Persetujuan Site Plan</label>
          <label><input type="checkbox" name="kesesuaianTataRuangKkpr" checked={formData.kesesuaianTataRuangKkpr} onChange={handleChange} /> Kesesuaian Tata Ruang (KKPR)</label>
        </div>
      </fieldset>

      {/* 4. INFRASTRUKTUR (12 FIELD) */}
      <fieldset style={{ marginBottom: '20px', padding: '15px' }}>
        <legend><h2>4. Infrastruktur</h2></legend>
        <div style={{ marginBottom: '15px' }}>
          <label>Lebar Jalan (m)</label>
          <input type="number" name="lebarJalan" value={formData.lebarJalan} onChange={handleChange} style={{ width: '100%', maxWidth: '300px', display: 'block', marginTop: '5px' }} />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px' }}>
          <label><input type="checkbox" name="jalanAspal" checked={formData.jalanAspal} onChange={handleChange} /> Jalan Aspal</label>
          <label><input type="checkbox" name="jalanBeton" checked={formData.jalanBeton} onChange={handleChange} /> Jalan Beton</label>
          <label><input type="checkbox" name="jalanArteri" checked={formData.jalanArteri} onChange={handleChange} /> Jalan Arteri</label>
          <label><input type="checkbox" name="jalanKolektor" checked={formData.jalanKolektor} onChange={handleChange} /> Jalan Kolektor</label>
          <label><input type="checkbox" name="drainase" checked={formData.drainase} onChange={handleChange} /> Drainase</label>
          <label><input type="checkbox" name="airPdam" checked={formData.airPdam} onChange={handleChange} /> Air PDAM</label>
          <label><input type="checkbox" name="listrikPln" checked={formData.listrikPln} onChange={handleChange} /> Listrik PLN</label>
          <label><input type="checkbox" name="gasKota" checked={formData.gasKota} onChange={handleChange} /> Gas Kota</label>
          <label><input type="checkbox" name="fiberOptic" checked={formData.fiberOptic} onChange={handleChange} /> Fiber Optic</label>
          <label><input type="checkbox" name="internetDedicated" checked={formData.internetDedicated} onChange={handleChange} /> Internet Dedicated</label>
          <label><input type="checkbox" name="lampuJalan" checked={formData.lampuJalan} onChange={handleChange} /> Lampu Jalan</label>
        </div>
      </fieldset>

      {/* 5. AKSESIBILITAS (12 FIELD) */}
      <fieldset style={{ marginBottom: '20px', padding: '15px' }}>
        <legend><h2>5. Aksesibilitas</h2></legend>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px' }}>
          <label><input type="checkbox" name="pinggirJalanRaya" checked={formData.pinggirJalanRaya} onChange={handleChange} /> Pinggir Jalan Raya</label>
          <label><input type="checkbox" name="jalanDuaArah" checked={formData.jalanDuaArah} onChange={handleChange} /> Jalan Dua Arah</label>
          <label><input type="checkbox" name="jalanSatuArah" checked={formData.jalanSatuArah} onChange={handleChange} /> Jalan Satu Arah</label>
          <label><input type="checkbox" name="dekatJalanTol" checked={formData.dekatJalanTol} onChange={handleChange} /> Dekat Jalan Tol</label>
          <label><input type="checkbox" name="dekatGerbangTol" checked={formData.dekatGerbangTol} onChange={handleChange} /> Dekat Gerbang Tol</label>
          <label><input type="checkbox" name="dekatStasiun" checked={formData.dekatStasiun} onChange={handleChange} /> Dekat Stasiun</label>
          <label><input type="checkbox" name="dekatMrt" checked={formData.dekatMrt} onChange={handleChange} /> Dekat MRT</label>
          <label><input type="checkbox" name="dekatLrt" checked={formData.dekatLrt} onChange={handleChange} /> Dekat LRT</label>
          <label><input type="checkbox" name="dekatTerminal" checked={formData.dekatTerminal} onChange={handleChange} /> Dekat Terminal</label>
          <label><input type="checkbox" name="dekatBandara" checked={formData.dekatBandara} onChange={handleChange} /> Dekat Bandara</label>
          <label><input type="checkbox" name="dekatPelabuhan" checked={formData.dekatPelabuhan} onChange={handleChange} /> Dekat Pelabuhan</label>
          <label><input type="checkbox" name="aksesBus" checked={formData.aksesBus} onChange={handleChange} /> Akses Bus</label>
        </div>
      </fieldset>

      {/* 6. POTENSI PENGEMBANGAN (13 FIELD) */}
      <fieldset style={{ marginBottom: '20px', padding: '15px' }}>
        <legend><h2>6. Potensi Pengembangan</h2></legend>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px' }}>
          <label><input type="checkbox" name="cocokMall" checked={formData.cocokMall} onChange={handleChange} /> Cocok Mall</label>
          <label><input type="checkbox" name="cocokRuko" checked={formData.cocokRuko} onChange={handleChange} /> Cocok Ruko</label>
          <label><input type="checkbox" name="cocokRukan" checked={formData.cocokRukan} onChange={handleChange} /> Cocok Rukan</label>
          <label><input type="checkbox" name="cocokPerkantoran" checked={formData.cocokPerkantoran} onChange={handleChange} /> Cocok Perkantoran</label>
          <label><input type="checkbox" name="cocokHotel" checked={formData.cocokHotel} onChange={handleChange} /> Cocok Hotel</label>
          <label><input type="checkbox" name="cocokApartemen" checked={formData.cocokApartemen} onChange={handleChange} /> Cocok Apartemen</label>
          <label><input type="checkbox" name="cocokMixedUse" checked={formData.cocokMixedUse} onChange={handleChange} /> Cocok Mixed Use</label>
          <label><input type="checkbox" name="cocokRumahSakit" checked={formData.cocokRumahSakit} onChange={handleChange} /> Cocok Rumah Sakit</label>
          <label><input type="checkbox" name="cocokSekolah" checked={formData.cocokSekolah} onChange={handleChange} /> Cocok Sekolah</label>
          <label><input type="checkbox" name="cocokShowroom" checked={formData.cocokShowroom} onChange={handleChange} /> Cocok Showroom</label>
          <label><input type="checkbox" name="cocokSpbu" checked={formData.cocokSpbu} onChange={handleChange} /> Cocok SPBU</label>
          <label><input type="checkbox" name="cocokRestoran" checked={formData.cocokRestoran} onChange={handleChange} /> Cocok Restoran</label>
          <label><input type="checkbox" name="cocokGudang" checked={formData.cocokGudang} onChange={handleChange} /> Cocok Gudang</label>
        </div>
      </fieldset>

      {/* 7. LINGKUNGAN SEKITAR (10 FIELD) */}
      <fieldset style={{ marginBottom: '20px', padding: '15px' }}>
        <legend><h2>7. Lingkungan Sekitar</h2></legend>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px' }}>
          <label><input type="checkbox" name="cbd" checked={formData.cbd} onChange={handleChange} /> CBD</label>
          <label><input type="checkbox" name="kawasanBisnis" checked={formData.kawasanBisnis} onChange={handleChange} /> Kawasan Bisnis</label>
          <label><input type="checkbox" name="kawasanPerkantoran" checked={formData.kawasanPerkantoran} onChange={handleChange} /> Kawasan Perkantoran</label>
          <label><input type="checkbox" name="kawasanIndustri" checked={formData.kawasanIndustri} onChange={handleChange} /> Kawasan Industri</label>
          <label><input type="checkbox" name="kawasanPerumahan" checked={formData.kawasanPerumahan} onChange={handleChange} /> Kawasan Perumahan</label>
          <label><input type="checkbox" name="dekatMall" checked={formData.dekatMall} onChange={handleChange} /> Dekat Mall</label>
          <label><input type="checkbox" name="dekatHotel" checked={formData.dekatHotel} onChange={handleChange} /> Dekat Hotel</label>
          <label><input type="checkbox" name="dekatRumahSakit" checked={formData.dekatRumahSakit} onChange={handleChange} /> Dekat Rumah Sakit</label>
          <label><input type="checkbox" name="dekatKampus" checked={formData.dekatKampus} onChange={handleChange} /> Dekat Kampus</label>
          <label><input type="checkbox" name="dekatTempatWisata" checked={formData.dekatTempatWisata} onChange={handleChange} /> Dekat Tempat Wisata</label>
        </div>
      </fieldset>

      {/* 8. LEGALITAS (11 FIELD) */}
      <fieldset style={{ marginBottom: '20px', padding: '15px' }}>
        <legend><h2>8. Legalitas</h2></legend>
        <div style={{ marginBottom: '15px' }}>
          <label>Sertifikat</label>
          <select name="sertifikat" value={formData.sertifikat} onChange={handleChange} style={{ width: '100%', maxWidth: '300px', display: 'block', marginTop: '5px' }}>
            <option value="">-- Pilih Sertifikat --</option>
            <option value="SHM">SHM</option>
            <option value="HGB">HGB</option>
            <option value="Hak Pakai">Hak Pakai</option>
            <option value="HPL">HPL</option>
            <option value="AJB">AJB</option>
            <option value="PPJB">PPJB</option>
            <option value="Lainnya">Lainnya</option>
          </select>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px' }}>
          <label><input type="checkbox" name="shm" checked={formData.shm} onChange={handleChange} /> SHM</label>
          <label><input type="checkbox" name="hgb" checked={formData.hgb} onChange={handleChange} /> HGB</label>
          <label><input type="checkbox" name="hakPakai" checked={formData.hakPakai} onChange={handleChange} /> Hak Pakai</label>
          <label><input type="checkbox" name="hpl" checked={formData.hpl} onChange={handleChange} /> HPL</label>
          <label><input type="checkbox" name="ajb" checked={formData.ajb} onChange={handleChange} /> AJB</label>
          <label><input type="checkbox" name="ppjb" checked={formData.ppjb} onChange={handleChange} /> PPJB</label>
          <label><input type="checkbox" name="pbbLengkap" checked={formData.pbbLengkap} onChange={handleChange} /> PBB Lengkap</label>
          <label><input type="checkbox" name="kkpr" checked={formData.kkpr} onChange={handleChange} /> KKPR</label>
          <label><input type="checkbox" name="amdal" checked={formData.amdal} onChange={handleChange} /> AMDAL</label>
          <label><input type="checkbox" name="sitePlanDisetujui" checked={formData.sitePlanDisetujui} onChange={handleChange} /> Site Plan Disetujui</label>
        </div>
      </fieldset>

      {/* 9. INFORMASI INVESTASI (8 FIELD) */}
      <fieldset style={{ marginBottom: '20px', padding: '15px' }}>
        <legend><h2>9. Informasi Investasi</h2></legend>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px' }}>
          <label><input type="checkbox" name="cocokInvestasi" checked={formData.cocokInvestasi} onChange={handleChange} /> Cocok Investasi</label>
          <label><input type="checkbox" name="capitalGainTinggi" checked={formData.capitalGainTinggi} onChange={handleChange} /> Capital Gain Tinggi</label>
          <label><input type="checkbox" name="roiPotensialTinggi" checked={formData.roiPotensialTinggi} onChange={handleChange} /> ROI Potensial Tinggi</label>
          <label><input type="checkbox" name="buildToSuit" checked={formData.buildToSuit} onChange={handleChange} /> Build to Suit</label>
          <label><input type="checkbox" name="jointVenture" checked={formData.jointVenture} onChange={handleChange} /> Joint Venture</label>
          <label><input type="checkbox" name="bisaKpr" checked={formData.bisaKpr} onChange={handleChange} /> Bisa KPR</label>
          <label><input type="checkbox" name="bisaCicilanDeveloper" checked={formData.bisaCicilanDeveloper} onChange={handleChange} /> Bisa Cicilan Developer</label>
          <label><input type="checkbox" name="potensiSewaTinggi" checked={formData.potensiSewaTinggi} onChange={handleChange} /> Potensi Sewa Tinggi</label>
        </div>
      </fieldset>

      {/* 10. INFORMASI TAMBAHAN (6 FIELD) */}
      <fieldset style={{ marginBottom: '20px', padding: '15px' }}>
        <legend><h2>10. Informasi Tambahan</h2></legend>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px', marginBottom: '15px' }}>
          <label><input type="checkbox" name="sudahDipagar" checked={formData.sudahDipagar} onChange={handleChange} /> Sudah Dipagar</label>
          <label><input type="checkbox" name="sudahDiurug" checked={formData.sudahDiurug} onChange={handleChange} /> Sudah Diurug</label>
          <label><input type="checkbox" name="bebasBanjir" checked={formData.bebasBanjir} onChange={handleChange} /> Bebas Banjir</label>
          <label><input type="checkbox" name="siapAjb" checked={formData.siapAjb} onChange={handleChange} /> Siap AJB</label>
          <label><input type="checkbox" name="tidakDalamSengketa" checked={formData.tidakDalamSengketa} onChange={handleChange} /> Tidak Dalam Sengketa</label>
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '5px' }}>Catatan Tambahan</label>
          <textarea name="catatanTambahan" value={formData.catatanTambahan} onChange={handleChange} rows={4} style={{ width: '100%' }} />
        </div>
      </fieldset>

      <button type="submit" style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>Simpan Iklan Tanah Komersial</button>
    </form>
  );
};

export default FormTanahKomersial;