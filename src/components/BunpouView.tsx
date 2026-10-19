import React from 'react';
import { BunpouItem } from '../types/nihongo';
import { RubyText } from './RubyText';
import { Lightbulb, BookOpen } from 'lucide-react';

interface BunpouViewProps {
  bunpouList: BunpouItem[];
}

export const BunpouView: React.FC<BunpouViewProps> = ({ bunpouList }) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between border-b border-slate-200 pb-3">
        <div className="flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-red-600" />
          <h2 className="text-xl font-bold text-slate-900 tracking-tight">
            Bunpou · Tata Bahasa
          </h2>
        </div>
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <span className="font-semibold text-red-700">Merah = rumus</span>
          <span aria-hidden="true">·</span>
          <span className="font-semibold text-sky-700">Biru = arti</span>
          <span aria-hidden="true">·</span>
          <span>Hitam = penjelasan</span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {bunpouList.map((item) => (
          <div
            key={item.nomor}
            className="bg-white border border-slate-200 rounded-xl p-5 md:p-6 shadow-xs hover:border-slate-300 transition-colors print-avoid-break"
          >
            {/* Header Rumus */}
            <div className="flex items-start gap-3 mb-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-red-600 text-white text-xs font-bold shrink-0 mt-0.5">
                {item.nomor}
              </span>
              <div>
                <h3 className="text-lg md:text-xl font-bold text-red-700 tracking-tight leading-snug">
                  {item.rumus}
                </h3>
                <p className="text-sm font-semibold text-sky-700 mt-0.5">
                  {item.arti}
                </p>
              </div>
            </div>

            {/* Penjelasan Santai */}
            <p className="text-slate-700 text-sm md:text-base leading-relaxed mb-4 pl-10">
              {item.penjelasan}
            </p>

            {/* Contoh Kalimat */}
            <div className="space-y-2.5 bg-slate-50/70 border border-slate-100 rounded-lg p-4 ml-0 md:ml-10">
              <span className="text-xs font-semibold tracking-wider text-slate-500 uppercase block mb-1">
                Contoh Kalimat
              </span>
              {item.contoh.map((ex, cIdx) => (
                <div
                  key={cIdx}
                  className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 py-1 border-b border-slate-200/50 last:border-none"
                >
                  <div className="text-base font-medium text-slate-900">
                    <RubyText text={ex.jepang} showAudio={true} />
                  </div>
                  <div className="text-sm text-sky-800 sm:text-right">
                    {ex.arti}
                  </div>
                </div>
              ))}
            </div>

            {/* Tips Kotak Kuning Santai */}
            {item.tips && (
              <div className="mt-3 ml-0 md:ml-10 flex items-start gap-2 bg-amber-50/80 border border-amber-200/70 rounded-lg p-3 text-xs md:text-sm text-amber-900">
                <Lightbulb className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-amber-800">Tips Santai: </span>
                  {item.tips}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
