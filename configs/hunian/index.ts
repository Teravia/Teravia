import rumah from "./rumah";
import apartemen from "./apartemen";
import cluster from "./cluster";
import kontrakan from "./kontrakan";
import penthouse from "./penthouse";
import rusun from "./rusun";
import kost from "./kost";
import villa from "./villa";

const hunian: Record<string, any> = {
  Rumah: rumah,
  Apartemen: apartemen,
  Cluster: cluster,
  Kontrakan: kontrakan,
  Penthouse: penthouse,
  Rusun: rusun,
  Kost: kost,
  Villa: villa,
};

export default hunian;
