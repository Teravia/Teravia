// configs/hunian/rusun/index.ts

import informasiDasar from "./informasi-dasar";
import informasiUnit from "./informasi-unit";
import spesifikasiUnit from "./spesifikasi-unit";
import programSubsidi from "./program-subsidi";
import legalitas from "./legalitas";
import fasilitasUnit from "./fasilitas-unit";
import fasilitasGedung from "./fasilitas-gedung";
import keamanan from "./keamanan";
import parkir from "./parkir";
import utilitas from "./utilitas";
import biayaRutin from "./biaya-rutin";
import lingkungan from "./lingkungan";
import informasiTambahan from "./informasi-tambahan";

const rusun = [
  ...(Array.isArray(informasiDasar) ? informasiDasar : [informasiDasar]),
  ...(Array.isArray(informasiUnit) ? informasiUnit : [informasiUnit]),
  ...(Array.isArray(spesifikasiUnit) ? spesifikasiUnit : [spesifikasiUnit]),
  ...(Array.isArray(programSubsidi) ? programSubsidi : [programSubsidi]),
  ...(Array.isArray(legalitas) ? legalitas : [legalitas]),
  ...(Array.isArray(fasilitasUnit) ? fasilitasUnit : [fasilitasUnit]),
  ...(Array.isArray(fasilitasGedung) ? fasilitasGedung : [fasilitasGedung]),
  ...(Array.isArray(keamanan) ? keamanan : [keamanan]),
  ...(Array.isArray(parkir) ? parkir : [parkir]),
  ...(Array.isArray(utilitas) ? utilitas : [utilitas]),
  ...(Array.isArray(biayaRutin) ? biayaRutin : [biayaRutin]),
  ...(Array.isArray(lingkungan) ? lingkungan : [lingkungan]),
  ...(Array.isArray(informasiTambahan) ? informasiTambahan : [informasiTambahan]),
].filter(Boolean);

export default rusun;

