
import React from 'react';

const Desire: React.FC = () => {
  return (
    <section id="desire" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative">
            <div className="relative group">
              <img 
                src="https://i.postimg.cc/bJvfQk35/48d42b57-d381-47ad-8806-d06dffe27eb4.png" 
                alt="Pizza Cá Hồi Hạt Sen Cận Cảnh" 
                className="w-full h-auto rounded-[2.5rem] shadow-2xl transition-transform duration-700 group-hover:scale-[1.02] border-4 border-white"
              />
              {/* Decorative Accent */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-center leading-tight shadow-xl transform rotate-12 z-20">
                Mỹ Vị<br/>Ngày Tết
              </div>
              {/* Glow effect */}
              <div className="absolute inset-0 bg-green-900/5 rounded-[2.5rem] -z-10 blur-xl translate-y-4"></div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-green-900 mb-8 leading-tight">
              Béo – Bùi – Thơm <br />
              <span className="text-red-600">Tròn vị yêu thương</span>
            </h2>
            
            <div className="space-y-8 mb-10">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-700">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-lg text-gray-800">Món mới nổi bật mùa Tết 2026</p>
                  <p className="text-gray-600">Được hàng ngàn khách hàng bình chọn là vị pizza "Nhất định phải thử" dịp đầu năm.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-700">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-lg text-gray-800">Phiên bản giới hạn</p>
                  <p className="text-gray-600">Chỉ phục vụ duy nhất trong kỳ nghỉ Tết. Đừng bỏ lỡ hương vị độc bản này!</p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-2xl">
              <p className="text-yellow-800 font-medium italic">
                "Cảm giác lớp phô mai Mozzarella kéo sợi, quấn lấy vị mặn nhẹ của cá hồi và cái bùi của hạt sen thực sự bùng nổ vị giác!"
              </p>
              <p className="text-yellow-600 text-sm mt-2 font-bold">— Food Reviewer Hoàng Nam</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Desire;
