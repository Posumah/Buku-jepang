import { Chapter } from '../types/nihongo';

export const chaptersData: Record<number, Chapter> = {
  1: {
    nomor: 1,
    judulJepang: '自己紹介',
    judulFurigana: 'じこしょうかい',
    judulRomaji: 'Jikoshoukai',
    judulArti: 'Perkenalan Diri',
    pengantar: 'Yuk mulai dari yang paling dasar: cara bilang "Saya adalah...". Bab ini ibarat jabat tangan pertama sama bahasa Jepang. Pola-polanya pendek dan gampang, jadi santai aja ya!',
    tipsHafalan: 'Perhatikan pola 〜人 (hito/jin) dan 〜員 (in): 会社員 (kaishain), 銀行員 (ginkouin), 外国人 (gaikokujin). Akhiran ini artinya "orang yang berprofesi / berasal dari...". Hafal satu akhiran, langsung dapat banyak kata!',
    bunpou: [
      {
        nomor: 1,
        rumus: 'N1 は N2 です',
        arti: '= N1 adalah N2',
        penjelasan: 'Ini pola paling dasar. Partikel は ditulis "ha" tapi dibaca "wa" ketika berfungsi sebagai partikel penunjuk topik pembicaraan ("mengenai N1..."). です (desu) itu pelengkap sopan di akhir kalimat predikat nominal, berfungsi mirip "adalah" tetapi dengan nuansa sopan dan tegas.',
        contoh: [
          { jepang: '私は学生です。', arti: 'Saya adalah pelajar.' },
          { jepang: 'サントスさんは会社員です。', arti: 'Tuan Santos adalah karyawan swasta.' },
          { jepang: '山田さんは先生です。', arti: 'Pak Yamada adalah guru.' }
        ],
        tips: 'Kalau mau bilang "Saya Kiki", tinggal ganti: 私はキキです。 Jangan beri akhiran さん (san) ke nama diri sendiri!'
      },
      {
        nomor: 2,
        rumus: '〜 ですか',
        arti: '= Apakah ...?',
        penjelasan: 'Mau bikin kalimat tanya? Gampang banget: cukup tempel partikel か (ka) di paling akhir kalimat. Dalam tulisan Jepang asli tidak perlu tanda tanya (?), dan intonasi suara dinaikkan sedikit di ujung kalimat.',
        contoh: [
          { jepang: 'あなたは先生ですか。', arti: 'Apakah Anda guru?' },
          { jepang: 'ミラーさんは会社員ですか。', arti: 'Apakah Tuan Miller karyawan perusahaan?' }
        ],
        tips: 'Cara jawabnya: kalau ya, jawab "はい、そうです" (Ya, benar). Kalau bukan, jawab "いいえ、ちがいます" (Bukan, salah).'
      },
      {
        nomor: 3,
        rumus: '〜 も 〜 です',
        arti: '= ... juga ...',
        penjelasan: 'Partikel も (mo) artinya "juga". Gunakan partikel も untuk MENGGANTIKAN partikel は apabila predikat atau hal yang diceritakan sama persis dengan kalimat sebelumnya.',
        contoh: [
          { jepang: '私も学生です。', arti: 'Saya juga pelajar.' },
          { jepang: 'サントスさんもブラジル人です。', arti: 'Tuan Santos juga orang Brasil.' }
        ],
        tips: 'Jangan didobel ya! Bukan "私はも" (salah), tapi langsung ganti jadi "私も" (cukup).'
      },
      {
        nomor: 4,
        rumus: 'N1 は N2 ではありません / じゃありません',
        arti: '= N1 bukan N2',
        penjelasan: 'Ini adalah bentuk negatif (penyangkalan) dari です. Dalam tulisan resmi atau formal gunakan ではありません (dewa arimasen). Dalam obrolan santai sehari-hari, orang Jepang lebih sering memakai じゃありません (ja arimasen) karena lebih ringan di lidah.',
        contoh: [
          { jepang: '私は先生ではありません。', arti: 'Saya bukan guru.' },
          { jepang: 'ミラーさんは学生じゃありません。', arti: 'Tuan Miller bukan mahasiswa.' }
        ],
        tips: 'Rumus ringkas: Tulis formal pakai "ではありません", ucapkan lisan sehari-hari pakai "じゃありません".'
      }
    ],
    kotoba: [
      { no: 1, kanji: '私', furigana: 'わたし', romaji: 'watashi', arti: 'saya / aku', contohJepang: '私は学生です。', contohArti: 'Saya adalah pelajar.' },
      { no: 2, kanji: '人', furigana: 'ひと', romaji: 'hito', arti: 'orang', contohJepang: 'あの人は先生です。', contohArti: 'Orang itu adalah guru.' },
      { no: 3, kanji: '学生', furigana: 'がくせい', romaji: 'gakusei', arti: 'pelajar / mahasiswa', contohJepang: 'ミラーさんは学生ではありません。', contohArti: 'Tuan Miller bukan pelajar.' },
      { no: 4, kanji: '先生', furigana: 'せんせい', romaji: 'sensei', arti: 'guru / dosen / dokter', contohJepang: '山田さんは先生です。', contohArti: 'Pak Yamada adalah guru.' },
      { no: 5, kanji: '教師', furigana: 'きょうし', romaji: 'kyoushi', arti: 'guru (profesi diri sendiri)', contohJepang: '私は日本語の教師です。', contohArti: 'Saya guru bahasa Jepang.' },
      { no: 6, kanji: '会社員', furigana: 'かいしゃいん', romaji: 'kaishain', arti: 'karyawan swasta', contohJepang: '田中さんは会社員です。', contohArti: 'Pak Tanaka karyawan swasta.' },
      { no: 7, kanji: '銀行員', furigana: 'ぎんこういん', romaji: 'ginkouin', arti: 'pegawai bank', contohJepang: '私は銀行員です。', contohArti: 'Saya pegawai bank.' },
      { no: 8, kanji: '医者', furigana: 'いしゃ', romaji: 'isha', arti: 'dokter', contohJepang: 'あの人は医者ですか。', contohArti: 'Apakah orang itu dokter?' },
      { no: 9, kanji: '研究者', furigana: 'けんきゅうしゃ', romaji: 'kenkyuusha', arti: 'peneliti', contohJepang: 'サントスさんは研究者です。', contohArti: 'Pak Santos adalah peneliti.' },
      { no: 10, kanji: '大学', furigana: 'だいがく', romaji: 'daigaku', arti: 'universitas / perguruan tinggi', contohJepang: '私は大学の学生です。', contohArti: 'Saya mahasiswa universitas.' },
      { no: 11, kanji: '病院', furigana: 'びょういん', romaji: 'byouin', arti: 'rumah sakit', contohJepang: 'あの人は病院の医者です。', contohArti: 'Orang itu dokter rumah sakit.' },
      { no: 12, kanji: '誰', furigana: 'だれ', romaji: 'dare', arti: 'siapa (どなた lebih sopan)', contohJepang: 'あの人は誰ですか。', contohArti: 'Siapakah orang itu?' },
      { no: 13, kanji: '何歳', furigana: 'なんさい', romaji: 'nansai', arti: 'berapa umur (おいくつ lebih sopan)', contohJepang: '田中さんは何歳ですか。', contohArti: 'Berapa umur Pak Tanaka?' },
      { no: 14, kanji: '歳', furigana: 'さい', romaji: 'sai', arti: 'tahun (satuan umur)', contohJepang: '私は二十五歳です。', contohArti: 'Umur saya 25 tahun.' },
      { no: 15, kanji: '国', furigana: 'くに', romaji: 'kuni', arti: 'negara / negeri asal', contohJepang: 'あなたの国はどこですか。', contohArti: 'Negara Anda di mana?' },
      { no: 16, kanji: '日本', furigana: 'にほん', romaji: 'nihon', arti: 'Jepang', contohJepang: '私は日本の会社員です。', contohArti: 'Saya karyawan perusahaan Jepang.' },
      { no: 17, kanji: '中国', furigana: 'ちゅうごく', romaji: 'chuugoku', arti: 'Tiongkok / Cina', contohJepang: 'あの人は中国の人です。', contohArti: 'Orang itu orang Cina.' },
      { no: 18, kanji: '韓国', furigana: 'かんこく', romaji: 'kankoku', arti: 'Korea Selatan', contohJepang: 'カンさんは韓国の学生です。', contohArti: 'Kang adalah pelajar Korea.' },
      { no: 19, kanji: '会社', furigana: 'かいしゃ', romaji: 'kaisha', arti: 'perusahaan / kantor', contohJepang: '私の会社は東京です。', contohArti: 'Perusahaan saya di Tokyo.' },
      { no: 20, kanji: '社員', furigana: 'しゃいん', romaji: 'shain', arti: 'pegawai (perusahaan tertentu)', contohJepang: 'ミラーさんはパワー電気の社員です。', contohArti: 'Miller adalah karyawan Power Denki.' },
      { no: 21, kanji: '電気', furigana: 'でんき', romaji: 'denki', arti: 'listrik / lampu listrik', contohJepang: '私は電気の会社の社員です。', contohArti: 'Saya karyawan perusahaan listrik.' },
      { no: 22, kanji: '名前', furigana: 'なまえ', romaji: 'namae', arti: 'nama', contohJepang: 'お名前は何ですか。', contohArti: 'Siapa nama Anda?' },
      { no: 23, kanji: '専門', furigana: 'せんもん', romaji: 'senmon', arti: 'bidang keahlian / jurusan', contohJepang: '専門は日本語です。', contohArti: 'Bidang keahlian saya bahasa Jepang.' },
      { no: 24, kanji: '外国人', furigana: 'がいこくじん', romaji: 'gaikokujin', arti: 'orang asing / warga negara asing', contohJepang: 'あの人は外国人ですか。', contohArti: 'Apakah orang itu orang asing?' },
      { no: 25, kanji: '初めまして', furigana: 'はじめまして', romaji: 'hajimemashite', arti: 'salam kenal (pertama kali bertemu)', contohJepang: '初めまして、田中です。', contohArti: 'Salam kenal, saya Tanaka.' }
    ],
    kaiwa: {
      judul: '初めまして！会社での挨拶 (Salam Kenal di Kantor)',
      situasi: 'Miller-san dari Amerika baru pertama kali masuk ke kantor IMC dan menyapa Tanaka-san serta Satou-san.',
      percakapan: [
        { pembicara: 'ミラー (Miller)', role: 'Karyawan Baru', jepang: '初めまして。マイク・ミラーです。アメリカから来ました。どうぞよろしくお願いします。', romaji: 'Hajimemashite. Maiku Miraa desu. Amerika kara kimashita. Douzo yoroshiku onegai-shimasu.', arti: 'Salam kenal. Saya Mike Miller. Saya datang dari Amerika. Mohon bimbingan dan kerja samanya.' },
        { pembicara: '佐藤 (Satou)', role: 'Kolega Senior', jepang: '佐藤です。ミラーさん、初めまして。IMCへようこそ！', romaji: 'Satou desu. Miraa-san, hajimemashite. IMC e youkoso!', arti: 'Saya Satou. Salam kenal, Tuan Miller. Selamat datang di IMC!' },
        { pembicara: '田中 (Tanaka)', role: 'Manajer Seksi', jepang: '田中です。ミラーさんは会社の社員ですか、それとも研修生ですか。', romaji: 'Tanaka desu. Miraa-san wa kaisha no shain desu ka, soretomo kenshuusei desu ka.', arti: 'Saya Tanaka. Apakah Tuan Miller karyawan tetap perusahaan atau peserta pelatihan?' },
        { pembicara: 'ミラー (Miller)', role: 'Karyawan Baru', jepang: '社員です。専門はコンピューターです。これから一生懸命頑張ります！', romaji: 'Shain desu. Senmon wa konpyuutaa desu. Korekara isshoukenmei gambarimasu!', arti: 'Saya karyawan tetap. Bidang keahlian saya komputer. Mulai sekarang saya akan berjuang dengan sungguh-sungguh!' },
        { pembicara: '佐藤 (Satou)', role: 'Kolega Senior', jepang: 'こちらこそ、よろしくお願いします。困ったことがあれば、何でも聞いてくださいね。', romaji: 'Kochira koso, yoroshiku onegai-shimasu. Komatta koto ga areba, nandemo kiite kudasai ne.', arti: 'Kami pun juga mohon kerja samanya. Kalau ada hal yang menyulitkan, tanyakan apa saja ya.' }
      ],
      catatanBudaya: 'Orang Jepang saat mengucapkan "初めまして" dan "どうぞよろしくお願いします" selalu melakukan ojigi (membungkuk sekitar 15-30 derajat) sambil menatap lantai sejenak. Ini simbol kerendahan hati dan kesiapan membuka hubungan baik.'
    },
    sakubun: {
      judul: '私の自己紹介 (Perkenalan Diri Saya yang Lengkap)',
      judulRomaji: 'Watashi no Jikoshoukai',
      judulArti: 'Karangan Perkenalan Diri Lengkap & Rapi untuk Disalin',
      teksLengkapJepang: '初めまして。私の名前はアリフです。インドネシアのジャカルタから来ました。今年二十二歳です。私はサクラ大学の留学生です。専攻は情報工学です。私の家族は五人です。父と母と兄と妹、そして私です。私の趣味は日本の本を読むことと、写真を撮ることです。日本のアニメも大好きです。日本語は少し難しいですが、とても面白いと思います。これから毎日一生懸命勉強します。みなさん、どうぞよろしくお願いします。',
      fullArti: 'Salam kenal. Nama saya adalah Arif. Saya datang dari Jakarta, Indonesia. Tahun ini saya berumur 22 tahun. Saya adalah mahasiswa asing di Universitas Sakura. Jurusan saya adalah Teknik Informatika. Keluarga saya ada 5 orang: Ayah, Ibu, Kakak laki-laki, Adik perempuan, dan saya. Hobi saya adalah membaca buku Jepang dan mengambil foto. Saya juga sangat suka anime Jepang. Bahasa Jepang sedikit sulit, tetapi menurut saya sangat menarik. Mulai sekarang saya akan belajar dengan sungguh-sungguh setiap hari. Semuanya, mohon bimbingan dan kerja samanya.',
      panduanMenulis: 'Salinlah karangan ini ke buku tulismu baris demi baris. Perhatikan penulisan kanji 私, 名前, 来, 歳, 学生, 家族, 趣味, 読, 撮, 難, 思, 勉, 強. Tuliskan juga furigananya di atas kanji seperti format buku cetak!',
      tipsMembaca: 'Ucapkan kalimatnya dengan lantang sambil menggerakkan pena. Membaca bersuara mempercepat koneksi antara bentuk kanji, bunyi bacaan, dan maknanya di otak.',
      kalimatBedah: [
        {
          kalimatNo: 1,
          kalimatJepang: '初めまして。私の名前はアリフです。',
          romaji: 'Hajimemashite. Watashi no namae wa Arifu desu.',
          terjemahan: 'Salam kenal. Nama saya adalah Arif.',
          kanjiList: [
            { kanji: '初', caraBaca: 'はじ (haji)', arti: 'awal / pertama kali', tipsIngat: 'Radikal baju (衤) + pisau (刀) = menggunting kain pertama kali saat membuat baju.' },
            { kanji: '私', caraBaca: 'わたし (watashi)', arti: 'saya / pribadi', tipsIngat: 'Radikal bulir padi (禾) + pribadi (ム) = kepemilikan pribadi / saya.' },
            { kanji: '名前', caraBaca: 'なまえ (namae)', arti: 'nama', tipsIngat: '名 (mulut di malam hari untuk panggil nama) + 前 (depan).' }
          ],
          bunpouBedah: [
            { pola: '初めまして', namaPola: 'Salam Pembuka', penjelasan: 'Berasal dari kata kerja 初める (memulai). Dipakai KHUSUS untuk orang yang baru pertama kali ditemui.', levelCatatan: 'Bab 1 Dasar' },
            { pola: 'N1 の N2', namaPola: 'Partikel Kepemilikan / Penjelas (の)', penjelasan: 'Menyatakan "milik" atau "bagian dari". 私の名前 = nama saya.', levelCatatan: 'Bab 1 Dasar' },
            { pola: 'N1 は N2 です', namaPola: 'Partikel Topik (は) + Kopula Sopan (です)', penjelasan: 'Partikel は dibaca "wa", menegaskan bahwa "Nama saya" adalah topik utama, dan predikatnya adalah nama Anda.', levelCatatan: 'Bab 1 Dasar' }
          ]
        },
        {
          kalimatNo: 2,
          kalimatJepang: 'インドネシアのジャカルタから来ました。',
          romaji: 'Indoneshia no Jakaruta kara kimashita.',
          terjemahan: 'Saya datang dari Jakarta, Indonesia.',
          kanjiList: [
            { kanji: '来', caraBaca: 'き (ki)', arti: 'datang', tipsIngat: 'Berasal dari kata 来ます (kimasu) bentuk lampau 来ました (kimashita).' }
          ],
          bunpouBedah: [
            { pola: '[Tempat] から来ました', namaPola: 'Pola Asal / Kedatangan (Bab 5 & ungkapan baku)', penjelasan: 'から artinya "dari" dan 来ました artinya "sudah datang". Secara idiomatis dipakai untuk memperkenalkan daerah/negara asal kelahiran.', levelCatatan: 'Pola Bab 5 (diperkenalkan awal)' },
            { pola: '[Negara] の [Kota]', namaPola: 'Partikel Penjelas (の)', penjelasan: 'Dalam bahasa Jepang urutan selalu dari lingkup besar ke kecil: Indonesia dulu, baru Jakarta.', levelCatatan: 'Bab 1 Dasar' }
          ]
        },
        {
          kalimatNo: 3,
          kalimatJepang: '今年二十二歳です。',
          romaji: 'Kotoshi nijuuni-sai desu.',
          terjemahan: 'Tahun ini saya berumur 22 tahun.',
          kanjiList: [
            { kanji: '今年', caraBaca: 'ことし (kotoshi)', arti: 'tahun ini', tipsIngat: '今 (sekarang) + 年 (tahun).' },
            { kanji: '歳', caraBaca: 'さい (sai)', arti: 'tahun (satuan umur)', tipsIngat: 'Penghitung usia orang. Sering juga ditulis 才 secara informal.' }
          ],
          bunpouBedah: [
            { pola: '[Angka] + 歳です', namaPola: 'Satuan Umur', penjelasan: 'Angka diikuti 歳 (sai). Contoh: 二十二歳 (nijuuni-sai). Pengecualian umur 20 tahun dibaca khusus: 二十歳 (hatachi).', levelCatatan: 'Bab 1 Dasar' }
          ]
        },
        {
          kalimatNo: 4,
          kalimatJepang: '私はサクラ大学の留学生です。専攻は情報工学です。',
          romaji: 'Watashi wa Sakura daigaku no ryuugakusei desu. Senkou wa jouhou kougaku desu.',
          terjemahan: 'Saya adalah mahasiswa asing di Universitas Sakura. Jurusan saya adalah Teknik Informatika.',
          kanjiList: [
            { kanji: '大学', caraBaca: 'だいがく (daigaku)', arti: 'universitas', tipsIngat: '大 (besar) + 学 (belajar).' },
            { kanji: '留学生', caraBaca: 'りゅうがくせい (ryuugakusei)', arti: 'mahasiswa asing', tipsIngat: '留 (tinggal) + 学 (belajar) + 生 (pelajar).' },
            { kanji: '専攻', caraBaca: 'せんこう (senkou)', arti: 'jurusan / spesialisasi', tipsIngat: 'Sinonim dengan 専門 (senmon) di Bab 1.' }
          ],
          bunpouBedah: [
            { pola: '[Instansi] の [Status]', namaPola: 'Partikel Afiliasi (の)', penjelasan: 'Partikel の menghubungkan tempat belajar/kerja dengan status: サクラ大学の留学生 = mahasiswa asing milik/afiliasi Univ. Sakura.', levelCatatan: 'Bab 1 Dasar' }
          ]
        },
        {
          kalimatNo: 5,
          kalimatJepang: '私の家族は五人です。父と母と兄と妹、そして私です。',
          romaji: 'Watashi no kazoku wa gonin desu. Chichi to haha to ani to imouto, soshite watashi desu.',
          terjemahan: 'Keluarga saya ada 5 orang: Ayah, Ibu, Kakak laki-laki, Adik perempuan, dan saya.',
          kanjiList: [
            { kanji: '家族', caraBaca: 'かぞく (kazoku)', arti: 'keluarga', tipsIngat: '家 (rumah) + 族 (kelompok/klan).' },
            { kanji: '五人', caraBaca: 'ごにん (gonin)', arti: '5 orang', tipsIngat: 'Satuan orang memakai 〜人 (nin).' },
            { kanji: '父', caraBaca: 'ちち (chichi)', arti: 'ayah (sendiri)', tipsIngat: 'Untuk ayah orang lain gunakan お父さん (otousan).' },
            { kanji: '母', caraBaca: 'はは (haha)', arti: 'ibu (sendiri)', tipsIngat: 'Untuk ibu orang lain gunakan お母さん (okaasan).' },
            { kanji: '兄', caraBaca: 'あに (ani)', arti: 'kakak laki-laki', tipsIngat: 'Mulut (口) di atas kaki orang (儿).' },
            { kanji: '妹', caraBaca: 'いもうと (imouto)', arti: 'adik perempuan', tipsIngat: 'Wanita (女) yang belum dewasa (未).' }
          ],
          bunpouBedah: [
            { pola: 'N1 と N2 と N3', namaPola: 'Partikel Penghubung Lengkap (と)', penjelasan: 'Partikel と berarti "dan" untuk mendaftar benda secara lengkap tuntas.', levelCatatan: 'Bab 4 & Bab 11' },
            { pola: 'そして', namaPola: 'Kata Sambung (Dan kemudian / Lalu)', penjelasan: 'Dipakai untuk menyambung elemen terakhir dalam daftar perincian.', levelCatatan: 'Kata Sambung Alami' }
          ]
        },
        {
          kalimatNo: 6,
          kalimatJepang: '私の趣味は日本の本を読むことと、写真を撮ることです。日本のアニメも大好きです。',
          romaji: 'Watashi no shumi wa Nihon no hon o yomu koto to, shashin o toru koto desu. Nihon no anime mo daisuki desu.',
          terjemahan: 'Hobi saya adalah membaca buku Jepang dan mengambil foto. Saya juga sangat suka anime Jepang.',
          kanjiList: [
            { kanji: '趣味', caraBaca: 'しゅみ (shumi)', arti: 'hobi / minat', tipsIngat: 'Berasal dari Bab 18.' },
            { kanji: '本', caraBaca: 'ほん (hon)', arti: 'buku / asal usul', tipsIngat: 'Pohon (木) yang diberi garis akar di bawah.' },
            { kanji: '読', caraBaca: 'よ (yo)', arti: 'membaca', tipsIngat: 'Kata (言) + menjual/mengulang (売).' },
            { kanji: '写真', caraBaca: 'しゃしん (shashin)', arti: 'foto', tipsIngat: '写 (menyalin) + 真 (kebenaran).' },
            { kanji: '撮', caraBaca: 'と (to)', arti: 'memotret / mengambil gambar', tipsIngat: 'Tangan (扌) + telinga/fokus (最).' },
            { kanji: '大好', caraBaca: 'だいす (daisu)', arti: 'sangat suka', tipsIngat: '大 (besar/sangat) + 好き (suka).' }
          ],
          bunpouBedah: [
            { pola: '趣味は [Bentuk Kamus] ことです', namaPola: 'Menyatakan Hobi (Pola Bab 18)', penjelasan: 'Kata kerja bentuk kamus (読む, 撮る) diberi こと (koto) agar berubah jadi kata benda ("hal membaca", "hal memotret"). Sangat alami dalam perkenalan!', levelCatatan: 'Pola Bab 18 (Sangat Populer)' },
            { pola: '〜も 大好きです', namaPola: 'Partikel "Juga" (も) + Derajat Suka', penjelasan: 'も menggantikan が pada pola 好きです untuk menyatakan "juga sangat suka".', levelCatatan: 'Bab 9 & Bab 1' }
          ]
        },
        {
          kalimatNo: 7,
          kalimatJepang: '日本語は少し難しいですが、とても面白いと思います。',
          romaji: 'Nihongo wa sukoshi muzukashii desu ga, totemo omoshiroi to omoimasu.',
          terjemahan: 'Bahasa Jepang sedikit sulit, tetapi menurut saya sangat menarik.',
          kanjiList: [
            { kanji: '難', caraBaca: 'むずか (muzuka)', arti: 'sulit / sukar', tipsIngat: 'Kata sifat 難しい (muzukashii) dari Bab 8.' },
            { kanji: '面白', caraBaca: 'おもしろ (omoshiro)', arti: 'menarik / menyenangkan', tipsIngat: '面 (wajah) + 白 (putih/bersinar) = 面白い (omoshiroi).' },
            { kanji: '思', caraBaca: 'おも (omo)', arti: 'berpikir / mengira', tipsIngat: 'Ladang (田) di atas hati (心) = berpikir dari dalam hati.' }
          ],
          bunpouBedah: [
            { pola: 'Kalimat 1 が、Kalimat 2', namaPola: 'Kata Penghubung Tetapi (が)', penjelasan: 'Partikel が di akhir klausa bermakna "tetapi" yang santun dan halus.', levelCatatan: 'Bab 8' },
            { pola: '[Bentuk Biasa] + と思います', namaPola: 'Menyatakan Pendapat Pribadi (Bab 21)', penjelasan: 'Bentuk ini sopan dan menunjukkan bahwa ini adalah kesan pribadi ("saya pikir / menurut saya"). Sangat dewasa dan berbobot dalam karangan!', levelCatatan: 'Pola Bab 21 (Diperkenalkan Gamblang)' }
          ]
        },
        {
          kalimatNo: 8,
          kalimatJepang: 'これから毎日一生懸命勉強します。みなさん、どうぞよろしくお願いします。',
          romaji: 'Korekara mainichi isshoukenmei benkyou-shimasu. Minasan, douzo yoroshiku onegai-shimasu.',
          terjemahan: 'Mulai sekarang saya akan belajar dengan sungguh-sungguh setiap hari. Semuanya, mohon bimbingan dan kerja samanya.',
          kanjiList: [
            { kanji: '毎日', caraBaca: 'まいにち (mainichi)', arti: 'setiap hari', tipsIngat: '毎 (setiap) + 日 (hari).' },
            { kanji: '一生懸命', caraBaca: 'いっしょうけんめい (isshoukenmei)', arti: 'sekuat tenaga / sungguh-sungguh', tipsIngat: 'Frasa emas orang Jepang untuk tekad belajar.' },
            { kanji: '勉強', caraBaca: 'べんきょう (benkyou)', arti: 'belajar', tipsIngat: '勉 (berusaha keras) + 強 (kuat).' }
          ],
          bunpouBedah: [
            { pola: 'これから + Kata Kerja ます', namaPola: 'Menyatakan Tekad ke Depan', penjelasan: 'これから berarti "mulai sekarang / ke depannya". Diikuti kata kerja bentuk ます menyatakan janji atau tekad positif.', levelCatatan: 'Bab 4 & Bab 13' },
            { pola: 'どうぞよろしくお願いします', namaPola: 'Salam Penutup Kerjasama Mutlak', penjelasan: 'Ungkapan wajib penutup perkenalan di Jepang. Menyiratkan kerendahan hati: "Mohon perlakukan dan bimbing saya dengan baik".', levelCatatan: 'Bab 1 Frasa Kunci' }
          ]
        }
      ]
    },
    worksheet: {
      instruksiBuku: 'Siapkan buku catatan tulismu (buku kotak-kotak atau bergaris). Salin kanji di bawah ini ke dalam kotak berpetak sebanyak 5 kali sambil melafalkan bacaan kunyomi dan onyomi-nya. Kemudian salin 3 kalimat latihan perkenalan ke bukumu!',
      kanjiList: [
        { kanji: '私', onyomi: 'シ (shi)', kunyomi: 'わたし (watashi)', arti: 'saya / pribadi', jumlahGuratan: 7, kotobaContoh: '私 (watashi), 私立 (shiritsu - swasta)', kotobaArti: 'saya, swasta' },
        { kanji: '人', onyomi: 'ジン・ニン (jin/nin)', kunyomi: 'ひと (hito)', arti: 'orang', jumlahGuratan: 2, kotobaContoh: '日本人 (nihonjin), 三人 (sannin)', kotobaArti: 'orang Jepang, 3 orang' },
        { kanji: '先', onyomi: 'セン (sen)', kunyomi: 'さき (saki)', arti: 'dahulu / awal', jumlahGuratan: 6, kotobaContoh: '先生 (sensei), 先週 (senshuu)', kotobaArti: 'guru, minggu lalu' },
        { kanji: '生', onyomi: 'セイ・ショウ (sei/shou)', kunyomi: 'い・う・は (i/u/ha)', arti: 'hidup / lahir / murid', jumlahGuratan: 5, kotobaContoh: '学生 (gakusei), 生まれます (umaremasu)', kotobaArti: 'pelajar, lahir' },
        { kanji: '学', onyomi: 'ガク (gaku)', kunyomi: 'まな (mana)', arti: 'belajar / ilmu', jumlahGuratan: 8, kotobaContoh: '大学 (daigaku), 学校 (gakkou)', kotobaArti: 'universitas, sekolah' },
        { kanji: '名', onyomi: 'メイ・ミョウ (mei/myou)', kunyomi: 'な (na)', arti: 'nama / terkenal', jumlahGuratan: 6, kotobaContoh: '名前 (namae), 有名 (yuumei)', kotobaArti: 'nama, terkenal' },
        { kanji: '日', onyomi: 'ニチ・ジツ (nichi/jitsu)', kunyomi: 'ひ・か (hi/ka)', arti: 'matahari / hari', jumlahGuratan: 4, kotobaContoh: '日本 (nihon), 日曜日 (nichiyoubi)', kotobaArti: 'Jepang, hari Minggu' },
        { kanji: '本', onyomi: 'ホン (hon)', kunyomi: 'もと (moto)', arti: 'buku / asal / akar', jumlahGuratan: 5, kotobaContoh: '本 (hon), 日本 (nihon)', kotobaArti: 'buku, Jepang' }
      ],
      latihanSalinKalimat: [
        { no: 1, jepang: '初めまして、私はインドネシア人です。どうぞよろしくお願いします。', romaji: 'Hajimemashite, watashi wa Indoneshia-jin desu. Douzo yoroshiku onegai-shimasu.', arti: 'Salam kenal, saya adalah orang Indonesia. Mohon bimbingannya.', instruksi: 'Tulis huruf kanji 私 dan 人 dengan proporsional di bukumu.' },
        { no: 2, jepang: '山田さんは大学の先生です。ミラーさんは会社員です。', romaji: 'Yamada-san wa daigaku no sensei desu. Miraa-san wa kaishain desu.', arti: 'Pak Yamada adalah dosen universitas. Tuan Miller adalah karyawan.', instruksi: 'Perhatikan partikel の sebagai penghubung status dan instansi.' },
        { no: 3, jepang: '私の趣味は本を読むことです。毎日日本語を勉強します。', romaji: 'Watashi no shumi wa hon o yomu koto desu. Mainichi nihongo o benkyou-shimasu.', arti: 'Hobi saya adalah membaca buku. Setiap hari saya belajar bahasa Jepang.', instruksi: 'Latihan membuat garis guratan kanji 本 dan 毎 dengan urutan yang benar.' }
      ],
      soalHarian: [
        {
          id: 'b1-q1',
          pertanyaan: 'Bagaimana cara membaca partikel は pada kalimat "私は学生です"?',
          tipe: 'pilihan',
          pilihan: ['ha', 'wa', 'ba', 'ya'],
          jawabanBenar: 'wa',
          pembahasan: 'Huruf は saat berfungsi sebagai partikel penunjuk topik kalimat SELALU dilafalkan "wa", bukan "ha".'
        },
        {
          id: 'b1-q2',
          pertanyaan: 'Lengkapi kalimat penyangkalan: "ミラーさんは先生＿＿＿＿。"',
          tipe: 'pilihan',
          pilihan: ['です', 'ではありません', 'でした', 'ます'],
          jawabanBenar: 'ではありません',
          pembahasan: 'Bentuk penyangkalan formal dari です adalah ではありません (atau じゃありません dalam ragam lisan santai).'
        },
        {
          id: 'b1-q3',
          pertanyaan: 'Manakah ungkapan yang benar saat menyebut profesi diri sendiri?',
          tipe: 'pilihan',
          pilihan: ['私は先生です。', '私は教師です。', '私は先生さんです。', '私は社長様です。'],
          jawabanBenar: '私は教師です。',
          pembahasan: 'Sensei (先生) adalah sebutan kehormatan untuk orang lain (guru/dokter). Saat menyebut profesi diri sendiri kepada orang lain, gunakan 教師 (kyoushi).'
        }
      ]
    }
  },
  2: {
    nomor: 2,
    judulJepang: 'これ、それ、あれ',
    judulFurigana: 'これ、それ、あれ',
    judulRomaji: 'Kore, Sore, Are',
    judulArti: 'Penunjuk Benda & Kepemilikan',
    pengantar: 'Sekarang kita belajar menunjuk benda. Bayangkan kamu lagi di toko atau di meja belajarmu: "Ini apa?", "Itu punya siapa?". Kuncinya cuma satu: jarak dari kamu dan lawan bicaramu!',
    tipsHafalan: 'Kata yang ditulis katakana (ノート, カメラ, テレビ, ラジオ, カード) adalah serapan bahasa asing, tebakannya gampang. Fokuskan energi hafalan ke kanji: 本 (buku), 鍵 (kunci), 傘 (payung), 鞄 (tas), 靴 (sepatu), 机 (meja)!',
    bunpou: [
      {
        nomor: 1,
        rumus: 'これ / それ / あれ は N です',
        arti: '= Ini / Itu / Itu (jauh) adalah N',
        penjelasan: 'Tiga kata ini berdiri sendiri sebagai kata ganti penunjuk benda tanpa perlu menempel langsung di depan kata benda. これ dekat si pembicara. それ dekat lawan bicara. あれ jauh dari kedua orang yang sedang mengobrol.',
        contoh: [
          { jepang: 'これは本です。', arti: 'Ini adalah buku.' },
          { jepang: 'それは日本語の辞書です。', arti: 'Itu adalah kamus bahasa Jepang.' },
          { jepang: 'あれは何ですか。', arti: 'Itu (di sana) apa?' }
        ],
        tips: 'Pertanyaan sakti: "これは何ですか" (Kore wa nan desu ka) = Ini apa?'
      },
      {
        nomor: 2,
        rumus: 'この / その / あの + N は ... です',
        arti: '= N ini / N itu / N itu (jauh) adalah ...',
        penjelasan: 'Bila kamu ingin langsung menyebut bendanya (misal: "buku ini", "kunci itu"), WAJIB memakai この / その / あの yang menempel tepat di depan kata benda. Tidak boleh berdiri sendiri tanpa kata benda!',
        contoh: [
          { jepang: 'この本は私のです。', arti: 'Buku ini milik saya.' },
          { jepang: 'その鍵は田中さんのです。', arti: 'Kunci itu milik Pak Tanaka.' },
          { jepang: 'あの傘は誰のですか。', arti: 'Payung di sana itu milik siapa?' }
        ],
        tips: 'Ingat kuncinya: これ (mandiri berdiri sendiri) vs この + Kata Benda (harus gandengan).'
      },
      {
        nomor: 3,
        rumus: '誰の N ですか',
        arti: '= N milik siapa?',
        penjelasan: 'Partikel の menyatakan kepemilikan ("milik/punya"). 誰の (dare no) artinya "punya siapa". Pada kalimat jawaban, bendanya boleh dihilangkan jika sudah jelas: 私の (punya saya).',
        contoh: [
          { jepang: 'これは誰の鞄ですか。', arti: 'Ini tas siapa?' },
          { jepang: '私のです。', arti: 'Milik saya.' }
        ],
        tips: 'Hemat kata: tidak usah diulang "私の鞄です", cukup sebut "私のです".'
      }
    ],
    kotoba: [
      { no: 1, kanji: '本', furigana: 'ほん', romaji: 'hon', arti: 'buku', contohJepang: 'これは本です。', contohArti: 'Ini buku.' },
      { no: 2, kanji: '辞書', furigana: 'じしょ', romaji: 'jisho', arti: 'kamus', contohJepang: 'それは日本語の辞書です。', contohArti: 'Itu kamus bahasa Jepang.' },
      { no: 3, kanji: '雑誌', furigana: 'ざっし', romaji: 'zasshi', arti: 'majalah', contohJepang: 'あれは雑誌です。', contohArti: 'Itu (di sana) majalah.' },
      { no: 4, kanji: '新聞', furigana: 'しんぶん', romaji: 'shinbun', arti: 'koran / surat kabar', contohJepang: 'この新聞は私のです。', contohArti: 'Koran ini milik saya.' },
      { no: 5, kanji: 'ノート', furigana: 'のーと', romaji: 'nooto', arti: 'buku tulis / catatan', contohJepang: 'これは私のノートです。', contohArti: 'Ini buku tulis saya.' },
      { no: 6, kanji: '手帳', furigana: 'てちょう', romaji: 'techou', arti: 'buku saku / agenda', contohJepang: 'その手帳は誰のですか。', contohArti: 'Agenda itu milik siapa?' },
      { no: 7, kanji: '名刺', furigana: 'めいし', romaji: 'meishi', arti: 'kartu nama', contohJepang: 'これは田中さんの名刺です。', contohArti: 'Ini kartu nama Pak Tanaka.' },
      { no: 8, kanji: '鉛筆', furigana: 'えんぴつ', romaji: 'enpitsu', arti: 'pensil', contohJepang: 'あの鉛筆は私のです。', contohArti: 'Pensil itu milik saya.' },
      { no: 9, kanji: 'ボールペン', furigana: 'ぼーるぺん', romaji: 'boorupen', arti: 'pulpen', contohJepang: 'あれは誰のボールペンですか。', contohArti: 'Pulpen itu milik siapa?' },
      { no: 10, kanji: '鍵', furigana: 'かぎ', romaji: 'kagi', arti: 'kunci', contohJepang: 'これは車の鍵です。', contohArti: 'Ini kunci mobil.' },
      { no: 11, kanji: '時計', furigana: 'とけい', romaji: 'tokei', arti: 'jam tangan / dinding', contohJepang: 'それはスイスの時計です。', contohArti: 'Itu jam buatan Swiss.' },
      { no: 12, kanji: '傘', furigana: 'かさ', romaji: 'kasa', arti: 'payung', contohJepang: 'あの傘は誰のですか。', contohArti: 'Payung itu milik siapa?' },
      { no: 13, kanji: '鞄', furigana: 'かばん', romaji: 'kaban', arti: 'tas', contohJepang: 'この鞄は新しいです。', contohArti: 'Tas ini baru.' },
      { no: 14, kanji: '靴', furigana: 'くつ', romaji: 'kutsu', arti: 'sepatu', contohJepang: 'これは日本の靴です。', contohArti: 'Ini sepatu buatan Jepang.' },
      { no: 15, kanji: '机', furigana: 'つくえ', romaji: 'tsukue', arti: 'meja tulis', contohJepang: 'それは私の机です。', contohArti: 'Itu meja saya.' },
      { no: 16, kanji: '椅子', furigana: 'いす', romaji: 'isu', arti: 'kursi', contohJepang: 'この椅子は高いです。', contohArti: 'Kursi ini mahal.' },
      { no: 17, kanji: '車', furigana: 'くるま', romaji: 'kuruma', arti: 'mobil', contohJepang: 'あれは日本の車です。', contohArti: 'Itu mobil buatan Jepang.' },
      { no: 18, kanji: '日本語', furigana: 'にほんご', romaji: 'nihongo', arti: 'bahasa Jepang', contohJepang: 'これは日本語の本です。', contohArti: 'Ini buku bahasa Jepang.' },
      { no: 19, kanji: '英語', furigana: 'えいご', romaji: 'eigo', arti: 'bahasa Inggris', contohJepang: 'それは英語の雑誌です。', contohArti: 'Itu majalah bahasa Inggris.' },
      { no: 20, kanji: 'カメラ', furigana: 'かめら', romaji: 'kamera', arti: 'kamera', contohJepang: 'これはドイツのカメラです。', contohArti: 'Ini kamera buatan Jerman.' },
      { no: 21, kanji: 'テレビ', furigana: 'てれび', romaji: 'terebi', arti: 'televisi', contohJepang: 'あれは新しいテレビです。', contohArti: 'Itu televisi baru.' },
      { no: 22, kanji: 'ラジオ', furigana: 'らじお', romaji: 'rajio', arti: 'radio', contohJepang: 'このラジオは小さいです。', contohArti: 'Radio ini kecil.' },
      { no: 23, kanji: 'お土産', furigana: 'おみやげ', romaji: 'omiyage', arti: 'oleh-oleh / suvenir', contohJepang: 'これは日本のお土産です。', contohArti: 'Ini oleh-oleh dari Jepang.' },
      { no: 24, kanji: '花', furigana: 'はな', romaji: 'hana', arti: 'bunga', contohJepang: 'それは何の花ですか。', contohArti: 'Itu bunga apa?' },
      { no: 25, kanji: 'カード', furigana: 'かーど', romaji: 'kaado', arti: 'kartu / kartu debit', contohJepang: 'これは私のカードです。', contohArti: 'Ini kartu saya.' }
    ],
    kaiwa: {
      judul: '文房具屋での買い物 (Membeli Alat Tulis di Toko)',
      situasi: 'Seorang mahasiswa asing berada di toko alat tulis di Tokyo dan menanyakan kepemilikan serta barang yang ada di etalase.',
      percakapan: [
        { pembicara: '店員 (Pegawai)', role: 'Pelayan Toko', jepang: 'いらっしゃいませ！何かお探しですか。', romaji: 'Irasshaimase! Nanika osagashi desu ka.', arti: 'Selamat datang! Apakah sedang mencari sesuatu?' },
        { pembicara: '留学生 (Mahasiswa)', role: 'Pembeli', jepang: 'すみません、これは何ですか。', romaji: 'Sumimasen, kore wa nan desu ka.', arti: 'Permisi, ini apa ya?' },
        { pembicara: '店員 (Pegawai)', role: 'Pelayan Toko', jepang: 'それは日本の伝統的な万年筆です。書きやすいですよ。', romaji: 'Sore wa Nihon no dentouteki na mannenhitsu desu. Kakiyasui desu yo.', arti: 'Itu adalah pulpen pena khas tradisional Jepang. Sangat enak dipakai menulis lho.' },
        { pembicara: '留学生 (Mahasiswa)', role: 'Pembeli', jepang: 'そうですか。では、あの黒いノートも日本語の練習用ですか。', romaji: 'Sou desu ka. Dewa, ano kuroi nooto mo Nihongo no renshuuyou desu ka.', arti: 'Begitu ya. Kalau begitu, apakah buku catatan hitam di sana itu juga untuk latihan bahasa Jepang?' },
        { pembicara: '店員 (Pegawai)', role: 'Pelayan Toko', jepang: 'はい、そうです。漢字のマス目があるノートです。', romaji: 'Hai, sou desu. Kanji no masume ga aru nooto desu.', arti: 'Iya, betul sekali. Itu buku catatan yang memiliki kotak-kotak berpetak untuk menulis kanji.' }
      ],
      catatanBudaya: 'Di toko alat tulis Jepang, jika menunjuk barang di dekat penjual, selalu gunakan "それ" (sore). Saat meminta penjual mengambilkan, gunakan "〜をください" (kudasai).'
    },
    sakubun: {
      judul: '私の机の上と鞄の中身 (Isi Meja Belajar dan Tasku)',
      judulRomaji: 'Watashi no Tsukue no Ue to Kaban no Nakami',
      judulArti: 'Karangan Deskripsi Barang di Meja Belajar dan Isi Tas',
      teksLengkapJepang: 'これは私の部屋の机です。机の上にいろいろな物があります。この本は日本語の教科書です。とても役に立ちます。その隣にある辞書は電子辞書です。毎日使っています。この青い手帳は私の予定表です。大切な約束がたくさん書いてあります。あれは友達にもらった時計です。スイスの時計で、宝物です。そして、この黒い鞄は私の通学用のかばんです。鞄の中にノートやペン、部屋の鍵が入っています。どれも勉強に必要な大切な物です。',
      fullArti: 'Ini adalah meja belajar di kamar saya. Di atas meja ada bermacam-macam barang. Buku ini adalah buku pelajaran bahasa Jepang. Sangat bermanfaat. Kamus yang ada di sebelahnya adalah kamus elektronik. Saya menggunakannya setiap hari. Buku agenda biru ini adalah jadwal agenda saya. Banyak janji penting tertulis di dalamnya. Jam di sebelah sana itu adalah jam yang saya terima dari teman. Itu jam buatan Swiss dan merupakan barang berharga saya. Dan tas hitam ini adalah tas pergi kuliah saya. Di dalam tas terdapat buku tulis, pulpen, serta kunci kamar. Semuanya adalah benda penting yang dibutuhkan untuk belajar.',
      panduanMenulis: 'Perhatikan pemakaian penunjuk これ, この, あれ dalam mendeskripsikan jarak barang di kamarmu saat menulis di buku catatan.',
      tipsMembaca: 'Bedakan intonasi penunjuk benda: これ berdiri sendiri, sedangkan この langsung disambung ke kata benda berikutnya.',
      kalimatBedah: [
        {
          kalimatNo: 1,
          kalimatJepang: 'これは私の部屋の机です。机の上にいろいろな物があります。',
          romaji: 'Kore wa watashi no heya no tsukue desu. Tsukue no ue ni iroiro na mono ga arimasu.',
          terjemahan: 'Ini adalah meja belajar di kamar saya. Di atas meja ada bermacam-macam barang.',
          kanjiList: [
            { kanji: '机', caraBaca: 'つくえ (tsukue)', arti: 'meja tulis', tipsIngat: 'Kayu (木) yang biasa dipakai orang duduk bersandar (几).' },
            { kanji: '上', caraBaca: 'うえ (ue)', arti: 'atas', tipsIngat: 'Garis horizontal dengan penanda titik di atasnya.' },
            { kanji: '物', caraBaca: 'もの (mono)', arti: 'barang / benda', tipsIngat: 'Sapi (牛) + bukan (勿).' }
          ],
          bunpouBedah: [
            { pola: 'これ は ... です', namaPola: 'Penunjuk Benda Dekat Pembicara', penjelasan: 'これ menggantikan benda yang berada tepat di hadapan si pembicara.', levelCatatan: 'Bab 2 Dasar' },
            { pola: '[Tempat] に [Benda] があります', namaPola: 'Menyatakan Keberadaan Benda Mati', penjelasan: 'Partikel に menandai lokasi keberadaan, partikel が menandai objek yang berada di sana.', levelCatatan: 'Pola Bab 10 (Diperkenalkan Terang)' }
          ]
        },
        {
          kalimatNo: 2,
          kalimatJepang: 'この本は日本語の教科書です。とても役に立ちます。',
          romaji: 'Kono hon wa nihongo no kyoukasho desu. Totemo yaku ni tachimasu.',
          terjemahan: 'Buku ini adalah buku pelajaran bahasa Jepang. Sangat bermanfaat.',
          kanjiList: [
            { kanji: '教科書', caraBaca: 'きょうかしょ (kyoukasho)', arti: 'buku teks / modul', tipsIngat: 'Ajar (教) + bagian (科) + buku (書).' },
            { kanji: '役立', caraBaca: 'やくた (yakuta)', arti: 'berguna / berfaedah', tipsIngat: '役に立ちます (yaku ni tachimasu) dari Bab 21.' }
          ],
          bunpouBedah: [
            { pola: 'この + N は ... です', namaPola: 'Penunjuk Terikat + Kata Benda', penjelasan: 'この wajib bergandengan langsung dengan kata benda (この本).', levelCatatan: 'Bab 2 Dasar' }
          ]
        },
        {
          kalimatNo: 3,
          kalimatJepang: 'あれは友達にもらった時計です。スイスの時計で、宝物です。',
          romaji: 'Are wa tomodachi ni moratta tokei desu. Suisu no tokei de, takaramono desu.',
          terjemahan: 'Jam di sebelah sana itu adalah jam yang saya terima dari teman. Itu jam buatan Swiss dan merupakan barang berharga saya.',
          kanjiList: [
            { kanji: '時計', caraBaca: 'とけい (tokei)', arti: 'jam tangan / arloji', tipsIngat: 'Waktu (時) + menghitung/ukur (計).' },
            { kanji: '宝物', caraBaca: 'たからもの (takaramono)', arti: 'harta karun / barang berharga', tipsIngat: 'Harta (宝) + barang (物).' }
          ],
          bunpouBedah: [
            { pola: 'あれ は ... です', namaPola: 'Penunjuk Benda Jauh dari Keduanya', penjelasan: 'あれ dipakai menunjuk benda yang terletak jauh dari pembicara maupun pendengar.', levelCatatan: 'Bab 2 Dasar' },
            { pola: '[Orang] に もらいました', namaPola: 'Menerima dari Seseorang', penjelasan: 'Partikel に di sini menandai asal pemberi barang (diterima dari teman).', levelCatatan: 'Pola Bab 7' }
          ]
        }
      ]
    },
    worksheet: {
      instruksiBuku: 'Salinlah kanji di bawah ini dengan urutan guratan yang rapi. Tuliskan masing-masing 5 kali di buku latihanmu!',
      kanjiList: [
        { kanji: '本', onyomi: 'ホン (hon)', kunyomi: 'もと (moto)', arti: 'buku / dasar', jumlahGuratan: 5, kotobaContoh: '本 (hon - buku), 日本 (nihon)', kotobaArti: 'buku, Jepang' },
        { kanji: '語', onyomi: 'ゴ (go)', kunyomi: 'かた (kata)', arti: 'bahasa / kata', jumlahGuratan: 14, kotobaContoh: '日本語 (nihongo), 英語 (eigo)', kotobaArti: 'bahasa Jepang, bahasa Inggris' },
        { kanji: '何', onyomi: 'カ (ka)', kunyomi: 'なに・なん (nani/nan)', arti: 'apa', jumlahGuratan: 7, kotobaContoh: '何 (nani), 何時 (nanji)', kotobaArti: 'apa, jam berapa' },
        { kanji: '車', onyomi: 'シャ (sha)', kunyomi: 'くるま (kuruma)', arti: 'mobil / kendaraan beroda', jumlahGuratan: 7, kotobaContoh: '車 (kuruma), 電車 (densha)', kotobaArti: 'mobil, kereta listrik' }
      ],
      latihanSalinKalimat: [
        { no: 1, jepang: 'これは日本語の辞書です。あれは英語の雑誌です。', romaji: 'Kore wa nihongo no jisho desu. Are wa eigo no zasshi desu.', arti: 'Ini adalah kamus bahasa Jepang. Itu di sana majalah bahasa Inggris.', instruksi: 'Bedakan penulisan これ dan あれ.' },
        { no: 2, jepang: 'この傘は誰のですか。それは私のです。', romaji: 'Kono kasa wa dare no desu ka. Sore wa watashi no desu.', arti: 'Payung ini milik siapa? Itu milik saya.', instruksi: 'Latih penyingkatan kepemilikan 私の.' }
      ],
      soalHarian: [
        {
          id: 'b2-q1',
          pertanyaan: 'Manakah kalimat yang secara tata bahasa BENAR?',
          tipe: 'pilihan',
          pilihan: ['このは本です。', 'この本は私のです。', 'これ本は私のです。', 'そのは辞書です。'],
          jawabanBenar: 'この本は私のです。',
          pembahasan: 'この / その / あの HARUS selalu menempel di depan kata benda (この本). Bentuk seperti "このは" atau "これ本" salah.'
        },
        {
          id: 'b2-q2',
          pertanyaan: 'Arti dari frasa "スイスの時計" adalah...',
          tipe: 'pilihan',
          pilihan: ['Jam menuju Swiss', 'Jam buatan Swiss', 'Jam yang hilang di Swiss', 'Jam tangan mahal'],
          jawabanBenar: 'Jam buatan Swiss',
          pembahasan: 'Pola [Nama Negara] の [Benda] menyatakan asal pembuatan negara benda tersebut (buatan Swiss).'
        }
      ]
    }
  },
  3: {
    nomor: 3,
    judulJepang: 'ここ、そこ、あそこ',
    judulFurigana: 'ここ、そこ、あそこ',
    judulRomaji: 'Koko, Soko, Asoko',
    judulArti: 'Penunjuk Tempat & Harga',
    pengantar: 'Bab 1 dan 2 kita menunjuk orang dan benda. Sekarang giliran tempat! Mau cari toilet di stasiun atau tanya harga barang di toko Jepang? Dua-duanya ada di bab ini, praktis banget buat bertahan hidup di Jepang.',
    tipsHafalan: 'Perhatikan kata berakhiran 〜室 (ruangan: 教室, 会議室), 〜所 (tempat: 事務所), dan 〜機 (mesin: 自動販売機). Tahu arti akhirannya, kata baru langsung gampang ditebak!',
    bunpou: [
      {
        nomor: 1,
        rumus: 'ここ / そこ / あそこ / どこ は N です',
        arti: '= Di sini / Di situ / Di sana / Di mana adalah N',
        penjelasan: 'Urutan jaraknya sama persis dengan kore/sore/are: ここ dekat pembicara, そこ dekat lawan bicara, あそこ jauh dari keduanya, dan どこ dipakai bertanya "di mana".',
        contoh: [
          { jepang: 'ここは教室です。', arti: 'Di sini adalah ruang kelas.' },
          { jepang: 'トイレはどこですか。', arti: 'Toilet di mana?' },
          { jepang: '受付はあそこです。', arti: 'Resepsionis ada di sana.' }
        ],
        tips: 'Rumus bertanya tempat: [Tempat/Benda] はどこですか。 Jawabannya: [Tempat] です。'
      },
      {
        nomor: 2,
        rumus: 'いくらですか',
        arti: '= Berapa harganya?',
        penjelasan: 'Satuan mata uang Jepang adalah 円 (dibaca en / yen). Ingat angka besar penting: 百 (hyaku = 100), 千 (sen = 1.000), 万 (man = 10.000). Orang Jepang menghitung uang per sepuluh ribu (万)!',
        contoh: [
          { jepang: 'これはいくらですか。', arti: 'Ini berapa harganya?' },
          { jepang: 'この本は千円です。', arti: 'Buku ini 1.000 yen.' },
          { jepang: 'その時計は五万円です。', arti: 'Jam itu 50.000 yen.' }
        ],
        tips: '100.000 yen dalam bahasa Jepang dibaca "十万円" (juuman-en), yaitu 10 lembar 10.000 yen.'
      }
    ],
    kotoba: [
      { no: 1, kanji: 'ここ', furigana: 'ここ', romaji: 'koko', arti: 'di sini', contohJepang: 'ここは教室です。', contohArti: 'Di sini ruang kelas.' },
      { no: 2, kanji: 'そこ', furigana: 'そこ', romaji: 'soko', arti: 'di situ', contohJepang: 'そこは食堂です。', contohArti: 'Di situ adalah kantin.' },
      { no: 3, kanji: 'あそこ', furigana: 'あそこ', romaji: 'asoko', arti: 'di sana', contohJepang: 'あそこは事務所です。', contohArti: 'Di sana kantor.' },
      { no: 4, kanji: 'どこ', furigana: 'どこ', romaji: 'doko', arti: 'di mana', contohJepang: 'トイレはどこですか。', contohArti: 'Toilet di mana?' },
      { no: 5, kanji: '教室', furigana: 'きょうしつ', romaji: 'kyoushitsu', arti: 'ruang kelas', contohJepang: '教室は二階です。', contohArti: 'Ruang kelas di lantai 2.' },
      { no: 6, kanji: '食堂', furigana: 'しょくどう', romaji: 'shokudou', arti: 'kantin / ruang makan', contohJepang: '食堂は地下です。', contohArti: 'Kantin ada di basement.' },
      { no: 7, kanji: '事務所', furigana: 'じむしょ', romaji: 'jimusho', arti: 'kantor', contohJepang: '事務所はあそこです。', contohArti: 'Kantor ada di sana.' },
      { no: 8, kanji: '会議室', furigana: 'かいぎしつ', romaji: 'kaigishitsu', arti: 'ruang rapat', contohJepang: '会議室は三階です。', contohArti: 'Ruang rapat di lantai 3.' },
      { no: 9, kanji: '受付', furigana: 'うけつけ', romaji: 'uketsuke', arti: 'meja informasi / resepsionis', contohJepang: '受付はこちらです。', contohArti: 'Resepsionis di sebelah sini.' },
      { no: 10, kanji: 'ロビー', furigana: 'ろびー', romaji: 'robii', arti: 'lobi', contohJepang: 'ロビーはここです。', contohArti: 'Lobi ada di sini.' },
      { no: 11, kanji: '部屋', furigana: 'へや', romaji: 'heya', arti: 'kamar / ruangan', contohJepang: '私の部屋はここです。', contohArti: 'Kamar saya di sini.' },
      { no: 12, kanji: 'トイレ', furigana: 'といれ', romaji: 'toire', arti: 'toilet / kamar kecil', contohJepang: 'トイレはあそこです。', contohArti: 'Toilet di sana.' },
      { no: 13, kanji: '階段', furigana: 'かいだん', romaji: 'kaidan', arti: 'tangga', contohJepang: '階段はどこですか。', contohArti: 'Tangga di mana?' },
      { no: 14, kanji: 'エレベーター', furigana: 'えれべーたー', romaji: 'erebeetaa', arti: 'lift', contohJepang: 'エレベーターはそこです。', contohArti: 'Lift ada di situ.' },
      { no: 15, kanji: 'エスカレーター', furigana: 'えすかれーたー', romaji: 'esukareetaa', arti: 'eskalator', contohJepang: 'エスカレーターは右です。', contohArti: 'Eskalator di sebelah kanan.' },
      { no: 16, kanji: '自動販売機', furigana: 'じどうはんばいき', romaji: 'jidouhanbaiki', arti: 'mesin penjual otomatis (jidohan)', contohJepang: '自動販売機はあそこです。', contohArti: 'Mesin penjual otomatis di sana.' },
      { no: 17, kanji: '電話', furigana: 'でんわ', romaji: 'denwa', arti: 'telepon', contohJepang: '電話はどこですか。', contohArti: 'Telepon di mana?' },
      { no: 18, kanji: '売り場', furigana: 'うりば', romaji: 'uriba', arti: 'counter / stan penjualan', contohJepang: '靴売り場は一階です。', contohArti: 'Stan sepatu di lantai 1.' },
      { no: 19, kanji: '地下', furigana: 'ちか', romaji: 'chika', arti: 'bawah tanah / basement', contohJepang: '地下は涼しいです。', contohArti: 'Bawah tanah sejuk.' },
      { no: 20, kanji: '階', furigana: 'かい', romaji: 'kai', arti: 'lantai (tingkat)', contohJepang: 'ここは三階です。', contohArti: 'Di sini lantai 3.' },
      { no: 21, kanji: '円', furigana: 'えん', romaji: 'en', arti: 'yen (mata uang Jepang)', contohJepang: 'これは千円です。', contohArti: 'Ini 1.000 yen.' },
      { no: 22, kanji: '百', furigana: 'ひゃく', romaji: 'hyaku', arti: 'seratus (100)', contohJepang: 'この鉛筆は百円です。', contohArti: 'Pensil ini 100 yen.' },
      { no: 23, kanji: '千', furigana: 'せん', romaji: 'sen', arti: 'seribu (1.000)', contohJepang: 'その本は千円です。', contohArti: 'Buku itu 1.000 yen.' },
      { no: 24, kanji: '万', furigana: 'まん', romaji: 'man', arti: 'sepuluh ribu (10.000)', contohJepang: 'この時計は五万円です。', contohArti: 'Jam ini 50.000 yen.' },
      { no: 25, kanji: 'お手洗い', furigana: 'おてあらい', romaji: 'otearai', arti: 'toilet (ragam sopan)', contohJepang: 'お手洗いはどちらですか。', contohArti: 'Toilet di sebelah mana?' }
    ],
    kaiwa: {
      judul: 'デパートでの案内と買い物 (Panduan & Belanja di Toserba)',
      situasi: 'Seorang pengunjung bertanya ke resepsionis toserba di Ginza untuk menemukan counter sepatu dan menanyakan harga barang.',
      percakapan: [
        { pembicara: '客 (Pelanggan)', role: 'Pengunjung', jepang: 'すみません、お手洗いはどこですか。', romaji: 'Sumimasen, otearai wa doko desu ka.', arti: 'Permisi, toilet ada di sebelah mana ya?' },
        { pembicara: '受付 (Resepsionis)', role: 'Petugas', jepang: 'あちらのエスカレーターの隣にございます。', romaji: 'Achira no esukareetaa no tonari ni gozaimasu.', arti: 'Ada di sebelah eskalator di arah sana.' },
        { pembicara: '客 (Pelanggan)', role: 'Pengunjung', jepang: '靴の売り場は何階ですか。', romaji: 'Kutsu no uriba wa nan-gai desu ka.', arti: 'Stan counter sepatu ada di lantai berapa?' },
        { pembicara: '受付 (Resepsionis)', role: 'Petugas', jepang: '二階でございます。エレベーターもご利用いただけます。', romaji: 'Nikai de gozaimasu. Erebeetaa mo goriyou itadakemasu.', arti: 'Ada di lantai 2. Anda juga dapat menggunakan lift.' },
        { pembicara: '客 (Pelanggan)', role: 'Pengunjung', jepang: 'この日本の靴はいくらですか。', romaji: 'Kono nihon no kutsu wa ikura desu ka.', arti: 'Sepatu buatan Jepang ini berapa harganya?' },
        { pembicara: '店員 (Pelayan)', role: 'Penjaga Stan', jepang: 'それは一万八千円です。', romaji: 'Sore wa ichiman hassen-en desu.', arti: 'Itu seharga 18.000 yen.' }
      ],
      catatanBudaya: 'Untuk menanyakan arah dengan lebih sopan kepada orang yang dihormati, gunakan どちら (dochira) sebagai pengganti どこ (doko).'
    },
    sakubun: {
      judul: '私の新しい職場と町の案内 (Panduan Tempat Kerja Baru dan Kotaku)',
      judulRomaji: 'Watashi no Atarashii Shokuba to Machi no Annai',
      judulArti: 'Karangan Panduan Kantor, Fasilitas Bawah Tanah, dan Biaya Hidup',
      teksLengkapJepang: 'ここは私が働く会社のビルです。このビルはとても大きくて、十階まであります。一階に受付と広いロビーがあります。私の事務所は七階です。エレベーターで上がります。地下には美味しい食堂と自動販売機があります。昼ご飯はいつも地下の食堂で食べます。定食はたったの六百円です。とても安くて美味しいです。ビルの向かい側に大きな郵便局と銀行があります。生活に必要な場所が全部近くにあるので、とても便利です。',
      fullArti: 'Di sini adalah gedung kantor tempat saya bekerja. Gedung ini sangat besar dan memiliki sampai 10 lantai. Di lantai 1 terdapat bagian resepsionis dan lobi yang luas. Kantor saya berada di lantai 7. Saya naik menggunakan lift. Di ruang bawah tanah (basement) terdapat kantin yang lezat serta mesin penjual minuman otomatis. Makan siang selalu saya santap di kantin bawah tanah. Paket menu makan siang hanya seharga 600 yen. Sangat murah dan lezat. Di seberang gedung kantor ada kantor pos besar dan bank. Karena semua tempat yang dibutuhkan untuk kehidupan sehari-hari berada di dekat sini, tempat ini sangat praktis.',
      panduanMenulis: 'Salinlah ke buku catatanmu dengan mencermati kanji tempat: 屋 (heya), 階 (lantai), 地下 (bawah tanah), serta satuan uang 百 (ratusan) dan 円 (yen).',
      tipsMembaca: 'Latih pembacaan angka lantai: lantai 1 = いっかい (ikkai), lantai 3 = さんがい (sangai - berbunyi ga), lantai 6 = ろっかい (rokkai).',
      kalimatBedah: [
        {
          kalimatNo: 1,
          kalimatJepang: 'ここは私が働く会社のビルです。このビルは十階まであります。',
          romaji: 'Koko wa watashi ga hataraku kaisha no biru desu. Kono biru wa jikkai made arimasu.',
          terjemahan: 'Di sini adalah gedung kantor tempat saya bekerja. Gedung ini memiliki sampai 10 lantai.',
          kanjiList: [
            { kanji: '階', caraBaca: 'かい (kai) / がい (gai)', arti: 'lantai', tipsIngat: 'Telinga (阝) + semuanya (皆).' }
          ],
          bunpouBedah: [
            { pola: 'ここ は ... です', namaPola: 'Penunjuk Tempat Di Sini', penjelasan: 'ここ menunjuk area fisik tempat pembicara berada sekarang.', levelCatatan: 'Bab 3 Dasar' },
            { pola: '〜まで あります', namaPola: 'Sampai dengan', penjelasan: 'まで berarti "sampai". 十階まで = sampai lantai 10.', levelCatatan: 'Bab 4 & Bab 3' }
          ]
        },
        {
          kalimatNo: 2,
          kalimatJepang: '定食はたったの六百円です。とても安くて美味しいです。',
          romaji: 'Teishoku wa tatta no roppyaku-en desu. Totemo yasukute oishii desu.',
          terjemahan: 'Paket menu makan siang hanya 600 yen. Sangat murah dan lezat.',
          kanjiList: [
            { kanji: '百', caraBaca: 'ひゃく (hyaku) / ぴゃく (pyaku)', arti: 'ratus (100)', tipsIngat: 'Satu (一) + putih (白).' },
            { kanji: '円', caraBaca: 'えん (en)', arti: 'lingkaran / mata uang yen', tipsIngat: 'Bentuk kotak dengan gerbang di bawah.' }
          ],
          bunpouBedah: [
            { pola: '[Angka] + 円', namaPola: 'Satuan Mata Uang Jepang', penjelasan: 'Ratusan berbunyi khusus: 300 = さんびゃく (sanbyaku), 600 = ろっぴゃく (roppyaku), 800 = はっぴゃく (happyaku).', levelCatatan: 'Bab 3 Dasar' }
          ]
        }
      ]
    },
    worksheet: {
      instruksiBuku: 'Tuliskan kanji angka dan tempat berikut ke dalam buku berpetakmu sebanyak 5 kali!',
      kanjiList: [
        { kanji: '百', onyomi: 'ヒャク (hyaku)', kunyomi: 'もも (momo)', arti: 'seratus', jumlahGuratan: 6, kotobaContoh: '百円 (hyakuen), 六百 (roppyaku)', kotobaArti: '100 yen, 600' },
        { kanji: '千', onyomi: 'セン (sen)', kunyomi: 'ち (chi)', arti: 'seribu', jumlahGuratan: 3, kotobaContoh: '千円 (sen\'en), 三千 (sanzen)', kotobaArti: '1.000 yen, 3.000' },
        { kanji: '万', onyomi: 'マン・バン (man/ban)', kunyomi: 'よろず (yorozu)', arti: 'sepuluh ribu', jumlahGuratan: 3, kotobaContoh: '一万円 (ichiman\'en)', kotobaArti: '10.000 yen' },
        { kanji: '円', onyomi: 'エン (en)', kunyomi: 'まる (maru)', arti: 'yen / bulat', jumlahGuratan: 4, kotobaContoh: '五百円 (gohyakuen)', kotobaArti: '500 yen' }
      ],
      latihanSalinKalimat: [
        { no: 1, jepang: 'ここは受付です。電話はあそこです。', romaji: 'Koko wa uketsuke desu. Denwa wa asoko desu.', arti: 'Di sini adalah resepsionis. Telepon ada di sana.', instruksi: 'Tuliskan huruf kanji 受付 dan 電話 secara rapi.' },
        { no: 2, jepang: 'この時計は五千円です。その靴は一万円です。', romaji: 'Kono tokei wa gosen-en desu. Sono kutsu wa ichiman-en desu.', arti: 'Jam ini 5.000 yen. Sepatu itu 10.000 yen.', instruksi: 'Latih penulisan angka kanji ribuan dan puluhan ribu.' }
      ],
      soalHarian: [
        {
          id: 'b3-q1',
          pertanyaan: 'Bagaimana cara membaca angka 100.000 yen dalam bahasa Jepang?',
          tipe: 'pilihan',
          pilihan: ['百千円 (hyakusen-en)', '十万円 (juuman-en)', '一万千円 (ichimansen-en)', '千万円 (senman-en)'],
          jawabanBenar: '十万円 (juuman-en)',
          pembahasan: 'Satuan hitung Jepang bergerak per 10.000 (万). 100.000 dihitung sebagai 10 kali 10.000 = 十万 (juuman).'
        }
      ]
    }
  },
  4: {
    nomor: 4,
    judulJepang: '何時ですか',
    judulFurigana: 'なんじですか',
    judulRomaji: 'Nanji desu ka',
    judulArti: 'Jam & Kegiatan Sehari-hari',
    pengantar: 'Waktunya belajar jam dan aktivitas harian! Setelah bab ini kamu bisa bilang jam berapa bangun, jam berapa mulai bekerja, dan sampai jam berapa istirahat. Cocok banget buat bekal hidup dan kerja disiplin di Jepang!',
    tipsHafalan: 'Waktu dalam sehari berurutan: 朝 (pagi) → 昼 (siang) → 晩 (petang/malam) → 夜 (malam hari larut). Hafalkan sebagai satu rangkaian satu hari utuh!',
    bunpou: [
      {
        nomor: 1,
        rumus: '[Angka] 時 [Angka] 分 です',
        arti: '= Jam ... menit ...',
        penjelasan: '時 (ji) untuk jam, 分 (fun / pun) untuk menit. Ada pengucapan khusus yang wajib diingat: jam 4 = よじ (yoji), jam 7 = しちじ (shichiji), jam 9 = くじ (kuji).',
        contoh: [
          { jepang: '今、九時十五分です。', arti: 'Sekarang jam 9.15.' },
          { jepang: '会議は三時半です。', arti: 'Rapat jam 3.30 (setengah 4).' }
        ],
        tips: 'Menit 30 bisa dibilang 半 (han), misalnya: 七時半 (shichiji han = jam setengah delapan).'
      },
      {
        nomor: 2,
        rumus: '〜 から 〜 まで',
        arti: '= Dari ... sampai ...',
        penjelasan: 'から (kara) artinya "dari/mulai", まで (made) artinya "sampai/hingga". Berlaku untuk rentang waktu (jam, hari) maupun rentang tempat jarak.',
        contoh: [
          { jepang: '九時から五時まで働きます。', arti: 'Bekerja dari jam 9 sampai jam 5.' },
          { jepang: '銀行は九時から三時までです。', arti: 'Bank buka dari jam 9 sampai jam 3.' }
        ],
        tips: 'Bisa dipakai sendiri-sendiri, misalnya: 昼休みは十二時からです (Istirahat siang mulai jam 12).'
      },
      {
        nomor: 3,
        rumus: '[Waktu yang pasti] に [Kata Kerja]',
        arti: '= Melakukan ... pada jam/tanggal ...',
        penjelasan: 'Partikel に dipakai pada waktu yang mengandung angka pasti (jam, tanggal, hari dalam seminggu). Kata keterangan waktu nisbi seperti 今日 (hari ini), 明日 (besok), 毎朝 (setiap pagi) TIDAK memakai partikel に.',
        contoh: [
          { jepang: '毎朝、六時に起きます。', arti: 'Setiap pagi bangun jam 6.' },
          { jepang: '十一時に寝ます。', arti: 'Tidur jam 11 malam.' }
        ],
        tips: 'Ingat baik-baik: besok (明日) dan hari ini (今日) jangan dikasih に!'
      },
      {
        nomor: 4,
        rumus: 'ます / ません / ました / ませんでした',
        arti: '= Konjugasi 4 Bentuk Kata Kerja Sopan',
        penjelasan: 'Bentuk positif masa kini/depan: 〜ます. Negatif: 〜ません. Lampau positif (sudah): 〜ました. Lampau negatif (tidak melakukan lampau): 〜ませんでした.',
        contoh: [
          { jepang: '昨日は働きました。', arti: 'Kemarin saya bekerja.' },
          { jepang: '昨日は勉強しませんでした。', arti: 'Kemarin saya tidak belajar.' }
        ],
        tips: 'Bentuk ます juga merangkap sebagai niat masa depan: 明日、働きます (Besok saya akan bekerja).'
      }
    ],
    kotoba: [
      { no: 1, kanji: '起きます', furigana: 'おきます', romaji: 'okimasu', arti: 'bangun tidur', contohJepang: '毎朝、六時に起きます。', contohArti: 'Setiap pagi bangun jam 6.' },
      { no: 2, kanji: '寝ます', furigana: 'ねます', romaji: 'nemasu', arti: 'tidur', contohJepang: '十一時に寝ます。', contohArti: 'Tidur jam 11.' },
      { no: 3, kanji: '働きます', furigana: 'はたらきます', romaji: 'hatarakimasu', arti: 'bekerja', contohJepang: '九時から五時まで働きます。', contohArti: 'Bekerja dari jam 9 sampai jam 5.' },
      { no: 4, kanji: '休みます', furigana: 'やすみます', romaji: 'yasumimasu', arti: 'istirahat / libur', contohJepang: '今日は会社を休みます。', contohArti: 'Hari ini libur kantor.' },
      { no: 5, kanji: '勉強します', furigana: 'べんきょうします', romaji: 'benkyoushStructure', arti: 'belajar', contohJepang: '晩に日本語を勉強します。', contohArti: 'Malam hari belajar bahasa Jepang.' },
      { no: 6, kanji: '終わります', furigana: 'おわります', romaji: 'owarimasu', arti: 'selesai', contohJepang: '仕事は五時に終わります。', contohArti: 'Pekerjaan selesai jam 5.' },
      { no: 7, kanji: '始まります', furigana: 'はじまります', romaji: 'hajimarimasu', arti: 'mulai', contohJepang: '会議は九時に始まります。', contohArti: 'Rapat mulai jam 9.' },
      { no: 8, kanji: 'デパート', furigana: 'でぱーと', romaji: 'depaato', arti: 'toserba / department store', contohJepang: 'デパートは十時からです。', contohArti: 'Toserba mulai jam 10.' },
      { no: 9, kanji: '銀行', furigana: 'ぎんこう', romaji: 'ginkou', arti: 'bank', contohJepang: '銀行は三時までです。', contohArti: 'Bank sampai jam 3.' },
      { no: 10, kanji: '郵便局', furigana: 'ゆうびんきょく', romaji: 'yuubinkyoku', arti: 'kantor pos', contohJepang: '郵便局は九時からです。', contohArti: 'Kantor pos mulai jam 9.' },
      { no: 11, kanji: '図書館', furigana: 'としょかん', romaji: 'toshokan', arti: 'perpustakaan', contohJepang: '図書館は月曜日休みです。', contohArti: 'Perpustakaan libur hari Senin.' },
      { no: 12, kanji: '美術館', furigana: 'びじゅつかん', romaji: 'bijutsukan', arti: 'museum seni', contohJepang: '美術館は何時までですか。', contohArti: 'Museum seni buka sampai jam berapa?' },
      { no: 13, kanji: '今', furigana: 'いま', romaji: 'ima', arti: 'sekarang', contohJepang: '今、何時ですか。', contohArti: 'Sekarang jam berapa?' },
      { no: 14, kanji: '何時', furigana: 'なんじ', romaji: 'nanji', arti: 'jam berapa', contohJepang: '何時に寝ますか。', contohArti: 'Jam berapa tidur?' },
      { no: 15, kanji: '午前', furigana: 'ごぜん', romaji: 'gozen', arti: 'pagi / AM (ante meridiem)', contohJepang: '午前九時に行きます。', contohArti: 'Pergi jam 9 pagi.' },
      { no: 16, kanji: '午後', furigana: 'ごご', romaji: 'gogo', arti: 'siang-sore / PM', contohJepang: '午後二時に休みます。', contohArti: 'Istirahat jam 2 siang.' },
      { no: 17, kanji: '朝', furigana: 'あさ', romaji: 'asa', arti: 'pagi', contohJepang: '朝、六時に起きます。', contohArti: 'Pagi bangun jam 6.' },
      { no: 18, kanji: '昼', furigana: 'ひる', romaji: 'hiru', arti: 'siang', contohJepang: '昼は食堂で食べます。', contohArti: 'Siang makan di kantin.' },
      { no: 19, kanji: '晩', furigana: 'ばん', romaji: 'ban', arti: 'malam / petang', contohJepang: '今晩、友達に会います。', contohArti: 'Nanti malam bertemu teman.' },
      { no: 20, kanji: '夜', furigana: 'よる', romaji: 'yoru', arti: 'malam (larut)', contohJepang: '夜は静かです。', contohArti: 'Malam hari sepi tenang.' },
      { no: 21, kanji: '昨日', furigana: 'きのう', romaji: 'kinou', arti: 'kemarin', contohJepang: '昨日は休みました。', contohArti: 'Kemarin libur.' },
      { no: 22, kanji: '今日', furigana: 'きょう', romaji: 'kyou', arti: 'hari ini', contohJepang: '今日は日曜日です。', contohArti: 'Hari ini hari Minggu.' },
      { no: 23, kanji: '明日', furigana: 'あした', romaji: 'ashita', arti: 'besok', contohJepang: '明日は九時に来ます。', contohArti: 'Besok datang jam 9.' },
      { no: 24, kanji: '毎日', furigana: 'まいにち', romaji: 'mainichi', arti: 'setiap hari', contohJepang: '毎日勉強します。', contohArti: 'Setiap hari belajar.' },
      { no: 25, kanji: '日曜日', furigana: 'にちようび', romaji: 'nichiyoubi', arti: 'hari Minggu', contohJepang: '日曜日は休みです。', contohArti: 'Hari Minggu libur.' }
    ],
    kaiwa: {
      judul: '銀行と図書館の営業時間 (Jam Operasional Bank dan Perpustakaan)',
      situasi: 'Miller menanyakan jam operasional bank dan perpustakaan kepada petugas resepsionis.',
      percakapan: [
        { pembicara: 'ミラー (Miller)', role: 'Karyawan', jepang: 'すみません、銀行は何時から何時までですか。', romaji: 'Sumimasen, ginkou wa nanji kara nanji made desu ka.', arti: 'Permisi, bank buka dari jam berapa sampai jam berapa?' },
        { pembicara: '受付 (Petugas)', role: 'Resepsionis', jepang: '午前九時から午後三時までです。土曜日と日曜日は休みですよ。', romaji: 'Gozen kuji kara gogo sanji made desu. Doyoubi to nichiyoubi wa yasumi desu yo.', arti: 'Dari jam 9 pagi sampai jam 3 sore. Hari Sabtu dan Minggu libur lho.' },
        { pembicara: 'ミラー (Miller)', role: 'Karyawan', jepang: 'そうですか。では、図書館は何時までですか。', romaji: 'Sou desu ka. Dewa, toshokan wa nanji made desu ka.', arti: 'Begitu ya. Kalau begitu perpustakaan sampai jam berapa?' },
        { pembicara: '受付 (Petugas)', role: 'Resepsionis', jepang: '図書館は夜八時まで開いています。仕事の後に寄れますよ。', romaji: 'Toshokan wa yoru hachiji made aite imasu. Shigoto no ato ni yoremasu yo.', arti: 'Perpustakaan buka sampai jam 8 malam. Bisa mampir setelah jam kerja.' }
      ],
      catatanBudaya: 'Bank komersial di Jepang (seperti MUFG, SMBC, Mizuho) loket fisiknya tutup tepat jam 15:00 (午後三時), sedangkan mesin ATM tetap beroperasi sampai malam.'
    },
    sakubun: {
      judul: '私の一日のスケジュール (Jadwal Keseharianku dari Pagi sampai Malam)',
      judulRomaji: 'Watashi no Ichinichi no Sukejuuru',
      judulArti: 'Karangan Rutinitas Harian Pelajar / Pekerja Mandiri',
      teksLengkapJepang: '私は毎朝六時半に起きます。まず顔を洗って、朝ご飯を食べます。それから七時四十分に家を出て、電車で学校へ行きます。授業は午前九時から始まります。十二時半から一時半まで昼休みです。食堂で友達と一緒にご飯を食べます。午後の授業は四時に終わります。放課後は図書館で五時から七時まで日本語を勉強します。夜八時に家へ帰ります。お風呂に入って、十一時半に寝ます。毎日忙しいですが、とても充実しています。',
      fullArti: 'Saya bangun setiap pagi jam 6.30. Pertama-tama saya mencuci muka lalu sarapan. Setelah itu jam 7.40 saya keluar rumah dan pergi ke sekolah naik kereta listrik. Pelajaran sekolah dimulai dari jam 9 pagi. Dari jam 12.30 sampai 1.30 adalah istirahat siang. Saya makan nasi bersama teman di kantin. Pelajaran sore berakhir pada jam 4. Sepulang sekolah, saya belajar bahasa Jepang di perpustakaan dari jam 5 sampai jam 7. Jam 8 malam saya pulang ke rumah. Saya berendam mandi air hangat, lalu tidur pada pukul 11.30. Setiap hari memang sibuk, tetapi terasa sangat memuaskan.',
      panduanMenulis: 'Perhatikan penulisan kanji jam 時, menit 分, pagi 朝, siang 昼, malam 夜 saat menyalin ke buku catatan harianmu.',
      tipsMembaca: 'Latih kelancaran membaca menit berakhiran -pun dan -fun: 10 menit = じゅっぷん (juppun), 30 menit = さんじゅっぷん (sanjuppun) atau 半 (han).',
      kalimatBedah: [
        {
          kalimatNo: 1,
          kalimatJepang: '私は毎朝六時半に起きます。それから七時四十分に家を出ます。',
          romaji: 'Watashi wa maiasa rokuji-han ni okimasu. Sorekara shichiji-yonjuppun ni ie o demasu.',
          terjemahan: 'Saya bangun setiap pagi jam 6.30. Kemudian jam 7.40 saya keluar rumah.',
          kanjiList: [
            { kanji: '時', caraBaca: 'じ (ji)', arti: 'jam / waktu', tipsIngat: 'Matahari (日) + kuil (寺).' },
            { kanji: '分', caraBaca: 'ふん (fun) / ぷん (pun)', arti: 'menit / membagi', tipsIngat: 'Delapan (八) + pisau (刀) = membagi waktu.' },
            { kanji: '半', caraBaca: 'はん (han)', arti: 'setengah', tipsIngat: 'Garis terbagi rata di tengah.' }
          ],
          bunpouBedah: [
            { pola: '[Jam] に 起きます', namaPola: 'Partikel Penanda Waktu Pasti (に)', penjelasan: 'Waktu yang berupa angka terukur wajib dipasangi partikel に.', levelCatatan: 'Bab 4 Dasar' },
            { pola: 'それから', namaPola: 'Kata Penghubung Urutan', penjelasan: 'Bermakna "setelah itu / kemudian", menyambungkan aksi pertama dengan aksi berikutnya.', levelCatatan: 'Kata Sambung' }
          ]
        },
        {
          kalimatNo: 2,
          kalimatJepang: '授業は午前九時から始まります。四時に終わります。',
          romaji: 'Jugyou wa gozen kuji kara hajimarimasu. Yoji ni owarimasu.',
          terjemahan: 'Pelajaran sekolah mulai jam 9 pagi. Berakhir jam 4 sore.',
          kanjiList: [
            { kanji: '始', caraBaca: 'はじ (haji)', arti: 'mulai', tipsIngat: 'Wanita (女) + platform (台) = permulaan.' },
            { kanji: '終', caraBaca: 'お (o)', arti: 'selesai / berakhir', tipsIngat: 'Benang (糸) + musim dingin (冬).' }
          ],
          bunpouBedah: [
            { pola: '〜から 始まります', namaPola: 'Titik Awal Waktu', penjelasan: 'から menandai titik waktu permulaan suatu kegiatan berlangsung.', levelCatatan: 'Bab 4 Dasar' },
            { pola: '四時 (よじ)', namaPola: 'Pengecualian Pengucapan Angka Jam 4', penjelasan: 'Jam 4 DIBACA よじ (yoji), TIDAK BOLEH dibaca よんじ (yonji) atau しじ (shiji).', levelCatatan: 'Aturan Khusus Bab 4' }
          ]
        }
      ]
    },
    worksheet: {
      instruksiBuku: 'Salinlah kanji waktu berikut ke buku latihanmu masing-masing 5 baris. Tulis pula cara baca menit yang benar!',
      kanjiList: [
        { kanji: '時', onyomi: 'ジ (ji)', kunyomi: 'とき (toki)', arti: 'jam / waktu', jumlahGuratan: 10, kotobaContoh: '一時 (ichiji - jam 1), 時間 (jikan)', kotobaArti: 'jam 1, durasi waktu' },
        { kanji: '分', onyomi: 'ブン・フン (bun/fun)', kunyomi: 'わ (wa)', arti: 'menit / bagian', jumlahGuratan: 4, kotobaContoh: '十分 (juppun), 分かります (wakarimasu)', kotobaArti: '10 menit, paham' },
        { kanji: '今', onyomi: 'コン (kon)', kunyomi: 'いま (ima)', arti: 'sekarang', jumlahGuratan: 4, kotobaContoh: '今 (ima), 今月 (kongetsu)', kotobaArti: 'sekarang, bulan ini' },
        { kanji: '朝', onyomi: 'チョウ (chou)', kunyomi: 'あさ (asa)', arti: 'pagi', jumlahGuratan: 12, kotobaContoh: '毎朝 (maiasa), 朝ご飯 (asagohan)', kotobaArti: 'tiap pagi, sarapan' }
      ],
      latihanSalinKalimat: [
        { no: 1, jepang: '今、九時十五分です。会議は十時からです。', romaji: 'Ima, kuji juugofun desu. Kaigi wa juuji kara desu.', arti: 'Sekarang jam 9.15. Rapat mulai dari jam 10.', instruksi: 'Tuliskan angka jam sembilan (九時) dengan tepat.' },
        { no: 2, jepang: '昨日は九時から六時まで働きました。', romaji: 'Kinou wa kuji kara rokuji made hatarakimashita.', arti: 'Kemarin saya bekerja dari jam 9 sampai jam 6.', instruksi: 'Perhatikan pemakaian bentuk lampau 働きました.' }
      ],
      soalHarian: [
        {
          id: 'b4-q1',
          pertanyaan: 'Manakah pengucapan yang benar untuk jam 4, 7, dan 9?',
          tipe: 'pilihan',
          pilihan: ['yonji, nanaji, kyuuji', 'yoji, shichiji, kuji', 'shiji, shichiji, kuji', 'yoji, nanaji, kyuuji'],
          jawabanBenar: 'yoji, shichiji, kuji',
          pembahasan: 'Jam 4 = よじ (yoji), jam 7 = しちじ (shichiji), jam 9 = くじ (kuji). Ini adalah 3 pengucapan jam khusus yang paling sering diujikan.'
        }
      ]
    }
  },
  5: {
    nomor: 5,
    judulJepang: '行きます、来ます、帰ります',
    judulFurigana: 'いきます、きます、かえります',
    judulRomaji: 'Ikimasu, Kimasu, Kaerimasu',
    judulArti: 'Pergi, Datang & Pulang',
    pengantar: 'Ayo jalan-jalan! Di bab ini kamu belajar menyatakan pergi (行きます), datang (来ます), dan pulang (帰ります), lengkap dengan naik kendaraan apa (で) dan bersama siapa (と). Tiga partikel baru: へ, で, dan と!',
    tipsHafalan: 'Alat transportasi hampir semuanya ada kanji 車 (kuruma = kendaraan roda) seperti 電車 (kereta listrik), 自転車 (sepeda) atau 機 (mesin) seperti 飛行機 (pesawat).',
    bunpou: [
      {
        nomor: 1,
        rumus: '[Tempat] へ 行きます / 来ます / 帰ります',
        arti: '= Pergi / Datang / Pulang ke [Tempat]',
        penjelasan: 'Partikel penunjuk arah tujuan ditulis huruf へ (he) tetapi DIBACA "e". Menunjukkan arah pergerakan menuju tempat tujuan.',
        contoh: [
          { jepang: '学校へ行きます。', arti: 'Pergi ke sekolah.' },
          { jepang: '五時に家へ帰ります。', arti: 'Pulang ke rumah jam 5.' }
        ],
        tips: 'Partikel tujuan juga boleh memakai に (ni): 学校に行きます. Maknanya hampir serupa.'
      },
      {
        nomor: 2,
        rumus: '[Kendaraan] で [Tempat] へ 行きます',
        arti: '= Pergi ke [Tempat] naik [Kendaraan]',
        penjelasan: 'Partikel で (de) di sini menunjukkan alat atau sarana transportasi yang dipakai untuk berpindah tempat.',
        contoh: [
          { jepang: '電車で会社へ行きます。', arti: 'Pergi ke kantor naik kereta listrik.' },
          { jepang: '新幹線で大阪へ行きます。', arti: 'Pergi ke Osaka naik Shinkansen.' }
        ],
        tips: 'Pengecualian penting: kalau jalan kaki, JANGAN pakai で! Cukup bilang: 歩いて行きます (aruite ikimasu).'
      },
      {
        nomor: 3,
        rumus: '[Orang] と 行きます',
        arti: '= Pergi bersama [Orang]',
        penjelasan: 'Partikel と (to) bermakna "bersama / dengan", menunjukkan rekan atau teman yang melakukan aksi bersama kita.',
        contoh: [
          { jepang: '友達と京都へ行きます。', arti: 'Pergi ke Kyoto bersama teman.' },
          { jepang: '家族と日本へ来ました。', arti: 'Datang ke Jepang bersama keluarga.' }
        ],
        tips: 'Kalau sendirian, gunakan: 一人で (hitori de). Jangan bilang 一人と (salah).'
      }
    ],
    kotoba: [
      { no: 1, kanji: '行きます', furigana: 'いきます', romaji: 'ikimasu', arti: 'pergi', contohJepang: '京都へ行きます。', contohArti: 'Pergi ke Kyoto.' },
      { no: 2, kanji: '来ます', furigana: 'きます', romaji: 'kimasu', arti: 'datang', contohJepang: '明日、先生が来ます。', contohArti: 'Besok guru datang.' },
      { no: 3, kanji: '帰ります', furigana: 'かえります', romaji: 'kaerimasu', arti: 'pulang', contohJepang: '五時に家へ帰ります。', contohArti: 'Pulang ke rumah jam 5.' },
      { no: 4, kanji: '学校', furigana: 'がっこう', romaji: 'gakkou', arti: 'sekolah', contohJepang: '毎日、学校へ行きます。', contohArti: 'Setiap hari pergi ke sekolah.' },
      { no: 5, kanji: '駅', furigana: 'えき', romaji: 'eki', arti: 'stasiun kereta', contohJepang: '駅まで歩いて行きます。', contohArti: 'Berjalan kaki sampai stasiun.' },
      { no: 6, kanji: '飛行機', furigana: 'ひこうき', romaji: 'hikouki', arti: 'pesawat terbang', contohJepang: '飛行機で日本へ行きます。', contohArti: 'Pergi ke Jepang naik pesawat.' },
      { no: 7, kanji: '船', furigana: 'ふね', romaji: 'fune', arti: 'kapal laut', contohJepang: '船で島へ行きます。', contohArti: 'Pergi ke pulau naik kapal.' },
      { no: 8, kanji: '電車', furigana: 'でんしゃ', romaji: 'densha', arti: 'kereta listrik', contohJepang: '電車で会社へ行きます。', contohArti: 'Pergi ke kantor naik kereta.' },
      { no: 9, kanji: '地下鉄', furigana: 'ちかてつ', romaji: 'chikatetsu', arti: 'kereta bawah tanah (subway)', contohJepang: '地下鉄で大学へ行きます。', contohArti: 'Pergi ke kampus naik kereta bawah tanah.' },
      { no: 10, kanji: '新幹線', furigana: 'しんかんせん', romaji: 'shinkansen', arti: 'kereta cepat Shinkansen', contohJepang: '新幹線で大阪へ行きます。', contohArti: 'Pergi ke Osaka naik Shinkansen.' },
      { no: 11, kanji: 'バス', furigana: 'ばす', romaji: 'basu', arti: 'bus', contohJepang: 'バスで公園へ行きます。', contohArti: 'Pergi ke taman naik bus.' },
      { no: 12, kanji: 'タクシー', furigana: 'たくしー', romaji: 'takushii', arti: 'taksi', contohJepang: 'タクシーで駅へ行きます。', contohArti: 'Pergi ke stasiun naik taksi.' },
      { no: 13, kanji: '自転車', furigana: 'じてんしゃ', romaji: 'jitensha', arti: 'sepeda', contohJepang: '自転車で会社へ来ます。', contohArti: 'Datang ke kantor naik sepeda.' },
      { no: 14, kanji: '歩いて', furigana: 'あるいて', romaji: 'aruite', arti: 'berjalan kaki', contohJepang: '歩いて家へ帰ります。', contohArti: 'Pulang ke rumah dengan jalan kaki.' },
      { no: 15, kanji: '友達', furigana: 'ともだち', romaji: 'tomodachi', arti: 'teman / sahabat', contohJepang: '友達と映画を見ます。', contohArti: 'Menonton film bersama teman.' },
      { no: 16, kanji: '彼', furigana: 'かれ', romaji: 'kare', arti: 'dia (laki-laki) / pacar pria', contohJepang: '彼は会社員です。', contohArti: 'Dia karyawan swasta.' },
      { no: 17, kanji: '彼女', furigana: 'かのじょ', romaji: 'kanojo', arti: 'dia (perempuan) / pacar wanita', contohJepang: '彼女は先生です。', contohArti: 'Dia adalah guru.' },
      { no: 18, kanji: '家族', furigana: 'かぞく', romaji: 'kazoku', arti: 'keluarga', contohJepang: '家族と日本へ行きます。', contohArti: 'Pergi ke Jepang bersama keluarga.' },
      { no: 19, kanji: '一人で', furigana: 'ひとりで', romaji: 'hitori de', arti: 'sendirian', contohJepang: '一人で学校へ行きます。', contohArti: 'Pergi ke sekolah sendirian.' },
      { no: 20, kanji: '先週', furigana: 'せんしゅう', romaji: 'senshuu', arti: 'minggu lalu', contohJepang: '先週、東京へ行きました。', contohArti: 'Minggu lalu pergi ke Tokyo.' },
      { no: 21, kanji: '今週', furigana: 'こんしゅう', romaji: 'konshuu', arti: 'minggu ini', contohJepang: '今週は忙しいです。', contohArti: 'Minggu ini sibuk.' },
      { no: 22, kanji: '来週', furigana: 'らいしゅう', romaji: 'raishuu', arti: 'minggu depan', contohJepang: '来週、国へ帰ります。', contohArti: 'Minggu depan pulang ke negara.' },
      { no: 23, kanji: '先月', furigana: 'せんげつ', romaji: 'sengetsu', arti: 'bulan lalu', contohJepang: '先月、日本へ来ました。', contohArti: 'Bulan lalu datang ke Jepang.' },
      { no: 24, kanji: '今月', furigana: 'こんげつ', romaji: 'kongetsu', arti: 'bulan ini', contohJepang: '今月は暑いです。', contohArti: 'Bulan ini panas.' },
      { no: 25, kanji: '来月', furigana: 'らいげつ', romaji: 'raigetsu', arti: 'bulan depan', contohJepang: '来月、旅行に行きます。', contohArti: 'Bulan depan pergi berwisata.' }
    ],
    kaiwa: {
      judul: '駅の窓口で切符を買う (Membeli Tiket di Loket Stasiun)',
      situasi: 'Seorang turis membeli tiket Shinkansen dari Tokyo menuju Kyoto di loket JR stasiun Tokyo.',
      percakapan: [
        { pembicara: '旅行者 (Wisatawan)', role: 'Pembeli', jepang: 'すみません、京都までの新幹線の切符を一枚ください。', romaji: 'Sumimasen, Kyouto made no Shinkansen no kippu o ichimai kudasai.', arti: 'Permisi, tolong satu lembar tiket Shinkansen sampai ke Kyoto.' },
        { pembicara: '駅員 (Petugas Stasiun)', role: 'Petugas JR', jepang: 'かしこまりました。指定席ですか、自由席ですか。', romaji: 'Kashikomarimashita. Shiteiseki desu ka, jiyuuseki desu ka.', arti: 'Baik, saya mengerti. Mau kursi pesanan (bernomor) atau kursi bebas?' },
        { pembicara: '旅行者 (Wisatawan)', role: 'Pembeli', jepang: '指定席でお願いします。何時に出発しますか。', romaji: 'Shiteiseki de onegaishimasu. Nanji ni shuppatsu shimasu ka.', arti: 'Tolong kursi pesanan. Berangkat pada jam berapa?' },
        { pembicara: '駅員 (Petugas Stasiun)', role: 'Petugas JR', jepang: '十時十五分の「のぞみ」です。十四番線から出ますよ。', romaji: 'Juuji juugofun no "Nozomi" desu. Juuyon-bansen kara demasu yo.', arti: 'Kereta "Nozomi" pukul 10.15. Berangkat dari peron jalur 14 ya.' }
      ],
      catatanBudaya: 'Di Jepang, antre di peron kereta sangat tertib. Garis di lantai peron menunjukkan posisi pintu gerbong kereta Shinkansen sesuai nomor tiket.'
    },
    sakubun: {
      judul: '私の初めての京都旅行 (Perjalanan Wisata Pertamaku ke Kyoto)',
      judulRomaji: 'Watashi no Hajimete no Kyouto Ryokou',
      judulArti: 'Karangan Perjalanan Wisata dengan Shinkansen dan Bus',
      teksLengkapJepang: '先週の土曜日に、私は友達のケンさんと一緒に京都へ行きました。東京駅から新幹線で行きました。新幹線はとても速くて、二時間十五分で京都に着きました。京都駅の前から市バスに乗って、有名な金閣寺へ行きました。金閣寺は本当に美しかったです。お昼は近くのお店で京都のうどんを食べました。午後はお寺の庭を散歩して、たくさん写真を撮りました。夕方、新幹線で東京へ帰りました。少し疲れましたが、素晴らしい一日でした。来月、また行きたいです。',
      fullArti: 'Pada hari Sabtu minggu lalu, saya bersama teman saya Ken pergi ke Kyoto. Kami pergi dari stasiun Tokyo naik Shinkansen. Shinkansen sangat cepat, dan dalam waktu 2 jam 15 menit sudah tiba di Kyoto. Dari depan stasiun Kyoto kami naik bus kota dan pergi ke Kuil Kinkakuji yang terkenal. Kinkakuji sungguh sangat indah. Siang hari kami makan udon khas Kyoto di warung dekat sana. Sore harinya kami berjalan-jalan di taman kuil dan mengambil banyak foto. Saat petang kami pulang ke Tokyo naik Shinkansen. Sedikit lelah, tapi itu hari yang sungguh luar biasa. Bulan depan saya ingin pergi lagi.',
      panduanMenulis: 'Perhatikan kanji 行 (pergi), 来 (datang), 帰 (pulang), 車 (kendaraan), 駅 (stasiun) saat kamu menulis karangan ini ke buku catatan.',
      tipsMembaca: 'Latih pernapasan saat membaca kalimat panjang berantai: gunakan jeda alami pada tanda baca koma (、).',
      kalimatBedah: [
        {
          kalimatNo: 1,
          kalimatJepang: '先週の土曜日に、私は友達のケンさんと一緒に京都へ行きました。',
          romaji: 'Senshuu no doyoubi ni, watashi wa tomodachi no Ken-san to issho ni Kyouto e ikimashita.',
          terjemahan: 'Pada hari Sabtu minggu lalu, saya bersama teman saya Ken pergi ke Kyoto.',
          kanjiList: [
            { kanji: '行', caraBaca: 'い (i)', arti: 'pergi', tipsIngat: 'Kaki kiri (彳) melangkah ke depan persimpangan (亍).' },
            { kanji: '友', caraBaca: 'とも (tomo)', arti: 'teman / sahabat', tipsIngat: 'Dua tangan bersalaman saling bantu.' }
          ],
          bunpouBedah: [
            { pola: '[Orang] と 一緒に', namaPola: 'Bersama-sama dengan seseorang', penjelasan: 'Pola baku Bab 5 untuk menyatakan melakukan perjalanan berbarengan.', levelCatatan: 'Bab 5 Dasar' },
            { pola: '[Tempat] へ 行きました', namaPola: 'Pergi Menuju Tempat (Lampau)', penjelasan: 'へ dibaca "e", menandai arah tujuan, dan 行きました adalah bentuk lampau dari 行きます.', levelCatatan: 'Bab 5 Dasar' }
          ]
        },
        {
          kalimatNo: 2,
          kalimatJepang: '東京駅から新幹線で行きました。とても速かったです。',
          romaji: 'Toukyou-eki kara Shinkansen de ikimashita. Totemo hayakatta desu.',
          terjemahan: 'Kami pergi dari stasiun Tokyo naik Shinkansen. Keretanya sangat cepat.',
          kanjiList: [
            { kanji: '駅', caraBaca: 'えき (eki)', arti: 'stasiun', tipsIngat: 'Kuda (馬) di pos transit penginapan (尺).' },
            { kanji: '速', caraBaca: 'はや (haya)', arti: 'cepat (kecepatan)', tipsIngat: 'Jalan (辶) membawa berkas (束).' }
          ],
          bunpouBedah: [
            { pola: '[Kendaraan] で', namaPola: 'Alat Transportasi', penjelasan: 'で menunjukkan moda transportasi yang digunakan penglaju.', levelCatatan: 'Bab 5 Dasar' },
            { pola: '速かったです', namaPola: 'Bentuk Lampau Kata Sifat い', penjelasan: 'Huruf い diganti かったです untuk kesan lampau ("tadi/kemarin sangat cepat").', levelCatatan: 'Pola Bab 12' }
          ]
        }
      ]
    },
    worksheet: {
      instruksiBuku: 'Salinlah kanji transportasi dan pergerakan di bawah ini ke bukumu sebanyak 5 kali!',
      kanjiList: [
        { kanji: '行', onyomi: 'コウ・ギョウ (kou/gyou)', kunyomi: 'い・ゆ・おこな (i/yu/okona)', arti: 'pergi / melakukan', jumlahGuratan: 6, kotobaContoh: '行きます (ikimasu), 銀行 (ginkou)', kotobaArti: 'pergi, bank' },
        { kanji: '来', onyomi: 'ライ (rai)', kunyomi: 'く・き・こ (ku/ki/ko)', arti: 'datang / masa depan', jumlahGuratan: 7, kotobaContoh: '来ます (kimasu), 来週 (raishuu)', kotobaArti: 'datang, minggu depan' },
        { kanji: '帰', onyomi: 'キ (ki)', kunyomi: 'かえ (kae)', arti: 'pulang / kembali', jumlahGuratan: 10, kotobaContoh: '帰ります (kaerimasu), 帰国 (kikoku)', kotobaArti: 'pulang ke rumah, pulang ke tanah air' },
        { kanji: '駅', onyomi: 'エキ (eki)', kunyomi: '-', arti: 'stasiun', jumlahGuratan: 14, kotobaContoh: '駅 (eki), 東京駅 (Toukyou-eki)', kotobaArti: 'stasiun, stasiun Tokyo' }
      ],
      latihanSalinKalimat: [
        { no: 1, jepang: '私は自転車で駅へ行きます。', romaji: 'Watashi wa jitensha de eki e ikimasu.', arti: 'Saya pergi ke stasiun naik sepeda.', instruksi: 'Tuliskan partikel で (sarana) dan へ (tujuan).' },
        { no: 2, jepang: '友達と歩いて家へ帰りました。', romaji: 'Tomodachi to aruite ie e kaerimashita.', arti: 'Saya pulang ke rumah jalan kaki bersama teman.', instruksi: 'Ingat bahwa "歩いて" tidak memakai partikel で.' }
      ],
      soalHarian: [
        {
          id: 'b5-q1',
          pertanyaan: 'Manakah kalimat yang tepat untuk menyatakan "pergi jalan kaki sendirian"?',
          tipe: 'pilihan',
          pilihan: ['一人であるいてで行きます。', '一人で歩いて行きます。', '一人と歩きで行きます。', '一人であるいてを行きます。'],
          jawabanBenar: '一人で歩いて行きます。',
          pembahasan: 'Sendirian = 一人で (hitori de). Jalan kaki = 歩いて (aruite), tanpa menggunakan partikel で.'
        }
      ]
    }
  }
};
