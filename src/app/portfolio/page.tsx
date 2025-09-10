import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ポートフォリオ | WEB制作事業',
  description: '様々なジャンル・業種のWEBサイト制作実績をご紹介。企業サイト、ECサイト、ランディングページなど、豊富な制作実績があります。',
};

const portfolioData = [
  {
    id: 1,
    title: '株式会社サンプル',
    category: '企業サイト',
    industry: 'IT・テクノロジー',
    description: 'ブランディングを重視した企業サイトの制作。レスポンシブデザインでモバイル対応も完璧。',
    image: '/api/placeholder/400/300',
    technologies: ['React', 'Next.js', 'Tailwind CSS'],
    features: ['レスポンシブデザイン', 'SEO対策', 'CMS連携'],
    color: 'from-blue-400 to-purple-500'
  },
  {
    id: 2,
    title: 'オンラインショップ',
    category: 'ECサイト',
    industry: 'Eコマース',
    description: '高機能なECサイトの構築。決済システムの統合から在庫管理まで完全サポート。',
    image: '/api/placeholder/400/300',
    technologies: ['Vue.js', 'Node.js', 'Stripe'],
    features: ['決済システム', '在庫管理', '会員機能'],
    color: 'from-green-400 to-blue-500'
  },
  {
    id: 3,
    title: 'サービス紹介ページ',
    category: 'ランディングページ',
    industry: 'サービス業',
    description: 'コンバージョン率向上を目的としたランディングページ。A/Bテストで最適化。',
    image: '/api/placeholder/400/300',
    technologies: ['HTML/CSS', 'JavaScript', 'Google Analytics'],
    features: ['A/Bテスト', 'コンバージョン最適化', 'トラッキング'],
    color: 'from-purple-400 to-pink-500'
  },
  {
    id: 4,
    title: '美容サロン',
    category: 'ビジネスサイト',
    industry: '美容・ヘルスケア',
    description: '予約システム付きの美容サロンサイト。美しいデザインと使いやすさを両立。',
    image: '/api/placeholder/400/300',
    technologies: ['WordPress', 'PHP', 'MySQL'],
    features: ['オンライン予約', 'ギャラリー', 'ブログ機能'],
    color: 'from-pink-400 to-rose-500'
  },
  {
    id: 5,
    title: 'レストラン',
    category: 'ビジネスサイト',
    industry: '飲食業',
    description: '料理の魅力を伝えるレストランサイト。メニュー紹介とオンライン予約に対応。',
    image: '/api/placeholder/400/300',
    technologies: ['React', 'TypeScript', 'Firebase'],
    features: ['メニュー表示', 'オンライン予約', '位置情報'],
    color: 'from-orange-400 to-red-500'
  },
  {
    id: 6,
    title: '不動産会社',
    category: 'ビジネスサイト',
    industry: '不動産',
    description: '物件検索機能付きの不動産会社サイト。地図連携で使いやすい検索を実現。',
    image: '/api/placeholder/400/300',
    technologies: ['Next.js', 'PostgreSQL', 'Google Maps API'],
    features: ['物件検索', '地図連携', 'お気に入り機能'],
    color: 'from-teal-400 to-cyan-500'
  },
  {
    id: 7,
    title: '教育サービス',
    category: 'サービスサイト',
    industry: '教育',
    description: 'オンライン学習プラットフォーム。動画配信と進捗管理機能を搭載。',
    image: '/api/placeholder/400/300',
    technologies: ['Vue.js', 'Node.js', 'AWS'],
    features: ['動画配信', '進捗管理', 'テスト機能'],
    color: 'from-indigo-400 to-blue-500'
  },
  {
    id: 8,
    title: 'クリニック',
    category: 'ビジネスサイト',
    industry: '医療',
    description: '患者様に安心感を与える医療機関サイト。予約システムと健康情報を提供。',
    image: '/api/placeholder/400/300',
    technologies: ['React', 'Strapi', 'PostgreSQL'],
    features: ['オンライン予約', '健康情報', '医師紹介'],
    color: 'from-emerald-400 to-green-500'
  }
];

const categories = ['すべて', '企業サイト', 'ECサイト', 'ランディングページ', 'ビジネスサイト', 'サービスサイト'];
const industries = ['すべて', 'IT・テクノロジー', 'Eコマース', 'サービス業', '美容・ヘルスケア', '飲食業', '不動産', '教育', '医療'];

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            ポートフォリオ
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            様々なジャンル・業種のお客様と共に作り上げた数々のプロジェクトをご紹介します。
            それぞれの業界特性を活かした最適なソリューションをご提案いたしました。
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="bg-white border-b border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            <div className="flex flex-wrap gap-2">
              <span className="text-sm font-medium text-gray-700 mr-2">カテゴリー:</span>
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-4 py-2 text-sm rounded-full border border-gray-300 hover:border-blue-500 hover:text-blue-600 transition-colors"
                >
                  {category}
                </button>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="text-sm font-medium text-gray-700 mr-2">業種:</span>
              {industries.map((industry) => (
                <button
                  key={industry}
                  className="px-4 py-2 text-sm rounded-full border border-gray-300 hover:border-blue-500 hover:text-blue-600 transition-colors"
                >
                  {industry}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioData.map((item) => (
              <div key={item.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                {/* Image Placeholder */}
                <div className={`h-48 bg-gradient-to-br ${item.color} flex items-center justify-center`}>
                  <span className="text-white text-lg font-semibold">{item.category}</span>
                </div>
                
                <div className="p-6">
                  {/* Header */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                        {item.category}
                      </span>
                      <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">
                        {item.industry}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {item.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">使用技術</h4>
                    <div className="flex flex-wrap gap-2">
                      {item.technologies.map((tech) => (
                        <span key={tech} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">主な機能</h4>
                    <div className="flex flex-wrap gap-2">
                      {item.features.map((feature) => (
                        <span key={feature} className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* View Details Button */}
                  {item.category === '企業サイト' ? (
                    <a 
                      href="/portfolio/company" 
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors inline-block text-center"
                    >
                      詳細を見る
                    </a>
                  ) : (
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors">
                      詳細を見る
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            お客様のプロジェクトも
            <span className="block">素晴らしい作品に</span>
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            お客様のビジネスに最適なWEBソリューションを一緒に作り上げましょう。
            まずはお気軽にご相談ください。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              無料相談を申し込む
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              お電話でのお問い合わせ
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
