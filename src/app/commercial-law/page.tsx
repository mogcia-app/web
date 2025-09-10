import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: '特定商取引法に基づく表記 | 株式会社MOGCIA',
  description: '株式会社MOGCIAの特定商取引法に基づく表記についてご説明いたします。',
};

export default function CommercialLaw() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 md:p-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              特定商取引法に基づく表記
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-8">
                株式会社MOGCIAは、特定商取引法に基づき、以下の通り表記いたします。
              </p>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <tbody>
                    <tr className="border-b border-gray-300">
                      <td className="border-r border-gray-300 bg-gray-50 px-6 py-4 font-semibold text-gray-900 w-1/3">
                        販売業者
                      </td>
                      <td className="px-6 py-4 text-gray-700">
                        株式会社MOGCIA
                      </td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="border-r border-gray-300 bg-gray-50 px-6 py-4 font-semibold text-gray-900">
                        代表者
                      </td>
                      <td className="px-6 py-4 text-gray-700">
                        代表取締役
                      </td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="border-r border-gray-300 bg-gray-50 px-6 py-4 font-semibold text-gray-900">
                        所在地
                      </td>
                      <td className="px-6 py-4 text-gray-700">
                        〒810-0001<br />
                        福岡県福岡市中央区天神4-6-28<br />
                        いちご天神ノースビル７階
                      </td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="border-r border-gray-300 bg-gray-50 px-6 py-4 font-semibold text-gray-900">
                        電話番号
                      </td>
                      <td className="px-6 py-4 text-gray-700">
                        092-517-9804
                      </td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="border-r border-gray-300 bg-gray-50 px-6 py-4 font-semibold text-gray-900">
                        メールアドレス
                      </td>
                      <td className="px-6 py-4 text-gray-700">
                        info@mogcia.com
                      </td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="border-r border-gray-300 bg-gray-50 px-6 py-4 font-semibold text-gray-900">
                        営業時間
                      </td>
                      <td className="px-6 py-4 text-gray-700">
                        平日 9:00〜17:00<br />
                        （土日祝日は休業）
                      </td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="border-r border-gray-300 bg-gray-50 px-6 py-4 font-semibold text-gray-900">
                        商品・サービス
                      </td>
                      <td className="px-6 py-4 text-gray-700">
                        WEBサイト制作・構築<br />
                        ランディングページ制作<br />
                        ECサイト構築<br />
                        モバイル対応<br />
                        SEO対策<br />
                        その他WEB制作に関するサービス
                      </td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="border-r border-gray-300 bg-gray-50 px-6 py-4 font-semibold text-gray-900">
                        商品代金以外の必要料金
                      </td>
                      <td className="px-6 py-4 text-gray-700">
                        サーバー代、ドメイン代、SSL証明書代等の<br />
                        別途費用が発生する場合があります。<br />
                        詳細はお見積もり時にご案内いたします。
                      </td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="border-r border-gray-300 bg-gray-50 px-6 py-4 font-semibold text-gray-900">
                        支払方法
                      </td>
                      <td className="px-6 py-4 text-gray-700">
                        銀行振込<br />
                        クレジットカード決済<br />
                        その他、ご相談に応じます
                      </td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="border-r border-gray-300 bg-gray-50 px-6 py-4 font-semibold text-gray-900">
                        支払時期
                      </td>
                      <td className="px-6 py-4 text-gray-700">
                        契約締結時：契約金（総額の50%）<br />
                        制作完了時：残金（総額の50%）<br />
                        ※分割払いもご相談に応じます
                      </td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="border-r border-gray-300 bg-gray-50 px-6 py-4 font-semibold text-gray-900">
                        商品の引渡時期
                      </td>
                      <td className="px-6 py-4 text-gray-700">
                        ご契約内容により異なりますが、<br />
                        概ね1〜3ヶ月程度を目安としています。<br />
                        詳細はお見積もり時にご案内いたします。
                      </td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="border-r border-gray-300 bg-gray-50 px-6 py-4 font-semibold text-gray-900">
                        返品・交換・キャンセル
                      </td>
                      <td className="px-6 py-4 text-gray-700">
                        お客様のご都合による返品・交換・キャンセルは<br />
                        原則としてお受けできません。<br />
                        ただし、当社の責に帰すべき事由がある場合は<br />
                        この限りではありません。
                      </td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="border-r border-gray-300 bg-gray-50 px-6 py-4 font-semibold text-gray-900">
                        動作環境
                      </td>
                      <td className="px-6 py-4 text-gray-700">
                        制作するWEBサイトは、主要なブラウザ<br />
                        （Chrome、Firefox、Safari、Edge）で<br />
                        動作することを保証いたします。<br />
                        古いブラウザについては動作保証外となります。
                      </td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="border-r border-gray-300 bg-gray-50 px-6 py-4 font-semibold text-gray-900">
                        免責事項
                      </td>
                      <td className="px-6 py-4 text-gray-700">
                        当社は、お客様のWEBサイトの運用・保守について<br />
                        一切の責任を負いません。<br />
                        また、制作したWEBサイトの効果・成果についても<br />
                        保証いたしません。
                      </td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="border-r border-gray-300 bg-gray-50 px-6 py-4 font-semibold text-gray-900">
                        その他
                      </td>
                      <td className="px-6 py-4 text-gray-700">
                        上記以外の事項については、<br />
                        個別にご相談・ご案内いたします。<br />
                        お気軽にお問い合わせください。
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">お問い合わせ</h3>
                <p className="text-blue-800 mb-4">
                  特定商取引法に関するご質問やご不明な点がございましたら、以下までお気軽にお問い合わせください。
                </p>
                <div className="text-blue-700">
                  <p className="font-medium">株式会社MOGCIA</p>
                  <p>〒810-0001 福岡県福岡市中央区天神4-6-28 いちご天神ノースビル７階</p>
                  <p>TEL: 092-517-9804</p>
                  <p>Email: info@mogcia.com</p>
                </div>
              </div>

              <div className="text-right text-sm text-gray-500 mt-12">
                <p>制定日：2025年1月1日</p>
                <p>最終更新日：2025年1月1日</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
