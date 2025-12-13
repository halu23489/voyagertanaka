import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">お問い合わせ</h1>
            <p className="text-lg text-gray-600">
              お気軽にご相談ください
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* 会社情報カード */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center gap-4 mb-6">
                <Image
                  src="/logo.jpg"
                  alt="株式会社ボイジャータナカ ロゴ"
                  width={60}
                  height={60}
                  className="object-contain"
                />
                <div>
                  <p className="text-xs text-gray-500">BIGSTONEグループ</p>
                  <h2 className="text-2xl font-bold text-gray-900">株式会社ボイジャータナカ</h2>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 text-xl mt-1">📍</span>
                  <div>
                    <p className="font-semibold text-gray-700">所在地</p>
                    <p className="text-gray-600">
                      〒131-0032<br />
                      東京都墨田区業平３丁目 石山ビル
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-blue-600 text-xl mt-1">📞</span>
                  <div>
                    <p className="font-semibold text-gray-700">電話番号</p>
                    <p className="text-gray-600">03-####-####</p>
                    <p className="text-sm text-gray-500">営業時間: 平日 9:00 - 18:00</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-blue-600 text-xl mt-1">📧</span>
                  <div>
                    <p className="font-semibold text-gray-700">メールアドレス</p>
                    <p className="text-gray-600">info@voyager-tanaka.co.jp</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-blue-600 text-xl mt-1">👤</span>
                  <div>
                    <p className="font-semibold text-gray-700">代表取締役</p>
                    <p className="text-gray-600">田中 威</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600">
                  企業理念：<span className="font-semibold text-blue-600">素晴らしい未来を創造する会社</span>
                </p>
              </div>
            </div>

            {/* お問い合わせフォーム */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">お問い合わせフォーム</h2>
              
              <form className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    お名前 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    placeholder="山田 太郎"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    メールアドレス <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    placeholder="example@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    電話番号
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    placeholder="090-1234-5678"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                    お問い合わせ種別 <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  >
                    <option value="">選択してください</option>
                    <option value="consulting">総合コンサルティング</option>
                    <option value="construction">建設・土木事業</option>
                    <option value="it">IT開発事業</option>
                    <option value="accounting">経理サポート事業</option>
                    <option value="gourmet">グルメ批評事業</option>
                    <option value="other">その他</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    お問い合わせ内容 <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
                    placeholder="お問い合わせ内容をご記入ください"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white font-semibold py-4 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
                >
                  送信する
                </button>

                <p className="text-xs text-gray-500 text-center">
                  ※ 通常、1～2営業日以内にご返信いたします
                </p>
              </form>
            </div>
          </div>

          {/* 事業案内 */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">事業内容のご案内</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {[
                { icon: "💼", title: "総合コンサル" },
                { icon: "🏗️", title: "建設・土木" },
                { icon: "💻", title: "IT開発" },
                { icon: "📊", title: "経理サポート" },
                { icon: "🍽️", title: "グルメ批評" }
              ].map((service, index) => (
                <div key={index} className="text-center p-4 rounded-lg hover:bg-blue-50 transition">
                  <span className="text-4xl mb-2 block">{service.icon}</span>
                  <p className="text-sm font-semibold text-gray-700">{service.title}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-600 mt-6">
              詳しくは<a href="/services" className="text-blue-600 hover:underline font-semibold">事業内容ページ</a>をご覧ください
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
