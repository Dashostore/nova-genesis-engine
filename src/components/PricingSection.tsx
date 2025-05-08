
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const PricingSection = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-950">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">اختر الخطة المناسبة لطموحاتك</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            باقات مرنة تناسب جميع المستخدمين، من المبتدئين إلى المحترفين ورواد الأعمال
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Basic Tier */}
          <Card className="border border-gray-200 dark:border-gray-800 overflow-hidden transition-all hover:border-nova-400 hover:shadow-lg hover:shadow-nova-100/20 dark:hover:shadow-nova-900/20">
            <div className="p-1">
              <CardHeader className="text-center pt-8">
                <CardTitle className="text-2xl">الباقة الأساسية</CardTitle>
                <div className="mt-4 mb-2">
                  <span className="text-3xl font-bold">$29</span>
                  <span className="text-gray-500 dark:text-gray-400"> / شهرياً</span>
                </div>
                <CardDescription className="text-base">للمبتكرين الجدد</CardDescription>
              </CardHeader>
              <CardContent className="text-right pt-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>توليد 20 منتجًا شهريًا</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>نموذج عمل أساسي</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>تصميم واجهة مستخدم</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>كود برمجي بسيط</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>خطة تسويقية مبسطة</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full py-6 nova-button">البدء الآن</Button>
              </CardFooter>
            </div>
          </Card>
          
          {/* Pro Tier */}
          <Card className="border-2 border-genesis-500 dark:border-genesis-400 bg-gradient-to-b from-white to-genesis-50/30 dark:from-gray-900 dark:to-genesis-950/30 overflow-hidden shadow-xl shadow-genesis-100/20 dark:shadow-genesis-900/20 relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-nova-gradient"></div>
            <div className="absolute top-4 right-4">
              <span className="bg-genesis-500 text-white text-xs font-bold px-3 py-1 rounded-full">الأكثر شعبية</span>
            </div>
            <CardHeader className="text-center pt-8">
              <CardTitle className="text-2xl">الباقة الاحترافية</CardTitle>
              <div className="mt-4 mb-2">
                <span className="text-3xl font-bold">$89</span>
                <span className="text-gray-500 dark:text-gray-400"> / شهرياً</span>
              </div>
              <CardDescription className="text-base">للمطورين ورواد الأعمال</CardDescription>
            </CardHeader>
            <CardContent className="text-right pt-6">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>توليد غير محدود للمنتجات</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>نموذج عمل متكامل مع تحليل مالي</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>تصميم UI/UX تفاعلي متقدم</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>كود برمجي كامل جاهز للاستخدام</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>خطة تسويقية متكاملة مع محتوى سوشيال ميديا</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>فيديو إعلاني احترافي</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>تحديات إبداعية مخصصة</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full py-6 bg-nova-gradient hover:opacity-90 transition-opacity">اشترك الآن</Button>
            </CardFooter>
          </Card>
          
          {/* Enterprise Tier */}
          <Card className="border border-gray-200 dark:border-gray-800 overflow-hidden transition-all hover:border-nova-400 hover:shadow-lg hover:shadow-nova-100/20 dark:hover:shadow-nova-900/20">
            <div className="p-1">
              <CardHeader className="text-center pt-8">
                <CardTitle className="text-2xl">باقة الخيال</CardTitle>
                <div className="mt-4 mb-2">
                  <span className="text-3xl font-bold">$199</span>
                  <span className="text-gray-500 dark:text-gray-400"> / شهرياً</span>
                </div>
                <CardDescription className="text-base">للمبدعين والشركات الكبيرة</CardDescription>
              </CardHeader>
              <CardContent className="text-right pt-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>كل مميزات الباقة الاحترافية</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>إنشاء مشاريع غير منطقية وخيالية</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>توليد عوالم كاملة مع اقتصاد داخلي</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>تصميم هندسي ثلاثي الأبعاد للمنتجات المادية</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>دعم الشحن العالمي للمنتجات المطبوعة ثلاثية الأبعاد</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>دعم فني على مدار الساعة</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full py-6 nova-button">اكتشف الخيال</Button>
              </CardFooter>
            </div>
          </Card>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            جميع الباقات تشمل تحديثات مستمرة ودعم فني عبر البريد الإلكتروني. يمكن إلغاء الاشتراك في أي وقت.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
