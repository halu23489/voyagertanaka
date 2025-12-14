import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'

export default function AccountingPage() {
  const services = [
    {
      title: "帳簿作成代行",
      icon: "📖",
      description: "日々の取引記録から仕訳帳、総勘定元帳まで、正確な帳簿作成を代行。経理業務の負担を大幅に軽減します。"
    },
    {
      title: "月次決算サポート",
      icon: "📅",
      description: "毎月の決算業務をスピーディーに処理。経営判断に必要な財務データをタイムリーに提供します。"
    },
    {
      title: "経理業務アウトソーシング",
      icon: "🔄",
      description: "請求書発行、入出金管理、経費精算など、経理業務全般をアウトソーシング。業務効率化とコスト削減を実現します。"
    },
    {
      title: "財務分析レポート",
      icon: "📈",
      description: "財務データを分析し、経営改善に向けた具体的な提案を含むレポートを作成。経営の意思決定をサポートします。"
    }
  ];

  const strengths = [
    {
      title: "正確性",
      description: "ダブルチェック体制により、ミスのない正確な経理処理を実現します。"
    },
    {
      title: "迅速対応",
      description: "締め切り厳守で、スピーディーな処理と報告を行います。"
    },
    {
      title: "コスト削減",
      description: "専任の経理担当者を雇用するよりも、大幅にコストを削減できます。"
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
            alt="経理サポート事業"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/80 to-teal-600/80"></div>
          <div className="relative z-10 text-center text-white px-4">
            <div className="text-6xl mb-4">📊</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">経理サポート事業</h1>
            <p className="text-xl md:text-2xl">
              正確・迅速な経理処理で、経営をサポート
            </p>
          </div>
        </div>

        {/* 事業概要 */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">事業概要</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                帳簿作成から経理業務まで、企業の財務管理を徹底サポート。<br />
                正確で迅速な処理により、経営者の負担を軽減し、<br />
                本業に集中できる環境を提供いたします。
              </p>
            </div>

            {/* メイン画像 */}
            <div className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-xl mb-12">
              <Image 
                src="/keri.png"
                alt="経理サポート"
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

        {/* サポートの流れ */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">サポートの流れ</h2>
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">ヒアリング</h3>
                  <p className="text-gray-700">現状の経理体制と課題をお聞きし、最適なサポート内容をご提案します。</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">契約・準備</h3>
                  <p className="text-gray-700">契約後、必要な資料や情報を共有いただき、業務開始の準備を行います。</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">業務開始</h3>
                  <p className="text-gray-700">定期的なスケジュールで経理業務を処理。迅速かつ正確に対応します。</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">報告・改善提案</h3>
                  <p className="text-gray-700">月次レポートの提出と、経営改善に向けた提案を行います。</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 強み */}
        <section className="py-16 px-4 bg-green-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              ボイジャータナカの経理サポートの強み
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
        <section className="py-16 px-4 bg-gradient-to-r from-green-600 to-teal-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              経理業務でお困りではありませんか？
            </h2>
            <p className="text-xl mb-8">
              まずはお気軽にご相談ください。御社に最適なサポートプランをご提案いたします。
            </p>
            <a 
              href="/contact"
              className="inline-block bg-white text-green-600 font-bold py-4 px-8 rounded-full hover:bg-gray-100 transition-colors text-lg"
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
