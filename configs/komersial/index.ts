// configs/komersial/index.ts

import rukoRukan from "./ruko-rukan";
import officeSpace from "./office-space";
import tokoKios from "./toko-kios";

const komersial: Record<string, any> = {
  "Ruko/Rukan": rukoRukan,
  "Office Space": officeSpace,
  "Toko/Kios": tokoKios,
};

export default komersial;
