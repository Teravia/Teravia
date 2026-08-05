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

export const gedungPerkantoranConfig = {
  propertyType: "gedung-perkantoran",
  category: "komersial",
  label: "Gedung Perkantoran",
  description: "Konfigurasi formulir listing properti untuk skala gedung perkantoran utuh.",
  sections: [
    informasiDasar,
    informasiGedung,
    spesifikasiGedung,
    fasilitasGedung,
    parkir,
    keamanan,
    utilitas,
    biayaRutin,
    legalitas,
    lingkungan,
    informasiTambahan,
  ],
};

export default gedungPerkantoranConfig;
