
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, ShoppingCart, Info } from 'lucide-react';
import { CartItem } from '../App';

interface MenuItem {
  name: string;
  desc?: string;
  image: string;
  isPending?: boolean;
}

interface SetMenuProps {
  title: string;
  price: number;
  items: MenuItem[];
  heroImage: string;
  pendingCount?: number;
  onAddToCart: (item: Omit<CartItem, 'id' | 'quantity'>) => void;
}

const SetCard: React.FC<SetMenuProps> = ({ title, price, items, heroImage, pendingCount, onAddToCart }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="flex flex-col bg-white rounded-[2.5rem] shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 h-full">
      {/* Top: Hero Image */}
      <div className="relative h-64 overflow-hidden group cursor-pointer" onClick={() => setIsExpanded(!isExpanded)}>
        <img 
          src={heroImage} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
        <div className="absolute bottom-4 left-6">
          <span className="bg-red-600 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">
            Khám phá ngay
          </span>
        </div>
      </div>

      {/* Middle: Info */}
      <div className="p-6 flex-1 flex flex-col">
        <div className="w-8 h-1 bg-green-700 mb-3 rounded-full"></div>
        <h3 className="text-xl font-black text-gray-900 mb-2 leading-tight">{title}</h3>
        <div className="flex items-center justify-between mb-4">
          <span className="text-2xl font-black text-red-600">{(price / 1000).toFixed(0)}.000đ</span>
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-green-700 bg-green-50 px-4 py-2 rounded-full hover:bg-green-100 transition-colors"
          >
            {isExpanded ? <><ChevronUp size={14} /> Đóng</> : <><Info size={14} /> Chi tiết</>}
          </button>
        </div>

        {/* Hidden List Area */}
        <div className={`space-y-3 overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? 'max-h-[800px] opacity-100 mb-6' : 'max-h-0 opacity-0'}`}>
          <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest border-b pb-2 mb-4">Danh sách món ăn</p>
          {items.map((item, idx) => (
            <div key={idx} className="flex gap-3 items-center p-2 rounded-xl bg-gray-50/50 border border-transparent hover:border-gray-200 transition-all">
              <div className="w-12 h-12 flex-shrink-0 bg-white rounded-lg overflow-hidden flex items-center justify-center shadow-sm p-1">
                <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
              </div>
              <div className="flex-1 min-w-0">
                <p className={`text-[13px] font-bold truncate ${item.isPending ? 'text-red-600' : 'text-green-800'}`}>
                  {item.isPending ? `Còn ${pendingCount} SP: ${item.name}` : item.name}
                </p>
                {item.desc && !item.isPending && (
                  <p className="text-[10px] text-gray-400 font-medium leading-none mt-0.5 truncate">{item.desc.replace('\n', ' ')}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Action: Add to Cart */}
        <div className="mt-auto pt-4 border-t border-gray-100">
          <button 
            onClick={() => onAddToCart({
              name: `Set Menu ${title}`,
              price: price,
              image: heroImage,
              size: title.includes('Hồi') ? "Set cho 2 người" : (title.includes('Sen') ? "Set cho 3 người" : "Set cho 4-6 người")
            })}
            className="w-full bg-[#007d43] hover:bg-[#005a2b] text-white font-black py-4 rounded-2xl shadow-lg shadow-green-900/10 transition-all active:scale-95 uppercase tracking-wide text-[13px] flex items-center justify-center gap-3 group"
          >
            <ShoppingCart size={20} className="group-hover:rotate-[-10deg] transition-transform" />
            Thêm vào giỏ hàng
          </button>
        </div>
      </div>
    </div>
  );
};

interface PromotionsProps {
  onAddToCart: (item: Omit<CartItem, 'id' | 'quantity'>) => void;
}

const Promotions: React.FC<PromotionsProps> = ({ onAddToCart }) => {
  const sets = [
    {
      title: '"Hồi" Về Nhà',
      price: 569000,
      heroImage: "https://i.postimg.cc/z3hryN0v/0004579-combo-1-lto-quy-012026-300.png",
      items: [
        { 
          name: "01 Pizza Cá Hồi Hạt Sen", 
          desc: "Kích thước - Vừa 9\"\nĐế - Viền Hoa Sen",
          image: "https://i.postimg.cc/RVhqMnm6/0004582-pizza-hat-sen-500.jpg" 
        },
        { 
          name: "01 Giỏ Khoai Tây Chiên", 
          image: "https://i.postimg.cc/bJvfQk35/48d42b57-d381-47ad-8806-d06dffe27eb4.png" 
        },
        { 
          name: "01 Mỳ Ý Cay Với Xúc Xích", 
          image: "https://i.postimg.cc/dLKKdfx8/0004581-combo-3-lto-quy-012026-300.png" 
        },
        { 
          name: "01 7Up Lon", 
          image: "https://i.postimg.cc/wjttkRbh/v-Dn0tg-GBTc-Z-Q8Qh-Sdjuhv-MNA4GUJK8VS-p-Z0Fy-mi-UMDod-MNe-Ub-Dfj-MGEw-FB1v-ERPQ.jpg",
          isPending: true
        }
      ],
      pendingCount: 1
    },
    {
      title: 'Sen',
      price: 679000,
      heroImage: "https://i.postimg.cc/Xp00FPzp/0004580-combo-2-lto-quy-012026-300.png",
      items: [
        { 
          name: "01 Pizza Cá Hồi Hạt Sen", 
          desc: "Kích thước - Vừa 9\"\nĐế - Viền Hoa Sen",
          image: "https://i.postimg.cc/RVhqMnm6/0004582-pizza-hat-sen-500.jpg" 
        },
        { 
          name: "01 Mực Chiên Giòn", 
          image: "https://i.postimg.cc/bJvfQk35/48d42b57-d381-47ad-8806-d06dffe27eb4.png" 
        },
        { 
          name: "01 Mỳ Ý Cay Với Xúc Xích", 
          image: "https://i.postimg.cc/dLKKdfx8/0004581-combo-3-lto-quy-012026-300.png" 
        },
        { 
          name: "01 Salad Đặc Sắc", 
          desc: "Kích thước - Vừa 9\"",
          image: "https://i.postimg.cc/bJvfQk35/48d42b57-d381-47ad-8806-d06dffe27eb4.png" 
        },
        { 
          name: "01 7Up Lon", 
          image: "https://i.postimg.cc/wjttkRbh/v-Dn0tg-GBTc-Z-Q8Qh-Sdjuhv-MNA4GUJK8VS-p-Z0Fy-mi-UMDod-MNe-Ub-Dfj-MGEw-FB1v-ERPQ.jpg",
          isPending: true
        }
      ],
      pendingCount: 2
    },
    {
      title: 'Đáp Vị Thương',
      price: 889000,
      heroImage: "https://i.postimg.cc/dLKKdfx8/0004581-combo-3-lto-quy-012026-300.png",
      items: [
        { 
          name: "01 Pizza Cá Hồi Hạt Sen", 
          desc: "Kích thước - Lớn 12\"\nĐế - Viền Hoa Sen",
          image: "https://i.postimg.cc/RVhqMnm6/0004582-pizza-hat-sen-500.jpg" 
        },
        { 
          name: "01 Mực Chiên Giòn", 
          image: "https://i.postimg.cc/bJvfQk35/48d42b57-d381-47ad-8806-d06dffe27eb4.png" 
        },
        { 
          name: "01 Gà Giòn Không Xương", 
          image: "https://i.postimg.cc/Xp00FPzp/0004580-combo-2-lto-quy-012026-300.png" 
        },
        { 
          name: "01 Mỳ Ý Cay Với Xúc Xích", 
          image: "https://i.postimg.cc/dLKKdfx8/0004581-combo-3-lto-quy-012026-300.png" 
        },
        { 
          name: "01 Salad Đặc Sắc", 
          desc: "Kích thước - Lớn 12\"",
          image: "https://i.postimg.cc/bJvfQk35/48d42b57-d381-47ad-8806-d06dffe27eb4.png" 
        },
        { 
          name: "01 7Up Lon", 
          image: "https://i.postimg.cc/wjttkRbh/v-Dn0tg-GBTc-Z-Q8Qh-Sdjuhv-MNA4GUJK8VS-p-Z0Fy-mi-UMDod-MNe-Ub-Dfj-MGEw-FB1v-ERPQ.jpg",
          isPending: true
        }
      ],
      pendingCount: 5
    }
  ];

  return (
    <section id="promotions" className="py-24 bg-[#fafafa]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <span className="text-red-600 font-black tracking-[0.3em] uppercase text-xs mb-3 block">Ưu đãi độc quyền</span>
          <h2 className="font-serif text-4xl md:text-5xl font-black text-green-900 mb-6">
            Mỹ Vị Sum Vầy - Set Menu Đặc Biệt
          </h2>
          <div className="w-24 h-1.5 bg-red-600 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-500 max-w-2xl mx-auto font-medium leading-relaxed">
            Hồi về mái ấm, cùng những người thương yêu tận hưởng bàn tiệc tròn vị với các Set Menu được thiết kế riêng cho mùa Tết 2026.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {sets.map((set, index) => (
            <SetCard key={index} {...set} onAddToCart={onAddToCart} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Promotions;
