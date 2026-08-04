// configs/komersial/toko-kios/index.ts

import informasiDasar from "./informasi-dasar";
import informasiUnit from "./informasi-unit";
import spesifikasiBangunan from "./spesifikasi-bangunan";
import aksesUsaha from "./akses-usaha";
import legalitas from "./legalitas";
import fasilitas from "./fasilitas";
import keamanan from "./keamanan";
import biayaRutin from "./biaya-rutin";
import parkir from "./parkir";
import lingkungan from "./lingkungan";
import informasiTambahan from "./informasi-tambahan";

const tokoKios = [
  ...(Array.isArray(informasiDasar) ? informasiDasar : [informasiDasar]),
  ...(Array.isArray(informasiUnit) ? informasiUnit : [informasiUnit]),
  ...(Array.isArray(spesifikasiBangunan) ? spesifikasiBangunan : [spesifikasiBangunan]),
  ...(Array.isArray(aksesUsaha) ? aksesUsaha : [aksesUsaha]),
  ...(Array.isArray(legalitas) ? legalitas : [legalitas]),
  ...(Array.isArray(fasilitas) ? fasilitas : [fasilitas]),
  ...(Array.isArray(keamanan) ? keamanan : [keamanan]),
  ...(Array.isArray(biayaRutin) ? biayaRutin : [biayaRutin]),
  ...(Array.isArray(parkir) ? parkir : [parkir]),
  ...(Array.isArray(lingkungan) ? lingkungan : [lingkungan]),
  ...(Array.isArray(informasiTambahan) ? informasiTambahan : [informasiTambahan]),
].filter(Boolean);

export default tokoKios;
