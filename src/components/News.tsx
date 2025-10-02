import Image from 'next/image';

export default function News() {
  const newsItems = [
    {
      date: "2025.01.15",
      category: "お知らせ",
      title: "AI技術を活用したWebサイト制作サービスを開始",
      description: "最新のAI技術を活用し、制作効率を大幅に向上させた新しいWebサイト制作サービスを開始いたします。",
      image: "/Tech Life - Communication.svg"
    },
    {
      date: "2024.09.10",
      category: "実績",
      title: "BASEオフィシャルパートナーに認定",
      description: "BASEのオフィシャルパートナーとして正式に認定されました。ECサイト制作においてより充実したサポートを提供いたします。",
      image: "/Open Doodles - Helping.svg"
    },
    {
      date: "2024.01.05",
      category: "技術",
      title: "ノーコード技術による制作コスト削減を実現",
      description: "ノーコード技術を活用することで、従来の制作コストを50%以上削減することに成功しました。",
      image: "/Open Doodles - Together.svg"
    },
    {
      date: "2023.12.28",
      category: "サービス",
      title: "24時間サポート体制を開始",
      description: "お客様により安心してご利用いただけるよう、24時間サポート体制を開始いたします。",
      image: "/Open Doodles - Unboxing.svg"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* タイトルセクション */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            NEWS
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            最新のニュースとお知らせをご紹介します
          </p>
        </div>

        {/* ニュース一覧 */}
        <div className="space-y-8 max-w-4xl mx-auto">
          {newsItems.map((news, index) => (
            <article key={index} className="border-b border-gray-200 pb-8 last:border-b-0 text-center">
              <div className="flex items-center justify-center gap-3 mb-3">
                <span className="text-sm text-gray-500">{news.date}</span>
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                  {news.category}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors cursor-pointer">
                {news.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {news.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
