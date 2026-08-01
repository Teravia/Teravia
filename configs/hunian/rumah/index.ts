// configs/hunian/rumah/index.ts

import informasiDasar from "./informasi-dasar";
import informasiBangunan from "./informasi-bangunan";
import spesifikasiBangunan from "./spesifikasi-bangunan";
import fasilitas from "./fasilitas";
import garasiParkir from "./garasi-parkir";
import keamanan from "./keamanan";
import lingkungan from "./lingkungan";
import legalitas from "./legalitas";
import utilitas from "./utilitas";
import investasi from "./investasi";
import kondisiProperti from "./kondisi-properti";
import informasiTambahan from "./informasi-tambahan";

const rumah = {
  id: "rumah",
  kategori: "hunian",
  nama: "Rumah",
  label: "Rumah",

  sections: [
    informasiDasar,
    informasiBangunan,
    spesifikasiBangunan,
    fasilitas,
    garasiParkir,
    keamanan,
    lingkungan,
    legalitas,
    utilitas,
    investasi,
    kondisiProperti,
    informasiTambahan,
  ],
};

export default rumah;
