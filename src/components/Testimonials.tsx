import Image from 'next/image';

export default function Testimonials() {
  const testimonials = [
    {
      name: "某製造業 代表取締役",
      company: "製造業",
      content: "AI分析によるコンバージョン最適化で、CV率が前年比40%向上しました。データに基づいた改善提案により、期待以上の成果を得られています。",
      rating: 5,
      avatar: "/Tech Life - Communication.svg"
    },
    {
      name: "某小売業 店長",
      company: "小売業",
      content: "ECサイトの制作から運用まで一貫してサポートしていただき、売上が前年比30%向上しました。継続的なサポートが素晴らしいです。",
      rating: 5,
      avatar: "/Open Doodles - Helping.svg"
    },
    {
      name: "某サービス業 ",
      company: "サービス業",
      content: "ノーコード技術でコストを抑えながら、高品質なWebサイトを制作していただけました。更新も簡単で、運用がとても楽になりました。",
      rating: 5,
      avatar: "/Open Doodles - Together.svg"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* タイトルセクション */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            お客様の声
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            実際にご利用いただいたお客様からの評価をご紹介します
          </p>
        </div>

        {/* お客様の声一覧 */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              {/* 評価星 */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* お客様の声 */}
              <blockquote className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.content}"
              </blockquote>

              {/* お客様情報 */}
              <div className="flex items-center justify-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <Image src={testimonial.avatar} alt="Customer avatar" width={32} height={32} className="w-8 h-8 object-contain" />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 統計情報 */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
            <div className="text-gray-600">業界対応</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
            <div className="text-gray-600">満足度</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">3年</div>
            <div className="text-gray-600">継続率</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">24h</div>
            <div className="text-gray-600">サポート対応</div>
          </div>
        </div>
      </div>
    </section>
  );
}
