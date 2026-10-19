import React from 'react';
import { KaiwaItem } from '../types/nihongo';
import { RubyText } from './RubyText';
import { MessageSquare, Volume2, Info, User } from 'lucide-react';
import { speakJapanese } from '../utils/speech';

interface KaiwaViewProps {
  kaiwa: KaiwaItem;
}

export const KaiwaView: React.FC<KaiwaViewProps> = ({ kaiwa }) => {
  const handlePlayAll = () => {
    const fullText = kaiwa.percakapan.map((p) => p.jepang).join(' ');
    speakJapanese(fullText);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 pb-3">
        <div>
          <div className="flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-red-600" />
            <h2 className="text-xl font-bold text-slate-900 tracking-tight">
              {kaiwa.judul}
            </h2>
          </div>
          <p className="text-xs text-slate-500 mt-0.5">
            Situasi: {kaiwa.situasi}
          </p>
        </div>

        <button
          onClick={handlePlayAll}
          type="button"
          className="flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold text-slate-700 bg-white border border-slate-200 rounded-lg hover:border-slate-300 hover:bg-slate-50 transition-colors shadow-2xs no-print cursor-pointer self-start sm:self-center"
        >
          <Volume2 className="w-3.5 h-3.5 text-red-600" />
          Dengarkan Seluruh Dialog
        </button>
      </div>

      {/* Dialogue Bubbles */}
      <div className="space-y-4">
        {kaiwa.percakapan.map((line, idx) => {
          const isEven = idx % 2 === 1;
          return (
            <div
              key={idx}
              className={`flex items-start gap-3 p-4 rounded-xl border transition-colors print-avoid-break ${
                isEven
                  ? 'bg-sky-50/50 border-sky-100/80 ml-0 md:ml-6'
                  : 'bg-white border-slate-200 mr-0 md:mr-6'
              }`}
            >
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 text-xs font-bold ${
                  isEven
                    ? 'bg-sky-600 text-white'
                    : 'bg-red-600 text-white'
                }`}
              >
                <User className="w-4 h-4" />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="font-bold text-sm text-slate-900">
                    {line.pembicara}
                  </span>
                  <span className="text-xs text-slate-400">
                    ({line.role})
                  </span>
                </div>

                <div className="text-base text-slate-900 leading-relaxed font-medium">
                  <RubyText text={line.jepang} />
                </div>

                <div className="text-xs font-mono text-slate-400 mt-0.5">
                  {line.romaji}
                </div>

                <div className="text-xs sm:text-sm font-semibold text-sky-800 mt-1">
                  {line.arti}
                </div>
              </div>

              <button
                onClick={() => speakJapanese(line.jepang)}
                type="button"
                className="p-1.5 text-slate-400 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors shrink-0 no-print cursor-pointer"
                title="Dengarkan baris ini"
                aria-label="Dengarkan percakapan baris ini"
              >
                <Volume2 className="w-4 h-4" />
              </button>
            </div>
          );
        })}
      </div>

      {/* Cultural Note */}
      {kaiwa.catatanBudaya && (
        <div className="flex items-start gap-3 bg-amber-50/80 border border-amber-200/80 rounded-xl p-4 text-xs md:text-sm text-amber-900">
          <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <span className="font-bold text-amber-800">Catatan Budaya & Etika Jepang: </span>
            {kaiwa.catatanBudaya}
          </div>
        </div>
      )}
    </div>
  );
};
