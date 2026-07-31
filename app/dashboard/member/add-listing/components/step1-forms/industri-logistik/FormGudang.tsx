import React from 'react';
import { useForm } from 'react-hook-form';

export interface GudangFormValues {
  subTipeGudang: 'General' | 'Fulfillment Center' | 'Cross-Dock' | 'Bonded (PLB)' | 'Open Yard';
  finishingLantai: 'Epoxy' | 'Floor Hardener' | 'Concrete Standard';
  loadingDocksCount: number;
  dockLevelersCount: number;
  clearHeight: number;
  floorLoadCapacity: number;
  aksesKonteiner: '20 Feet' | '40 Feet' | 'Trailer';
}

interface FormGudangProps {
  onNext: () => void;
  transactionType: string;
}

export const FormGudang: React.FC<FormGudangProps> = ({ onNext, transactionType }) => {
  const { register, handleSubmit } = useForm<GudangFormValues>();

  const onSubmit = (data: GudangFormValues) => {
    console.log("Form Data Gudang:", { ...data, transactionType });
    onNext();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="p-6 bg-slate-50 border border-slate-200 rounded-xl space-y-4">
        <h3 className="text-lg font-bold text-slate-800 border-b pb-2">Spesifikasi Detail Gudang</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold mb-1">Sub-Tipe Gudang</label>
            <select {...register('subTipeGudang')} className="w-full border rounded-lg p-2.5 bg-white text-sm">
              <option value="General">General Warehouse</option>
              <option value="Fulfillment Center">Fulfillment Center (E-Commerce)</option>
              <option value="Cross-Dock">Cross-Dock Warehouse</option>
              <option value="Bonded (PLB)">Gudang Berikat / PLB</option>
              <option value="Open Yard">Open Yard Storage</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">Finishing Lantai</label>
            <select {...register('finishingLantai')} className="w-full border rounded-lg p-2.5 bg-white text-sm">
              <option value="Epoxy">Epoxy Coating (Dust-Free)</option>
              <option value="Floor Hardener">Floor Hardener</option>
              <option value="Concrete Standard">Beton Standard</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">Akses Kontainer</label>
            <select {...register('aksesKonteiner')} className="w-full border rounded-lg p-2.5 bg-white text-sm">
              <option value="20 Feet">20 Feet</option>
              <option value="40 Feet">40 Feet</option>
              <option value="Trailer">Trailer / Multi-Axle</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">Jumlah Loading Dock</label>
            <input {...register('loadingDocksCount')} type="number" className="w-full border rounded-lg p-2.5 bg-white text-sm" placeholder="Contoh: 4" />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">Jumlah Dock Leveler</label>
            <input {...register('dockLevelersCount')} type="number" className="w-full border rounded-lg p-2.5 bg-white text-sm" placeholder="Contoh: 2" />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">Clear Height (m)</label>
            <input {...register('clearHeight')} type="number" step="0.1" className="w-full border rounded-lg p-2.5 bg-white text-sm" placeholder="Contoh: 9" />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">Kapasitas Lantai (Ton/m²)</label>
            <input {...register('floorLoadCapacity')} type="number" step="0.1" className="w-full border rounded-lg p-2.5 bg-white text-sm" placeholder="Contoh: 5" />
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl text-sm transition shadow-md shadow-blue-600/10"
      >
        Lanjut ke Step 2: Legalitas & Harga →
      </button>
    </form>
  );
};

export default FormGudang;
