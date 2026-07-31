import React, { useState } from 'react';

// --- INTERFACES & TYPES ---
export interface FormTanahPerikananData {
  // 1. Informasi Dasar (8)
  judulIklan: string;
  jenisTransaksi: string;
  namaPerikanan: string;
  jenisBudidayaSelect: string;
  statusKepemilikan: string;
  kondisiProperti: string;
  statusOperasional: string;
  statusListing: string;

  // 2. Informasi Lahan (12)
  luasLahanHa: number | '';
  luasLahanM2: number | '';
  luasKolamTambakM2: number | '';
  jumlahKolam: number | '';
  jumlahPetakTambak: number | '';
  bentukLahan: string;
  konturLahan: string;
  jenisTanah: string;
  elevasiMdpl: number | '';
  drainase: string;
  bebasBanjir: boolean;
  siapOperasionalLahan: boolean;

  // 3. Jenis Budidaya (12)
  tambakUdang: boolean;
  tambakBandeng: boolean;
  kolamIkanAirTawar: boolean;
  budidayaLele: boolean;
  budidayaNila: boolean;
  budidayaGurame: boolean;
  budidayaPatin: boolean;
  budidayaIkanMas: boolean;
  hatcheryBudidaya: boolean;
  kerambaJaringApung: boolean;
  budidayaRumputLaut: boolean;
  budidayaKepiting: boolean;

  // 4. Infrastruktur (12)
  jalanAspal: boolean;
  jalanTruk: boolean;
  listrikPln: boolean;
  genset: boolean;
  gudang: boolean;
  rumahPenjaga: boolean;
  kantorOperasional: boolean;
  workshop: boolean;
  pagar: boolean;
  posJaga: boolean;
  internet: boolean;
  cctv: boolean;

  // 5. Sistem Air (10)
  airTawar: boolean;
  airPayau: boolean;
  airLaut: boolean;
  saluranInlet: boolean;
  saluranOutlet: boolean;
  pompaAir: boolean;
  aerator: boolean;
  reservoir: boolean;
  kolamPenampungan: boolean;
  instalasiPengolahanAir: boolean;

  // 6. Fasilitas Produksi (10)
  hatcheryFasilitas: boolean;
  nursery: boolean;
  kolamPembesaran: boolean;
  tempatSortasi: boolean;
  packingHouse: boolean;
  coldStorage: boolean;
  icePlant: boolean;
  loadingArea: boolean;
  laboratorium: boolean;
  gudangPakan: boolean;

  // 7. Produktivitas (8)
  sedangProduksi: boolean;
  produksiPerSiklus: number | '';
  produksiPerTahun: number | '';
  kapasitasProduksi: number | '';
  sertifikasiCbib: boolean;
  sertifikasiCpib: boolean;
  smartAquaculture: boolean;
  sistemBioflok: boolean;

  // 8. Lingkungan (8)
  dekatSungai: boolean;
  dekatDanau: boolean;
  dekatPantai: boolean;
  dekatPelabuhanPerikanan: boolean;
  dekatPasarIkan: boolean;
  dekatPabrikEs: boolean;
  dekatJalanRaya: boolean;
  zonaPerikanan: boolean;

  // 9. Legalitas (10)
  sertifikat: string;
  shm: boolean;
  hgb: boolean;
  hakPakai: boolean;
  ajb: boolean;
  pbbLengkap: boolean;
  nib: boolean;
  izinUsahaPerikanan: boolean;
  amdalUklUpl: boolean;
  kkpr: boolean;

  // 10. Potensi Pengembangan (8)
  cocokTambakUdang: boolean;
  cocokTambakIkan: boolean;
  cocokHatchery: boolean;
  cocokAquacultureModern: boolean;
  cocokPengolahanHasil: boolean;
  cocokInvestasi: boolean;
  buildToSuit: boolean;
  potensiEkspor: boolean;

  // 11. Informasi Tambahan (6)
  alatProduksiTermasuk: boolean;
  kendaraanOperasional: boolean;
  sdmTersedia: boolean;
  siapOperasionalTambahan: boolean;
  dokumenLengkap: boolean;
  catatanTambahan: string;
}

const initialFormData: FormTanahPerikananData = {
  // 1. Informasi Dasar
  judulIklan: '',
  jenisTransaksi: '',
  namaPerikanan: '',
  jenisBudidayaSelect: '',
  statusKepemilikan: '',
  kondisiProperti: '',
  statusOperasional: '',
  statusListing: '',

  // 2. Informasi Lahan
  luasLahanHa: '',
  luasLahanM2: '',
  luasKolamTambakM2: '',
  jumlahKolam: '',
  jumlahPetakTambak: '',
  bentukLahan: '',
  konturLahan: '',
  jenisTanah: '',
  elevasiMdpl: '',
  drainase: '',
  bebasBanjir: false,
  siapOperasionalLahan: false,

  // 3. Jenis Budidaya
  tambakUdang: false,
  tambakBandeng: false,
  kolamIkanAirTawar: false,
  budidayaLele: false,
  budidayaNila: false,
  budidayaGurame: false,
  budidayaPatin: false,
  budidayaIkanMas: false,
  hatcheryBudidaya: false,
  kerambaJaringApung: false,
  budidayaRumputLaut: false,
  budidayaKepiting: false,

  // 4. Infrastruktur
  jalanAspal: false,
  jalanTruk: false,
  listrikPln: false,
  genset: false,
  gudang: false,
  rumahPenjaga: false,
  kantorOperasional: false,
  workshop: false,
  pagar: false,
  posJaga: false,
  internet: false,
  cctv: false,

  // 5. Sistem Air
  airTawar: false,
  airPayau: false,
  airLaut: false,
  saluranInlet: false,
  saluranOutlet: false,
  pompaAir: false,
  aerator: false,
  reservoir: false,
  kolamPenampungan: false,
  instalasiPengolahanAir: false,

  // 6. Fasilitas Produksi
  hatcheryFasilitas: false,
  nursery: false,
  kolamPembesaran: false,
  tempatSortasi: false,
  packingHouse: false,
  coldStorage: false,
  icePlant: false,
  loadingArea: false,
  laboratorium: false,
  gudangPakan: false,

  // 7. Produktivitas
  sedangProduksi: false,
  produksiPerSiklus: '',
  produksiPerTahun: '',
  kapasitasProduksi: '',
  sertifikasiCbib: false,
  sertifikasiCpib: false,
  smartAquaculture: false,
  sistemBioflok: false,

  // 8. Lingkungan
  dekatSungai: false,
  dekatDanau: false,
  dekatPantai: false,
  dekatPelabuhanPerikanan: false,
  dekatPasarIkan: false,
  dekatPabrikEs: false,
  dekatJalanRaya: false,
  zonaPerikanan: false,

  // 9. Legalitas
  sertifikat: '',
  shm: false,
  hgb: false,
  hakPakai: false,
  ajb: false,
  pbbLengkap: false,
  nib: false,
  izinUsahaPerikanan: false,
  amdalUklUpl: false,
  kkpr: false,

  // 10. Potensi Pengembangan
  cocokTambakUdang: false,
  cocokTambakIkan: false,
  cocokHatchery: false,
  cocokAquacultureModern: false,
  cocokPengolahanHasil: false,
  cocokInvestasi: false,
  buildToSuit: false,
  potensiEkspor: false,

  // 11. Informasi Tambahan
  alatProduksiTermasuk: false,
  kendaraanOperasional: false,
  sdmTersedia: false,
  siapOperasionalTambahan: false,
  dokumenLengkap: false,
  catatanTambahan: '',
};

export const FormTanahPerikanan: React.FC = () => {
  const [formData, setFormData] = useState<FormTanahPerikananData>(initialFormData);

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
      <h1>Form Klasifikasi Tanah Perikanan (Aquaculture / Fishery Land)</h1>
      <p style={{ color: '#555' }}>
        Lahan yang digunakan atau diperuntukkan untuk kegiatan budidaya ikan air tawar, air payau, maupun air laut (tambak, kolam, hatchery, keramba, hingga kawasan aquaculture terpadu)[cite: 4].
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
            <label>Nama Perikanan</label>
            <input type="text" name="namaPerikanan" value={formData.namaPerikanan} onChange={handleChange} style={{ width: '100%' }} />
          </div>
          <div>
            <label>Jenis Budidaya *</label>
            <select name="jenisBudidayaSelect" value={formData.jenisBudidayaSelect} onChange={handleChange} required style={{ width: '100%' }}>
              <option value="">-- Pilih --</option>
              <option value="Tambak Udang">Tambak Udang</option>
              <option value="Tambak Bandeng">Tambak Bandeng</option>
              <option value="Kolam Air Tawar">Kolam Air Tawar</option>
              <option value="Lele">Lele</option>
              <option value="Nila">Nila</option>
              <option value="Gurame">Gurame</option>
              <option value="Patin">Patin</option>
              <option value="Ikan Mas">Ikan Mas</option>
              <option value="Hatchery">Hatchery</option>
              <option value="Keramba Jaring Apung">Keramba Jaring Apung</option>
              <option value="Budidaya Rumput Laut">Budidaya Rumput Laut</option>
              <option value="Budidaya Kepiting">Budidaya Kepiting</option>
            </select>
          </div>
          <div>
            <label>Status Kepemilikan *</label>
            <select name="statusKepemilikan" value={formData.statusKepemilikan} onChange={handleChange} required style={{ width: '100%' }}>
              <option value="">-- Pilih --</option>
              <option value="SHM">SHM</option>
              <option value="HGB">HGB</option>
              <option value="Hak Pakai">Hak Pakai</option>
              <option value="AJB">AJB</option>
              <option value="Lainnya">Lainnya</option>
            </select>
          </div>
          <div>
            <label>Kondisi Properti *</label>
            <select name="kondisiProperti" value={formData.kondisiProperti} onChange={handleChange} required style={{ width: '100%' }}>
              <option value="">-- Pilih --</option>
              <option value="Siap Operasional">Siap Operasional</option>
              <option value="Sedang Beroperasi">Sedang Beroperasi</option>
              <option value="Baru">Baru</option>
              <option value="Perlu Renovasi">Perlu Renovasi</option>
              <option value="Lahan Kosong">Lahan Kosong</option>
            </select>
          </div>
          <div>
            <label>Status Operasional *</label>
            <select name="statusOperasional" value={formData.statusOperasional} onChange={handleChange} required style={{ width: '100%' }}>
              <option value="">-- Pilih --</option>
              <option value="Beroperasi">Beroperasi</option>
              <option value="Tidak Beroperasi">Tidak Beroperasi</option>
              <option value="Dalam Pengembangan">Dalam Pengembangan</option>
              <option value="Siap Operasional">Siap Operasional</option>
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
            <label>Luas Lahan (Ha)</label>
            <input type="number" step="0.01" name="luasLahanHa" value={formData.luasLahanHa} onChange={handleChange} style={{ width: '100%' }} />
          </div>
          <div>
            <label>Luas Lahan (m²)</label>
            <input type="number" name="luasLahanM2" value={formData.luasLahanM2} onChange={handleChange} style={{ width: '100%' }} />
          </div>
          <div>
            <label>Luas Kolam / Tambak (m²)</label>
            <input type="number" name="luasKolamTambakM2" value={formData.luasKolamTambakM2} onChange={handleChange} style={{ width: '100%' }} />
          </div>
          <div>
            <label>Jumlah Kolam</label>
            <input type="number" name="jumlahKolam" value={formData.jumlahKolam} onChange={handleChange} style={{ width: '100%' }} />
          </div>
          <div>
            <label>Jumlah Petak Tambak</label>
            <input type="number" name="jumlahPetakTambak" value={formData.jumlahPetakTambak} onChange={handleChange} style={{ width: '100%' }} />
          </div>
          <div>
            <label>Bentuk Lahan</label>
            <select name="bentukLahan" value={formData.bentukLahan} onChange={handleChange} style={{ width: '100%' }}>
              <option value="">-- Pilih --</option>
              <option value="Persegi">Persegi</option>
              <option value="Persegi Panjang">Persegi Panjang</option>
              <option value="Trapesium">Trapesium</option>
              <option value="Segitiga">Segitiga</option>
              <option value="Tidak Beraturan">Tidak Beraturan</option>
            </select>
          </div>
          <div>
            <label>Kontur Lahan</label>
            <select name="konturLahan" value={formData.konturLahan} onChange={handleChange} style={{ width: '100%' }}>
              <option value="">-- Pilih --</option>
              <option value="Datar">Datar</option>
              <option value="Landai">Landai</option>
              <option value="Miring">Miring</option>
              <option value="Berkontur">Berkontur</option>
            </select>
          </div>
          <div>
            <label>Jenis Tanah</label>
            <select name="jenisTanah" value={formData.jenisTanah} onChange={handleChange} style={{ width: '100%' }}>
              <option value="">-- Pilih --</option>
              <option value="Liat">Liat</option>
              <option value="Lempung">Lempung</option>
              <option value="Berpasir">Berpasir</option>
              <option value="Gambut">Gambut</option>
              <option value="Aluvial">Aluvial</option>
            </select>
          </div>
          <div>
            <label>Elevasi (mdpl)</label>
            <input type="number" name="elevasiMdpl" value={formData.elevasiMdpl} onChange={handleChange} style={{ width: '100%' }} />
          </div>
          <div>
            <label>Drainase</label>
            <select name="drainase" value={formData.drainase} onChange={handleChange} style={{ width: '100%' }}>
              <option value="">-- Pilih --</option>
              <option value="Baik">Baik</option>
              <option value="Cukup">Cukup</option>
              <option value="Kurang">Kurang</option>
              <option value="Sistem Gravitasi">Sistem Gravitasi</option>
              <option value="Sistem Pompa">Sistem Pompa</option>
            </select>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginTop: '15px' }}>
          <label><input type="checkbox" name="bebasBanjir" checked={formData.bebasBanjir} onChange={handleChange} /> Bebas Banjir</label>
          <label><input type="checkbox" name="siapOperasionalLahan" checked={formData.siapOperasionalLahan} onChange={handleChange} /> Siap Operasional</label>
        </div>
      </fieldset>

      {/* 3. JENIS BUDIDAYA (12 FIELD) */}
      <fieldset style={{ marginBottom: '20px', padding: '15px' }}>
        <legend><h2>3. Jenis Budidaya</h2></legend>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px' }}>
          <label><input type="checkbox" name="tambakUdang" checked={formData.tambakUdang} onChange={handleChange} /> Tambak Udang</label>
          <label><input type="checkbox" name="tambakBandeng" checked={formData.tambakBandeng} onChange={handleChange} /> Tambak Bandeng</label>
          <label><input type="checkbox" name="kolamIkanAirTawar" checked={formData.kolamIkanAirTawar} onChange={handleChange} /> Kolam Ikan Air Tawar</label>
          <label><input type="checkbox" name="budidayaLele" checked={formData.budidayaLele} onChange={handleChange} /> Budidaya Lele</label>
          <label><input type="checkbox" name="budidayaNila" checked={formData.budidayaNila} onChange={handleChange} /> Budidaya Nila</label>
          <label><input type="checkbox" name="budidayaGurame" checked={formData.budidayaGurame} onChange={handleChange} /> Budidaya Gurame</label>
          <label><input type="checkbox" name="budidayaPatin" checked={formData.budidayaPatin} onChange={handleChange} /> Budidaya Patin</label>
          <label><input type="checkbox" name="budidayaIkanMas" checked={formData.budidayaIkanMas} onChange={handleChange} /> Budidaya Ikan Mas</label>
          <label><input type="checkbox" name="hatcheryBudidaya" checked={formData.hatcheryBudidaya} onChange={handleChange} /> Hatchery</label>
          <label><input type="checkbox" name="kerambaJaringApung" checked={formData.kerambaJaringApung} onChange={handleChange} /> Keramba Jaring Apung</label>
          <label><input type="checkbox" name="budidayaRumputLaut" checked={formData.budidayaRumputLaut} onChange={handleChange} /> Budidaya Rumput Laut</label>
          <label><input type="checkbox" name="budidayaKepiting" checked={formData.budidayaKepiting} onChange={handleChange} /> Budidaya Kepiting</label>
        </div>
      </fieldset>

      {/* 4. INFRASTRUKTUR (12 FIELD) */}
      <fieldset style={{ marginBottom: '20px', padding: '15px' }}>
        <legend><h2>4. Infrastruktur</h2></legend>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px' }}>
          <label><input type="checkbox" name="jalanAspal" checked={formData.jalanAspal} onChange={handleChange} /> Jalan Aspal</label>
          <label><input type="checkbox" name="jalanTruk" checked={formData.jalanTruk} onChange={handleChange} /> Jalan Truk</label>
          <label><input type="checkbox" name="listrikPln" checked={formData.listrikPln} onChange={handleChange} /> Listrik PLN</label>
          <label><input type="checkbox" name="genset" checked={formData.genset} onChange={handleChange} /> Genset</label>
          <label><input type="checkbox" name="gudang" checked={formData.gudang} onChange={handleChange} /> Gudang</label>
          <label><input type="checkbox" name="rumahPenjaga" checked={formData.rumahPenjaga} onChange={handleChange} /> Rumah Penjaga</label>
          <label><input type="checkbox" name="kantorOperasional" checked={formData.kantorOperasional} onChange={handleChange} /> Kantor Operasional</label>
          <label><input type="checkbox" name="workshop" checked={formData.workshop} onChange={handleChange} /> Workshop</label>
          <label><input type="checkbox" name="pagar" checked={formData.pagar} onChange={handleChange} /> Pagar</label>
          <label><input type="checkbox" name="posJaga" checked={formData.posJaga} onChange={handleChange} /> Pos Jaga</label>
          <label><input type="checkbox" name="internet" checked={formData.internet} onChange={handleChange} /> Internet</label>
          <label><input type="checkbox" name="cctv" checked={formData.cctv} onChange={handleChange} /> CCTV</label>
        </div>
      </fieldset>

      {/* 5. SISTEM AIR (10 FIELD) */}
      <fieldset style={{ marginBottom: '20px', padding: '15px' }}>
        <legend><h2>5. Sistem Air</h2></legend>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px' }}>
          <label><input type="checkbox" name="airTawar" checked={formData.airTawar} onChange={handleChange} /> Air Tawar</label>
          <label><input type="checkbox" name="airPayau" checked={formData.airPayau} onChange={handleChange} /> Air Payau</label>
          <label><input type="checkbox" name="airLaut" checked={formData.airLaut} onChange={handleChange} /> Air Laut</label>
          <label><input type="checkbox" name="saluranInlet" checked={formData.saluranInlet} onChange={handleChange} /> Saluran Inlet</label>
          <label><input type="checkbox" name="saluranOutlet" checked={formData.saluranOutlet} onChange={handleChange} /> Saluran Outlet</label>
          <label><input type="checkbox" name="pompaAir" checked={formData.pompaAir} onChange={handleChange} /> Pompa Air</label>
          <label><input type="checkbox" name="aerator" checked={formData.aerator} onChange={handleChange} /> Aerator</label>
          <label><input type="checkbox" name="reservoir" checked={formData.reservoir} onChange={handleChange} /> Reservoir</label>
          <label><input type="checkbox" name="kolamPenampungan" checked={formData.kolamPenampungan} onChange={handleChange} /> Kolam Penampungan</label>
          <label><input type="checkbox" name="instalasiPengolahanAir" checked={formData.instalasiPengolahanAir} onChange={handleChange} /> Instalasi Pengolahan Air</label>
        </div>
      </fieldset>

      {/* 6. FASILITAS PRODUKSI (10 FIELD) */}
      <fieldset style={{ marginBottom: '20px', padding: '15px' }}>
        <legend><h2>6. Fasilitas Produksi</h2></legend>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px' }}>
          <label><input type="checkbox" name="hatcheryFasilitas" checked={formData.hatcheryFasilitas} onChange={handleChange} /> Hatchery</label>
          <label><input type="checkbox" name="nursery" checked={formData.nursery} onChange={handleChange} /> Nursery</label>
          <label><input type="checkbox" name="kolamPembesaran" checked={formData.kolamPembesaran} onChange={handleChange} /> Kolam Pembesaran</label>
          <label><input type="checkbox" name="tempatSortasi" checked={formData.tempatSortasi} onChange={handleChange} /> Tempat Sortasi</label>
          <label><input type="checkbox" name="packingHouse" checked={formData.packingHouse} onChange={handleChange} /> Packing House</label>
          <label><input type="checkbox" name="coldStorage" checked={formData.coldStorage} onChange={handleChange} /> Cold Storage</label>
          <label><input type="checkbox" name="icePlant" checked={formData.icePlant} onChange={handleChange} /> Ice Plant</label>
          <label><input type="checkbox" name="loadingArea" checked={formData.loadingArea} onChange={handleChange} /> Loading Area</label>
          <label><input type="checkbox" name="laboratorium" checked={formData.laboratorium} onChange={handleChange} /> Laboratorium</label>
          <label><input type="checkbox" name="gudangPakan" checked={formData.gudangPakan} onChange={handleChange} /> Gudang Pakan</label>
        </div>
      </fieldset>

      {/* 7. PRODUKTIVITAS (8 FIELD) */}
      <fieldset style={{ marginBottom: '20px', padding: '15px' }}>
        <legend><h2>7. Produktivitas</h2></legend>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '15px' }}>
          <div>
            <label>Produksi per Siklus</label>
            <input type="number" name="produksiPerSiklus" value={formData.produksiPerSiklus} onChange={handleChange} style={{ width: '100%' }} />
          </div>
          <div>
            <label>Produksi per Tahun</label>
            <input type="number" name="produksiPerTahun" value={formData.produksiPerTahun} onChange={handleChange} style={{ width: '100%' }} />
          </div>
          <div>
            <label>Kapasitas Produksi</label>
            <input type="number" name="kapasitasProduksi" value={formData.kapasitasProduksi} onChange={handleChange} style={{ width: '100%' }} />
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px' }}>
          <label><input type="checkbox" name="sedangProduksi" checked={formData.sedangProduksi} onChange={handleChange} /> Sedang Produksi</label>
          <label><input type="checkbox" name="sertifikasiCbib" checked={formData.sertifikasiCbib} onChange={handleChange} /> Sertifikasi CBIB</label>
          <label><input type="checkbox" name="sertifikasiCpib" checked={formData.sertifikasiCpib} onChange={handleChange} /> Sertifikasi CPIB</label>
          <label><input type="checkbox" name="smartAquaculture" checked={formData.smartAquaculture} onChange={handleChange} /> Smart Aquaculture</label>
          <label><input type="checkbox" name="sistemBioflok" checked={formData.sistemBioflok} onChange={handleChange} /> Sistem Bioflok</label>
        </div>
      </fieldset>

      {/* 8. LINGKUNGAN (8 FIELD) */}
      <fieldset style={{ marginBottom: '20px', padding: '15px' }}>
        <legend><h2>8. Lingkungan</h2></legend>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px' }}>
          <label><input type="checkbox" name="dekatSungai" checked={formData.dekatSungai} onChange={handleChange} /> Dekat Sungai</label>
          <label><input type="checkbox" name="dekatDanau" checked={formData.dekatDanau} onChange={handleChange} /> Dekat Danau</label>
          <label><input type="checkbox" name="dekatPantai" checked={formData.dekatPantai} onChange={handleChange} /> Dekat Pantai</label>
          <label><input type="checkbox" name="dekatPelabuhanPerikanan" checked={formData.dekatPelabuhanPerikanan} onChange={handleChange} /> Dekat Pelabuhan Perikanan</label>
          <label><input type="checkbox" name="dekatPasarIkan" checked={formData.dekatPasarIkan} onChange={handleChange} /> Dekat Pasar Ikan</label>
          <label><input type="checkbox" name="dekatPabrikEs" checked={formData.dekatPabrikEs} onChange={handleChange} /> Dekat Pabrik Es</label>
          <label><input type="checkbox" name="dekatJalanRaya" checked={formData.dekatJalanRaya} onChange={handleChange} /> Dekat Jalan Raya</label>
          <label><input type="checkbox" name="zonaPerikanan" checked={formData.zonaPerikanan} onChange={handleChange} /> Zona Perikanan</label>
        </div>
      </fieldset>

      {/* 9. LEGALITAS (10 FIELD) */}
      <fieldset style={{ marginBottom: '20px', padding: '15px' }}>
        <legend><h2>9. Legalitas</h2></legend>
        <div style={{ marginBottom: '15px' }}>
          <label>Sertifikat</label>
          <select name="sertifikat" value={formData.sertifikat} onChange={handleChange} style={{ width: '100%', maxWidth: '300px', display: 'block', marginTop: '5px' }}>
            <option value="">-- Pilih Sertifikat --</option>
            <option value="SHM">SHM</option>
            <option value="HGB">HGB</option>
            <option value="Hak Pakai">Hak Pakai</option>
            <option value="AJB">AJB</option>
            <option value="Lainnya">Lainnya</option>
          </select>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px' }}>
          <label><input type="checkbox" name="shm" checked={formData.shm} onChange={handleChange} /> SHM</label>
          <label><input type="checkbox" name="hgb" checked={formData.hgb} onChange={handleChange} /> HGB</label>
          <label><input type="checkbox" name="hakPakai" checked={formData.hakPakai} onChange={handleChange} /> Hak Pakai</label>
          <label><input type="checkbox" name="ajb" checked={formData.ajb} onChange={handleChange} /> AJB</label>
          <label><input type="checkbox" name="pbbLengkap" checked={formData.pbbLengkap} onChange={handleChange} /> PBB Lengkap</label>
          <label><input type="checkbox" name="nib" checked={formData.nib} onChange={handleChange} /> NIB</label>
          <label><input type="checkbox" name="izinUsahaPerikanan" checked={formData.izinUsahaPerikanan} onChange={handleChange} /> Izin Usaha Perikanan</label>
          <label><input type="checkbox" name="amdalUklUpl" checked={formData.amdalUklUpl} onChange={handleChange} /> AMDAL / UKL-UPL</label>
          <label><input type="checkbox" name="kkpr" checked={formData.kkpr} onChange={handleChange} /> KKPR</label>
        </div>
      </fieldset>

      {/* 10. POTENSI PENGEMBANGAN (8 FIELD) */}
      <fieldset style={{ marginBottom: '20px', padding: '15px' }}>
        <legend><h2>10. Potensi Pengembangan</h2></legend>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px' }}>
          <label><input type="checkbox" name="cocokTambakUdang" checked={formData.cocokTambakUdang} onChange={handleChange} /> Cocok Tambak Udang</label>
          <label><input type="checkbox" name="cocokTambakIkan" checked={formData.cocokTambakIkan} onChange={handleChange} /> Cocok Tambak Ikan</label>
          <label><input type="checkbox" name="cocokHatchery" checked={formData.cocokHatchery} onChange={handleChange} /> Cocok Hatchery</label>
          <label><input type="checkbox" name="cocokAquacultureModern" checked={formData.cocokAquacultureModern} onChange={handleChange} /> Cocok Aquaculture Modern</label>
          <label><input type="checkbox" name="cocokPengolahanHasil" checked={formData.cocokPengolahanHasil} onChange={handleChange} /> Cocok Pengolahan Hasil</label>
          <label><input type="checkbox" name="cocokInvestasi" checked={formData.cocokInvestasi} onChange={handleChange} /> Cocok Investasi</label>
          <label><input type="checkbox" name="buildToSuit" checked={formData.buildToSuit} onChange={handleChange} /> Build to Suit</label>
          <label><input type="checkbox" name="potensiEkspor" checked={formData.potensiEkspor} onChange={handleChange} /> Potensi Ekspor</label>
        </div>
      </fieldset>

      {/* 11. INFORMASI TAMBAHAN (6 FIELD) */}
      <fieldset style={{ marginBottom: '20px', padding: '15px' }}>
        <legend><h2>11. Informasi Tambahan</h2></legend>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px', marginBottom: '15px' }}>
          <label><input type="checkbox" name="alatProduksiTermasuk" checked={formData.alatProduksiTermasuk} onChange={handleChange} /> Alat Produksi Termasuk</label>
          <label><input type="checkbox" name="kendaraanOperasional" checked={formData.kendaraanOperasional} onChange={handleChange} /> Kendaraan Operasional</label>
          <label><input type="checkbox" name="sdmTersedia" checked={formData.sdmTersedia} onChange={handleChange} /> SDM Tersedia</label>
          <label><input type="checkbox" name="siapOperasionalTambahan" checked={formData.siapOperasionalTambahan} onChange={handleChange} /> Siap Operasional</label>
          <label><input type="checkbox" name="dokumenLengkap" checked={formData.dokumenLengkap} onChange={handleChange} /> Dokumen Lengkap</label>
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '5px' }}>Catatan Tambahan</label>
          <textarea name="catatanTambahan" value={formData.catatanTambahan} onChange={handleChange} rows={4} style={{ width: '100%' }} />
        </div>
      </fieldset>

      <button type="submit" style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>Simpan Iklan Tanah Perikanan</button>
    </form>
  );
};

export default FormTanahPerikanan;