import React, { useState } from 'react';
import { KotobaItem } from '../types/nihongo';
import { RubyText } from './RubyText';
import { Search, Volume2, Sparkles } from 'lucide-react';
import { speakJapanese } from '../utils/speech';

interface KotobaTableProps {
  kotobaList: KotobaItem[];
  tipsHafalan?: string;
}

export const KotobaTable: React.FC<KotobaTableProps> = ({ kotobaList, tipsHafalan }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filtered = kotobaList.filter(
    (k) =>
      k.kanji.toLowerCase().includes(searchTerm.toLowerCase()) ||
      k.furigana.toLowerCase().includes(searchTerm.toLowerCase()) ||
      k.romaji.toLowerCase().includes(searchTerm.toLowerCase()) ||
      k.arti.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-4">
      {/* Search & Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-slate-200 pb-3">
        <div>
          <h2 className="text-xl font-bold text-slate-900 tracking-tight">
            Kotoba · Kosakata ({kotobaList.length} Kata Terpilih)
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Dilengkapi kanji, furigana di atas huruf, romaji, dan contoh kalimat nyata.
          </p>
        </div>

        <div className="relative w-full sm:w-64 no-print">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Cari kata atau arti..."
            className="w-full pl-9 pr-3 py-1.5 text-xs bg-white border border-slate-200 rounded-lg focus:outline-none focus:border-red-600 transition-colors"
          />
        </div>
      </div>

      {/* Table Container */}
      <div className="overflow-x-auto border border-slate-200 rounded-xl bg-white shadow-xs">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="bg-red-700 text-white font-semibold text-xs tracking-wider">
              <th className="py-2.5 px-3 w-12 text-center">No</th>
              <th className="py-2.5 px-4 w-36">Kotoba</th>
              <th className="py-2.5 px-3 w-28">Baca</th>
              <th className="py-2.5 px-4 w-36">Arti</th>
              <th className="py-2.5 px-4">Contoh Kalimat</th>
              <th className="py-2.5 px-3 w-14 text-center no-print">Suara</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {filtered.length === 0 ? (
              <tr>
                <td colSpan={6} className="py-8 text-center text-slate-400">
                  Tidak ditemukan kata yang cocok dengan "{searchTerm}".
                </td>
              </tr>
            ) : (
              filtered.map((item) => (
                <tr
                  key={item.no}
                  className="hover:bg-slate-50/70 transition-colors group print-avoid-break"
                >
                  <td className="py-3 px-3 text-center text-xs font-mono text-slate-400">
                    {item.no}
                  </td>
                  <td className="py-3 px-4 font-medium text-base text-red-700">
                    <RubyText text={item.kanji} furiganaHint={item.furigana} />
                  </td>
                  <td className="py-3 px-3 text-xs text-slate-500 font-mono">
                    {item.romaji}
                  </td>
                  <td className="py-3 px-4 font-semibold text-sky-800 text-xs sm:text-sm">
                    {item.arti}
                  </td>
                  <td className="py-3 px-4">
                    <div className="text-sm text-slate-900 font-medium">
                      <RubyText text={item.contohJepang} />
                    </div>
                    <div className="text-xs text-slate-500 mt-0.5">
                      {item.contohArti}
                    </div>
                  </td>
                  <td className="py-3 px-3 text-center no-print">
                    <button
                      onClick={() => speakJapanese(`${item.kanji}。${item.contohJepang}`)}
                      type="button"
                      className="p-1.5 text-slate-400 hover:text-red-700 hover:bg-red-50 rounded-md transition-colors cursor-pointer"
                      title="Dengarkan pelafalan kata"
                      aria-label="Dengarkan kata"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Tips Menghafal Footer */}
      {tipsHafalan && (
        <div className="flex items-start gap-2.5 bg-sky-50/70 border border-sky-100 rounded-xl p-4 text-xs md:text-sm text-sky-950">
          <Sparkles className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
          <div>
            <span className="font-bold text-sky-900">Tips Menghafal: </span>
            {tipsHafalan}
          </div>
        </div>
      )}
    </div>
  );
};
