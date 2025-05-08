
import React from 'react';
import Hero from '@/components/Hero';
import IdeaGenerator from '@/components/IdeaGenerator';
import ProcessVisualizer from '@/components/ProcessVisualizer';
import ExampleGallery from '@/components/ExampleGallery';
import PricingSection from '@/components/PricingSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div dir="rtl" className="min-h-screen bg-background">
      <div className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="font-bold text-xl bg-clip-text text-transparent bg-nova-gradient">
              NovaGenesis.ai
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-nova-600 dark:hover:text-nova-400 transition-colors">الرئيسية</a>
              <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-nova-600 dark:hover:text-nova-400 transition-colors">كيف يعمل</a>
              <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-nova-600 dark:hover:text-nova-400 transition-colors">المشاريع</a>
              <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-nova-600 dark:hover:text-nova-400 transition-colors">الباقات</a>
              <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-nova-600 dark:hover:text-nova-400 transition-colors">تواصل معنا</a>
            </nav>
            <div className="flex items-center gap-2">
              <button className="px-4 py-1.5 text-sm border-2 border-gray-200 dark:border-gray-800 rounded-full hover:border-nova-500 transition-colors">
                تسجيل الدخول
              </button>
              <button className="px-4 py-1.5 text-sm bg-nova-gradient text-white rounded-full hover:opacity-90 transition-opacity">
                التسجيل
              </button>
              <button className="md:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="pt-16">
        <Hero />
        <IdeaGenerator />
        <ProcessVisualizer />
        <ExampleGallery />
        <PricingSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
