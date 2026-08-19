"use client";

import { useState, useEffect } from "react";
import { useParams, notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { MOCK_AGENTS, TIER_LABEL } from "@/lib/mock-agents";

function initials(name: string) {
  return name.split(" ").map((s) => s[0]).slice(0, 2).join("").toUpperCase();
}

function formatRupiah(value: number) {
  return "Rp " + value.toLocaleString("id-ID");
}

function ListingCardSkeleton() {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 animate-pulse">
      <div className="h-44 bg-slate-200" />
      <div className="p-4 space-y-2">
        <div className="h-4 w-2/3 bg-slate-200 rounded" />
        <div className="h-3 w-1/2 bg-slate-200 rounded" />
      </div>
    </div>
  );
}

export default function AgentDetailPage() {
  const params = useParams();
  const agentId = params?.id as string;
  const agent = MOCK_AGENTS.find((a) => a.id === agentId);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 600);
    return () => clearTimeout(timer);
  }, []);

  if (!agent) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header profil agen */}
      <div className="bg-gradient-to-b from-slate-900 to-slate-800 pt-10 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/agents"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-white mb-6"
          >
            &larr; Kembali ke Daftar Agen
          </Link>

          <div className="flex items-start gap-4">
            <div className="w-20 h-20 rounded-full bg-green-600 text-white flex items-center justify-center text-2xl font-bold shrink-0 ring-4 ring-white/10">
              {initials(agent.name)}
            </div>
            <div className="flex-1 min-w-0 pt-1">
              <div className="flex items-center gap-2 flex-wrap">
                <h1 className="text-xl sm:text-2xl font-extrabold text-white">
                  {agent.name}
                </h1>
                <span className="text-[10px] font-bold bg-green-100 text-green-700 px-2 py-0.5 rounded-full uppercase">
                  {TIER_LABEL[agent.tier]}
                </span>
              </div>
              <p className="text-sm text-slate-300 flex items-center gap-1 mt-1">
                <span>📍</span> {agent.location}
              </p>
              <p className="text-xs text-slate-400 mt-1">
                Bergabung sejak {agent.joinedYear}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Kartu info + kontak */}
      <div className="max-w-4xl mx-auto px-4 -mt-8 relative z-10">
        <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-5 sm:p-6">
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            {agent.bio}
          </p>

          <div className="flex flex-wrap gap-1.5 mb-5">
            {agent.specialties.map((s) => (
              <span
                key={s}
                className="text-[11px] font-semibold bg-slate-100 text-slate-600 px-2.5 py-1 rounded-md"
              >
                {s}
              </span>
            ))}
          </div>

          {agent.coBrokeAvailable && (
            <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-5">
              <div className="flex items-center gap-2 text-green-900 font-bold text-xs sm:text-sm mb-1.5">
                <span className="text-base">🤝</span>
                <span>Terbuka untuk Co-Broke</span>
              </div>
              <p className="text-xs text-green-800/80 leading-relaxed">
                Skema bagi komisi default:{" "}
                <strong>{agent.commissionSplit}</strong> (bisa dinego
                langsung). Hubungi lewat WhatsApp co-broke di bawah untuk
                koordinasi.
              </p>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-2.5">
            <a
              href={`https://wa.me/${agent.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center bg-green-700 hover:bg-green-800 text-white font-bold text-xs py-3 rounded-xl transition flex items-center justify-center gap-1.5"
            >
              💬 Hubungi via WhatsApp
            </a>
            {agent.coBrokeAvailable && agent.coBrokeWhatsapp && (
              <a
                href={`https://wa.me/${agent.coBrokeWhatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center bg-white border-2 border-green-700 text-green-700 hover:bg-green-50 font-bold text-xs py-3 rounded-xl transition flex items-center justify-center gap-1.5"
              >
                🤝 WhatsApp Khusus Co-Broke
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Listing aktif milik agen ini */}
      <main className="max-w-4xl mx-auto px-4 py-10">
        <h2 className="text-sm font-bold text-slate-900 mb-4">
          Listing Aktif ({isLoading ? "..." : agent.listings.length})
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {isLoading ? (
            Array.from({ length: 2 }).map((_, i) => <ListingCardSkeleton key={i} />)
          ) : agent.listings.length === 0 ? (
            <div className="col-span-full flex flex-col items-center justify-center text-center py-14 px-4 bg-white rounded-2xl border border-slate-200">
              <div className="text-4xl mb-3">📭</div>
              <h3 className="text-sm font-bold text-slate-800 mb-1">
                Belum ada listing aktif
              </h3>
              <p className="text-xs text-slate-500">
                Agen ini belum memasang listing properti saat ini.
              </p>
            </div>
          ) : (
            agent.listings.map((item) => (
              <Link
                key={item.id}
                href={`/listing/${item.id}`}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-lg transition-all group"
              >
                <div className="relative h-44 bg-slate-100 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    unoptimized
                  />
                  <span
                    className={`absolute top-2.5 left-2.5 text-[10px] font-bold px-2 py-1 rounded-md shadow-md text-white ${
                      item.status === "Dijual" ? "bg-slate-900" : "bg-green-700"
                    }`}
                  >
                    {item.status}
                  </span>
                </div>
                <div className="p-4">
                  <div className="text-base font-extrabold text-green-700 mb-1">
                    {formatRupiah(item.price)}
                    {item.pricePeriod && (
                      <span className="text-[11px] font-semibold text-slate-400 ml-1">
                        / {item.pricePeriod}
                      </span>
                    )}
                  </div>
                  <h3 className="text-xs font-bold text-slate-800 line-clamp-2 leading-snug mb-1.5 group-hover:text-green-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-slate-500 flex items-center gap-1">
                    <span>📍</span> {item.location}
                  </p>
                </div>
              </Link>
            ))
          )}
        </div>
      </main>
    </div>
  );
}
                
