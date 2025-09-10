import { PenOff, Globe, TrendingUp } from 'lucide-react';
import Image from 'next/image';

export default function Services() {
  const services = [
    {
      title: "Web制作",
      description: "個性を大切にしたWEBサイト制作",
      icon: Globe,
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
      features: [ "採用サイト制作", "ECサイト制作", "Webプロモーション", "サービスサイト"],
      link: "/services/web-development"
    },
    {
      title: "ノーコード制作", 
      description: "簡単にWebサイトを制作",
      icon: PenOff,
      gradient: "from-gray-500 to-gray-600",
      bgGradient: "from-gray-50 to-gray-100",
      features: ["ベイスオフィシャルパートナー",  "Shopify制作","オンラインショップ"],
      link: "/services/nocode"
    },
    {
      title: "マーケティング支援",
      description: "課題の最適解を導く",
      icon: TrendingUp,
      gradient: "from-green-500 to-emerald-500", 
      bgGradient: "from-green-50 to-emerald-50",
      features: ["SEO対策",  "SNS広告運用", "コンテンツマーケティング", "ブランディング支援"],
      link: "/services/marketing"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden" id="services">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20 relative">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            SERVICE
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8">
            事業紹介
          </p>
          
          {/* Small decorative elements */}
          <div className="flex justify-center gap-4 mb-8">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse delay-100"></div>
            <div className="w-2 h-2 bg-blue-800 rounded-full animate-pulse delay-200"></div>
          </div>
          
          {/* Decorative illustration at bottom */}
          <div className="flex justify-center">
            <div className="w-60 h-60 md:w-[32rem] md:h-[32rem] opacity-80 transform rotate-12">
              <Image src="/oo.svg" alt="Decorative illustration" width={512} height={512} className="w-full h-full object-contain" />
            </div>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <a 
              key={index} 
              href={service.link}
              className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300 group relative cursor-pointer hover:bg-white"
            >
              {/* Background decoration */}
              <div className={`absolute top-0 right-0 ${index === 0 ? 'w-28 h-28' : 'w-32 h-32'} opacity-80 transform translate-x-6 -translate-y-10 z-20`}>
                <Image src={index === 0 ? "/Open Doodles - Swinging.svg" : index === 1 ? "/Open Doodles - Unboxing.svg" : "/Open Doodles - Zombieing.svg"} alt="Decorative illustration" width={128} height={128} className="w-full h-full object-contain" />
              </div>
              
              <div className="flex items-start gap-4 relative z-10">
                <div className={`w-12 h-12 bg-gradient-to-r ${service.gradient} rounded-full flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform duration-300 flex-shrink-0`}>
                  <service.icon size={20} />
                </div>
                
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Service features as tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {service.features.slice(0, 2).map((feature, featureIndex) => (
                      <span key={featureIndex} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-medium">
                        {feature}
                      </span>
                    ))}
                    {service.features.length > 2 && (
                      <span className="bg-gray-100 text-gray-500 px-2 py-1 rounded-md text-xs font-medium">
                        +{service.features.length - 2}
                      </span>
                    )}
                  </div>
                  
                  {/* Arrow icon */}
                  <div className="flex items-center text-gray-400 group-hover:text-gray-600 transition-colors">
                    <span className="text-xs font-medium mr-1">詳細</span>
                    <svg className="w-3 h-3 group-hover:translate-x-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* What we can do section */}
        <div>
          {/* Background decoration */}
          
          <div className="relative z-10">
            {/* 2列レイアウト: 左にSVG、右にテキスト */}
            <div className="flex flex-col lg:flex-row items-center gap-12 mb-12">
              {/* 左側: SVGイラスト */}
              <div className="flex-shrink-0">
                <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 opacity-90">
                  <Image src="/Open Doodles - Together.svg" alt="Open Doodles Together" width={384} height={384} className="w-full h-full object-contain" />
                </div>
              </div>
              
              {/* 右側: タイトルと説明文 */}
              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-4xl font-bold text-gray-900 mb-6">
                  私たちができること
                </h3>
                <p className="text-[18px] text-black leading-relaxed">
                  業種やフェーズによって制作の目的は様々。<br />
                  まずは小さく始めて運用しながら磨いていく<br />
                  そんな選択肢も一緒に検討できるパートナーでありたいと思っています
                </p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {/* Webサイト制作 */}
              <div className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group border border-gray-200">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">Webサイト制作</h4>
                <p className="text-gray-600 mb-4 text-sm">
                  コーポレートサイトから採用、ECサイトまで、あらゆるWebサイト制作に対応。豊富な実績とAI技術を掛け合わせ、サイトの特性に合わせた最適なUI・UX設計で、お客様の課題を解決し成功へ導きます。
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-block bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">コーポレートサイト</span>
                  <span className="inline-block bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">ECサイト</span>
                  <span className="inline-block bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">採用サイト</span>
                </div>
              </div>

              {/* LP制作 */}
              <div className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group border border-gray-200">
                <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">LP制作</h4>
                <p className="text-gray-600 mb-4 text-sm">
                  コンバージョン最適化を重視したランディングページ制作。ユーザーの行動を分析し、効果的なデザインとコピーライティングで、お客様のビジネス成果を最大化します。
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-block bg-purple-200 text-purple-800 px-3 py-1 rounded-full text-xs font-medium">コンバージョン最適化</span>
                  <span className="inline-block bg-purple-200 text-purple-800 px-3 py-1 rounded-full text-xs font-medium">A/Bテスト</span>
                  <span className="inline-block bg-purple-200 text-purple-800 px-3 py-1 rounded-full text-xs font-medium">コピーライティング</span>
                </div>
              </div>

              {/* ノーコード制作 */}
              <div className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group border border-gray-200">
                <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">ノーコード制作</h4>
                <p className="text-gray-600 mb-4 text-sm">
                  プログラミング知識不要でWebサイトを制作。コストを抑えながら高品質なデジタルプロダクトを提供します。
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-block bg-green-200 text-green-800 px-3 py-1 rounded-full text-xs font-medium">BASEオフィシャルパートナー</span>
                  <span className="inline-block bg-green-200 text-green-800 px-3 py-1 rounded-full text-xs font-medium">STORES</span>
                  <span className="inline-block bg-green-200 text-green-800 px-3 py-1 rounded-full text-xs font-medium">Shopify</span>
                </div>
              </div>

              {/* マーケティング */}
              <div className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group border border-gray-200">
                <div className="w-16 h-16 bg-orange-600 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">マーケティング</h4>
                <p className="text-gray-600 mb-4 text-sm">
                  マーケティング戦略の立案と実行。市場分析から顧客セグメンテーション、キャンペーン設計まで、お客様のビジネス成長を加速させるマーケティング支援を提供します。
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-block bg-orange-200 text-orange-800 px-3 py-1 rounded-full text-xs font-medium">戦略立案</span>
                  <span className="inline-block bg-orange-200 text-orange-800 px-3 py-1 rounded-full text-xs font-medium">顧客分析</span>
                  <span className="inline-block bg-orange-200 text-orange-800 px-3 py-1 rounded-full text-xs font-medium">キャンペーン設計</span>
                </div>
              </div>

              {/* SEO対策 */}
              <div className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group border border-gray-200">
                <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">SEO対策</h4>
                <p className="text-gray-600 mb-4 text-sm">
                  検索エンジン最適化による自然流入の向上。キーワード分析からコンテンツ戦略、技術的SEOまで、お客様のWebサイトが検索結果で上位表示されるようにサポートします。
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-block bg-indigo-200 text-indigo-800 px-3 py-1 rounded-full text-xs font-medium">キーワード分析</span>
                  <span className="inline-block bg-indigo-200 text-indigo-800 px-3 py-1 rounded-full text-xs font-medium">コンテンツ戦略</span>
                  <span className="inline-block bg-indigo-200 text-indigo-800 px-3 py-1 rounded-full text-xs font-medium">技術的SEO</span>
                </div>
              </div>

              {/* SNS運用 */}
              <div className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group border border-gray-200">
                <div className="w-16 h-16 bg-cyan-600 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">SNS運用</h4>
                <p className="text-gray-600 mb-4 text-sm">
                  ブランド認知度向上と顧客エンゲージメント強化のためのSNS運用。各プラットフォームの特性を活かしたコンテンツ戦略と投稿スケジュール管理で、効果的なSNSマーケティングを実現します。
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-block bg-cyan-200 text-cyan-800 px-3 py-1 rounded-full text-xs font-medium">コンテンツ制作</span>
                  <span className="inline-block bg-cyan-200 text-cyan-800 px-3 py-1 rounded-full text-xs font-medium">投稿管理</span>
                  <span className="inline-block bg-cyan-200 text-cyan-800 px-3 py-1 rounded-full text-xs font-medium">SNS運用</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
