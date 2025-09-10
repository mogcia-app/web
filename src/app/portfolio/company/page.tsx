import { Metadata } from 'next';
import CompanyHeader from '@/components/portfolio/CompanyHeader';
import CompanyHero from '@/components/portfolio/CompanyHero';
import CompanyServices from '@/components/portfolio/CompanyServices';
import CompanyFooter from '@/components/portfolio/CompanyFooter';

export const metadata: Metadata = {
  title: '企業サイトポートフォリオ | TechCorp - WEB制作事業',
  description: 'IT企業向けの企業サイトポートフォリオ作品。AI・クラウド・IoT技術を活用したモダンなデザインと機能を実装。',
};

export default function CompanyPortfolioPage() {
  return (
    <div className="min-h-screen bg-white">
      <CompanyHeader />
      <CompanyHero />
      <CompanyServices />
      
      {/* Additional Sections */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">技術スタック</h2>
            <p className="text-xl text-gray-600">このサイトで使用している技術をご紹介</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">フロントエンド</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">React</span>
                  <span className="text-blue-600 font-semibold">✓</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Next.js</span>
                  <span className="text-blue-600 font-semibold">✓</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">TypeScript</span>
                  <span className="text-blue-600 font-semibold">✓</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Tailwind CSS</span>
                  <span className="text-blue-600 font-semibold">✓</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">バックエンド</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Node.js</span>
                  <span className="text-green-600 font-semibold">✓</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">PostgreSQL</span>
                  <span className="text-green-600 font-semibold">✓</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">REST API</span>
                  <span className="text-green-600 font-semibold">✓</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">認証システム</span>
                  <span className="text-green-600 font-semibold">✓</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">その他機能</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">レスポンシブ</span>
                  <span className="text-purple-600 font-semibold">✓</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">SEO対策</span>
                  <span className="text-purple-600 font-semibold">✓</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">パフォーマンス</span>
                  <span className="text-purple-600 font-semibold">✓</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">アクセシビリティ</span>
                  <span className="text-purple-600 font-semibold">✓</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            お客様の企業サイトも
            <span className="block">このように制作いたします</span>
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            業界特性を活かしたデザインと、最新技術を組み合わせた
            高品質な企業サイトを一緒に作り上げましょう。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              お見積り依頼
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              お電話でのお問い合わせ
            </button>
          </div>
        </div>
      </section>

      <CompanyFooter />
    </div>
  );
}



