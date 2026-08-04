// configs/komersial/office-space/fasilitas-unit.ts

const fasilitasUnit = {
  id: "fasilitas-unit",
  title: "Fasilitas Unit",
  description: "Fasilitas yang tersedia di dalam unit office space.",

  fields: [
    { id: "ac", label: "AC", type: "select", required: false, options: ["Central AC", "Split AC", "VRV/VRF"] },
    { id: "partition", label: "Partisi Ruangan", type: "checkbox", required: false },
    { id: "raised_floor", label: "Raised Floor / Access Flooring", type: "checkbox", required: false },
    { id: "carpet_tile", label: "Carpet Tile", type: "checkbox", required: false },
    { id: "false_ceiling", label: "Plafon Gantung (False Ceiling)", type: "checkbox", required: false },
    { id: "data_cabling", label: "Instalasi Kabel Data / LAN", type: "checkbox", required: false },
    { id: "smart_door_lock", label: "Smart Door Lock / Access Card", type: "checkbox", required: false },
    { id: "cctv_unit", label: "CCTV Dalam Unit", type: "checkbox", required: false },
    { id: "furniture_included", label: "Sudah Termasuk Furnitur Kantor", type: "checkbox", required: false },
  ],
};

export default fasilitasUnit;
