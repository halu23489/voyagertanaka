import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'

export default function ITPage() {
  const services = [
    {
      title: "Webアプリケーション開発",
      icon: "🌐",
      description: "Next.js、React、Vue.jsなどの最新フレームワークを使用した、モダンで高性能なWebアプリケーションを開発します。"
    },
    {
      title: "業務システム構築",
      icon: "💼",
      description: "企業の業務フローに合わせた、効率的な業務システムを構築。在庫管理、顧客管理など、ニーズに応じたカスタマイズが可能です。"
    },
    {
      title: "システム保守・運用",
      icon: "🔧",
      description: "既存システムの保守、アップデート、トラブル対応など、安定稼働をサポート。定期的なメンテナンスで長期的な運用を実現します。"
    },
    {
      title: "ITコンサルティング",
      icon: "💡",
      description: "ITシステムの導入・改善に関するコンサルティング。最適な技術選定から導入計画まで、包括的にサポートします。"
    }
  ];

  const techStack = [
    {
      category: "フロントエンド",
      technologies: ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS"]
    },
    {
      category: "バックエンド",
      technologies: ["Node.js", "Python", "PHP", "PostgreSQL", "MongoDB"]
    },
    {
      category: "クラウド・インフラ",
      technologies: ["AWS", "Vercel", "Docker", "GitHub Actions"]
    }
  ];

  const strengths = [
    {
      title: "最新技術の活用",
      description: "常に最新のトレンドと技術をキャッチアップし、モダンで保守性の高いシステムを開発します。"
    },
    {
      title: "柔軟な対応",
      description: "小規模から中規模まで、お客様の予算と要件に合わせた柔軟な開発が可能です。"
    },
    {
      title: "アジャイル開発",
      description: "素早いフィードバックサイクルで、お客様のニーズを的確に反映したシステムを構築します。"
    }
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* ヒーローセクション */}
        <div className="relative h-[400px] flex items-center justify-center">
          <Image 
            src="/background.png"
            alt="IT開発事業"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-purple-600/80"></div>
          <div className="relative z-10 text-center text-white px-4">
            <div className="text-6xl mb-4">💻</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">IT開発事業</h1>
            <p className="text-xl md:text-2xl">
              最新技術で、ビジネスの未来を創る
            </p>
          </div>
        </div>

        {/* 事業概要 */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">事業概要</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                小規模から中規模まで、お客様のニーズに合わせたシステム開発を提供。<br />
                Webアプリケーション、業務システム、モバイルアプリなど、<br />
                最新技術を活用した開発を行います。
              </p>
            </div>

            {/* メイン画像 */}
            <div className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-xl mb-12">
              <Image 
                src="/LINE.png"
                alt="IoT・LINE連携開発"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* サービス内容 */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">サービス内容</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow"
                >
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 技術スタック */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">使用技術</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {techStack.map((stack, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 shadow-md"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{stack.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {stack.technologies.map((tech, idx) => (
                      <span 
                        key={idx}
                        className="bg-white px-3 py-1 rounded-full text-sm text-gray-700 shadow-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 開発の流れ */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">開発の流れ</h2>
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">要件ヒアリング</h3>
                  <p className="text-gray-700">お客様のビジネス目標と課題をヒアリングし、最適なソリューションを提案します。</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">設計・見積もり</h3>
                  <p className="text-gray-700">システム設計と開発スケジュール、費用のお見積もりを提示します。</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">開発・テスト</h3>
                  <p className="text-gray-700">アジャイル開発手法で、定期的にフィードバックを受けながら開発を進めます。</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">納品・運用サポート</h3>
                  <p className="text-gray-700">システムを納品後も、運用サポートやメンテナンスを継続的に提供します。</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 強み */}
        <section className="py-16 px-4 bg-blue-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              ボイジャータナカのIT開発の強み
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {strengths.map((strength, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-md"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{strength.title}</h3>
                  <p className="text-gray-700">{strength.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              システム開発のご相談はお気軽に
            </h2>
            <p className="text-xl mb-8">
              小さな課題から大きな挑戦まで、まずはお話をお聞かせください。
            </p>
            <a 
              href="/contact"
              className="inline-block bg-white text-blue-600 font-bold py-4 px-8 rounded-full hover:bg-gray-100 transition-colors text-lg"
            >
              お問い合わせはこちら
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
