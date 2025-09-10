import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-6">
              
              <h3 className="text-2xl font-bold">株式会社MOGCIA</h3>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              デジタル技術を通じて社会課題の解決に取り組み、<br />
              持続可能な社会の実現に貢献するWEB制作会社です。<br />
              お客様のビジネス成長を全力でサポートいたします。
            </p>
            
          </div>

          {/* Services */}
          

          {/* Company Pages */}
          <div>
            <h4 className="font-semibold mb-6 text-lg">メニュー</h4>
            <ul className="space-y-3 text-gray-300">
              <li>
                <Link href="/about" className="hover:text-blue-400 transition-colors flex items-center group">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 group-hover:bg-blue-400"></span>
                  私たちについて
                </Link>
              </li>
              <li>
                <Link href="/social" className="hover:text-blue-400 transition-colors flex items-center group">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 group-hover:bg-blue-400"></span>
                  社会への取り組み
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-blue-400 transition-colors flex items-center group">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 group-hover:bg-blue-400"></span>
                  ポートフォリオ
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-blue-400 transition-colors flex items-center group">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 group-hover:bg-blue-400"></span>
                  よくある質問
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-400 transition-colors flex items-center group">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 group-hover:bg-blue-400"></span>
                  お問い合わせ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-6 text-lg">お問い合わせ</h4>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium">メール</p>
                  <p className="text-sm text-gray-400">info@mogcia.com</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium">電話</p>
                  <p className="text-sm text-gray-400">092-517-9804</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium">営業時間</p>
                  <p className="text-sm text-gray-400">平日 9:00-17:00</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium">所在地</p>
                  <p className="text-sm text-gray-400">福岡県福岡市中央区天神4-6-28<br />いちご天神ノースビル７階</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              <p>&copy; 2025 株式会社MOGCIA. All rights reserved.</p>
            </div>
            <div className="flex flex-wrap justify-center md:justify-end space-x-6">
              <Link href="/privacy" className="text-gray-400 hover:text-blue-400 text-sm transition-colors py-1">
                プライバシーポリシー
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-blue-400 text-sm transition-colors py-1">
                利用規約
              </Link>
              
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
