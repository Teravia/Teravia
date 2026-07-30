import React from 'react';
import { useForm } from 'react-hook-form';

export interface HanggarFormValues {
  peruntukanHanggar: 'MRO' | 'Cargo' | 'Parking';
  luasApron: number;
  jumlahAircraftBay: number;
  lebarPintuHanggarMeter: number;
  tinggiPintuHanggarMeter: number;
  dgcaApproved: boolean;
}

export const FormHanggar: React.FC = () => {
  const { register } = useForm<HanggarFormValues>();

  return (
    <div className="p-6 bg-slate-50 border border-slate-200 rounded-xl space-y-4">
      <h3 className="text-lg font-bold text-slate-800 border-b pb-2">Spesifikasi Hanggar Pesawat (Aircraft Hangar)</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-semibold mb-1">Peruntukan Hanggar</label>
          <select {...register('peruntukanHanggar')} className="w-full border rounded-lg p-2.5 bg-white text-sm">
            <option value="MRO">MRO (Maintenance & Repair)</option>
            <option value="Cargo">Cargo & Logistics Hangar</option>
            <option value="Parking">Aircraft Parking / Storage</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1">Luas Apron (m²)</label>
          <input {...register('luasApron')} type="number" className="w-full border rounded-lg p-2.5 bg-white text-sm" />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1">Jumlah Aircraft Bay</label>
          <input {...register('jumlahAircraftBay')} type="number" className="w-full border rounded-lg p-2.5 bg-white text-sm" />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1">Lebar Pintu Hanggar (m)</label>
          <input {...register('lebarPintuHanggarMeter')} type="number" step="0.1" className="w-full border rounded-lg p-2.5 bg-white text-sm" />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1">Tinggi Pintu Hanggar (m)</label>
          <input {...register('tinggiPintuHanggarMeter')} type="number" step="0.1" className="w-full border rounded-lg p-2.5 bg-white text-sm" />
        </div>
      </div>

      <div className="pt-2">
        <label className="flex items-center space-x-2 text-sm"><input type="checkbox" {...register('dgcaApproved')} className="rounded text-indigo-600" /> <span>Tersertifikasi DGCA / Perhubungan Udara</span></label>
      </div>
    </div>
  );
};
