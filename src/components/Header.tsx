'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-gray-100">
      <div className="w-full px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-3 group">
                <div className="w-14 h-14 flex-shrink-0">
                  <img src="/mogcialogo.png" alt="MOGCIA Logo" className="w-full h-full object-contain" />
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">株式会社MOGCIA</span>
                  <span className="text-xs text-gray-500 -mt-1">デジタルで未来を創る</span>
                </div>
              </Link>
             
            </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 ml-auto">
            <Link href="/about" className="px-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 font-medium">
              私たちについて
            </Link>
          
            <Link href="/social" className="px-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 font-medium">
              社会への取り組み
            </Link>
            <Link href="/portfolio" className="px-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 font-medium">
              ポートフォリオ
            </Link>
           
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link href="/faq" className="border border-gray-300 text-gray-700 hover:text-blue-600 hover:border-blue-600 hover:bg-blue-50 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200">
              よくある質問
            </Link>
            <Link href="/contact" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
              <span className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                お問い合わせ
              </span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-4 pb-6 space-y-2 bg-white/95 backdrop-blur-md border-t border-gray-100 rounded-b-2xl shadow-lg">
              <Link
                href="#services"
                className="block px-4 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                サービス一覧
              </Link>
              <Link
                href="/portfolio"
                className="block px-4 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                ポートフォリオ
              </Link>
              <Link
                href="#about"
                className="block px-4 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                私たちについて
              </Link>
              <Link
                href="#contact"
                className="block px-4 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                社会への取り組み
              </Link>
              <div className="pt-4 space-y-2">
                <button className="w-full border border-gray-300 text-gray-700 hover:text-blue-600 hover:border-blue-600 hover:bg-blue-50 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200">
                  よくある質問
                </button>
                <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 shadow-lg">
                  <span className="flex items-center justify-center gap-1.5">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    お問い合わせ
                  </span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
