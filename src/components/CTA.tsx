import Link from 'next/link';

export default function CTA() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          WEB制作について相談したい
        </h2>
        
        <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
          お客様の目的に合わせて、ご提案いたします。<br />
          まずはお気軽にご相談ください。
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link 
            href="/contact"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
          >
            お問い合わせ
          </Link>
          
          <Link 
            href="/faq"
            className="border border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 rounded-lg font-medium transition-colors"
          >
            よくある質問
          </Link>
        </div>
      </div>
    </section>
  );
}
