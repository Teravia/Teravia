import React from 'react';
import { useForm } from 'react-hook-form';

export interface KawasanIndustriFormValues {
  tipeKawasan: 'Standard' | 'KEK' | 'KIH' | 'Eco-Industrial';
  luasTotalKawasanHa: number;
  developerKawasan: string;
  sumberAirKawasan: 'WTP Mandiri' | 'PDAM';
  garduIndukListrikMandiri: boolean;
  gasIndustriPGN: boolean;
}

export const FormKawasanIndustri: React.FC = () => {
  const { register } = useForm<KawasanIndustriFormValues>();

  return (
    <div className="p-6 bg-slate-50 border border-slate-200 rounded-xl space-y-4">
      <h3 className="text-lg font-bold text-slate-800 border-b pb-2">Spesifikasi Lahan Kawasan Industri</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-semibold mb-1">Regulated Zone Kawasan</label>
          <select {...register('tipeKawasan')} className="w-full border rounded-lg p-2.5 bg-white text-sm">
            <option value="Standard">Standard Industrial Estate</option>
            <option value="KEK">KEK (Kawasan Ekonomi Khusus)</option>
            <option value="KIH">KIH (Kawasan Industri Halal)</option>
            <option value="Eco-Industrial">Eco-Industrial Park (EIP)</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1">Luas Kawasan (Hektar / Ha)</label>
          <input {...register('luasTotalKawasanHa')} type="number" step="0.1" className="w-full border rounded-lg p-2.5 bg-white text-sm" />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1">Developer Kawasan</label>
          <input {...register('developerKawasan')} type="text" placeholder="e.g. Jababeka, MM2100" className="w-full border rounded-lg p-2.5 bg-white text-sm" />
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 pt-2">
        <label className="flex items-center space-x-2 text-sm"><input type="checkbox" {...register('garduIndukListrikMandiri')} className="rounded text-indigo-600" /> <span>Gardu Induk Listrik Sendiri</span></label>
        <label className="flex items-center space-x-2 text-sm"><input type="checkbox" {...register('gasIndustriPGN')} className="rounded text-indigo-600" /> <span>Pipa Gas Industri (PGN)</span></label>
      </div>
    </div>
  );
};

export default FormKawasanIndustri;
