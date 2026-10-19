import React, { useState } from 'react';
import { allChaptersSummary } from '../data/chaptersSummary';
import { X, Search, Check } from 'lucide-react';

interface TableOfContentsModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentChapter: number;
  onSelectChapter: (num: number) => void;
}

export const TableOfContentsModal: React.FC<TableOfContentsModalProps> = ({
  isOpen,
  onClose,
  currentChapter,
  onSelectChapter
}) => {
  const [filterQuery, setFilterQuery] = useState('');
  const [selectedLevel, setSelectedLevel] = useState<'all' | 'N5' | 'N4'>('all');

  if (!isOpen) return null;

  const filtered = allChaptersSummary.filter((ch) => {
    const matchQuery =
      ch.judulJepang.toLowerCase().includes(filterQuery.toLowerCase()) ||
      ch.judulFurigana.toLowerCase().includes(filterQuery.toLowerCase()) ||
      ch.judulArti.toLowerCase().includes(filterQuery.toLowerCase()) ||
      ch.temaUtama.toLowerCase().includes(filterQuery.toLowerCase()) ||
      String(ch.nomor).includes(filterQuery);

    const matchLevel = selectedLevel === 'all' || ch.level === selectedLevel;
    return matchQuery && matchLevel;
  });

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden border border-slate-200">
        {/* Header */}
        <div className="p-4 md:p-5 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div>
            <h3 className="font-bold text-slate-900 text-lg">
              Daftar Isi Lengkap (みんなの日本語 Bab 1–50)
            </h3>
            <p className="text-xs text-slate-500">
              Pilih bab yang ingin dipelajari, dibaca karangannya, atau disalin lembar kerjanya.
            </p>
          </div>
          <button
            onClick={onClose}
            type="button"
            className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-200 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter Bar */}
        <div className="p-4 border-b border-slate-100 bg-white flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={filterQuery}
              onChange={(e) => setFilterQuery(e.target.value)}
              placeholder="Cari nomor bab, judul kanji, arti, atau tata bahasa..."
              className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-red-600 transition-colors"
            />
          </div>

          <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-lg shrink-0 self-start sm:self-auto">
            <button
              onClick={() => setSelectedLevel('all')}
              type="button"
              className={`px-3 py-1 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                selectedLevel === 'all'
                  ? 'bg-white text-slate-900 shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Semua (50 Bab)
            </button>
            <button
              onClick={() => setSelectedLevel('N5')}
              type="button"
              className={`px-3 py-1 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                selectedLevel === 'N5'
                  ? 'bg-white text-red-700 shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              N5 (Bab 1–25)
            </button>
            <button
              onClick={() => setSelectedLevel('N4')}
              type="button"
              className={`px-3 py-1 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                selectedLevel === 'N4'
                  ? 'bg-white text-sky-700 shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              N4 (Bab 26–50)
            </button>
          </div>
        </div>

        {/* Chapters Grid */}
        <div className="flex-1 p-4 md:p-6 overflow-y-auto grid grid-cols-1 md:grid-cols-2 gap-3">
          {filtered.map((item) => {
            const isCurrent = currentChapter === item.nomor;
            return (
              <button
                key={item.nomor}
                onClick={() => {
                  onSelectChapter(item.nomor);
                  onClose();
                }}
                type="button"
                className={`p-3.5 rounded-xl text-left border transition-all cursor-pointer flex items-start gap-3 ${
                  isCurrent
                    ? 'bg-red-50/80 border-red-300 ring-1 ring-red-300'
                    : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                <span
                  className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 text-xs font-bold font-mono ${
                    isCurrent
                      ? 'bg-red-700 text-white'
                      : 'bg-slate-100 text-slate-700'
                  }`}
                >
                  {item.nomor}
                </span>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-1">
                    <span className="text-sm font-bold text-slate-900 truncate">
                      {item.judulJepang}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400 shrink-0">
                      JLPT {item.level}
                    </span>
                  </div>

                  <div className="text-xs text-sky-800 font-semibold truncate mt-0.5">
                    {item.judulArti}
                  </div>

                  <div className="text-[11px] text-slate-500 truncate mt-1">
                    {item.temaUtama}
                  </div>
                </div>

                {isCurrent && (
                  <Check className="w-4 h-4 text-red-700 shrink-0 mt-1" />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
