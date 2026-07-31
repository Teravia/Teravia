import React, { useState } from 'react';

// --- INTERFACES & TYPES ---
export interface FormTanahKavlingData {
  // Informasi Dasar (8)
  judulIklan: string;
  jenisTransaksi: string;
  namaProyekPerumahan: string;
  nomorKavling: string;
  developer: string;
  statusKepemilikan: string;
  kondisiLahanSelect: string;
  statusListing: string;

  // Informasi Lahan (12)
  luasTanah: number | '';
  panjangTanah: number | '';
  lebarDepan: number | '';
  lebarBelakang: number | '';
  bentukTanah: string;
  konturTanah: string;
  elevasiTanah: string;
  arahHadap: string;
  posisiKavling: string;
  hookSudut: boolean;
  tusukSate: boolean;
  siapBangun: boolean;

  // Tata Ruang & Zonasi (8)
  peruntukan: string;
  zonaTataRuang: string;
  kdbMaksimum: number | '';
  klbMaksimum: number | '';
  kdh: number | '';
  tinggiBangunanMaksimum: number | '';
  jumlahLantaiMaksimum: number | '';
  garisSempadanBangunan: number | '';

  // Infrastruktur (12)
  jalanAspal: boolean;
  jalanBeton: boolean;
  lebarJalan: number | '';
  drainase: boolean;
  trotoar: boolean;
  lampuJalan: boolean;
  fiberOptic: boolean;
  airPdam: boolean;
  sumurBor: boolean;
  listrikPln: boolean;
  internet: boolean;
  saluranAirHujan: boolean;

  // Lingkungan (9)
  dalamPerumahan: boolean;
  oneGateSystem: boolean;
  cluster: boolean;
  townhouse: boolean;
  kawasanPremium: boolean;
  bebasBanjir: boolean;
  dekatTaman: boolean;
  dekatDanau: boolean;
  dekatAreaHijau: boolean;

  // Akses Lokasi (9)
  jalanUtama: boolean;
  dekatJalanTol: boolean;
  dekatTerminal: boolean;
  dekatStasiun: boolean;
  dekatMrt: boolean;
  dekatLrt: boolean;
  dekatBandara: boolean;
  dekatPelabuhan: boolean;
  dilaluiKendaraanBesar: boolean;

  // Fasilitas Sekitar (11)
  sekolah: boolean;
  universitas: boolean;
  rumahSakit: boolean;
  klinik: boolean;
  minimarket: boolean;
  supermarket: boolean;
  mall: boolean;
  tempatIbadah: boolean;
  atmBank: boolean;
  spbu: boolean;
  tamanKota: boolean;

  // Legalitas (10)
  sertifikat: string;
  shm: boolean;
  shgb: boolean;
  hakPakai: boolean;
  ajb: boolean;
  ppjb: boolean;
  girik: boolean;
  letterC: boolean;
  pbbTersedia: boolean;
  imbPbgSekitar: boolean;

  // Informasi Investasi (8)
  cocokInvestasi: boolean;
  cocokRumahTinggal: boolean;
  cocokVilla: boolean;
  cocokRuko: boolean;
  cocokKos: boolean;
  potensiNaikNilai: boolean;
  bisaKpr: boolean;
  bisaCicilanDeveloper: boolean;

  // Informasi Tambahan (6)
  sudahDipagar: boolean;
  sudahUrug: boolean;
  sudahBersih: boolean;
  siapAjb: boolean;
  tidakDalamSengketa: boolean;
  catatanTambahan: string;
}

const initialFormData: FormTanahKavlingData = {
  // Informasi Dasar
  judulIklan: '',
  jenisTransaksi: '',
  namaProyekPerumahan: '',
  nomorKavling: '',
  developer: '',
  statusKepemilikan: '',
  kondisiLahanSelect: '',
  statusListing: '',

  // Informasi Lahan
  luasTanah: '',
  panjangTanah: '',
  lebarDepan: '',
  lebarBelakang: '',
  bentukTanah: '',
  konturTanah: '',
  elevasiTanah: '',
  arahHadap: '',
  posisiKavling: '',
  hookSudut: false,
  tusukSate: false,
  siapBangun: false,

  // Tata Ruang & Zonasi
  peruntukan: '',
  zonaTataRuang: '',
  kdbMaksimum: '',
  klbMaksimum: '',
  kdh: '',
  tinggiBangunanMaksimum: '',
  jumlahLantaiMaksimum: '',
  garisSempadanBangunan: '',

  // Infrastruktur
  jalanAspal: false,
  jalanBeton: false,
  lebarJalan: '',
  drainase: false,
  trotoar: false,
  lampuJalan: false,
  fiberOptic: false,
  airPdam: false,
  sumurBor: false,
  listrikPln: false,
  internet: false,
  saluranAirHujan: false,

  // Lingkungan
  dalamPerumahan: false,
  oneGateSystem: false,
  cluster: false,
  townhouse: false,
  kawasanPremium: false,
  bebasBanjir: false,
  dekatTaman: false,
  dekatDanau: false,
  dekatAreaHijau: false,

  // Akses Lokasi
  jalanUtama: false,
  dekatJalanTol: false,
  dekatTerminal: false,
  dekatStasiun: false,
  dekatMrt: false,
  dekatLrt: false,
  dekatBandara: false,
  dekatPelabuhan: false,
  dilaluiKendaraanBesar: false,

  // Fasilitas Sekitar
  sekolah: false,
  universitas: false,
  rumahSakit: false,
  klinik: false,
  minimarket: false,
  supermarket: false,
  mall: false,
  tempatIbadah: false,
  atmBank: false,
  spbu: false,
  tamanKota: false,

  // Legalitas
  sertifikat: '',
  shm: false,
  shgb: false,
  hakPakai: false,
  ajb: false,
  ppjb: false,
  girik: false,
  letterC: false,
  pbbTersedia: false,
  imbPbgSekitar: false,

  // Informasi Investasi
  cocokInvestasi: false,
  cocokRumahTinggal: false,
  cocokVilla: false,
  cocokRuko: false,
  cocokKos: false,
  potensiNaikNilai: false,
  bisaKpr: false,
  bisaCicilanDeveloper: false,

  // Informasi Tambahan
  sudahDipagar: false,
  sudahUrug: false,
  sudahBersih: false,
  siapAjb: false,
  tidakDalamSengketa: false,
  catatanTambahan: '',
};

export const FormTanahKavling: React.FC = () => {
  const [formData, setFormData] = useState<FormTanahKavlingData>(initialFormData);

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
      <h1>Form Klasifikasi Tanah Kavling (Residential / Commercial Plot)</h1>
      <p style={{ color: '#555' }}>
        Bidang tanah yang telah dibagi menjadi beberapa petak dengan ukuran tertentu dan siap digunakan untuk pembangunan rumah tinggal, villa, ruko, rukan, maupun investasi.[cite: 2]
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
            <label>Nama Proyek / Perumahan</label>
            <input type="text" name="namaProyekPerumahan" value={formData.namaProyekPerumahan} onChange={handleChange} style={{ width: '100%' }} />
          </div>
          <div>
            <label>Nomor Kavling</label>
            <input type="text" name="nomorKavling" value={formData.nomorKavling} onChange={handleChange} style={{ width: '100%' }} />
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
              <option value="SHGB">SHGB</option>
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
              <option value="Berbukit">Berbukit</option>
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
            <label>Posisi Kavling</label>
            <select name="posisiKavling" value={formData.posisiKavling} onChange={handleChange} style={{ width: '100%' }}>
              <option value="">-- Pilih --</option>
              <option value="Tengah">Tengah</option>
              <option value="Hook">Hook</option>
              <option value="Sudut">Sudut</option>
              <option value="Cul-de-sac">Cul-de-sac</option>
              <option value="Pinggir Jalan Utama">Pinggir Jalan Utama</option>
            </select>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px', marginTop: '15px' }}>
          <label><input type="checkbox" name="hookSudut" checked={formData.hookSudut} onChange={handleChange} /> Hook / Sudut</label>
          <label><input type="checkbox" name="tusukSate" checked={formData.tusukSate} onChange={handleChange} /> Tusuk Sate</label>
          <label><input type="checkbox" name="siapBangun" checked={formData.siapBangun} onChange={handleChange} /> Siap Bangun</label>
        </div>
      </fieldset>

      {/* 3. TATA RUANG & ZONASI (8 FIELD) */}
      <fieldset style={{ marginBottom: '20px', padding: '15px' }}>
        <legend><h2>3. Tata Ruang & Zonasi</h2></legend>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
          <div>
            <label>Peruntukan</label>
            <select name="peruntukan" value={formData.peruntukan} onChange={handleChange} style={{ width: '100%' }}>
              <option value="">-- Pilih --</option>
              <option value="Rumah Tinggal">Rumah Tinggal</option>
              <option value="Villa">Villa</option>
              <option value="Cluster">Cluster</option>
              <option value="Townhouse">Townhouse</option>
              <option value="Ruko">Ruko</option>
              <option value="Rukan">Rukan</option>
              <option value="Komersial">Komersial</option>
              <option value="Mixed Use">Mixed Use</option>
              <option value="Investasi">Investasi</option>
            </select>
          </div>
          <div>
            <label>Zona Tata Ruang</label>
            <select name="zonaTataRuang" value={formData.zonaTataRuang} onChange={handleChange} style={{ width: '100%' }}>
              <option value="">-- Pilih --</option>
              <option value="Perumahan / Pemukiman">Perumahan / Pemukiman</option>
              <option value="Komersial / Perdagangan">Komersial / Perdagangan</option>
              <option value="Industri / Pergudangan">Industri / Pergudangan</option>
              <option value="Hijau / RTH">Hijau / RTH</option>

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
            <label>Jumlah Lantai Maksimum</label>
            <input type="number" name="jumlahLantaiMaksimum" value={formData.jumlahLantaiMaksimum} onChange={handleChange} style={{ width: '100%' }} />
          </div>
          <div>
            <label>Garis Sempadan Bangunan (GSB)</label>
            <input type="number" name="garisSempadanBangunan" value={formData.garisSempadanBangunan} onChange={handleChange} style={{ width: '100%' }} />
          </div>
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
          <label><input type="checkbox" name="drainase" checked={formData.drainase} onChange={handleChange} /> Drainase</label>
          <label><input type="checkbox" name="trotoar" checked={formData.trotoar} onChange={handleChange} /> Trotoar</label>
          <label><input type="checkbox" name="lampuJalan" checked={formData.lampuJalan} onChange={handleChange} /> Lampu Jalan</label>
          <label><input type="checkbox" name="fiberOptic" checked={formData.fiberOptic} onChange={handleChange} /> Fiber Optic</label>
          <label><input type="checkbox" name="airPdam" checked={formData.airPdam} onChange={handleChange} /> Air PDAM</label>
          <label><input type="checkbox" name="sumurBor" checked={formData.sumurBor} onChange={handleChange} /> Sumur Bor</label>
          <label><input type="checkbox" name="listrikPln" checked={formData.listrikPln} onChange={handleChange} /> Listrik PLN</label>
          <label><input type="checkbox" name="internet" checked={formData.internet} onChange={handleChange} /> Internet</label>
          <label><input type="checkbox" name="saluranAirHujan" checked={formData.saluranAirHujan} onChange={handleChange} /> Saluran Air Hujan</label>
        </div>
      </fieldset>

      {/* 5. LINGKUNGAN (9 FIELD) */}
      <fieldset style={{ marginBottom: '20px', padding: '15px' }}>
        <legend><h2>5. Lingkungan</h2></legend>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px' }}>
          <label><input type="checkbox" name="dalamPerumahan" checked={formData.dalamPerumahan} onChange={handleChange} /> Dalam Perumahan</label>
          <label><input type="checkbox" name="oneGateSystem" checked={formData.oneGateSystem} onChange={handleChange} /> One Gate System</label>
          <label><input type="checkbox" name="cluster" checked={formData.cluster} onChange={handleChange} /> Cluster</label>
          <label><input type="checkbox" name="townhouse" checked={formData.townhouse} onChange={handleChange} /> Townhouse</label>
          <label><input type="checkbox" name="kawasanPremium" checked={formData.kawasanPremium} onChange={handleChange} /> Kawasan Premium</label>
          <label><input type="checkbox" name="bebasBanjir" checked={formData.bebasBanjir} onChange={handleChange} /> Bebas Banjir</label>
          <label><input type="checkbox" name="dekatTaman" checked={formData.dekatTaman} onChange={handleChange} /> Dekat Taman</label>
          <label><input type="checkbox" name="dekatDanau" checked={formData.dekatDanau} onChange={handleChange} /> Dekat Danau</label>
          <label><input type="checkbox" name="dekatAreaHijau" checked={formData.dekatAreaHijau} onChange={handleChange} /> Dekat Area Hijau</label>
        </div>
      </fieldset>

      {/* 6. AKSES LOKASI (9 FIELD) */}
      <fieldset style={{ marginBottom: '20px', padding: '15px' }}>
        <legend><h2>6. Akses Lokasi</h2></legend>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px' }}>
          <label><input type="checkbox" name="jalanUtama" checked={formData.jalanUtama} onChange={handleChange} /> Jalan Utama</label>
          <label><input type="checkbox" name="dekatJalanTol" checked={formData.dekatJalanTol} onChange={handleChange} /> Dekat Jalan Tol</label>
          <label><input type="checkbox" name="dekatTerminal" checked={formData.dekatTerminal} onChange={handleChange} /> Dekat Terminal</label>
          <label><input type="checkbox" name="dekatStasiun" checked={formData.dekatStasiun} onChange={handleChange} /> Dekat Stasiun</label>
          <label><input type="checkbox" name="dekatMrt" checked={formData.dekatMrt} onChange={handleChange} /> Dekat MRT</label>
          <label><input type="checkbox" name="dekatLrt" checked={formData.dekatLrt} onChange={handleChange} /> Dekat LRT</label>
          <label><input type="checkbox" name="dekatBandara" checked={formData.dekatBandara} onChange={handleChange} /> Dekat Bandara</label>
          <label><input type="checkbox" name="dekatPelabuhan" checked={formData.dekatPelabuhan} onChange={handleChange} /> Dekat Pelabuhan</label>
          <label><input type="checkbox" name="dilaluiKendaraanBesar" checked={formData.dilaluiKendaraanBesar} onChange={handleChange} /> Dilalui Kendaraan Besar</label>
        </div>
      </fieldset>

      {/* 7. FASILITAS SEKITAR (11 FIELD) */}
      <fieldset style={{ marginBottom: '20px', padding: '15px' }}>
        <legend><h2>7. Fasilitas Sekitar</h2></legend>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px' }}>
          <label><input type="checkbox" name="sekolah" checked={formData.sekolah} onChange={handleChange} /> Sekolah</label>
          <label><input type="checkbox" name="universitas" checked={formData.universitas} onChange={handleChange} /> Universitas</label>
          <label><input type="checkbox" name="rumahSakit" checked={formData.rumahSakit} onChange={handleChange} /> Rumah Sakit</label>
          <label><input type="checkbox" name="klinik" checked={formData.klinik} onChange={handleChange} /> Klinik</label>
          <label><input type="checkbox" name="minimarket" checked={formData.minimarket} onChange={handleChange} /> Minimarket</label>
          <label><input type="checkbox" name="supermarket" checked={formData.supermarket} onChange={handleChange} /> Supermarket</label>
          <label><input type="checkbox" name="mall" checked={formData.mall} onChange={handleChange} /> Mall</label>
          <label><input type="checkbox" name="tempatIbadah" checked={formData.tempatIbadah} onChange={handleChange} /> Tempat Ibadah</label>
          <label><input type="checkbox" name="atmBank" checked={formData.atmBank} onChange={handleChange} /> ATM / Bank</label>
          <label><input type="checkbox" name="spbu" checked={formData.spbu} onChange={handleChange} /> SPBU</label>
          <label><input type="checkbox" name="tamanKota" checked={formData.tamanKota} onChange={handleChange} /> Taman Kota</label>
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
            <option value="SHGB">SHGB</option>
            <option value="Hak Pakai">Hak Pakai</option>
            <option value="AJB">AJB</option>
            <option value="PPJB">PPJB</option>
            <option value="Girik">Girik</option>
            <option value="Letter C">Letter C</option>
            <option value="Lainnya">Lainnya</option>
          </select>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px' }}>
          <label><input type="checkbox" name="shm" checked={formData.shm} onChange={handleChange} /> SHM</label>
          <label><input type="checkbox" name="shgb" checked={formData.shgb} onChange={handleChange} /> SHGB</label>
          <label><input type="checkbox" name="hakPakai" checked={formData.hakPakai} onChange={handleChange} /> Hak Pakai</label>
          <label><input type="checkbox" name="ajb" checked={formData.ajb} onChange={handleChange} /> AJB</label>
          <label><input type="checkbox" name="ppjb" checked={formData.ppjb} onChange={handleChange} /> PPJB</label>
          <label><input type="checkbox" name="girik" checked={formData.girik} onChange={handleChange} /> Girik</label>
          <label><input type="checkbox" name="letterC" checked={formData.letterC} onChange={handleChange} /> Letter C</label>
          <label><input type="checkbox" name="pbbTersedia" checked={formData.pbbTersedia} onChange={handleChange} /> PBB Tersedia</label>
          <label><input type="checkbox" name="imbPbgSekitar" checked={formData.imbPbgSekitar} onChange={handleChange} /> IMB/PBG Sekitar</label>
        </div>
      </fieldset>

      {/* 9. INFORMASI INVESTASI (8 FIELD) */}
      <fieldset style={{ marginBottom: '20px', padding: '15px' }}>
        <legend><h2>9. Informasi Investasi</h2></legend>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px' }}>
          <label><input type="checkbox" name="cocokInvestasi" checked={formData.cocokInvestasi} onChange={handleChange} /> Cocok Investasi</label>
          <label><input type="checkbox" name="cocokRumahTinggal" checked={formData.cocokRumahTinggal} onChange={handleChange} /> Cocok Rumah Tinggal</label>
          <label><input type="checkbox" name="cocokVilla" checked={formData.cocokVilla} onChange={handleChange} /> Cocok Villa</label>
          <label><input type="checkbox" name="cocokRuko" checked={formData.cocokRuko} onChange={handleChange} /> Cocok Ruko</label>
          <label><input type="checkbox" name="cocokKos" checked={formData.cocokKos} onChange={handleChange} /> Cocok Kos</label>
          <label><input type="checkbox" name="potensiNaikNilai" checked={formData.potensiNaikNilai} onChange={handleChange} /> Potensi Naik Nilai</label>
          <label><input type="checkbox" name="bisaKpr" checked={formData.bisaKpr} onChange={handleChange} /> Bisa KPR</label>
          <label><input type="checkbox" name="bisaCicilanDeveloper" checked={formData.bisaCicilanDeveloper} onChange={handleChange} /> Bisa Cicilan Developer</label>
        </div>
      </fieldset>

      {/* 10. INFORMASI TAMBAHAN (6 FIELD) */}
      <fieldset style={{ marginBottom: '20px', padding: '15px' }}>
        <legend><h2>10. Informasi Tambahan</h2></legend>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px', marginBottom: '15px' }}>
          <label><input type="checkbox" name="sudahDipagar" checked={formData.sudahDipagar} onChange={handleChange} /> Sudah Dipagar</label>
          <label><input type="checkbox" name="sudahUrug" checked={formData.sudahUrug} onChange={handleChange} /> Sudah Urug</label>
          <label><input type="checkbox" name="sudahBersih" checked={formData.sudahBersih} onChange={handleChange} /> Sudah Bersih</label>
          <label><input type="checkbox" name="siapAjb" checked={formData.siapAjb} onChange={handleChange} /> Siap AJB</label>
          <label><input type="checkbox" name="tidakDalamSengketa" checked={formData.tidakDalamSengketa} onChange={handleChange} /> Tidak Dalam Sengketa</label>
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '5px' }}>Catatan Tambahan</label>
          <textarea name="catatanTambahan" value={formData.catatanTambahan} onChange={handleChange} rows={4} style={{ width: '100%' }} />
        </div>
      </fieldset>

      <button type="submit" style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>Simpan Iklan Tanah Kavling</button>
    </form>
  );
};

export default FormTanahKavling;