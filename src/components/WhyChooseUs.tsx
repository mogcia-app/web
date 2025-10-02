import Image from 'next/image';

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "AI分析によるCV最適化",
      description: "AI技術を活用したユーザー行動分析により、コンバージョン率を大幅に向上。データに基づいた改善提案で、お客様のWebサイトの成果を最大化します。"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "BASEオフィシャルパートナー",
      description: "BASEのオフィシャルパートナーとして認定されており、ECサイト制作において豊富な実績と信頼性を提供します。"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
        </svg>
      ),
      title: "継続的なサポート体制",
      description: "制作完了後も継続的なサポートを提供。サイトの更新、SEO対策、運用改善まで一貫してサポートします。"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      ),
      title: "コストパフォーマンス重視",
      description: "ノーコード技術を活用し、従来の制作コストを大幅に削減。高品質なWebサイトをリーズナブルな価格で提供します。"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* タイトルセクション */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            選ばれる理由
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            多くのお客様に選ばれ続ける理由をご紹介します
          </p>
        </div>

        {/* 理由一覧 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {reason.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* 装飾要素 */}
        <div className="mt-16 flex justify-center">
          <div className="w-64 h-64 opacity-20">
            <Image src="/Open Doodles - Together.svg" alt="Decorative illustration" width={256} height={256} className="w-full h-full object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
}
