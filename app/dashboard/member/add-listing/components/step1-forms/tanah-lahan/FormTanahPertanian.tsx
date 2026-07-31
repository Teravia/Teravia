import React, { useState } from 'react';

// --- INTERFACES & TYPES ---
export interface FormTanahPertanianData {
  // 1. Informasi Dasar (8)
  judulIklan: string;
  jenisTransaksi: string;
  namaLahan: string;
  jenisPertanianSelect: string;
  statusKepemilikan: string;
  kondisiLahan: string;
  statusPenggunaan: string;
  statusListing: string;

  // 2. Informasi Lahan (12)
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

  // 3. Jenis Pertanian (12)
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

  // 4. Sumber Air & Irigasi (10)
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

  // 5. Infrastruktur (10)
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

  // 6. Produktivitas (8)
  sedangProduksi: boolean;
  masapanen: string;
  frekuensiPanenTahun: number | '';
  produktivitasPerHa: number | '';
  sistemOrganik: boolean;
  sertifikasiOrganik: boolean;
  mekanisasiPertanian: boolean;
  smartFarming: boolean;

  // 7. Lingkungan (8)
  bebasBanjir: boolean;
  dekatSungai: boolean;
  dekatBendungan: boolean;
  dekatJalanRaya: boolean;
  dekatPasar: boolean;
  dekatKawasanIndustri: boolean;
  dekatPermukiman: boolean;
  dekatGudangDistribusu: boolean;

  // 8. Legalitas (10)
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

  // 9. Potensi Pengembangan (8)
  cocokSawah: boolean;
  cocokHortikultura: boolean;
  cocokGreenhouse: boolean;
  cocokPeternakan: boolean;
  cocokAgrowisata: boolean;
  cocokPerkebunan: boolean;
  cocokInvestasi: boolean;
  bisaMekanisasi: boolean;

  // 10. Informasi Tambahan (6)
  sudahDipagar: boolean;
  tersediaGudang: boolean;
  tersediaRumahPekerja: boolean;
  bebasSengketa: boolean;
  siapAjb: boolean;
  catatanTambahan: string;
}

const initialFormData: FormTanahPertanianData = {
  // 1. Informasi Dasar
  judulIklan: '',
  jenisTransaksi: '',
  namaLahan: '',
  jenisPertanianSelect: '',
  statusKepemilikan: '',
  kondisiLahan: '',
  statusPenggunaan: '',
  statusListing: '',

  // 2. Informasi Lahan
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

  // 3. Jenis Pertanian
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

  // 4. Sumber Air & Irigasi
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

  // 5. Infrastruktur
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

  // 6. Produktivitas
  sedangProduksi: false,
  masapanen: '',
  frekuensiPanenTahun: '',
  produktivitasPerHa: '',
  sistemOrganik: false,
  sertifikasiOrganik: false,
  mekanisasiPertanian: false,
  smartFarming: false,

  // 7. Lingkungan
  bebasBanjir: false,
  dekatSungai: false,
  dekatBendungan: false,
  dekatJalanRaya: false,
  dekatPasar: false,
  dekatKawasanIndustri: false,
  dekatPermukiman: false,
  dekatGudangDistribusu: false,

  // 8. Legalitas
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

  // 9. Potensi Pengembangan
  cocokSawah: false,
  cocokHortikultura: false,
  cocokGreenhouse: false,
  cocokPeternakan: false,
  cocokAgrowisata: false,
  cocokPerkebunan: false,
  cocokInvestasi: false,
  bisaMekanisasi: false,

  // 10. Informasi Tambahan
  sudahDipagar: false,
  tersediaGudang: false,
  tersediaRumahPekerja: false,
  bebasSengketa: false,
  siapAjb: false,
  catatanTambahan: '',
};

export const FormTanahPertanian: React.FC = () => {
  const [formData, setFormData] = useState<FormTanahPertanianData>(initialFormData);

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
      <h1>Form Klasifikasi Tanah Pertanian (Agricultural Land)</h1>
      <p style={{ color: '#555' }}>
        Lahan yang digunakan atau diperuntukkan untuk kegiatan budidaya pertanian seperti sawah, ladang, hortikultura, tanaman pangan, maupun pertanian modern[cite: 6].
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
            <label>Nama Lahan</label>
            <input type="text" name="namaLahan" value={formData.namaLahan} onChange={handleChange} style={{ width: '100%' }} />
          </div>
          <div>
            <label>Jenis Pertanian *</label>
            <select name="jenisPertanianSelect" value={formData.jenisPertanianSelect} onChange={handleChange} required style={{ width: '100%' }}>
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
            <label>Status Kepemilikan *</label>
            <select name="statusKepemilikan" value={formData.statusKepemilikan} onChange={handleChange} required style={{ width: '100%' }}>
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
          <div>
            <label>Kondisi Lahan *</label>
            <select name="kondisiLahan" value={formData.kondisiLahan} onChange={handleChange} required style={{ width: '100%' }}>
              <option value="">-- Pilih --</option>
              <option value="Produktif">Produktif</option>
              <option value="Siap Tanam">Siap Tanam</option>
              <option value="Sedang Produksi">Sedang Produksi</option>
              <option value="Bekas Sawah">Bekas Sawah</option>
              <option value="Lahan Tidur">Lahan Tidur</option>
              <option value="Perlu Pengolahan">Perlu Pengolahan</option>
            </select>
          </div>
          <div>
            <label>Status Penggunaan *</label>
            <select name="statusPenggunaan" value={formData.statusPenggunaan} onChange={handleChange} required style={{ width: '100%' }}>
              <option value="">-- Pilih --</option>
              <option value="Aktif Digarap">Aktif Digarap</option>
              <option value="Tidak Digarap">Tidak Digarap</option>
              <option value="Sewa/Bagi Hasil">Sewa/Bagi Hasil</option>
              <option value="Siap Garap">Siap Garap</option>
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
            <input type="number" name="luasTanahM2" value={formData.luasTanahM2} onChange={handleChange} style={{ width: '100%' }} />
          </div>
          <div>
            <label>Luas Tanah (Ha)</label>
            <input type="number" step="0.01" name="luasTanahHa" value={formData.luasTanahHa} onChange={handleChange} style={{ width: '100%' }} />
          </div>
          <div>
            <label>Panjang Lahan (m)</label>
            <input type="number" name="panjangLahanM" value={formData.panjangLahanM} onChange={handleChange} style={{ width: '100%' }} />
          </div>
          <div>
            <label>Lebar Lahan (m)</label>
            <input type="number" name="lebarLahanM" value={formData.lebarLahanM} onChange={handleChange} style={{ width: '100%' }} />
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
            <label>Kontur Tanah</label>
            <select name="konturTanah" value={formData.konturTanah} onChange={handleChange} style={{ width: '100%' }}>
              <option value="">-- Pilih --</option>
              <option value="Datar">Datar</option>
              <option value="Landai">Landai</option>

              <option value="Miring">Miring</option>
              <option value="Terasering">Terasering</option>
              <option value="Berkontur">Berkontur</option>
            </select>
          </div>
          <div>
            <label>Elevasi</label>
            <select name="elevasi" value={formData.elevasi} onChange={handleChange} style={{ width: '100%' }}>
              <option value="">-- Pilih --</option>
              <option value="Dataran Rendah (< 400 mdpl)">Dataran Rendah (&lt; 400 mdpl)</option>
              <option value="Dataran Sedang (400 - 700 mdpl)">Dataran Sedang (400 - 700 mdpl)</option>
              <option value="Dataran Tinggi (> 700 mdpl)">Dataran Tinggi (&gt; 700 mdpl)</option>
            </select>
          </div>
          <div>
            <label>Jenis Tanah</label>
            <select name="jenisTanah" value={formData.jenisTanah} onChange={handleChange} style={{ width: '100%' }}>
              <option value="">-- Pilih --</option>
              <option value="Aluvial">Aluvial</option>
              <option value="Andosol">Andosol</option>
              <option value="Latosol">Latosol</option>
              <option value="Regosol">Regosol</option>
              <option value="Grumosol">Grumosol</option>
              <option value="Mediteran">Mediteran</option>
              <option value="Gambut">Gambut</option>
              <option value="Podsolik">Podsolik</option>
            </select>
          </div>
          <div>
            <label>Tingkat Kesuburan</label>
            <select name="tingkatKesuburan" value={formData.tingkatKesuburan} onChange={handleChange} style={{ width: '100%' }}>
              <option value="">-- Pilih --</option>
              <option value="Sangat Tinggi">Sangat Tinggi</option>
              <option value="Tinggi">Tinggi</option>
              <option value="Sedang">Sedang</option>
              <option value="Rendah">Rendah</option>
            </select>
          </div>
          <div>
            <label>Kemiringan Lahan (%)</label>
            <input type="number" name="kemiringanLahanPersen" value={formData.kemiringanLahanPersen} onChange={handleChange} style={{ width: '100%' }} />
          </div>
          <div>
            <label>Drainase Lahan</label>
            <select name="drainaseLahan" value={formData.drainaseLahan} onChange={handleChange} style={{ width: '100%' }}>
              <option value="">-- Pilih --</option>
              <option value="Baik">Baik</option>
              <option value="Cukup">Cukup</option>
              <option value="Kurang">Kurang</option>
              <option value="Saluran Irigasi Baik">Saluran Irigasi Baik</option>
            </select>
          </div>
        </div>
        <div style={{ marginTop: '15px' }}>
          <label><input type="checkbox" name="sudahDigarap" checked={formData.sudahDigarap} onChange={handleChange} /> Sudah Digarap</label>
        </div>
      </fieldset>

      {/* 3. JENIS PERTANIAN (12 FIELD) */}
      <fieldset style={{ marginBottom: '20px', padding: '15px' }}>
        <legend><h2>3. Jenis Pertanian</h2></legend>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px' }}>
          <label><input type="checkbox" name="sawah" checked={formData.sawah} onChange={handleChange} /> Sawah</label>
          <label><input type="checkbox" name="ladang" checked={formData.ladang} onChange={handleChange} /> Ladang</label>
          <label><input type="checkbox" name="hortikultura" checked={formData.hortikultura} onChange={handleChange} /> Hortikultura</label>
          <label><input type="checkbox" name="padi" checked={formData.padi} onChange={handleChange} /> Padi</label>
          <label><input type="checkbox" name="jagung" checked={formData.jagung} onChange={handleChange} /> Jagung</label>
          <label><input type="checkbox" name="kedelai" checked={formData.kedelai} onChange={handleChange} /> Kedelai</label>
          <label><input type="checkbox" name="sayuran" checked={formData.sayuran} onChange={handleChange} /> Sayuran</label>
          <label><input type="checkbox" name="buahBuahan" checked={formData.buahBuahan} onChange={handleChange} /> Buah-buahan</label>
          <label><input type="checkbox" name="tanamanOrganik" checked={formData.tanamanOrganik} onChange={handleChange} /> Tanaman Organik</label>
          <label><input type="checkbox" name="greenhouse" checked={formData.greenhouse} onChange={handleChange} /> Greenhouse</label>
          <label><input type="checkbox" name="hidroponik" checked={formData.hidroponik} onChange={handleChange} /> Hidroponik</label>
          <label><input type="checkbox" name="pertanianTerpadu" checked={formData.pertanianTerpadu} onChange={handleChange} /> Pertanian Terpadu</label>
        </div>
      </fieldset>

      {/* 4. SUMBER AIR & IRIGASI (10 FIELD) */}
      <fieldset style={{ marginBottom: '20px', padding: '15px' }}>
        <legend><h2>4. Sumber Air & Irigasi</h2></legend>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px' }}>
          <label><input type="checkbox" name="irigasiTeknis" checked={formData.irigasiTeknis} onChange={handleChange} /> Irigasi Teknis</label>
          <label><input type="checkbox" name="irigasiSetengahTeknis" checked={formData.irigasiSetengahTeknis} onChange={handleChange} /> Irigasi Setengah Teknis</label>
          <label><input type="checkbox" name="irigasiSederhana" checked={formData.irigasiSederhana} onChange={handleChange} /> Irigasi Sederhana</label>
          <label><input type="checkbox" name="sumurBor" checked={formData.sumurBor} onChange={handleChange} /> Sumur Bor</label>
          <label><input type="checkbox" name="embung" checked={formData.embung} onChange={handleChange} /> Embung</label>
          <label><input type="checkbox" name="sungai" checked={formData.sungai} onChange={handleChange} /> Sungai</label>
          <label><input type="checkbox" name="mataAir" checked={formData.mataAir} onChange={handleChange} /> Mata Air</label>
          <label><input type="checkbox" name="saluranIrigasi" checked={formData.saluranIrigasi} onChange={handleChange} /> Saluran Irigasi</label>
          <label><input type="checkbox" name="pompaAir" checked={formData.pompaAir} onChange={handleChange} /> Pompa Air</label>
          <label><input type="checkbox" name="ketersediaanAirSepanjangTahun" checked={formData.ketersediaanAirSepanjangTahun} onChange={handleChange} /> Ketersediaan Air Sepanjang Tahun</label>
        </div>
      </fieldset>

      {/* 5. INFRASTRUKTUR (10 FIELD) */}
      <fieldset style={{ marginBottom: '20px', padding: '15px' }}>
        <legend><h2>5. Infrastruktur</h2></legend>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px' }}>
          <label><input type="checkbox" name="jalanAspal" checked={formData.jalanAspal} onChange={handleChange} /> Jalan Aspal</label>
          <label><input type="checkbox" name="jalanMakadam" checked={formData.jalanMakadam} onChange={handleChange} /> Jalan Makadam</label>
          <label><input type="checkbox" name="jalanTanah" checked={formData.jalanTanah} onChange={handleChange} /> Jalan Tanah</label>
          <label><input type="checkbox" name="aksesTruk" checked={formData.aksesTruk} onChange={handleChange} /> Akses Truk</label>
          <label><input type="checkbox" name="listrikPln" checked={formData.listrikPln} onChange={handleChange} /> Listrik PLN</label>
          <label><input type="checkbox" name="gudang" checked={formData.gudang} onChange={handleChange} /> Gudang</label>
          <label><input type="checkbox" name="rumahPenjaga" checked={formData.rumahPenjaga} onChange={handleChange} /> Rumah Penjaga</label>
          <label><input type="checkbox" name="pagar" checked={formData.pagar} onChange={handleChange} /> Pagar</label>
          <label><input type="checkbox" name="drainaseInfrastruktur" checked={formData.drainaseInfrastruktur} onChange={handleChange} /> Drainase</label>
          <label><input type="checkbox" name="internet" checked={formData.internet} onChange={handleChange} /> Internet</label>
        </div>
      </fieldset>

      {/* 6. PRODUKTIVITAS (8 FIELD) */}
      <fieldset style={{ marginBottom: '20px', padding: '15px' }}>
        <legend><h2>6. Produktivitas</h2></legend>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '15px' }}>
          <div>
            <label>Masa Panen</label>
            <select name="masapanen" value={formData.masapanen} onChange={handleChange} style={{ width: '100%' }}>
              <option value="">-- Pilih --</option>
              <option value="Bulanan">Bulanan</option>
              <option value="3 Bulan">3 Bulan</option>
              <option value="6 Bulan">6 Bulan</option>
              <option value="Tahunan">Tahunan</option>
              <option value="Musiman">Musiman</option>
            </select>
          </div>
          <div>
            <label>Frekuensi Panen / Tahun</label>
            <input type="number" name="frekuensiPanenTahun" value={formData.frekuensiPanenTahun} onChange={handleChange} style={{ width: '100%' }} />
          </div>
          <div>
            <label>Produktivitas / Ha</label>
            <input type="number" step="0.01" name="produktivitasPerHa" value={formData.produktivitasPerHa} onChange={handleChange} style={{ width: '100%' }} />
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px' }}>
          <label><input type="checkbox" name="sedangProduksi" checked={formData.sedangProduksi} onChange={handleChange} /> Sedang Produksi</label>
          <label><input type="checkbox" name="sistemOrganik" checked={formData.sistemOrganik} onChange={handleChange} /> Sistem Organik</label>
          <label><input type="checkbox" name="sertifikasiOrganik" checked={formData.sertifikasiOrganik} onChange={handleChange} /> Sertifikasi Organik</label>
          <label><input type="checkbox" name="mekanisasiPertanian" checked={formData.mekanisasiPertanian} onChange={handleChange} /> Mekanisasi Pertanian</label>
          <label><input type="checkbox" name="smartFarming" checked={formData.smartFarming} onChange={handleChange} /> Smart Farming</label>
        </div>
      </fieldset>

      {/* 7. LINGKUNGAN (8 FIELD) */}
      <fieldset style={{ marginBottom: '20px', padding: '15px' }}>
        <legend><h2>7. Lingkungan</h2></legend>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px' }}>
          <label><input type="checkbox" name="bebasBanjir" checked={formData.bebasBanjir} onChange={handleChange} /> Bebas Banjir</label>
          <label><input type="checkbox" name="dekatSungai" checked={formData.dekatSungai} onChange={handleChange} /> Dekat Sungai</label>
          <label><input type="checkbox" name="dekatBendungan" checked={formData.dekatBendungan} onChange={handleChange} /> Dekat Bendungan</label>
          <label><input type="checkbox" name="dekatJalanRaya" checked={formData.dekatJalanRaya} onChange={handleChange} /> Dekat Jalan Raya</label>
          <label><input type="checkbox" name="dekatPasar" checked={formData.dekatPasar} onChange={handleChange} /> Dekat Pasar</label>
          <label><input type="checkbox" name="dekatKawasanIndustri" checked={formData.dekatKawasanIndustri} onChange={handleChange} /> Dekat Kawasan Industri</label>
          <label><input type="checkbox" name="dekatPermukiman" checked={formData.dekatPermukiman} onChange={handleChange} /> Dekat Permukiman</label>
          <label><input type="checkbox" name="dekatGudangDistribusu" checked={formData.dekatGudangDistribusu} onChange={handleChange} /> Dekat Gudang Distribusi</label>
        </div>
      </fieldset>

      {/* 8. LEGALITAS (10 FIELD) */}
      <fieldset style={{ marginBottom: '20px', padding: '15px' }}>
        <legend><h2>8. Legalitas</h2></legend>
        <div style={{ marginBottom: '15px' }}>
          <label>Sertifikat</label>
          <select name="sertifikat" value={formData.sertifikat} onChange={handleChange} style={{ width: '100%', maxWidth: '300px', display: 'block', marginTop: '5px' }}>
            <option value="">-- Pilih Sertifikat --</option>
            <option value="SHM">SHM</option>
            <option value="HGU">HGU</option>
            <option value="Hak Pakai">Hak Pakai</option>
            <option value="AJB">AJB</option>
            <option value="Girik">Girik</option>
            <option value="Letter C">Letter C</option>
            <option value="Lainnya">Lainnya</option>
          </select>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px' }}>
          <label><input type="checkbox" name="shm" checked={formData.shm} onChange={handleChange} /> SHM</label>
          <label><input type="checkbox" name="hgu" checked={formData.hgu} onChange={handleChange} /> HGU</label>
          <label><input type="checkbox" name="hakPakai" checked={formData.hakPakai} onChange={handleChange} /> Hak Pakai</label>
          <label><input type="checkbox" name="ajb" checked={formData.ajb} onChange={handleChange} /> AJB</label>
          <label><input type="checkbox" name="girik" checked={formData.girik} onChange={handleChange} /> Girik</label>
          <label><input type="checkbox" name="letterC" checked={formData.letterC} onChange={handleChange} /> Letter C</label>
          <label><input type="checkbox" name="pbbLengkap" checked={formData.pbbLengkap} onChange={handleChange} /> PBB Lengkap</label>
          <label><input type="checkbox" name="kkpr" checked={formData.kkpr} onChange={handleChange} /> KKPR</label>
          <label><input type="checkbox" name="lp2b" checked={formData.lp2b} onChange={handleChange} /> LP2B (Lahan Pertanian Pangan Berkelanjutan)</label>
        </div>
      </fieldset>

      {/* 9. POTENSI PENGEMBANGAN (8 FIELD) */}
      <fieldset style={{ marginBottom: '20px', padding: '15px' }}>
        <legend><h2>9. Potensi Pengembangan</h2></legend>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px' }}>
          <label><input type="checkbox" name="cocokSawah" checked={formData.cocokSawah} onChange={handleChange} /> Cocok Sawah</label>
          <label><input type="checkbox" name="cocokHortikultura" checked={formData.cocokHortikultura} onChange={handleChange} /> Cocok Hortikultura</label>
          <label><input type="checkbox" name="cocokGreenhouse" checked={formData.cocokGreenhouse} onChange={handleChange} /> Cocok Greenhouse</label>
          <label><input type="checkbox" name="cocokPeternakan" checked={formData.cocokPeternakan} onChange={handleChange} /> Cocok Peternakan</label>
          <label><input type="checkbox" name="cocokAgrowisata" checked={formData.cocokAgrowisata} onChange={handleChange} /> Cocok Agrowisata</label>
          <label><input type="checkbox" name="cocokPerkebunan" checked={formData.cocokPerkebunan} onChange={handleChange} /> Cocok Perkebunan</label>
          <label><input type="checkbox" name="cocokInvestasi" checked={formData.cocokInvestasi} onChange={handleChange} /> Cocok Investasi</label>
          <label><input type="checkbox" name="bisaMekanisasi" checked={formData.bisaMekanisasi} onChange={handleChange} /> Bisa Mekanisasi</label>
        </div>
      </fieldset>

      {/* 10. INFORMASI TAMBAHAN (6 FIELD) */}
      <fieldset style={{ marginBottom: '20px', padding: '15px' }}>
        <legend><h2>10. Informasi Tambahan</h2></legend>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px', marginBottom: '15px' }}>
          <label><input type="checkbox" name="sudahDipagar" checked={formData.sudahDipagar} onChange={handleChange} /> Sudah Dipagar</label>
          <label><input type="checkbox" name="tersediaGudang" checked={formData.tersediaGudang} onChange={handleChange} /> Tersedia Gudang</label>
          <label><input type="checkbox" name="tersediaRumahPekerja" checked={formData.tersediaRumahPekerja} onChange={handleChange} /> Tersedia Rumah Pekerja</label>
          <label><input type="checkbox" name="bebasSengketa" checked={formData.bebasSengketa} onChange={handleChange} /> Bebas Sengketa</label>
          <label><input type="checkbox" name="siapAjb" checked={formData.siapAjb} onChange={handleChange} /> Siap AJB</label>
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '5px' }}>Catatan Tambahan</label>
          <textarea name="catatanTambahan" value={formData.catatanTambahan} onChange={handleChange} rows={4} style={{ width: '100%' }} />
        </div>
      </fieldset>

      <button type="submit" style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>Simpan Iklan Tanah Pertanian</button>
    </form>
  );
};
