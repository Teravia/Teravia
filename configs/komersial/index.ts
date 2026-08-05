// configs/komersial/index.ts

import rukoRukan from "./ruko-rukan";
import officeSpace from "./office-space";
import tokoKios from "./toko-kios";
import gedungPerkantoran from "./gedung-perkantoran";

const komersial: Record<string, any> = {
  "Ruko/Rukan": rukoRukan,
  "Office Space": officeSpace,
  "Toko/Kios": tokoKios,
  "Gedung Perkantoran": gedungPerkantoran,
};

export default komersial;
