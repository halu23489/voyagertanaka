import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export default function ServicesPage() {
  const services = [
    {
      title: "総合コンサルティング事業",
      icon: "💼",
      image: "/consaru.png",
      description: "企業の課題解決から成長戦略まで、あらゆるビジネスシーンをサポート。経営戦略、業務改善、事業開発など、お客様の目標達成に向けた最適なソリューションをご提案いたします。",
      features: ["経営戦略立案", "業務改善コンサルティング", "事業開発支援", "組織改革サポート"]
    },
    {
      title: "建設・土木事業",
      icon: "🏗️",
      image: "/sekokanri.png",
      description: "土木施工管理と測量技術を駆使し、安全で高品質な建設プロジェクトを実現。豊富な経験と確かな技術力で、インフラ整備から建築工事まで幅広く対応いたします。",
      features: ["土木施工管理", "測量業務", "工事監理", "品質管理"]
    },
    {
      title: "IT開発事業",
      icon: "💻",
      image: "/logo.jpg",
      description: "小規模から中規模まで、お客様のニーズに合わせたシステム開発を提供。Webアプリケーション、業務システム、モバイルアプリなど、最新技術を活用した開発を行います。",
      features: ["Webアプリケーション開発", "業務システム構築", "システム保守・運用", "ITコンサルティング"]
    },
    {
      title: "経理サポート事業",
      icon: "📊",
      image: "/keri.png",
      description: "帳簿作成から経理業務まで、企業の財務管理を徹底サポート。正確で迅速な処理により、経営者の負担を軽減し、本業に集中できる環境を提供いたします。",
      features: ["帳簿作成代行", "月次決算サポート", "経理業務アウトソーシング", "財務分析レポート"]
    },
    {
      title: "グルメ批評事業",
      icon: "🍽️",
      image: "/food.png",
      description: "飲食店の魅力を多角的に評価・発信。プロの視点から料理、サービス、雰囲気を総合的に分析し、お店の価値を最大限に引き出すレビューやコンサルティングを提供します。",
      features: ["飲食店レビュー", "メニュー開発アドバイス", "店舗コンサルティング", "グルメ情報発信"]
    }
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">事業内容</h1>
            <p className="text-lg text-gray-600">
              5つの事業領域で、お客様の多様なニーズにお応えします
            </p>
          </div>

          {/* 中央の円 */}
          <div className="flex justify-center mb-12">
            <div className="w-48 h-48 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full shadow-2xl flex items-center justify-center">
              <div className="text-center">
                <p className="text-white font-bold text-xl mb-2">5つの事業</p>
                <p className="text-white text-sm">で未来を創造</p>
              </div>
            </div>
          </div>

          {/* PC: 星型レイアウト / スマホ: 縦並びレイアウト */}
          <div className="hidden lg:block">
            <div className="relative min-h-[1300px] flex items-center justify-center my-20">
              {services.map((service, index) => {
                const angle = (index * 72 - 90) * (Math.PI / 180);
                const radius = 500;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;
                
                return (
                  <div 
                    key={index}
                    className="absolute w-64 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden"
                    style={{
                      left: '50%',
                      top: '50%',
                      transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`
                    }}
                  >
                    <div className="relative w-full h-32">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <div className="flex flex-col items-center gap-2 mb-3">
                        <span className="text-4xl">{service.icon}</span>
                        <h2 className="text-lg font-bold text-gray-900 text-center">
                          {service.title}
                        </h2>
                      </div>
                      
                      <p className="text-gray-700 leading-relaxed mb-3 text-sm">
                        {service.description}
                      </p>
                      
                      <div className="border-t border-gray-200 pt-2">
                        <h3 className="text-xs font-semibold text-gray-600 mb-2">主なサービス</h3>
                        <ul className="space-y-1">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="text-blue-600 mr-1 text-xs mt-0.5">✓</span>
                              <span className="text-gray-700 text-xs">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      {(index === 0 || index === 1 || index === 3 || index === 4) && (
                        <div className="mt-3 pt-3 border-t border-gray-200">
                          <Link 
                            href={index === 0 ? "/services/consulting" : index === 1 ? "/services/construction" : index === 3 ? "/services/accounting" : "/services/gourmet"}
                            className="block text-center text-blue-600 hover:text-blue-800 font-semibold text-sm"
                          >
                            詳しく見る →
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* スマホ・タブレット用の縦並びレイアウト */}
          <div className="lg:hidden space-y-6">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                {/* 画像 */}
                <div className="relative w-full h-40">
                  <Image 
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-6">
                  <div className="flex flex-col items-center gap-3 mb-4">
                    <span className="text-5xl">{service.icon}</span>
                    <h2 className="text-xl font-bold text-gray-900 text-center">
                      {service.title}
                    </h2>
                  </div>
                
                <p className="text-gray-700 leading-relaxed mb-4 text-sm">
                  {service.description}
                </p>
                
                <div className="border-t border-gray-200 pt-3">
                  <h3 className="text-xs font-semibold text-gray-600 mb-2">主なサービス</h3>
                  <ul className="space-y-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-blue-600 mr-1 text-xs mt-0.5">✓</span>
                        <span className="text-gray-700 text-xs">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {(index === 0 || index === 1 || index === 3 || index === 4) && (
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <Link 
                      href={index === 0 ? "/services/consulting" : index === 1 ? "/services/construction" : index === 3 ? "/services/accounting" : "/services/gourmet"}
                      className="block text-center text-blue-600 hover:text-blue-800 font-semibold text-sm"
                    >
                      詳しく見る →
                    </Link>
                  </div>
                )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              お客様のニーズに合わせた柔軟な対応
            </h2>
            <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
              株式会社ボイジャータナカは、各事業領域のプロフェッショナルが連携し、
              お客様の課題に対して総合的なソリューションを提供いたします。
              まずはお気軽にご相談ください。
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
