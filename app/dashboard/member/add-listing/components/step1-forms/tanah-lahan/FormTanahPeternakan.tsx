import React, { useState } from 'react';

// --- INTERFACES & TYPES ---
export interface FormTanahPeternakanData {
  // 1. Informasi Dasar (8)
  judulIklan: string;
  jenisTransaksi: string;
  namaPeternakan: string;
  jenisPeternakanSelect: string;
  statusKepemilikan: string;
  kondisiProperti: string;
  statusOperasional: string;
  statusListing: string;

  // 2. Informasi Lahan (12)
  luasLahanHa: number | '';
  luasLahanM2: number | '';
  luasBangunanM2: number | '';
  panjangLahanM: number | '';
  lebarLahanM: number | '';
  bentukLahan: string;
  konturTanah: string;
  jenisTanah: string;
  elevasiMdpl: number | '';
  drainase: string;
  bebasBanjirLahan: boolean;
  siapOperasionalLahan: boolean;

  // 3. Jenis Peternakan (12)
  sapiPotong: boolean;
  sapiPerah: boolean;
  ayamBroiler: boolean;
  ayamPetelur: boolean;
  kambing: boolean;
  domba: boolean;
  kerbau: boolean;
  babi: boolean;
  bebek: boolean;
  burungPuyuh: boolean;
  kuda: boolean;
  peternakanTerpadu: boolean;

  // 4. Kapasitas Produksi (8)
  kapasitasTernak: number | '';
  jumlahKandang: number | '';
  luasKandangM2: number | '';
  populasiSaatIni: number | '';
  kapasitasMaksimum: number | '';
  produksiPerTahun: number | '';
  sedangBeroperasi: boolean;
  sistemClosedHouse: boolean;

  // 5. Infrastruktur (12)
  jalanAspal: boolean;
  jalanTruk: boolean;
  listrikPln: boolean;
  genset: boolean;
  sumurBor: boolean;
  airPdam: boolean;
  gudangPakan: boolean;
  gudangPeralatan: boolean;
  rumahPekerja: boolean;
  kantorOperasional: boolean;
  workshop: boolean;
  posJaga: boolean;

  // 6. Fasilitas Peternakan (10)
  kandangPermanen: boolean;
  kandangSemiPermanen: boolean;
  tempatPakanOtomatis: boolean;
  tempatMinumOtomatis: boolean;
  klinikHewan: boolean;
  ruangKarantina: boolean;
  tempatPengolahanLimbah: boolean;
  biogas: boolean;
  coldStorage: boolean;
  loadingArea: boolean;

  // 7. Utilitas (8)
  kapasitasListrikKva: number | '';
  tangkiAir: boolean;
  reservoir: boolean;
  sistemVentilasi: boolean;
  exhaustFan: boolean;
  coolingPad: boolean;
  internet: boolean;
  cctv: boolean;

  // 8. Lingkungan (8)
  jauhDariPermukiman: boolean;
  dekatJalanRaya: boolean;
  dekatRumahPotongHewan: boolean;
  dekatPasarHewan: boolean;
  dekatPabrikPakan: boolean;
  dekatSungai: boolean;
  bebasBanjirLingkungan: boolean;
  zonaPeternakan: boolean;

  // 9. Legalitas (10)
  sertifikat: string;
  shm: boolean;
  hgb: boolean;
  hgu: boolean;
  ajb: boolean;
  pbbLengkap: boolean;
  nib: boolean;
  nomorKontrolVeterinerNkv: boolean;
  amdalUklUpl: boolean;
  izinUsahaPeternakan: boolean;

  // 10. Potensi Pengembangan (8)
  cocokFeedlot: boolean;
  cocokBreedingFarm: boolean;
  cocokDairyFarm: boolean;
  cocokPoultryFarm: boolean;
  cocokRumahPotongHewan: boolean;
  cocokAgrowisata: boolean;
  cocokInvestasi: boolean;
  buildToSuit: boolean;

  // 11. Informasi Tambahan (6)
  alatPeternakanTermasuk: boolean;
  kendaraanOperasional: boolean;
  sdmTersedia: boolean;
  siapOperasionalTambahan: boolean;
  dokumenLengkap: boolean;
  catatanTambahan: string;
}

const initialFormData: FormTanahPeternakanData = {
  // 1. Informasi Dasar
  judulIklan: '',
  jenisTransaksi: '',
  namaPeternakan: '',
  jenisPeternakanSelect: '',
  statusKepemilikan: '',
  kondisiProperti: '',
  statusOperasional: '',
  statusListing: '',

  // 2. Informasi Lahan
  luasLahanHa: '',
  luasLahanM2: '',
  luasBangunanM2: '',
  panjangLahanM: '',
  lebarLahanM: '',
  bentukLahan: '',
  konturTanah: '',
  jenisTanah: '',
  elevasiMdpl: '',
  drainase: '',
  bebasBanjirLahan: false,
  siapOperasionalLahan: false,

  // 3. Jenis Peternakan
  sapiPotong: false,
  sapiPerah: false,
  ayamBroiler: false,
  ayamPetelur: false,
  kambing: false,
  domba: false,
  kerbau: false,
  babi: false,
  bebek: false,
  burungPuyuh: false,
  kuda: false,
  peternakanTerpadu: false,

  // 4. Kapasitas Produksi
  kapasitasTernak: '',
  jumlahKandang: '',
  luasKandangM2: '',
  populasiSaatIni: '',
  kapasitasMaksimum: '',
  produksiPerTahun: '',
  sedangBeroperasi: false,
  sistemClosedHouse: false,

  // 5. Infrastruktur
  jalanAspal: false,
  jalanTruk: false,
  listrikPln: false,
  genset: false,
  sumurBor: false,
  airPdam: false,
  gudangPakan: false,
  gudangPeralatan: false,
  rumahPekerja: false,
  kantorOperasional: false,
  workshop: false,
  posJaga: false,

  // 6. Fasilitas Peternakan
  kandangPermanen: false,
  kandangSemiPermanen: false,
  tempatPakanOtomatis: false,
  tempatMinumOtomatis: false,
  klinikHewan: false,
  ruangKarantina: false,
  tempatPengolahanLimbah: false,
  biogas: false,
  coldStorage: false,
  loadingArea: false,

  // 7. Utilitas
  kapasitasListrikKva: '',
  tangkiAir: false,
  reservoir: false,
  sistemVentilasi: false,
  exhaustFan: false,
  coolingPad: false,
  internet: false,
  cctv: false,

  // 8. Lingkungan
  jauhDariPermukiman: false,
  dekatJalanRaya: false,
  dekatRumahPotongHewan: false,
  dekatPasarHewan: false,
  dekatPabrikPakan: false,
  dekatSungai: false,
  bebasBanjirLingkungan: false,
  zonaPeternakan: false,

  // 9. Legalitas
  sertifikat: '',
  shm: false,
  hgb: false,
  hgu: false,
  ajb: false,
  pbbLengkap: false,
  nib: false,
  nomorKontrolVeterinerNkv: false,
  amdalUklUpl: false,
  izinUsahaPeternakan: false,

  // 10. Potensi Pengembangan
  cocokFeedlot: false,
  cocokBreedingFarm: false,
  cocokDairyFarm: false,
  cocokPoultryFarm: false,
  cocokRumahPotongHewan: false,
  cocokAgrowisata: false,
  cocokInvestasi: false,
  buildToSuit: false,

  // 11. Informasi Tambahan
  alatPeternakanTermasuk: false,
  kendaraanOperasional: false,
  sdmTersedia: false,
  siapOperasionalTambahan: false,
  dokumenLengkap: false,
  catatanTambahan: '',
};

export const FormTanahPeternakan: React.FC = () => {
  const [formData, setFormData] = useState<FormTanahPeternakanData>(initialFormData);

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
      <h1>Form Klasifikasi Tanah Peternakan (Livestock Farm Land)</h1>
      <p style={{ color: '#555' }}>
        Lahan yang digunakan atau dipersiapkan untuk kegiatan peternakan skala kecil hingga industri, seperti peternakan sapi, ayam, kambing, domba, kerbau, babi, unggas, hingga peternakan terpadu (Integrated Livestock Farm)[cite: 7].
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
            <label>Nama Peternakan</label>
            <input type="text" name="namaPeternakan" value={formData.namaPeternakan} onChange={handleChange} style={{ width: '100%' }} />
          </div>
          <div>
            <label>Jenis Peternakan *</label>
            <select name="jenisPeternakanSelect" value={formData.jenisPeternakanSelect} onChange={handleChange} required style={{ width: '100%' }}>
              <option value="">-- Pilih --</option>
              <option value="Sapi Potong">Sapi Potong</option>
              <option value="Sapi Perah">Sapi Perah</option>
              <option value="Ayam Broiler">Ayam Broiler</option>
              <option value="Ayam Petelur">Ayam Petelur</option>
              <option value="Kambing">Kambing</option>
              <option value="Domba">Domba</option>
              <option value="Kerbau">Kerbau</option>
              <option value="Babi">Babi</option>
              <option value="Bebek">Bebek</option>
              <option value="Burung Puyuh">Burung Puyuh</option>
              <option value="Kuda">Kuda</option>
              <option value="Peternakan Terpadu">Peternakan Terpadu</option>
            </select>
          </div>
          <div>
            <label>Status Kepemilikan *</label>
            <select name="statusKepemilikan" value={formData.statusKepemilikan} onChange={handleChange} required style={{ width: '100%' }}>
              <option value="">-- Pilih --</option>
              <option value="SHM">SHM</option>
              <option value="HGB">HGB</option>
              <option value="HGU">HGU</option>
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
            <label>Luas Bangunan (m²)</label>
            <input type="number" name="luasBangunanM2" value={formData.luasBangunanM2} onChange={handleChange} style={{ width: '100%' }} />
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
              <option value="Berkontur">Berkontur</option>
            </select>
          </div>
          <div>
            <label>Jenis Tanah</label>
            <select name="jenisTanah" value={formData.jenisTanah} onChange={handleChange} style={{ width: '100%' }}>
              <option value="">-- Pilih --</option>
              <option value="Aluvial">Aluvial</option>
              <option value="Andosol">Andosol</option>
              <option value="Latosol">Latosol</option>
              <option value="Grumosol">Grumosol</option>
              <option value="Regosol">Regosol</option>
              <option value="Podsolik">Podsolik</option>
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
            </select>
          </div>
        </div>
        <div style={{ marginTop: '15px', display: 'flex', gap: '20px' }}>
          <label><input type="checkbox" name="bebasBanjirLahan" checked={formData.bebasBanjirLahan} onChange={handleChange} /> Bebas Banjir</label>
          <label><input type="checkbox" name="siapOperasionalLahan" checked={formData.siapOperasionalLahan} onChange={handleChange} /> Siap Operasional</label>
        </div>
      </fieldset>

      {/* 3. JENIS PERTANAKAN (12 FIELD) */}
      <fieldset style={{ marginBottom: '20px', padding: '15px' }}>
        <legend><h2>3. Jenis Peternakan</h2></legend>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px' }}>
          <label><input type="checkbox" name="sapiPotong" checked={formData.sapiPotong} onChange={handleChange} /> Sapi Potong</label>
          <label><input type="checkbox" name="sapiPerah" checked={formData.sapiPerah} onChange={handleChange} /> Sapi Perah</label>
          <label><input type="checkbox" name="ayamBroiler" checked={formData.ayamBroiler} onChange={handleChange} /> Ayam Broiler</label>
          <label><input type="checkbox" name="ayamPetelur" checked={formData.ayamPetelur} onChange={handleChange} /> Ayam Petelur</label>
          <label><input type="checkbox" name="kambing" checked={formData.kambing} onChange={handleChange} /> Kambing</label>
          <label><input type="checkbox" name="domba" checked={formData.domba} onChange={handleChange} /> Domba</label>
          <label><input type="checkbox" name="kerbau" checked={formData.kerbau} onChange={handleChange} /> Kerbau</label>
          <label><input type="checkbox" name="babi" checked={formData.babi} onChange={handleChange} /> Babi</label>
          <label><input type="checkbox" name="bebek" checked={formData.bebek} onChange={handleChange} /> Bebek</label>
          <label><input type="checkbox" name="burungPuyuh" checked={formData.burungPuyuh} onChange={handleChange} /> Burung Puyuh</label>
          <label><input type="checkbox" name="kuda" checked={formData.kuda} onChange={handleChange} /> Kuda</label>
          <label><input type="checkbox" name="peternakanTerpadu" checked={formData.peternakanTerpadu} onChange={handleChange} /> Peternakan Terpadu</label>
        </div>
      </fieldset>

      {/* 4. KAPASITAS PRODUKSI (8 FIELD) */}
      <fieldset style={{ marginBottom: '20px', padding: '15px' }}>
        <legend><h2>4. Kapasitas Produksi</h2></legend>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '15px' }}>
          <div>
            <label>Kapasitas Ternak</label>
            <input type="number" name="kapasitasTernak" value={formData.kapasitasTernak} onChange={handleChange} style={{ width: '100%' }} />
          </div>
          <div>
            <label>Jumlah Kandang</label>
            <input type="number" name="jumlahKandang" value={formData.jumlahKandang} onChange={handleChange} style={{ width: '100%' }} />
          </div>
          <div>
            <label>Luas Kandang (m²)</label>
            <input type="number" name="luasKandangM2" value={formData.luasKandangM2} onChange={handleChange} style={{ width: '100%' }} />
          </div>
          <div>
            <label>Populasi Saat Ini</label>
            <input type="number" name="populasiSaatIni" value={formData.populasiSaatIni} onChange={handleChange} style={{ width: '100%' }} />
          </div>
          <div>
            <label>Kapasitas Maksimum</label>
            <input type="number" name="kapasitasMaksimum" value={formData.kapasitasMaksimum} onChange={handleChange} style={{ width: '100%' }} />
          </div>
          <div>
            <label>Produksi per Tahun</label>
            <input type="number" name="produksiPerTahun" value={formData.produksiPerTahun} onChange={handleChange} style={{ width: '100%' }} />
          </div>
        </div>
        <div style={{ display: 'flex', gap: '20px' }}>
          <label><input type="checkbox" name="sedangBeroperasi" checked={formData.sedangBeroperasi} onChange={handleChange} /> Sedang Beroperasi</label>
          <label><input type="checkbox" name="sistemClosedHouse" checked={formData.sistemClosedHouse} onChange={handleChange} /> Sistem Closed House</label>
        </div>
      </fieldset>

      {/* 5. INFRASTRUKTUR (12 FIELD) */}
      <fieldset style={{ marginBottom: '20px', padding: '15px' }}>
        <legend><h2>5. Infrastruktur</h2></legend>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px' }}>
          <label><input type="checkbox" name="jalanAspal" checked={formData.jalanAspal} onChange={handleChange} /> Jalan Aspal</label>
          <label><input type="checkbox" name="jalanTruk" checked={formData.jalanTruk} onChange={handleChange} /> Jalan Truk</label>
          <label><input type="checkbox" name="listrikPln" checked={formData.listrikPln} onChange={handleChange} /> Listrik PLN</label>
          <label><input type="checkbox" name="genset" checked={formData.genset} onChange={handleChange} /> Genset</label>
          <label><input type="checkbox" name="sumurBor" checked={formData.sumurBor} onChange={handleChange} /> Sumur Bor</label>
          <label><input type="checkbox" name="airPdam" checked={formData.airPdam} onChange={handleChange} /> Air PDAM</label>
          <label><input type="checkbox" name="gudangPakan" checked={formData.gudangPakan} onChange={handleChange} /> Gudang Pakan</label>
          <label><input type="checkbox" name="gudangPeralatan" checked={formData.gudangPeralatan} onChange={handleChange} /> Gudang Peralatan</label>
          <label><input type="checkbox" name="rumahPekerja" checked={formData.rumahPekerja} onChange={handleChange} /> Rumah Pekerja</label>
          <label><input type="checkbox" name="kantorOperasional" checked={formData.kantorOperasional} onChange={handleChange} /> Kantor Operasional</label>
          <label><input type="checkbox" name="workshop" checked={formData.workshop} onChange={handleChange} /> Workshop</label>
          <label><input type="checkbox" name="posJaga" checked={formData.posJaga} onChange={handleChange} /> Pos Jaga</label>
        </div>
      </fieldset>

      {/* 6. FASILITAS PETERNAKAN (10 FIELD) */}
      <fieldset style={{ marginBottom: '20px', padding: '15px' }}>
        <legend><h2>6. Fasilitas Peternakan</h2></legend>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px' }}>
          <label><input type="checkbox" name="kandangPermanen" checked={formData.kandangPermanen} onChange={handleChange} /> Kandang Permanen</label>
          <label><input type="checkbox" name="kandangSemiPermanen" checked={formData.kandangSemiPermanen} onChange={handleChange} /> Kandang Semi Permanen</label>
          <label><input type="checkbox" name="tempatPakanOtomatis" checked={formData.tempatPakanOtomatis} onChange={handleChange} /> Tempat Pakan Otomatis</label>
          <label><input type="checkbox" name="tempatMinumOtomatis" checked={formData.tempatMinumOtomatis} onChange={handleChange} /> Tempat Minum Otomatis</label>
          <label><input type="checkbox" name="klinikHewan" checked={formData.klinikHewan} onChange={handleChange} /> Klinik Hewan</label>
          <label><input type="checkbox" name="ruangKarantina" checked={formData.ruangKarantina} onChange={handleChange} /> Ruang Karantina</label>
          <label><input type="checkbox" name="tempatPengolahanLimbah" checked={formData.tempatPengolahanLimbah} onChange={handleChange} /> Tempat Pengolahan Limbah</label>
          <label><input type="checkbox" name="biogas" checked={formData.biogas} onChange={handleChange} /> Biogas</label>
          <label><input type="checkbox" name="coldStorage" checked={formData.coldStorage} onChange={handleChange} /> Cold Storage</label>
          <label><input type="checkbox" name="loadingArea" checked={formData.loadingArea} onChange={handleChange} /> Loading Area</label>
        </div>
      </fieldset>

      {/* 7. UTILITAS (8 FIELD) */}
      <fieldset style={{ marginBottom: '20px', padding: '15px' }}>
        <legend><h2>7. Utilitas</h2></legend>
        <div style={{ marginBottom: '15px' }}>
          <label>Kapasitas Listrik (kVA)</label>
          <input type="number" name="kapasitasListrikKva" value={formData.kapasitasListrikKva} onChange={handleChange} style={{ width: '100%', maxWidth: '300px', display: 'block', marginTop: '5px' }} />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px' }}>
          <label><input type="checkbox" name="tangkiAir" checked={formData.tangkiAir} onChange={handleChange} /> Tangki Air</label>
          <label><input type="checkbox" name="reservoir" checked={formData.reservoir} onChange={handleChange} /> Reservoir</label>
          <label><input type="checkbox" name="sistemVentilasi" checked={formData.sistemVentilasi} onChange={handleChange} /> Sistem Ventilasi</label>
          <label><input type="checkbox" name="exhaustFan" checked={formData.exhaustFan} onChange={handleChange} /> Exhaust Fan</label>
          <label><input type="checkbox" name="coolingPad" checked={formData.coolingPad} onChange={handleChange} /> Cooling Pad</label>
          <label><input type="checkbox" name="internet" checked={formData.internet} onChange={handleChange} /> Internet</label>
          <label><input type="checkbox" name="cctv" checked={formData.cctv} onChange={handleChange} /> CCTV</label>
        </div>
      </fieldset>

      {/* 8. LINGKUNGAN (8 FIELD) */}
      <fieldset style={{ marginBottom: '20px', padding: '15px' }}>
        <legend><h2>8. Lingkungan</h2></legend>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px' }}>
          <label><input type="checkbox" name="jauhDariPermukiman" checked={formData.jauhDariPermukiman} onChange={handleChange} /> Jauh dari Permukiman</label>
          <label><input type="checkbox" name="dekatJalanRaya" checked={formData.dekatJalanRaya} onChange={handleChange} /> Dekat Jalan Raya</label>
          <label><input type="checkbox" name="dekatRumahPotongHewan" checked={formData.dekatRumahPotongHewan} onChange={handleChange} /> Dekat Rumah Potong Hewan</label>
          <label><input type="checkbox" name="dekatPasarHewan" checked={formData.dekatPasarHewan} onChange={handleChange} /> Dekat Pasar Hewan</label>
          <label><input type="checkbox" name="dekatPabrikPakan" checked={formData.dekatPabrikPakan} onChange={handleChange} /> Dekat Pabrik Pakan</label>
          <label><input type="checkbox" name="dekatSungai" checked={formData.dekatSungai} onChange={handleChange} /> Dekat Sungai</label>
          <label><input type="checkbox" name="bebasBanjirLingkungan" checked={formData.bebasBanjirLingkungan} onChange={handleChange} /> Bebas Banjir</label>
          <label><input type="checkbox" name="zonaPeternakan" checked={formData.zonaPeternakan} onChange={handleChange} /> Zona Peternakan</label>
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
            <option value="HGU">HGU</option>
            <option value="AJB">AJB</option>
            <option value="Lainnya">Lainnya</option>
          </select>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px' }}>
          <label><input type="checkbox" name="shm" checked={formData.shm} onChange={handleChange} /> SHM</label>
          <label><input type="checkbox" name="hgb" checked={formData.hgb} onChange={handleChange} /> HGB</label>
          <label><input type="checkbox" name="hgu" checked={formData.hgu} onChange={handleChange} /> HGU</label>
          <label><input type="checkbox" name="ajb" checked={formData.ajb} onChange={handleChange} /> AJB</label>
          <label><input type="checkbox" name="pbbLengkap" checked={formData.pbbLengkap} onChange={handleChange} /> PBB Lengkap</label>
          <label><input type="checkbox" name="nib" checked={formData.nib} onChange={handleChange} /> NIB</label>
          <label><input type="checkbox" name="nomorKontrolVeterinerNkv" checked={formData.nomorKontrolVeterinerNkv} onChange={handleChange} /> Nomor Kontrol Veteriner (NKV)</label>
          <label><input type="checkbox" name="amdalUklUpl" checked={formData.amdalUklUpl} onChange={handleChange} /> AMDAL / UKL-UPL</label>
          <label><input type="checkbox" name="izinUsahaPeternakan" checked={formData.izinUsahaPeternakan} onChange={handleChange} /> Izin Usaha Peternakan</label>
        </div>
      </fieldset>

      {/* 10. POTENSI PENGEMBANGAN (8 FIELD) */}
      <fieldset style={{ marginBottom: '20px', padding: '15px' }}>
        <legend><h2>10. Potensi Pengembangan</h2></legend>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px' }}>
          <label><input type="checkbox" name="cocokFeedlot" checked={formData.cocokFeedlot} onChange={handleChange} /> Cocok Feedlot</label>
          <label><input type="checkbox" name="cocokBreedingFarm" checked={formData.cocokBreedingFarm} onChange={handleChange} /> Cocok Breeding Farm</label>
          <label><input type="checkbox" name="cocokDairyFarm" checked={formData.cocokDairyFarm} onChange={handleChange} /> Cocok Dairy Farm</label>
          <label><input type="checkbox" name="cocokPoultryFarm" checked={formData.cocokPoultryFarm} onChange={handleChange} /> Cocok Poultry Farm</label>
          <label><input type="checkbox" name="cocokRumahPotongHewan" checked={formData.cocokRumahPotongHewan} onChange={handleChange} /> Cocok Rumah Potong Hewan</label>
          <label><input type="checkbox" name="cocokAgrowisata" checked={formData.cocokAgrowisata} onChange={handleChange} /> Cocok Agrowisata</label>
          <label><input type="checkbox" name="cocokInvestasi" checked={formData.cocokInvestasi} onChange={handleChange} /> Cocok Investasi</label>
          <label><input type="checkbox" name="buildToSuit" checked={formData.buildToSuit} onChange={handleChange} /> Build to Suit</label>
        </div>
      </fieldset>

      {/* 11. INFORMASI TAMBAHAN (6 FIELD) */}
      <fieldset style={{ marginBottom: '20px', padding: '15px' }}>
        <legend><h2>11. Informasi Tambahan</h2></legend>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px', marginBottom: '15px' }}>
          <label><input type="checkbox" name="alatPeternakanTermasuk" checked={formData.alatPeternakanTermasuk} onChange={handleChange} /> Alat Peternakan Termasuk</label>
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

      <button type="submit" style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>Simpan Iklan Tanah Peternakan</button>
    </form>
  );
};

export default FormTanahPeternakan;