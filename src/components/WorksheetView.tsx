import React, { useState } from 'react';
import { WorksheetSection } from '../types/nihongo';
import { RubyText } from './RubyText';
import { PenTool, CheckCircle2, XCircle, RotateCcw, Printer, FileText } from 'lucide-react';

interface WorksheetViewProps {
  worksheet: WorksheetSection;
  chapterNomor: number;
}

export const WorksheetView: React.FC<WorksheetViewProps> = ({ worksheet, chapterNomor }) => {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);

  const handleSelectAnswer = (questionId: string, answer: string) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: answer
    }));
  };

  const resetQuiz = () => {
    setSelectedAnswers({});
    setShowResults(false);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 pb-3">
        <div>
          <div className="flex items-center gap-2">
            <PenTool className="w-5 h-5 text-red-600" />
            <h2 className="text-xl font-bold text-slate-900 tracking-tight">
              Lembar Kerja Menulis & Latihan Salin Buku
            </h2>
          </div>
          <p className="text-xs text-slate-500 mt-0.5">
            Gunakan panduan kotak berpetak dan kalimat di bawah ini untuk disalin secara konsisten ke buku tulismu.
          </p>
        </div>

        <button
          onClick={() => window.print()}
          type="button"
          className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors shadow-2xs no-print cursor-pointer self-start sm:self-center"
        >
          <Printer className="w-3.5 h-3.5 text-red-600" />
          Cetak Lembar Kerja Ini
        </button>
      </div>

      {/* Instruksi Buku Catatan */}
      <div className="bg-amber-50/70 border border-amber-200/80 rounded-xl p-4 text-xs md:text-sm text-amber-950 flex items-start gap-3">
        <FileText className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
        <div>
          <span className="font-bold text-amber-900">Petunjuk Salin Buku Mandiri: </span>
          {worksheet.instruksiBuku}
        </div>
      </div>

      {/* 1. Kanji Practice Grid (Genkouyoushi Style) */}
      <div className="space-y-4">
        <div className="border-b border-slate-200 pb-2">
          <h3 className="text-base font-bold text-slate-900 tracking-tight">
            1. Kotak Latihan Guratan Kanji (Disalin ke Buku Berpetak)
          </h3>
          <p className="text-xs text-slate-500">
            Perhatikan titik keseimbangan garis vertikal dan horizontal di dalam kotak berpetak.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {worksheet.kanjiList.map((k, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200 rounded-xl p-4 shadow-2xs hover:border-slate-300 transition-colors print-avoid-break"
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <div>
                  <div className="text-xs font-bold text-slate-400 font-mono">
                    Kanji #{idx + 1} · {k.jumlahGuratan} Guratan
                  </div>
                  <div className="text-sm font-bold text-sky-800">
                    {k.arti}
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5">
                    <span className="font-semibold text-slate-700">Onyomi: </span>{k.onyomi} · <span className="font-semibold text-slate-700">Kunyomi: </span>{k.kunyomi}
                  </div>
                  <div className="text-xs text-slate-600 mt-1">
                    <span className="font-semibold text-red-700">Contoh: </span>{k.kotobaContoh} ({k.kotobaArti})
                  </div>
                </div>

                <div className="text-3xl font-bold font-serif text-red-700 bg-red-50/60 w-12 h-12 rounded-lg flex items-center justify-center border border-red-100 shrink-0">
                  {k.kanji}
                </div>
              </div>

              {/* Genkouyoushi Practice Cells */}
              <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-100">
                {/* 1st: Solid target */}
                <div className="kanji-grid-cell">
                  <span>{k.kanji}</span>
                </div>
                {/* 2nd: Light dashed guide */}
                <div className="kanji-grid-cell guide-cell">
                  <span>{k.kanji}</span>
                </div>
                {/* 3rd - 6th: Empty practice cells for drawing/writing */}
                <div className="kanji-grid-cell" />
                <div className="kanji-grid-cell" />
                <div className="kanji-grid-cell" />
                <div className="kanji-grid-cell" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Latihan Salin Kalimat ke Buku */}
      <div className="space-y-4">
        <div className="border-b border-slate-200 pb-2">
          <h3 className="text-base font-bold text-slate-900 tracking-tight">
            2. Latihan Menyalin Kalimat Target (Kalimat Inti Bab {chapterNomor})
          </h3>
          <p className="text-xs text-slate-500">
            Salinlah kalimat Jepang berikut ke buku tulismu lengkap dengan furigana di atas kanji.
          </p>
        </div>

        <div className="space-y-4">
          {worksheet.latihanSalinKalimat.map((drill) => (
            <div
              key={drill.no}
              className="bg-white border border-slate-200 rounded-xl p-5 shadow-2xs print-avoid-break"
            >
              <div className="flex items-start gap-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-800 text-white text-xs font-bold shrink-0 mt-0.5">
                  {drill.no}
                </span>
                <div className="flex-1">
                  <div className="text-base md:text-lg font-bold text-slate-900 leading-relaxed">
                    <RubyText text={drill.jepang} />
                  </div>
                  <div className="text-xs font-mono text-slate-400 mt-0.5">
                    {drill.romaji}
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-sky-800 mt-1">
                    {drill.arti}
                  </div>
                  <div className="text-xs text-slate-500 italic mt-1.5">
                    📌 {drill.instruksi}
                  </div>

                  {/* Lined area for notebook simulation */}
                  <div className="mt-4 pt-3 border-t border-dashed border-slate-200 space-y-3">
                    <div className="h-7 border-b border-slate-200/80 flex items-center text-xs text-slate-300 font-mono">
                      [Garis Salin Catatan 1: Tulis kalimat huruf kanji & hiragana]
                    </div>
                    <div className="h-7 border-b border-slate-200/80 flex items-center text-xs text-slate-300 font-mono">
                      [Garis Salin Catatan 2: Tulis arti bahasa Indonesia]
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Kuis Harian Mandiri (Self-Test) */}
      {worksheet.soalHarian.length > 0 && (
        <div className="space-y-4 no-print">
          <div className="border-b border-slate-200 pb-2 flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-slate-900 tracking-tight">
                3. Kuis Harian Pemahaman Mandiri
              </h3>
              <p className="text-xs text-slate-500">
                Uji pemahamanmu sebelum beralih ke bab berikutnya!
              </p>
            </div>
            {showResults && (
              <button
                onClick={resetQuiz}
                type="button"
                className="flex items-center gap-1 text-xs text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                Ulangi Kuis
              </button>
            )}
          </div>

          <div className="space-y-4">
            {worksheet.soalHarian.map((q, idx) => {
              const userAnswer = selectedAnswers[q.id];
              const isCorrect = userAnswer === q.jawabanBenar;

              return (
                <div
                  key={q.id}
                  className="bg-white border border-slate-200 rounded-xl p-5 shadow-2xs"
                >
                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="font-bold text-xs text-red-700 bg-red-50 px-2 py-0.5 rounded">
                      Soal #{idx + 1}
                    </span>
                    <h4 className="text-sm font-semibold text-slate-900">
                      {q.pertanyaan}
                    </h4>
                  </div>

                  {/* Multiple choices */}
                  {q.pilihan && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
                      {q.pilihan.map((opt, oIdx) => {
                        const isSelected = userAnswer === opt;
                        let optionStyle = 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100';

                        if (showResults) {
                          if (opt === q.jawabanBenar) {
                            optionStyle = 'bg-emerald-50 border-emerald-300 text-emerald-900 font-semibold';
                          } else if (isSelected && !isCorrect) {
                            optionStyle = 'bg-rose-50 border-rose-300 text-rose-900 line-through';
                          }
                        } else if (isSelected) {
                          optionStyle = 'bg-sky-50 border-sky-400 text-sky-950 font-semibold';
                        }

                        return (
                          <button
                            key={oIdx}
                            onClick={() => handleSelectAnswer(q.id, opt)}
                            type="button"
                            className={`p-2.5 text-xs text-left rounded-lg border transition-all cursor-pointer flex items-center justify-between ${optionStyle}`}
                          >
                            <span>{opt}</span>
                            {showResults && opt === q.jawabanBenar && (
                              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 ml-1" />
                            )}
                            {showResults && isSelected && !isCorrect && (
                              <XCircle className="w-4 h-4 text-rose-600 shrink-0 ml-1" />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  )}

                  {/* Pembahasan when checked */}
                  {showResults && (
                    <div
                      className={`mt-3 p-3 rounded-lg text-xs leading-relaxed border ${
                        isCorrect
                          ? 'bg-emerald-50/70 border-emerald-200 text-emerald-950'
                          : 'bg-amber-50/70 border-amber-200 text-amber-950'
                      }`}
                    >
                      <div className="font-bold mb-0.5">
                        {isCorrect ? '✅ Jawaban Anda Tepat!' : `❌ Kunci Jawaban: ${q.jawabanBenar}`}
                      </div>
                      <p>{q.pembahasan}</p>
                    </div>
                  )}
                </div>
              );
            })}

            {!showResults && (
              <div className="pt-2">
                <button
                  onClick={() => setShowResults(true)}
                  disabled={Object.keys(selectedAnswers).length === 0}
                  type="button"
                  className="px-4 py-2 text-xs font-semibold text-white bg-red-700 hover:bg-red-800 disabled:bg-slate-300 disabled:cursor-not-allowed rounded-lg shadow-xs transition-colors cursor-pointer"
                >
                  Periksa Jawaban Kuis
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
