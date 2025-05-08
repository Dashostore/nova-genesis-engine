
import React from "react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative overflow-hidden py-20 md:py-28 lg:py-32">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-genesis-900/20 via-background to-background"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-radial from-genesis-500/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-gradient-radial from-nova-500/10 to-transparent rounded-full blur-2xl"></div>
      </div>

      <div className="container max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-10">
          <div className="inline-block mb-4">
            <span className="inline-block py-1 px-3 rounded-full text-sm font-semibold bg-gradient-to-r from-nova-100 to-genesis-100 text-nova-800">
              التقنية المستقبلية هنا والآن
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-nova-gradient">
            NovaGenesis.ai
          </h1>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 max-w-3xl mx-auto">
            حوِّل أفكارك المبهمة إلى منتجات حقيقية
            <br /> 
            <span className="text-genesis-600">في دقائق فقط</span>
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            منصة ذكاء اصطناعي متطورة تحول أي فكرة إلى منتج رقمي أو مادي كامل وجاهز للاستخدام، عبر تفكيك المهام إلى خطوات ذكية تشعر المستخدم أنه يقود ثورة تكنولوجية.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="nova-button group">
              <span className="mr-2">جرّب الآن</span>
              <span className="relative z-10 group-hover:translate-x-1 transition-transform">→</span>
            </button>
            <Button variant="outline" className="border-2 hover:bg-white/5">
              شاهد كيف يعمل
            </Button>
          </div>
        </div>
      </div>

      <div className="container max-w-6xl px-4 mx-auto mt-14">
        <div className="relative rounded-2xl overflow-hidden glow-effect">
          <div className="aspect-[16/9] bg-black/90 rounded-2xl p-6 flex flex-col justify-center items-center border border-white/10">
            <div className="text-center mb-6">
              <h3 className="text-2xl text-white mb-4">شاهد فكرتك وهي تتحول إلى منتج حقيقي</h3>
              <p className="text-gray-400">بتقنية TimeLapse AI</p>
            </div>
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-nova-500 to-genesis-600 flex items-center justify-center animate-pulse-glow cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
