import Image from "next/image";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <div 
        className="flex min-h-screen items-center justify-center relative"
        style={{
          backgroundImage: 'url(/background.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* 背景オーバーレイ */}
        <div className="absolute inset-0 bg-white/30"></div>
        
        <main className="flex flex-col items-center justify-center text-center px-4 py-20 relative z-10">
          <div className="mb-12 animate-fade-in">
            <Image
              src="/logo.jpg"
              alt="株式会社ボイジャータナカ ロゴ"
              width={200}
              height={200}
              priority
              className="object-contain opacity-80"
            />
          </div>
          
          <p className="text-sm md:text-base text-gray-600 mb-2 font-semibold">BIGSTONEグループ</p>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 tracking-wider drop-shadow-lg">
            ボイジャータナカ
          </h1>
          
          <p className="text-3xl md:text-4xl font-extrabold mb-12 tracking-wide" style={{
            color: '#1a1a1a',
            textShadow: '2px 2px 4px rgba(255, 255, 255, 0.8), -1px -1px 2px rgba(255, 255, 255, 0.8)',
            WebkitTextStroke: '1px rgba(0, 0, 0, 0.1)'
          }}>
            素晴らしい未来を創造する会社
          </p>
        </main>
      </div>
      <Footer />
    </>
  );
}
