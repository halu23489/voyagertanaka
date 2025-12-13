import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-zinc-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-12 text-center">会社概要</h1>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <table className="w-full">
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50 transition">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 bg-gray-50 w-1/3">
                    会社名
                  </th>
                  <td className="px-6 py-4 text-gray-900">
                    株式会社ボイジャータナカ
                  </td>
                </tr>
                
                <tr className="hover:bg-gray-50 transition">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 bg-gray-50">
                    代表取締役
                  </th>
                  <td className="px-6 py-4 text-gray-900">
                    田中 威
                  </td>
                </tr>
                
                <tr className="hover:bg-gray-50 transition">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 bg-gray-50">
                    親会社
                  </th>
                  <td className="px-6 py-4 text-gray-900">
                    BIGSTONEグループ
                  </td>
                </tr>
                
                <tr className="hover:bg-gray-50 transition">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 bg-gray-50">
                    設立
                  </th>
                  <td className="px-6 py-4 text-gray-900">
                    2022年4月4日
                  </td>
                </tr>
                
                <tr className="hover:bg-gray-50 transition">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 bg-gray-50">
                    資本金
                  </th>
                  <td className="px-6 py-4 text-gray-900">
                    300円
                  </td>
                </tr>
                
                <tr className="hover:bg-gray-50 transition">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 bg-gray-50">
                    従業員数
                  </th>
                  <td className="px-6 py-4 text-gray-900">
                    15名
                  </td>
                </tr>
                
                <tr className="hover:bg-gray-50 transition">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 bg-gray-50">
                    所在地
                  </th>
                  <td className="px-6 py-4 text-gray-900">
                    〒131-0032<br />
                    東京都墨田区業平３丁目 石山ビル
                  </td>
                </tr>
                
                <tr className="hover:bg-gray-50 transition">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 bg-gray-50">
                    電話番号
                  </th>
                  <td className="px-6 py-4 text-gray-900">
                    03-####-####
                  </td>
                </tr>
                
                <tr className="hover:bg-gray-50 transition">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 bg-gray-50">
                    メールアドレス
                  </th>
                  <td className="px-6 py-4 text-gray-900">
                    info@voyager-tanaka.co.jp
                  </td>
                </tr>
                
                <tr className="hover:bg-gray-50 transition">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 bg-gray-50 align-top">
                    事業内容
                  </th>
                  <td className="px-6 py-4 text-gray-900">
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>総合コンサルティング</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>建設業土木施工管理</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>測量</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>IT開発（小規模）</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>帳簿作成代行</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>グルメ批評事業</span>
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-600 text-sm">
              企業理念：素晴らしい未来を創造する会社
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
