import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <p className="text-xs text-gray-500 mb-2">BIGSTONEグループ</p>
            <h3 className="text-lg font-semibold mb-4">株式会社ボイジャータナカ</h3>
            <p className="text-gray-400 text-sm">
              〒000-0000<br />
              東京都○○区○○ 1-2-3<br />
              TEL: 03-XXXX-XXXX
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">サイトマップ</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-gray-400 hover:text-white transition">ホーム</Link></li>
              <li><Link href="/greeting" className="text-gray-400 hover:text-white transition">社長あいさつ</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white transition">会社概要</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white transition">事業内容</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition">お問い合わせ</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">お問い合わせ</h3>
            <p className="text-gray-400 text-sm">
              営業時間: 平日 9:00 - 18:00<br />
              Email: info@example.com
            </p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 株式会社ボイジャータナカ All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
