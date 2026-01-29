
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 pt-16 pb-8 border-t border-gray-200">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-12">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
              <div className="w-8 h-8 bg-green-700 rounded-full flex items-center justify-center text-white font-bold text-[10px] p-1 text-center">
                TPC
              </div>
              <span className="font-extrabold text-green-800 text-lg tracking-tighter">
                THE PIZZA <span className="text-red-600">COMPANY</span>
              </span>
            </div>
            <p className="text-gray-500 max-w-xs text-sm">
              Chuỗi nhà hàng Pizza hàng đầu Việt Nam, mang đến trải nghiệm ẩm thực Ý tinh tế và sáng tạo.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-sm">
            <div>
              <h4 className="font-bold text-gray-900 mb-4 uppercase">Sản phẩm</h4>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-red-600">Thực đơn</a></li>
                <li><a href="#" className="hover:text-red-600">Khuyến mãi</a></li>
                <li><a href="#" className="hover:text-red-600">Món mới mùa Tết</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-4 uppercase">Hỗ trợ</h4>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-red-600">Liên hệ</a></li>
                <li><a href="#" className="hover:text-red-600">Giao hàng</a></li>
                <li><a href="#" className="hover:text-red-600">Chính sách</a></li>
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1">
              <h4 className="font-bold text-gray-900 mb-4 uppercase">Kết nối</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-400 hover:text-blue-600 hover:border-blue-600 transition-all">FB</a>
                <a href="#" className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-400 hover:text-red-600 hover:border-red-600 transition-all">IG</a>
                <a href="#" className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-900 hover:border-gray-900 transition-all">YT</a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400 font-medium">
          <p>© {currentYear} The Pizza Company Vietnam. All rights reserved.</p>
          <div className="flex gap-6">
            <p>Hotline: 1900 6066</p>
            <p>Website: thepizzacompany.vn</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
