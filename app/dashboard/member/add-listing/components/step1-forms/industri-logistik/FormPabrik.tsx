import React from 'react';
import { useForm } from 'react-hook-form';

export interface PabrikFormValues {
  skalaIndustri: 'Light' | 'Medium' | 'Heavy';
  zonaKawasan: 'Ring 1' | 'Kawasan Berikat' | 'Non-Kawasan';
  luasAreaProduksi: number;
  kapasitasGensetKVA: number;
  overheadCrane: boolean;
  craneCapacityTon: number;
  wwtpIpal: boolean;
  tpsLimbahB3: boolean;
  boilerSystem: boolean;
}

export const FormPabrik: React.FC = () => {
  const { register, watch } = useForm<PabrikFormValues>();
  const isCrane = watch('overheadCrane');

  return (
    <div className="p-6 bg-slate-50 border border-slate-200 rounded-xl space-y-4">
      <h3 className="text-lg font-bold text-slate-800 border-b pb-2">Spesifikasi Pabrik (Factory / Plant)</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-semibold mb-1">Skala Industri</label>
          <select {...register('skalaIndustri')} className="w-full border rounded-lg p-2.5 bg-white text-sm">
            <option value="Light">Light Industry (Industri Ringan)</option>
            <option value="Medium">Medium Industry</option>
            <option value="Heavy">Heavy Industry (Industri Berat)</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1">Zona Kawasan</label>
          <select {...register('zonaKawasan')} className="w-full border rounded-lg p-2.5 bg-white text-sm">
            <option value="Ring 1">Kawasan Industri Ring 1</option>
            <option value="Kawasan Berikat">Kawasan Berikat (EPTE)</option>
            <option value="Non-Kawasan">Stand-alone (Luar Kawasan)</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1">Luas Area Produksi (m²)</label>
          <input {...register('luasAreaProduksi')} type="number" className="w-full border rounded-lg p-2.5 bg-white text-sm" />
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-2 border-t">
        <label className="flex items-center space-x-2 text-sm"><input type="checkbox" {...register('overheadCrane')} className="rounded text-indigo-600" /> <span>Overhead Crane</span></label>
        <label className="flex items-center space-x-2 text-sm"><input type="checkbox" {...register('wwtpIpal')} className="rounded text-indigo-600" /> <span>WWTP / IPAL</span></label>
        <label className="flex items-center space-x-2 text-sm"><input type="checkbox" {...register('tpsLimbahB3')} className="rounded text-indigo-600" /> <span>TPS Limbah B3</span></label>
        <label className="flex items-center space-x-2 text-sm"><input type="checkbox" {...register('boilerSystem')} className="rounded text-indigo-600" /> <span>Boiler Facility</span></label>
      </div>

      {isCrane && (
        <div className="mt-2">
          <label className="block text-sm font-semibold mb-1">Kapasitas Crane (Ton)</label>
          <input {...register('craneCapacityTon')} type="number" className="w-1/3 border rounded-lg p-2.5 bg-white text-sm" placeholder="Contoh: 10" />
        </div>
      )}
    </div>
  );
};

export default FormPabrik;
