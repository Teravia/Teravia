// configs/komersial/ruko-rukan/index.ts

import informasiDasar from "./informasi-dasar";
import informasiBangunan from "./informasi-bangunan";
import spesifikasiBangunan from "./spesifikasi-bangunan";
import aksesUsaha from "./akses-usaha";
import legalitas from "./legalitas";
import fasilitas from "./fasilitas";
import parkir from "./parkir";
import keamanan from "./keamanan";
import lingkungan from "./lingkungan";
import informasiTambahan from "./informasi-tambahan";

const rukoRukan = [
  ...(Array.isArray(informasiDasar) ? informasiDasar : [informasiDasar]),
  ...(Array.isArray(informasiBangunan) ? informasiBangunan : [informasiBangunan]),
  ...(Array.isArray(spesifikasiBangunan) ? spesifikasiBangunan : [spesifikasiBangunan]),
  ...(Array.isArray(aksesUsaha) ? aksesUsaha : [aksesUsaha]),
  ...(Array.isArray(legalitas) ? legalitas : [legalitas]),
  ...(Array.isArray(fasilitas) ? fasilitas : [fasilitas]),
  ...(Array.isArray(parkir) ? parkir : [parkir]),
  ...(Array.isArray(keamanan) ? keamanan : [keamanan]),
  ...(Array.isArray(lingkungan) ? lingkungan : [lingkungan]),
  ...(Array.isArray(informasiTambahan) ? informasiTambahan : [informasiTambahan]),
].filter(Boolean);

export default rukoRukan;

