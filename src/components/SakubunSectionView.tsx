import React, { useState } from 'react';
import { SakubunSection } from '../types/nihongo';
import { RubyText } from './RubyText';
import { Volume2, BookText, Eye, EyeOff, Copy, Check, Sparkles, ChevronDown, ChevronUp } from 'lucide-react';
import { speakJapanese } from '../utils/speech';

interface SakubunSectionViewProps {
  sakubun: SakubunSection;
  isFuriganaHidden: boolean;
  onToggleFurigana: () => void;
}

export const SakubunSectionView: React.FC<SakubunSectionViewProps> = ({
  sakubun,
  isFuriganaHidden,
  onToggleFurigana
}) => {
  const [copied, setCopied] = useState(false);
  const [showFullTranslation, setShowFullTranslation] = useState(true);
  const [expandedSentence, setExpandedSentence] = useState<number | null>(null);

  const handleCopy = () => {
    navigator.clipboard.writeText(
      `${sakubun.judul}\n(${sakubun.judulArti})\n\n${sakubun.teksLengkapJepang}\n\nTerjemahan:\n${sakubun.fullArti}`
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const toggleSentence = (num: number) => {
    setExpandedSentence((prev) => (prev === num ? null : num));
  };

  return (
    <div className="space-y-8">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <BookText className="w-6 h-6 text-red-600" />
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
              作文 · Karangan Akhir Bab
            </h2>
          </div>
          <p className="text-xs md:text-sm text-slate-500 mt-1">
            Latihan membaca kanji, menghafal kotoba dalam konteks nyata, dan membedah tata bahasa secara mendalam.
          </p>
        </div>

        {/* Action Controls */}
        <div className="flex flex-wrap items-center gap-2 no-print">
          <button
            onClick={onToggleFurigana}
            type="button"
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg border transition-all cursor-pointer ${
              isFuriganaHidden
                ? 'bg-amber-500 text-white border-amber-600 shadow-xs'
                : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
            }`}
            title="Klik untuk menyembunyikan/menampilkan furigana cara baca kanji"
          >
            {isFuriganaHidden ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5 text-slate-500" />}
            {isFuriganaHidden ? 'Mode Uji Diri (Furigana Disembunyikan)' : 'Tampilkan Furigana'}
          </button>

          <button
            onClick={() => speakJapanese(sakubun.teksLengkapJepang)}
            type="button"
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer"
          >
            <Volume2 className="w-3.5 h-3.5 text-red-600" />
            Dengarkan Karangan
          </button>

          <button
            onClick={handleCopy}
            type="button"
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer"
            title="Salin teks karangan untuk catatan tangan"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-slate-500" />}
            {copied ? 'Tersalin!' : 'Salin Teks'}
          </button>
        </div>
      </div>

      {/* Main Karangan Box (Styled like clean Japanese essay paper) */}
      <div className="bg-white border-2 border-red-900/20 rounded-2xl p-6 md:p-8 shadow-sm relative overflow-hidden">
        {/* Subtle decorative book border line */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-red-700 via-red-600 to-amber-600" />

        <div className="mb-4">
          <div className="text-xl md:text-2xl font-bold text-red-700 tracking-tight leading-relaxed">
            <RubyText text={sakubun.judul} />
          </div>
          <div className="text-xs md:text-sm font-medium text-slate-400 mt-0.5">
            {sakubun.judulRomaji} · <span className="text-sky-800">{sakubun.judulArti}</span>
          </div>
        </div>

        {/* Japanese Full Paragraph Text */}
        <div className={`text-base md:text-lg text-slate-900 leading-loose text-justify font-medium pt-2 pb-4 ${isFuriganaHidden ? 'hide-furigana' : ''}`}>
          <RubyText text={sakubun.teksLengkapJepang} />
        </div>

        {/* Translation Toggle */}
        <div className="mt-4 pt-4 border-t border-slate-100">
          <button
            onClick={() => setShowFullTranslation(!showFullTranslation)}
            type="button"
            className="flex items-center gap-1.5 text-xs font-semibold text-sky-700 hover:text-sky-800 transition-colors cursor-pointer no-print mb-2"
          >
            {showFullTranslation ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            {showFullTranslation ? 'Sembunyikan Terjemahan Indonesia' : 'Tampilkan Terjemahan Indonesia'}
          </button>

          {showFullTranslation && (
            <div className="bg-sky-50/50 border border-sky-100 rounded-xl p-4 text-xs md:text-sm text-sky-950 leading-relaxed">
              <span className="font-bold text-sky-900 block mb-1">Terjemahan Lengkap Bahasa Indonesia:</span>
              {sakubun.fullArti}
            </div>
          )}
        </div>

        {/* Guide / Reading Tips */}
        {sakubun.tipsMembaca && (
          <div className="mt-4 flex items-start gap-2.5 text-xs text-slate-500">
            <Sparkles className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
            <p>
              <strong className="text-slate-700">Tips Membaca: </strong>
              {sakubun.tipsMembaca} {isFuriganaHidden && <span className="text-amber-700 font-semibold">(Mode uji diri aktif: arahkan kursor ke kanji untuk melihat cara bacanya).</span>}
            </p>
          </div>
        )}
      </div>

      {/* Sentence-by-Sentence Breakdown (Bedah Bunpou & Kanji Mendalam) */}
      <div className="space-y-4">
        <div className="flex items-center justify-between border-b border-slate-200 pb-2">
          <div>
            <h3 className="text-lg md:text-xl font-bold text-slate-900 tracking-tight">
              Bedah Bunpou & Kanji Kalimat per Kalimat
            </h3>
            <p className="text-xs text-slate-500">
              Analisis terperinci struktur kalimat, makna partikel, filosofi kanji, dan penjelasan tata bahasa (termasuk pola lanjutan yang dijelaskan mudah).
            </p>
          </div>
          <span className="text-xs font-mono text-slate-400 no-print">
            {sakubun.kalimatBedah.length} Kalimat Dibedah
          </span>
        </div>

        <div className="space-y-4">
          {sakubun.kalimatBedah.map((item) => {
            const isExpanded = expandedSentence === item.kalimatNo || expandedSentence === null;
            return (
              <div
                key={item.kalimatNo}
                className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-2xs transition-all print-avoid-break"
              >
                {/* Sentence Head */}
                <div
                  onClick={() => toggleSentence(item.kalimatNo)}
                  className="p-4 md:p-5 bg-slate-50/80 border-b border-slate-200/60 flex items-start justify-between gap-3 cursor-pointer hover:bg-slate-100/60 transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <span className="flex items-center justify-center w-6 h-6 rounded-md bg-red-700 text-white text-xs font-bold shrink-0 mt-0.5">
                      {item.kalimatNo}
                    </span>
                    <div>
                      <div className={`text-base md:text-lg font-bold text-slate-900 leading-snug ${isFuriganaHidden ? 'hide-furigana' : ''}`}>
                        <RubyText text={item.kalimatJepang} />
                      </div>
                      <div className="text-xs font-mono text-slate-400 mt-0.5">
                        {item.romaji}
                      </div>
                      <div className="text-xs sm:text-sm font-semibold text-sky-800 mt-1">
                        {item.terjemahan}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        speakJapanese(item.kalimatJepang);
                      }}
                      type="button"
                      className="p-1.5 text-slate-400 hover:text-red-700 hover:bg-red-50 rounded-md transition-colors cursor-pointer no-print"
                      title="Dengarkan kalimat ini"
                      aria-label="Dengarkan kalimat"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      className="p-1 text-slate-400 no-print"
                      aria-label="Toggle details"
                    >
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Expanded Details: Kanji Cards & Bunpou Analysis */}
                {isExpanded && (
                  <div className="p-4 md:p-6 space-y-6">
                    {/* Kanji Focus Grid */}
                    {item.kanjiList.length > 0 && (
                      <div>
                        <div className="flex items-center gap-1.5 mb-2.5">
                          <span className="w-2 h-2 rounded-full bg-red-600" />
                          <h4 className="text-xs font-bold tracking-wider text-slate-700 uppercase">
                            Kanji Penting & Tips Mengingat
                          </h4>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                          {item.kanjiList.map((k, kIdx) => (
                            <div
                              key={kIdx}
                              className="bg-slate-50 border border-slate-200/80 rounded-lg p-3 hover:border-slate-300 transition-colors"
                            >
                              <div className="flex items-baseline gap-2 mb-1">
                                <span className="text-2xl font-bold font-serif text-red-700">
                                  {k.kanji}
                                </span>
                                <span className="text-xs font-semibold text-slate-600 font-mono">
                                  [{k.caraBaca}]
                                </span>
                              </div>
                              <div className="text-xs font-bold text-sky-800">
                                {k.arti}
                              </div>
                              {k.tipsIngat && (
                                <p className="text-xs text-slate-500 mt-1 leading-normal border-t border-slate-200/50 pt-1">
                                  💡 {k.tipsIngat}
                                </p>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Bunpou Analysis */}
                    {item.bunpouBedah.length > 0 && (
                      <div>
                        <div className="flex items-center gap-1.5 mb-2.5">
                          <span className="w-2 h-2 rounded-full bg-sky-600" />
                          <h4 className="text-xs font-bold tracking-wider text-slate-700 uppercase">
                            Bedah Bunpou & Pola Tata Bahasa
                          </h4>
                        </div>
                        <div className="space-y-3">
                          {item.bunpouBedah.map((b, bIdx) => (
                            <div
                              key={bIdx}
                              className="bg-sky-50/40 border border-sky-100 rounded-lg p-3.5"
                            >
                              <div className="flex flex-wrap items-baseline gap-2 mb-1">
                                <span className="text-sm font-bold text-red-700 font-mono">
                                  {b.pola}
                                </span>
                                <span className="text-xs font-bold text-sky-900">
                                  ({b.namaPola})
                                </span>
                                {b.levelCatatan && (
                                  <span className="text-xs text-amber-800 bg-amber-100/70 px-2 py-0.5 rounded text-[11px] font-semibold">
                                    {b.levelCatatan}
                                  </span>
                                )}
                              </div>
                              <p className="text-xs md:text-sm text-slate-700 leading-relaxed mt-1">
                                {b.penjelasan}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
