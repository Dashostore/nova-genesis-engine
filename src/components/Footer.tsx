
import React from 'react';
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-nova-gradient">NovaGenesis.ai</h3>
            <p className="text-gray-400 mb-6 text-right">
              منصة ذكاء اصطناعي متقدمة تحول أفكارك المبهمة إلى منتجات رقمية أو مادية كاملة وجاهزة للاستخدام في دقائق.
            </p>
            <div className="flex gap-4 justify-end">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-nova-600 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-nova-600 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-nova-600 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-nova-600 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="text-right">
            <h4 className="text-lg font-bold mb-4">روابط سريعة</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">الصفحة الرئيسية</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">كيف يعمل</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">معرض المشاريع</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">الباقات والأسعار</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">الأسئلة الشائعة</a></li>
            </ul>
          </div>
          
          <div className="text-right">
            <h4 className="text-lg font-bold mb-4">تواصل معنا</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">حول الشركة</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">فريق العمل</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">سياسة الخصوصية</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">الشروط والأحكام</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">اتصل بنا</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="text-center md:text-right">
              <p className="text-gray-500">&copy; 2025 NovaGenesis.ai - جميع الحقوق محفوظة</p>
            </div>
            <div className="flex gap-4 justify-center md:justify-start">
              <img src="https://cdn.worldvectorlogo.com/logos/visa-10.svg" alt="Visa" className="h-8 w-auto" />
              <img src="https://cdn.worldvectorlogo.com/logos/mastercard-6.svg" alt="MasterCard" className="h-8 w-auto" />
              <img src="https://cdn.worldvectorlogo.com/logos/apple-pay.svg" alt="Apple Pay" className="h-8 w-auto" />
              <img src="https://cdn.worldvectorlogo.com/logos/paypal-2.svg" alt="PayPal" className="h-8 w-auto" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
