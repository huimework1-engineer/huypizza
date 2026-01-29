
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4 md:px-8 py-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img 
            src="https://i.postimg.cc/wjttkRbh/v-Dn0tg-GBTc-Z-Q8Qh-Sdjuhv-MNA4GUJK8VS-p-Z0Fy-mi-UMDod-MNe-Ub-Dfj-MGEw-FB1v-ERPQ.jpg" 
            alt="The Pizza Company Logo" 
            className="h-12 md:h-14 w-auto object-contain"
          />
        </div>

        <nav className="flex items-center gap-6">
          <a 
            href="#action-section" 
            className="bg-green-700 hover:bg-green-800 text-white px-6 py-2 rounded-full font-bold transition-all transform hover:scale-105 shadow-md text-sm md:text-base"
          >
            Đặt Ngay
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
