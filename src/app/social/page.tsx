import { Metadata } from 'next';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';

export const metadata: Metadata = {
  title: '社会への取り組み | 株式会社MOGCIA',
  description: '株式会社MOGCIAの社会への取り組みをご紹介。デジタル格差解消、環境配慮、人材育成、地域活性化、社会課題解決を通じて、持続可能な社会の実現に貢献しています。',
};

export default function SocialPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                社会への取り組み
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                株式会社MOGCIAは、デジタル技術を通じて社会課題の解決に取り組み、
                持続可能な社会の実現に貢献しています。
              </p>
            </div>
            <div className="text-center">
              <Image
                src="/Open Doodles - Loving.svg"
                alt="社会への取り組み・愛のイラスト"
                width={300}
                height={225}
                className="w-3/4 h-auto mb-4 mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* デジタル格差解消 */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">デジタル格差解消</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                すべての企業がデジタル化の恩恵を受けられる社会を目指して、
                中小企業のデジタル化支援に取り組んでいます。
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-600 rounded-full mr-4"></div>
                  <span className="text-gray-700">低価格でのWEBサイト制作</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-600 rounded-full mr-4"></div>
                  <span className="text-gray-700">デジタルリテラシー向上支援</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-600 rounded-full mr-4"></div>
                  <span className="text-gray-700">デジタル化コンサルティング</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-600 rounded-full mr-4"></div>
                  <span className="text-gray-700">継続的なサポート体制</span>
                </div>
              </div>
            </div>
            <div className="text-center">
              <Image
                src="/undraw_proud-designer_1rcm.svg"
                alt="デジタル化支援のイラスト"
                width={300}
                height={225}
                className="w-3/4 h-auto mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 環境配慮・サステナビリティ */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 text-center">
              <Image
                src="/undraw_blooming_g9e9.svg"
                alt="環境配慮・サステナビリティのイラスト"
                width={300}
                height={200}
                className="w-3/4 h-auto mx-auto"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">環境配慮・サステナビリティ</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                デジタル化による環境負荷軽減と、持続可能な社会の実現に貢献しています。
                効率的なシステム構築とリモートワーク推進で、環境に配慮した事業運営を心がけています。
              </p>
              <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-blue-600 rounded-full mr-4"></div>
                    <span className="text-gray-700">効率的なクラウドサービスの活用</span>
                  </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-600 rounded-full mr-4"></div>
                  <span className="text-gray-700">紙レス化の推進</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-600 rounded-full mr-4"></div>
                  <span className="text-gray-700">リモートワークの推進</span>
                </div>
              
              </div>
            </div>
          </div>
        </div>
      </section>

 {/* 社会課題解決 */}
 <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">公共分野支援</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                公共分野のデジタル化支援を通じて、社会課題の解決に取り組んでいます。
                公共サービスの向上と市民参加の促進に貢献しています。
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-600 rounded-full mr-4"></div>
                  <span className="text-gray-700">公共機関のデジタル化支援</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-600 rounded-full mr-4"></div>
                  <span className="text-gray-700">行政サービスのWEB制作</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-600 rounded-full mr-4"></div>
                  <span className="text-gray-700">公共情報の分かりやすい発信</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-600 rounded-full mr-4"></div>
                  <span className="text-gray-700">市民参加の促進</span>
                </div>
              </div>
            </div>
            <div className="text-center">
              <Image
                src="/undraw_product-explainer_b7ft.svg"
                alt="社会課題解決のイラスト"
                width={300}
                height={225}
                className="w-3/4 h-auto mx-auto"
              />
            </div>
          </div>
        </div>
      </section>


      {/* 地域活性化支援 */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 text-center">
              <Image
                src="/undraw_coffee.svg"
                alt="地域活性化支援のイラスト"
                width={300}
                height={225}
                className="w-3/4 h-auto mx-auto"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">地域活性化支援</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                地域の魅力をデジタルで発信し、地方創生に貢献しています。
                地方企業・商店のデジタル化を支援し、地域経済の活性化を目指しています。
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-600 rounded-full mr-4"></div>
                  <span className="text-gray-700">地域特産品のECサイト制作</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-600 rounded-full mr-4"></div>
                  <span className="text-gray-700">観光PRサイトの構築</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-600 rounded-full mr-4"></div>
                  <span className="text-gray-700">地域企業のデジタル化支援</span>
                </div>
               
              </div>
            </div>
          </div>
        </div>
      </section>

     
    
      <CTA />
      <Footer />
    </div>
  );
}
