// configs/komersial/index.ts

import rukoRukan from "./ruko-rukan";
import officeSpace from "./office-space";

const komersial: Record<string, any> = {
  "Ruko/Rukan": rukoRukan,
  "Office Space": officeSpace,
};

export default komersial;
