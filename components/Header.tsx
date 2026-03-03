
import React, { useState } from 'react';
import { 
  MapPin, 
  Truck, 
  ShoppingBag, 
  ShoppingCart, 
  X, 
  Plus, 
  Minus, 
  Menu,
  ChevronRight,
  HelpCircle
} from 'lucide-react';
import { CartItem } from '../App';

interface HeaderProps {
  cartItems: CartItem[];
  onUpdateQuantity: (id: number, delta: number) => void;
  onRemoveItem: (id: number) => void;
}

const Header: React.FC<HeaderProps> = ({ cartItems, onUpdateQuantity, onRemoveItem }) => {
  const [orderType, setOrderType] = useState<'delivery' | 'pickup'>('delivery');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const categories = [
    "Khuyến mãi", "Pizza", "Gà Ngon Vibe", "Nui Bỏ Lò", "Mỳ Ý", "Khai vị", "Salad", "Thức uống"
  ];

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const deliveryFee = orderType === 'delivery' ? 20000 : 0;
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[100] bg-white shadow-sm font-sans">
        {/* TOP BAR */}
        <div className="border-b border-gray-100 hidden lg:block">
          <div className="container mx-auto px-4 py-3 flex items-center justify-between gap-4">
            <div className="flex items-center gap-6">
              <img 
                src="https://i.postimg.cc/wjttkRbh/v-Dn0tg-GBTc-Z-Q8Qh-Sdjuhv-MNA4GUJK8VS-p-Z0Fy-mi-UMDod-MNe-Ub-Dfj-MGEw-FB1v-ERPQ.jpg" 
                alt="Logo" 
                className="h-14 w-auto object-contain cursor-pointer"
              />
              <div className="flex flex-col">
                <span className="text-2xl font-black text-green-700 leading-none">1900 6066</span>
                <span className="text-[10px] font-bold text-gray-400 tracking-widest uppercase mt-1">Giao hàng nhanh</span>
              </div>
            </div>

            <div className="flex bg-gray-100 p-1 rounded-full w-fit">
              <button 
                onClick={() => setOrderType('delivery')}
                className={`flex items-center gap-2 px-6 py-2 rounded-full text-sm font-bold transition-all ${orderType === 'delivery' ? 'bg-red-600 text-white shadow-md' : 'text-gray-500 hover:text-gray-700'}`}
              >
                <Truck size={18} /> Đặt giao hàng
              </button>
              <button 
                onClick={() => setOrderType('pickup')}
                className={`flex items-center gap-2 px-6 py-2 rounded-full text-sm font-bold transition-all ${orderType === 'pickup' ? 'bg-red-600 text-white shadow-md' : 'text-gray-500 hover:text-gray-700'}`}
              >
                <ShoppingBag size={18} /> Đặt đến lấy
              </button>
            </div>

            <div className="flex-1 max-w-md relative group">
              <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-red-600 group-focus-within:scale-110 transition-transform" size={20} />
              <input 
                type="text" 
                placeholder="Nhập địa chỉ của bạn..." 
                className="w-full bg-gray-50 border border-gray-200 rounded-full py-2.5 pl-12 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-green-600/20 focus:border-green-600 transition-all"
              />
            </div>

            <div className="flex items-center gap-4">
              <button className="flex items-center gap-1.5 text-gray-600 font-bold text-sm hover:text-green-700 transition-colors">
                <HelpCircle size={20} /> Hỗ trợ
              </button>
              <div className="w-8 h-8 rounded-full overflow-hidden border border-gray-200 cursor-pointer">
                <img src="https://flagcdn.com/w40/vn.png" alt="VN" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>

        {/* MOBILE TOP BAR */}
        <div className="lg:hidden flex items-center justify-between p-3">
          <Menu className="text-green-800" onClick={() => setIsMobileMenuOpen(true)} />
          <img 
            src="https://i.postimg.cc/wjttkRbh/v-Dn0tg-GBTc-Z-Q8Qh-Sdjuhv-MNA4GUJK8VS-p-Z0Fy-mi-UMDod-MNe-Ub-Dfj-MGEw-FB1v-ERPQ.jpg" 
            alt="Logo" 
            className="h-10"
          />
          <div className="relative" onClick={() => setIsCartOpen(true)}>
            <ShoppingCart className="text-green-800" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white">
                {totalItems}
              </span>
            )}
          </div>
        </div>

        {/* NAVBAR */}
        <nav className="bg-white lg:bg-transparent lg:pb-3">
          <div className="container mx-auto lg:px-4">
            <div className="bg-[#005a2b] lg:rounded-2xl px-4 lg:px-8 py-0.5 flex items-center justify-between shadow-lg">
              <ul className="hidden lg:flex items-center gap-1">
                {categories.map((cat, idx) => (
                  <li key={idx}>
                    <a 
                      href="#" 
                      className={`block py-4 px-4 text-[13px] font-bold uppercase transition-all relative group ${idx === 1 ? 'text-yellow-400' : 'text-white hover:text-yellow-400'}`}
                    >
                      {cat}
                      <span className="absolute bottom-3 left-4 right-4 h-0.5 bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                    </a>
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-4 py-2 lg:py-0 w-full lg:w-auto justify-end">
                <button 
                  onClick={() => setIsCartOpen(true)}
                  className="bg-white/10 hover:bg-white/20 text-white flex items-center gap-3 px-5 py-2.5 rounded-full transition-all group relative"
                >
                  <div className="relative">
                    <ShoppingCart size={20} className="group-hover:rotate-[-10deg] transition-transform" />
                    {totalItems > 0 && (
                      <span className="absolute -top-2 -right-3 bg-red-600 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-[#005a2b]">
                        {totalItems}
                      </span>
                    )}
                  </div>
                  <div className="hidden sm:block text-left">
                    <p className="text-[10px] opacity-70 font-bold uppercase leading-none">Giỏ hàng</p>
                    <p className="text-sm font-black leading-tight">{(subtotal + deliveryFee).toLocaleString('vi-VN')}đ</p>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* CART DRAWER OVERLAY */}
      {isCartOpen && (
        <div className="fixed inset-0 z-[200] flex justify-end">
          <div 
            className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
            onClick={() => setIsCartOpen(false)}
          />
          
          <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col animate-slide-left">
            <div className="p-6 border-b flex items-center justify-between bg-green-50">
              <div className="flex items-center gap-3">
                <ShoppingCart className="text-green-700" />
                <h2 className="text-xl font-black text-green-900">Giỏ hàng của bạn</h2>
              </div>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="p-2 hover:bg-white rounded-full transition-colors text-gray-400 hover:text-red-600"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {cartItems.length > 0 ? (
                cartItems.map((item) => (
                  <div key={item.id} className="flex gap-4 group">
                    <div className="w-24 h-24 rounded-2xl overflow-hidden border border-gray-100 flex-shrink-0 bg-gray-50">
                      <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start">
                          <h3 className="font-bold text-gray-900 leading-tight">{item.name}</h3>
                          <button 
                            onClick={() => onRemoveItem(item.id)}
                            className="text-gray-300 hover:text-red-500 transition-colors"
                          >
                            <X size={18} />
                          </button>
                        </div>
                        <p className="text-xs text-gray-500 mt-1 font-medium">{item.size}</p>
                        <p className="text-sm font-black text-red-600 mt-1">{(item.price).toLocaleString('vi-VN')}đ</p>
                      </div>

                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center bg-gray-100 rounded-lg px-2 py-1">
                          <button 
                            onClick={() => onUpdateQuantity(item.id, -1)}
                            className="p-1 hover:text-red-600 transition-colors"
                          ><Minus size={14}/></button>
                          <span className="w-8 text-center text-sm font-bold">{item.quantity}</span>
                          <button 
                            onClick={() => onUpdateQuantity(item.id, 1)}
                            className="p-1 hover:text-green-600 transition-colors"
                          ><Plus size={14}/></button>
                        </div>
                        <p className="font-black text-gray-900">{(item.price * item.quantity).toLocaleString('vi-VN')}đ</p>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-center opacity-40">
                  <div className="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                    <ShoppingBag size={64} />
                  </div>
                  <p className="text-lg font-bold">Giỏ hàng đang trống</p>
                  <p className="text-sm">Hãy thêm món ngon vào giỏ nhé!</p>
                </div>
              )}
            </div>

            {cartItems.length > 0 && (
              <div className="p-6 border-t bg-white shadow-[0_-10px_30px_rgba(0,0,0,0.05)]">
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-gray-500 text-sm font-medium">
                    <span>Tạm tính</span>
                    <span>{subtotal.toLocaleString('vi-VN')}đ</span>
                  </div>
                  <div className="flex justify-between text-gray-500 text-sm font-medium">
                    <span>Phí giao hàng</span>
                    <span>{deliveryFee > 0 ? `${deliveryFee.toLocaleString('vi-VN')}đ` : 'Miễn phí'}</span>
                  </div>
                  <div className="flex justify-between text-gray-900 text-lg font-black pt-2 border-t">
                    <span>Tổng cộng</span>
                    <span className="text-red-600">{(subtotal + deliveryFee).toLocaleString('vi-VN')}đ</span>
                  </div>
                </div>
                
                <button className="w-full bg-red-600 hover:bg-red-700 text-white font-black py-4 rounded-2xl flex items-center justify-center gap-3 shadow-xl shadow-red-600/20 transition-all active:scale-95 group">
                  TIẾP TỤC THANH TOÁN
                  <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[200] flex">
          <div className="absolute inset-0 bg-black/40" onClick={() => setIsMobileMenuOpen(false)} />
          <div className="relative w-4/5 max-w-xs bg-white h-full p-6 animate-slide-right">
             <div className="flex justify-between items-center mb-8">
               <img src="https://i.postimg.cc/wjttkRbh/v-Dn0tg-GBTc-Z-Q8Qh-Sdjuhv-MNA4GUJK8VS-p-Z0Fy-mi-UMDod-MNe-Ub-Dfj-MGEw-FB1v-ERPQ.jpg" className="h-10" />
               <X onClick={() => setIsMobileMenuOpen(false)} />
             </div>
             <ul className="space-y-4">
               {categories.map((cat, i) => (
                 <li key={i} className="font-bold text-gray-800 border-b pb-2">{cat}</li>
               ))}
             </ul>
          </div>
        </div>
      )}

      <style>{`
        @keyframes slide-left {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        @keyframes slide-right {
          from { transform: translateX(-100%); }
          to { transform: translateX(0); }
        }
        .animate-slide-left {
          animation: slide-left 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .animate-slide-right {
          animation: slide-right 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
      `}</style>
      
      <div className="h-[74px] lg:h-[155px]"></div>
    </>
  );
};

export default Header;
