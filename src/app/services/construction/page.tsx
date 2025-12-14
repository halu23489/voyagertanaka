import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Link from 'next/link'

export default function ConstructionPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
        {/* ヒーローセクション */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <span className="text-6xl mb-4 block">🏗️</span>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">建設・土木事業</h1>
              <p className="text-xl md:text-2xl text-blue-100">
                安全で高品質な建設プロジェクトを実現
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
                株式会社ボイジャータナカの建設・土木事業部門では、土木施工管理と測量技術を駆使し、
                安全で高品質な建設プロジェクトを実現しています。豊富な経験と確かな技術力で、
                インフラ整備から建築工事まで幅広く対応いたします。
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                私たちは、お客様の夢を形にするパートナーとして、プロジェクトの計画段階から完成まで、
                一貫したサポートを提供いたします。
              </p>
            </div>
          </section>

          {/* 施工管理イメージ */}
          <section className="mb-16">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative w-full h-96">
                <Image
                  src="/sekokanri.png"
                  alt="施工管理イメージ"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">施工管理の現場</h3>
                <p className="text-gray-600">
                  最新の技術と豊富な経験で、安全かつ効率的な施工管理を実現します。
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
                  <span className="text-4xl">📐</span>
                  <h3 className="text-xl font-bold text-gray-900">土木施工管理</h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  道路、橋梁、トンネルなどの土木工事における施工管理を専門的に行います。
                  工程管理、品質管理、安全管理を徹底し、プロジェクトを成功に導きます。
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>工程計画の立案・管理</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>品質管理・検査</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>安全管理体制の構築</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>協力会社との調整</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl">🗺️</span>
                  <h3 className="text-xl font-bold text-gray-900">測量業務</h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  最新の測量機器と技術を用いて、正確な測量データを提供します。
                  基準点測量から路線測量まで、あらゆる測量ニーズに対応いたします。
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>基準点測量</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>路線測量</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>現況測量</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>3Dレーザー測量</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl">🔍</span>
                  <h3 className="text-xl font-bold text-gray-900">工事監理</h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  設計図書に基づいた適切な工事の実施を監督します。
                  発注者の立場に立って、工事の品質確保と適正な施工を確認します。
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>設計図書との照合</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>施工状況の確認</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>品質検査の立会い</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>完成検査の実施</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl">✅</span>
                  <h3 className="text-xl font-bold text-gray-900">品質管理</h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  ISO基準に準拠した品質管理体制で、高品質な工事を保証します。
                  各工程での厳格な検査により、完成後の品質を確保します。
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>材料試験・検査</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>施工品質の確認</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>品質記録の作成</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>是正措置の実施</span>
                  </li>
                </ul>
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
                    <span className="text-3xl">💪</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">豊富な実績</h3>
                  <p className="text-gray-600">
                    多数のプロジェクトで培った経験とノウハウで、確実な成果を提供します。
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🛡️</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">安全第一</h3>
                  <p className="text-gray-600">
                    徹底した安全管理体制により、無事故での工事完成を目指します。
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">⚙️</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">最新技術</h3>
                  <p className="text-gray-600">
                    ICT技術や最新機器を活用し、効率的で高品質な施工を実現します。
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center">
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl shadow-xl p-8 text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                建設・土木事業についてのお問い合わせ
              </h2>
              <p className="text-blue-100 mb-6">
                プロジェクトのご相談、お見積もりなど、お気軽にお問い合わせください
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
