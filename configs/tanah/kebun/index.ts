// configs/tanah/kebun/index.ts

import informasiDasar from "./informasi-dasar";
import informasiKebun from "./informasi-kebun";
import spesifikasiLahan from "./spesifikasi-lahan";
import legalitas from "./legalitas";
import aksesPengairan from "./akses-pengairan";
import tanamanProduktivitas from "./tanaman-produktivitas";
import lingkungan from "./lingkungan";
import informasiTambahan from "./informasi-tambahan";

const kebun = [
  ...(Array.isArray(informasiDasar) ? informasiDasar : [informasiDasar]),
  ...(Array.isArray(informasiKebun) ? informasiKebun : [informasiKebun]),
  ...(Array.isArray(spesifikasiLahan) ? spesifikasiLahan : [spesifikasiLahan]),
  ...(Array.isArray(legalitas) ? legalitas : [legalitas]),
  ...(Array.isArray(aksesPengairan) ? aksesPengairan : [aksesPengairan]),
  ...(Array.isArray(tanamanProduktivitas) ? tanamanProduktivitas : [tanamanProduktivitas]),
  ...(Array.isArray(lingkungan) ? lingkungan : [lingkungan]),
  ...(Array.isArray(informasiTambahan) ? informasiTambahan : [informasiTambahan]),
].filter(Boolean);

export default kebun;
