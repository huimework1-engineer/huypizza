
import React from 'react';

const Action: React.FC = () => {
  return (
    <section id="action-section" className="py-24 bg-red-600 relative overflow-hidden">
      {/* Decorative background circles */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-red-500 rounded-full blur-3xl -ml-48 -mt-48 opacity-50" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-700 rounded-full blur-3xl -mr-48 -mb-48 opacity-50" />

      <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
        <h2 className="font-serif text-4xl md:text-6xl font-black text-white mb-6">
          Mang yêu thương về nhà cùng <br className="hidden md:block" />
          The Pizza Company
        </h2>
        <p className="text-xl text-red-100 mb-12 max-w-2xl mx-auto">
          Đặt hàng ngay hôm nay để nhận ưu đãi miễn phí giao hàng cho đơn từ 299k. Giao nóng hổi trong 30 phút!
        </p>

        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <a 
            href="https://thepizzacompany.vn" 
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto bg-white text-red-600 text-2xl font-black px-12 py-6 rounded-2xl shadow-2xl hover:bg-gray-100 transition-all transform hover:scale-105"
          >
            ĐẶT ONLINE NGAY
          </a>
          
          <div className="text-white text-xl font-bold md:px-4">HOẶC</div>

          <a 
            href="tel:19006066" 
            className="w-full md:w-auto bg-green-700 text-white text-2xl font-black px-12 py-6 rounded-2xl shadow-2xl hover:bg-green-800 transition-all transform hover:scale-105 flex items-center justify-center gap-3"
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 005.474 5.474l.773-1.548a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            GỌI 1900 6066
          </a>
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-8 text-red-100 font-semibold uppercase tracking-wider text-sm">
          <div className="flex items-center gap-2">
            <span>🔥 Giao hàng 30 phút</span>
          </div>
          <div className="flex items-center gap-2">
            <span>📍 Toàn quốc</span>
          </div>
          <div className="flex items-center gap-2">
            <span>💳 Đa dạng thanh toán</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Action;
