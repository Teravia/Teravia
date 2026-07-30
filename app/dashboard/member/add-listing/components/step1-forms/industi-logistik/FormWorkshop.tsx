import React from 'react';
import { useForm } from 'react-hook-form';

export interface WorkshopFormValues {
  luasAreaKerja: number;
  fasilitasWeldingArea: boolean;
  fasilitasMachining: boolean;
  instalasiKompresorUdara: boolean;
  pitServiceAlatBerat: boolean;
}

export const FormWorkshop: React.FC = () => {
  const { register } = useForm<WorkshopFormValues>();

  return (
    <div className="p-6 bg-slate-50 border border-slate-200 rounded-xl space-y-4">
      <h3 className="text-lg font-bold text-slate-800 border-b pb-2">Spesifikasi Workshop / Bengkel Perbaikan</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold mb-1">Luas Area Servis / Kerja (m²)</label>
          <input {...register('luasAreaKerja')} type="number" className="w-full border rounded-lg p-2.5 bg-white text-sm" />
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 pt-2">
        <label className="flex items-center space-x-2 text-sm"><input type="checkbox" {...register('fasilitasWeldingArea')} className="rounded text-indigo-600" /> <span>Area Welding / Pengelasan</span></label>
        <label className="flex items-center space-x-2 text-sm"><input type="checkbox" {...register('fasilitasMachining')} className="rounded text-indigo-600" /> <span>Area Bubut / Machining</span></label>
        <label className="flex items-center space-x-2 text-sm"><input type="checkbox" {...register('pitServiceAlatBerat')} className="rounded text-indigo-600" /> <span>Pit Service Alat Berat</span></label>
      </div>
    </div>
  );
};
