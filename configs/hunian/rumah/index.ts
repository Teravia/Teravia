import fasilitas from "./fasilitas";
import garasiParkir from "./garasi-parkir";
import informasiBangunan from "./informasi-bangunan";
import informasiDasar from "./informasi-dasar";
import informasiTambahan from "./informasi-tambahan";
import keamanan from "./keamanan";
import legalitas from "./legalitas";
import lingkungan from "./lingkungan";
import spesifikasiBangunan from "./spesifikasi-bangunan";

const rumah = [
  ...(Array.isArray(informasiDasar) ? informasiDasar : [informasiDasar]),
  ...(Array.isArray(informasiBangunan) ? informasiBangunan : [informasiBangunan]),
  ...(Array.isArray(spesifikasiBangunan) ? spesifikasiBangunan : [spesifikasiBangunan]),
  ...(Array.isArray(legalitas) ? legalitas : [legalitas]),
  ...(Array.isArray(garasiParkir) ? garasiParkir : [garasiParkir]),
  ...(Array.isArray(fasilitas) ? fasilitas : [fasilitas]),
  ...(Array.isArray(keamanan) ? keamanan : [keamanan]),
  ...(Array.isArray(lingkungan) ? lingkungan : [lingkungan]),
  ...(Array.isArray(informasiTambahan) ? informasiTambahan : [informasiTambahan]),
].filter(Boolean);

export default rumah;
