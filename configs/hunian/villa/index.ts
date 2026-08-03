// configs/hunian/villa/index.ts

import informasiDasar from "./informasi-dasar";
import informasiVilla from "./informasi-villa";
import spesifikasiBangunan from "./spesifikasi-bangunan";
import fasilitasEksklusif from "./fasilitas-eksklusif";
import fasilitasUnit from "./fasilitas-unit";
import legalitas from "./legalitas";
import parkir from "./parkir";
import keamanan from "./keamanan";
import investasiSewa from "./investasi-sewa";
import lingkungan from "./lingkungan";
import informasiTambahan from "./informasi-tambahan";

const villa = [
  ...(Array.isArray(informasiDasar) ? informasiDasar : [informasiDasar]),
  ...(Array.isArray(informasiVilla) ? informasiVilla : [informasiVilla]),
  ...(Array.isArray(spesifikasiBangunan) ? spesifikasiBangunan : [spesifikasiBangunan]),
  ...(Array.isArray(fasilitasEksklusif) ? fasilitasEksklusif : [fasilitasEksklusif]),
  ...(Array.isArray(fasilitasUnit) ? fasilitasUnit : [fasilitasUnit]),
  ...(Array.isArray(legalitas) ? legalitas : [legalitas]),
  ...(Array.isArray(parkir) ? parkir : [parkir]),
  ...(Array.isArray(keamanan) ? keamanan : [keamanan]),
  ...(Array.isArray(investasiSewa) ? investasiSewa : [investasiSewa]),
  ...(Array.isArray(lingkungan) ? lingkungan : [lingkungan]),
  ...(Array.isArray(informasiTambahan) ? informasiTambahan : [informasiTambahan]),
].filter(Boolean);

export default villa;

