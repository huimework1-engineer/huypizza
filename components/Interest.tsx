
import React from 'react';

const Interest: React.FC = () => {
  const features = [
    {
      icon: "🐟",
      title: "Cá hồi xông khói",
      desc: "Lát cá hồi Na Uy cao cấp, xông khói kỹ lưỡng, béo mềm tan trong miệng."
    },
    {
      icon: "🪷",
      title: "Hạt sen Huế bùi thanh",
      desc: "Hạt sen được tuyển chọn kỹ từ vùng đất Cố đô, mang vị ngọt thanh đậm chất Việt."
    },
    {
      icon: "👨‍🍳",
      title: "Công thức độc quyền",
      desc: "Sự kết hợp gia vị tinh tế chỉ có tại The Pizza Company cho mùa Tết 2026."
    },
    {
      icon: "🧧",
      title: "Cảm hứng sum vầy",
      desc: "Thiết kế hình tròn tượng trưng cho sự trọn vẹn và may mắn những ngày đầu năm."
    }
  ];

  return (
    <section id="interest" className="py-24 bg-green-900 text-white relative overflow-hidden">
      {/* Decorative lotus pattern (simulated) */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-green-800 rounded-full blur-3xl opacity-20 -mr-32 -mt-32" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-800 rounded-full blur-3xl opacity-20 -ml-32 -mb-32" />

      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Vì sao Pizza Cá Hồi Hạt Sen đặc biệt?
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-8 rounded-full" />
          <p className="text-lg text-green-50 leading-relaxed italic">
            "Không chỉ là một món ăn, đây là câu chuyện về những chuyến xe trở về nhà, nơi mùi thơm của bánh nướng hòa quyện cùng vị ngọt bùi của sen quê, tạo nên một bàn tiệc Tết đủ đầy và ấm cúng."
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <div key={i} className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/20 transition-all group">
              <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform">
                {f.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-red-400">{f.title}</h3>
              <p className="text-sm text-green-100 leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Interest;
