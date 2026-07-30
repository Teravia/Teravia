import React from 'react';
import { useForm } from 'react-hook-form';

export interface ColdStorageFormValues {
  tempRangeMin: number; // e.g. -20
  tempRangeMax: number; // e.g. +5
  luasChillerRoom: number;
  luasFreezerRoom: number;
  luasBlastFreezer: number;
  sertifikatHACCP: boolean;
  sertifikatHalalHub: boolean;
  sertifikatGMP: boolean;
  backUpGenset100: boolean;
}

export const FormColdStorage: React.FC = () => {
  const { register } = useForm<ColdStorageFormValues>();

  return (
    <div className="p-6 bg-blue-50/50 border border-blue-200 rounded-xl space-y-4">
      <h3 className="text-lg font-bold text-blue-900 border-b border-blue-200 pb-2">Spesifikasi Cold Storage & Cold Chain</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-semibold mb-1">Suhu Min (°C)</label>
          <input {...register('tempRangeMin')} type="number" placeholder="-20" className="w-full border rounded-lg p-2.5 bg-white text-sm" />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1">Suhu Max (°C)</label>
          <input {...register('tempRangeMax')} type="number" placeholder="5" className="w-full border rounded-lg p-2.5 bg-white text-sm" />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1">Luas Cold Room Total (m²)</label>
          <input {...register('luasFreezerRoom')} type="number" className="w-full border rounded-lg p-2.5 bg-white text-sm" />
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-2">
        <label className="flex items-center space-x-2 text-sm"><input type="checkbox" {...register('sertifikatHACCP')} className="rounded text-blue-600" /> <span>Sertifikasi HACCP</span></label>
        <label className="flex items-center space-x-2 text-sm"><input type="checkbox" {...register('sertifikatHalalHub')} className="rounded text-blue-600" /> <span>Sertifikasi Halal</span></label>
        <label className="flex items-center space-x-2 text-sm"><input type="checkbox" {...register('sertifikatGMP')} className="rounded text-blue-600" /> <span>Sertifikasi GMP</span></label>
        <label className="flex items-center space-x-2 text-sm"><input type="checkbox" {...register('backUpGenset100')} className="rounded text-blue-600" /> <span>100% Back-up Genset</span></label>
      </div>
    </div>
  );
};

export default FormColdStorage;
