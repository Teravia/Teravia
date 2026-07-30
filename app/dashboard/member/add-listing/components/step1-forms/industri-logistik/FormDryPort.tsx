import React from 'react';
import { useForm } from 'react-hook-form';

export interface DryPortFormValues {
  luasContainerYard: number;
  kapasitasTEUs: number;
  customsClearanceOnSite: boolean;
  aksesRelKereta: boolean;
  reachStackerAvailable: boolean;
}

export const FormDryPort: React.FC = () => {
  const { register } = useForm<DryPortFormValues>();

  return (
    <div className="p-6 bg-slate-50 border border-slate-200 rounded-xl space-y-4">
      <h3 className="text-lg font-bold text-slate-800 border-b pb-2">Spesifikasi Dry Port / ICD</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold mb-1">Luas Container Yard (m²)</label>
          <input {...register('luasContainerYard')} type="number" className="w-full border rounded-lg p-2.5 bg-white text-sm" />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1">Kapasitas Container (TEUs)</label>
          <input {...register('kapasitasTEUs')} type="number" className="w-full border rounded-lg p-2.5 bg-white text-sm" />
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 pt-2">
        <label className="flex items-center space-x-2 text-sm"><input type="checkbox" {...register('customsClearanceOnSite')} className="rounded text-indigo-600" /> <span>Customs / Bea Cukai On-Site</span></label>
        <label className="flex items-center space-x-2 text-sm"><input type="checkbox" {...register('aksesRelKereta')} className="rounded text-indigo-600" /> <span>Jalur Rel Kereta Api Langsung</span></label>
        <label className="flex items-center space-x-2 text-sm"><input type="checkbox" {...register('reachStackerAvailable')} className="rounded text-indigo-600" /> <span>Fasilitas Reach Stacker</span></label>
      </div>
    </div>
  );
};

export default FormDryPort;
