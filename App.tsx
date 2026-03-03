
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Interest from './components/Interest';
import Promotions from './components/Promotions';
import Desire from './components/Desire';
import Action from './components/Action';
import Footer from './components/Footer';

export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  size: string;
}

const App: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "Pizza Cá Hồi Hạt Sen",
      price: 389000,
      quantity: 1,
      image: "https://i.postimg.cc/RVhqMnm6/0004582-pizza-hat-sen-500.jpg",
      size: "Đế Dày - Cỡ Lớn"
    }
  ]);

  const addToCart = (item: Omit<CartItem, 'id' | 'quantity'>) => {
    setCartItems(prev => {
      // Kiểm tra xem item đã tồn tại chưa (cùng tên và size)
      const existing = prev.find(i => i.name === item.name && i.size === item.size);
      if (existing) {
        return prev.map(i => i === existing ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { ...item, id: Date.now(), quantity: 1 }];
    });
  };

  const updateQuantity = (id: number, delta: number) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const removeItem = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  // Smooth scroll behavior
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href')?.substring(1);
        const element = document.getElementById(targetId || '');
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 160,
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header 
        cartItems={cartItems} 
        onUpdateQuantity={updateQuantity} 
        onRemoveItem={removeItem} 
      />
      <main className="flex-grow">
        <Hero />
        <Interest />
        <Promotions onAddToCart={addToCart} />
        <Desire />
        <Action />
      </main>
      <Footer />
    </div>
  );
};

export default App;
