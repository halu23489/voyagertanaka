import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
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
          </div>
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-blue-600">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}
