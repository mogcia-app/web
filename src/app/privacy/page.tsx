import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'プライバシーポリシー | 株式会社MOGCIA',
  description: '株式会社MOGCIAのプライバシーポリシーについてご説明いたします。',
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 md:p-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              プライバシーポリシー
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-8">
                株式会社MOGCIA（以下「当社」）は、お客様の個人情報の保護に関して、以下のプライバシーポリシーを定め、適切に取り扱うことをお約束いたします。
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. 個人情報の定義</h2>
                <p className="text-gray-600 leading-relaxed">
                  個人情報とは、お客様個人に関する情報であって、氏名、住所、電話番号、メールアドレス、その他の記述等により特定の個人を識別できる情報をいいます。
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. 個人情報の収集</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  当社は、以下の場合に個人情報を収集することがあります：
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>お問い合わせフォームからのご連絡</li>
                  <li>サービス利用時の情報提供</li>
                  <li>資料請求やセミナー参加申し込み</li>
                  <li>その他、お客様から直接提供いただく情報</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. 個人情報の利用目的</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  当社は、収集した個人情報を以下の目的で利用いたします：
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>お客様からのお問い合わせへの回答</li>
                  <li>サービス提供のための業務遂行</li>
                  <li>契約の履行および管理</li>
                  <li>お客様への情報提供（サービス案内、セミナー情報等）</li>
                  <li>サービス改善のための分析</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. 個人情報の第三者提供</h2>
                <p className="text-gray-600 leading-relaxed">
                  当社は、法令に基づく場合を除き、お客様の同意なく個人情報を第三者に提供することはありません。
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. 個人情報の管理</h2>
                <p className="text-gray-600 leading-relaxed">
                  当社は、個人情報の紛失、破壊、改ざん及び漏洩などを防止するため、適切な管理を行います。
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. 個人情報の開示・訂正・削除</h2>
                <p className="text-gray-600 leading-relaxed">
                  お客様ご本人から個人情報の開示、訂正、削除のご請求があった場合、本人確認を行った上で、合理的な期間内に対応いたします。
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Cookieの使用</h2>
                <p className="text-gray-600 leading-relaxed">
                  当社のウェブサイトでは、サービス向上のためCookieを使用する場合があります。Cookieの使用を希望されない場合は、ブラウザの設定で無効にすることができます。
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. プライバシーポリシーの変更</h2>
                <p className="text-gray-600 leading-relaxed">
                  当社は、必要に応じて本プライバシーポリシーを変更することがあります。変更後のプライバシーポリシーは、当社ウェブサイトに掲載した時点で効力を生じるものとします。
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. お問い合わせ</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  個人情報の取扱いに関するお問い合わせは、以下までご連絡ください：
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-700 font-medium">株式会社MOGCIA</p>
                  <p className="text-gray-600">〒810-0001 福岡県福岡市中央区天神4-6-28 いちご天神ノースビル７階</p>
                  <p className="text-gray-600">TEL: 092-517-9804</p>
                  <p className="text-gray-600">Email: info@mogcia.com</p>
                </div>
              </section>

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
