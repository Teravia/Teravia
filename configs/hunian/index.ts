import rumah from "./rumah";
import apartemen from "./apartemen";
import cluster from "./cluster";
import kontrakan from "./kontrakan";
import penthouse from "./penthouse";
import rusun from "./rusun";

const hunian: Record<string, any> = {
  Rumah: rumah,
  Apartemen: apartemen,
  Cluster: cluster,
  Kontrakan: kontrakan,
  Penthouse: penthouse,
  Rusun: rusun,
};

export default hunian;
