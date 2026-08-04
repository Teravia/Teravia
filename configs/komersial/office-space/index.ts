// configs/komersial/office-space/index.ts

import informasiDasar from "./informasi-dasar";
import informasiUnit from "./informasi-unit";
import spesifikasiUnit from "./spesifikasi-unit";
import fasilitasUnit from "./fasilitas-unit";
import fasilitasGedung from "./fasilitas-gedung";
import legalitas from "./legalitas";
import parkir from "./parkir";
import keamanan from "./keamanan";
import utilitas from "./utilitas";
import biayaRutin from "./biaya-rutin";
import lingkungan from "./lingkungan";
import informasiTambahan from "./informasi-tambahan";

const officeSpace = [
  ...(Array.isArray(informasiDasar) ? informasiDasar : [informasiDasar]),
  ...(Array.isArray(informasiUnit) ? informasiUnit : [informasiUnit]),
  ...(Array.isArray(spesifikasiUnit) ? spesifikasiUnit : [spesifikasiUnit]),
  ...(Array.isArray(fasilitasUnit) ? fasilitasUnit : [fasilitasUnit]),
  ...(Array.isArray(fasilitasGedung) ? fasilitasGedung : [fasilitasGedung]),
  ...(Array.isArray(legalitas) ? legalitas : [legalitas]),
  ...(Array.isArray(parkir) ? parkir : [parkir]),
  ...(Array.isArray(keamanan) ? keamanan : [keamanan]),
  ...(Array.isArray(utilitas) ? utilitas : [utilitas]),
  ...(Array.isArray(biayaRutin) ? biayaRutin : [biayaRutin]),
  ...(Array.isArray(lingkungan) ? lingkungan : [lingkungan]),
  ...(Array.isArray(informasiTambahan) ? informasiTambahan : [informasiTambahan]),
].filter(Boolean);

export default officeSpace;
