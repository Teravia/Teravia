// configs/hunian/index.ts

import rumah from "./rumah";
import apartemen from "./apartemen";
import villa from "./villa";
import cluster from "./cluster";
import townhouse from "./townhouse";
import kos from "./kos";
import asrama from "./asrama";

const hunian = {
  id: "hunian",
  nama: "Hunian",
  label: "Hunian",

  propertyTypes: [
    rumah,
    apartemen,
    villa,
    cluster,
    townhouse,
    kos,
    asrama,
  ],
};

export default hunian;
