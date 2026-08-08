// configs/komersial/gedung-perkantoran/index.ts

import informasiDasar from "./informasi-dasar";
import informasiGedung from "./informasi-gedung";
import spesifikasiGedung from "./spesifikasi-gedung";
import fasilitasGedung from "./fasilitas-gedung";
import parkir from "./parkir";
import keamanan from "./keamanan";
import utilitas from "./utilitas";
import biayaRutin from "./biaya-rutin";
import legalitas from "./legalitas";
import lingkungan from "./lingkungan";
import informasiTambahan from "./informasi-tambahan";

const gedungPerkantoran = [
  ...(Array.isArray(informasiDasar) ? informasiDasar : [informasiDasar]),
  ...(Array.isArray(informasiGedung) ? informasiGedung : [informasiGedung]),
  ...(Array.isArray(spesifikasiGedung) ? spesifikasiGedung : [spesifikasiGedung]),
  ...(Array.isArray(fasilitasGedung) ? fasilitasGedung : [fasilitasGedung]),
  ...(Array.isArray(parkir) ? parkir : [parkir]),
  ...(Array.isArray(keamanan) ? keamanan : [keamanan]),
  ...(Array.isArray(utilitas) ? utilitas : [utilitas]),
  ...(Array.isArray(biayaRutin) ? biayaRutin : [biayaRutin]),
  ...(Array.isArray(legalitas) ? legalitas : [legalitas]),
  ...(Array.isArray(lingkungan) ? lingkungan : [lingkungan]),
  ...(Array.isArray(informasiTambahan) ? informasiTambahan : [informasiTambahan]),
].filter(Boolean);

export default gedungPerkantoran;
