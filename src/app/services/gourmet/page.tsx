import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'

export default function GourmetPage() {
  const services = [
    {
      title: "飲食店評価・レビュー",
      icon: "⭐",
      description: "プロの目線で料理の味、盛り付け、サービス、雰囲気を総合的に評価。公平で詳細なレビューを提供し、お店の魅力を正確に伝えます。"
    },
    {
      title: "メニュー開発コンサルティング",
      icon: "📋",
      description: "お客様のニーズとトレンドを分析し、魅力的なメニュー開発をサポート。原価管理から価格設定まで、収益性の高いメニュー構成をご提案します。"
    },
    {
      title: "店舗改善アドバイス",
      icon: "💡",
      description: "サービス品質、店内環境、顧客体験の向上に向けた具体的な改善提案。実践的なアドバイスで、お店の評判と売上向上をサポートします。"
    },
    {
      title: "グルメメディア運営",
      icon: "📱",
      description: "SNSやWebサイトを通じて、魅力的な飲食店情報を発信。写真撮影から記事執筆まで、プロフェッショナルなコンテンツ制作を行います。"
    }
  ];

  const strengths = [
    {
      title: "豊富な評価実績",
      description: "数多くの飲食店を評価してきた経験と実績により、的確で信頼性の高い評価を提供します。"
    },
    {
      title: "多角的な視点",
      description: "料理、サービス、雰囲気、コストパフォーマンスなど、あらゆる角度から総合的に評価します。"
    },
    {
      title: "業界知識",
      description: "最新のグルメトレンドや飲食業界の動向を常に把握し、時代に合った評価とアドバイスを提供します。"
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
            alt="グルメ批評事業"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600/80 to-red-600/80"></div>
          <div className="relative z-10 text-center text-white px-4">
            <div className="text-6xl mb-4">🍽️</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">グルメ批評事業</h1>
            <p className="text-xl md:text-2xl">
              食の魅力を発見し、価値を最大化する
            </p>
          </div>
        </div>

        {/* 事業概要 */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">事業概要</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                飲食店の魅力を多角的に評価・発信するグルメ批評事業。<br />
                プロフェッショナルな視点から、料理、サービス、雰囲気を総合的に分析し、<br />
                お店の価値を最大限に引き出すレビューやコンサルティングを提供します。
              </p>
            </div>

            {/* メイン画像 */}
            <div className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-xl mb-12">
              <Image 
                src="/food.png"
                alt="グルメ批評"
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

        {/* 評価の流れ */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">評価の流れ</h2>
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">事前調査</h3>
                  <p className="text-gray-700">お店の基本情報、メニュー、評判などを事前にリサーチします。</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">実地訪問・評価</h3>
                  <p className="text-gray-700">実際にお店を訪れ、料理、サービス、雰囲気などを詳細に評価します。</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">総合分析</h3>
                  <p className="text-gray-700">多角的な視点から総合的に分析し、強みと改善点を明確にします。</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">レポート提出・発信</h3>
                  <p className="text-gray-700">詳細なレビューレポートを作成し、メディアやSNSで発信します。</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 強み */}
        <section className="py-16 px-4 bg-orange-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              ボイジャータナカのグルメ批評の強み
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
        <section className="py-16 px-4 bg-gradient-to-r from-orange-600 to-red-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              お店の魅力を最大限に引き出しませんか？
            </h2>
            <p className="text-xl mb-8">
              グルメ批評やコンサルティングのご相談は、お気軽にお問い合わせください。
            </p>
            <a 
              href="/contact"
              className="inline-block bg-white text-orange-600 font-bold py-4 px-8 rounded-full hover:bg-gray-100 transition-colors text-lg"
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
