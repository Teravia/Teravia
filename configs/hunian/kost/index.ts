// configs/hunian/kost/index.ts

import informasiDasar from "./informasi-dasar";
import informasiKost from "./informasi-kost";
import kamarTersedia from "./kamar-tersedia";
import sewaPembayaran from "./sewa-pembayaran";
import peraturanHuni from "./peraturan-huni";
import fasilitasKamar from "./fasilitas-kamar";
import fasilitasBersama from "./fasilitas-bersama";
import keamanan from "./keamanan";
import lingkungan from "./lingkungan";
import informasiTambahan from "./informasi-tambahan";

const kost = [
  ...(Array.isArray(informasiDasar) ? informasiDasar : [informasiDasar]),
  ...(Array.isArray(informasiKost) ? informasiKost : [informasiKost]),
  ...(Array.isArray(kamarTersedia) ? kamarTersedia : [kamarTersedia]),
  ...(Array.isArray(sewaPembayaran) ? sewaPembayaran : [sewaPembayaran]),
  ...(Array.isArray(peraturanHuni) ? peraturanHuni : [peraturanHuni]),
  ...(Array.isArray(fasilitasKamar) ? fasilitasKamar : [fasilitasKamar]),
  ...(Array.isArray(fasilitasBersama) ? fasilitasBersama : [fasilitasBersama]),
  ...(Array.isArray(keamanan) ? keamanan : [keamanan]),
  ...(Array.isArray(lingkungan) ? lingkungan : [lingkungan]),
  ...(Array.isArray(informasiTambahan) ? informasiTambahan : [informasiTambahan]),
].filter(Boolean);

export default kost;

