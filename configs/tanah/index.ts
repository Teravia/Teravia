// configs/tanah/index.ts

import kavling from "./kavling";
import sawah from "./sawah";
import kebun from "./kebun";
import peternakan from "./peternakan";

const tanah: Record<string, any> = {
  Kavling: kavling,
  Sawah: sawah,
  Kebun: kebun,
  Peternakan: peternakan,
};

export default tanah;
