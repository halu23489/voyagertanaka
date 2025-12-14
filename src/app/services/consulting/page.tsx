import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Link from 'next/link'

export default function ConsultingPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
        {/* ヒーローセクション */}
        <div 
          className="relative text-white py-20"
          style={{
            backgroundImage: 'url(/background.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          {/* 背景オーバーレイ */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-blue-800/80"></div>
          
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <span className="text-6xl mb-4 block">💼</span>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">総合コンサルティング事業</h1>
              <p className="text-xl md:text-2xl text-white drop-shadow-lg">
                企業の課題解決から成長戦略まで、あらゆるビジネスシーンをサポート
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* 事業概要 */}
          <section className="mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">事業概要</h2>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                株式会社ボイジャータナカの総合コンサルティング事業部門では、企業の課題解決から成長戦略まで、
                あらゆるビジネスシーンをサポートしています。経営戦略、業務改善、事業開発など、
                お客様の目標達成に向けた最適なソリューションをご提案いたします。
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                私たちは、お客様のパートナーとして、共に考え、共に行動し、
                持続的な成長を実現するための支援を行います。
              </p>
            </div>
          </section>

          {/* コンサルティングイメージ */}
          <section className="mb-16">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative w-full h-96">
                <Image
                  src="/consaru.png"
                  alt="コンサルティングイメージ"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">戦略的コンサルティング</h3>
                <p className="text-gray-600">
                  豊富な経験と専門知識で、お客様のビジネス成長をサポートします。
                </p>
              </div>
            </div>
          </section>

          {/* 主なサービス */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">主なサービス</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl">📊</span>
                  <h3 className="text-xl font-bold text-gray-900">経営戦略立案</h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  企業のビジョンと現状を分析し、中長期的な経営戦略を策定します。
                  市場環境や競合状況を踏まえた実効性の高い戦略をご提案します。
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>経営ビジョンの策定</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>中期経営計画の立案</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>市場分析・競合調査</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>成長戦略の策定</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl">⚙️</span>
                  <h3 className="text-xl font-bold text-gray-900">業務改善コンサルティング</h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  現場の課題を可視化し、業務プロセスの最適化を支援します。
                  生産性向上とコスト削減を実現する具体的な改善策を提供します。
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>業務フロー分析</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>プロセス改善提案</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>生産性向上支援</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>コスト削減施策</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl">🚀</span>
                  <h3 className="text-xl font-bold text-gray-900">事業開発支援</h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  新規事業の立ち上げから既存事業の拡大まで、事業開発の全プロセスを支援します。
                  市場調査から事業計画策定、実行支援まで一貫してサポートします。
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>新規事業企画</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>事業計画策定</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>市場参入戦略</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>実行支援・伴走</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl">👥</span>
                  <h3 className="text-xl font-bold text-gray-900">組織改革サポート</h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  組織の活性化と変革を推進します。組織診断から制度設計、
                  人材育成まで、強い組織づくりを総合的にサポートします。
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>組織診断・分析</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>組織体制設計</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>人事制度構築</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>人材育成支援</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* コンサルティングの流れ */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">コンサルティングの流れ</h2>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-600">1</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">ヒアリング</h3>
                  <p className="text-sm text-gray-600">
                    現状の課題や目標を詳しくお伺いします
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-600">2</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">分析・診断</h3>
                  <p className="text-sm text-gray-600">
                    データと現場調査で課題を可視化します
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-600">3</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">提案・実行</h3>
                  <p className="text-sm text-gray-600">
                    最適なソリューションを提案し実行支援
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-600">4</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">効果検証</h3>
                  <p className="text-sm text-gray-600">
                    成果を測定し継続的な改善を実現
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 強み */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">当社の強み</h2>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🎯</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">実践的アプローチ</h3>
                  <p className="text-gray-600">
                    理論だけでなく、現場で実行可能な具体的な施策を提案します。
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🤝</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">伴走型支援</h3>
                  <p className="text-gray-600">
                    提案だけでなく、実行段階でも継続的にサポートします。
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🌟</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">多様な専門性</h3>
                  <p className="text-gray-600">
                    様々な業界・業種での豊富な経験とノウハウを活用します。
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center">
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl shadow-xl p-8 text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                総合コンサルティングについてのお問い合わせ
              </h2>
              <p className="text-blue-100 mb-6">
                経営課題のご相談、お見積もりなど、お気軽にお問い合わせください
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-blue-50 transition"
                >
                  お問い合わせ
                </Link>
                <Link 
                  href="/services"
                  className="bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-800 transition"
                >
                  その他の事業を見る
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
