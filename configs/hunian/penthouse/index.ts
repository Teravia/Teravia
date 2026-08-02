// configs/hunian/penthouse/index.ts

import informasiDasar from "./informasi-dasar";
import kondisiProperti from "./kondisi-properti";
import informasiUnit from "./informasi-unit";
import spesifikasiUnit from "./spesifikasi-unit";
import fasilitasEksklusif from "./fasilitas-eksklusif";
import fasilitasUnit from "./fasilitas-unit";
import fasilitasGedung from "./fasilitas-gedung";
import legalitas from "./legalitas";
import parkir from "./parkir";
import keamanan from "./keamanan";
import utilitas from "./utilitas";
import biayaRutin from "./biaya-rutin";
import investasi from "./investasi";
import lingkungan from "./lingkungan";
import informasiTambahan from "./informasi-tambahan";

const penthouse = [
  ...(Array.isArray(informasiDasar) ? informasiDasar : [informasiDasar]),
  ...(Array.isArray(kondisiProperti) ? kondisiProperti : [kondisiProperti]),
  ...(Array.isArray(informasiUnit) ? informasiUnit : [informasiUnit]),
  ...(Array.isArray(spesifikasiUnit) ? spesifikasiUnit : [spesifikasiUnit]),
  ...(Array.isArray(fasilitasEksklusif) ? fasilitasEksklusif : [fasilitasEksklusif]),
  ...(Array.isArray(fasilitasUnit) ? fasilitasUnit : [fasilitasUnit]),
  ...(Array.isArray(fasilitasGedung) ? fasilitasGedung : [fasilitasGedung]),
  ...(Array.isArray(legalitas) ? legalitas : [legalitas]),
  ...(Array.isArray(parkir) ? parkir : [parkir]),
  ...(Array.isArray(keamanan) ? keamanan : [keamanan]),
  ...(Array.isArray(utilitas) ? utilitas : [utilitas]),
  ...(Array.isArray(biayaRutin) ? biayaRutin : [biayaRutin]),
  ...(Array.isArray(investasi) ? investasi : [investasi]),
  ...(Array.isArray(lingkungan) ? lingkungan : [lingkungan]),
  ...(Array.isArray(informasiTambahan) ? informasiTambahan : [informasiTambahan]),
].filter(Boolean);

export default penthouse;

