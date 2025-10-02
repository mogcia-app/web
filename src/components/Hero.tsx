import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Modern geometric background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-16 h-16 bg-blue-600 rounded-full animate-bounce" style={{animationDuration: '3s'}}></div>
          <div className="absolute top-40 right-32 w-12 h-12 bg-blue-600 rounded-full animate-bounce" style={{animationDuration: '4s', animationDelay: '0.5s'}}></div>
          <div className="absolute bottom-32 left-1/3 w-14 h-14 bg-blue-600 rounded-full animate-bounce" style={{animationDuration: '2.5s', animationDelay: '1s'}}></div>
          <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-blue-400 rounded-full animate-bounce" style={{animationDuration: '3.5s', animationDelay: '1.5s'}}></div>
          <div className="absolute bottom-1/4 right-1/3 w-10 h-10 bg-blue-500 rounded-full animate-bounce" style={{animationDuration: '2.8s', animationDelay: '0.8s'}}></div>
          <div className="absolute top-10 right-1/2 w-8 h-8 bg-blue-500 rounded-full animate-bounce" style={{animationDuration: '3.2s', animationDelay: '1.2s'}}></div>
          <div className="absolute top-2/3 left-10 w-10 h-10 bg-blue-400 rounded-full animate-bounce" style={{animationDuration: '2.7s', animationDelay: '0.7s'}}></div>
          <div className="absolute bottom-10 right-10 w-6 h-6 bg-blue-600 rounded-full animate-bounce" style={{animationDuration: '3.8s', animationDelay: '1.3s'}}></div>
          <div className="absolute top-1/6 right-1/3 w-6 h-6 bg-blue-400 rounded-full animate-bounce" style={{animationDuration: '2.6s', animationDelay: '1.4s'}}></div>
          <div className="absolute bottom-1/6 left-1/4 w-12 h-12 bg-blue-500 rounded-full animate-bounce" style={{animationDuration: '3.6s', animationDelay: '0.6s'}}></div>
        </div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Tech Life Communication SVG - Left side */}
          <div className="relative w-96 h-96 md:w-[28rem] md:h-[28rem] lg:w-[600px] lg:h-[600px] opacity-90 flex-shrink-0">
            <Image src="/Open Doodles - Helping.svg" alt="Open Doodles Helping" width={600} height={600} className="w-full h-full object-contain" />
            {/* Decorative circles on SVG */}
            <div className="absolute top-8 right-8 w-12 h-12 bg-blue-500 rounded-full opacity-30 animate-bounce" style={{animationDuration: '3s'}}></div>
            <div className="absolute top-1/3 left-4 w-8 h-8 bg-blue-400 rounded-full opacity-30 animate-bounce" style={{animationDuration: '4s', animationDelay: '1s'}}></div>
            <div className="absolute bottom-1/4 right-4 w-10 h-10 bg-blue-600 rounded-full opacity-30 animate-bounce" style={{animationDuration: '2.5s', animationDelay: '0.5s'}}></div>
          </div>
          
          {/* Text content - Right side */}
          <div className="text-center lg:text-left flex-1">
            {/* Main headline */}
            <h1 className="text-3xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-8 leading-tight">
            デジタルで未来を創る
              <br />
              <span className="text-blue-600">
                WEB制作
              </span>
            </h1>
          
            {/* Subtitle */}
            <p className="text-lg md:text-xl text-black mb-12 max-w-4xl mx-auto lg:mx-0 leading-relaxed">
              あなたのビジネスを次のレベルへ
              <br />
              クリエイティブなWebソリューションで
              <br />
              成功への道筋を一緒に描きましょう。
            </p>
            
            {/* Service categories */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12 max-w-4xl mx-auto lg:mx-0">
              {[
              'Webサイト制作',
              'LP制作',
              'ノーコード制作',
              'A/Bテスト',
              'SEO対策',
             'Web集客'
              ].map((service, index) => (
                <div key={index} className="bg-white/60 backdrop-blur-sm border border-blue-600 rounded-xl px-4 py-3 text-sm font-medium text-gray-700 hover:bg-white/80 transition-all duration-300 hover:shadow-md">
                  {service}
                </div>
              ))}
            </div>
            
            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            
              <button className="bg-white/80 backdrop-blur-sm border-2 border-gray-300 hover:border-gray-400 text-gray-700 px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-white hover:shadow-md">
                よくある質問
              </button>
              <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-10 py-4 rounded-lg text-sm font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
              <span className="flex items-center gap-1.5">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                お問い合わせ
              </span>
            </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
