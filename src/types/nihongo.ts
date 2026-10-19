export interface KotobaItem {
  no: number;
  kanji: string;
  furigana: string;
  romaji: string;
  arti: string;
  contohJepang: string;
  contohArti: string;
  notes?: string;
}

export interface BunpouContoh {
  jepang: string;
  arti: string;
  rubyAnnotated?: Array<{ kanji: string; furi: string } | string>;
}

export interface BunpouItem {
  nomor: number;
  rumus: string;
  arti: string;
  penjelasan: string;
  contoh: BunpouContoh[];
  tips?: string;
}

export interface KaiwaLine {
  pembicara: string;
  role: string;
  jepang: string;
  romaji: string;
  arti: string;
  audioText?: string;
}

export interface KaiwaItem {
  judul: string;
  situasi: string;
  percakapan: KaiwaLine[];
  catatanBudaya: string;
}

export interface KanjiDetail {
  kanji: string;
  caraBaca: string;
  arti: string;
  tipsIngat?: string;
}

export interface BunpouBedahDetail {
  pola: string;
  namaPola: string;
  penjelasan: string;
  levelCatatan?: string;
}

export interface SakubunSentenceBreakdown {
  kalimatNo: number;
  kalimatJepang: string;
  romaji: string;
  terjemahan: string;
  kanjiList: KanjiDetail[];
  bunpouBedah: BunpouBedahDetail[];
}

export interface SakubunSection {
  judul: string;
  judulRomaji: string;
  judulArti: string;
  teksLengkapJepang: string;
  fullArti: string;
  kalimatBedah: SakubunSentenceBreakdown[];
  tipsMembaca: string;
  panduanMenulis?: string;
  tugasSalinCatatan?: string;
}

export interface KanjiWorksheetItem {
  kanji: string;
  onyomi: string;
  kunyomi: string;
  arti: string;
  jumlahGuratan: number;
  kotobaContoh: string;
  kotobaArti: string;
}

export interface LatihanSalinKalimat {
  no: number;
  jepang: string;
  romaji: string;
  arti: string;
  instruksi: string;
}

export interface SoalHarian {
  id: string;
  pertanyaan: string;
  tipe: 'pilihan' | 'isian';
  pilihan?: string[];
  jawabanBenar: string;
  pembahasan: string;
}

export interface WorksheetSection {
  instruksiBuku: string;
  kanjiList: KanjiWorksheetItem[];
  latihanSalinKalimat: LatihanSalinKalimat[];
  soalHarian: SoalHarian[];
}

export interface Chapter {
  nomor: number;
  judulJepang: string;
  judulFurigana: string;
  judulRomaji: string;
  judulArti: string;
  pengantar: string;
  tipsHafalan: string;
  bunpou: BunpouItem[];
  kotoba: KotobaItem[];
  kaiwa: KaiwaItem;
  sakubun: SakubunSection;
  worksheet: WorksheetSection;
}

export interface ChapterSummary {
  nomor: number;
  judulJepang: string;
  judulFurigana: string;
  judulRomaji?: string;
  judulArti: string;
  temaUtama: string;
  level: 'N5' | 'N4';
}
