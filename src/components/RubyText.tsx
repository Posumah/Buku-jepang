import React from 'react';

interface RubyTextProps {
  text: string;
  furiganaHint?: string;
  className?: string;
  showAudio?: boolean;
}

// Comprehensive kanji-to-furigana mapping for Minna no Nihongo vocabulary
const KANJI_FURI_MAP: Array<{ kanji: string; furi: string }> = [
  { kanji: '初めまして', furi: 'はじめまして' },
  { kanji: '自己紹介', furi: 'じこしょうかい' },
  { kanji: '日本語', furi: 'にほんご' },
  { kanji: '留学生', furi: 'りゅうがくせい' },
  { kanji: '会社員', furi: 'かいしゃいん' },
  { kanji: '銀行員', furi: 'ぎんこういん' },
  { kanji: '研究者', furi: 'けんきゅうしゃ' },
  { kanji: '外国人', furi: 'がいこくじん' },
  { kanji: '情報工学', furi: 'じょうほうこうがく' },
  { kanji: '一生懸命', furi: 'いっしょうけんめい' },
  { kanji: '金閣寺', furi: 'きんかくじ' },
  { kanji: '新幹線', furi: 'しんかんせん' },
  { kanji: '地下鉄', furi: 'ちかてつ' },
  { kanji: '自転車', furi: 'じてんしゃ' },
  { kanji: '飛行機', furi: 'ひこうき' },
  { kanji: '自動販売機', furi: 'じどうはんばいき' },
  { kanji: '教科書', furi: 'きょうかしょ' },
  { kanji: '電子辞書', furi: 'でんしじしょ' },
  { kanji: '会議室', furi: 'かいぎしつ' },
  { kanji: '事務所', furi: 'じむしょ' },
  { kanji: 'お手洗い', furi: 'おてあらい' },
  { kanji: '図書館', furi: 'としょかん' },
  { kanji: '美術館', furi: 'びじゅつかん' },
  { kanji: '郵便局', furi: 'ゆうびんきょく' },
  { kanji: '大学', furi: 'だいがく' },
  { kanji: '学校', furi: 'がっこう' },
  { kanji: '教室', furi: 'きょうしつ' },
  { kanji: '食堂', furi: 'しょくどう' },
  { kanji: '勉強', furi: 'べんきょう' },
  { kanji: '名前', furi: 'なまえ' },
  { kanji: '専攻', furi: 'せんこう' },
  { kanji: '専門', furi: 'せんもん' },
  { kanji: '家族', furi: 'かぞく' },
  { kanji: '今年', furi: 'ことし' },
  { kanji: '先生', furi: 'せんせい' },
  { kanji: '学生', furi: 'がくせい' },
  { kanji: '教師', furi: 'きょうし' },
  { kanji: '医者', furi: 'いしゃ' },
  { kanji: '病院', furi: 'びょういん' },
  { kanji: '時計', furi: 'とけい' },
  { kanji: '手帳', furi: 'てちょう' },
  { kanji: '手紙', furi: 'てがみ' },
  { kanji: '写真', furi: 'しゃしん' },
  { kanji: '趣味', furi: 'しゅみ' },
  { kanji: '毎日', furi: 'まいにち' },
  { kanji: '毎朝', furi: 'まいあさ' },
  { kanji: '毎晩', furi: 'まいばん' },
  { kanji: '昨日', furi: 'きのう' },
  { kanji: '今日', furi: 'きょう' },
  { kanji: '明日', furi: 'あした' },
  { kanji: '日曜日', furi: 'にちようび' },
  { kanji: '土曜日', furi: 'どようび' },
  { kanji: '時間', furi: 'じかん' },
  { kanji: '料理', furi: 'りょうり' },
  { kanji: '友達', furi: 'ともだち' },
  { kanji: '英語', furi: 'えいご' },
  { kanji: '日本', furi: 'にほん' },
  { kanji: '中国', furi: 'ちゅうごく' },
  { kanji: '韓国', furi: 'かんこく' },
  { kanji: '会社', furi: 'かいしゃ' },
  { kanji: '社員', furi: 'しゃいん' },
  { kanji: '電気', furi: 'でんき' },
  { kanji: '電話', furi: 'でんわ' },
  { kanji: '部屋', furi: 'へや' },
  { kanji: '階段', furi: 'かいだん' },
  { kanji: '売り場', furi: 'うりば' },
  { kanji: '地下', furi: 'ちか' },
  { kanji: '受付', furi: 'うけつけ' },
  { kanji: '午前', furi: 'ごぜん' },
  { kanji: '午後', furi: 'ごご' },
  { kanji: '何時', furi: 'なんじ' },
  { kanji: '何歳', furi: 'なんさい' },
  { kanji: '誰', furi: 'だれ' },
  { kanji: '起きます', furi: 'おきます' },
  { kanji: '寝ます', furi: 'ねます' },
  { kanji: '働きます', furi: 'はたらきます' },
  { kanji: '休みます', furi: 'やすみます' },
  { kanji: '終わります', furi: 'おわります' },
  { kanji: '始まります', furi: 'はじまります' },
  { kanji: '行きます', furi: 'いきます' },
  { kanji: '来ます', furi: 'きます' },
  { kanji: '帰ります', furi: 'かえります' },
  { kanji: '食べます', furi: 'たべます' },
  { kanji: '飲みます', furi: 'のみます' },
  { kanji: '見ます', furi: 'みます' },
  { kanji: '聞きます', furi: 'ききます' },
  { kanji: '読みます', furi: 'よみます' },
  { kanji: '書きます', furi: 'かきます' },
  { kanji: '買います', furi: 'かいます' },
  { kanji: '撮ります', furi: 'とります' },
  { kanji: '会います', furi: 'あいます' },
  { kanji: '切ります', furi: 'きります' },
  { kanji: '送ります', furi: 'おくります' },
  { kanji: '分かります', furi: 'わかります' },
  { kanji: 'あります', furi: 'あります' },
  { kanji: 'います', furi: 'います' },
  { kanji: '歩いて', furi: 'あるいて' },
  { kanji: '一人で', furi: 'ひとりで' },
  { kanji: '二十二歳', furi: 'にじゅうにさい' },
  { kanji: '二十五歳', furi: 'にじゅうごさい' },
  { kanji: '五人', furi: 'ごにん' },
  { kanji: 'ご飯', furi: 'ごはん' },
  { kanji: '朝ご飯', furi: 'あさごはん' },
  { kanji: '昼ご飯', furi: 'ひるごはん' },
  { kanji: '晩ご飯', furi: 'ばんごはん' },
  { kanji: 'お茶', furi: 'おちゃ' },
  { kanji: '紅茶', furi: 'こうちゃ' },
  { kanji: '野菜', furi: 'やさい' },
  { kanji: '果物', furi: 'くだもの' },
  { kanji: '卵', furi: 'たまご' },
  { kanji: '肉', furi: 'にく' },
  { kanji: '魚', furi: 'さかな' },
  { kanji: '箸', furi: 'はし' },
  { kanji: '切手', furi: 'きって' },
  { kanji: '切符', furi: 'きっぷ' },
  { kanji: '父', furi: 'ちち' },
  { kanji: '母', furi: 'はは' },
  { kanji: '兄', furi: 'あに' },
  { kanji: '妹', furi: 'いもうと' },
  { kanji: '紙', furi: 'かみ' },
  { kanji: '犬', furi: 'いぬ' },
  { kanji: '猫', furi: 'ねこ' },
  { kanji: '木', furi: 'き' },
  { kanji: '物', furi: 'もの' },
  { kanji: '上', furi: 'うえ' },
  { kanji: '下', furi: 'した' },
  { kanji: '前', furi: 'まえ' },
  { kanji: '後ろ', furi: 'うしろ' },
  { kanji: '中', furi: 'なか' },
  { kanji: '外', furi: 'そと' },
  { kanji: '隣', furi: 'となり' },
  { kanji: '箱', furi: 'はこ' },
  { kanji: '冷蔵庫', furi: 'れいぞうこ' },
  { kanji: '公園', furi: 'こうえん' },
  { kanji: '静か', furi: 'しずか' },
  { kanji: '賑やか', furi: 'にぎやか' },
  { kanji: '有名', furi: 'ゆうめい' },
  { kanji: '親切', furi: 'しんせつ' },
  { kanji: '元気', furi: 'げんき' },
  { kanji: '便利', furi: 'べんり' },
  { kanji: '大きい', furi: 'おおきい' },
  { kanji: '小さい', furi: 'ちいさい' },
  { kanji: '新しい', furi: 'あたらしい' },
  { kanji: '古い', furi: 'ふるい' },
  { kanji: '高い', furi: 'たかい' },
  { kanji: '安い', furi: 'やすい' },
  { kanji: '暑い', furi: 'あつい' },
  { kanji: '寒い', furi: 'さむい' },
  { kanji: '難しい', furi: 'むずかしい' },
  { kanji: '易しい', furi: 'やさしい' },
  { kanji: '面白い', furi: 'おもしろい' },
  { kanji: '美味しい', furi: 'おいしい' },
  { kanji: '好き', furi: 'すき' },
  { kanji: '大好き', furi: 'だいすき' },
  { kanji: '嫌い', furi: 'きらい' },
  { kanji: '上手', furi: 'じょうず' },
  { kanji: '下手', furi: 'へた' },
  { kanji: '漢字', furi: 'かんじ' },
  { kanji: '音楽', furi: 'おんがく' },
  { kanji: '歌', furi: 'うた' },
  { kanji: '私', furi: 'わたし' },
  { kanji: '人', furi: 'ひと' },
  { kanji: '本', furi: 'ほん' },
  { kanji: '歳', furi: 'さい' },
  { kanji: '国', furi: 'くに' },
  { kanji: '辞書', furi: 'じしょ' },
  { kanji: '雑誌', furi: 'ざっし' },
  { kanji: '新聞', furi: 'しんぶん' },
  { kanji: '鍵', furi: 'かぎ' },
  { kanji: '傘', furi: 'かさ' },
  { kanji: '鞄', furi: 'かばん' },
  { kanji: '靴', furi: 'くつ' },
  { kanji: '机', furi: 'つくえ' },
  { kanji: '椅子', furi: 'いす' },
  { kanji: '車', furi: 'くるま' },
  { kanji: '駅', furi: 'えき' },
  { kanji: '百', furi: 'ひゃく' },
  { kanji: '千', furi: 'せん' },
  { kanji: '万', furi: 'まん' },
  { kanji: '円', furi: 'えん' },
  { kanji: '朝', furi: 'あさ' },
  { kanji: '昼', furi: 'ひる' },
  { kanji: '晩', furi: 'ばん' },
  { kanji: '夜', furi: 'よる' },
  { kanji: '今', furi: 'いま' },
  { kanji: '水', furi: 'みず' }
];

export const RubyText: React.FC<RubyTextProps> = ({ text, furiganaHint, className = '' }) => {
  if (furiganaHint && text) {
    return (
      <ruby className={`inline-ruby ${className}`}>
        {text}
        <rt className="ruby-rt">{furiganaHint}</rt>
      </ruby>
    );
  }

  let remaining = text;
  const nodes: React.ReactNode[] = [];
  let keyIdx = 0;

  while (remaining.length > 0) {
    let matched = false;

    // 1. Check bracket syntax: [漢字:かんじ]
    if (remaining.startsWith('[')) {
      const matchBracket = remaining.match(/^\[([^:\]]+):([^\]]+)\]/);
      if (matchBracket) {
        nodes.push(
          <ruby key={keyIdx++} className="inline-ruby">
            {matchBracket[1]}
            <rt className="ruby-rt">{matchBracket[2]}</rt>
          </ruby>
        );
        remaining = remaining.slice(matchBracket[0].length);
        matched = true;
      }
    }

    // 2. Check dictionary kanji words
    if (!matched) {
      for (const item of KANJI_FURI_MAP) {
        if (remaining.startsWith(item.kanji)) {
          nodes.push(
            <ruby key={keyIdx++} className="inline-ruby">
              {item.kanji}
              <rt className="ruby-rt">{item.furi}</rt>
            </ruby>
          );
          remaining = remaining.slice(item.kanji.length);
          matched = true;
          break;
        }
      }
    }

    // 3. Fallback character
    if (!matched) {
      nodes.push(remaining[0]);
      remaining = remaining.slice(1);
    }
  }

  return <span className={`inline-block leading-relaxed tracking-normal ${className}`}>{nodes}</span>;
};
