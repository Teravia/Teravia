'use client';

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
  selectedSubCategory: TipePropertiIndustri | string;
  // Menyiapkan props opsional jika parent memakai React Hook Form
  register?: any;
  errors?: any;
  setValue?: any;
  watch?: any;
}

export const IndustriLogistikStep1Form: React.FC<IndustriLogistikFormProps> = ({
  selectedSubCategory,
  register,
  errors,
  setValue,
  watch,
}) => {
  // Grouping props untuk ditumpahkan ke sub-komponen jika dibutuhkan
  const formProps = { register, errors, setValue, watch };

  const renderSubForm = () => {
    switch (selectedSubCategory) {
      case 'gudang':
        return <FormGudang {...formProps} />;
      case 'distribution_center':
        return <FormDistributionCenter {...formProps} />;
      case 'logistics_hub':
        return <FormLogisticsHub {...formProps} />;
      case 'cold_storage':
        return <FormColdStorage {...formProps} />;
      case 'pabrik':
        return <FormPabrik {...formProps} />;
      case 'workshop':
        return <FormWorkshop {...formProps} />;
      case 'hanggar':
        return <FormHanggar {...formProps} />;
      case 'dry_port':
        return <FormDryPort {...formProps} />;
      case 'kawasan_industri':
        return <FormKawasanIndustri {...formProps} />;
      default:
        return (
          <div className="p-4 bg-amber-50 border border-amber-200 text-amber-800 rounded-xl text-sm flex items-center space-x-2">
            <svg
              className="w-5 h-5 text-amber-600 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
            <span>
              Silakan pilih sub-kategori properti industri & logistik terlebih dahulu.
            </span>
          </div>
        );
    }
  };

  return (
    <div className="w-full space-y-4 animate-fadeIn">
      {renderSubForm()}
    </div>
  );
};

export default IndustriLogistikStep1Form;
