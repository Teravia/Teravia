// configs/tanah/peternakan/index.ts

import informasiDasar from "./informasi-dasar";
import informasiPeternakan from "./informasi-peternakan";
import spesifikasiLahan from "./spesifikasi-lahan";
import legalitas from "./legalitas";
import ternakKapasitas from "./ternak-kapasitas";
import fasilitasInfrastruktur from "./fasilitas-infrastruktur";
import lingkungan from "./lingkungan";
import informasiTambahan from "./informasi-tambahan";

const peternakan = [
  ...(Array.isArray(informasiDasar) ? informasiDasar : [informasiDasar]),
  ...(Array.isArray(informasiPeternakan) ? informasiPeternakan : [informasiPeternakan]),
  ...(Array.isArray(spesifikasiLahan) ? spesifikasiLahan : [spesifikasiLahan]),
  ...(Array.isArray(legalitas) ? legalitas : [legalitas]),
  ...(Array.isArray(ternakKapasitas) ? ternakKapasitas : [ternakKapasitas]),
  ...(Array.isArray(fasilitasInfrastruktur) ? fasilitasInfrastruktur : [fasilitasInfrastruktur]),
  ...(Array.isArray(lingkungan) ? lingkungan : [lingkungan]),
  ...(Array.isArray(informasiTambahan) ? informasiTambahan : [informasiTambahan]),
].filter(Boolean);

export default peternakan;
