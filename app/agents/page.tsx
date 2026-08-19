"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { MOCK_AGENTS, TIER_LABEL, type AgentProfile } from "@/lib/mock-agents";

function initials(name: string) {
  return name.split(" ").map((s) => s[0]).slice(0, 2).join("").toUpperCase();
}

function AgentCardSkeleton() {
  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 p-5 animate-pulse">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-14 h-14 rounded-full bg-slate-200 shrink-0" />
        <div className="flex-1 space-y-2">
          <div className="h-4 w-2/3 bg-slate-200 rounded" />
          <div className="h-3 w-1/2 bg-slate-200 rounded" />
        </div>
      </div>
      <div className="h-3 w-full bg-slate-200 rounded mb-2" />
      <div className="h-9 w-full bg-slate-200 rounded-xl mt-4" />
    </div>
  );
}

function EmptyState({ onReset }: { onReset: () => void }) {
  return (
    <div className="col-span-full flex flex-col items-center justify-center text-center py-16 px-4">
      <div className="text-5xl mb-4">🧑‍💼</div>
      <h3 className="text-sm font-bold text-slate-800 mb-1">
        Tidak ada agen yang cocok
      </h3>
      <p className="text-xs text-slate-500 max-w-xs mb-5">
        Coba ubah kata kunci nama/lokasi, atau matikan filter Co-Broke.
      </p>
      <button
        onClick={onReset}
        className="bg-green-700 hover:bg-green-800 text-white text-xs font-bold px-5 py-2.5 rounded-xl transition"
      >
        Reset Filter
      </button>
    </div>
  );
}

function AgentCard({ agent }: { agent: AgentProfile }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-lg transition-all p-5 flex flex-col">
      <div className="flex items-start gap-3 mb-3">
        <div className="w-14 h-14 rounded-full bg-green-600 text-white flex items-center justify-center text-base font-bold shrink-0">
          {initials(agent.name)}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5 flex-wrap">
            <h3 className="text-sm font-bold text-slate-900 truncate">{agent.name}</h3>
            <span className="text-[9px] font-bold bg-green-100 text-green-700 px-1.5 py-0.5 rounded uppercase shrink-0">
              {TIER_LABEL[agent.tier]}
            </span>
          </div>
          <p className="text-xs text-slate-500 flex items-center gap-1 mt-0.5">
            <span>📍</span> {agent.location}
          </p>
        </div>
      </div>

      {agent.coBrokeAvailable && (
        <div className="bg-green-50 border border-green-200 rounded-xl px-3 py-2 mb-3 flex items-center gap-1.5">
          <span className="text-sm">🤝</span>
          <span className="text-[11px] text-green-800 font-medium">
            Terbuka Co-Broke ({agent.commissionSplit})
          </span>
        </div>
      )}

      <div className="flex flex-wrap gap-1.5 mb-4">
        {agent.specialties.map((s) => (
          <span
            key={s}
            className="text-[10px] font-semibold bg-slate-100 text-slate-600 px-2 py-1 rounded-md"
          >
            {s}
          </span>
        ))}
      </div>

      <p className="text-xs text-slate-500 mb-4">
        <strong className="text-slate-800">{agent.listings.length}</strong> listing aktif
      </p>

      <div className="flex items-center gap-2 mt-auto">
        <Link
          href={`/agents/${agent.id}`}
          className="flex-1 text-center bg-slate-50 hover:bg-slate-100 text-slate-700 font-semibold text-xs py-2.5 rounded-xl transition border border-slate-200"
        >
          Lihat Listing
        </Link>
        <a
          href={`https://wa.me/${agent.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 text-center bg-green-700 hover:bg-green-800 text-white font-semibold text-xs py-2.5 rounded-xl transition"
        >
          WhatsApp
        </a>
      </div>
    </div>
  );
}

export default function AgentsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [coBrokeOnly, setCoBrokeOnly] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 700);
    return () => clearTimeout(timer);
  }, []);

  const filtered = useMemo(() => {
    return MOCK_AGENTS.filter((agent) => {
      const matchSearch =
        search.trim() === "" ||
        agent.name.toLowerCase().includes(search.toLowerCase()) ||
        agent.location.toLowerCase().includes(search.toLowerCase());
      const matchCoBroke = !coBrokeOnly || agent.coBrokeAvailable;
      return matchSearch && matchCoBroke;
    });
  }, [search, coBrokeOnly]);

  const resetFilter = () => {
    setSearch("");
    setCoBrokeOnly(false);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="bg-gradient-to-b from-slate-900 to-slate-800 py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white mb-1">
            Cari Agen Properti
          </h1>
          <p className="text-sm text-slate-300">
            {isLoading ? "Memuat data agen..." : `${filtered.length} agen ditemukan`}
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 -mt-6 relative z-10">
        <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-4 sm:p-5">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 items-center">
            <div className="sm:col-span-2">
              <input
                type="text"
                placeholder="Cari nama agen atau lokasi..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-green-500 outline-none text-slate-800"
              />
            </div>
            <label className="flex items-center gap-2 cursor-pointer px-1">
              <input
                type="checkbox"
                checked={coBrokeOnly}
                onChange={(e) => setCoBrokeOnly(e.target.checked)}
                className="accent-green-600 w-4 h-4"
              />
              <span className="text-xs font-semibold text-slate-700">
                🤝 Hanya yang bersedia Co-Broke
              </span>
            </label>
          </div>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {isLoading ? (
            Array.from({ length: 6 }).map((_, i) => <AgentCardSkeleton key={i} />)
          ) : filtered.length === 0 ? (
            <EmptyState onReset={resetFilter} />
          ) : (
            filtered.map((agent) => <AgentCard key={agent.id} agent={agent} />)
          )}
        </div>
      </main>
    </div>
  );
}
