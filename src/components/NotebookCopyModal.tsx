import React, { useState } from 'react';
import { Chapter } from '../types/nihongo';
import { X, Copy, Check, BookOpen, Download } from 'lucide-react';

interface NotebookCopyModalProps {
  isOpen: boolean;
  onClose: () => void;
  chapter: Chapter;
}

export const NotebookCopyModal: React.FC<NotebookCopyModalProps> = ({ isOpen, onClose, chapter }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const generateCleanNoteText = () => {
    let text = `========================================\n`;
    text += `BAB ${chapter.nomor} : ${chapter.judulJepang} (${chapter.judulFurigana})\n`;
    text += `Arti: ${chapter.judulArti}\n`;
    text += `========================================\n\n`;

    text += `[1. RUMUS BUNPOU / TATA BAHASA]\n`;
    chapter.bunpou.forEach((b) => {
      text += `* ${b.nomor}. ${b.rumus} ${b.arti}\n`;
      text += `  Penjelasan: ${b.penjelasan}\n`;
      b.contoh.forEach((c) => {
        text += `  - ${c.jepang} (${c.arti})\n`;
      });
      if (b.tips) text += `  💡 Tips: ${b.tips}\n`;
      text += `\n`;
    });

    text += `[2. DAFTAR KOTOBA / KOSAKATA UNTUK DIHAFAL]\n`;
    chapter.kotoba.forEach((k) => {
      text += `${k.no}. ${k.kanji} [${k.furigana} / ${k.romaji}] = ${k.arti}\n`;
      text += `   Contoh: ${k.contohJepang} (${k.contohArti})\n`;
    });
    text += `\n`;

    text += `[3. SAKUBUN / KARANGAN LENGKAP LATIHAN MEMBACA & SALIN]\n`;
    text += `Judul: ${sakubunTitle()}\n\n`;
    text += `${chapter.sakubun.teksLengkapJepang}\n\n`;
    text += `Terjemahan:\n${chapter.sakubun.fullArti}\n\n`;

    text += `[4. BEDAH KALIMAT & KANJI SAKUBUN]\n`;
    chapter.sakubun.kalimatBedah.forEach((s) => {
      text += `Kalimat #${s.kalimatNo}:\n`;
      text += `${s.kalimatJepang}\n`;
      text += `${s.romaji}\n`;
      text += `Arti: ${s.terjemahan}\n`;
      if (s.kanjiList.length > 0) {
        text += `Kanji: ` + s.kanjiList.map((k) => `${k.kanji} (${k.caraBaca} = ${k.arti})`).join(', ') + `\n`;
      }
      if (s.bunpouBedah.length > 0) {
        text += `Pola: ` + s.bunpouBedah.map((b) => `[${b.pola} : ${b.penjelasan}]`).join('\n      ') + `\n`;
      }
      text += `\n`;
    });

    return text;
  };

  const sakubunTitle = () => `${chapter.sakubun.judul} (${chapter.sakubun.judulArti})`;

  const noteText = generateCleanNoteText();

  const handleCopy = () => {
    navigator.clipboard.writeText(noteText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([noteText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Catatan_Bab_${chapter.nomor}_${chapter.judulRomaji}.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden border border-slate-200">
        {/* Modal Header */}
        <div className="p-4 md:p-5 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-red-600" />
            <div>
              <h3 className="font-bold text-slate-900 text-base md:text-lg">
                Format Teks Siap Salin ke Buku Catatan
              </h3>
              <p className="text-xs text-slate-500">
                Bab {chapter.nomor} · {chapter.judulJepang}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            type="button"
            className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-200 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body: Raw Text Pre */}
        <div className="flex-1 p-4 md:p-6 overflow-y-auto bg-slate-900 text-slate-200 font-mono text-xs md:text-sm leading-relaxed whitespace-pre-wrap select-all">
          {noteText}
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-slate-200 bg-white flex flex-wrap items-center justify-between gap-3">
          <span className="text-xs text-slate-500">
            Teks ini rapi terstruktur untuk Anda salin tangan di buku jurnal atau catatan harian Anda.
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={handleDownload}
              type="button"
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              Unduh .TXT
            </button>
            <button
              onClick={handleCopy}
              type="button"
              className="flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold text-white bg-red-700 hover:bg-red-800 rounded-lg shadow-xs transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-300" /> : <Copy className="w-3.5 h-3.5" />}
              {copied ? 'Tersalin ke Clipboard!' : 'Salin Semua Teks'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
