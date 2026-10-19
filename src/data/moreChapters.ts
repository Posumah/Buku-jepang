import { Chapter } from '../types/nihongo';
import { chaptersData } from './chaptersData';
import { allChaptersSummary } from './chaptersSummary';

export const extendedChapters: Record<number, Chapter> = {
  ...chaptersData,
  6: {
    nomor: 6,
    judulJepang: '何をしますか',
    judulFurigana: 'なにをしますか',
    judulRomaji: 'Nani o shimasu ka',
    judulArti: 'Objek & Aktivitas Harian',
    pengantar: 'Sekarang kita belajar menceritakan apa yang kamu lakukan: makan, minum, baca, nonton, serta cara mengajak teman dengan sopan. Dua partikel penting: を (objek) dan で (tempat aksi).',
    tipsHafalan: 'Kata kerja di bab ini hampir semuanya berakhiran 〜ます. Hafal pasangan kata benda + kata kerja: ご飯を食べます (makan nasi), 水を飲みます (minum air), 本を読みます (baca buku). Kalimat langsung nempel!',
    bunpou: [
      {
        nomor: 1,
        rumus: '[Benda] を [Kata Kerja]',
        arti: '= Melakukan [Kata Kerja] pada [Benda]',
        penjelasan: 'Partikel を ditulis huruf "wo" tapi SELALU dibaca "o". Fungsinya menandai objek langsung yang terkena aksi atau perbuatan.',
        contoh: [
          { jepang: 'ご飯を食べます。', arti: 'Makan nasi.' },
          { jepang: '水を飲みます。', arti: 'Minum air.' },
          { jepang: '新聞を読みます。', arti: 'Membaca koran.' }
        ],
        tips: 'Tanya objek aksi: "何を食べますか" (Nani o tabemasu ka = Mau makan apa?).'
      },
      {
        nomor: 2,
        rumus: '[Tempat] で [Kata Kerja]',
        arti: '= Melakukan aksi di [Tempat]',
        penjelasan: 'Partikel で di sini menunjukkan tempat di mana aksi aktif dilakukan. Bedakan dengan に (tempat keberadaan statis: あります/います) dan へ (arah tujuan).',
        contoh: [
          { jepang: '図書館で本を読みます。', arti: 'Membaca buku di perpustakaan.' },
          { jepang: '家で音楽を聞きます。', arti: 'Mendengarkan musik di rumah.' }
        ],
        tips: 'Kunci cepat: kalau aksinya "dikerjakan" di tempat itu (ada pergerakan aktif), gunakan で.'
      },
      {
        nomor: 3,
        rumus: '〜ませんか / 〜ましょう',
        arti: '= Maukah ...? / Mari kita ...',
        penjelasan: '〜ませんか adalah ajakan sopan yang memberi ruang lawan bicara untuk menolak secara santun. 〜ましょう adalah ajakan langsung ("Ayo kita...!") atau jawaban menyetujui ajakan.',
        contoh: [
          { jepang: '一緒に行きませんか。', arti: 'Maukah pergi bersama?' },
          { jepang: 'はい、行きましょう。', arti: 'Ya, mari kita pergi!' }
        ],
        tips: 'Cara menolak halus: "すみません、ちょっと… (Sumimasen, chotto... = Maaf, agak sedikit sulit...)".'
      }
    ],
    kotoba: [
      { no: 1, kanji: '食べます', furigana: 'たべます', romaji: 'tabemasu', arti: 'makan', contohJepang: '朝ご飯を食べます。', contohArti: 'Sarapan pagi.' },
      { no: 2, kanji: '飲みます', furigana: 'のみます', romaji: 'nomimasu', arti: 'minum', contohJepang: 'お茶を飲みます。', contohArti: 'Minum teh hijau.' },
      { no: 3, kanji: '吸います', furigana: 'すいます', romaji: 'suimasu', arti: 'menghisap (rokok)', contohJepang: 'たばこを吸いません。', contohArti: 'Tidak merokok.' },
      { no: 4, kanji: '見ます', furigana: 'みます', romaji: 'mimasu', arti: 'melihat / menonton', contohJepang: 'テレビを見ます。', contohArti: 'Menonton TV.' },
      { no: 5, kanji: '聞きます', furigana: 'ききます', romaji: 'kikimasu', arti: 'mendengar', contohJepang: '音楽を聞きます。', contohArti: 'Mendengarkan musik.' },
      { no: 6, kanji: '読みます', furigana: 'よみます', romaji: 'yomimasu', arti: 'membaca', contohJepang: '本を読みます。', contohArti: 'Membaca buku.' },
      { no: 7, kanji: '書きます', furigana: 'かきます', romaji: 'kakimasu', arti: 'menulis', contohJepang: '手紙を書きます。', contohArti: 'Menulis surat.' },
      { no: 8, kanji: '買います', furigana: 'かいます', romaji: 'kaimasu', arti: 'membeli', contohJepang: 'パンを買います。', contohArti: 'Membeli roti.' },
      { no: 9, kanji: '撮ります', furigana: 'とります', romaji: 'torimasu', arti: 'memotret / memfoto', contohJepang: '写真を撮ります。', contohArti: 'Mengambil foto.' },
      { no: 10, kanji: 'します', furigana: 'します', romaji: 'shimasu', arti: 'melakukan / mengerjakan', contohJepang: '何をしますか。', contohArti: 'Mau melakukan apa?' },
      { no: 11, kanji: '会います', furigana: 'あいます', romaji: 'aimasu', arti: 'bertemu (teman)', contohJepang: '駅で友達に会います。', contohArti: 'Bertemu teman di stasiun.' },
      { no: 12, kanji: 'ご飯', furigana: 'ごはん', romaji: 'gohan', arti: 'nasi / makanan', contohJepang: 'ご飯を食べます。', contohArti: 'Makan nasi.' },
      { no: 13, kanji: '朝ご飯', furigana: 'あさごはん', romaji: 'asagohan', arti: 'sarapan', contohJepang: '朝ご飯はパンです。', contohArti: 'Sarapannya roti.' },
      { no: 14, kanji: '昼ご飯', furigana: 'ひるごはん', romaji: 'hirugohan', arti: 'makan siang', contohJepang: '昼ご飯を食べましょう。', contohArti: 'Ayo makan siang.' },
      { no: 15, kanji: '晩ご飯', furigana: 'ばんごはん', romaji: 'bangohan', arti: 'makan malam', contohJepang: '家で晩ご飯を食べます。', contohArti: 'Makan malam di rumah.' },
      { no: 16, kanji: 'パン', furigana: 'ぱん', romaji: 'pan', arti: 'roti', contohJepang: 'パンと卵を買います。', contohArti: 'Membeli roti dan telur.' },
      { no: 17, kanji: '卵', furigana: 'たまご', romaji: 'tamago', arti: 'telur', contohJepang: '卵を食べます。', contohArti: 'Makan telur.' },
      { no: 18, kanji: '肉', furigana: 'にく', romaji: 'niku', arti: 'daging', contohJepang: '肉を買います。', contohArti: 'Membeli daging.' },
      { no: 19, kanji: '魚', furigana: 'さかな', romaji: 'sakana', arti: 'ikan', contohJepang: '日本の魚は美味しいです。', contohArti: 'Ikan Jepang enak.' },
      { no: 20, kanji: '野菜', furigana: 'やさい', romaji: 'yasai', arti: 'sayuran', contohJepang: '野菜を食べます。', contohArti: 'Makan sayuran.' },
      { no: 21, kanji: '果物', furigana: 'くだもの', romaji: 'kudamono', arti: 'buah-buahan', contohJepang: '果物が好きです。', contohArti: 'Suka buah-buahan.' },
      { no: 22, kanji: '水', furigana: 'みず', romaji: 'mizu', arti: 'air putih', contohJepang: '水を飲みます。', contohArti: 'Minum air.' },
      { no: 23, kanji: 'お茶', furigana: 'おちゃ', romaji: 'ocha', arti: 'teh hijau', contohJepang: 'お茶を飲みます。', contohArti: 'Minum teh.' },
      { no: 24, kanji: '紅茶', furigana: 'こうちゃ', romaji: 'koucha', arti: 'teh hitam', contohJepang: '紅茶を入れます。', contohArti: 'Membuat teh hitam.' },
      { no: 25, kanji: '牛乳', furigana: 'ぎゅうにゅう', romaji: 'gyuunyuu', arti: 'susu sapi (ミルク)', contohJepang: '牛乳を飲みます。', contohArti: 'Minum susu sapi.' }
    ],
    kaiwa: {
      judul: '一緒にお昼ご飯を食べませんか (Maukah Makan Siang Bersama?)',
      situasi: 'Miller mengajak temannya di kantor untuk pergi ke kedai ramen terdekat saat jam istirahat siang.',
      percakapan: [
        { pembicara: 'ミラー (Miller)', role: 'Karyawan', jepang: '佐藤さん、もう十二時半ですよ。一緒に昼ご飯を食べに行きませんか。', romaji: 'Satou-san, mou juuniji-han desu yo. Issho ni hirugohan o tabe ni ikimasen ka.', arti: 'Mbak Satou, sudah jam 12.30 lho. Maukah pergi makan siang bersama?' },
        { pembicara: '佐藤 (Satou)', role: 'Kolega', jepang: 'ええ、いいですね。何を食べましょうか。', romaji: 'Ee, ii desu ne. Nani o tabemashou ka.', arti: 'Wah, boleh juga! Mau makan apa kita?' },
        { pembicara: 'ミラー (Miller)', role: 'Karyawan', jepang: '駅の前の新しいラーメン屋でラーメンを食べましょう！', romaji: 'Eki no mae no atarashii raamen-ya de raamen o tabemashou!', arti: 'Mari kita makan ramen di kedai ramen baru di depan stasiun!' },
        { pembicara: '佐藤 (Satou)', role: 'Kolega', jepang: 'じゃ、行きましょう。あそこのラーメンはとても美味しいですよ。', romaji: 'Ja, ikimashou. Asoko no raamen wa totemo oishii desu yo.', arti: 'Baiklah, ayo jalan. Ramen di sana enak sekali lho.' }
      ],
      catatanBudaya: 'Orang Jepang saat diajak makan biasanya menjawab "ええ、いいですね" (Ee, ii desu ne) sebagai penanda setuju dengan hangat.'
    },
    sakubun: {
      judul: '私の休日の過ごし方 (Cara Saya Menghabiskan Hari Libur)',
      judulRomaji: 'Watashi no Kyuujitsu no Sugoshikata',
      judulArti: 'Karangan Aktivitas Hari Libur: Membaca, Makan, dan Bertemu Teman',
      teksLengkapJepang: '日曜日は私の休みの日です。朝は少し遅く、八時頃に起きます。パンと目玉焼きを食べて、温かいコーヒーを飲みます。午前中は部屋で好きな本を読んだり、日本の音楽を聞いたりします。お昼は近くのスーパーで新鮮な魚と野菜を買って、自分で料理を作ります。午後は公園へ散歩に行きます。天気がいい時は、ベンチに座って写真を撮ります。夕方、駅のカフェで友達に会っておしゃべりをします。美味しいケーキを食べながら、日本語で話します。とても楽しい休日です。',
      fullArti: 'Hari Minggu adalah hari libur saya. Pagi harinya sedikit santai, saya bangun sekitar jam 8. Saya sarapan roti dan telur mata sapi, lalu minum kopi hangat. Selama pagi hari, di kamar saya membaca buku kesukaan dan mendengarkan musik Jepang. Siang harinya, saya membeli ikan segar dan sayur di supermarket terdekat, lalu memasak sendiri. Sore harinya saya pergi jalan-jalan santai ke taman. Ketika cuaca cerah, saya duduk di bangku taman dan memotret. Saat petang, saya bertemu teman di kafe dekat stasiun dan mengobrol santai. Sambil menikmati kue yang lezat, kami berbincang dalam bahasa Jepang. Itu adalah hari libur yang sangat menyenangkan.',
      panduanMenulis: 'Perhatikan partikel を (objek) pada kalimat 魚と野菜を買います dan partikel で (tempat aksi) pada 公園で・カフェで.',
      tipsMembaca: 'Bedakan partikel を (ditulis wo) dan huruf お (o). Keduanya berbunyi "o", tapi を khusus untuk tata bahasa objek.',
      kalimatBedah: [
        {
          kalimatNo: 1,
          kalimatJepang: 'パンと目玉焼きを食べて、温かいコーヒーを飲みます。',
          romaji: 'Pan to medamayaki o tabete, atatakai koohii o nomimasu.',
          terjemahan: 'Saya makan roti dan telur mata sapi, lalu minum kopi hangat.',
          kanjiList: [
            { kanji: '食', caraBaca: 'た (ta)', arti: 'makan', tipsIngat: 'Manusia (人) di atas mangkuk nasi (良).' },
            { kanji: '飲', caraBaca: 'の (no)', arti: 'minum', tipsIngat: 'Makanan (飠) + menguap/membuka mulut (欠).' }
          ],
          bunpouBedah: [
            { pola: '[Benda] を 食べて、〜飲みます', namaPola: 'Menyambung Kegiatan dengan て形', penjelasan: 'Bentuk て dari 食べます adalah 食べて, berfungsi menyambung dua aksi: makan dulu lalu minum.', levelCatatan: 'Pola Bab 14 & Bab 16' },
            { pola: 'Partikel を (o)', namaPola: 'Partikel Objek Langsung', penjelasan: 'Menandai makanan dan minuman yang dikonsumsi pelaku.', levelCatatan: 'Bab 6 Dasar' }
          ]
        },
        {
          kalimatNo: 2,
          kalimatJepang: '夕方、駅のカフェで友達に会っておしゃべりをします。',
          romaji: 'Yuugata, eki no kafe de tomodachi ni atte oshaberi o shimasu.',
          terjemahan: 'Saat petang, saya bertemu teman di kafe dekat stasiun dan mengobrol.',
          kanjiList: [
            { kanji: '会', caraBaca: 'あ (a)', arti: 'bertemu', tipsIngat: 'Orang-orang berkumpul di bawah satu atap (亼).' }
          ],
          bunpouBedah: [
            { pola: '[Orang] に 会います', namaPola: 'Bertemu Seseorang (Partikel に)', penjelasan: 'Ingat! Kata kerja 会います (bertemu) pasangannya adalah partikel に, BUKAN partikel を.', levelCatatan: 'Aturan Khusus Bab 6' },
            { pola: '[Tempat] で', namaPola: 'Tempat Aksi Berlangsung', penjelasan: 'Kafe adalah tempat berlangsungnya kegiatan bertemu dan mengobrol.', levelCatatan: 'Bab 6 Dasar' }
          ]
        }
      ]
    },
    worksheet: {
      instruksiBuku: 'Salin kanji kata kerja sehari-hari di bawah ini ke bukumu!',
      kanjiList: [
        { kanji: '食', onyomi: 'ショク (shoku)', kunyomi: 'た・く (ta/ku)', arti: 'makan / makanan', jumlahGuratan: 9, kotobaContoh: '食べます (tabemasu), 食堂 (shokudou)', kotobaArti: 'makan, kantin' },
        { kanji: '飲', onyomi: 'イン (in)', kunyomi: 'の (no)', arti: 'minum', jumlahGuratan: 12, kotobaContoh: '飲みます (nomimasu), 飲み物 (nomimono)', kotobaArti: 'minum, minuman' },
        { kanji: '読', onyomi: 'ドク (doku)', kunyomi: 'よ (yo)', arti: 'membaca', jumlahGuratan: 14, kotobaContoh: '読みます (yomimasu), 読書 (dokusho)', kotobaArti: 'membaca, hobi membaca' },
        { kanji: '買', onyomi: 'バイ (bai)', kunyomi: 'か (ka)', arti: 'membeli', jumlahGuratan: 12, kotobaContoh: '買います (kaimasu), 買い物 (kaimono)', kotobaArti: 'membeli, belanja' }
      ],
      latihanSalinKalimat: [
        { no: 1, jepang: '図書館で日本の本を読みます。', romaji: 'Toshokan de nihon no hon o yomimasu.', arti: 'Membaca buku Jepang di perpustakaan.', instruksi: 'Tuliskan partikel で dan を dengan posisi yang tepat.' },
        { no: 2, jepang: '駅で友達に会いました。', romaji: 'Eki de tomodachi ni aimashita.', arti: 'Saya telah bertemu teman di stasiun.', instruksi: 'Perhatikan bahwa orang yang ditemui memakai partikel に.' }
      ],
      soalHarian: [
        {
          id: 'b6-q1',
          pertanyaan: 'Manakah partikel yang tepat: "明日、駅＿＿友達＿＿会います。"',
          tipe: 'pilihan',
          pilihan: ['で / に', 'に / を', 'へ / と', 'で / を'],
          jawabanBenar: 'で / に',
          pembahasan: 'Tempat aksi bertemu memakai で (駅で), dan orang yang ditemui memakai に (友達に会います).'
        }
      ]
    }
  },
  7: {
    nomor: 7,
    judulJepang: '箸で食べます',
    judulFurigana: 'はしでたべます',
    judulRomaji: 'Hashi de tabemasu',
    judulArti: 'Alat & Pemberian (Agemasu / Moraimasu)',
    pengantar: 'Di bab ini kamu belajar mengatakan pakai alat/bahasa apa saat melakukan sesuatu (箸で, 日本語で), serta konsep memberi (あげます) dan menerima (もらいます). Cocok buat ngobrol hadiah dan oleh-oleh!',
    tipsHafalan: 'Banyak benda serapan katakana di bab ini (スプーン, フォーク, ナイフ, パソコン). Fokuskan energimu ke kanji: 箸 (sumpit), 鋏 (gunting), 紙 (kertas), 手紙 (surat), 切符 (tiket)!',
    bunpou: [
      {
        nomor: 1,
        rumus: '[Alat / Bahasa] で [Kata Kerja]',
        arti: '= Melakukan ... dengan [Alat / Bahasa]',
        penjelasan: 'Partikel で juga berfungsi menunjukkan alat bantu atau bahasa perantara yang dipakai. Jadi で punya banyak tugas: sarana kendaraan (Bab 5), tempat aksi (Bab 6), dan alat/bahasa (Bab 7).',
        contoh: [
          { jepang: '箸でご飯を食べます。', arti: 'Makan nasi dengan sumpit.' },
          { jepang: '日本語でレポートを書きます。', arti: 'Menulis laporan dalam bahasa Jepang.' }
        ],
        tips: '"Dalam bahasa Indonesia" = インドネシア語で (Indoneshia-go de).'
      },
      {
        nomor: 2,
        rumus: '[Orang] に [Benda] を あげます / もらいます',
        arti: '= Memberi ke [Orang] / Menerima dari [Orang]',
        penjelasan: 'あげます berarti memberi ke orang lain. もらいます berarti menerima dari orang lain. Partikel に menandai orang lawan interaksi (kepada siapa / dari siapa).',
        contoh: [
          { jepang: '友達にプレゼントをあげます。', arti: 'Memberi hadiah kepada teman.' },
          { jepang: '母に花をもらいました。', arti: 'Saya menerima bunga dari ibu.' }
        ],
        tips: 'Catatan penting: あげます pantang dipakai jika orang lain yang memberikan barang itu ke SAYA. Untuk "orang lain beri ke saya", nanti ada kata khusus くれます di Bab 24!'
      },
      {
        nomor: 3,
        rumus: 'もう 〜 ましたか / いいえ、まだです',
        arti: '= Sudahkah ...? / Belum.',
        penjelasan: 'もう (mou) berarti "sudah". Jika sudah selesai, jawab: はい、もう送りました. Jika belum selesai, JANGAN jawab dengan ませんでした, tapi jawablah: いいえ、まだです (Belum).',
        contoh: [
          { jepang: 'もう荷物を送りましたか。', arti: 'Apakah kamu sudah mengirim paket?' },
          { jepang: 'いいえ、まだです。', arti: 'Belum, masih belum.' }
        ],
        tips: 'Ini pola percakapan standar: "Sudah makan?" → もう食べましたか。 → いいえ、まだです。'
      }
    ],
    kotoba: [
      { no: 1, kanji: '切ります', furigana: 'きります', romaji: 'kirimasu', arti: 'memotong / menggunting', contohJepang: '鋏で紙を切ります。', contohArti: 'Memotong kertas dengan gunting.' },
      { no: 2, kanji: '送ります', furigana: 'おくります', romaji: 'okurimasu', arti: 'mengirim (surat/paket)', contohJepang: '友達に荷物を送ります。', contohArti: 'Mengirim paket ke teman.' },
      { no: 3, kanji: 'あげます', furigana: 'あげます', romaji: 'agemasu', arti: 'memberi', contohJepang: '友達に花をあげます。', contohArti: 'Memberi bunga ke teman.' },
      { no: 4, kanji: 'もらいます', furigana: 'もらいます', romaji: 'moraimasu', arti: 'menerima / mendapat', contohJepang: '先生に本をもらいました。', contohArti: 'Menerima buku dari guru.' },
      { no: 5, kanji: '貸します', furigana: 'かします', romaji: 'kashimasu', arti: 'meminjamkan (ke orang)', contohJepang: '友達に辞書を貸します。', contohArti: 'Meminjamkan kamus ke teman.' },
      { no: 6, kanji: '借ります', furigana: 'かります', romaji: 'karimasu', arti: 'meminjam (dari orang)', contohJepang: '友達に傘を借ります。', contohArti: 'Meminjam payung dari teman.' },
      { no: 7, kanji: '教えます', furigana: 'おしえます', romaji: 'oshiemasu', arti: 'mengajar / memberi tahu', contohJepang: '学生に日本語を教えます。', contohArti: 'Mengajar bahasa Jepang ke murid.' },
      { no: 8, kanji: '習います', furigana: 'ならいます', romaji: 'naraimasu', arti: 'belajar (dari seseorang)', contohJepang: '先生に日本語を習います。', contohArti: 'Belajar bahasa Jepang dari guru.' },
      { no: 9, kanji: '箸', furigana: 'はし', romaji: 'hashi', arti: 'sumpit', contohJepang: '箸で食べます。', contohArti: 'Makan dengan sumpit.' },
      { no: 10, kanji: 'スプーン', furigana: 'すぷーん', romaji: 'supuun', arti: 'sendok', contohJepang: 'スプーンでカレーを食べます。', contohArti: 'Makan kari pakai sendok.' },
      { no: 11, kanji: 'フォーク', furigana: 'ふぉーく', romaji: 'fooku', arti: 'garpu', contohJepang: 'フォークを使います。', contohArti: 'Menggunakan garpu.' },
      { no: 12, kanji: 'ナイフ', furigana: 'ないふ', romaji: 'naifu', arti: 'pisau', contohJepang: 'ナイフで肉を切ります。', contohArti: 'Memotong daging dengan pisau.' },
      { no: 13, kanji: '鋏', furigana: 'はさみ', romaji: 'hasami', arti: 'gunting', contohJepang: 'この鋏は父のです。', contohArti: 'Gunting ini milik ayah.' },
      { no: 14, kanji: 'パソコン', furigana: 'ぱそこん', romaji: 'pasokon', arti: 'komputer PC / laptop', contohJepang: 'パソコンでメールを書きます。', contohArti: 'Menulis email dengan laptop.' },
      { no: 15, kanji: '携帯', furigana: 'けいたい', romaji: 'keitai', arti: 'ponsel / HP', contohJepang: '携帯で写真を撮ります。', contohArti: 'Memotret dengan ponsel.' },
      { no: 16, kanji: '手紙', furigana: 'てがみ', romaji: 'tegami', arti: 'surat', contohJepang: '母に手紙を書きました。', contohArti: 'Menulis surat untuk ibu.' },
      { no: 17, kanji: '荷物', furigana: 'にもつ', romaji: 'nimotsu', arti: 'paket / barang bawaan', contohJepang: '荷物を送ります。', contohArti: 'Mengirim barang/paket.' },
      { no: 18, kanji: '切手', furigana: 'きって', romaji: 'kitte', arti: 'perangko', contohJepang: '切手を買います。', contohArti: 'Membeli perangko.' },
      { no: 19, kanji: '切符', furigana: 'きっぷ', romaji: 'kippu', arti: 'tiket (kereta/bus)', contohJepang: '切符を買いました。', contohArti: 'Sudah membeli tiket.' },
      { no: 20, kanji: 'クリスマス', furigana: 'くりすます', romaji: 'kurisumasu', arti: 'Hari Natal', contohJepang: 'クリスマスにプレゼントをあげます。', contohArti: 'Memberi hadiah saat Natal.' },
      { no: 21, kanji: '父', furigana: 'ちち', romaji: 'chichi', arti: 'ayah (saya sendiri)', contohJepang: '父は会社員です。', contohArti: 'Ayah saya karyawan.' },
      { no: 22, kanji: '母', furigana: 'はは', romaji: 'haha', arti: 'ibu (saya sendiri)', contohJepang: '母に花をあげました。', contohArti: 'Memberi bunga kepada ibu.' },
      { no: 23, kanji: '紙', furigana: 'かみ', romaji: 'kami', arti: 'kertas', contohJepang: '紙に名前を書きます。', contohArti: 'Menulis nama di atas kertas.' },
      { no: 24, kanji: 'プレゼント', furigana: 'ぷれぜんと', romaji: 'purezento', arti: 'hadiah / kado', contohJepang: 'プレゼントをもらいました。', contohArti: 'Menerima hadiah.' },
      { no: 25, kanji: 'メール', furigana: 'めーる', romaji: 'meeru', arti: 'email / surat elektronik', contohJepang: 'メールを送ります。', contohArti: 'Mengirim email.' }
    ],
    kaiwa: {
      judul: 'お誕生日おめでとう！(Selamat Ulang Tahun!)',
      situasi: 'Miller memberikan kado ulang tahun berupa buku bahasa Jepang kepada teman sekelasnya, Maria.',
      percakapan: [
        { pembicara: 'ミラー (Miller)', role: 'Pemberi', jepang: 'マリアさん、お誕生日おめでとうございます！これ、どうぞ。', romaji: 'Maria-san, otanjoubi omedetou gozaimasu! Kore, douzo.', arti: 'Maria-san, selamat ulang tahun! Ini, silakan diterima.' },
        { pembicara: 'マリア (Maria)', role: 'Penerima', jepang: 'わあ、ありがとうございます！開けてもいいですか。', romaji: 'Waa, arigatou gozaimasu! Akete mo ii desu ka.', arti: 'Wah, terima kasih banyak! Bolehkah saya buka?' },
        { pembicara: 'ミラー (Miller)', role: 'Pemberi', jepang: 'ええ、どうぞ。日本の写真集です。', romaji: 'Ee, douzo. Nihon no shashinshuu desu.', arti: 'Iya, silakan. Itu buku kumpulan foto pemandangan Jepang.' },
        { pembicara: 'マリア (Maria)', role: 'Penerima', jepang: 'とても綺麗ですね！大切にします。', romaji: 'Totemo kirei desu ne! Taisetsu ni shimasu.', arti: 'Cantik sekali ya! Akan saya simpan dan jaga baik-baik.' }
      ],
      catatanBudaya: 'Di Jepang, saat menerima hadiah dengan kedua tangan dan mengucapkan terima kasih, lazim menanyakan izin "開けてもいいですか" sebelum merobek bungkus kado di depan pemberi.'
    },
    sakubun: {
      judul: '家族からもらった宝物の手紙 (Surat Berharga Pemberian Keluargaku)',
      judulRomaji: 'Kazoku kara Moratta Takaramono no Tegami',
      judulArti: 'Karangan Mengharukan tentang Surat dan Hadiah dari Orang Tua',
      teksLengkapJepang: '先週の誕生日に、インドネシアの家族から小包が届きました。箱を開けると、母が作った手作りのバティックと、父の手紙が入っていました。父は万年筆で丁寧な字を書いてくれました。手紙には「健康に気をつけて、夢に向かって頑張りなさい」と書いてありました。私はパソコンで家族に感謝のメールを送りました。そして、日本で撮った写真も一緒に送りました。遠く離れていても、家族の温かい愛を感じます。この手紙とバティックは私の一番の宝物です。',
      fullArti: 'Pada hari ulang tahun saya minggu lalu, sebuah paket pos tiba dari keluarga di Indonesia. Ketika saya membuka kotaknya, di dalamnya terdapat kain batik buatan tangan ibu serta surat dari ayah. Ayah menuliskan huruf-huruf yang rapi dengan pena tinta untuk saya. Di dalam surat tertulis, "Jagalah kesehatan baik-baik, dan berjuanglah sekuat tenaga menuju impianmu." Saya segera mengirim email ucapan terima kasih kepada keluarga menggunakan komputer jinjing. Lalu saya juga menyertakan foto-foto yang saya abadikan di Jepang. Meskipun terpisah jauh, saya dapat merasakan kehangatan cinta keluarga. Surat dan kain batik ini adalah harta karun paling berharga bagi saya.',
      panduanMenulis: 'Perhatikan kanji 切 (potong), 手 (tangan), 紙 (kertas), 父 (ayah), 母 (ibu) saat menyalin.',
      tipsMembaca: 'Cermati perbedaan bunyi kanji 手 (te): berdiri sendiri dibaca te, tapi dalam 手紙 dibaca tega, dan dalam 切手 dibaca -tte.',
      kalimatBedah: [
        {
          kalimatNo: 1,
          kalimatJepang: '家族から小包が届きました。箱を開けると、父の手紙が入っていました。',
          romaji: 'Kazoku kara kozutsumi ga todokimashita. Hako o akeru to, chichi no tegami ga haitte imashita.',
          terjemahan: 'Paket tiba dari keluarga. Ketika membuka kotak, surat dari ayah ada di dalamnya.',
          kanjiList: [
            { kanji: '手紙', caraBaca: 'てがみ (tegami)', arti: 'surat', tipsIngat: 'Tangan (手) + kertas (紙).' }
          ],
          bunpouBedah: [
            { pola: '[Orang] から もらいました / 届きました', namaPola: 'Penerimaan dari Sumber / Pihak', penjelasan: 'Partikel から (dari) dapat menggantikan に untuk menegaskan asal datangnya benda.', levelCatatan: 'Bab 7 Dasar' },
            { pola: '開けると', namaPola: 'Pengandaian / Urutan Waktu Pasti (Bab 23)', penjelasan: 'Kata kerja kamus + と bermakna "begitu... dibuka, langsung tampak...".', levelCatatan: 'Pola Bab 23' }
          ]
        }
      ]
    },
    worksheet: {
      instruksiBuku: 'Salinlah kanji berikut sebanyak 5 kali di buku tulismu:',
      kanjiList: [
        { kanji: '手', onyomi: 'シュ (shu)', kunyomi: 'て (te)', arti: 'tangan', jumlahGuratan: 4, kotobaContoh: '手 (te), 手紙 (tegami), 上手 (jouzu)', kotobaArti: 'tangan, surat, pandai' },
        { kanji: '紙', onyomi: 'シ (shi)', kunyomi: 'かみ (kami)', arti: 'kertas', jumlahGuratan: 10, kotobaContoh: '紙 (kami), 手紙 (tegami)', kotobaArti: 'kertas, surat' },
        { kanji: '切', onyomi: 'セツ (setsu)', kunyomi: 'き (ki)', arti: 'potong', jumlahGuratan: 4, kotobaContoh: '切ります (kirimasu), 大切 (taisetsu)', kotobaArti: 'memotong, penting' },
        { kanji: '父', onyomi: 'フ (fu)', kunyomi: 'ちち (chichi)', arti: 'ayah', jumlahGuratan: 4, kotobaContoh: '父 (chichi), お父さん (otousan)', kotobaArti: 'ayah kandung, ayah orang lain' }
      ],
      latihanSalinKalimat: [
        { no: 1, jepang: '箸でご飯を食べます。ナイフで肉を切ります。', romaji: 'Hashi de gohan o tabemasu. Naifu de niku o kirimasu.', arti: 'Makan nasi dengan sumpit. Memotong daging dengan pisau.', instruksi: 'Latih partikel で sebagai alat.' },
        { no: 2, jepang: 'もう手紙を送りましたか。いいえ、まだです。', romaji: 'Mou tegami o okurimashita ka. Iie, mada desu.', arti: 'Apakah sudah mengirim surat? Belum.', instruksi: 'Hafal pola tanya "mou" dan jawab "mada desu".' }
      ],
      soalHarian: [
        {
          id: 'b7-q1',
          pertanyaan: 'Jika teman bertanya "もう昼ご飯を食べましたか", jawaban yang tepat jika belum adalah...',
          tipe: 'pilihan',
          pilihan: ['いいえ、食べませんでした。', 'いいえ、まだです。', 'はい、まだです。', 'いいえ、もうです。'],
          jawabanBenar: 'いいえ、まだです。',
          pembahasan: 'Untuk pertanyaan "sudah belum?" dengan kata もう, bila belum dilakukan wajib dijawab "いいえ、まだです" (bukan tabemasen deshita).'
        }
      ]
    }
  },
  8: {
    nomor: 8,
    judulJepang: 'どんな人ですか',
    judulFurigana: 'どんなひとですか',
    judulRomaji: 'Donna hito desu ka',
    judulArti: 'Kata Sifat (い & な)',
    pengantar: 'Mau mendeskripsikan seseorang, makanan enak, atau kota yang ramai? Di bab ini ada dua kelompok kata sifat: kata sifat い (i-keiyoushi) dan kata sifat な (na-keiyoushi). Aturan perubahan negatifnya berbeda, yuk kita kuasai bersama!',
    tipsHafalan: 'Hafalkan kata sifat dalam pasangan lawan kata berpasangan: 大きい↔小さい (besar-kecil), 新しい↔古い (baru-lama), 高い↔安い (mahal-murah), 暑い↔寒い (panas-dingin), 難しい↔易しい (sulit-mudah)! Sekali hafal langsung dapat dua!',
    bunpou: [
      {
        nomor: 1,
        rumus: 'Kata Sifat な & い (Bentuk Positif & Negatif)',
        arti: '= Perubahan Kata Sifat Present/Masa Kini',
        penjelasan: 'Kata sifat な (静か, 有名, 元気): Positif + です (静かです). Negatif: + じゃありません (静かじゃありません). Kata sifat い (高い, 安い, 新しい): Positif + です (高いです). Negatif: buang huruf い ganti くないです (高くないです). Pengecualian sakti: いい (bagus) bentuk negatifnya menjadi よくないです.',
        contoh: [
          { jepang: 'この町は静かです。', arti: 'Kota ini tenang.' },
          { jepang: 'この町は静かじゃありません。', arti: 'Kota ini tidak tenang.' },
          { jepang: 'この本は高いです。', arti: 'Buku ini mahal.' },
          { jepang: 'この本は高くないです。', arti: 'Buku ini tidak mahal.' }
        ],
        tips: 'Peringatan keras pemula: Jangan pernah bilang "高くないじゃありません" atau "高いじゃありません"!'
      },
      {
        nomor: 2,
        rumus: 'Kata Sifat + Kata Benda (Menerangkan Benda)',
        arti: '= Menerangkan kata benda di depannya',
        penjelasan: 'Jika menerangkan kata benda: Kata sifat い langsung menempel (新しい車 = mobil baru). Sedangkan kata sifat な HARUS memunculkan huruf な di depannya (有名な先生 = guru yang terkenal, 静かな町 = kota yang tenang).',
        contoh: [
          { jepang: 'あの人は有名な先生です。', arti: 'Orang itu adalah guru yang terkenal.' },
          { jepang: 'これは新しい車です。', arti: 'Ini adalah mobil baru.' }
        ],
        tips: 'Ingat baik-baik: 静かな人 (pakai な), tapi 高い山 (tanpa な).'
      },
      {
        nomor: 3,
        rumus: 'とても (sangat) / あまり (tidak begitu)',
        arti: '= Tingkat / Derajat Keterangan',
        penjelasan: 'とても (totemo) untuk kalimat positif: とても面白いです (sangat menarik). あまり (amari) SELALU wajib bergandengan dengan bentuk negatif: あまり高くないです (tidak begitu mahal).',
        contoh: [
          { jepang: 'この本はとても面白いです。', arti: 'Buku ini sangat menarik.' },
          { jepang: 'この町はあまり賑やかじゃありません。', arti: 'Kota ini tidak begitu ramai.' }
        ],
        tips: 'Pantang memakai あまり dengan kalimat positif!'
      }
    ],
    kotoba: [
      { no: 1, kanji: 'ハンサム', furigana: 'はんさむ', romaji: 'hansamu', arti: 'tampan / ganteng', contohJepang: '田中さんはハンサムです。', contohArti: 'Pak Tanaka tampan.' },
      { no: 2, kanji: '綺麗', furigana: 'きれい', romaji: 'kirei', arti: 'cantik / bersih / indah (kata sifat な)', contohJepang: 'この部屋は綺麗です。', contohArti: 'Kamar ini bersih.' },
      { no: 3, kanji: '静か', furigana: 'しずか', romaji: 'shizuka', arti: 'tenang / sunyi (kata sifat な)', contohJepang: '図書館は静かです。', contohArti: 'Perpustakaan itu tenang.' },
      { no: 4, kanji: '賑やか', furigana: 'にぎやか', romaji: 'nigiyaka', arti: 'ramai (kata sifat な)', contohJepang: 'この町は賑やかです。', contohArti: 'Kota ini ramai.' },
      { no: 5, kanji: '有名', furigana: 'ゆうめい', romaji: 'yuumei', arti: 'terkenal (kata sifat な)', contohJepang: '富士山は有名です。', contohArti: 'Gunung Fuji terkenal.' },
      { no: 6, kanji: '親切', furigana: 'しんせつ', romaji: 'shinsetsu', arti: 'ramah / baik hati (kata sifat な)', contohJepang: '先生は親切です。', contohArti: 'Gurunya ramah.' },
      { no: 7, kanji: '元気', furigana: 'げんき', romaji: 'genki', arti: 'sehat / ceria (kata sifat な)', contohJepang: '家族はみんな元気です。', contohArti: 'Keluarga semuanya sehat.' },
      { no: 8, kanji: '暇', furigana: 'ひま', romaji: 'hima', arti: 'waktu luang / senggang (kata sifat な)', contohJepang: '明日は暇です。', contohArti: 'Besok saya luang.' },
      { no: 9, kanji: '便利', furigana: 'べんり', romaji: 'benri', arti: 'praktis / nyaman (kata sifat な)', contohJepang: 'この携帯は便利です。', contohArti: 'Ponsel ini praktis.' },
      { no: 10, kanji: '大きい', furigana: 'おおきい', romaji: 'ookii', arti: 'besar (kata sifat い)', contohJepang: 'この家は大きいです。', contohArti: 'Rumah ini besar.' },
      { no: 11, kanji: '小さい', furigana: 'ちいさい', romaji: 'chiisai', arti: 'kecil (kata sifat い)', contohJepang: 'この車は小さいです。', contohArti: 'Mobil ini kecil.' },
      { no: 12, kanji: '新しい', furigana: 'あたらしい', romaji: 'atarashii', arti: 'baru (kata sifat い)', contohJepang: '新しい靴を買いました。', contohArti: 'Membeli sepatu baru.' },
      { no: 13, kanji: '古い', furigana: 'ふるい', romaji: 'furui', arti: 'lama / kuno (kata sifat い)', contohJepang: '古いお寺です。', contohArti: 'Kuil yang sudah kuno.' },
      { no: 14, kanji: '良い', furigana: 'いい / よい', romaji: 'ii / yoi', arti: 'bagus / baik (kata sifat い)', contohJepang: '天気が良いです。', contohArti: 'Cuacanya bagus.' },
      { no: 15, kanji: '悪い', furigana: 'わるい', romaji: 'warui', arti: 'buruk / jelek (kata sifat い)', contohJepang: '気分が悪いです。', contohArti: 'Merasa tidak enak badan.' },
      { no: 16, kanji: '暑い', furigana: 'あつい', romaji: 'atsui', arti: 'panas (cuaca/hawa)', contohJepang: '今日は暑いです。', contohArti: 'Hari ini panas.' },
      { no: 17, kanji: '寒い', furigana: 'さむい', romaji: 'samui', arti: 'dingin (cuaca/hawa)', contohJepang: '冬は寒いです。', contohArti: 'Musim dingin itu dingin.' },
      { no: 18, kanji: '冷たい', furigana: 'つめたい', romaji: 'tsumetai', arti: 'dingin (benda/minuman saat disentuh)', contohJepang: '冷たい水を飲みます。', contohArti: 'Minum air dingin.' },
      { no: 19, kanji: '難しい', furigana: 'むずかしい', romaji: 'muzukashii', arti: 'sulit / sukar', contohJepang: '漢字は難しいです。', contohArti: 'Kanji itu sulit.' },
      { no: 20, kanji: '易しい', furigana: 'やさしい', romaji: 'yasashii', arti: 'mudah / gampang', contohJepang: 'この本は易しいです。', contohArti: 'Buku ini mudah.' },
      { no: 21, kanji: '高い', furigana: 'たかい', romaji: 'takai', arti: 'tinggi / mahal', contohJepang: '富士山は高いです。', contohArti: 'Gunung Fuji tinggi.' },
      { no: 22, kanji: '安い', furigana: 'やすい', romaji: 'yasui', arti: 'murah', contohJepang: 'このペンは安いです。', contohArti: 'Pulpen ini murah.' },
      { no: 23, kanji: '低い', furigana: 'ひくい', romaji: 'hikui', arti: 'rendah', contohJepang: 'この机は低いです。', contohArti: 'Meja ini rendah.' },
      { no: 24, kanji: '面白い', furigana: 'おもしろい', romaji: 'omoshiroi', arti: 'menarik / menyenangkan / lucu', contohJepang: 'この映画は面白いです。', contohArti: 'Film ini menarik.' },
      { no: 25, kanji: '美味しい', furigana: 'おいしい', romaji: 'oishii', arti: 'lezat / enak', contohJepang: '日本食は美味しいです。', contohArti: 'Makanan Jepang lezat.' }
    ],
    kaiwa: {
      judul: '私の故郷と日本の生活 (Kampung Halamanku & Hidup di Jepang)',
      situasi: 'Miller dan rekannya saling bertukar cerita tentang suasana kota kelahiran dan tempat tinggal baru mereka di Tokyo.',
      percakapan: [
        { pembicara: '佐藤 (Satou)', role: 'Kolega', jepang: 'ミラーさん、日本の生活はどうですか。', romaji: 'Miraa-san, Nihon no seikatsu wa dou desu ka.', arti: 'Tuan Miller, bagaimana kehidupan di Jepang?' },
        { pembicara: 'ミラー (Miller)', role: 'Karyawan', jepang: '東京はとても便利ですが、少し賑やかすぎますね。私の部屋は静かです。', romaji: 'Toukyou wa totemo benri desu ga, sukoshi nigiyaka sugimasu ne. Watashi no heya wa shizuka desu.', arti: 'Tokyo sangat praktis, tapi agak terlalu ramai ya. Kamar saya sendiri tenang.' },
        { pembicara: '佐藤 (Satou)', role: 'Kolega', jepang: 'ミラーさんの故郷のニューヨークはどんな所ですか。', romaji: 'Miraa-san no furusato no Nyuuyooku wa donna tokoro desu ka.', arti: 'Kota New York asal Tuan Miller itu tempat yang seperti apa?' },
        { pembicara: 'ミラー (Miller)', role: 'Karyawan', jepang: 'とても大きくて活気がある町です。古い建物も新しいビルもたくさんありますよ。', romaji: 'Totemo ookikute kakki ga aru machi desu. Furui tatemono mo atarashii biru mo takusan arimasu yo.', arti: 'Kota yang sangat besar dan penuh semangat. Bangunan kuno maupun gedung pencakar langit baru ada banyak lho.' }
      ],
      catatanBudaya: 'Ketika orang Jepang bertanya "〜はどうですか" (Bagaimana rasanya/kesannya?), sopan untuk menyebutkan sisi positifnya terlebih dahulu sebelum menyebut tantangannya.'
    },
    sakubun: {
      judul: '私の大好きな町と親切な人々 (Kotaku Tercinta dan Orang-orang yang Ramah)',
      judulRomaji: 'Watashi no Daisuki na Machi to Shinsetsu na Hitobito',
      judulArti: 'Karangan Deskripsi Lingkungan Tempat Tinggal dengan Kata Sifat',
      teksLengkapJepang: '私が今住んでいる町は、東京の近くにある小さな町です。緑が多くて、空気もとてもきれいです。大都市のようにあまり賑やかじゃありませんが、とても静かで住みやすい所です。近所の人たちはみんな親切で、道で会うといつも笑顔で挨拶してくれます。駅の前には大きくて便利なスーパーや、美味しいパン屋があります。物価もあまり高くありません。休みの日は古いお寺の庭を散歩します。秋の紅葉は本当に美しくて、心が穏やかになります。私はこの町が大好きです。',
      fullArti: 'Kota tempat saya tinggal sekarang adalah kota kecil yang berada di dekat Tokyo. Banyak pepohonan hijau, dan udaranya juga sangat bersih. Memang tidak begitu ramai seperti kota metropolitan besar, tetapi tempat ini sangat tenang dan nyaman untuk ditinggali. Orang-orang di lingkungan tetangga semuanya sangat ramah, ketika berpapasan di jalan mereka selalu menyapa dengan senyuman hangat. Di depan stasiun terdapat supermarket besar yang praktis dan toko roti yang lezat. Harga barang-barangnya pun tidak begitu mahal. Pada hari libur saya sering berjalan-jalan santai di taman kuil tua. Daun gugur musim gugur (momiji) sungguh elok, membuat hati terasa damai. Saya sangat menyukai kota ini.',
      panduanMenulis: 'Perhatikan perbedaan perubahan negatif kata sifat: 賑やかじゃありません (na-adj) vs 高くありません / 高くないです (i-adj) di buku tulismu.',
      tipsMembaca: 'Bedakan intonasi kata sifat: kata sifat い biasanya ada tekanan lembut di suku kata depan atau sebelum huruf い.',
      kalimatBedah: [
        {
          kalimatNo: 1,
          kalimatJepang: 'あまり賑やかじゃありませんが、とても静かで住みやすい所です。',
          romaji: 'Amari nigiyaka ja arimasen ga, totemo shizuka de sumiyasui tokoro desu.',
          terjemahan: 'Tidak begitu ramai, tetapi tempat yang sangat tenang dan nyaman ditinggali.',
          kanjiList: [
            { kanji: '静', caraBaca: 'しず (shizu)', arti: 'tenang / sunyi', tipsIngat: 'Biru (青) + bertengkar/tenang (争).' },
            { kanji: '所', caraBaca: 'ところ (tokoro)', arti: 'tempat', tipsIngat: 'Pintu (戸) + kapak (斤).' }
          ],
          bunpouBedah: [
            { pola: 'あまり + Kata Sifat Negatif', namaPola: 'Tingkat Tidak Begitu', penjelasan: 'あまり wajib diikuti bentuk negatif (賑やかじゃありません).', levelCatatan: 'Bab 8 Dasar' },
            { pola: 'Kata Sifat な + で', namaPola: 'Menyambung Dua Kata Sifat', penjelasan: 'Bentuk sambung kata sifat な memakai で (静かで、住みやすい).', levelCatatan: 'Pola Bab 16' }
          ]
        }
      ]
    },
    worksheet: {
      instruksiBuku: 'Salinlah kanji kata sifat berpasangan di bawah ini ke bukumu:',
      kanjiList: [
        { kanji: '大', onyomi: 'ダイ・タイ (dai/tai)', kunyomi: 'おお (oo)', arti: 'besar', jumlahGuratan: 3, kotobaContoh: '大きい (ookii), 大学 (daigaku)', kotobaArti: 'besar, universitas' },
        { kanji: '小', onyomi: 'ショウ (shou)', kunyomi: 'ちい・こ (chii/ko)', arti: 'kecil', jumlahGuratan: 3, kotobaContoh: '小さい (chiisai), 小川 (ogawa)', kotobaArti: 'kecil, sungai kecil' },
        { kanji: '高', onyomi: 'コウ (kou)', kunyomi: 'たか (taka)', arti: 'tinggi / mahal', jumlahGuratan: 10, kotobaContoh: '高い (takai), 高校 (koukou)', kotobaArti: 'tinggi/mahal, SMA' },
        { kanji: '安', onyomi: 'アン (an)', kunyomi: 'やす (yasu)', arti: 'murah / damai / tenang', jumlahGuratan: 6, kotobaContoh: '安い (yasui), 安全 (anzen)', kotobaArti: 'murah, aman' }
      ],
      latihanSalinKalimat: [
        { no: 1, jepang: 'この本は高くないです。とても安いです。', romaji: 'Kono hon wa takakunai desu. Totemo yasui desu.', arti: 'Buku ini tidak mahal. Sangat murah.', instruksi: 'Latih perubahan い jadi くないです.' },
        { no: 2, jepang: '先生は親切な人です。毎日元気です。', romaji: 'Sensei wa shinsetsu na hito desu. Mainichi genki desu.', arti: 'Guru adalah orang yang ramah. Setiap hari bersemangat.', instruksi: 'Tuliskan kata sifat な di depan kata benda dengan huruf な.' }
      ],
      soalHarian: [
        {
          id: 'b8-q1',
          pertanyaan: 'Bentuk negatif dari kata sifat "いい" (bagus) adalah...',
          tipe: 'pilihan',
          pilihan: ['いくないです', 'よくないです', 'いいじゃありません', 'いじゃないです'],
          jawabanBenar: 'よくないです',
          pembahasan: 'Kata sifat "いい" berasal dari kata dasar "よい". Saat berubah menjadi bentuk negatif, bentuknya SELALU "よくないです" (atau よくない). Bukan ikunai.'
        }
      ]
    }
  },
  9: {
    nomor: 9,
    judulJepang: '好きです',
    judulFurigana: 'すきです',
    judulRomaji: 'Suki desu',
    judulArti: 'Suka, Mahir & Alasan (から)',
    pengantar: 'Seru nih! Kita belajar bilang suka (好き), tidak suka (嫌い), jago/mahir (上手), dan belum mahir (下手), plus menyatakan alasan dengan partikel から. Bab ini bikin obrolan sehari-harimu jauh lebih hidup!',
    tipsHafalan: 'Pasangan lawan kata penting: 好き↔嫌い (suka vs benci/tidak suka) dan 上手↔下手 (mahir vs payah/belum jago). Kanji 字 (huruf), 漢字 (kanji), ローマ字 (huruf latin) sama-sama punya kanji 字!',
    bunpou: [
      {
        nomor: 1,
        rumus: '[Benda/Hal] が 好き / 嫌い / 上手 / 下手 です',
        arti: '= Suka / Benci / Mahir / Kurang pandai terhadap ...',
        penjelasan: 'Untuk menyatakan perasaan suka/benci dan kemampuan mahir/belum jago, objek sasarannya DITANDAI PARTIKEL が (ga), BUKAN partikel を. Semua kata ini adalah kata sifat な.',
        contoh: [
          { jepang: '私は音楽が好きです。', arti: 'Saya suka musik.' },
          { jepang: '母は料理が上手です。', arti: 'Ibu pandai memasak.' },
          { jepang: '弟は歌が下手です。', arti: 'Adik saya payah menyanyi.' }
        ],
        tips: 'Hal yang sama berlaku untuk kata 分かります (mengerti): 日本語が分かります (Saya mengerti bahasa Jepang).'
      },
      {
        nomor: 2,
        rumus: '[Alasan] から、[Hasil / Akibat]',
        arti: '= Karena [Alasan], maka [Hasil]',
        penjelasan: 'Partikel から dipasang di akhir kalimat alasan. Urutannya selalu: alasan から、kesimpulan/akibat.',
        contoh: [
          { jepang: '時間がありませんから、行きません。', arti: 'Karena tidak ada waktu, saya tidak pergi.' },
          { jepang: '安いですから、よく買います。', arti: 'Karena murah, saya sering membelinya.' }
        ],
        tips: 'Cara bertanya alasan: どうしてですか (Mengapa demikian?). Dijawab dengan akhiran 〜からです.'
      }
    ],
    kotoba: [
      { no: 1, kanji: '分かります', furigana: 'わかります', romaji: 'wakarimasu', arti: 'mengerti / paham', contohJepang: '日本語が分かります。', contohArti: 'Mengerti bahasa Jepang.' },
      { no: 2, kanji: '好き', furigana: 'すき', romaji: 'suki', arti: 'suka / gemar', contohJepang: '音楽が好きです。', contohArti: 'Suka musik.' },
      { no: 3, kanji: '嫌い', furigana: 'きらい', romaji: 'kirai', arti: 'tidak suka / benci', contohJepang: '魚が嫌いです。', contohArti: 'Tidak suka ikan.' },
      { no: 4, kanji: '上手', furigana: 'じょうず', romaji: 'jouzu', arti: 'mahir / pandai (orang lain)', contohJepang: '田中さんは歌が上手です。', contohArti: 'Pak Tanaka pandai bernyanyi.' },
      { no: 5, kanji: '下手', furigana: 'へた', romaji: 'heta', arti: 'kurang pandai / payah', contohJepang: '私は絵が下手です。', contohArti: 'Saya tidak pandai menggambar.' },
      { no: 6, kanji: '料理', furigana: 'りょうり', romaji: 'ryouri', arti: 'masakan / memasak', contohJepang: '料理を作ります。', contohArti: 'Membuat masakan.' },
      { no: 7, kanji: '飲み物', furigana: 'のみもの', romaji: 'nomimono', arti: 'minuman', contohJepang: '冷たい飲み物です。', contohArti: 'Minuman dingin.' },
      { no: 8, kanji: 'スポーツ', furigana: 'すぽーつ', romaji: 'supootsu', arti: 'olahraga', contohJepang: 'スポーツが好きです。', contohArti: 'Suka olahraga.' },
      { no: 9, kanji: '野球', furigana: 'やきゅう', romaji: 'yakyuu', arti: 'bisbol', contohJepang: '兄は野球が好きです。', contohArti: 'Kakak suka bisbol.' },
      { no: 10, kanji: 'サッカー', furigana: 'さっかー', romaji: 'sakkaa', arti: 'sepak bola', contohJepang: 'サッカーをします。', contohArti: 'Bermain sepak bola.' },
      { no: 11, kanji: '音楽', furigana: 'おんがく', romaji: 'ongaku', arti: 'musik', contohJepang: '音楽を聞きます。', contohArti: 'Mendengarkan musik.' },
      { no: 12, kanji: '歌', furigana: 'うた', romaji: 'uta', arti: 'lagu / nyanyian', contohJepang: 'この歌は有名です。', contohArti: 'Lagu ini terkenal.' },
      { no: 13, kanji: '絵', furigana: 'え', romaji: 'e', arti: 'gambar / lukisan', contohJepang: '絵を描きます。', contohArti: 'Menggambar lukisan.' },
      { no: 14, kanji: '字', furigana: 'じ', romaji: 'ji', arti: 'huruf / tulisan', contohJepang: '字が綺麗です。', contohArti: 'Tulisannya rapi.' },
      { no: 15, kanji: '漢字', furigana: 'かんじ', romaji: 'kanji', arti: 'huruf kanji', contohJepang: '漢字を勉強します。', contohArti: 'Belajar kanji.' },
      { no: 16, kanji: '細かいお金', furigana: 'こまかいおかね', romaji: 'komakai okane', arti: 'uang receh / uang pecahan kecil', contohJepang: '細かいお金がありません。', contohArti: 'Tidak punya uang receh.' },
      { no: 17, kanji: 'チケット', furigana: 'ちけっと', romaji: 'chiketto', arti: 'tiket pertunjukan / karcis', contohJepang: 'チケットを買います。', contohArti: 'Membeli tiket.' },
      { no: 18, kanji: '時間', furigana: 'じかん', romaji: 'jikan', arti: 'waktu (kesempatan/durasi)', contohJepang: '時間がありません。', contohArti: 'Tidak ada waktu.' },
      { no: 19, kanji: '用事', furigana: 'ようじ', romaji: 'youji', arti: 'urusan / kepentingan', contohJepang: 'ちょっと用事があります。', contohArti: 'Ada sedikit urusan.' },
      { no: 20, kanji: '約束', furigana: 'やくそく', romaji: 'yakusoku', arti: 'janji', contohJepang: '友達と約束があります。', contohArti: 'Ada janji dengan teman.' },
      { no: 21, kanji: 'ご主人', furigana: 'ごしゅじん', romaji: 'goshujin', arti: 'suami (orang lain)', contohJepang: 'ご主人はお元気ですか。', contohArti: 'Apakah suami Anda sehat?' },
      { no: 22, kanji: '奥さん', furigana: 'おくさん', romaji: 'okusan', arti: 'istri (orang lain)', contohJepang: '田中さんの奥さんです。', contohArti: 'Istri Pak Tanaka.' },
      { no: 23, kanji: '少し', furigana: 'すこし', romaji: 'sukoshi', arti: 'sedikit', contohJepang: '少し分かります。', contohArti: 'Sedikit paham.' },
      { no: 24, kanji: '全然', furigana: 'ぜんぜん', romaji: 'zenzen', arti: 'sama sekali (tidak)', contohJepang: '全然分かりません。', contohArti: 'Sama sekali tidak paham.' },
      { no: 25, kanji: '早く', furigana: 'はやく', romaji: 'hayaku', arti: 'cepat / pagi-pagi', contohJepang: '早く帰ります。', contohArti: 'Pulang cepat.' }
    ],
    kaiwa: {
      judul: '趣味と好きな料理の会話 (Obrolan Hobi & Makanan Kesukaan)',
      situasi: 'Di kafe setelah jam belajar, Maria dan Santos saling bertanya tentang olahraga dan makanan kesukaan.',
      percakapan: [
        { pembicara: 'サントス (Santos)', role: 'Teman', jepang: 'マリアさんはどんなスポーツが好きですか。', romaji: 'Maria-san wa donna supootsu ga suki desu ka.', arti: 'Maria-san suka olahraga seperti apa?' },
        { pembicara: 'マリア (Maria)', role: 'Teman', jepang: 'テニスが好きです。でも、あまり上手じゃありません。サントスさんは？', romaji: 'Tenisu ga suki desu. Demo, amari jouzu ja arimasen. Santosu-san wa?', arti: 'Saya suka tenis. Tapi tidak begitu mahir. Kalau Santos-san?' },
        { pembicara: 'サントス (Santos)', role: 'Teman', jepang: '私はサッカーが大好きです。ブラジル人ですから、子供の時からずっと練習しています。', romaji: 'Watashi wa sakkaa ga daisuki desu. Burajirujin desu kara, kodomo no toki kara zutto renshuu shite imasu.', arti: 'Saya sangat suka sepak bola! Karena saya orang Brasil, saya berlatih terus sejak kecil.' }
      ],
      catatanBudaya: 'Orang Jepang sangat menghargai sikap rendah hati (kenson). Saat dipuji "日本語が上手ですね" (Bahasa Jepang Anda pandai ya), jawaban bakunya adalah "いいえ、まだまだです" (Iie, mada mada desu = Belum, masih jauh dari pandai).'
    },
    sakubun: {
      judul: '私の好きなことと日本語の勉強 (Hal-hal yang Saya Sukai dan Belajar Bahasa Jepang)',
      judulRomaji: 'Watashi no Suki na Koto to Nihongo no Benkyou',
      judulArti: 'Karangan Minat Memasak, Musik, dan Alasan Belajar Bahasa Jepang',
      teksLengkapJepang: '私は日本の文化が大好きです。特に、日本の伝統的な料理とアニメが好きです。母はインドネシア料理が上手ですから、私も子供の時から料理を手伝いました。今、週末は日本のカレーや牛丼を自分で作ります。とても美味しいですから、友達も喜んで食べてくれます。また、私は日本の歌も好きです。毎晩、寝る前に日本の音楽を聞きます。最初は歌詞の意味が全然分かりませんでしたが、辞書で調べて、だんだん分かるようになりました。漢字は難しいですから、毎日ノートに五回書いて覚えています。日本語がもっと上手になりたいですから、これからも一生懸命頑張ります。',
      fullArti: 'Saya sangat menyukai kebudayaan Jepang. Terutama, saya suka masakan tradisional Jepang dan anime. Karena ibu saya pandai memasak masakan Indonesia, saya pun sejak kecil membantu memasak di dapur. Sekarang saat akhir pekan saya memasak sendiri kari Jepang dan gyudon. Karena rasanya sangat lezat, teman-teman saya pun memakannya dengan senang hati. Selain itu, saya juga suka lagu-lagu Jepang. Setiap malam sebelum tidur saya mendengarkan musik Jepang. Pada awalnya saya sama sekali tidak mengerti arti liriknya, namun setelah mencari di kamus perlahan-lahan saya mulai memahaminya. Karena kanji itu sulit, setiap hari saya menghafalnya dengan menuliskannya lima kali di buku catatan. Karena saya ingin semakin mahir berbahasa Jepang, ke depannya saya akan terus berusaha sekuat tenaga.',
      panduanMenulis: 'Perhatikan partikel が pada frasa 日本語が分かります dan 料理が上手です di buku catatanmu.',
      tipsMembaca: 'Perhatikan intonasi pada から: berikan jeda sedikit setelah kata から sebelum masuk ke akibat kalimat.',
      kalimatBedah: [
        {
          kalimatNo: 1,
          kalimatJepang: '母は料理が上手ですから、私も子供の時から料理を手伝いました。',
          romaji: 'Haha wa ryouri ga jouzu desu kara, watashi mo kodomo no toki kara ryouri o tetsudaimashita.',
          terjemahan: 'Karena ibu pandai memasak, saya pun sejak kecil membantu memasak.',
          kanjiList: [
            { kanji: '上手', caraBaca: 'じょうず (jouzu)', arti: 'pandai / mahir', tipsIngat: 'Atas (上) + tangan (手) = tangan di atas, terampil.' }
          ],
          bunpouBedah: [
            { pola: 'N が 上手です', namaPola: 'Kemahiran Terhadap Suatu Bidang', penjelasan: 'Memakai partikel が, bukan を.', levelCatatan: 'Bab 9 Dasar' },
            { pola: '〜ですから', namaPola: 'Partikel Penanda Alasan (Sebab)', penjelasan: 'Menjelaskan alasan di awal mengapa saya suka memasak.', levelCatatan: 'Bab 9 Dasar' }
          ]
        }
      ]
    },
    worksheet: {
      instruksiBuku: 'Salinlah kanji tingkat kemahiran dan kata huruf di bawah ini ke bukumu:',
      kanjiList: [
        { kanji: '上', onyomi: 'ジョウ (jou)', kunyomi: 'うえ・あ (ue/a)', arti: 'atas', jumlahGuratan: 3, kotobaContoh: '上手 (jouzu), 上がります (agarimasu)', kotobaArti: 'pandai, naik' },
        { kanji: '下', onyomi: 'カ・ゲ (ka/ge)', kunyomi: 'した・さ (shita/sa)', arti: 'bawah', jumlahGuratan: 3, kotobaContoh: '下手 (heta), 下がります (sagarimasu)', kotobaArti: 'payah, turun' },
        { kanji: '字', onyomi: 'ジ (ji)', kunyomi: 'あざ (aza)', arti: 'huruf / karakter', jumlahGuratan: 6, kotobaContoh: '漢字 (kanji), 文字 (moji)', kotobaArti: 'kanji, karakter huruf' }
      ],
      latihanSalinKalimat: [
        { no: 1, jepang: '私は日本の料理が好きです。', romaji: 'Watashi wa nihon no ryouri ga suki desu.', arti: 'Saya suka masakan Jepang.', instruksi: 'Tuliskan partikel が setelah kata masakan.' },
        { no: 2, jepang: '時間がありませんから、タクシーで行きます。', romaji: 'Jikan ga arimasen kara, takushii de ikimasu.', arti: 'Karena tidak ada waktu, saya pergi naik taksi.', instruksi: 'Perhatikan penempatan partikel alasan から.' }
      ],
      soalHarian: [
        {
          id: 'b9-q1',
          pertanyaan: 'Lengkapi partikel yang tepat: "私はスポーツ＿＿好きです。"',
          tipe: 'pilihan',
          pilihan: ['を', 'が', 'に', 'で'],
          jawabanBenar: 'が',
          pembahasan: 'Objek sasaran perasaan suka (好き), benci (嫌い), mahir (上手), dan mengerti (分かります) SELALU memakai partikel が.'
        }
      ]
    }
  },
  10: {
    nomor: 10,
    judulJepang: 'あります、います',
    judulFurigana: 'あります、います',
    judulRomaji: 'Arimasu, Imasu',
    judulArti: 'Keberadaan Benda & Makhluk Hidup',
    pengantar: 'Ada atau tidak ada? Di bab ini kamu belajar menyatakan keberadaan dan posisi letak benda mati (あります) maupun makhluk hidup bernyawa (います). Bab ini sangat vital dipakai dalam kehidupan sehari-hari saat mencari barang atau menanyakan keberadaan orang.',
    tipsHafalan: 'Kata posisi kebanyakan satu kanji: 上 (ue = atas), 下 (shita = bawah), 前 (mae = depan), 後ろ (ushiro = belakang), 中 (naka = dalam), 外 (soto = luar), 隣 (tonari = sebelah). Latih dengan menunjuk barang-barang di kamarmu!',
    bunpou: [
      {
        nomor: 1,
        rumus: '[Benda Mati] が あります / [Makhluk Hidup] が います',
        arti: '= Ada benda mati / Ada makhluk hidup',
        penjelasan: 'あります (arimasu) dipakai untuk benda mati, tumbuhan, atau benda tak bernyawa. います (imasu) khusus dipakai untuk manusia, hewan, dan serangga hidup. Jangan pernah tertukar ya!',
        contoh: [
          { jepang: '机の上に本があります。', arti: 'Di atas meja ada buku.' },
          { jepang: '公園に犬がいます。', arti: 'Di taman ada anjing.' },
          { jepang: '教室に田中さんがいます。', arti: 'Di dalam ruang kelas ada Pak Tanaka.' }
        ],
        tips: 'Bentuk negatifnya: ありません (tidak ada benda) dan いません (tidak ada orang/hewan).'
      },
      {
        nomor: 2,
        rumus: '[Tempat] に [Benda/Orang] が あります / います',
        arti: '= Di [Tempat] ada [Benda/Orang]',
        penjelasan: 'Partikel に menandai lokasi statis tempat keberadaan subjek. Struktur kalimat ini dipakai ketika mengenalkan apa yang berada di suatu tempat.',
        contoh: [
          { jepang: '冷蔵庫の中に卵があります。', arti: 'Di dalam kulkas ada telur.' },
          { jepang: '庭に猫がいます。', arti: 'Di halaman ada kucing.' }
        ],
        tips: 'Kalau bendanya yang jadi topik utama: [Benda] は [Tempat] にあります (Kuncinya ada di dalam tas = 鍵は鞄の中にあります).'
      }
    ],
    kotoba: [
      { no: 1, kanji: 'あります', furigana: 'あります', romaji: 'arimasu', arti: 'ada (benda mati/tumbuhan)', contohJepang: '机の上に本があります。', contohArti: 'Di atas meja ada buku.' },
      { no: 2, kanji: 'います', furigana: 'います', romaji: 'imasu', arti: 'ada (orang/hewan)', contohJepang: '庭に犬がいます。', contohArti: 'Di halaman ada anjing.' },
      { no: 3, kanji: '男の人', furigana: 'おとこのひと', romaji: 'otoko no hito', arti: 'pria / laki-laki dewasa', contohJepang: 'あそこに男の人がいます。', contohArti: 'Di sana ada seorang pria.' },
      { no: 4, kanji: '女の人', furigana: 'おんなのひと', romaji: 'onna no hito', arti: 'wanita / perempuan dewasa', contohJepang: 'あの女の人は先生です。', contohArti: 'Wanita itu adalah guru.' },
      { no: 5, kanji: '男の子', furigana: 'おとこのこ', romaji: 'otoko no ko', arti: 'anak laki-laki', contohJepang: '男の子が遊んでいます。', contohArti: 'Anak laki-laki sedang bermain.' },
      { no: 6, kanji: '女の子', furigana: 'おんなのこ', romaji: 'onna no ko', arti: 'anak perempuan', contohJepang: '女の子が本を読んでいます。', contohArti: 'Anak perempuan sedang membaca.' },
      { no: 7, kanji: '犬', furigana: 'いぬ', romaji: 'inu', arti: 'anjing', contohJepang: '白い犬がいます。', contohArti: 'Ada anjing putih.' },
      { no: 8, kanji: '猫', furigana: 'ねこ', romaji: 'neko', arti: 'kucing', contohJepang: 'ベッドの下に猫がいます。', contohArti: 'Di bawah tempat tidur ada kucing.' },
      { no: 9, kanji: '木', furigana: 'き', romaji: 'ki', arti: 'pohon', contohJepang: '木の下で休みます。', contohArti: 'Istirahat di bawah pohon.' },
      { no: 10, kanji: '物', furigana: 'もの', romaji: 'mono', arti: 'barang / benda', contohJepang: 'いろいろな物があります。', contohArti: 'Ada berbagai barang.' },
      { no: 11, kanji: '上', furigana: 'うえ', romaji: 'ue', arti: 'atas', contohJepang: '机の上です。', contohArti: 'Di atas meja.' },
      { no: 12, kanji: '下', furigana: 'した', romaji: 'shita', arti: 'bawah', contohJepang: '机の下です。', contohArti: 'Di bawah meja.' },
      { no: 13, kanji: '前', furigana: 'まえ', romaji: 'mae', arti: 'depan', contohJepang: '駅の前です。', contohArti: 'Di depan stasiun.' },
      { no: 14, kanji: '後ろ', furigana: 'うしろ', romaji: 'ushiro', arti: 'belakang', contohJepang: '学校の後ろです。', contohArti: 'Di belakang sekolah.' },
      { no: 15, kanji: '右', furigana: 'みぎ', romaji: 'migi', arti: 'kanan', contohJepang: '右に曲がります。', contohArti: 'Belok kanan.' },
      { no: 16, kanji: '左', furigana: 'ひだり', romaji: 'hidari', arti: 'kiri', contohJepang: '左にあります。', contohArti: 'Ada di sebelah kiri.' },
      { no: 17, kanji: '中', furigana: 'なか', romaji: 'naka', arti: 'dalam', contohJepang: '箱の中です。', contohArti: 'Di dalam kotak.' },
      { no: 18, kanji: '外', furigana: 'そと', romaji: 'soto', arti: 'luar', contohJepang: '部屋の外です。', contohArti: 'Di luar kamar.' },
      { no: 19, kanji: '隣', furigana: 'となり', romaji: 'tonari', arti: 'sebelah / samping', contohJepang: '銀行の隣です。', contohArti: 'Di sebelah bank.' },
      { no: 20, kanji: '間', furigana: 'あいだ', romaji: 'aida', arti: 'antara', contohJepang: '本屋と銀行の間です。', contohArti: 'Di antara toko buku dan bank.' },
      { no: 21, kanji: '近く', furigana: 'ちかく', romaji: 'chikaku', arti: 'dekat / sekitar', contohJepang: '駅の近くです。', contohArti: 'Di dekat stasiun.' },
      { no: 22, kanji: '箱', furigana: 'はこ', romaji: 'hako', arti: 'kotak', contohJepang: '箱の中にあります。', contohArti: 'Ada di dalam kotak.' },
      { no: 23, kanji: '冷蔵庫', furigana: 'れいぞうこ', romaji: 'reizouko', arti: 'kulkas / lemari es', contohJepang: '冷蔵庫の中にジュースがあります。', contohArti: 'Ada jus di dalam kulkas.' },
      { no: 24, kanji: '棚', furigana: 'たな', romaji: 'tana', arti: 'rak buku / etalase', contohJepang: '棚の上にあります。', contohArti: 'Ada di atas rak.' },
      { no: 25, kanji: '公園', furigana: 'こうえん', romaji: 'kouen', arti: 'taman kota', contohJepang: '公園に人がたくさんいます。', contohArti: 'Banyak orang di taman.' }
    ],
    kaiwa: {
      judul: '部屋の鍵はどこにありますか (Di Mana Kunci Kamar Berada?)',
      situasi: 'Miller sedang terburu-buru hendak berangkat ke kantor dan mencari kunci kamarnya yang terselip.',
      percakapan: [
        { pembicara: 'ミラー (Miller)', role: 'Penyewa Kos', jepang: 'あれ、部屋の鍵がありません！どこに置いたかな…。', romaji: 'Are, heya no kagi ga arimasen! Doko ni oita ka na...', arti: 'Lho, kunci kamar tidak ada! Di mana tadi saya letakkan ya...' },
        { pembicara: '大家さん (Ibu Kos)', role: 'Pemilik Kos', jepang: 'ミラーさん、机の上はどうですか。さっき書類がありましたよ。', romaji: 'Miraa-san, tsukue no ue wa dou desu ka. Sakki shorui ga arimashita yo.', arti: 'Miller-san, bagaimana kalau di atas meja? Tadi ada berkas di sana lho.' },
        { pembicara: 'ミラー (Miller)', role: 'Penyewa Kos', jepang: '机の上には本とパソコンしかありません。', romaji: 'Tsukue no ue ni wa hon to pasokon shika arimasen.', arti: 'Di atas meja hanya ada buku dan laptop saja.' },
        { pembicara: '大家さん (Ibu Kos)', role: 'Pemilik Kos', jepang: 'あ、見て！鞄の隣の棚の上に置いてありますよ。猫のシロちゃんがそばにいます。', romaji: 'A, mite! Kaban no tonari no tana no ue ni oite arimasu yo. Neko no Shiro-chan ga soba ni imasu.', arti: 'Ah, lihat! Kuncinya ditaruh di atas rak di sebelah tas lho. Kucing si Shiro ada di dekatnya.' },
        { pembicara: 'ミラー (Miller)', role: 'Penyewa Kos', jepang: 'あ、ありました！助かりました、ありがとうございます！', romaji: 'A, arimashita! Tasakarimashita, arigatou gozaimasu!', arti: 'Ah, ketemu! Terima kasih banyak, saya sangat terbantu!' }
      ],
      catatanBudaya: 'Ketika menemukan barang yang sebelumnya hilang dicari, orang Jepang spontan mengucapkan "あ、ありました！" (A, arimashita!) dalam bentuk lampau, artinya "Ah, ketemu!".'
    },
    sakubun: {
      judul: '私の部屋の様子と大好きなペット (Suasana Kamarku dan Hewan Peliharaan Kesayangan)',
      judulRomaji: 'Watashi no Heya no Yousu to Daisuki na Petto',
      judulArti: 'Karangan Deskripsi Posisi Barang dan Kucing Peliharaan di Kamar',
      teksLengkapJepang: '私の部屋はアパートの二階にあります。広くありませんが、とても日当たりが良くて明るい部屋です。部屋の真ん中に勉強机と椅子があります。机の上にはパソコンと日本語の辞書があります。机の隣に本棚があって、たくさんの本が並んでいます。窓の近くには小さなベッドがあります。そして、ベッドの下には私の大切なペットの猫がいます。名前は「ミケ」です。ミケは昼間、暖かい窓のそばで気持ちよさそうに寝ています。部屋の中に好きな物とお気に入りの猫がいますから、私はこの部屋にいる時、いつも心が落ち着きます。',
      fullArti: 'Kamar saya berada di lantai 2 sebuah apartemen. Kamarnya tidak luas, tetapi pencahayaan mataharinya sangat bagus dan terang. Di tengah-tengah kamar terdapat meja belajar dan kursi. Di atas meja ada laptop dan kamus bahasa Jepang. Di sebelah meja terdapat rak buku, dan banyak buku tersusun berjajar di sana. Di dekat jendela terdapat tempat tidur kecil. Dan di bawah tempat tidur ada kucing peliharaan kesayangan saya. Namanya "Mike". Mike pada siang hari tidur dengan nyenyak di dekat jendela yang hangat. Karena di dalam kamar ada benda-benda kesukaan dan kucing favorit saya, ketika berada di kamar ini hati saya selalu merasa tenang dan damai.',
      panduanMenulis: 'Perhatikan pemakaian kanji 犬 (anjing), 猫 (kucing), 木 (pohon), 中 (dalam), 上 (atas), 下 (bawah) saat menulis di buku catatan.',
      tipsMembaca: 'Cermati perbedaan pembacaan partikel に saat menunjukkan tempat keberadaan (部屋にあります).',
      kalimatBedah: [
        {
          kalimatNo: 1,
          kalimatJepang: 'ベッドの下には私の大切なペットの猫がいます。名前は「ミケ」です。',
          romaji: 'Beddo no shita ni wa watashi no taisetsu na petto no neko ga imasu. Namae wa "Mike" desu.',
          terjemahan: 'Di bawah tempat tidur ada kucing peliharaan kesayangan saya. Namanya "Mike".',
          kanjiList: [
            { kanji: '猫', caraBaca: 'ねこ (neko)', arti: 'kucing', tipsIngat: 'Hewan berkaki empat (犭) di ladang (苗).' }
          ],
          bunpouBedah: [
            { pola: '[Makhluk Hidup] が います', namaPola: 'Keberadaan Makhluk Hidup', penjelasan: 'Kucing bernyawa, sehingga wajib memakai います, bukan あります.', levelCatatan: 'Bab 10 Dasar' },
            { pola: '[Benda 1] の [Posisi] に', namaPola: 'Posisi Relatif Ruang', penjelasan: 'ベッドの下 (di bawah tempat tidur).', levelCatatan: 'Bab 10 Dasar' }
          ]
        }
      ]
    },
    worksheet: {
      instruksiBuku: 'Salinlah kanji penunjuk arah posisi berikut ke bukumu masing-masing 5 kali:',
      kanjiList: [
        { kanji: '中', onyomi: 'チュウ (chuu)', kunyomi: 'なか (naka)', arti: 'dalam / tengah', jumlahGuratan: 4, kotobaContoh: '中 (naka), 中国 (chuugoku)', kotobaArti: 'dalam, Tiongkok' },
        { kanji: '前', onyomi: 'ゼン (zen)', kunyomi: 'まえ (mae)', arti: 'depan / sebelum', jumlahGuratan: 9, kotobaContoh: '前 (mae), 午前 (gozen)', kotobaArti: 'depan, pagi/AM' },
        { kanji: '後', onyomi: 'ゴ・コウ (go/kou)', kunyomi: 'うし・あと (ushi/ato)', arti: 'belakang / sesudah', jumlahGuratan: 9, kotobaContoh: '後ろ (ushiro), 午後 (gogo)', kotobaArti: 'belakang, siang/PM' },
        { kanji: '木', onyomi: 'ボク・モク (boku/moku)', kunyomi: 'き (ki)', arti: 'pohon / kayu', jumlahGuratan: 4, kotobaContoh: '木 (ki), 木曜日 (mokuyoubi)', kotobaArti: 'pohon, hari Kamis' }
      ],
      latihanSalinKalimat: [
        { no: 1, jepang: '机の上に本とペンがあります。', romaji: 'Tsukue no ue ni hon to pen ga arimasu.', arti: 'Di atas meja ada buku dan pulpen.', instruksi: 'Gunakan あります untuk benda mati.' },
        { no: 2, jepang: '公園に犬と猫がいます。', romaji: 'Kouen ni inu to neko ga imasu.', arti: 'Di taman ada anjing dan kucing.', instruksi: 'Gunakan います untuk hewan bernyawa.' }
      ],
      soalHarian: [
        {
          id: 'b10-q1',
          pertanyaan: 'Manakah kalimat yang benar secara gramatikal bahasa Jepang?',
          tipe: 'pilihan',
          pilihan: ['部屋に猫があります。', '部屋に猫がいます。', '机の上に本がいます。', '庭に車がいます。'],
          jawabanBenar: '部屋に猫がいます。',
          pembahasan: 'Kucing (猫) adalah makhluk hidup bernyawa sehingga wajib memakai います. Sedangkan buku dan mobil adalah benda mati sehingga memakai あります.'
        }
      ]
    }
  }
};


export function getFullChapter(chapterNum: number): Chapter {
  if (extendedChapters[chapterNum]) {
    return extendedChapters[chapterNum];
  }

  // Generative fallback for remaining chapters using full index info
  const summary = allChaptersSummary.find((s) => s.nomor === chapterNum) || {
    nomor: chapterNum,
    judulJepang: `第${chapterNum}課`,
    judulFurigana: `だい${chapterNum}か`,
    judulArti: `Bab ${chapterNum}`,
    temaUtama: 'Tata bahasa Minna no Nihongo',
    level: 'N4' as const
  };

  return {
    nomor: chapterNum,
    judulJepang: summary.judulJepang,
    judulFurigana: summary.judulFurigana,
    judulRomaji: `Bab ${chapterNum}`,
    judulArti: summary.judulArti,
    pengantar: `Selamat datang di Bab ${chapterNum}! Bab ini memfokuskan pemahaman pada pola tata bahasa: ${summary.temaUtama}. Pelajari rumus, kosakata, dan karangan terstruktur di bawah ini.`,
    tipsHafalan: 'Tuliskan kanji dan kosakata bab ini berulang kali ke buku catatan fisikmu sambil melafalkan bunyinya dengan suara lantang.',
    bunpou: [
      {
        nomor: 1,
        rumus: summary.temaUtama.split(',')[0] || `Pola Inti Bab ${chapterNum}`,
        arti: `= Rumus Pokok Bab ${chapterNum}`,
        penjelasan: `Pola ini merupakan fondasi utama pada Bab ${chapterNum}. Digunakan dalam percakapan sehari-hari maupun ujian kemampuan bahasa Jepang (JLPT ${summary.level}).`,
        contoh: [
          { jepang: `${summary.judulJepang}の勉強をします。`, arti: `Saya mempelajari ${summary.judulArti}.` }
        ],
        tips: 'Perhatikan partikel dan bentuk perubahan kata kerja yang melekat pada pola ini.'
      }
    ],
    kotoba: [
      { no: 1, kanji: summary.judulJepang, furigana: summary.judulFurigana, romaji: `kotoba-${chapterNum}`, arti: summary.judulArti, contohJepang: `${summary.judulJepang}を勉強します。`, contohArti: `Mempelajari ${summary.judulArti}.` }
    ],
    kaiwa: {
      judul: `会話：${summary.judulArti}`,
      situasi: `Percakapan situasional yang mengaplikasikan pola tata bahasa Bab ${chapterNum}.`,
      percakapan: [
        { pembicara: 'A (ミラー)', role: 'Penanya', jepang: `${summary.judulJepang}はどうですか。`, romaji: `${summary.judulFurigana} wa dou desu ka.`, arti: `Bagaimana dengan ${summary.judulArti}?` },
        { pembicara: 'B (山田)', role: 'Penjawab', jepang: `とても大切ですから、しっかり勉強しましょう。`, romaji: `Totemo taisetsu desu kara, shikkari benkyou shimashou.`, arti: 'Karena sangat penting, mari kita pelajari dengan sungguh-sungguh.' }
      ],
      catatanBudaya: 'Selalu perhatikan tingkat kesopanan (keigo / desu-masu) saat berbicara dengan rekan kerja atau atasan.'
    },
    sakubun: {
      judul: `私の作文：${summary.judulArti}`,
      judulRomaji: `Watashi no Sakubun: ${summary.judulRomaji || summary.judulArti}`,
      judulArti: `Karangan Praktik Bab ${chapterNum} (${summary.judulArti})`,
      teksLengkapJepang: `日本語の勉強はとても面白いです。毎日、新しい漢字と文法を覚えます。この課では「${summary.judulJepang}」を練習しました。最初は難しかったですが、何回もノートに書くと、だんだん分かるようになりました。これからも日本の生活や仕事のために、一生懸命頑張ります。`,
      fullArti: `Belajar bahasa Jepang sangat menyenangkan. Setiap hari saya menghafal kanji dan tata bahasa baru. Di bab ini saya melatih "${summary.judulArti}". Awalnya terasa sulit, namun setelah berkali-kali menulisnya di buku catatan, perlahan-lahan saya menjadi paham. Ke depannya demi kehidupan dan pekerjaan di Jepang, saya akan terus berjuang sekuat tenaga.`,
      panduanMenulis: 'Salin karangan ini ke buku catatan berpetakmu dengan memperhatikan letak furigana di atas kanji.',
      tipsMembaca: 'Gunakan fitur sembunyikan furigana untuk menguji ingatan kanjimu secara mandiri!',
      kalimatBedah: [
        {
          kalimatNo: 1,
          kalimatJepang: `日本語の勉強はとても面白いです。`,
          romaji: 'Nihongo no benkyou wa totemo omoshiroi desu.',
          terjemahan: 'Belajar bahasa Jepang sangat menyenangkan.',
          kanjiList: [
            { kanji: '勉', caraBaca: 'べん (ben)', arti: 'berusaha keras' },
            { kanji: '強', caraBaca: 'きょう (kyou)', arti: 'kuat' }
          ],
          bunpouBedah: [
            { pola: 'N1 の N2', namaPola: 'Partikel Penjelas', penjelasan: 'Menghubungkan bahasa Jepang dengan kata belajar.' }
          ]
        }
      ]
    },
    worksheet: {
      instruksiBuku: `Salin kanji dan kalimat bab ${chapterNum} ke buku catatan tulismu.`,
      kanjiList: [
        { kanji: '勉', onyomi: 'ベン (ben)', kunyomi: 'つと (tsuto)', arti: 'berusaha keras', jumlahGuratan: 10, kotobaContoh: '勉強 (benkyou)', kotobaArti: 'belajar' },
        { kanji: '強', onyomi: 'キョウ (kyou)', kunyomi: 'つよ (tsuyo)', arti: 'kuat', jumlahGuratan: 11, kotobaContoh: '強い (tsuyoi)', kotobaArti: 'kuat' }
      ],
      latihanSalinKalimat: [
        { no: 1, jepang: `毎日日本語を勉強します。`, romaji: 'Mainichi nihongo o benkyou-shimasu.', arti: 'Setiap hari belajar bahasa Jepang.', instruksi: 'Tuliskan secara rapi di buku catatan.' }
      ],
      soalHarian: [
        {
          id: `b${chapterNum}-q1`,
          pertanyaan: `Apakah tema fokus dari Bab ${chapterNum}?`,
          tipe: 'pilihan',
          pilihan: [summary.temaUtama, 'Hanya angka', 'Hanya salam', 'Tidak ada'],
          jawabanBenar: summary.temaUtama,
          pembahasan: `Bab ${chapterNum} menitikberatkan pada penguasaan: ${summary.temaUtama}.`
        }
      ]
    }
  };
}
