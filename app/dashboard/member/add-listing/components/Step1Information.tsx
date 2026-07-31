import React from 'react';
import { UseFormReturn } from 'react-hook-form';

interface Step1Props {
  form: UseFormReturn<any>;
}

// ==========================================
// UTILITY COMPONENTS & HELPERS
// ==========================================
const FormSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-8 border-b pb-6">
    <h3 className="text-lg font-semibold text-gray-800 mb-4">{title}</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">{children}</div>
  </div>
);

const InputField = ({ label, name, register, required, type = 'text', placeholder = '' }: any) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <input
      type={type}
      {...register(name, { required })}
      placeholder={placeholder}
      className="w-full border rounded-md p-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
    />
  </div>
);

const SelectField = ({ label, name, register, required, options = [] }: any) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <select
      {...register(name, { required })}
      className="w-full border rounded-md p-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none bg-white"
    >
      <option value="">-- Pilih --</option>
      {options.map((opt: string) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  </div>
);

const CheckboxField = ({ label, name, register }: any) => (
  <div className="flex items-center gap-2 mt-2">
    <input
      type="checkbox"
      id={name}
      {...register(name)}
      className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
    />
    <label htmlFor={name} className="text-sm text-gray-700 cursor-pointer">
      {label}
    </label>
  </div>
);

const TextareaField = ({ label, name, register, placeholder = '' }: any) => (
  <div className="col-span-1 md:col-span-2 lg:col-span-3">
    <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    <textarea
      rows={3}
      {...register(name)}
      placeholder={placeholder}
      className="w-full border rounded-md p-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
    />
  </div>
);

// ==========================================
// SUB-FORM: RUMAH
// ==========================================
const FormRumah = ({ register }: { register: any }) => (
  <>
    <FormSection title="Informasi Dasar Rumah">
      <InputField label="Judul Iklan" name="judulIklan" register={register} required />
      <SelectField label="Jenis Transaksi" name="jenisTransaksi" register={register} required options={['Jual', 'Sewa']} />
      <SelectField
        label="Tipe Rumah"
        name="tipeRumah"
        register={register}
        required
        options={[
          'Rumah Subsidi', 'Rumah Komersial', 'Rumah Second', 'Rumah Baru', 'Rumah Minimalis',
          'Rumah Modern', 'Rumah Klasik', 'Rumah Scandinavian', 'Rumah Industrial', 'Rumah Tropis',
          'Rumah Mewah', 'Smart Home', 'Villa Residence'
        ]}
      />
      <SelectField
        label="Kondisi Properti"
        name="kondisiProperti"
        register={register}
        required
        options={['Baru', 'Bekas', 'Renovasi Total', 'Renovasi Sebagian', 'Siap Huni', 'Dalam Pembangunan']}
      />
      <SelectField label="Status Kepemilikan" name="statusKepemilikan" register={register} required options={['Milik Sendiri', 'Waris', 'Sengketa', 'Lainnya']} />
      <InputField label="Tahun Dibangun" name="tahunDibangun" register={register} type="number" />
      <InputField label="Tahun Renovasi" name="tahunRenovasi" register={register} type="number" />
      <SelectField label="Status Listing" name="statusListing" register={register} required options={['Available', 'Under Offer', 'Sold', 'Rented']} />
    </FormSection>

    <FormSection title="Informasi Bangunan">
      <InputField label="Luas Tanah (m²)" name="luasTanah" register={register} type="number" />
      <InputField label="Luas Bangunan (m²)" name="luasBangunan" register={register} type="number" />
      <InputField label="Jumlah Lantai" name="jumlahLantai" register={register} type="number" />
      <InputField label="Kamar Tidur" name="kamarTidur" register={register} type="number" />
      <InputField label="Kamar Mandi" name="kamarMandi" register={register} type="number" />
      <InputField label="Kamar Tidur Pembantu" name="kamarTidurPembantu" register={register} type="number" />
      <InputField label="Kamar Mandi Pembantu" name="kamarMandiPembantu" register={register} type="number" />
      <CheckboxField label="Ruang Tamu" name="ruangTamu" register={register} />
      <CheckboxField label="Ruang Keluarga" name="ruangKeluarga" register={register} />
      <CheckboxField label="Ruang Makan" name="ruangMakan" register={register} />
      <CheckboxField label="Dapur Bersih" name="dapurBersih" register={register} />
      <CheckboxField label="Dapur Kotor" name="dapurKotor" register={register} />
      <CheckboxField label="Gudang" name="gudang" register={register} />
      <CheckboxField label="Loteng" name="loteng" register={register} />
      <CheckboxField label="Basement" name="basement" register={register} />
      <CheckboxField label="Balkon" name="balkon" register={register} />
      <CheckboxField label="Teras Depan" name="terasDepan" register={register} />
      <CheckboxField label="Teras Belakang" name="terasBelakang" register={register} />
    </FormSection>

    <FormSection title="Garasi & Parkir">
      <InputField label="Garasi Mobil" name="garasiMobil" register={register} type="number" />
      <InputField label="Carport" name="carport" register={register} type="number" />
      <InputField label="Parkir Motor" name="parkirMotor" register={register} type="number" />
      <CheckboxField label="Charging EV" name="chargingEV" register={register} />
    </FormSection>

    <FormSection title="Spesifikasi Bangunan & Material">
      <InputField label="Daya Listrik (VA)" name="dayaListrik" register={register} type="number" />
      <SelectField label="Sumber Air" name="sumberAir" register={register} options={['PDAM', 'Sumur Bor', 'Artesis']} />
      <CheckboxField label="Air Panas" name="airPanas" register={register} />
      <InputField label="AC (Jumlah)" name="ac" register={register} type="number" />
      <CheckboxField label="Internet Fiber" name="internetFiber" register={register} />
      <CheckboxField label="TV Kabel" name="tvKabel" register={register} />
      <CheckboxField label="Telepon Rumah" name="teleponRumah" register={register} />
      <SelectField label="Material Atap" name="materialAtap" register={register} options={['Genteng Beton', 'Genteng Keramik', 'Baja Ringan', 'Metal', 'Dak Beton']} />
      <SelectField label="Material Lantai" name="materialLantai" register={register} options={['Keramik', 'Granit', 'Marmer', 'Vinyl', 'Parket', 'Homogeneous Tile']} />
      <SelectField label="Material Dinding" name="materialDinding" register={register} options={['Bata Merah', 'Bata Ringan', 'Beton', 'Precast']} />
      <SelectField label="Plafon" name="plafon" register={register} options={['Gypsum', 'GRC', 'PVC', 'Kayu']} />
    </FormSection>

    <FormSection title="Fasilitas Rumah">
      <CheckboxField label="Taman Depan" name="tamanDepan" register={register} />
      <CheckboxField label="Taman Belakang" name="tamanBelakang" register={register} />
      <CheckboxField label="Kolam Renang Pribadi" name="kolamRenangPribadi" register={register} />
      <CheckboxField label="Gazebo" name="gazebo" register={register} />
      <CheckboxField label="BBQ Area" name="bbqArea" register={register} />
      <CheckboxField label="Rooftop" name="rooftop" register={register} />
      <CheckboxField label="Mushola" name="mushola" register={register} />
      <CheckboxField label="Walk-in Closet" name="walkInCloset" register={register} />
      <CheckboxField label="Pantry" name="pantry" register={register} />
      <CheckboxField label="Laundry Room" name="laundryRoom" register={register} />
      <CheckboxField label="Ruang Kerja" name="ruangKerja" register={register} />
      <CheckboxField label="Ruang Hobi" name="ruangHobi" register={register} />
    </FormSection>

    <FormSection title="Keamanan & Lingkungan">
      <CheckboxField label="One Gate System" name="oneGateSystem" register={register} />
      <CheckboxField label="Security 24 Jam" name="security24Jam" register={register} />
      <CheckboxField label="CCTV" name="cctv" register={register} />
      <CheckboxField label="Smart Lock" name="smartLock" register={register} />
      <CheckboxField label="Alarm" name="alarm" register={register} />
      <CheckboxField label="Smoke Detector" name="smokeDetector" register={register} />
      <CheckboxField label="Fire Extinguisher" name="fireExtinguisher" register={register} />
      <CheckboxField label="Dalam Cluster" name="dalamCluster" register={register} />
      <CheckboxField label="Dalam Perumahan" name="dalamPerumahan" register={register} />
      <CheckboxField label="Bebas Banjir" name="bebasBanjir" register={register} />
      <CheckboxField label="Dekat Transportasi Umum" name="dekatTransportasiUmum" register={register} />
    </FormSection>

    <FormSection title="Legalitas & Investasi">
      <SelectField label="Sertifikat Utama" name="sertifikat" register={register} options={['SHM', 'HGB', 'AJB', 'Girick', 'Lainnya']} />
      <CheckboxField label="SHM" name="shm" register={register} />
      <CheckboxField label="SHGB" name="shgb" register={register} />
      <CheckboxField label="IMB / PBG" name="imb" register={register} />
      <CheckboxField label="PBB" name="pbb" register={register} />
      <CheckboxField label="AJB" name="ajb" register={register} />
      <CheckboxField label="Siap KPR" name="siapKpr" register={register} />
      <CheckboxField label="Cocok Investasi" name="cocokInvestasi" register={register} />
      <CheckboxField label="Cocok Disewakan" name="cocokDisewakan" register={register} />
      <CheckboxField label="Potensi Capital Gain" name="potensiCapitalGain" register={register} />
      <CheckboxField label="Potensi Rental Yield" name="potensiRentalYield" register={register} />
    </FormSection>

    <FormSection title="Informasi Tambahan">
      <SelectField label="Furnished" name="furnished" register={register} options={['Unfurnished', 'Semi Furnished', 'Fully Furnished']} />
      <SelectField label="Hadap" name="hadap" register={register} options={['Utara', 'Selatan', 'Barat', 'Timur', 'Tenggara', 'Barat Daya', 'Barat Laut', 'Timur Laut']} />
      <CheckboxField label="Hook" name="hook" register={register} />
      <CheckboxField label="Smart Home" name="smartHome" register={register} />
      <TextareaField label="Catatan Tambahan" name="catatanTambahan" register={register} />
    </FormSection>
  </>
);

// ==========================================
// SUB-FORM: APARTEMEN
// ==========================================
const FormApartemen = ({ register }: { register: any }) => (
  <>
    <FormSection title="Informasi Dasar Apartemen">
      <InputField label="Judul Iklan" name="judulIklan" register={register} required />
      <SelectField label="Jenis Transaksi" name="jenisTransaksi" register={register} required options={['Jual', 'Sewa']} />
      <InputField label="Nama Apartemen" name="namaApartemen" register={register} required />
      <InputField label="Tower" name="tower" register={register} required />
      <InputField label="Nomor Unit" name="nomorUnit" register={register} required />
      <InputField label="Developer" name="developer" register={register} />
      <SelectField label="Kondisi Properti" name="kondisiProperti" register={register} required options={['Baru', 'Sangat Baik', 'Baik', 'Perlu Renovasi Ringan', 'Perlu Renovasi Total']} />
      <SelectField label="Status Kepemilikan" name="statusKepemilikan" register={register} required options={['SHMSRS', 'PPJB', 'Sewa', 'Lainnya']} />
    </FormSection>

    <FormSection title="Informasi Unit">
      <InputField label="Luas Unit (m²)" name="luasUnit" register={register} type="number" required />
      <SelectField label="Tipe Unit" name="tipeUnit" register={register} required options={['Studio', '1 Bedroom', '2 Bedroom', '3 Bedroom', '4 Bedroom', 'Penthouse', 'Duplex', 'Loft']} />
      <InputField label="Lantai" name="lantai" register={register} type="number" required />
      <InputField label="Jumlah Kamar Tidur" name="jumlahKamarTidur" register={register} type="number" required />
      <InputField label="Jumlah Kamar Mandi" name="jumlahKamarMandi" register={register} type="number" required />
      <InputField label="Kamar Mandi Dalam" name="kamarMandiDalam" register={register} type="number" />
      <InputField label="Ceiling Height (m)" name="ceilingHeight" register={register} type="number" />
      <CheckboxField label="Balkon" name="balkon" register={register} />
      <InputField label="Luas Balkon (m²)" name="luasBalkon" register={register} type="number" />
      <SelectField label="Arah Hadap" name="arahHadap" register={register} options={['Utara', 'Selatan', 'Barat', 'Timur', 'Tenggara', 'Barat Daya', 'Barat Laut', 'Timur Laut']} />
      <SelectField label="View Unit" name="viewUnit" register={register} options={['City View', 'Pool View', 'Garden View', 'Mountain View', 'Sea View', 'Lake View', 'River View', 'Golf View']} />
      <CheckboxField label="Corner Unit" name="cornerUnit" register={register} />
    </FormSection>

    <FormSection title="Ruangan & Interior">
      <CheckboxField label="Living Room" name="livingRoom" register={register} />
      <CheckboxField label="Dining Area" name="diningArea" register={register} />
      <CheckboxField label="Pantry" name="pantry" register={register} />
      <CheckboxField label="Kitchen Set" name="kitchenSet" register={register} />
      <CheckboxField label="Walk-in Closet" name="walkInCloset" register={register} />
      <CheckboxField label="Storage Room" name="storageRoom" register={register} />
      <CheckboxField label="Laundry Area" name="laundryArea" register={register} />
      <CheckboxField label="Maid Room" name="maidRoom" register={register} />
      <CheckboxField label="Maid Bathroom" name="maidBathroom" register={register} />
      <CheckboxField label="Workspace" name="workspace" register={register} />
      <CheckboxField label="Study Room" name="studyRoom" register={register} />
    </FormSection>

    <FormSection title="Furnitur & Perabotan">
      <SelectField label="Furnished" name="furnished" register={register} options={['Fully Furnished', 'Semi Furnished', 'Unfurnished']} />
      <InputField label="Jumlah AC" name="ac" register={register} type="number" />
      <CheckboxField label="Water Heater" name="waterHeater" register={register} />
      <CheckboxField label="Lemari Built-in" name="lemariBuiltIn" register={register} />
      <CheckboxField label="Sofa" name="sofa" register={register} />
      <CheckboxField label="Dining Set" name="diningSet" register={register} />
      <CheckboxField label="Tempat Tidur" name="tempatTidur" register={register} />
      <CheckboxField label="Kulkas" name="kulkas" register={register} />
      <CheckboxField label="Mesin Cuci" name="mesinCuci" register={register} />
      <CheckboxField label="Microwave" name="microwave" register={register} />
      <CheckboxField label="TV" name="tv" register={register} />
      <CheckboxField label="Smart Home" name="smartHome" register={register} />
      <CheckboxField label="Smart Door Lock" name="smartDoorLock" register={register} />
    </FormSection>

    <FormSection title="Fasilitas & Parkir Apartemen">
      <CheckboxField label="Lobby" name="lobby" register={register} />
      <CheckboxField label="Lift Penumpang" name="liftPenumpang" register={register} />
      <CheckboxField label="Lift Service" name="liftService" register={register} />
      <CheckboxField label="Swimming Pool" name="swimmingPool" register={register} />
      <CheckboxField label="Gym" name="gym" register={register} />
      <CheckboxField label="Sauna" name="sauna" register={register} />
      <CheckboxField label="Hak Parkir" name="hakParkir" register={register} />
      <InputField label="Jumlah Slot Parkir" name="jumlahSlotParkir" register={register} type="number" />
      <CheckboxField label="Parkir Tamu" name="parkirTamu" register={register} />
    </FormSection>

    <FormSection title="Biaya & Legalitas">
      <InputField label="IPL / Service Charge (Rp/Bulan)" name="ipl" register={register} type="number" />
      <InputField label="Sinking Fund (Rp/Bulan)" name="sinkingFund" register={register} type="number" />
      <InputField label="Biaya Parkir (Rp/Bulan)" name="biayaParkir" register={register} type="number" />
      <SelectField label="Sertifikat" name="sertifikat" register={register} options={['SHMSRS', 'PPJB', 'AJB', 'Hak Pakai', 'Lainnya']} />
      <CheckboxField label="Bisa KPA" name="bisaKpa" register={register} />
    </FormSection>

    <FormSection title="Informasi Tambahan">
      <SelectField label="Status Unit" name="statusUnit" register={register} options={['Kosong', 'Siap Huni', 'Disewakan', 'Owner Occupied', 'Booking']} />
      <TextareaField label="Alasan Dijual" name="alasanDijual" register={register} />
      <TextareaField label="Catatan Tambahan" name="catatanTambahan" register={register} />
    </FormSection>
  </>
);

// ==========================================
// SUB-FORM: RUMAH CLUSTER
// ==========================================
const FormCluster = ({ register }: { register: any }) => (
  <>
    <FormSection title="Informasi Dasar Cluster">
      <InputField label="Judul Iklan" name="judulIklan" register={register} required />
      <SelectField label="Jenis Transaksi" name="jenisTransaksi" register={register} required options={['Jual', 'Sewa']} />
      <InputField label="Nama Cluster" name="namaCluster" register={register} required />
      <InputField label="Nama Perumahan" name="namaPerumahan" register={register} required />
      <InputField label="Developer" name="developer" register={register} />
      <SelectField label="Kondisi Properti" name="kondisiProperti" register={register} required options={['Baru', 'Sangat Baik', 'Baik', 'Perlu Renovasi Ringan', 'Perlu Renovasi Total']} />
      <SelectField label="Status Kepemilikan" name="statusKepemilikan" register={register} required options={['SHM', 'HGB', 'PPJB', 'Lainnya']} />
    </FormSection>

    <FormSection title="Informasi Bangunan & Ruang">
      <InputField label="Luas Tanah (m²)" name="luasTanah" register={register} type="number" required />
      <InputField label="Luas Bangunan (m²)" name="luasBangunan" register={register} type="number" required />
      <InputField label="Lebar Muka (m)" name="lebarMuka" register={register} type="number" />
      <InputField label="Panjang Tanah (m)" name="panjangTanah" register={register} type="number" />
      <InputField label="Jumlah Lantai" name="jumlahLantai" register={register} type="number" required />
      <SelectField label="Posisi Unit" name="posisiUnit" register={register} options={['Tengah', 'Hook', 'Tusuk Sate', 'Cul-de-sac', 'Dekat Taman', 'Dekat Club House', 'Dekat Gerbang']} />
      <InputField label="Jumlah Kamar Tidur" name="jumlahKamarTidur" register={register} type="number" />
      <InputField label="Jumlah Kamar Mandi" name="jumlahKamarMandi" register={register} type="number" />
      <InputField label="Carport" name="carport" register={register} type="number" />
      <InputField label="Garasi" name="garasi" register={register} type="number" />
    </FormSection>

    
    <FormSection title="Fasilitas Cluster & Biaya">
      <CheckboxField label="One Gate System" name="oneGateSystem" register={register} />
      <CheckboxField label="Security 24 Jam" name="security24Jam" register={register} />
      <CheckboxField label="Club House" name="clubHouse" register={register} />
      <CheckboxField label="Swimming Pool" name="swimmingPool" register={register} />
      <CheckboxField label="Playground" name="playground" register={register} />
      <InputField label="IPL / Maintenance (Rp/Bulan)" name="ipl" register={register} type="number" />
      <InputField label="Biaya Keamanan (Rp/Bulan)" name="biayaKeamanan" register={register} type="number" />
      <InputField label="Biaya Sampah (Rp/Bulan)" name="biayaSampah" register={register} type="number" />
    </FormSection>

    <FormSection title="Informasi Tambahan">
      <TextareaField label="Alasan Dijual" name="alasanDijual" register={register} />
      <TextareaField label="Catatan Tambahan" name="catatanTambahan" register={register} />
    </FormSection>
  </>
);

// ==========================================
// SUB-FORM: TOWNHOUSE
// ==========================================
const FormTownhouse = ({ register }: { register: any }) => (
  <>
    <FormSection title="Informasi Dasar Townhouse">
      <InputField label="Judul Iklan" name="judulIklan" register={register} required />
      <SelectField label="Jenis Transaksi" name="jenisTransaksi" register={register} required options={['Jual', 'Sewa']} />
      <InputField label="Nama Townhouse" name="namaTownhouse" register={register} required />
      <InputField label="Nama Developer" name="namaDeveloper" register={register} />
      <InputField label="Jumlah Unit Townhouse" name="jumlahUnitTownhouse" register={register} type="number" />
      <SelectField label="Kondisi Properti" name="kondisiProperti" register={register} required options={['Baru', 'Sangat Baik', 'Baik', 'Perlu Renovasi Ringan', 'Perlu Renovasi Total']} />
      <SelectField label="Status Kepemilikan" name="statusKepemilikan" register={register} required options={['SHM', 'HGB', 'Lainnya']} />
    </FormSection>

    <FormSection title="Spesifikasi & Outdoor">
      <InputField label="Luas Tanah (m²)" name="luasTanah" register={register} type="number" required />
      <InputField label="Luas Bangunan (m²)" name="luasBangunan" register={register} type="number" required />
      <InputField label="Jumlah Lantai" name="jumlahLantai" register={register} type="number" required />
      <CheckboxField label="Private Garden" name="privateGarden" register={register} />
      <CheckboxField label="Private Pool" name="privatePool" register={register} />
      <CheckboxField label="Rooftop Terrace" name="rooftopTerrace" register={register} />
      <CheckboxField label="Charging Station EV" name="chargingStationEV" register={register} />
      <CheckboxField label="Smart Home System" name="smartHomeSystem" register={register} />
    </FormSection>

    <FormSection title="Informasi Tambahan">
      <TextareaField label="Catatan Tambahan" name="catatanTambahan" register={register} />
    </FormSection>
  </>
);

// ==========================================
// SUB-FORM: PENTHOUSE
// ==========================================
const FormPenthouse = ({ register }: { register: any }) => (
  <>
    <FormSection title="Informasi Dasar Penthouse">
      <InputField label="Judul Iklan" name="judulIklan" register={register} required />
      <SelectField label="Jenis Transaksi" name="jenisTransaksi" register={register} required options={['Jual', 'Sewa']} />
      <InputField label="Nama Apartemen / Penthouse" name="namaApartemen" register={register} required />
      <InputField label="Tower" name="tower" register={register} required />
      <InputField label="Nomor Unit" name="nomorUnit" register={register} required />
      <SelectField label="Kelas Properti" name="kelasProperti" register={register} required options={['Luxury', 'Ultra Luxury', 'Super Luxury']} />
      <SelectField label="Kondisi Properti" name="kondisiProperti" register={register} required options={['Baru', 'Sangat Baik', 'Baik', 'Baru Renovasi', 'Perlu Renovasi']} />
    </FormSection>

    <FormSection title="Fitur Mewah & Ruangan">
      <InputField label="Luas Unit (m²)" name="luasUnit" register={register} type="number" required />
      <InputField label="Lantai Unit" name="lantaiUnit" register={register} type="number" required />
      <CheckboxField label="Private Lift" name="privateLift" register={register} />
      <CheckboxField label="Private Pool" name="privatePool" register={register} />
      <CheckboxField label="Sky Terrace" name="skyTerrace" register={register} />
      <CheckboxField label="Wine Cellar" name="wineCellar" register={register} />
      <CheckboxField label="Home Theater" name="homeTheater" register={register} />
      <InputField label="Interior Designer" name="interiorDesigner" register={register} />
    </FormSection>

    <FormSection title="Informasi Tambahan">
      <TextareaField label="Catatan Tambahan" name="catatanTambahan" register={register} />
    </FormSection>
  </>
);

// ==========================================
// SUB-FORM: RUMAH SUSUN (RUSUN)
// ==========================================
const FormRusun = ({ register }: { register: any }) => (
  <>
    <FormSection title="Informasi Dasar Rusun">
      <InputField label="Judul Iklan" name="judulIklan" register={register} required />
      <SelectField label="Jenis Transaksi" name="jenisTransaksi" register={register} required options={['Jual', 'Sewa']} />
      <InputField label="Nama Rusun" name="namaRusun" register={register} required />
      <InputField label="Blok / Tower" name="blok" register={register} required />
      <InputField label="Nomor Unit" name="nomorUnit" register={register} required />
      <InputField label="Pengelola" name="pengelola" register={register} />
      <SelectField label="Kondisi Properti" name="kondisiProperti" register={register} required options={['Baru', 'Sangat Baik', 'Baik', 'Perlu Renovasi Ringan', 'Perlu Renovasi Total']} />
    </FormSection>

    <FormSection title="Informasi Unit & Fasilitas">
      <InputField label="Luas Unit (m²)" name="luasUnit" register={register} type="number" required />
      <InputField label="Lantai" name="lantai" register={register} type="number" required />
      <SelectField label="Tipe Unit" name="tipeUnit" register={register} required options={['Studio', '1 Bedroom', '2 Bedroom', '3 Bedroom']} />
      <InputField label="Jumlah Kamar Tidur" name="jumlahKamarTidur" register={register} type="number" required />
      <InputField label="Jumlah Kamar Mandi" name="jumlahKamarMandi" register={register} type="number" required />
      <CheckboxField label="Lift" name="lift" register={register} />
      <CheckboxField label="Area Bermain" name="areaBermain" register={register} />
      <CheckboxField label="Area Jemur Bersama" name="areaJemurBersama" register={register} />
      <InputField label="IPL (Rp/Bulan)" name="ipl" register={register} type="number" />
    </FormSection>

    <FormSection title="Informasi Tambahan">
      <TextareaField label="Catatan Tambahan" name="catatanTambahan" register={register} />
    </FormSection>
  </>
);

// ==========================================
// SUB-FORM: RUMAH KONTRAKAN
// ==========================================
const FormKontrakan = ({ register }: { register: any }) => (
  <>
    <FormSection title="Informasi Dasar Kontrakan">
      <InputField label="Judul Iklan" name="judulIklan" register={register} required />
      <SelectField label="Jenis Transaksi" name="jenisTransaksi" register={register} required options={['Sewa']} />
      <SelectField label="Status Kontrak" name="statusKontrak" register={register} required options={['Disewakan', 'Sedang Dikontrak', 'Akan Tersedia']} />
      <SelectField label="Durasi Kontrak Minimum" name="durasiKontrakMinimum" register={register} required options={['6 Bulan', '1 Tahun', '2 Tahun', '>2 Tahun']} />
      <SelectField label="Kondisi Properti" name="kondisiProperti" register={register} required options={['Baru', 'Sangat Baik', 'Baik', 'Perlu Renovasi Ringan', 'Perlu Renovasi Total']} />
    </FormSection>

    <FormSection title="Informasi Bangunan & Sewa">
      <InputField label="Luas Tanah (m²)" name="luasTanah" register={register} type="number" required />
      <InputField label="Luas Bangunan (m²)" name="luasBangunan" register={register} type="number" required />
      <InputField label="Jumlah Lantai" name="jumlahLantai" register={register} type="number" required />
      <InputField label="Harga Sewa per Tahun (Rp)" name="hargaSewaTahun" register={register} type="number" />
      <InputField label="Deposit (Rp)" name="deposit" register={register} type="number" />
      <CheckboxField label="Bisa Perpanjang" name="bisaPerpanjang" register={register} />
      <CheckboxField label="Cocok untuk Keluarga" name="cocokKeluarga" register={register} />
      <CheckboxField label="Cocok untuk Karyawan" name="cocokKaryawan" register={register} />
    </FormSection>

    <FormSection title="Aturan & Catatan">
      <CheckboxField label="Merokok Diizinkan" name="merokokDiizinkan" register={register} />
      <CheckboxField label="Boleh Renovasi Ringan" name="bolehRenovasiRingan" register={register} />
      <InputField label="Jam Bertamu" name="jamBertamu" register={register} />
      <TextareaField label="Ketentuan Tambahan" name="ketentuanTambahan" register={register} />
    </FormSection>
  </>
);

// ==========================================
// MAIN STEP 1 COMPONENT
// ==========================================
export default function Step1Information({ form }: Step1Props) {
  const { register, watch } = form;

  const category = watch('category');
  const propertyType = watch('propertyType');

  return (
    <div className="space-y-6">
      {/* ------------------------------------------ */}
      {/* BLOK 1: HUNIAN                             */}
      {/* ------------------------------------------ */}
      {category === 'Hunian' && (
        <>
          {propertyType === 'Rumah' && <FormRumah register={register} />}
          {propertyType === 'Apartemen' && <FormApartemen register={register} />}
          {propertyType === 'Rumah Cluster' && <FormCluster register={register} />}
          {propertyType === 'Townhouse' && <FormTownhouse register={register} />}
          {propertyType === 'Penthouse' && <FormPenthouse register={register} />}
          {propertyType === 'Rumah Susun (Rusun)' && <FormRusun register={register} />}
          {propertyType === 'Rumah Kontrakan' && <FormKontrakan register={register} />}

          {/* Default fallback jika tipe hunian belum dipilih */}
          {!['Rumah', 'Apartemen', 'Rumah Cluster', 'Townhouse', 'Penthouse', 'Rumah Susun (Rusun)', 'Rumah Kontrakan'].includes(propertyType) && (
            <div className="p-4 bg-amber-50 text-amber-800 rounded-md">
              Silakan pilih Jenis Properti Hunian terlebih dahulu.
            </div>
          )}
        </>
      )}

      {/* ------------------------------------------ */}
      {/* PLACEHOLDER: BLOK 2 (KOMERSIAL)           */}
      {/* ------------------------------------------ */}
      {category === 'Komersial' && (
        <div className="p-6 border border-dashed rounded-lg text-center text-gray-500">
          <p className="font-semibold text-gray-700">Form Komersial ({propertyType})</p>
          <p className="text-sm">Silakan kirimkan dokumen classification.md Komersial untuk tahap berikutnya.</p>
        </div>
      )}

      {/* ------------------------------------------ */}
      {/* PLACEHOLDER: BLOK 3 (INDUSTRI)            */}
      {/* ------------------------------------------ */}
      {category === 'Industri' && (
        <div className="p-6 border border-dashed rounded-lg text-center text-gray-500">
          <p className="font-semibold text-gray-700">Form Industri ({propertyType})</p>
          <p className="text-sm">Silakan kirimkan dokumen classification.md Industri untuk tahap berikutnya.</p>
        </div>
      )}

      {/* ------------------------------------------ */}
      {/* PLACEHOLDER: BLOK 4 (TANAH)               */}
      {/* ------------------------------------------ */}
      {category === 'Tanah' && (
        <div className="p-6 border border-dashed rounded-lg text-center text-gray-500">
          <p className="font-semibold text-gray-700">Form Tanah ({propertyType})</p>
          <p className="text-sm">Silakan kirimkan dokumen classification.md Tanah untuk tahap berikutnya.</p>
        </div>
      )}

      {/* Fallback jika kategori belum dipilih */}
      {!category && (
        <div className="p-4 bg-blue-50 text-blue-800 rounded-md">
          Silakan pilih Kategori Properti terlebih dahulu di atas.
        </div>
      )}
    </div>
  );
}
