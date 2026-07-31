import React, { useState } from 'react';

// --- INTERFACES & TYPES ---
export interface FormTanahPerumahanData {
  // 1. Informasi Dasar (8)
  judulIklan: string;
  jenisTransaksi: string;
  namaProyek: string;
  developer: string;
  pengelolaKawasan: string;
  statusKepemilikan: string;
  kondisiLahan: string;
  statusListing: string;

  // 2. Informasi Lahan (12)
  luasTanahM2: number | '';
  luasTanahHa: number | '';
  panjangTanahM: number | '';
  lebarDepanM: number | '';
  lebarBelakangM: number | '';
  bentukTanah: string;
  konturTanah: string;
  elevasiTanah: string;
  arahHadap: string;
  hook: boolean;
  frontageJalanM: number | '';
  siapBangun: boolean;

  // 3. Tata Ruang & Perizinan (10)
  peruntukan: string;
  zonaPerumahan: string;
  kdbMaksimumPersen: number | '';
  klbMaksimum: number | '';
  kdhPersen: number | '';
  tinggiBangunanMaksimum: number | '';
  jumlahLantaiMaksimum: number | '';
  garisSempadanBangunanGSB: number | '';
  kkprTataRuang: boolean;
  sitePlanDisetujuiTataRuang: boolean;

  // 4. Infrastruktur (12)
  jalanAspal: boolean;
  jalanBeton: boolean;
  lebarJalanM: number | '';
  drainase: boolean;
  trotoar: boolean;
  lampuJalan: boolean;
  airPdam: boolean;
  listrikPln: boolean;
  fiberOptic: boolean;
  internet: boolean;
  saluranAirHujan: boolean;
  oneGateInfrastructure: boolean;

  // 5. Lingkungan Perumahan (11)
  dalamKawasanPerumahan: boolean;
  cluster: boolean;
  townhouse: boolean;
  township: boolean;
  oneGateSystem: boolean;
  security24Jam: boolean;
  cctvKawasan: boolean;
  taman: boolean;
  areaHijau: boolean;
  danauBuatan: boolean;
  bebasBanjir: boolean;

  // 6. Fasilitas Kawasan (12)
  clubHouse: boolean;
  kolamRenang: boolean;
  gym: boolean;
  playground: boolean;
  joggingTrack: boolean;
  lapanganOlahraga: boolean;
  masjid: boolean;
  minimarket: boolean;
  foodCourt: boolean;
  communityHall: boolean;
  nurseryTk: boolean;
  sekolah: boolean;

  // 7. Akses Lokasi (10)
  dekatJalanUtama: boolean;
  dekatJalanTol: boolean;
  dekatGerbangTol: boolean;
  dekatTerminal: boolean;
  dekatStasiun: boolean;
  dekatMrt: boolean;
  dekatLrt: boolean;
  dekatBandara: boolean;
  dekatRumahSakit: boolean;
  dekatMall: boolean;

  // 8. Potensi Pengembangan (9)
  cocokPerumahanSubsidi: boolean;
  cocokPerumahanKomersial: boolean;
  cocokCluster: boolean;
  cocokTownhouse: boolean;
  cocokVilla: boolean;
  cocokApartemenLowRise: boolean;
  cocokMixedResidential: boolean;
  buildToSuit: boolean;
  siapDikembangkan: boolean;

  // 9. Legalitas (10)
  sertifikat: string;
  shm: boolean;
  hgb: boolean;
  hakPakai: boolean;
  ajb: boolean;
  ppjb: boolean;
  kkprLegalitas: boolean;
  pbbLengkap: boolean;
  sitePlanDisetujuiLegalitas: boolean;
  amdal: boolean;

  // 10. Informasi Investasi (8)
  cocokInvestasi: boolean;
  capitalGainTinggi: boolean;
  roiPotensialTinggi: boolean;
  bisaKpr: boolean;
  bisaCicilanDeveloper: boolean;
  jointVenture: boolean;
  readyForDevelopment: boolean;
  prospekKawasanTinggi: boolean;

  // 11. Informasi Tambahan (6)
  sudahDipagar: boolean;
  sudahDiurug: boolean;
  bebasSengketa: boolean;
  siapAjb: boolean;
  tidakDalamKawasanSengketa: boolean;
  catatanTambahan: string;
}

const initialFormData: FormTanahPerumahanData = {
  // 1. Informasi Dasar
  judulIklan: '',
  jenisTransaksi: '',
  namaProyek: '',
  developer: '',
  pengelolaKawasan: '',
  statusKepemilikan: '',
  kondisiLahan: '',
  statusListing: '',

  // 2. Informasi Lahan
  luasTanahM2: '',
  luasTanahHa: '',
  panjangTanahM: '',
  lebarDepanM: '',
  lebarBelakangM: '',
  bentukTanah: '',
  konturTanah: '',
  elevasiTanah: '',
  arahHadap: '',
  hook: false,
  frontageJalanM: '',
  siapBangun: false,

  // 3. Tata Ruang & Perizinan
  peruntukan: '',
  zonaPerumahan: '',
  kdbMaksimumPersen: '',
  klbMaksimum: '',
  kdhPersen: '',
  tinggiBangunanMaksimum: '',
  jumlahLantaiMaksimum: '',
  garisSempadanBangunanGSB: '',
  kkprTataRuang: false,
  sitePlanDisetujuiTataRuang: false,

  // 4. Infrastruktur
  jalanAspal: false,
  jalanBeton: false,
  lebarJalanM: '',
  drainase: false,
  trotoar: false,
  lampuJalan: false,
  airPdam: false,
  listrikPln: false,
  fiberOptic: false,
  internet: false,
  saluranAirHujan: false,
  oneGateInfrastructure: false,

  // 5. Lingkungan Perumahan
  dalamKawasanPerumahan: false,
  cluster: false,
  townhouse: false,
  township: false,
  oneGateSystem: false,
  security24Jam: false,
  cctvKawasan: false,
  taman: false,
  areaHijau: false,
  danauBuatan: false,
  bebasBanjir: false,

  // 6. Fasilitas Kawasan
  clubHouse: false,
  kolamRenang: false,
  gym: false,
  playground: false,
  joggingTrack: false,
  lapanganOlahraga: false,
  masjid: false,
  minimarket: false,
  foodCourt: false,
  communityHall: false,
  nurseryTk: false,
  sekolah: false,

  // 7. Akses Lokasi
  dekatJalanUtama: false,
  dekatJalanTol: false,
  dekatGerbangTol: false,
  dekatTerminal: false,
  dekatStasiun: false,
  dekatMrt: false,
  dekatLrt: false,
  dekatBandara: false,
  dekatRumahSakit: false,
  dekatMall: false,

  // 8. Potensi Pengembangan
  cocokPerumahanSubsidi: false,
  cocokPerumahanKomersial: false,
  cocokCluster: false,
  cocokTownhouse: false,
  cocokVilla: false,
  cocokApartemenLowRise: false,
  cocokMixedResidential: false,
  buildToSuit: false,
  siapDikembangkan: false,

  // 9. Legalitas
  sertifikat: '',
  shm: false,
  hgb: false,
  hakPakai: false,
  ajb: false,
  ppjb: false,
  kkprLegalitas: false,
  pbbLengkap: false,
  sitePlanDisetujuiLegalitas: false,
  amdal: false,

  // 10. Informasi Investasi
  cocokInvestasi: false,
  capitalGainTinggi: false,
  roiPotensialTinggi: false,
  bisaKpr: false,
  bisaCicilanDeveloper: false,
  jointVenture: false,
  readyForDevelopment: false,
  prospekKawasanTinggi: false,

  // 11. Informasi Tambahan
  sudahDipagar: false,
  sudahDiurug: false,
  bebasSengketa: false,
  siapAjb: false,
  tidakDalamKawasanSengketa: false,
  catatanTambahan: '',
};

export const FormTanahPerumahan: React.FC = () => {
  const [formData, setFormData] = useState<FormTanahPerumahanData>(initialFormData);

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
      <h1>Form Klasifikasi Tanah Perumahan (Residential Development Land)</h1>
      <p style={{ color: '#555' }}>
        Lahan yang diperuntukkan bagi pembangunan kawasan hunian seperti perumahan, cluster, townhouse, apartemen rendah (low rise), maupun township[cite: 7].
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
            <label>Nama Proyek</label>
            <input type="text" name="namaProyek" value={formData.namaProyek} onChange={handleChange} style={{ width: '100%' }} />
          </div>
          <div>
            <label>Developer</label>
            <input type="text" name="developer" value={formData.developer} onChange={handleChange} style={{ width: '100%' }} />
          </div>
          <div>
            <label>Pengelola Kawasan</label>
            <input type="text" name="pengelolaKawasan" value={formData.pengelolaKawasan} onChange={handleChange} style={{ width: '100%' }} />
          </div>
          <div>
            <label>Status Kepemilikan *</label>
            <select name="statusKepemilikan" value={formData.statusKepemilikan} onChange={handleChange} required style={{ width: '100%' }}>
              <option value="">-- Pilih --</option>
              <option value="SHM">SHM</option>
              <option value="HGB">HGB</option>
              <option value="Hak Pakai">Hak Pakai</option>
              <option value="AJB">AJB</option>
              <option value="PPJB">PPJB</option>
              <option value="Lainnya">Lainnya</option>
            </select>
          </div>
          <div>
            <label>Kondisi Lahan *</label>
            <select name="kondisiLahan" value={formData.kondisiLahan} onChange={handleChange} required style={{ width: '100%' }}>
              <option value="">-- Pilih --</option>
              <option value="Siap Bangun">Siap Bangun</option>
              <option value="Sudah Diurug">Sudah Diurug</option>
              <option value="Sudah Dipagar">Sudah Dipagar</option>
              <option value="Perlu Pembersihan">Perlu Pembersihan</option>
              <option value="Perlu Cut & Fill">Perlu Cut &amp; Fill</option>
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
            <label>Panjang Tanah (m)</label>
            <input type="number" name="panjangTanahM" value={formData.panjangTanahM} onChange={handleChange} style={{ width: '100%' }} />
          </div>
          <div>
            <label>Lebar Depan (m)</label>
            <input type="number" name="lebarDepanM" value={formData.lebarDepanM} onChange={handleChange} style={{ width: '100%' }} />
          </div>
          <div>
            <label>Lebar Belakang (m)</label>
            <input type="number" name="lebarBelakangM" value={formData.lebarBelakangM} onChange={handleChange} style={{ width: '100%' }} />
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
              <option value="Berkontur">Berkontur</option>
              <option value="Perlu Cut & Fill">Perlu Cut &amp; Fill</option>
            </select>
          </div>
          <div>
            <label>Elevasi Tanah</label>
            <select name="elevasiTanah" value={formData.elevasiTanah} onChange={handleChange} style={{ width: '100%' }}>
              <option value="">-- Pilih --</option>
              <option value="Sama dengan Jalan">Sama dengan Jalan</option>
              <option value="Lebih Tinggi dari Jalan">Lebih Tinggi dari Jalan</option>
              <option value="Lebih Rendah dari Jalan">Lebih Rendah dari Jalan</option>
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
              <option value="Barat Daya">Barat Daya</option>
              <option value="Barat Laut">Barat Laut</option>
              <option value="Tenggara">Tenggara</option>
              <option value="Timur Laut">Timur Laut</option>
            </select>
          </div>
          <div>
            <label>Frontage Jalan (m)</label>
            <input type="number" name="frontageJalanM" value={formData.frontageJalanM} onChange={handleChange} style={{ width: '100%' }} />
          </div>
        </div>
        <div style={{ marginTop: '15px', display: 'flex', gap: '20px' }}>
          <label><input type="checkbox" name="hook" checked={formData.hook} onChange={handleChange} /> Hook</label>
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
              <option value="Perumahan Subsidi">Perumahan Subsidi</option>
              <option value="Perumahan Komersial">Perumahan Komersial</option>
              <option value="Cluster">Cluster</option>
              <option value="Townhouse">Townhouse</option>
              <option value="Township">Township</option>
              <option value="Villa">Villa</option>
              <option value="Apartemen Low Rise">Apartemen Low Rise</option>
              <option value="Mixed Residential">Mixed Residential</option>
            </select>
          </div>
          <div>
            <label>Zona Perumahan</label>
            <select name="zonaPerumahan" value={formData.zonaPerumahan} onChange={handleChange} style={{ width: '100%' }}>
              <option value="">-- Pilih --</option>
              <option value="Kepadatan Rendah">Kepadatan Rendah</option>
              <option value="Kepadatan Sedang">Kepadatan Sedang</option>
              <option value="Kepadatan Tinggi">Kepadatan Tinggi</option>
              <option value="Township">Township</option>
              <option value="Mixed Residential">Mixed Residential</option>
            </select>
          </div>
          <div>
            <label>KDB Maksimum (%)</label>
            <input type="number" step="0.01" name="kdbMaksimumPersen" value={formData.kdbMaksimumPersen} onChange={handleChange} style={{ width: '100%' }} />
          </div>
          <div>
            <label>KLB Maksimum</label>
            <input type="number" step="0.01" name="klbMaksimum" value={formData.klbMaksimum} onChange={handleChange} style={{ width: '100%' }} />
          </div>
          <div>
            <label>KDH (%)</label>
            <input type="number" step="0.01" name="kdhPersen" value={formData.kdhPersen} onChange={handleChange} style={{ width: '100%' }} />
          </div>
          <div>
            <label>Tinggi Bangunan Maksimum (m)</label>
            <input type="number" name="tinggiBangunanMaksimum" value={formData.tinggiBangunanMaksimum} onChange={handleChange} style={{ width: '100%' }} />
          </div>
          <div>
            <label>Jumlah Lantai Maksimum</label>
            <input type="number" name="jumlahLantaiMaksimum" value={formData.jumlahLantaiMaksimum} onChange={handleChange} style={{ width: '100%' }} />
          </div>
          <div>
            <label>Garis Sempadan Bangunan (GSB) (m)</label>
            <input type="number" name="garisSempadanBangunanGSB" value={formData.garisSempadanBangunanGSB} onChange={handleChange} style={{ width: '100%' }} />
          </div>
        </div>
        <div style={{ marginTop: '15px', display: 'flex', gap: '20px' }}>
          <label><input type="checkbox" name="kkprTataRuang" checked={formData.kkprTataRuang} onChange={handleChange} /> KKPR</label>
          <label><input type="checkbox" name="sitePlanDisetujuiTataRuang" checked={formData.sitePlanDisetujuiTataRuang} onChange={handleChange} /> Site Plan Disetujui</label>
        </div>
      </fieldset>

      {/* 4. INFRASTRUKTUR (12 FIELD) */}
      <fieldset style={{ marginBottom: '20px', padding: '15px' }}>
        <legend><h2>4. Infrastruktur</h2></legend>
        <div style={{ marginBottom: '15px' }}>
          <label>Lebar Jalan (m)</label>
          <input type="number" name="lebarJalanM" value={formData.lebarJalanM} onChange={handleChange} style={{ width: '100%', maxWidth: '300px', display: 'block', marginTop: '5px' }} />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px' }}>
          <label><input type="checkbox" name="jalanAspal" checked={formData.jalanAspal} onChange={handleChange} /> Jalan Aspal</label>
          <label><input type="checkbox" name="jalanBeton" checked={formData.jalanBeton} onChange={handleChange} /> Jalan Beton</label>
          <label><input type="checkbox" name="drainase" checked={formData.drainase} onChange={handleChange} /> Drainase</label>
          <label><input type="checkbox" name="trotoar" checked={formData.trotoar} onChange={handleChange} /> Trotoar</label>
          <label><input type="checkbox" name="lampuJalan" checked={formData.lampuJalan} onChange={handleChange} /> Lampu Jalan</label>
          <label><input type="checkbox" name="airPdam" checked={formData.airPdam} onChange={handleChange} /> Air PDAM</label>
          <label><input type="checkbox" name="listrikPln" checked={formData.listrikPln} onChange={handleChange} /> Listrik PLN</label>
          <label><input type="checkbox" name="fiberOptic" checked={formData.fiberOptic} onChange={handleChange} /> Fiber Optic</label>
          <label><input type="checkbox" name="internet" checked={formData.internet} onChange={handleChange} /> Internet</label>
          <label><input type="checkbox" name="saluranAirHujan" checked={formData.saluranAirHujan} onChange={handleChange} /> Saluran Air Hujan</label>
          <label><input type="checkbox" name="oneGateInfrastructure" checked={formData.oneGateInfrastructure} onChange={handleChange} /> One Gate Infrastructure</label>
        </div>
      </fieldset>

      {/* 5. LINGKUNGAN PERUMAHAN (11 FIELD) */}
      <fieldset style={{ marginBottom: '20px', padding: '15px' }}>
        <legend><h2>5. Lingkungan Perumahan</h2></legend>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px' }}>
          <label><input type="checkbox" name="dalamKawasanPerumahan" checked={formData.dalamKawasanPerumahan} onChange={handleChange} /> Dalam Kawasan Perumahan</label>
          <label><input type="checkbox" name="cluster" checked={formData.cluster} onChange={handleChange} /> Cluster</label>
          <label><input type="checkbox" name="townhouse" checked={formData.townhouse} onChange={handleChange} /> Townhouse</label>
          <label><input type="checkbox" name="township" checked={formData.township} onChange={handleChange} /> Township</label>
          <label><input type="checkbox" name="oneGateSystem" checked={formData.oneGateSystem} onChange={handleChange} /> One Gate System</label>
          <label><input type="checkbox" name="security24Jam" checked={formData.security24Jam} onChange={handleChange} /> Security 24 Jam</label>
          <label><input type="checkbox" name="cctvKawasan" checked={formData.cctvKawasan} onChange={handleChange} /> CCTV Kawasan</label>
          <label><input type="checkbox" name="taman" checked={formData.taman} onChange={handleChange} /> Taman</label>
          <label><input type="checkbox" name="areaHijau" checked={formData.areaHijau} onChange={handleChange} /> Area Hijau</label>
          <label><input type="checkbox" name="danauBuatan" checked={formData.danauBuatan} onChange={handleChange} /> Danau Buatan</label>
          <label><input type="checkbox" name="bebasBanjir" checked={formData.bebasBanjir} onChange={handleChange} /> Bebas Banjir</label>
        </div>
      </fieldset>

      {/* 6. FASILITAS KAWASAN (12 FIELD) */}
      <fieldset style={{ marginBottom: '20px', padding: '15px' }}>
        <legend><h2>6. Fasilitas Kawasan</h2></legend>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px' }}>
          <label><input type="checkbox" name="clubHouse" checked={formData.clubHouse} onChange={handleChange} /> Club House</label>
          <label><input type="checkbox" name="kolamRenang" checked={formData.kolamRenang} onChange={handleChange} /> Kolam Renang</label>
          <label><input type="checkbox" name="gym" checked={formData.gym} onChange={handleChange} /> Gym</label>
          <label><input type="checkbox" name="playground" checked={formData.playground} onChange={handleChange} /> Playground</label>
          <label><input type="checkbox" name="joggingTrack" checked={formData.joggingTrack} onChange={handleChange} /> Jogging Track</label>
          <label><input type="checkbox" name="lapanganOlahraga" checked={formData.lapanganOlahraga} onChange={handleChange} /> Lapangan Olahraga</label>
          <label><input type="checkbox" name="masjid" checked={formData.masjid} onChange={handleChange} /> Masjid</label>
          <label><input type="checkbox" name="minimarket" checked={formData.minimarket} onChange={handleChange} /> Minimarket</label>
          <label><input type="checkbox" name="foodCourt" checked={formData.foodCourt} onChange={handleChange} /> Food Court</label>
          <label><input type="checkbox" name="communityHall" checked={formData.communityHall} onChange={handleChange} /> Community Hall</label>
          <label><input type="checkbox" name="nurseryTk" checked={formData.nurseryTk} onChange={handleChange} /> Nursery / TK</label>
          <label><input type="checkbox" name="sekolah" checked={formData.sekolah} onChange={handleChange} /> Sekolah</label>
        </div>
      </fieldset>

      {/* 7. AKSES LOKASI (10 FIELD) */}
      <fieldset style={{ marginBottom: '20px', padding: '15px' }}>
        <legend><h2>7. Akses Lokasi</h2></legend>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px' }}>
          <label><input type="checkbox" name="dekatJalanUtama" checked={formData.dekatJalanUtama} onChange={handleChange} /> Dekat Jalan Utama</label>
          <label><input type="checkbox" name="dekatJalanTol" checked={formData.dekatJalanTol} onChange={handleChange} /> Dekat Jalan Tol</label>
          <label><input type="checkbox" name="dekatGerbangTol" checked={formData.dekatGerbangTol} onChange={handleChange} /> Dekat Gerbang Tol</label>
          <label><input type="checkbox" name="dekatTerminal" checked={formData.dekatTerminal} onChange={handleChange} /> Dekat Terminal</label>
          <label><input type="checkbox" name="dekatStasiun" checked={formData.dekatStasiun} onChange={handleChange} /> Dekat Stasiun</label>
          <label><input type="checkbox" name="dekatMrt" checked={formData.dekatMrt} onChange={handleChange} /> Dekat MRT</label>
          <label><input type="checkbox" name="dekatLrt" checked={formData.dekatLrt} onChange={handleChange} /> Dekat LRT</label>
          <label><input type="checkbox" name="dekatBandara" checked={formData.dekatBandara} onChange={handleChange} /> Dekat Bandara</label>
          <label><input type="checkbox" name="dekatRumahSakit" checked={formData.dekatRumahSakit} onChange={handleChange} /> Dekat Rumah Sakit</label>
          <label><input type="checkbox" name="dekatMall" checked={formData.dekatMall} onChange={handleChange} /> Dekat Mall</label>
        </div>
      </fieldset>

      {/* 8. POTENSI PENGEMBANGAN (9 FIELD) */}
      <fieldset style={{ marginBottom: '20px', padding: '15px' }}>
        <legend><h2>8. Potensi Pengembangan</h2></legend>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px' }}>
          <label><input type="checkbox" name="cocokPerumahanSubsidi" checked={formData.cocokPerumahanSubsidi} onChange={handleChange} /> Cocok Perumahan Subsidi</label>
          <label><input type="checkbox" name="cocokPerumahanKomersial" checked={formData.cocokPerumahanKomersial} onChange={handleChange} /> Cocok Perumahan Komersial</label>
          <label><input type="checkbox" name="cocokCluster" checked={formData.cocokCluster} onChange={handleChange} /> Cocok Cluster</label>
          <label><input type="checkbox" name="cocokTownhouse" checked={formData.cocokTownhouse} onChange={handleChange} /> Cocok Townhouse</label>
          <label><input type="checkbox" name="cocokVilla" checked={formData.cocokVilla} onChange={handleChange} /> Cocok Villa</label>
          <label><input type="checkbox" name="cocokApartemenLowRise" checked={formData.cocokApartemenLowRise} onChange={handleChange} /> Cocok Apartemen Low Rise</label>
          <label><input type="checkbox" name="cocokMixedResidential" checked={formData.cocokMixedResidential} onChange={handleChange} /> Cocok Mixed Residential</label>
          <label><input type="checkbox" name="buildToSuit" checked={formData.buildToSuit} onChange={handleChange} /> Build to Suit</label>
          <label><input type="checkbox" name="siapDikembangkan" checked={formData.siapDikembangkan} onChange={handleChange} /> Siap Dikembangkan</label>
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
            <option value="PPJB">PPJB</option>
            <option value="Lainnya">Lainnya</option>
          </select>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px' }}>
          <label><input type="checkbox" name="shm" checked={formData.shm} onChange={handleChange} /> SHM</label>
          <label><input type="checkbox" name="hgb" checked={formData.hgb} onChange={handleChange} /> HGB</label>
          <label><input type="checkbox" name="hakPakai" checked={formData.hakPakai} onChange={handleChange} /> Hak Pakai</label>
          <label><input type="checkbox" name="ajb" checked={formData.ajb} onChange={handleChange} /> AJB</label>
          <label><input type="checkbox" name="ppjb" checked={formData.ppjb} onChange={handleChange} /> PPJB</label>
          <label><input type="checkbox" name="kkprLegalitas" checked={formData.kkprLegalitas} onChange={handleChange} /> KKPR</label>
          <label><input type="checkbox" name="pbbLengkap" checked={formData.pbbLengkap} onChange={handleChange} /> PBB Lengkap</label>
          <label><input type="checkbox" name="sitePlanDisetujuiLegalitas" checked={formData.sitePlanDisetujuiLegalitas} onChange={handleChange} /> Site Plan Disetujui</label>
          <label><input type="checkbox" name="amdal" checked={formData.amdal} onChange={handleChange} /> AMDAL</label>
        </div>
      </fieldset>

      {/* 10. INFORMASI INVESTASI (8 FIELD) */}
      <fieldset style={{ marginBottom: '20px', padding: '15px' }}>
        <legend><h2>10. Informasi Investasi</h2></legend>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px' }}>
          <label><input type="checkbox" name="cocokInvestasi" checked={formData.cocokInvestasi} onChange={handleChange} /> Cocok Investasi</label>
          <label><input type="checkbox" name="capitalGainTinggi" checked={formData.capitalGainTinggi} onChange={handleChange} /> Capital Gain Tinggi</label>
          <label><input type="checkbox" name="roiPotensialTinggi" checked={formData.roiPotensialTinggi} onChange={handleChange} /> ROI Potensial Tinggi</label>
          <label><input type="checkbox" name="bisaKpr" checked={formData.bisaKpr} onChange={handleChange} /> Bisa KPR</label>
          <label><input type="checkbox" name="bisaCicilanDeveloper" checked={formData.bisaCicilanDeveloper} onChange={handleChange} /> Bisa Cicilan Developer</label>
          <label><input type="checkbox" name="jointVenture" checked={formData.jointVenture} onChange={handleChange} /> Joint Venture</label>
          <label><input type="checkbox" name="readyForDevelopment" checked={formData.readyForDevelopment} onChange={handleChange} /> Ready for Development</label>
          <label><input type="checkbox" name="prospekKawasanTinggi" checked={formData.prospekKawasanTinggi} onChange={handleChange} /> Prospek Kawasan Tinggi</label>
        </div>
      </fieldset>

      {/* 11. INFORMASI TAMBAHAN (6 FIELD) */}
      <fieldset style={{ marginBottom: '20px', padding: '15px' }}>
        <legend><h2>11. Informasi Tambahan</h2></legend>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px', marginBottom: '15px' }}>
          <label><input type="checkbox" name="sudahDipagar" checked={formData.sudahDipagar} onChange={handleChange} /> Sudah Dipagar</label>
          <label><input type="checkbox" name="sudahDiurug" checked={formData.sudahDiurug} onChange={handleChange} /> Sudah Diurug</label>
          <label><input type="checkbox" name="bebasSengketa" checked={formData.bebasSengketa} onChange={handleChange} /> Bebas Sengketa</label>
          <label><input type="checkbox" name="siapAjb" checked={formData.siapAjb} onChange={handleChange} /> Siap AJB</label>
          <label><input type="checkbox" name="tidakDalamKawasanSengketa" checked={formData.tidakDalamKawasanSengketa} onChange={handleChange} /> Tidak Dalam Kawasan Sengketa</label>
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '5px' }}>Catatan Tambahan</label>
          <textarea name="catatanTambahan" value={formData.catatanTambahan} onChange={handleChange} rows={4} style={{ width: '100%' }} />
        </div>
      </fieldset>

      <button type="submit" style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>Simpan Iklan Tanah Perumahan</button>
    </form>
  );
};

export default FormTanahPerumahan;