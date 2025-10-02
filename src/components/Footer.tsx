import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold text-gray-900 mb-4">株式会社MOGCIA</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              デジタルで未来を創る<br />
              AI技術を活用した<br />
              革新的なWebソリューションを提供
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-gray-900">メニュー</h4>
            <ul className="space-y-3 text-gray-600">
              <li>
                <Link href="/about" className="hover:text-blue-600 transition-colors">
                  私たちについて
                </Link>
              </li>
              <li>
                <Link href="/social" className="hover:text-blue-600 transition-colors">
                  社会への取り組み
                </Link>
              </li>
            
              <li>
                <Link href="/faq" className="hover:text-blue-600 transition-colors">
                  よくある質問
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-600 transition-colors">
                  お問い合わせ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-gray-900">お問い合わせ</h4>
            <div className="space-y-3 text-gray-600">
              <div>
                <p className="font-medium">メール</p>
                <p className="text-sm">info@mogcia.com</p>
              </div>
              <div>
                <p className="font-medium">電話</p>
                <p className="text-sm">092-517-9804</p>
              </div>
              <div>
                <p className="font-medium">営業時間</p>
                <p className="text-sm">平日 9:00-17:00</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-500 text-sm mb-4 md:mb-0">
              <p>&copy; 2023 株式会社MOGCIA. All rights reserved.</p>
            </div>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-gray-500 hover:text-gray-700 text-sm transition-colors">
                プライバシーポリシー
              </Link>
              <Link href="/terms" className="text-gray-500 hover:text-gray-700 text-sm transition-colors">
                利用規約
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
