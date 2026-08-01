// configs/hunian/apartemen/index.ts

import informasiDasar from "./informasi-dasar";
import kondisiProperti from "./kondisi-properti";
import informasiUnit from "./informasi-unit";
import spesifikasiUnit from "./spesifikasi-unit";
import legalitas from "./legalitas";
import parkir from "./parkir";
import fasilitasUnit from "./fasilitas-unit";
import fasilitasGedung from "./fasilitas-gedung";
import keamanan from "./keamanan";
import aksesibilitas from "./aksesibilitas";
import utilitas from "./utilitas";
import biayaRutin from "./biaya-rutin";
import investasi from "./investasi";
import lingkungan from "./lingkungan";
import informasiTambahan from "./informasi-tambahan";

const apartemen = [
  ...(Array.isArray(informasiDasar) ? informasiDasar : [informasiDasar]),
  ...(Array.isArray(kondisiProperti) ? kondisiProperti : [kondisiProperti]),
  ...(Array.isArray(informasiUnit) ? informasiUnit : [informasiUnit]),
  ...(Array.isArray(spesifikasiUnit) ? spesifikasiUnit : [spesifikasiUnit]),
  ...(Array.isArray(legalitas) ? legalitas : [legalitas]),
  ...(Array.isArray(parkir) ? parkir : [parkir]),
  ...(Array.isArray(fasilitasUnit) ? fasilitasUnit : [fasilitasUnit]),
  ...(Array.isArray(fasilitasGedung) ? fasilitasGedung : [fasilitasGedung]),
  ...(Array.isArray(keamanan) ? keamanan : [keamanan]),
  ...(Array.isArray(aksesibilitas) ? aksesibilitas : [aksesibilitas]),
  ...(Array.isArray(utilitas) ? utilitas : [utilitas]),
  ...(Array.isArray(biayaRutin) ? biayaRutin : [biayaRutin]),
  ...(Array.isArray(investasi) ? investasi : [investasi]),
  ...(Array.isArray(lingkungan) ? lingkungan : [lingkungan]),
  ...(Array.isArray(informasiTambahan) ? informasiTambahan : [informasiTambahan]),
].filter(Boolean);

export default apartemen;


