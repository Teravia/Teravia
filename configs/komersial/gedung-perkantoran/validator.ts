// configs/komersial/gedung-perkantoran/validator.ts
//
// Helper untuk memvalidasi field wajib (required) pada section
// spesifikasi gedung perkantoran. Key error mengikuti konvensi
// fieldKey yang dipakai di Step1Information.tsx: `s{sectionIdx}_f{fieldIdx}`.
//
// PENTING: validator ini sengaja TIDAK pakai library eksternal (zod, dll).
// Data field disimpan dengan key generik "s{sectionIdx}_f{fieldIdx}"
// (bukan nama id field seperti "building_name"), karena field-nya
// dirender dinamis dari array section di index.ts. Skema berbasis nama
// field langsung (title, building_name, dst) tidak akan pernah cocok
// dengan struktur data ini.

import gedungPerkantoran from "./index";

export function validateGedungPerkantoranDetail(
  detailData: Record<string, any>
): Record<string, string> {
  const errors: Record<string, string> = {};

  gedungPerkantoran.forEach((section: any, sectionIdx: number) => {
    section.fields?.forEach((field: any, fieldIdx: number) => {
      if (!field.required) return;

      const fieldKey = `s${sectionIdx}_f${fieldIdx}`;
      const value = detailData[fieldKey];

      const isEmpty =
        value === undefined ||
        value === null ||
        value === "" ||
        (Array.isArray(value) && value.length === 0);

      if (isEmpty) {
        errors[fieldKey] = `${field.label} wajib diisi`;
      }
    });
  });

  return errors;
}

export default validateGedungPerkantoranDetail;
