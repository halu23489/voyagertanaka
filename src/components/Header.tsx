'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo.jpg"
                alt="株式会社ボイジャータナカ ロゴ"
                width={40}
                height={40}
                className="object-contain"
              />
              <div className="flex flex-col">
                <span className="text-xs text-gray-500">BIGSTONEグループ</span>
                <span className="text-xl font-bold text-blue-600">株式会社ボイジャータナカ</span>
              </div>
            </Link>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition">
              ホーム
            </Link>
            <Link href="/greeting" className="text-gray-700 hover:text-blue-600 transition">
              社長あいさつ
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 transition">
              会社概要
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-blue-600 transition">
              事業内容
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition">
              お問い合わせ
            </Link>
            <a 
              href="https://oishi-tech-4v38w78qz-halu23489s-projects.vercel.app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-600 transition flex items-center gap-1"
            >
              親会社サイト
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 p-2"
              aria-label="メニュー"
            >
              {isMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* モバイルメニュー */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-3">
              <Link 
                href="/" 
                className="text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition px-4 py-2 rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                ホーム
              </Link>
              <Link 
                href="/greeting" 
                className="text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition px-4 py-2 rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                社長あいさつ
              </Link>
              <Link 
                href="/about" 
                className="text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition px-4 py-2 rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                会社概要
              </Link>
              <Link 
                href="/services" 
                className="text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition px-4 py-2 rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                事業内容
              </Link>
              <Link 
                href="/contact" 
                className="text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition px-4 py-2 rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                お問い合わせ
              </Link>
              <a 
                href="https://oishi-tech-4v38w78qz-halu23489s-projects.vercel.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition px-4 py-2 rounded flex items-center gap-2"
                onClick={() => setIsMenuOpen(false)}
              >
                親会社サイト
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
