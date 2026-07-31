import React, { useState } from 'react';

// --- INTERFACES & TYPES ---
export interface FormTanahPerkebunanData {
  // 1. Informasi Dasar (8)
  judulIklan: string;
  jenisTransaksi: string;
  namaPerkebunan: string;
  komoditasUtamaSelect: string;
  statusKepemilikan: string;
  kondisiKebun: string;
  statusOperasional: string;
  statusListing: string;

  // 2. Informasi Lahan (12)
  luasLahanHa: number | '';
  luasLahanM2: number | '';
  panjangLahanM: number | '';
  lebarLahanM: number | '';
  bentukLahan: string;
  konturLahan: string;
  elevasiMdpl: number | '';
  jenisTanah: string;
  tingkatKesuburan: string;
  kemiringanLahanPersen: number | '';
  drainase: string;
  bebasBanjir: boolean;

  // 3. Informasi Tanaman (10)
  komoditasUtamaTanaman: string;
  umurTanamanTahun: number | '';
  jumlahPohon: number | '';
  jarakTanam: number | '';
  kepadatanTanaman: number | '';
  masaProduktif: boolean;
  masaReplanting: boolean;
  produktivitasPerHaTanaman: number | '';
  musimPanen: string;
  frekuensiPanen: number | '';

  // 4. Jenis Komoditas (14)
  kelapaSawit: boolean;
  karet: boolean;
  kopi: boolean;
  kakao: boolean;
  kelapa: boolean;
  tebu: boolean;
  teh: boolean;
  tembakau: boolean;
  lada: boolean;
  cengkeh: boolean;
  pala: boolean;
  vanili: boolean;
  kayuIndustri: boolean;
  bambu: boolean;

  // 5. Infrastruktur (12)
  jalanKebun: boolean;
  jalanTruk: boolean;
  listrikPln: boolean;
  gudang: boolean;
  rumahKaryawan: boolean;
  kantorKebun: boolean;
  workshop: boolean;
  timbangan: boolean;
  pagar: boolean;
  posJaga: boolean;
  internet: boolean;
  menaraTelekomunikasi: boolean;

  // 6. Sumber Air (8)
  sungai: boolean;
  embung: boolean;
  waduk: boolean;
  sumurBor: boolean;
  mataAir: boolean;
  irigasi: boolean;
  kolamPenampungan: boolean;
  sistemPompa: boolean;

  // 7. Fasilitas Produksi (8)
  pabrikPengolahan: boolean;
  gudangHasilPanen: boolean;
  tempatPengeringan: boolean;
  coldStorage: boolean;
  loadingArea: boolean;
  areaSortasi: boolean;
  packingHouse: boolean;
  workshopAlatBerat: boolean;

  // 8. Produktivitas (8)
  sedangProduksi: boolean;
  produksiPerTahun: number | '';
  produksiPerHa: number | '';
  sertifikasiOrganik: boolean;
  gapCertified: boolean;
  ispo: boolean;
  rspo: boolean;
  smartPlantation: boolean;

  // 9. Akses Transportasi (8)
  jalanKabupaten: boolean;
  jalanProvinsi: boolean;
  jalanNasional: boolean;
  dekatPelabuhan: boolean;
  dekatPabrik: boolean;
  dekatKawasanIndustri: boolean;
  dekatBandara: boolean;
  aksesTrukKontainer: boolean;

  // 10. Legalitas (10)
  sertifikat: string;
  shm: boolean;
  hgu: boolean;
  hakPakai: boolean;
  ajb: boolean;
  pbbLengkap: boolean;
  izinUsahaPerkebunanIup: boolean;
  amdal: boolean;
  kkpr: boolean;
  bebasSengketa: boolean;

  // 11. Potensi Pengembangan (8)
  cocokEkspansi: boolean;
  cocokAgroindustri: boolean;
  cocokAgrowisata: boolean;
  cocokPabrikPengolahan: boolean;
  cocokInvestasi: boolean;
  buildToSuit: boolean;
  potensiCarbonCredit: boolean;
  potensiBiomassa: boolean;

  // 12. Informasi Tambahan (6)
  tersediaAlatBerat: boolean;
  tersediaKendaraanOperasional: boolean;
  tersediaSdm: boolean;
  siapOperasional: boolean;
  dokumenLengkap: boolean;
  catatanTambahan: string;
}

const initialFormData: FormTanahPerkebunanData = {
  // 1. Informasi Dasar
  judulIklan: '',
  jenisTransaksi: '',
  namaPerkebunan: '',
  komoditasUtamaSelect: '',
  statusKepemilikan: '',
  kondisiKebun: '',
  statusOperasional: '',
  statusListing: '',

  // 2. Informasi Lahan
  luasLahanHa: '',
  luasLahanM2: '',
  panjangLahanM: '',
  lebarLahanM: '',
  bentukLahan: '',
  konturLahan: '',
  elevasiMdpl: '',
  jenisTanah: '',
  tingkatKesuburan: '',
  kemiringanLahanPersen: '',
  drainase: '',
  bebasBanjir: false,

  // 3. Informasi Tanaman
  komoditasUtamaTanaman: '',
  umurTanamanTahun: '',
  jumlahPohon: '',
  jarakTanam: '',
  kepadatanTanaman: '',
  masaProduktif: false,
  masaReplanting: false,
  produktivitasPerHaTanaman: '',
  musimPanen: '',
  frekuensiPanen: '',

  // 4. Jenis Komoditas
  kelapaSawit: false,
  karet: false,
  kopi: false,
  kakao: false,
  kelapa: false,
  tebu: false,
  teh: false,
  tembakau: false,
  lada: false,
  cengkeh: false,
  pala: false,
  vanili: false,
  kayuIndustri: false,
  bambu: false,

  // 5. Infrastruktur
  jalanKebun: false,
  jalanTruk: false,
  listrikPln: false,
  gudang: false,
  rumahKaryawan: false,
  kantorKebun: false,
  workshop: false,
  timbangan: false,
  pagar: false,
  posJaga: false,
  internet: false,
  menaraTelekomunikasi: false,

  // 6. Sumber Air
  sungai: false,
  embung: false,
  waduk: false,
  sumurBor: false,
  mataAir: false,
  irigasi: false,
  kolamPenampungan: false,
  sistemPompa: false,

  // 7. Fasilitas Produksi
  pabrikPengolahan: false,
  gudangHasilPanen: false,
  tempatPengeringan: false,
  coldStorage: false,
  loadingArea: false,
  areaSortasi: false,
  packingHouse: false,
  workshopAlatBerat: false,

  // 8. Produktivitas
  sedangProduksi: false,
  produksiPerTahun: '',
  produksiPerHa: '',
  sertifikasiOrganik: false,
  gapCertified: false,
  ispo: false,
  rspo: false,
  smartPlantation: false,

  // 9. Akses Transportasi
  jalanKabupaten: false,
  jalanProvinsi: false,
  jalanNasional: false,
  dekatPelabuhan: false,
  dekatPabrik: false,
  dekatKawasanIndustri: false,
  dekatBandara: false,
  aksesTrukKontainer: false,

  // 10. Legalitas
  sertifikat: '',
  shm: false,
  hgu: false,
  hakPakai: false,
  ajb: false,
  pbbLengkap: false,
  izinUsahaPerkebunanIup: false,
  amdal: false,
  kkpr: false,
  bebasSengketa: false,

  // 11. Potensi Pengembangan
  cocokEkspansi: false,
  cocokAgroindustri: false,
  cocokAgrowisata: false,
  cocokPabrikPengolahan: false,
  cocokInvestasi: false,
  buildToSuit: false,
  potensiCarbonCredit: false,
  potensiBiomassa: false,

  // 12. Informasi Tambahan
  tersediaAlatBerat: false,
  tersediaKendaraanOperasional: false,
  tersediaSdm: false,
  siapOperasional: false,
  dokumenLengkap: false,
  catatanTambahan: '',
};

export const FormTanahPerkebunan: React.FC = () => {
  const [formData, setFormData] = useState<FormTanahPerkebunanData>(initialFormData);

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
      <h1>Form Klasifikasi Tanah Perkebunan (Plantation Land)</h1>
      <p style={{ color: '#555' }}>
        Lahan yang digunakan atau diperuntukkan untuk budidaya tanaman perkebunan skala komersial maupun industri (kelapa sawit, karet, teh, kopi, kakao, dll.)[cite: 5].
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
            <label>Nama Perkebunan</label>
            <input type="text" name="namaPerkebunan" value={formData.namaPerkebunan} onChange={handleChange} style={{ width: '100%' }} />
          </div>
          <div>
            <label>Komoditas Utama *</label>
            <select name="komoditasUtamaSelect" value={formData.komoditasUtamaSelect} onChange={handleChange} required style={{ width: '100%' }}>
              <option value="">-- Pilih --</option>
              <option value="Kelapa Sawit">Kelapa Sawit</option>
              <option value="Karet">Karet</option>
              <option value="Kopi">Kopi</option>
              <option value="Kakao">Kakao</option>
              <option value="Kelapa">Kelapa</option>
              <option value="Tebu">Tebu</option>
              <option value="Teh">Teh</option>
              <option value="Tembakau">Tembakau</option>
              <option value="Lada">Lada</option>
              <option value="Cengkeh">Cengkeh</option>
              <option value="Pala">Pala</option>
              <option value="Vanili">Vanili</option>
              <option value="Kayu Industri">Kayu Industri</option>
              <option value="Bambu">Bambu</option>
              <option value="Tanaman Energi">Tanaman Energi</option>
              <option value="Lainnya">Lainnya</option>
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
              <option value="Lainnya">Lainnya</option>
            </select>
          </div>
          <div>
            <label>Kondisi Kebun *</label>
            <select name="kondisiKebun" value={formData.kondisiKebun} onChange={handleChange} required style={{ width: '100%' }}>
              <option value="">-- Pilih --</option>
              <option value="Produktif">Produktif</option>
              <option value="Siap Panen">Siap Panen</option>
              <option value="Tanaman Muda">Tanaman Muda</option>
              <option value="Replanting">Replanting</option>
              <option value="Lahan Kosong">Lahan Kosong</option>
              <option value="Perlu Peremajaan">Perlu Peremajaan</option>
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
            <label>Elevasi (mdpl)</label>
            <input type="number" name="elevasiMdpl" value={formData.elevasiMdpl} onChange={handleChange} style={{ width: '100%' }} />
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
              <option value="Podsolik">Podsolik</option>
              <option value="Gambut">Gambut</option>
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
            <label>Drainase</label>
            <select name="drainase" value={formData.drainase} onChange={handleChange} style={{ width: '100%' }}>
              <option value="">-- Pilih --</option>
              <option value="Baik">Baik</option>
              <option value="Cukup">Cukup</option>
              <option value="Kurang">Kurang</option>
              <option value="Parit/Saluran Drainase">Parit/Saluran Drainase</option>
            </select>
          </div>
        </div>
        <div style={{ marginTop: '15px' }}>
          <label><input type="checkbox" name="bebasBanjir" checked={formData.bebasBanjir} onChange={handleChange} /> Bebas Banjir</label>
        </div>
      </fieldset>

      {/* 3. INFORMASI TANAMAN (10 FIELD) */}
      <fieldset style={{ marginBottom: '20px', padding: '15px' }}>
        <legend><h2>3. Informasi Tanaman</h2></legend>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
          <div>
            <label>Komoditas Utama</label>
            <select name="komoditasUtamaTanaman" value={formData.komoditasUtamaTanaman} onChange={handleChange} style={{ width: '100%' }}>
              <option value="">-- Pilih --</option>
              <option value="Kelapa Sawit">Kelapa Sawit</option>
              <option value="Karet">Karet</option>
              <option value="Kopi">Kopi</option>
              <option value="Kakao">Kakao</option>
              <option value="Kelapa">Kelapa</option>
              <option value="Tebu">Tebu</option>
              <option value="Teh">Teh</option>
              <option value="Tembakau">Tembakau</option>
              <option value="Lada">Lada</option>
              <option value="Cengkeh">Cengkeh</option>
              <option value="Pala">Pala</option>
              <option value="Vanili">Vanili</option>
              <option value="Kayu Industri">Kayu Industri</option>
              <option value="Bambu">Bambu</option>
              <option value="Tanaman Energi">Tanaman Energi</option>
              <option value="Lainnya">Lainnya</option>
            </select>
          </div>
          <div>
            <label>Umur Tanaman (Tahun)</label>
            <input type="number" name="umurTanamanTahun" value={formData.umurTanamanTahun} onChange={handleChange} style={{ width: '100%' }} />
          </div>
          <div>
            <label>Jumlah Pohon</label>
            <input type="number" name="jumlahPohon" value={formData.jumlahPohon} onChange={handleChange} style={{ width: '100%' }} />
          </div>
          <div>
            <label>Jarak Tanam (m)</label>
            <input type="number" step="0.1" name="jarakTanam" value={formData.jarakTanam} onChange={handleChange} style={{ width: '100%' }} />
          </div>
          <div>
            <label>Kepadatan Tanaman (pohon/Ha)</label>
            <input type="number" name="kepadatanTanaman" value={formData.kepadatanTanaman} onChange={handleChange} style={{ width: '100%' }} />
          </div>
          <div>
            <label>Produktivitas per Ha</label>
            <input type="number" step="0.01" name="produktivitasPerHaTanaman" value={formData.produktivitasPerHaTanaman} onChange={handleChange} style={{ width: '100%' }} />
          </div>
          <div>
            <label>Musim Panen</label>
            <select name="musimPanen" value={formData.musimPanen} onChange={handleChange} style={{ width: '100%' }}>
              <option value="">-- Pilih --</option>
              <option value="Sepanjang Tahun">Sepanjang Tahun</option>
              <option value="Musiman">Musiman</option>
              <option value="Awal Tahun">Awal Tahun</option>
              <option value="Akhir Tahun">Akhir Tahun</option>
            </select>
          </div>
          <div>
            <label>Frekuensi Panen (kali/tahun)</label>
            <input type="number" name="frekuensiPanen" value={formData.frekuensiPanen} onChange={handleChange} style={{ width: '100%' }} />
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginTop: '15px' }}>
          <label><input type="checkbox" name="masaProduktif" checked={formData.masaProduktif} onChange={handleChange} /> Masa Produktif</label>
          <label><input type="checkbox" name="masaReplanting" checked={formData.masaReplanting} onChange={handleChange} /> Masa Replanting</label>
        </div>
      </fieldset>

      {/* 4. JENIS KOMODITAS (14 FIELD) */}
      <fieldset style={{ marginBottom: '20px', padding: '15px' }}>
        <legend><h2>4. Jenis Komoditas</h2></legend>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px' }}>
          <label><input type="checkbox" name="kelapaSawit" checked={formData.kelapaSawit} onChange={handleChange} /> Kelapa Sawit</label>
          <label><input type="checkbox" name="karet" checked={formData.karet} onChange={handleChange} /> Karet</label>
          <label><input type="checkbox" name="kopi" checked={formData.kopi} onChange={handleChange} /> Kopi</label>
          <label><input type="checkbox" name="kakao" checked={formData.kakao} onChange={handleChange} /> Kakao</label>
          <label><input type="checkbox" name="kelapa" checked={formData.kelapa} onChange={handleChange} /> Kelapa</label>
          <label><input type="checkbox" name="tebu" checked={formData.tebu} onChange={handleChange} /> Tebu</label>
          <label><input type="checkbox" name="teh" checked={formData.teh} onChange={handleChange} /> Teh</label>
          <label><input type="checkbox" name="tembakau" checked={formData.tembakau} onChange={handleChange} /> Tembakau</label>
          <label><input type="checkbox" name="lada" checked={formData.lada} onChange={handleChange} /> Lada</label>
          <label><input type="checkbox" name="cengkeh" checked={formData.cengkeh} onChange={handleChange} /> Cengkeh</label>
          <label><input type="checkbox" name="pala" checked={formData.pala} onChange={handleChange} /> Pala</label>
          <label><input type="checkbox" name="vanili" checked={formData.vanili} onChange={handleChange} /> Vanili</label>
          <label><input type="checkbox" name="kayuIndustri" checked={formData.kayuIndustri} onChange={handleChange} /> Kayu Industri</label>
          <label><input type="checkbox" name="bambu" checked={formData.bambu} onChange={handleChange} /> Bambu</label>
        </div>
      </fieldset>

      {/* 5. INFRASTRUKTUR (12 FIELD) */}
      <fieldset style={{ marginBottom: '20px', padding: '15px' }}>
        <legend><h2>5. Infrastruktur</h2></legend>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px' }}>
          <label><input type="checkbox" name="jalanKebun" checked={formData.jalanKebun} onChange={handleChange} /> Jalan Kebun</label>
          <label><input type="checkbox" name="jalanTruk" checked={formData.jalanTruk} onChange={handleChange} /> Jalan Truk</label>
          <label><input type="checkbox" name="listrikPln" checked={formData.listrikPln} onChange={handleChange} /> Listrik PLN</label>
          <label><input type="checkbox" name="gudang" checked={formData.gudang} onChange={handleChange} /> Gudang</label>
          <label><input type="checkbox" name="rumahKaryawan" checked={formData.rumahKaryawan} onChange={handleChange} /> Rumah Karyawan</label>
          <label><input type="checkbox" name="kantorKebun" checked={formData.kantorKebun} onChange={handleChange} /> Kantor Kebun</label>
          <label><input type="checkbox" name="workshop" checked={formData.workshop} onChange={handleChange} /> Workshop</label>
          <label><input type="checkbox" name="timbangan" checked={formData.timbangan} onChange={handleChange} /> Timbangan</label>
          <label><input type="checkbox" name="pagar" checked={formData.pagar} onChange={handleChange} /> Pagar</label>
          <label><input type="checkbox" name="posJaga" checked={formData.posJaga} onChange={handleChange} /> Pos Jaga</label>
          <label><input type="checkbox" name="internet" checked={formData.internet} onChange={handleChange} /> Internet</label>
          <label><input type="checkbox" name="menaraTelekomunikasi" checked={formData.menaraTelekomunikasi} onChange={handleChange} /> Menara Telekomunikasi</label>
        </div>
      </fieldset>

      {/* 6. SUMBER AIR (8 FIELD) */}
      <fieldset style={{ marginBottom: '20px', padding: '15px' }}>
        <legend><h2>6. Sumber Air</h2></legend>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px' }}>
          <label><input type="checkbox" name="sungai" checked={formData.sungai} onChange={handleChange} /> Sungai</label>
          <label><input type="checkbox" name="embung" checked={formData.embung} onChange={handleChange} /> Embung</label>
          <label><input type="checkbox" name="waduk" checked={formData.waduk} onChange={handleChange} /> Waduk</label>
          <label><input type="checkbox" name="sumurBor" checked={formData.sumurBor} onChange={handleChange} /> Sumur Bor</label>
          <label><input type="checkbox" name="mataAir" checked={formData.mataAir} onChange={handleChange} /> Mata Air</label>
          <label><input type="checkbox" name="irigasi" checked={formData.irigasi} onChange={handleChange} /> Irigasi</label>
          <label><input type="checkbox" name="kolamPenampungan" checked={formData.kolamPenampungan} onChange={handleChange} /> Kolam Penampungan</label>
          <label><input type="checkbox" name="sistemPompa" checked={formData.sistemPompa} onChange={handleChange} /> Sistem Pompa</label>
        </div>
      </fieldset>

      {/* 7. FASILITAS PRODUKSI (8 FIELD) */}
      <fieldset style={{ marginBottom: '20px', padding: '15px' }}>
        <legend><h2>7. Fasilitas Produksi</h2></legend>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px' }}>
          <label><input type="checkbox" name="pabrikPengolahan" checked={formData.pabrikPengolahan} onChange={handleChange} /> Pabrik Pengolahan</label>
          <label><input type="checkbox" name="gudangHasilPanen" checked={formData.gudangHasilPanen} onChange={handleChange} /> Gudang Hasil Panen</label>
          <label><input type="checkbox" name="tempatPengeringan" checked={formData.tempatPengeringan} onChange={handleChange} /> Tempat Pengeringan</label>
          <label><input type="checkbox" name="coldStorage" checked={formData.coldStorage} onChange={handleChange} /> Cold Storage</label>
          <label><input type="checkbox" name="loadingArea" checked={formData.loadingArea} onChange={handleChange} /> Loading Area</label>
          <label><input type="checkbox" name="areaSortasi" checked={formData.areaSortasi} onChange={handleChange} /> Area Sortasi</label>
          <label><input type="checkbox" name="packingHouse" checked={formData.packingHouse} onChange={handleChange} /> Packing House</label>
          <label><input type="checkbox" name="workshopAlatBerat" checked={formData.workshopAlatBerat} onChange={handleChange} /> Workshop Alat Berat</label>
        </div>
      </fieldset>

      {/* 8. PRODUKTIVITAS (8 FIELD) */}
      <fieldset style={{ marginBottom: '20px', padding: '15px' }}>
        <legend><h2>8. Produktivitas</h2></legend>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '15px' }}>
          <div>
            <label>Produksi per Tahun</label>
            <input type="number" step="0.01" name="produksiPerTahun" value={formData.produksiPerTahun} onChange={handleChange} style={{ width: '100%' }} />
          </div>
          <div>
            <label>Produksi per Ha</label>
            <input type="number" step="0.01" name="produksiPerHa" value={formData.produksiPerHa} onChange={handleChange} style={{ width: '100%' }} />
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px' }}>
          <label><input type="checkbox" name="sedangProduksi" checked={formData.sedangProduksi} onChange={handleChange} /> Sedang Produksi</label>
          <label><input type="checkbox" name="sertifikasiOrganik" checked={formData.sertifikasiOrganik} onChange={handleChange} /> Sertifikasi Organik</label>
          <label><input type="checkbox" name="gapCertified" checked={formData.gapCertified} onChange={handleChange} /> GAP Certified</label>
          <label><input type="checkbox" name="ispo" checked={formData.ispo} onChange={handleChange} /> ISPO</label>
          <label><input type="checkbox" name="rspo" checked={formData.rspo} onChange={handleChange} /> RSPO</label>
          <label><input type="checkbox" name="smartPlantation" checked={formData.smartPlantation} onChange={handleChange} /> Smart Plantation</label>
        </div>
      </fieldset>

      {/* 9. AKSES TRANSPORTASI (8 FIELD) */}
      <fieldset style={{ marginBottom: '20px', padding: '15px' }}>
        <legend><h2>9. Akses Transportasi</h2></legend>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px' }}>
          <label><input type="checkbox" name="jalanKabupaten" checked={formData.jalanKabupaten} onChange={handleChange} /> Jalan Kabupaten</label>
          <label><input type="checkbox" name="jalanProvinsi" checked={formData.jalanProvinsi} onChange={handleChange} /> Jalan Provinsi</label>
          <label><input type="checkbox" name="jalanNasional" checked={formData.jalanNasional} onChange={handleChange} /> Jalan Nasional</label>
          <label><input type="checkbox" name="dekatPelabuhan" checked={formData.dekatPelabuhan} onChange={handleChange} /> Dekat Pelabuhan</label>
          <label><input type="checkbox" name="dekatPabrik" checked={formData.dekatPabrik} onChange={handleChange} /> Dekat Pabrik</label>
          <label><input type="checkbox" name="dekatKawasanIndustri" checked={formData.dekatKawasanIndustri} onChange={handleChange} /> Dekat Kawasan Industri</label>
          <label><input type="checkbox" name="dekatBandara" checked={formData.dekatBandara} onChange={handleChange} /> Dekat Bandara</label>
          <label><input type="checkbox" name="aksesTrukKontainer" checked={formData.aksesTrukKontainer} onChange={handleChange} /> Akses Truk Kontainer</label>
        </div>
      </fieldset>

      {/* 10. LEGALITAS (10 FIELD) */}
      <fieldset style={{ marginBottom: '20px', padding: '15px' }}>
        <legend><h2>10. Legalitas</h2></legend>
        <div style={{ marginBottom: '15px' }}>
          <label>Sertifikat</label>
          <select name="sertifikat" value={formData.sertifikat} onChange={handleChange} style={{ width: '100%', maxWidth: '300px', display: 'block', marginTop: '5px' }}>
            <option value="">-- Pilih Sertifikat --</option>
            <option value="SHM">SHM</option>
            <option value="HGU">HGU</option>
            <option value="Hak Pakai">Hak Pakai</option>
            <option value="AJB">AJB</option>
            <option value="Lainnya">Lainnya</option>
          </select>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px' }}>
          <label><input type="checkbox" name="shm" checked={formData.shm} onChange={handleChange} /> SHM</label>
          <label><input type="checkbox" name="hgu" checked={formData.hgu} onChange={handleChange} /> HGU</label>
          <label><input type="checkbox" name="hakPakai" checked={formData.hakPakai} onChange={handleChange} /> Hak Pakai</label>
          <label><input type="checkbox" name="ajb" checked={formData.ajb} onChange={handleChange} /> AJB</label>
          <label><input type="checkbox" name="pbbLengkap" checked={formData.pbbLengkap} onChange={handleChange} /> PBB Lengkap</label>
          <label><input type="checkbox" name="izinUsahaPerkebunanIup" checked={formData.izinUsahaPerkebunanIup} onChange={handleChange} /> Izin Usaha Perkebunan (IUP)</label>
          <label><input type="checkbox" name="amdal" checked={formData.amdal} onChange={handleChange} /> AMDAL</label>
          <label><input type="checkbox" name="kkpr" checked={formData.kkpr} onChange={handleChange} /> KKPR</label>
          <label><input type="checkbox" name="bebasSengketa" checked={formData.bebasSengketa} onChange={handleChange} /> Bebas Sengketa</label>
        </div>
      </fieldset>

      {/* 11. POTENSI PENGEMBANGAN (8 FIELD) */}
      <fieldset style={{ marginBottom: '20px', padding: '15px' }}>
        <legend><h2>11. Potensi Pengembangan</h2></legend>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px' }}>
          <label><input type="checkbox" name="cocokEkspansi" checked={formData.cocokEkspansi} onChange={handleChange} /> Cocok Ekspansi</label>
          <label><input type="checkbox" name="cocokAgroindustri" checked={formData.cocokAgroindustri} onChange={handleChange} /> Cocok Agroindustri</label>
          <label><input type="checkbox" name="cocokAgrowisata" checked={formData.cocokAgrowisata} onChange={handleChange} /> Cocok Agrowisata</label>
          <label><input type="checkbox" name="cocokPabrikPengolahan" checked={formData.cocokPabrikPengolahan} onChange={handleChange} /> Cocok Pabrik Pengolahan</label>
          <label><input type="checkbox" name="cocokInvestasi" checked={formData.cocokInvestasi} onChange={handleChange} /> Cocok Investasi</label>
          <label><input type="checkbox" name="buildToSuit" checked={formData.buildToSuit} onChange={handleChange} /> Build to Suit</label>
          <label><input type="checkbox" name="potensiCarbonCredit" checked={formData.potensiCarbonCredit} onChange={handleChange} /> Potensi Carbon Credit</label>
          <label><input type="checkbox" name="potensiBiomassa" checked={formData.potensiBiomassa} onChange={handleChange} /> Potensi Biomassa</label>
        </div>
      </fieldset>

      {/* 12. INFORMASI TAMBAHAN (6 FIELD) */}
      <fieldset style={{ marginBottom: '20px', padding: '15px' }}>
        <legend><h2>12. Informasi Tambahan</h2></legend>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px', marginBottom: '15px' }}>
          <label><input type="checkbox" name="tersediaAlatBerat" checked={formData.tersediaAlatBerat} onChange={handleChange} /> Tersedia Alat Berat</label>
          <label><input type="checkbox" name="tersediaKendaraanOperasional" checked={formData.tersediaKendaraanOperasional} onChange={handleChange} /> Tersedia Kendaraan Operasional</label>
          <label><input type="checkbox" name="tersediaSdm" checked={formData.tersediaSdm} onChange={handleChange} /> Tersedia SDM</label>
          <label><input type="checkbox" name="siapOperasional" checked={formData.siapOperasional} onChange={handleChange} /> Siap Operasional</label>
          <label><input type="checkbox" name="dokumenLengkap" checked={formData.dokumenLengkap} onChange={handleChange} /> Dokumen Lengkap</label>
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '5px' }}>Catatan Tambahan</label>
          <textarea name="catatanTambahan" value={formData.catatanTambahan} onChange={handleChange} rows={4} style={{ width: '100%' }} />
        </div>
      </fieldset>

      <button type="submit" style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>Simpan Iklan Tanah Perkebunan</button>
    </form>
  );
};

export default FormTanahPerkebunan;