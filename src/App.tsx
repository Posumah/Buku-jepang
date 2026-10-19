import { useState, useEffect } from 'react';
import html2pdf from 'html2pdf.js';
import { getFullChapter } from './data/moreChapters';
import { allChaptersSummary } from './data/chaptersSummary';
import { PdfBookDocument } from './components/PdfBookDocument';
import { NotebookCopyModal } from './components/NotebookCopyModal';
import { TableOfContentsModal } from './components/TableOfContentsModal';
import { FlashcardView } from './components/FlashcardView';
import { WorksheetView } from './components/WorksheetView';
import { BunpouView } from './components/BunpouView';
import { KotobaTable } from './components/KotobaTable';
import { KaiwaView } from './components/KaiwaView';
import { SakubunSectionView } from './components/SakubunSectionView';
import {
  Printer,
  ChevronLeft,
  ChevronRight,
  ClipboardList,
  Download,
  Loader2,
  CheckCircle2,
  Info,
  BookOpen,
  Layers,
  Sparkles,
  PenTool,
  MessageSquare
} from 'lucide-react';

export default function App() {
  const [currentChapterNum, setCurrentChapterNum] = useState<number>(1);
  const [includeCover, setIncludeCover] = useState<boolean>(true);
  const [includeToc, setIncludeToc] = useState<boolean>(true);
  const [renderAllChapters, setRenderAllChapters] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'pdf' | 'flashcard' | 'worksheet' | 'study'>('pdf');
  const [isFuriganaHidden, setIsFuriganaHidden] = useState<boolean>(false);
  const [isNotebookModalOpen, setIsNotebookModalOpen] = useState<boolean>(false);
  const [isTOCModalOpen, setIsTOCModalOpen] = useState<boolean>(false);
  const [isGeneratingPdf, setIsGeneratingPdf] = useState<boolean>(false);
  const [downloadSuccess, setDownloadSuccess] = useState<string>('');

  const currentChapter = getFullChapter(currentChapterNum);

  // List of chapters to render in the document
  const activeChapters = renderAllChapters
    ? [1, 2, 3, 4, 5].map((num) => getFullChapter(num))
    : [currentChapter];

  // Direct 1-Click Native High-Res PDF Print
  const handlePrintPdf = () => {
    window.print();
  };

  // Direct File .PDF Export using html2pdf
  const handleDownloadFilePdf = () => {
    setIsGeneratingPdf(true);
    setDownloadSuccess('Sedang merender dan mengunduh file PDF...');
    const element = document.getElementById('pdf-book-content');
    if (!element) {
      setIsGeneratingPdf(false);
      setDownloadSuccess('');
      return;
    }
    const opt = {
      margin:       [10, 10, 10, 10] as [number, number, number, number],
      filename:     renderAllChapters ? 'Minna_no_Nihongo_Catatan_Santai_Bab1-5.pdf' : `Minna_no_Nihongo_Bab_${currentChapterNum}.pdf`,
      image:        { type: 'jpeg' as const, quality: 0.98 },
      html2canvas:  { scale: 2, useCORS: true, letterRendering: true },
      jsPDF:        { unit: 'mm' as const, format: 'a4', orientation: 'portrait' as const }
    };

    html2pdf().from(element).set(opt).save().then(() => {
      setIsGeneratingPdf(false);
      setDownloadSuccess('File PDF berhasil diunduh!');
      setTimeout(() => setDownloadSuccess(''), 4000);
    }).catch((err: any) => {
      console.error(err);
      setIsGeneratingPdf(false);
      window.print();
      setDownloadSuccess('Membuka dialog cetak sebagai alternatif.');
      setTimeout(() => setDownloadSuccess(''), 4000);
    });
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      if (e.key === 'ArrowLeft' && currentChapterNum > 1) {
        setCurrentChapterNum((prev) => prev - 1);
        setRenderAllChapters(false);
      } else if (e.key === 'ArrowRight' && currentChapterNum < 50) {
        setCurrentChapterNum((prev) => prev + 1);
        setRenderAllChapters(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentChapterNum]);

  return (
    <div className="min-h-screen bg-slate-100 text-slate-800 flex flex-col font-sans">
      {/* =========================================================================
          TOP ACTION BAR
      ========================================================================= */}
      <header className="sticky top-0 z-40 bg-white border-b border-slate-300 px-4 md:px-8 py-3 flex flex-wrap items-center justify-between gap-4 shadow-sm no-print">
        {/* Brand / Title */}
        <div className="flex items-center gap-3">
          <span className="w-9 h-9 rounded-xl bg-red-700 text-white flex items-center justify-center font-bold text-sm shadow-sm">
            🇯🇵
          </span>
          <div>
            <h1 className="text-base md:text-lg font-bold text-slate-900 tracking-tight leading-tight">
              みんなの日本語 <span className="font-normal text-slate-500 text-xs md:text-sm">· Catatan Santai</span>
            </h1>
            <p className="text-[11px] text-slate-500 hidden sm:block">
              Materi Ajar Komprehensif Bab 1–50 dengan Furigana, Bunpou, Kotoba & PDF Export
            </p>
          </div>
        </div>

        {/* Chapter Selection & Scope Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              if (currentChapterNum > 1) {
                setCurrentChapterNum(currentChapterNum - 1);
                setRenderAllChapters(false);
              }
            }}
            disabled={currentChapterNum <= 1 || renderAllChapters}
            type="button"
            className="p-1.5 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer"
            title="Bab Sebelumnya"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <select
            value={renderAllChapters ? 'all' : String(currentChapterNum)}
            onChange={(e) => {
              if (e.target.value === 'all') {
                setRenderAllChapters(true);
              } else {
                setRenderAllChapters(false);
                setCurrentChapterNum(Number(e.target.value));
              }
            }}
            className="text-xs font-semibold bg-slate-50 border border-slate-300 rounded-lg px-2.5 py-1.5 focus:outline-none focus:border-red-700 cursor-pointer"
          >
            <option value="all">📚 Cetak Seluruh Buku (Bab 1–5 Lengkap)</option>
            {allChaptersSummary.map((s) => (
              <option key={s.nomor} value={s.nomor}>
                Bab {s.nomor}: {s.judulJepang} ({s.judulArti})
              </option>
            ))}
          </select>

          <button
            onClick={() => {
              if (currentChapterNum < 50) {
                setCurrentChapterNum(currentChapterNum + 1);
                setRenderAllChapters(false);
              }
            }}
            disabled={currentChapterNum >= 50 || renderAllChapters}
            type="button"
            className="p-1.5 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer"
            title="Bab Berikutnya"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Primary Actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={handlePrintPdf}
            type="button"
            className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-white bg-red-700 hover:bg-red-800 rounded-lg shadow-xs transition-colors cursor-pointer"
            title="Buka dialog cetak: pilih 'Save as PDF' untuk hasil paling tajam & tanpa terpotong"
          >
            <Printer className="w-4 h-4" />
            <span className="hidden md:inline">Cetak / Simpan PDF (A4)</span>
          </button>

          <button
            onClick={handleDownloadFilePdf}
            disabled={isGeneratingPdf}
            type="button"
            className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-slate-700 bg-white border border-slate-300 hover:bg-slate-50 disabled:bg-slate-200 rounded-lg shadow-2xs transition-colors cursor-pointer"
            title="Unduh langsung sebagai file .pdf"
          >
            {isGeneratingPdf ? <Loader2 className="w-4 h-4 animate-spin text-red-700" /> : <Download className="w-4 h-4 text-red-700" />}
            <span>{isGeneratingPdf ? 'Memproses...' : 'Unduh File .PDF'}</span>
          </button>

          <button
            onClick={() => setIsNotebookModalOpen(true)}
            type="button"
            className="p-2 text-slate-600 hover:text-slate-900 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg transition-colors cursor-pointer"
            title="Salin format teks bersih ke buku catatan"
          >
            <ClipboardList className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* VIEW TABS BAR */}
      <div className="bg-white border-b border-slate-200 px-4 md:px-8 flex items-center gap-2 overflow-x-auto no-print shadow-2xs">
        <button
          onClick={() => setActiveTab('pdf')}
          className={`flex items-center gap-2 py-3 px-4 text-xs font-bold border-b-2 transition-colors cursor-pointer shrink-0 ${
            activeTab === 'pdf' ? 'border-red-700 text-red-700 bg-red-50/50' : 'border-transparent text-slate-600 hover:text-slate-900'
          }`}
          type="button"
        >
          <BookOpen className="w-4 h-4" />
          <span>Pratinjau Buku PDF (A4)</span>
        </button>

        <button
          onClick={() => setActiveTab('study')}
          className={`flex items-center gap-2 py-3 px-4 text-xs font-bold border-b-2 transition-colors cursor-pointer shrink-0 ${
            activeTab === 'study' ? 'border-red-700 text-red-700 bg-red-50/50' : 'border-transparent text-slate-600 hover:text-slate-900'
          }`}
          type="button"
        >
          <Layers className="w-4 h-4" />
          <span>Materi & Kosakata (Bab {currentChapterNum})</span>
        </button>

        <button
          onClick={() => setActiveTab('flashcard')}
          className={`flex items-center gap-2 py-3 px-4 text-xs font-bold border-b-2 transition-colors cursor-pointer shrink-0 ${
            activeTab === 'flashcard' ? 'border-red-700 text-red-700 bg-red-50/50' : 'border-transparent text-slate-600 hover:text-slate-900'
          }`}
          type="button"
        >
          <Sparkles className="w-4 h-4" />
          <span>Flashcard Kotoba</span>
        </button>

        <button
          onClick={() => setActiveTab('worksheet')}
          className={`flex items-center gap-2 py-3 px-4 text-xs font-bold border-b-2 transition-colors cursor-pointer shrink-0 ${
            activeTab === 'worksheet' ? 'border-red-700 text-red-700 bg-red-50/50' : 'border-transparent text-slate-600 hover:text-slate-900'
          }`}
          type="button"
        >
          <PenTool className="w-4 h-4" />
          <span>Lembar Kerja & Kuis</span>
        </button>
      </div>

      {/* SUCCESS NOTIFICATION */}
      {downloadSuccess && (
        <div className="bg-emerald-700 text-white px-4 py-2 text-xs font-semibold flex items-center justify-center gap-2 shadow-sm no-print">
          <CheckCircle2 className="w-4 h-4 shrink-0" />
          <span>{downloadSuccess}</span>
        </div>
      )}

      {/* QUICK GUIDE CALLOUT FOR PDF SAVING */}
      <div className="bg-amber-100/90 border-b border-amber-300 text-amber-950 px-4 py-2 text-xs text-center flex items-center justify-center gap-2 no-print">
        <Info className="w-4 h-4 text-amber-800 shrink-0" />
        <span>
          <strong>Petunjuk:</strong> Anda dapat melihat pratinjau buku cetak A4, berlatih Flashcard Kosakata, mengerjakan lembar kerja, atau langsung mengunduh PDF lengkap!
        </span>
      </div>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 py-6 px-4 md:px-8 max-w-7xl mx-auto w-full">
        {activeTab === 'pdf' && (
          <div className="overflow-x-auto">
            <PdfBookDocument
              chapters={activeChapters}
              includeCover={includeCover}
              includeToc={includeToc}
            />
          </div>
        )}

        {activeTab === 'flashcard' && (
          <FlashcardView
            kotobaList={currentChapter.kotoba}
            chapterTitle={currentChapter.judulJepang}
            chapterNum={currentChapter.nomor}
          />
        )}

        {activeTab === 'worksheet' && (
          <WorksheetView
            worksheet={currentChapter.worksheet}
            chapterNomor={currentChapter.nomor}
          />
        )}

        {activeTab === 'study' && (
          <div className="space-y-8 animate-fadeIn">
            {/* Header info */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
              <span className="text-xs font-bold text-red-700 tracking-widest uppercase">
                BAB {currentChapter.nomor} · {currentChapter.judulFurigana}
              </span>
              <h2 className="text-2xl font-bold text-slate-900 mt-1">
                {currentChapter.judulJepang} ({currentChapter.judulArti})
              </h2>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                {currentChapter.pengantar}
              </p>
            </div>

            {/* Bunpou View */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-red-700" />
                <span>Tata Bahasa (Bunpou)</span>
              </h3>
              <BunpouView bunpouList={currentChapter.bunpou} />
            </div>

            {/* Kotoba Table */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-red-700" />
                <span>Kosakata (Kotoba) · 25 Kata</span>
              </h3>
              <KotobaTable kotobaList={currentChapter.kotoba} />
            </div>

            {/* Kaiwa View */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-red-700" />
                <span>Percakapan Sehari-hari (Kaiwa)</span>
              </h3>
              <KaiwaView kaiwa={currentChapter.kaiwa} />
            </div>

            {/* Sakubun View */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <PenTool className="w-5 h-5 text-red-700" />
                <span>Karangan Akhir Bab & Bedah Kalimat (Sakubun)</span>
              </h3>
              <SakubunSectionView
                sakubun={currentChapter.sakubun}
                isFuriganaHidden={isFuriganaHidden}
                onToggleFurigana={() => setIsFuriganaHidden(!isFuriganaHidden)}
              />
            </div>
          </div>
        )}
      </main>

      {/* FOOTER */}
      <footer className="bg-white border-t border-slate-300 py-4 text-center text-xs text-slate-500 no-print">
        みんなの日本語 · Catatan Santai Belajar Bahasa Jepang · Siap Cetak dan Simpan ke PDF
      </footer>

      {/* MODALS */}
      <NotebookCopyModal
        isOpen={isNotebookModalOpen}
        onClose={() => setIsNotebookModalOpen(false)}
        chapter={currentChapter}
      />

      <TableOfContentsModal
        isOpen={isTOCModalOpen}
        onClose={() => setIsTOCModalOpen(false)}
        currentChapter={currentChapterNum}
        onSelectChapter={(num) => {
          setCurrentChapterNum(num);
          setRenderAllChapters(false);
        }}
      />
    </div>
  );
}
