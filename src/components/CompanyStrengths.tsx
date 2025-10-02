import Image from 'next/image';

export default function CompanyStrengths() {
  const strengths = [
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: "AI分析によるCV最適化",
      description: "AI技術を活用したユーザー行動分析により、コンバージョン率を大幅に向上。データに基づいた改善提案で、お客様のWebサイトの成果を最大化します。",
      features: ["CV率40%向上", "AI行動分析", "データ駆動改善"]
    },
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a2 2 0 00-2-2H6a2 2 0 00-2 2v4h12z" />
        </svg>
      ),
      title: "BASEオフィシャルパートナー",
      description: "BASEのオフィシャルパートナーとして認定されており、ECサイト制作において豊富な実績と信頼性を提供。最新の機能やサポートを活用できます。",
      features: ["公式認定パートナー", "最新機能対応", "専用サポート"]
    },
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
        </svg>
      ),
      title: "継続的なサポート体制",
      description: "制作完了後も継続的なサポートを提供。サイトの更新、SEO対策、運用改善まで一貫してサポートし、お客様のビジネス成長を継続的に支援します。",
      features: ["24時間サポート", "定期メンテナンス", "運用改善提案"]
    },
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      ),
      title: "コストパフォーマンス重視",
      description: "ノーコード技術を活用し、従来の制作コストを大幅に削減。高品質なWebサイトをリーズナブルな価格で提供し、お客様の投資対効果を最大化します。",
      features: ["コスト50%削減", "高品質維持", "ROI向上"]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* タイトルセクション */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            会社の強み・特徴
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            株式会社MOGCIAが選ばれ続ける理由をご紹介します
          </p>
        </div>

        {/* 強み一覧 */}
        <div className="grid md:grid-cols-2 gap-12">
          {strengths.map((strength, index) => (
            <div 
              key={index} 
              className="flex gap-6 group hover:scale-105 transition-all duration-500 ease-out"
              style={{
                animationDelay: `${index * 200}ms`,
                animation: 'fadeInUp 0.8s ease-out forwards',
                opacity: 0,
                transform: 'translateY(30px)'
              }}
            >
              {/* アイコン */}
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                  {strength.icon}
                </div>
              </div>

              {/* 内容 */}
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {strength.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {strength.description}
                </p>
                
                {/* 特徴タグ */}
                <div className="flex flex-wrap gap-2">
                  {strength.features.map((feature, featureIndex) => (
                    <span 
                      key={featureIndex} 
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium hover:bg-blue-200 hover:scale-105 transition-all duration-200 cursor-default"
                      style={{
                        animationDelay: `${(index * 200) + (featureIndex * 100)}ms`,
                        animation: 'bounceIn 0.6s ease-out forwards',
                        opacity: 0,
                        transform: 'scale(0)'
                      }}
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 装飾要素 */}
        <div className="mt-16 flex justify-center">
          <div className="w-80 h-80 opacity-20">
            <Image src="/Open Doodles - Together.svg" alt="Decorative illustration" width={320} height={320} className="w-full h-full object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
}
