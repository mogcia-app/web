export default function CompanyHero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236366f1' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
              最新技術で未来を創造
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              テクノロジーで
              <span className="text-blue-600 block">ビジネスを革新</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              AI・クラウド・IoT技術を活用し、お客様のビジネス課題を解決します。
              最新のテクノロジーと豊富な実績で、デジタル変革をサポートいたします。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg hover:shadow-xl">
                サービス詳細を見る
              </button>
              <button className="border-2 border-gray-300 hover:border-blue-500 text-gray-700 hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                会社概要
              </button>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl p-4 text-white">
                  <div className="text-2xl font-bold">AI</div>
                  <div className="text-sm opacity-90">機械学習</div>
                </div>
                <div className="bg-gradient-to-br from-green-400 to-blue-500 rounded-xl p-4 text-white">
                  <div className="text-2xl font-bold">Cloud</div>
                  <div className="text-sm opacity-90">クラウド</div>
                </div>
                <div className="bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl p-4 text-white">
                  <div className="text-2xl font-bold">IoT</div>
                  <div className="text-sm opacity-90">IoT</div>
                </div>
                <div className="bg-gradient-to-br from-orange-400 to-red-500 rounded-xl p-4 text-white">
                  <div className="text-2xl font-bold">Data</div>
                  <div className="text-sm opacity-90">データ分析</div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full opacity-80 animate-bounce"></div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-green-400 rounded-full opacity-80 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}



