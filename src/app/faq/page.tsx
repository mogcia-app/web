import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';


export const metadata: Metadata = {
  title: 'よくある質問 | 株式会社MOGCIA',
  description: '株式会社MOGCIAのWEB制作サービスに関するよくある質問をご紹介。料金、制作期間、技術、サポートなど、お客様からよくいただくご質問にお答えします。',
};

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            よくある質問
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            WEB制作サービスに関するよくあるご質問にお答えします。<br />
            お客様からよくいただくご質問をまとめました。
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            
            {/* 料金について */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">料金について</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Q. WEBサイト制作の料金はどのくらいですか？</h3>
                  <p className="text-gray-600 leading-relaxed">
                    A. プロジェクトの規模や要件によって異なります。
                    お客様のご要望をお聞かせいただければ、詳細な見積もりをご提示いたします。
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Q. 追加料金は発生しますか？</h3>
                  <p className="text-gray-600 leading-relaxed">
                    A. 基本的には見積もり時点で確定した範囲内での制作となります。
                    大幅な仕様変更や追加機能のご要望がある場合は、事前にご相談いただき、追加料金についてご説明いたします。
                  </p>
                </div>
              </div>
            </div>

            {/* 制作期間について */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">制作期間について</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Q. 制作期間はどのくらいかかりますか？</h3>
                  <p className="text-gray-600 leading-relaxed">
                    A. 一般的な企業サイトで2ヶ月、ECサイトで3ヶ月程度です。
                    お客様のご要望やコンテンツの準備状況によって変動いたします。
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Q. 急ぎの制作にも対応してもらえますか？</h3>
                  <p className="text-gray-600 leading-relaxed">
                    A. 可能な限り対応いたします。ただし、品質を保つためにも、十分な制作期間を確保することをお勧めします。
                    急ぎのご依頼の場合は、まずはご相談ください。
                  </p>
                </div>
              </div>
            </div>

            {/* 技術について */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">技術について</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Q. どのような技術を使用していますか？</h3>
                  <p className="text-gray-600 leading-relaxed">
                    A.最新のフロントエンド技術を活用しています。
                    ベイス Official Partnerとして、業界最先端の技術ノウハウを提供いたします。
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Q. スマートフォン対応はしていますか？</h3>
                  <p className="text-gray-600 leading-relaxed">
                    A. はい、レスポンシブデザインでスマートフォン、タブレット、PCすべてのデバイスに対応いたします。
                    モバイルファーストの設計で、ユーザビリティを重視した制作を行います。
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Q. SEO対策は含まれていますか？</h3>
                  <p className="text-gray-600 leading-relaxed">
                    A. はい、基本的なSEO対策は制作に含まれています。
                    検索エンジン最適化、ページ速度の最適化、構造化データの実装などを行います。
                  </p>
                </div>
              </div>
            </div>

            {/* サポートについて */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">サポートについて</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Q. 制作後のサポートはありますか？</h3>
                  <p className="text-gray-600 leading-relaxed">
                    A. はい、制作後のサポートプランをご用意しています。
                    コンテンツ更新、メンテナンス、技術サポートなど、お客様のご要望に応じてサポートいたします。
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Q. コンテンツの更新は自分でできますか？</h3>
                  <p className="text-gray-600 leading-relaxed">
                    A. CMS連携により、お客様ご自身でコンテンツの更新が可能です。
                    操作方法のご説明や、必要に応じてサポートもいたします。
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Q. サーバーの管理は必要ですか？</h3>
                  <p className="text-gray-600 leading-relaxed">
                    A. 当社でサーバー管理も承ることができます。
                    お客様のご要望に応じて、サーバー選定から運用までサポートいたします。
                  </p>
                </div>
              </div>
            </div>

            {/* その他 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">その他</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Q. ドメイン取得は対応してもらえますか？</h3>
                  <p className="text-gray-600 leading-relaxed">
                    A. はい、ドメイン取得から設定まで対応いたします。
                    お客様のご希望のドメイン名をお聞かせください。
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Q. 既存サイトのリニューアルも対応していますか？</h3>
                  <p className="text-gray-600 leading-relaxed">
                    A. はい、既存サイトのリニューアルも承っております。
                    現在のサイトの課題を分析し、改善提案をいたします。
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Q. 無料相談はありますか？</h3>
                  <p className="text-gray-600 leading-relaxed">
                    A. はい、初回のご相談は無料です。
                    お気軽にお問い合わせください。お客様のご要望をお聞かせいただき、最適なご提案をいたします。
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            他にもご質問がございましたら
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            上記以外にもご質問がございましたら、お気軽にお問い合わせください。<br />
            専門スタッフが丁寧にお答えいたします。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              お問い合わせ
            </button>
           
          </div>
        </div>
      </section>

    
      <Footer />
    </div>
  );
}
