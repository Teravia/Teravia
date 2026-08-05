// configs/tanah/sawah/index.ts

import informasiDasar from "./informasi-dasar";
import informasiSawah from "./informasi-sawah";
import spesifikasiLahan from "./spesifikasi-lahan";
import legalitas from "./legalitas";
import irigasiPengairan from "./irigasi-pengairan";
import produktivitas from "./produktivitas";
import lingkungan from "./lingkungan";
import informasiTambahan from "./informasi-tambahan";

const sawah = [
  ...(Array.isArray(informasiDasar) ? informasiDasar : [informasiDasar]),
  ...(Array.isArray(informasiSawah) ? informasiSawah : [informasiSawah]),
  ...(Array.isArray(spesifikasiLahan) ? spesifikasiLahan : [spesifikasiLahan]),
  ...(Array.isArray(legalitas) ? legalitas : [legalitas]),
  ...(Array.isArray(irigasiPengairan) ? irigasiPengairan : [irigasiPengairan]),
  ...(Array.isArray(produktivitas) ? produktivitas : [produktivitas]),
  ...(Array.isArray(lingkungan) ? lingkungan : [lingkungan]),
  ...(Array.isArray(informasiTambahan) ? informasiTambahan : [informasiTambahan]),
].filter(Boolean);

export default sawah;
