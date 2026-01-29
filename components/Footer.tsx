
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 pt-16 pb-8 border-t border-gray-200">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-12">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
              <img 
                src="https://i.postimg.cc/wjttkRbh/v-Dn0tg-GBTc-Z-Q8Qh-Sdjuhv-MNA4GUJK8VS-p-Z0Fy-mi-UMDod-MNe-Ub-Dfj-MGEw-FB1v-ERPQ.jpg" 
                alt="Logo TPC"
                className="h-10 w-auto"
              />
              <span className="font-extrabold text-green-800 text-lg tracking-tighter">
                THE PIZZA <span className="text-red-600">COMPANY</span>
              </span>
            </div>
            <p className="text-gray-500 max-w-xs text-sm">
              Chuỗi nhà hàng Pizza hàng đầu Việt Nam, mang đến trải nghiệm ẩm thực Ý tinh tế và sáng tạo, hòa quyện phong vị Việt.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-sm">
            <div>
              <h4 className="font-bold text-gray-900 mb-4 uppercase">Sản phẩm</h4>
              <ul className="space-y-2 text-gray-600">
                <li><a href="https://thepizzacompany.vn/menu" className="hover:text-red-600 transition-colors">Thực đơn</a></li>
                <li><a href="https://thepizzacompany.vn/promotions" className="hover:text-red-600 transition-colors">Khuyến mãi</a></li>
                <li><a href="#hero" className="hover:text-red-600 transition-colors">Món mới mùa Tết</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-4 uppercase">Hỗ trợ</h4>
              <ul className="space-y-2 text-gray-600">
                <li><a href="https://thepizzacompany.vn/contact" className="hover:text-red-600 transition-colors">Liên hệ</a></li>
                <li><a href="https://thepizzacompany.vn/delivery" className="hover:text-red-600 transition-colors">Giao hàng</a></li>
                <li><a href="https://thepizzacompany.vn/policy" className="hover:text-red-600 transition-colors">Chính sách</a></li>
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1">
              <h4 className="font-bold text-gray-900 mb-4 uppercase">Kết nối</h4>
              <div className="flex gap-4 justify-center md:justify-start">
                <a href="https://facebook.com/ThePizzaCompanyVN" target="_blank" rel="noreferrer" className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-400 hover:text-blue-600 hover:border-blue-600 transition-all shadow-sm">FB</a>
                <a href="https://instagram.com/thepizzacompanyvn" target="_blank" rel="noreferrer" className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-400 hover:text-red-600 hover:border-red-600 transition-all shadow-sm">IG</a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400 font-medium">
          <p>© {currentYear} The Pizza Company Vietnam. All rights reserved.</p>
          <div className="flex gap-6">
            <p className="flex items-center gap-1"><span className="text-red-500">📞</span> Hotline: 1900 6066</p>
            <p className="flex items-center gap-1"><span className="text-green-500">🌐</span> thepizzacompany.vn</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
