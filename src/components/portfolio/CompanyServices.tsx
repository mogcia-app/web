export default function CompanyServices() {
  const services = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "AI・機械学習",
      description: "ビジネスデータを活用した予測分析や自動化システムの構築",
      features: ["予測分析", "自然言語処理", "画像認識", "異常検知"],
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
      title: "クラウドソリューション",
      description: "AWS・Azure・GCPを活用したスケーラブルなシステム構築",
      features: ["インフラ設計", "DevOps", "セキュリティ", "コスト最適化"],
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "IoT・ハードウェア",
      description: "センサーデータの収集・分析から制御システムまで一貫対応",
      features: ["センサー開発", "データ収集", "リアルタイム処理", "制御システム"],
      color: "from-purple-500 to-violet-600"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "データ分析・BI",
      description: "ビッグデータの収集・分析から可視化・レポート作成まで",
      features: ["データ収集", "ETL処理", "可視化", "レポート作成"],
      color: "from-orange-500 to-red-600"
    }
  ];

  return (
    <section className="py-20 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">提供サービス</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            最新のテクノロジーを活用し、お客様のビジネス課題を解決する
            包括的なソリューションを提供いたします
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                {/* Features */}
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                {/* Learn More Button */}
                <button className="mt-6 text-blue-600 hover:text-blue-700 font-medium flex items-center group-hover:translate-x-1 transition-transform duration-300">
                  詳細を見る
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



