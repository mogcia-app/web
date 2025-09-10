import { Metadata } from 'next';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';

export const metadata: Metadata = {
  title: '私たちについて | WEB制作事業',
  description: 'WEB制作事業の専門性、技術力、サービス内容をご紹介。ベイス Official Partnerとして、最新技術でお客様のビジネス成長をサポートいたします。',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                私たちについて
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              お客様のビジネス成長を加速する
              高品質なWEB制作
              </p>
             
            </div>

            {/* SVG Illustration */}
            <div className="relative">
              <div>
                <Image
                  src="/Open Doodles - Going Fast.svg"
                  alt="WEB制作のスピード感を表現したイラスト"
                  width={500}
                  height={400}
                  className="w-full h-auto"
                  priority
                />
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-blue-400 rounded-full opacity-80 animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-blue-600 rounded-full opacity-80 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      

      {/* HP作成 */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">HP作成</h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                事業ジャンルや目的別に合わせたオリジナルのHP作成します。<br />
                お客様のビジネス特性を深く理解し、ターゲット層に響く
                デザインとコンテンツで差別化を図ります。
                ブランディングからSEO対策まで、総合的なアプローチで
                集客力の高いホームページを構築いたします。
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-600 rounded-full mr-4"></div>
                  <span className="text-gray-700">企業ブランディング</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-600 rounded-full mr-4"></div>
                  <span className="text-gray-700">SEO対策</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-600 rounded-full mr-4"></div>
                  <span className="text-gray-700">レスポンシブ対応</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-600 rounded-full mr-4"></div>
                  <span className="text-gray-700">CMS連携</span>
                </div>
              </div>
            </div>
            <div className="text-center">
              <Image
                src="/undraw_online-test_cqv0.svg"
                alt="オンラインテスト・企業サイトのイラスト"
                width={300}
                height={225}
                className="w-3/4 h-auto mb-4 mx-auto"
              />
              
            </div>
          </div>
        </div>
      </section>

      {/* LP作成 */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="text-center">
                <div className="mx-auto mb-6 flex items-center justify-center">
                  <Image
                    src="/undraw_chat-with-ai_ir62.svg"
                    alt="AI Chat"
                    width={300}
                    height={225}
                    className="w-3/4 h-auto mb-4 mx-auto"
                  />
                </div>
              
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">LP作成</h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                コンバージョン率を最大化するランディングページを制作。
                ユーザーの行動を分析し、最適な導線設計で
                成果につながるページを構築します。
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-600 rounded-full mr-4"></div>
                  <span className="text-gray-700">コンバージョン最適化</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-600 rounded-full mr-4"></div>
                  <span className="text-gray-700">A/Bテスト対応</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-600 rounded-full mr-4"></div>
                  <span className="text-gray-700">ユーザビリティ設計</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-600 rounded-full mr-4"></div>
                  <span className="text-gray-700">トラッキング設定</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ECサイト作成 */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">ECサイト作成</h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                売上を最大化するECサイトを構築いたします。
                決済システムから在庫管理まで、一貫して
                オンラインショップの運営をサポートします。
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-600 rounded-full mr-4"></div>
                  <span className="text-gray-700">決済システム連携</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-600 rounded-full mr-4"></div>
                  <span className="text-gray-700">在庫管理機能</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-600 rounded-full mr-4"></div>
                  <span className="text-gray-700">会員管理システム</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-600 rounded-full mr-4"></div>
                  <span className="text-gray-700">セキュリティ対策</span>
                </div>
              </div>
            </div>
            <div className="text-center">
              <Image
                src="/undraw_stripe-payments_jxnn.svg"
                alt="Stripe決済・ECサイトのイラスト"
                width={300}
                height={225}
                className="w-3/4 h-auto mb-4 mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

    

      {/* Service Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">サービス特徴</h2>
            <p className="text-xl text-gray-600">WEB制作でお客様に提供する価値</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">高速・高パフォーマンス</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Next.jsやReact等の最新技術を活用し、
                高速で軽量なWEBサイトを制作。
                ユーザー体験とSEO効果を最大化します。
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-blue-500 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">レスポンシブ対応</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                スマートフォン、タブレット、デスクトップなど
                あらゆるデバイスで最適な表示を実現。
                モバイルファーストの設計思想で制作。
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">SEO最適化</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                検索エンジン最適化を考慮した設計で、
                お客様のWEBサイトの集客力を向上。
                長期的なビジネス成長をサポート。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">制作プロセス</h2>
            <p className="text-xl text-gray-600">お客様との協働で最適なWEBサイトを制作</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">ヒアリング</h3>
              <p className="text-gray-600 text-sm">
                お客様のビジネス目標や課題を詳しくお聞きし、
                最適なソリューションを提案いたします。
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">設計・企画</h3>
              <p className="text-gray-600 text-sm">
                ユーザビリティとSEOを考慮した
                サイト構成とデザインを企画します。
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">開発・制作</h3>
              <p className="text-gray-600 text-sm">
                最新技術を活用して高品質な
                WEBサイトを開発・制作いたします。
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-orange-600">4</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">運用・サポート</h3>
              <p className="text-gray-600 text-sm">
                公開後の運用サポートと
                継続的な改善をサポートいたします。
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTA />

      <Footer />
    </div>
  );
}
