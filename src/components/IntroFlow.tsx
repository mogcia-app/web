import Image from 'next/image';

export default function IntroFlow() {
  const steps = [
    {
      number: "01",
      title: "お問い合わせ",
      description: "まずはお気軽にお問い合わせください",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      bgColor: "bg-blue-600"
    },
    {
      number: "02",
      title: "ヒアリング",
      description: "詳細なヒアリングにて、お客様のビジネス課題やご要望をお聞かせください。",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      bgColor: "bg-purple-600"
    },
    {
      number: "03",
      title: "提案",
      description: "ヒアリングを元に最適なプランをご提案いたします。",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      bgColor: "bg-green-600"
    },
    {
      number: "04",
      title: "契約",
      description: "ご提案内容にご納得いただけましたら、契約を締結しプロジェクトを開始します。",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      bgColor: "bg-orange-600"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* タイトル */}
        <div className="mb-16">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* 左側: イラスト */}
            <div className="flex-shrink-0">
              <div className="w-48 h-48 md:w-64 md:h-64 opacity-90">
                <Image src="/Tech Life - Communication.svg" alt="Tech Life Communication" width={256} height={256} className="w-full h-full object-contain" />
              </div>
            </div>

            {/* 右側: タイトルと説明文 */}
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                導入フロー
              </h2>
              <p className="text-xl text-black max-w-3xl mx-auto lg:mx-0">
                お問い合わせから契約まで4つのステップで<br />スムーズにプロジェクトを開始できます
              </p>
            </div>
          </div>
        </div>

        {/* タイムライン */}
        <div className="space-y-16">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start gap-8">
              {/* 左側: タイムライン要素 */}
              <div className="flex-shrink-0">
                <div className="relative">
                  {/* アイコン */}
                  <div className="w-16 h-16 bg-gray-500 rounded-full flex items-center justify-center shadow-lg z-10">
                    {step.icon}
                  </div>
                  
                  {/* ステップ番号 */}
                  <div className="text-center mt-2">
                    <div className="text-2xl font-bold text-gray-400">
                      {step.number}
                    </div>
                  </div>
                </div>
              </div>

              {/* 右側: 詳細 */}
              <div className="flex-1">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <h3 className="text-[20px] font-bold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-black leading-relaxed text-[15px]">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
