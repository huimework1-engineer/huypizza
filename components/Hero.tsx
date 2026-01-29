
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative pt-24 pb-16 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-gradient-to-l from-green-50 to-transparent opacity-50" />
      <div className="absolute top-20 right-10 -z-10 opacity-10 animate-pulse">
        <svg width="300" height="300" viewBox="0 0 200 200">
          <path fill="#065f46" d="M40,-62.7C53.3,-56.3,66.5,-48.3,74.1,-36.8C81.7,-25.2,83.6,-10.1,81.1,4.3C78.6,18.7,71.6,32.4,62.2,43.7C52.7,55,40.8,63.9,27.5,69.5C14.2,75.1,-0.5,77.4,-15.8,75C-31.1,72.6,-47,65.5,-59.4,54.3C-71.7,43.1,-80.5,27.8,-82.1,12.2C-83.7,-3.3,-78.1,-19.1,-69.1,-32.8C-60,-46.5,-47.5,-58.1,-34.1,-64.4C-20.7,-70.7,-6.3,-71.7,6.3,-71.7C19,-71.7,33.3,-70.7,40,-62.7Z" transform="translate(100 100)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-12 items-center">
        <div className="text-center md:text-left order-2 md:order-1">
          <span className="inline-block bg-red-100 text-red-600 px-4 py-1 rounded-full text-sm font-bold mb-4 uppercase tracking-widest">
            Mùa Tết 2026
          </span>
          <h1 className="font-serif text-5xl md:text-7xl font-black text-green-900 leading-tight mb-6">
            Hồi Về Nhà – <br />
            <span className="text-red-600">Sen Đáp Vị Thương</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg leading-relaxed">
            Pizza Cá Hồi Hạt Sen – Sự giao thoa tinh tế giữa phong vị ẩm thực Việt truyền thống & sự sang trọng từ phương Tây.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a 
              href="#action-section" 
              className="bg-red-600 hover:bg-red-700 text-white text-lg font-bold px-10 py-4 rounded-full shadow-xl transition-all transform hover:-translate-y-1"
            >
              Đặt Ngay – Giao Nóng 30 Phút
            </a>
            <div className="flex items-center justify-center gap-2 text-gray-500 font-semibold">
              <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
              </svg>
              Đảm bảo tươi mới
            </div>
          </div>
        </div>

        <div className="order-1 md:order-2 relative">
          <div className="relative z-10 animate-float">
            <img 
              src="https://i.postimg.cc/RVhqMnm6/0004582-pizza-hat-sen-500.jpg" 
              alt="Pizza Cá Hồi Hạt Sen" 
              className="w-full max-w-[500px] mx-auto h-auto rounded-3xl shadow-2xl border-8 border-white"
            />
            {/* Lotus Decoration Overlay */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-lg border border-pink-100 hidden md:block">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-pink-50 rounded-full flex items-center justify-center text-2xl">🌸</div>
                <div>
                  <p className="font-bold text-green-900">Vị Sen Huế</p>
                  <p className="text-xs text-gray-500">Thanh tao, bùi ngậy</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Abstract circles behind image */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-green-100 rounded-full -z-10 blur-3xl opacity-30" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
