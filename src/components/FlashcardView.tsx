import React, { useState } from 'react';
import { KotobaItem } from '../types/nihongo';
import { RubyText } from './RubyText';
import { Volume2, RotateCw, CheckCircle, XCircle, Sparkles } from 'lucide-react';
import { speakJapanese } from '../utils/speech';

interface FlashcardViewProps {
  kotobaList: KotobaItem[];
  chapterTitle: string;
  chapterNum: number;
}

export const FlashcardView: React.FC<FlashcardViewProps> = ({ kotobaList, chapterTitle, chapterNum }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [score, setScore] = useState({ correct: 0, incorrect: 0 });
  const [showResults, setShowResults] = useState(false);

  if (!kotobaList || kotobaList.length === 0) {
    return (
      <div className="bg-white rounded-2xl p-8 text-center shadow-sm">
        <p className="text-slate-500">Tidak ada data kotoba untuk bab ini.</p>
      </div>
    );
  }

  const currentItem = kotobaList[currentIndex];

  const handleNext = (correct: boolean) => {
    if (correct) {
      setScore(prev => ({ ...prev, correct: prev.correct + 1 }));
    } else {
      setScore(prev => ({ ...prev, incorrect: prev.incorrect + 1 }));
    }
    setIsFlipped(false);
    if (currentIndex < kotobaList.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleReset = () => {
    setCurrentIndex(0);
    setScore({ correct: 0, incorrect: 0 });
    setIsFlipped(false);
    setShowResults(false);
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {/* Header */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <span className="bg-red-100 text-red-800 text-xs font-bold px-3 py-1 rounded-full">
            Flashcard Kotoba · Bab {chapterNum}
          </span>
          <h2 className="text-xl font-bold text-slate-900 mt-2">
            Latihan Hafalan Kosakata (25 Kotoba)
          </h2>
          <p className="text-xs text-slate-500">
            {chapterTitle}
          </p>
        </div>
        <div className="text-right">
          <div className="text-xs text-slate-500 font-medium">Progres Kartu</div>
          <div className="text-lg font-extrabold text-red-700">
            {currentIndex + 1} / {kotobaList.length}
          </div>
        </div>
      </div>

      {showResults ? (
        <div className="bg-white rounded-2xl p-8 text-center shadow-sm border border-slate-200 space-y-6">
          <div className="w-16 h-16 bg-red-100 text-red-700 rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
            🎉
          </div>
          <h3 className="text-2xl font-bold text-slate-900">Latihan Selesai!</h3>
          <p className="text-sm text-slate-600">
            Kerja bagus! Teruslah berlatih setiap hari agar hafalan kanji dan kotobamu semakin matang.
          </p>
          <div className="flex justify-center gap-6 py-2">
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl px-6 py-3">
              <div className="text-xs text-emerald-700 font-semibold">Tahu & Hafal</div>
              <div className="text-2xl font-extrabold text-emerald-800">{score.correct}</div>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-xl px-6 py-3">
              <div className="text-xs text-amber-700 font-semibold">Perlu Diulang</div>
              <div className="text-2xl font-extrabold text-amber-800">{score.incorrect}</div>
            </div>
          </div>
          <button
            onClick={handleReset}
            type="button"
            className="px-6 py-2.5 bg-red-700 hover:bg-red-800 text-white font-bold text-xs rounded-xl transition-colors cursor-pointer inline-flex items-center gap-2"
          >
            <RotateCw className="w-4 h-4" />
            <span>Ulangi Latihan Flashcard</span>
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {/* Flashcard Box */}
          <div
            onClick={() => setIsFlipped(!isFlipped)}
            className={`bg-white rounded-3xl p-8 min-h-[300px] shadow-md border-2 transition-all duration-300 cursor-pointer flex flex-col items-center justify-center text-center relative ${
              isFlipped ? 'border-sky-500 bg-sky-50/20' : 'border-slate-200 hover:border-red-300'
            }`}
          >
            <div className="absolute top-4 left-4 text-xs font-bold text-slate-400">
              No. {currentItem.no}
            </div>
            <div className="absolute top-4 right-4 flex items-center gap-2">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  speakJapanese(currentItem.kanji);
                }}
                className="p-2 bg-slate-100 hover:bg-red-100 text-slate-700 hover:text-red-700 rounded-full transition-colors"
                title="Dengarkan Pengucapan"
                type="button"
              >
                <Volume2 className="w-4 h-4" />
              </button>
              <span className="text-xs text-slate-400 flex items-center gap-1">
                <RotateCw className="w-3 h-3 animate-spin-slow" /> Klik untuk balik
              </span>
            </div>

            {!isFlipped ? (
              <div className="space-y-4 my-auto">
                <div className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-wider">
                  <RubyText text={currentItem.kanji} furiganaHint={currentItem.furigana} />
                </div>
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-widest">
                  {currentItem.romaji}
                </div>
                <p className="text-xs text-slate-500 italic pt-2">
                  (Ketuk kartu untuk melihat arti bahasa Indonesia)
                </p>
              </div>
            ) : (
              <div className="space-y-3 my-auto animate-fadeIn">
                <div className="text-2xl font-bold text-sky-700">
                  {currentItem.arti}
                </div>
                <div className="text-xs text-slate-600 bg-white/80 p-3 rounded-xl border border-sky-100 max-w-md mx-auto">
                  <span className="font-bold text-slate-800">Contoh:</span> {currentItem.contohJepang}
                  <div className="text-sky-800 mt-1">{currentItem.contohArti}</div>
                </div>
                {currentItem.notes && (
                  <div className="text-[11px] text-amber-800 bg-amber-50 p-2 rounded-lg inline-block">
                    💡 {currentItem.notes}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-center gap-4 pt-2">
            <button
              onClick={() => handleNext(false)}
              type="button"
              className="flex-1 max-w-xs py-3 px-6 bg-white border border-amber-300 hover:bg-amber-50 text-amber-900 font-bold text-xs rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <XCircle className="w-4 h-4 text-amber-600" />
              <span>Belum Hafal / Ulangi</span>
            </button>
            <button
              onClick={() => handleNext(true)}
              type="button"
              className="flex-1 max-w-xs py-3 px-6 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <CheckCircle className="w-4 h-4 text-white" />
              <span>Sudah Hafal ✓</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
