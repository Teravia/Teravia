import React from 'react';
import { useForm } from 'react-hook-form';

export interface DistributionCenterFormValues {
  luasSortingArea: number;
  luasFulfillmentArea: number;
  targetShipmentPerHari: number;
  wmsReady: boolean;
  crossDockingSystem: boolean;
  automatedASRS: boolean;
  jumlahStagingArea: number;
}

export const FormDistributionCenter: React.FC = () => {
  const { register } = useForm<DistributionCenterFormValues>();

  return (
    <div className="p-6 bg-slate-50 border border-slate-200 rounded-xl space-y-4">
      <h3 className="text-lg font-bold text-slate-800 border-b pb-2">Spesifikasi Distribution Center (DC)</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-semibold mb-1">Luas Area Sorting (m²)</label>
          <input {...register('luasSortingArea')} type="number" className="w-full border rounded-lg p-2.5 bg-white text-sm" />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1">Luas Area Fulfillment (m²)</label>
          <input {...register('luasFulfillmentArea')} type="number" className="w-full border rounded-lg p-2.5 bg-white text-sm" />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1">Target Kiriman / Hari</label>
          <input {...register('targetShipmentPerHari')} type="number" className="w-full border rounded-lg p-2.5 bg-white text-sm" />
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 pt-2">
        <label className="flex items-center space-x-2 text-sm"><input type="checkbox" {...register('wmsReady')} className="rounded text-indigo-600" /> <span>WMS Ready System</span></label>
        <label className="flex items-center space-x-2 text-sm"><input type="checkbox" {...register('crossDockingSystem')} className="rounded text-indigo-600" /> <span>Cross Docking Line</span></label>
        <label className="flex items-center space-x-2 text-sm"><input type="checkbox" {...register('automatedASRS')} className="rounded text-indigo-600" /> <span>Automated ASRS</span></label>
      </div>
    </div>
  );
};
