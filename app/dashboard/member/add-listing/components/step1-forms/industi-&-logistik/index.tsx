// app/dashboard/member/add-listing/components/step1-forms/industri-&-logistik/index.tsx

import React from 'react';
import { FormGudang } from './FormGudang';
import { FormDistributionCenter } from './FormDistributionCenter';
import { FormLogisticsHub } from './FormLogisticsHub';
import { FormColdStorage } from './FormColdStorage';
import { FormPabrik } from './FormPabrik';
import { FormWorkshop } from './FormWorkshop';
import { FormHanggar } from './FormHanggar';
import { FormDryPort } from './FormDryPort';
import { FormKawasanIndustri } from './FormKawasanIndustri';

export type TipePropertiIndustri =
  | 'gudang'
  | 'distribution_center'
  | 'logistics_hub'
  | 'cold_storage'
  | 'pabrik'
  | 'workshop'
  | 'hanggar'
  | 'dry_port'
  | 'kawasan_industri';

interface IndustriLogistikFormProps {
  selectedSubCategory: TipePropertiIndustri;
  // Tambahkan props lain jika butuh integrasi state global / React Hook Form dari parent
  // formRegister?: any;
  // errors?: any;
}

export const IndustriLogistikStep1Form: React.FC<IndustriLogistikFormProps> = ({
  selectedSubCategory,
}) => {
  // Fungsi Pemanggil Komponen Spesifik
  const renderSubForm = () => {
    switch (selectedSubCategory) {
      case 'gudang':
        return <FormGudang />;
      case 'distribution_center':
        return <FormDistributionCenter />;
      case 'logistics_hub':
        return <FormLogisticsHub />;
      case 'cold_storage':
        return <FormColdStorage />;
      case 'pabrik':
        return <FormPabrik />;
      case 'workshop':
        return <FormWorkshop />;
      case 'hanggar':
        return <FormHanggar />;
      case 'dry_port':
        return <FormDryPort />;
      case 'kawasan_industri':
        return <FormKawasanIndustri />;
      default:
        return (
          <div className="p-4 bg-amber-50 border border-amber-200 text-amber-800 rounded-lg text-sm">
            Silakan pilih sub-kategori properti industri terlebih dahulu.
          </div>
        );
    }
  };

  return (
    <div className="w-full space-y-4">
      {/* Dynamic Sub-Form Render */}
      {renderSubForm()}
    </div>
  );
};

export default IndustriLogistikStep1Form;
