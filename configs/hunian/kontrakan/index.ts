// configs/hunian/kontrakan/index.ts

import informasiDasar from "./informasi-dasar";
import informasiKontrakan from "./informasi-kontrakan";
import spesifikasiBangunan from "./spesifikasi-bangunan";
import sewaKontrak from "./sewa-kontrak";
import peraturanHuni from "./peraturan-huni";
import parkir from "./parkir";
import fasilitas from "./fasilitas";
import keamanan from "./keamanan";
import lingkungan from "./lingkungan";
import informasiTambahan from "./informasi-tambahan";

const kontrakan = [
  ...(Array.isArray(informasiDasar) ? informasiDasar : [informasiDasar]),
  ...(Array.isArray(informasiKontrakan) ? informasiKontrakan : [informasiKontrakan]),
  ...(Array.isArray(spesifikasiBangunan) ? spesifikasiBangunan : [spesifikasiBangunan]),
  ...(Array.isArray(sewaKontrak) ? sewaKontrak : [sewaKontrak]),
  ...(Array.isArray(peraturanHuni) ? peraturanHuni : [peraturanHuni]),
  ...(Array.isArray(parkir) ? parkir : [parkir]),
  ...(Array.isArray(fasilitas) ? fasilitas : [fasilitas]),
  ...(Array.isArray(keamanan) ? keamanan : [keamanan]),
  ...(Array.isArray(lingkungan) ? lingkungan : [lingkungan]),
  ...(Array.isArray(informasiTambahan) ? informasiTambahan : [informasiTambahan]),
].filter(Boolean);

export default kontrakan;

