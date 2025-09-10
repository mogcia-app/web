'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function CompanyHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-2xl">T</span>
              </div>
              <div>
                <span className="text-2xl font-bold text-gray-900">TechCorp</span>
                <div className="text-sm text-gray-600">Technology Solutions</div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            <Link href="#about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              会社概要
            </Link>
            <Link href="#services" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              サービス
            </Link>
            <Link href="#solutions" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              ソリューション
            </Link>
            <Link href="#news" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              ニュース
            </Link>
            <Link href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              お問い合わせ
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
              お見積り依頼
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600"
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
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              <Link
                href="#about"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                会社概要
              </Link>
              <Link
                href="#services"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                サービス
              </Link>
              <Link
                href="#solutions"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                ソリューション
              </Link>
              <Link
                href="#news"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                ニュース
              </Link>
              <Link
                href="#contact"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                お問い合わせ
              </Link>
              <div className="pt-4">
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                  お見積り依頼
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}



