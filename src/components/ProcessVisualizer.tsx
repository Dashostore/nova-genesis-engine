
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Step {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const steps: Step[] = [
  {
    id: "idea",
    title: "1. فكرة مبهمة",
    description: "أدخل أي فكرة حتى لو كانت غامضة أو غير مكتملة",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="12" y1="8" x2="12" y2="12"></line>
        <line x1="12" y1="16" x2="12.01" y2="16"></line>
      </svg>
    )
  },
  {
    id: "analysis",
    title: "2. تحليل الفكرة",
    description: "يقوم النظام بتحليل فكرتك وتحديد نوع المنتج المناسب",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
        <polyline points="2 17 12 22 22 17"></polyline>
        <polyline points="2 12 12 17 22 12"></polyline>
      </svg>
    )
  },
  {
    id: "model",
    title: "3. نموذج عمل",
    description: "إنشاء نموذج عمل كامل مع خطة مالية وتسويقية",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
      </svg>
    )
  },
  {
    id: "design",
    title: "4. تصميم المنتج",
    description: "تصميم واجهة المستخدم أو الشكل النهائي للمنتج",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
        <path d="M2 2l7.586 7.586"></path>
        <circle cx="11" cy="11" r="2"></circle>
      </svg>
    )
  },
  {
    id: "development",
    title: "5. التطوير",
    description: "كتابة الكود البرمجي أو تصميم المكونات المادية",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
      </svg>
    )
  },
  {
    id: "launch",
    title: "6. الإطلاق",
    description: "إطلاق المنتج مع خطة تسويقية ومواد ترويجية",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 2L11 13"></path>
        <path d="M22 2l-7 20-4-9-9-4 20-7z"></path>
      </svg>
    )
  }
];

interface TabContent {
  id: string;
  title: string;
  content: React.ReactNode;
}

const ProcessVisualizer = () => {
  const [activeTab, setActiveTab] = useState<string>("idea");
  
  const tabContents: TabContent[] = [
    {
      id: "idea",
      title: "فكرة مبهمة",
      content: (
        <div className="space-y-6">
          <h3 className="text-xl font-bold">من خيالك إلى واقع... في 10 دقائق فقط</h3>
          <p className="text-gray-600 dark:text-gray-400">
            لا تحتاج إلى خبرة تقنية أو تصميمية! فقط اكتب فكرتك بلغتك الطبيعية، سواء كانت:
          </p>
          <ul className="space-y-3 text-gray-600 dark:text-gray-400 list-disc list-inside pr-4">
            <li>فكرة لتطبيق هاتف ذكي</li>
            <li>موقع إلكتروني مبتكر</li>
            <li>لعبة فيديو بقصة مشوقة</li>
            <li>منتج مادي قابل للتصنيع</li>
            <li>حتى فكرة جنونية تبدو مستحيلة!</li>
          </ul>
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
            <p className="text-sm opacity-80">مثال على فكرة:</p>
            <p className="text-nova-600 dark:text-nova-400 font-medium">
              "أريد تطبيق يمكن المستخدم من التقاط صورة لأي نبات ويخبره كيف يعتني به بناءً على حالة النبات الحالية"
            </p>
          </div>
        </div>
      )
    },
    {
      id: "analysis",
      title: "تحليل الفكرة",
      content: (
        <div className="space-y-6">
          <h3 className="text-xl font-bold">نظام تحليل عميق للأفكار</h3>
          <p className="text-gray-600 dark:text-gray-400">
            يقوم نظام الذكاء الاصطناعي المتطور بتحليل فكرتك من عدة جوانب:
          </p>
          <ul className="space-y-3 text-gray-600 dark:text-gray-400 list-disc list-inside pr-4">
            <li>تحديد نوع المنتج الأنسب (تطبيق، موقع، لعبة، منتج مادي)</li>
            <li>تقييم الفئة المستهدفة وحجم السوق المحتمل</li>
            <li>البحث عن منتجات مشابهة وتحديد نقاط التميز</li>
            <li>تقدير التكلفة والموارد اللازمة للتنفيذ</li>
          </ul>
          
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
            <p className="text-sm opacity-80">نتيجة تحليل فكرة تطبيق النباتات:</p>
            <div className="mt-2 space-y-2">
              <div className="flex justify-between">
                <span>نوع المنتج</span>
                <span className="text-nova-600 dark:text-nova-400">تطبيق جوال + قاعدة بيانات سحابية</span>
              </div>
              <div className="flex justify-between">
                <span>الفئة المستهدفة</span>
                <span className="text-nova-600 dark:text-nova-400">محبو النباتات المنزلية (18-65 سنة)</span>
              </div>
              <div className="flex justify-between">
                <span>التقنيات اللازمة</span>
                <span className="text-nova-600 dark:text-nova-400">تعلم آلي + رؤية حاسوبية + قاعدة بيانات نباتية</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "model",
      title: "نموذج عمل",
      content: (
        <div className="space-y-6">
          <h3 className="text-xl font-bold">نموذج عمل متكامل وخطة استثمارية</h3>
          <p className="text-gray-600 dark:text-gray-400">
            يقوم النظام بإنشاء نموذج عمل متكامل يتضمن:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-4 space-y-4">
                <h4 className="font-bold">الإيرادات المتوقعة</h4>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400 list-disc list-inside pr-4">
                  <li>نموذج الاشتراك الشهري</li>
                  <li>الإصدار المجاني مع ميزات مدفوعة</li>
                  <li>شراكات مع متاجر النباتات</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4 space-y-4">
                <h4 className="font-bold">خطة النمو</h4>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400 list-disc list-inside pr-4">
                  <li>استراتيجية استحواذ المستخدمين</li>
                  <li>خطة توسعة لأسواق جديدة</li>
                  <li>مراحل تطوير المنتج</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4 space-y-4">
                <h4 className="font-bold">التكاليف المقدرة</h4>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400 list-disc list-inside pr-4">
                  <li>تكاليف التطوير الأولي</li>
                  <li>التكاليف التشغيلية الشهرية</li>
                  <li>ميزانية التسويق المقترحة</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4 space-y-4">
                <h4 className="font-bold">مؤشرات الأداء الرئيسية</h4>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400 list-disc list-inside pr-4">
                  <li>معدل الاحتفاظ بالمستخدمين</li>
                  <li>متوسط الإيراد لكل مستخدم</li>
                  <li>معدل تحويل المستخدمين المجانيين إلى مدفوعين</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      )
    },
    {
      id: "design",
      title: "تصميم المنتج",
      content: (
        <div className="space-y-6">
          <h3 className="text-xl font-bold">تصميم واجهة استخدام مبتكرة</h3>
          <p className="text-gray-600 dark:text-gray-400">
            يقوم النظام بإنشاء تصميم كامل للمنتج بما يتناسب مع أحدث معايير تجربة المستخدم:
          </p>
          
          <div className="bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 p-6 rounded-xl shadow-inner">
            <div className="mx-auto max-w-sm">
              <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="h-12 bg-nova-gradient flex items-center px-4">
                  <div className="ml-auto flex space-x-1">
                    <div className="w-3 h-3 rounded-full bg-white/20"></div>
                    <div className="w-3 h-3 rounded-full bg-white/20"></div>
                    <div className="w-3 h-3 rounded-full bg-white/20"></div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="w-full h-40 bg-gray-100 dark:bg-gray-700 rounded-lg mb-4 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                      <path d="M5 7.2A2.2 2.2 0 0 1 7.2 5h9.6a2.2 2.2 0 0 1 2.2 2.2v9.6a2.2 2.2 0 0 1-2.2 2.2H7.2A2.2 2.2 0 0 1 5 16.8V7.2Z"></path>
                      <path d="m9 15 2-2 2 2 4-4"></path>
                      <path d="M10 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"></path>
                    </svg>
                  </div>
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded w-3/4"></div>
                    <div className="h-3 bg-gray-200 dark:bg-gray-600 rounded"></div>
                    <div className="h-3 bg-gray-200 dark:bg-gray-600 rounded w-5/6"></div>
                  </div>
                </div>
              </div>
              <div className="text-center mt-2 text-xs text-gray-500">تصميم واجهة مستخدم للتطبيق</div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            {["تصميم شعار", "نظام ألوان", "خرائط التنقل", "مكونات واجهة المستخدم"].map((item, i) => (
              <div key={i} className="bg-gray-100 dark:bg-gray-800 rounded p-3 text-center text-sm">
                {item}
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: "development",
      title: "التطوير",
      content: (
        <div className="space-y-6">
          <h3 className="text-xl font-bold">تطوير المنتج بالكامل</h3>
          <p className="text-gray-600 dark:text-gray-400">
            يقوم النظام ببناء المنتج باستخدام أحدث التقنيات المناسبة لفكرتك:
          </p>
          
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg font-mono text-sm overflow-x-auto">
            <pre className="text-left text-gray-600 dark:text-gray-400">
              <code>{`// Plant Recognition API
export async function identifyPlant(imageData) {
  try {
    const result = await plantRecognitionAPI.analyze({
      image: imageData,
      include_cultivation_tips: true,
      return_similar_species: true
    });
    
    return {
      species: result.species,
      confidence: result.confidence,
      careInstructions: result.care_instructions,
      similarSpecies: result.similar_species
    };
  } catch (error) {
    console.error("Plant identification failed:", error);
    return { error: "Could not identify plant" };
  }
}`}</code>
            </pre>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
              <h4 className="font-bold text-lg mb-3">الواجهة الأمامية</h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  React Native لتطبيقات الهاتف
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  واجهات تفاعلية سلسة
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  دعم وضع عدم الاتصال
                </li>
              </ul>
            </div>
            
            <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
              <h4 className="font-bold text-lg mb-3">الخدمات الخلفية</h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  Node.js مع GraphQL
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  قاعدة بيانات MongoDB
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  خدمة سحابية مقياسة تلقائيًا
                </li>
              </ul>
            </div>
            
            <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
              <h4 className="font-bold text-lg mb-3">الذكاء الاصطناعي</h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  نماذج التعرف على الصور
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  توصيات مخصصة للعناية بالنباتات
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  تحسين مستمر للدقة عبر التعلم
                </li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "launch",
      title: "الإطلاق",
      content: (
        <div className="space-y-6">
          <h3 className="text-xl font-bold">إطلاق المنتج بخطة تسويقية متكاملة</h3>
          <p className="text-gray-600 dark:text-gray-400">
            بعد الانتهاء من تطوير المنتج، يقوم النظام بإعداد خطة إطلاق شاملة:
          </p>
          
          <div className="relative pt-8">
            <div className="absolute top-0 start-0 w-full h-px bg-gradient-to-r from-transparent via-gray-400 dark:via-gray-600 to-transparent"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <div className="mx-auto w-16 h-16 rounded-full bg-nova-100 dark:bg-nova-900 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-nova-600 dark:text-nova-400">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                    <line x1="8" y1="21" x2="16" y2="21"></line>
                    <line x1="12" y1="17" x2="12" y2="21"></line>
                  </svg>
                </div>
                <h4 className="font-bold">موقع ترويجي</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">صفحة هبوط جذابة مع ميزة التسجيل المبكر والدعوات</p>
              </div>
              
              <div className="text-center space-y-4">
                <div className="mx-auto w-16 h-16 rounded-full bg-nova-100 dark:bg-nova-900 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-nova-600 dark:text-nova-400">
                    <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
                  </svg>
                </div>
                <h4 className="font-bold">حملة إعلامية</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">تواصل مع المؤثرين ووسائل الإعلام المتخصصة</p>
              </div>
              
              <div className="text-center space-y-4">
                <div className="mx-auto w-16 h-16 rounded-full bg-nova-100 dark:bg-nova-900 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-nova-600 dark:text-nova-400">
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                  </svg>
                </div>
                <h4 className="font-bold">برنامج مجتمعي</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">بناء مجتمع عبر مجموعات ومنتديات متخصصة</p>
              </div>
            </div>
            
            <div className="mt-12 bg-nova-50 dark:bg-gray-800/50 p-6 rounded-xl">
              <h4 className="text-xl font-bold mb-4 text-center">الفيديو الترويجي</h4>
              <div className="aspect-video bg-black/80 rounded-lg flex items-center justify-center">
                <div className="p-8 text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mx-auto text-white/50 mb-4">
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                  <p className="text-white/70">فيديو ترويجي عالي الجودة يتم إنشاؤه تلقائياً بواسطة الذكاء الاصطناعي</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section className="py-16 bg-white dark:bg-gray-950">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">كيف تعمل منصة NovaGenesis.ai؟</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            رحلة تحويل فكرتك إلى منتج حقيقي في خطوات بسيطة وسريعة
          </p>
        </div>
        
        <div className="relative mb-12">
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 dark:bg-gray-800 -translate-y-1/2 hidden md:block"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {steps.map((step, index) => (
              <div 
                key={step.id} 
                className={`relative flex flex-col items-center text-center ${activeTab === step.id ? 'opacity-100' : 'opacity-70'}`}
                onClick={() => setActiveTab(step.id)}
              >
                <div className={`w-16 h-16 rounded-full z-10 flex items-center justify-center mb-4 transition-colors ${activeTab === step.id ? 'bg-nova-gradient text-white' : 'bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400 border border-gray-300 dark:border-gray-700'}`}>
                  {step.icon}
                </div>
                <h3 className="font-bold mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 hidden md:block">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-4 md:p-8 transition-all duration-300">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-3 md:grid-cols-6 mb-6">
              {steps.map((step) => (
                <TabsTrigger 
                  key={step.id} 
                  value={step.id} 
                  className="data-[state=active]:bg-nova-gradient data-[state=active]:text-white"
                >
                  <span className="md:hidden">{step.id.charAt(0).toUpperCase()}</span>
                  <span className="hidden md:inline">{step.title.split(". ")[1]}</span>
                </TabsTrigger>
              ))}
            </TabsList>
            
            {tabContents.map((tabContent) => (
              <TabsContent key={tabContent.id} value={tabContent.id}>
                {tabContent.content}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default ProcessVisualizer;
