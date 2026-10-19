import React from 'react';
import { Chapter } from '../types/nihongo';
import { allChaptersSummary } from '../data/chaptersSummary';
import { RubyText } from './RubyText';

interface PdfBookDocumentProps {
  chapters: Chapter[];
  includeCover?: boolean;
  includeToc?: boolean;
}

export const PdfBookDocument: React.FC<PdfBookDocumentProps> = ({
  chapters,
  includeCover = true,
  includeToc = true
}) => {
  return (
    <div id="pdf-book-content" className="text-slate-900 bg-transparent">
      {/* =========================================================================
          PAGE 1: COVER (Persis seperti Halaman 1 Screenshot Buku)
      ========================================================================= */}
      {includeCover && (
        <div className="a4-sheet">
          <div className="border-2 border-red-800 rounded-2xl p-8 md:p-12 h-full flex flex-col justify-between">
            <div className="text-center pt-10 md:pt-16">
              <div className="text-sm font-semibold text-slate-500 mb-1">
                にほんご
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-red-700 tracking-tight font-serif mb-3">
                みんなの日本語
              </h1>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2 tracking-tight">
                Catatan Santai Belajar Bahasa Jepang
              </h2>
              <p className="text-xs md:text-sm text-slate-600 max-w-md mx-auto">
                Bab 1–50 · Bunpou + 25 Kotoba per bab · Karangan & Bedah Bunpou · Lengkap dengan furigana
              </p>

              {/* Badges Kode Warna */}
              <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
                <span className="bg-red-700 text-white text-xs font-semibold px-4 py-1.5 rounded-full">
                  Merah = rumus & kanji
                </span>
                <span className="bg-sky-700 text-white text-xs font-semibold px-4 py-1.5 rounded-full">
                  Biru = arti & terjemahan
                </span>
                <span className="bg-slate-900 text-white text-xs font-semibold px-4 py-1.5 rounded-full">
                  Hitam = bacaan & penjelasan
                </span>
              </div>
            </div>

            {/* Kotak Petunjuk Cara Pakai */}
            <div className="border border-dashed border-red-300 bg-red-50/40 rounded-xl p-5 text-xs text-slate-800 space-y-2 my-6">
              <h3 className="font-bold text-red-900 text-sm mb-1.5">
                Cara pakai buku ini:
              </h3>
              <ol className="list-decimal list-inside space-y-1 text-slate-700">
                <li>Baca penjelasan bunpou seperti ngobrol sama teman.</li>
                <li>Salin rumus (merah) dan contoh kalimatnya ke bukumu.</li>
                <li>Tulis kanji kotoba sambil ucapkan bacaannya.</li>
                <li>Tutup buku, tes diri: lihat kanji, tebak bacaan dan artinya.</li>
                <li>Salin karangan akhir bab dan pelajari bedah kanji serta bunpounya.</li>
              </ol>

              <div className="pt-2.5 border-t border-red-200 text-xs text-slate-600">
                <strong className="text-slate-900">Soal furigana:</strong> Huruf hiragana kecil di atas kanji adalah cara bacanya,
                seperti di berita Jepang. Contoh: <ruby className="font-bold text-red-700">学生<rt>がくせい</rt></ruby> dibaca <em>gakusei</em> (pelajar).
              </div>
            </div>

            <div className="text-center text-[11px] text-slate-400 font-mono">
              みんなの日本語 · Catatan Santai · 1
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          PAGE 2: DAFTAR ISI (Persis seperti Halaman 2 Screenshot Buku)
      ========================================================================= */}
      {includeToc && (
        <div className="a4-sheet">
          <div className="flex-1">
            <div className="border-b-2 border-red-700 pb-2 mb-4">
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                Daftar Isi
              </h2>
              <p className="text-xs text-slate-500">
                Katalog Lengkap Bab 1–50 みんなの日本語
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-[11px] sm:text-xs">
              {allChaptersSummary.map((item) => (
                <div
                  key={item.nomor}
                  className="flex items-baseline justify-between py-0.5 border-b border-slate-100"
                >
                  <div className="flex items-baseline gap-2">
                    <span className="font-bold text-red-700 w-11 shrink-0">
                      Bab {item.nomor}
                    </span>
                    <span className="font-medium text-slate-900">
                      <RubyText text={item.judulJepang} furiganaHint={item.judulFurigana} />
                    </span>
                  </div>
                  <span className="text-[11px] text-slate-500 truncate max-w-[110px] text-right">
                    {item.judulArti}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center text-[11px] text-slate-400 font-mono pt-4">
            みんなの日本語 · Catatan Santai · 2
          </div>
        </div>
      )}

      {/* =========================================================================
          CHAPTER SHEETS (Clean, Complete, Zero Clipping)
      ========================================================================= */}
      {chapters.map((ch) => (
        <React.Fragment key={ch.nomor}>
          {/* SHEET 1: BUNPOU (TATA BAHASA) */}
          <div className="a4-sheet">
            <div className="flex-1">
              {/* Header Box Merah khas Minna no Nihongo */}
              <div className="bg-red-700 text-white rounded-xl p-4 mb-4">
                <div className="text-[11px] font-bold tracking-wider uppercase opacity-90">
                  BAB {ch.nomor} · 第{ch.nomor}課
                </div>
                <div className="text-xs font-medium opacity-90">
                  {ch.judulFurigana}
                </div>
                <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
                  {ch.judulJepang}
                </h1>
                <div className="text-xs opacity-95 font-medium mt-0.5">
                  {ch.judulRomaji} · {ch.judulArti}
                </div>
              </div>

              {/* Pengantar Santai */}
              <div className="bg-amber-50/80 border border-amber-200 rounded-lg p-3 text-xs text-slate-800 leading-relaxed mb-4">
                {ch.pengantar}
              </div>

              {/* Bunpou Section */}
              <div className="space-y-3.5">
                <div className="border-b border-red-700 pb-1 mb-2 flex items-center justify-between">
                  <h2 className="text-base font-bold text-slate-900 tracking-tight">
                    Bunpou · Tata Bahasa
                  </h2>
                  <div className="text-[10px] text-slate-500">
                    <span className="text-red-700 font-bold">Merah</span>: rumus | <span className="text-sky-700 font-bold">Biru</span>: arti | Hitam: penjelasan
                  </div>
                </div>

                {ch.bunpou.map((b) => (
                  <div key={b.nomor} className="border border-slate-200 rounded-lg p-3 bg-slate-50/30">
                    <div className="flex items-start gap-2 mb-1">
                      <span className="w-5 h-5 rounded-full bg-red-700 text-white text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                        {b.nomor}
                      </span>
                      <div>
                        <h3 className="text-sm md:text-base font-bold text-red-700 leading-snug">
                          {b.rumus}
                        </h3>
                        <p className="text-xs font-semibold text-sky-700">
                          {b.arti}
                        </p>
                      </div>
                    </div>

                    <p className="text-xs text-slate-700 leading-relaxed mb-2 pl-7">
                      {b.penjelasan}
                    </p>

                    <div className="bg-white border border-slate-100 rounded-md p-2.5 ml-7 space-y-1">
                      {b.contoh.map((ex, exIdx) => (
                        <div key={exIdx} className="flex justify-between items-baseline gap-2 text-xs">
                          <span className="font-medium text-slate-900">
                            <RubyText text={ex.jepang} />
                          </span>
                          <span className="text-sky-800 text-[11px] font-medium text-right shrink-0">
                            {ex.arti}
                          </span>
                        </div>
                      ))}
                    </div>

                    {b.tips && (
                      <div className="mt-2 ml-7 bg-amber-50 border border-amber-200 rounded-md p-2 text-[11px] text-amber-900">
                        <span className="font-bold text-amber-800">Tips: </span>{b.tips}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center text-[11px] text-slate-400 font-mono pt-3">
              みんなの日本語 · Catatan Santai · {ch.nomor * 4 - 1}
            </div>
          </div>

          {/* SHEET 2: KOTOBA (25 KOSAKATA TERPILIH) */}
          <div className="a4-sheet">
            <div className="flex-1">
              <div className="border-b border-red-700 pb-1.5 mb-3 flex items-center justify-between">
                <div>
                  <h2 className="text-base font-bold text-slate-900 tracking-tight">
                    Kotoba · Kosakata ({ch.kotoba.length} kata)
                  </h2>
                  <p className="text-[11px] text-slate-500">
                    Bab {ch.nomor} · Lengkap dengan furigana di atas kanji & contoh kalimat
                  </p>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border border-slate-200 min-w-[500px]">
                <thead>
                  <tr className="bg-red-700 text-white font-semibold text-[11px]">
                    <th className="py-1.5 px-2 w-7 text-center border border-red-800">No</th>
                    <th className="py-1.5 px-2.5 w-28 border border-red-800">Kotoba</th>
                    <th className="py-1.5 px-2 w-20 border border-red-800">Baca</th>
                    <th className="py-1.5 px-2.5 w-28 border border-red-800">Arti</th>
                    <th className="py-1.5 px-2.5 border border-red-800">Contoh Kalimat</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {ch.kotoba.map((k) => (
                    <tr key={k.no} className="hover:bg-slate-50">
                      <td className="py-1 px-1.5 text-center text-slate-400 font-mono text-[11px] border-r border-slate-200">
                        {k.no}
                      </td>
                      <td className="py-1 px-2.5 font-semibold text-red-700 text-sm border-r border-slate-200">
                        <RubyText text={k.kanji} furiganaHint={k.furigana} />
                      </td>
                      <td className="py-1 px-2 font-mono text-slate-500 text-[11px] border-r border-slate-200">
                        {k.romaji}
                      </td>
                      <td className="py-1 px-2.5 font-semibold text-sky-800 text-[11px] border-r border-slate-200">
                        {k.arti}
                      </td>
                      <td className="py-1 px-2.5">
                        <div className="font-medium text-slate-900 text-xs leading-normal">
                          <RubyText text={k.contohJepang} />
                        </div>
                        <div className="text-[10px] text-slate-500">
                          {k.contohArti}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              </div>

              {ch.tipsHafalan && (
                <div className="mt-3 bg-sky-50 border border-sky-200 rounded-lg p-2.5 text-xs text-sky-950">
                  <span className="font-bold text-sky-900">Tips Menghafal: </span>{ch.tipsHafalan}
                </div>
              )}
            </div>

            <div className="text-center text-[11px] text-slate-400 font-mono pt-3">
              みんなの日本語 · Catatan Santai · {ch.nomor * 4}
            </div>
          </div>

          {/* SHEET 3: KAIWA & SAKUBUN (KARANGAN AKHIR BAB) */}
          <div className="a4-sheet">
            <div className="flex-1 space-y-4">
              {/* Percakapan Sehari-hari (Kaiwa) */}
              <div>
                <div className="border-b border-red-700 pb-1 mb-2">
                  <h2 className="text-sm font-bold text-slate-900 tracking-tight">
                    会話 · Percakapan Sehari-hari: {ch.kaiwa.judul}
                  </h2>
                  <p className="text-[11px] text-slate-500">
                    Situasi: {ch.kaiwa.situasi}
                  </p>
                </div>

                <div className="space-y-1.5 bg-slate-50 border border-slate-200 rounded-lg p-3 text-xs">
                  {ch.kaiwa.percakapan.map((line, lIdx) => (
                    <div key={lIdx} className="border-b border-slate-100 last:border-none pb-1 last:pb-0">
                      <div className="flex items-baseline gap-1.5">
                        <span className="font-bold text-red-700 shrink-0">{line.pembicara}:</span>
                        <span className="font-medium text-slate-900 text-xs">
                          <RubyText text={line.jepang} />
                        </span>
                      </div>
                      <div className="text-[11px] text-sky-800 pl-3">
                        {line.arti}
                      </div>
                    </div>
                  ))}
                </div>

                {ch.kaiwa.catatanBudaya && (
                  <div className="mt-2 bg-amber-50 border border-amber-200 rounded-md p-2 text-[11px] text-amber-900">
                    <span className="font-bold text-amber-800">Catatan Budaya: </span>
                    {ch.kaiwa.catatanBudaya}
                  </div>
                )}
              </div>

              {/* 作文 (Karangan Akhir Bab) */}
              <div>
                <div className="border-b-2 border-red-700 pb-1 mb-2">
                  <h2 className="text-base font-bold text-red-700 tracking-tight">
                    作文 · Karangan Akhir Bab {ch.nomor}: {ch.sakubun.judul}
                  </h2>
                  <p className="text-[11px] text-slate-500">
                    {ch.sakubun.judulArti}
                  </p>
                </div>

                {/* Teks Karangan dengan Furigana Tepat */}
                <div className="bg-red-50/20 border-2 border-red-800/30 rounded-xl p-4 text-xs md:text-sm text-slate-900 leading-loose text-justify font-medium">
                  <RubyText text={ch.sakubun.teksLengkapJepang} />
                </div>

                {/* Terjemahan Indonesia */}
                <div className="mt-2.5 bg-sky-50 border border-sky-100 rounded-lg p-3 text-xs text-sky-950 leading-relaxed">
                  <strong className="text-sky-900 block mb-0.5">Terjemahan Lengkap Bahasa Indonesia:</strong>
                  {ch.sakubun.fullArti}
                </div>
              </div>
            </div>

            <div className="text-center text-[11px] text-slate-400 font-mono pt-3">
              みんなの日本語 · Catatan Santai · {ch.nomor * 4 + 1}
            </div>
          </div>

          {/* SHEET 4: BEDAH BUNPOU & KANJI SAKUBUN + LEMBAR KERJA SALIN */}
          <div className="a4-sheet">
            <div className="flex-1 space-y-4">
              {/* Bedah Kalimat Karangan */}
              <div>
                <div className="border-b border-red-700 pb-1 mb-2.5">
                  <h2 className="text-sm font-bold text-slate-900 tracking-tight">
                    Bedah Bunpou & Kanji Kalimat Karangan (Analisis Rinci)
                  </h2>
                  <p className="text-[11px] text-slate-500">
                    Penjelasan detail kanji & tata bahasa (bahkan pola tingkat lanjut dijelaskan mudah untuk pemula).
                  </p>
                </div>

                <div className="space-y-2 text-xs">
                  {ch.sakubun.kalimatBedah.map((s) => (
                    <div key={s.kalimatNo} className="border border-slate-200 rounded-lg p-2.5 bg-white">
                      <div className="flex items-baseline gap-2 mb-1">
                        <span className="font-bold text-white bg-red-700 px-1.5 py-0.2 rounded text-[10px]">
                          #{s.kalimatNo}
                        </span>
                        <span className="font-bold text-slate-900 text-xs">
                          <RubyText text={s.kalimatJepang} />
                        </span>
                      </div>
                      <div className="text-sky-800 font-semibold mb-1.5 pl-2 text-[11px]">
                        Arti: {s.terjemahan}
                      </div>

                      {/* Kanji breakdown */}
                      {s.kanjiList.length > 0 && (
                        <div className="bg-slate-50 p-2 rounded mb-1.5">
                          <span className="font-bold text-slate-700 block text-[10px] mb-0.5">
                            Fokus Kanji & Cara Ingat:
                          </span>
                          <div className="grid grid-cols-2 gap-1 text-[10px]">
                            {s.kanjiList.map((k, kIdx) => (
                              <div key={kIdx} className="text-slate-700">
                                <span className="font-bold text-red-700">{k.kanji}</span> [{k.caraBaca}] = <span className="text-sky-800">{k.arti}</span>
                                {k.tipsIngat && <span className="text-slate-500 block text-[9px]">💡 {k.tipsIngat}</span>}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Bunpou breakdown */}
                      {s.bunpouBedah.length > 0 && (
                        <div className="bg-sky-50/50 p-2 rounded space-y-0.5 text-[10px]">
                          <span className="font-bold text-sky-900 block text-[10px]">
                            Tata Bahasa yang Dipakai:
                          </span>
                          {s.bunpouBedah.map((b, bIdx) => (
                            <div key={bIdx} className="leading-normal">
                              <span className="font-bold text-red-700 font-mono">{b.pola}</span>{' '}
                              <span className="text-slate-600 font-medium">({b.namaPola}): </span>
                              <span className="text-slate-800">{b.penjelasan}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Lembar Kerja Menulis (Genkouyoushi Grid) */}
              <div>
                <div className="border-b border-red-700 pb-1 mb-2">
                  <h3 className="text-xs font-bold text-slate-900 tracking-tight">
                    Lembar Latihan Menulis Kanji (Kotak Berpetak untuk Disalin ke Buku Catatan)
                  </h3>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {ch.worksheet.kanjiList.map((k, kIdx) => (
                    <div key={kIdx} className="border border-slate-200 rounded-md p-1.5 text-center bg-slate-50/50">
                      <div className="text-[11px] font-bold text-sky-800 truncate">{k.arti}</div>
                      <div className="flex items-center justify-center gap-1 my-1">
                        <div className="kanji-grid-cell w-8 h-8">
                          <span className="text-base">{k.kanji}</span>
                        </div>
                        <div className="kanji-grid-cell guide-cell w-8 h-8">
                          <span className="text-base">{k.kanji}</span>
                        </div>
                        <div className="kanji-grid-cell w-8 h-8" />
                      </div>
                      <div className="text-[9px] text-slate-500 font-mono truncate">
                        {k.onyomi} / {k.kunyomi}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="text-center text-[11px] text-slate-400 font-mono pt-3">
              みんなの日本語 · Catatan Santai · {ch.nomor * 4 + 2}
            </div>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};
