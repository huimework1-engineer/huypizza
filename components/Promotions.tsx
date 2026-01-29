
import React from 'react';

const Promotions: React.FC = () => {
  const combos = [
    {
      id: 1,
      image: "https://i.postimg.cc/z3hryN0v/0004579-combo-1-lto-quy-012026-300.png",
      name: "Combo Sum Vầy 1",
      price: "Giá cực hời"
    },
    {
      id: 2,
      image: "https://i.postimg.cc/Xp00FPzp/0004580-combo-2-lto-quy-012026-300.png",
      name: "Combo Tài Lộc 2",
      price: "Tiết kiệm tối đa"
    },
    {
      id: 3,
      image: "https://i.postimg.cc/dLKKdfx8/0004581-combo-3-lto-quy-012026-300.png",
      name: "Combo Thịnh Vượng 3",
      price: "Tiệc Tết đủ đầy"
    }
  ];

  return (
    <section id="promotions" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-green-900 mb-4">
            Combo Khuyến Mãi Tết 2026
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Lựa chọn những gói combo đặc biệt để tận hưởng trọn vẹn hương vị Tết cùng gia đình và bạn bè với mức giá ưu đãi nhất.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {combos.map((combo) => (
            <div 
              key={combo.id} 
              className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all transform hover:-translate-y-2 group"
            >
              <div className="p-6">
                <img 
                  src={combo.image} 
                  alt={combo.name} 
                  className="w-full h-auto object-contain mb-6 transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="text-center">
                  <h3 className="text-xl font-bold text-green-800 mb-2">{combo.name}</h3>
                  <p className="text-red-600 font-bold mb-6 italic">{combo.price}</p>
                  <a 
                    href="#action-section"
                    className="inline-block bg-green-700 hover:bg-green-800 text-white font-bold py-3 px-8 rounded-xl transition-colors w-full"
                  >
                    Chọn Ngay
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Promotions;
