"use client";

import React, { useState, useMemo } from "react";

interface MediaItem {
  id: string;
  file: File;
  previewUrl: string;
  isCover: boolean;
}

interface Step4Props {
  onNext: () => void;
  onPrev: () => void;
  updateFormData?: (data: Record<string, any>) => void;
  initialData?: Record<string, any>;
}

const MAX_FILE_SIZE = 1 * 1024 * 1024; // 1 MB dalam Bytes

export default function Step4Media({
  onNext,
  onPrev,
  updateFormData,
  initialData = {},
}: Step4Props) {
  // State Media / Foto
  const [images, setImages] = useState<MediaItem[]>(
    initialData.images || []
  );
  
  // State Error & Drag Highlight
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [touched, setTouched] = useState<boolean>(false);

  // Helper konversi ukuran file ke format KB/MB
  const formatFileSize = (bytes: number): string => {
    if (bytes < 1024 * 1024) {
      return `${(bytes / 1024).toFixed(1)} KB`;
    }
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  // Handler Proses File yang Diunggah
  const handleProcessFiles = (files: FileList | File[]) => {
    setErrorMessage("");
    const validFiles: MediaItem[] = [];
    let sizeError = false;

    Array.from(files).forEach((file) => {
      // Cek apakah file adalah gambar
      if (!file.type.startsWith("image/")) {
        setErrorMessage("Hanya file gambar (JPG, PNG, WebP) yang diperbolehkan.");
        return;
      }

      // Validasi Ukuran Maksimal 1 MB
      if (file.size > MAX_FILE_SIZE) {
        sizeError = true;
        return;
      }

      // Buat URL Preview sementara
      const previewUrl = URL.createObjectURL(file);
      validFiles.push({
        id: `${Date.now()}_${Math.random().toString(36).substring(2, 9)}`,
        file,
        previewUrl,
        isCover: false,
      });
    });

    if (sizeError) {
      setErrorMessage("Beberapa file terlewati karena ukurannya melebihi 1 MB.");
    }

    if (validFiles.length > 0) {
      setImages((prev) => {
        const updated = [...prev, ...validFiles];
        // Jika belum ada foto cover, jadikan foto pertama sebagai cover
        if (!updated.some((img) => img.isCover) && updated.length > 0) {
          updated[0].isCover = true;
        }
        return updated;
      });
    }
  };

  // Handler Event Input File
  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      handleProcessFiles(e.target.files);
      // Reset input value agar file yang sama bisa diunggah ulang jika dihapus
      e.target.value = "";
    }
  };

  // Handler Drag & Drop
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleProcessFiles(e.dataTransfer.files);
    }
  };

  // Handler Hapus Gambar
  const handleRemoveImage = (id: string) => {
    setImages((prev) => {
      const filtered = prev.filter((img) => img.id !== id);
      // Jika gambar yang dihapus adalah cover, pindahkan cover ke gambar pertama yang tersisa
      if (filtered.length > 0 && !filtered.some((img) => img.isCover)) {
        filtered[0].isCover = true;
      }
      return filtered;
    });
  };

  // Handler Set Foto Sampul (Cover)
  const handleSetCover = (id: string) => {
    setImages((prev) =>
      prev.map((img) => ({
        ...img,
        isCover: img.id === id,
      }))
    );
  };

  // Form valid jika minimal ada 1 foto yang diunggah
  const isFormValid = useMemo(() => images.length > 0, [images]);

  const handleLanjut = () => {
    setTouched(true);
    if (!isFormValid) return;

    if (updateFormData) {
      updateFormData({
        images,
        coverImage: images.find((img) => img.isCover) || images[0],
      });
    }
    onNext();
  };

  return (
    <div className="space-y-6 font-sans">
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-5">
        <div className="border-b pb-3 flex items-center justify-between">
          <h2 className="text-sm font-bold text-slate-900">
            Step 4: Upload Media Properti
          </h2>
          <span className="text-[11px] font-semibold text-slate-500">
            {images.length} Foto Terunggah
          </span>
        </div>

        {/* DROPZONE UPLOAD */}
        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={`relative border-2 border-dashed rounded-2xl p-6 text-center transition-all cursor-pointer ${
            isDragging
              ? "border-green-500 bg-green-50/50"
              : touched && !isFormValid
              ? "border-red-400 bg-red-50/20"
              : "border-slate-300 hover:border-green-400 bg-slate-50/50"
          }`}
        >
          <input
            type="file"
            multiple
            accept="image/png, image/jpeg, image/jpg, image/webp"
            onChange={handleFileInputChange}
            className="absolute inset-0 opacity-0 w-full h-full cursor-pointer z-10"
          />

          <div className="flex flex-col items-center justify-center space-y-2 pointer-events-none">
            <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center text-green-600">
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 002-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div>
              <p className="text-xs font-bold text-slate-700">
                Klik untuk unggah <span className="font-normal text-slate-500">atau tarik foto ke sini</span>
              </p>
              <p className="text-[10px] text-slate-400 mt-0.5">
                Format: PNG, JPG, WEBP (Maksimal **1 MB** per foto)
              </p>
            </div>
          </div>
        </div>

        {/* PESAN ERROR VALIDASI */}
        {errorMessage && (
          <p className="text-red-500 text-[11px] font-medium bg-red-50 p-2.5 rounded-xl border border-red-200">
            ⚠️ {errorMessage}
          </p>
        )}

        {touched && !isFormValid && (
          <p className="text-red-500 text-[11px] font-medium">
            Unggah minimal 1 foto properti untuk melanjutkan.
          </p>
        )}

        {/* GRID PREVIEW GAMBAR */}
        {images.length > 0 && (
          <div className="space-y-3 pt-2">
            <p className="text-xs font-bold text-slate-700">
              Pratinjau Foto ({images.length})
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {images.map((item) => (
                <div
                  key={item.id}
                  className={`group relative rounded-xl overflow-hidden border bg-slate-100 transition-all ${
                    item.isCover
                      ? "ring-2 ring-green-600 border-transparent"
                      : "border-slate-200"
                  }`}
                >
                  {/* Thumbnail Image */}
                  <div className="aspect-square w-full relative">
                    <img
                      src={item.previewUrl}
                      alt="Preview Properti"
                      className="w-full h-full object-cover"
                    />

                    {/* Badge Sampul/Cover */}
                    {item.isCover && (
                      <span className="absolute top-2 left-2 bg-green-600 text-white text-[9px] font-bold px-2 py-0.5 rounded-full shadow-sm">
                        Foto Utama
                      </span>
                    )}

                    {/* Tombol Hapus */}
                    <button
                      type="button"
                      onClick={() => handleRemoveImage(item.id)}
                      className="absolute top-2 right-2 w-6 h-6 rounded-full bg-slate-900/60 hover:bg-red-600 text-white flex items-center justify-center text-xs transition-colors shadow-sm"
                      title="Hapus Foto"
                    >
                      ×
                    </button>
                  </div>

                  {/* Info Foto & Opsi Set Cover */}
                  <div className="p-2 bg-white flex items-center justify-between text-[10px]">
                    <span className="text-slate-400 font-medium truncate max-w-[80px]">
                      {formatFileSize(item.file.size)}
                    </span>

                    {!item.isCover && (
                      <button
                        type="button"
                        onClick={() => handleSetCover(item.id)}
                        className="text-green-600 hover:text-green-800 font-semibold"
                      >
                        Jadikan Utama
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* FOOTER NAVIGASI STEP 4 */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
        <button
          type="button"
          onClick={onPrev}
          className="px-6 py-2.5 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-50 text-xs font-bold transition-colors"
        >
          &larr; Kembali
        </button>
        <button
          type="button"
          onClick={handleLanjut}
          disabled={!isFormValid}
          className={`px-6 py-2.5 rounded-xl text-xs font-bold shadow-sm transition-colors ${
            isFormValid
              ? "bg-green-600 hover:bg-green-700 text-white cursor-pointer"
              : "bg-slate-200 text-slate-400 cursor-not-allowed"
          }`}
        >
          Lanjut &rarr;
        </button>
      </div>
    </div>
  );
}

