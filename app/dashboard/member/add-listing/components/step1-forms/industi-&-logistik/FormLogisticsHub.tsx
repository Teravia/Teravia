import React from 'react';
import { useForm } from 'react-hook-form';

export interface LogisticsHubFormValues {
  luasTruckManeuverArea: number;
  jumlahParkingBayTruck: number;
  fasilitasDriverRestArea: boolean;
  spkuListrikGenset: boolean;
  aksesHub24Jam: boolean;
}

export const FormLogisticsHub: React.FC = () => {
  const { register } = useForm<LogisticsHubFormValues>();

  return (
    <div className="p-6 bg-slate-50 border border-slate-200 rounded-xl space-y-4">
      <h3 className="text-lg font-bold text-slate-800 border-b pb-2">Spesifikasi Logistics Hub</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold mb-1">Luas Area Maneuver Truk (m²)</label>
          <input {...register('luasTruckManeuverArea')} type="number" className="w-full border rounded-lg p-2.5 bg-white text-sm" />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1">Jumlah Slot Parkir Truk/Trailer</label>
          <input {...register('jumlahParkingBayTruck')} type="number" className="w-full border rounded-lg p-2.5 bg-white text-sm" />
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 pt-2">
        <label className="flex items-center space-x-2 text-sm"><input type="checkbox" {...register('fasilitasDriverRestArea')} className="rounded text-indigo-600" /> <span>Mess / Driver Lounge</span></label>
        <label className="flex items-center space-x-2 text-sm"><input type="checkbox" {...register('aksesHub24Jam')} className="rounded text-indigo-600" /> <span>Operasional 24/7 Nonstop</span></label>
      </div>
    </div>
  );
};
