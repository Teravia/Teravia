// configs/tanah/kavling/index.ts

import informasiDasar from "./informasi-dasar";
import informasiKavling from "./informasi-kavling";
import spesifikasiTanah from "./spesifikasi-tanah";
import legalitas from "./legalitas";
import infrastrukturAkses from "./infrastruktur-akses";
import potensiInvestasi from "./potensi-investasi";
import lingkungan from "./lingkungan";
import informasiTambahan from "./informasi-tambahan";

const kavling = [
  ...(Array.isArray(informasiDasar) ? informasiDasar : [informasiDasar]),
  ...(Array.isArray(informasiKavling) ? informasiKavling : [informasiKavling]),
  ...(Array.isArray(spesifikasiTanah) ? spesifikasiTanah : [spesifikasiTanah]),
  ...(Array.isArray(legalitas) ? legalitas : [legalitas]),
  ...(Array.isArray(infrastrukturAkses) ? infrastrukturAkses : [infrastrukturAkses]),
  ...(Array.isArray(potensiInvestasi) ? potensiInvestasi : [potensiInvestasi]),
  ...(Array.isArray(lingkungan) ? lingkungan : [lingkungan]),
  ...(Array.isArray(informasiTambahan) ? informasiTambahan : [informasiTambahan]),
].filter(Boolean);

export default kavling;

