import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'お問い合わせ | 株式会社MOGCIA',
  description: '株式会社MOGCIAへのお問い合わせはこちらから。WEB制作、ECサイト制作、ランディングページ制作など、お気軽にご相談ください。無料相談も承っております。',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            お問い合わせ
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            WEB制作についてご相談がございましたら、お気軽にお問い合わせください。<br />
            お客様のご要望をお聞かせいただき、最適なご提案をいたします。
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">お問い合わせフォーム</h2>
              
              <form className="formrun space-y-6" action="https://form.run/api/v1/r/x8bs5im8gfdxx6jsv2ahrgex" method="post">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    お名前
                  </label>
                  <input
                    name="お名前"
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="山田太郎"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    会社名
                  </label>
                  <input
                    name="会社名"
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="株式会社○○"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    メールアドレス <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="メールアドレス"
                    type="text"
                    data-formrun-type="email"
                    data-formrun-required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="example@company.com"
                  />
                  <div data-formrun-show-if-error="メールアドレス" className="text-red-500 text-sm mt-1">
                    メールアドレスを正しく入力してください
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    電話番号
                  </label>
                  <input
                    name="電話番号"
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="03-1234-5678"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    ご希望のサービス
                  </label>
                  <select
                    name="ご希望のサービス"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  >
                    <option value="">選択してください</option>
                    <option value="企業サイト制作">企業サイト制作</option>
                    <option value="ECサイト制作">ECサイト制作</option>
                    <option value="ランディングページ制作">ランディングページ制作</option>
                    <option value="CMS連携">CMS連携</option>
                    <option value="サイト保守・運用">サイト保守・運用</option>
                    <option value="無料相談">無料相談</option>
                    <option value="その他">その他</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    ご予算
                  </label>
                  <select
                    name="ご予算"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  >
                    <option value="">選択してください</option>
                    <option value="30万円未満">30万円未満</option>
                    <option value="30万円〜50万円">30万円〜50万円</option>
                    <option value="50万円〜100万円">50万円〜100万円</option>
                    <option value="100万円〜200万円">100万円〜200万円</option>
                    <option value="200万円以上">200万円以上</option>
                    <option value="未定">未定</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    お問い合わせ内容 <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="お問い合わせ"
                    rows={6}
                    data-formrun-required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
                    placeholder="ご要望やご質問をお聞かせください"
                  ></textarea>
                  <div data-formrun-show-if-error="お問い合わせ" className="text-red-500 text-sm mt-1">
                    お問い合わせ内容を入力してください
                  </div>
                </div>
                
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    name="個人情報利用同意"
                    data-formrun-required
                    className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label className="ml-2 text-sm text-gray-600">
                    <a href="/privacy" className="text-blue-600 hover:text-blue-800 underline">
                      プライバシーポリシー
                    </a>
                    に同意します <span className="text-red-500">*</span>
                  </label>
                  <div data-formrun-show-if-error="個人情報利用同意" className="text-red-500 text-sm mt-1 ml-2">
                    同意してください
                  </div>
                </div>
                
                {/* ボット投稿をブロックするためのタグ */}
                <div className="_formrun_gotcha" style={{position: 'absolute', height: '1px', width: '1px', overflow: 'hidden'}}>
                  <label htmlFor="_formrun_gotcha">If you are a human, ignore this field</label>
                  <input type="text" name="_formrun_gotcha" id="_formrun_gotcha" tabIndex={-1} />
                </div>
                
                <button
                  type="submit"
                  data-formrun-error-text="未入力の項目があります"
                  data-formrun-submitting-text="送信中..."
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                >
                  お問い合わせを送信
                </button>
              </form>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-8">
              
              {/* Company Info */}
              <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">会社情報</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900">株式会社MOGCIA</h3>
                    <p className="text-gray-600">デジタルで未来を創る</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">所在地</h4>
                    <p className="text-gray-600">福岡県福岡市中央区天神4-6-28 <br />いちご天神ノースビル７階</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">電話番号</h4>
                    <p className="text-gray-600">092-517-9804</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">メールアドレス</h4>
                    <p className="text-gray-600">info@mogcia.com</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">営業時間</h4>
                    <p className="text-gray-600">平日 9:00〜17:00</p>
                  </div>
                </div>
              </div>
              
              {/* Response Time */}
              <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">お問い合わせへの回答</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">平日：24時間以内に回答</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">土日祝：翌営業日に回答</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">緊急の場合はお電話でご連絡ください</span>
                  </div>
                </div>
              </div>
              
              {/* Services */}
              <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">対応サービス</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">企業サイト制作</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">ECサイト制作</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">ランディングページ制作</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">CMS連携</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">サイト保守・運用</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">無料相談</span>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>

      <Footer />
      
      {/* Formrun Script */}
      <script src="https://sdk.form.run/js/v2/formrun.js"></script>
    </div>
  );
}
