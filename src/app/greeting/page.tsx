import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'

export default function GreetingPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-zinc-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">社長あいさつ</h1>
          
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <div className="relative bg-gray-200 rounded-lg aspect-square overflow-hidden">
                  <Image
                    src="/president.jpg"
                    alt="代表取締役社長 田中 威"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="mt-4 text-center">
                  <p className="font-semibold text-lg">代表取締役社長</p>
                  <p className="text-2xl font-bold text-blue-600 mt-2">田中 威</p>
                </div>
              </div>
              
              <div className="md:w-2/3">
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    この度は、株式会社ボイジャータナカのウェブサイトをご覧いただき、誠にありがとうございます。
                  </p>
                  
                  <p className="text-gray-700 leading-relaxed mb-4">
                    当社は、お客様の夢と目標に向かって、共に航海する「ボイジャー（航海者）」でありたいという想いを込めて事業を展開しております。
                    変化の激しい時代において、常に新しい価値を創造し、お客様と共に成長することを目指しています。
                  </p>
                  
                  <p className="text-gray-700 leading-relaxed mb-4">
                    私たちは、誠実さと革新性を大切にし、お客様一人ひとりに寄り添ったサービスを提供することをお約束いたします。
                    社員一同、お客様の期待を超える価値を届けるため、日々挑戦を続けてまいります。
                  </p>
                  
                  <p className="text-gray-700 leading-relaxed mb-4">
                    今後とも、株式会社ボイジャータナカへのご支援、ご協力を賜りますよう、心よりお願い申し上げます。
                  </p>
                  
                  <div className="mt-8 text-right">
                    <p className="text-gray-600">株式会社ボイジャータナカ</p>
                    <p className="text-xl font-semibold text-gray-900 mt-2">代表取締役社長　田中 威</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
