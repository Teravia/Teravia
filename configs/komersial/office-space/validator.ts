// configs/komersial/office-space/validator.ts
//
// Helper untuk memvalidasi field wajib (required) pada section
// spesifikasi office space. Key error mengikuti konvensi fieldKey yang
// dipakai di Step1Information.tsx: `s{sectionIdx}_f{fieldIdx}`.

import officeSpace from "./index";

export function validateOfficeSpaceDetail(
  detailData: Record<string, any>
): Record<string, string> {
  const errors: Record<string, string> = {};

  officeSpace.forEach((section: any, sectionIdx: number) => {
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

export default validateOfficeSpaceDetail;
