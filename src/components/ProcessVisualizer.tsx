
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ProcessVisualizer = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">كيف تعمل تقنية TimeLapse AI؟</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            شاهد كيف يتحول حلمك إلى حقيقة عبر مراحل متسلسلة مذهلة
          </p>
        </div>

        <Tabs defaultValue="business" dir="rtl" className="w-full">
          <div className="flex flex-col md:flex-row gap-10 items-start">
            <div className="w-full md:w-1/3 overflow-x-auto">
              <TabsList className="flex flex-row md:flex-col h-auto p-0 bg-transparent gap-3">
                <TabsTrigger 
                  value="business"
                  className="data-[state=active]:bg-nova-gradient data-[state=active]:text-white h-16 w-full rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm data-[state=active]:shadow-md text-right"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-md bg-nova-100 dark:bg-nova-900 flex items-center justify-center flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-nova-600 dark:text-nova-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">نموذج العمل</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">خطة عمل كاملة للمشروع</div>
                    </div>
                  </div>
                </TabsTrigger>
                <TabsTrigger 
                  value="design"
                  className="data-[state=active]:bg-nova-gradient data-[state=active]:text-white h-16 w-full rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm data-[state=active]:shadow-md text-right"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-md bg-genesis-100 dark:bg-genesis-900 flex items-center justify-center flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-genesis-600 dark:text-genesis-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
                        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
                        <path d="M2 2l7.586 7.586"></path>
                        <circle cx="11" cy="11" r="2"></circle>
                      </svg>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">التصميم</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">واجهة مستخدم تفاعلية</div>
                    </div>
                  </div>
                </TabsTrigger>
                <TabsTrigger 
                  value="code"
                  className="data-[state=active]:bg-nova-gradient data-[state=active]:text-white h-16 w-full rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm data-[state=active]:shadow-md text-right"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-md bg-blue-100 dark:bg-blue-900 flex items-center justify-center flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 dark:text-blue-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="16 18 22 12 16 6"></polyline>
                        <polyline points="8 6 2 12 8 18"></polyline>
                      </svg>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">الكود البرمجي</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">تطبيق أو موقع جاهز</div>
                    </div>
                  </div>
                </TabsTrigger>
                <TabsTrigger 
                  value="marketing"
                  className="data-[state=active]:bg-nova-gradient data-[state=active]:text-white h-16 w-full rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm data-[state=active]:shadow-md text-right"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-md bg-green-100 dark:bg-green-900 flex items-center justify-center flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 dark:text-green-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                      </svg>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">التسويق</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">خطة تسويقية فعالة</div>
                    </div>
                  </div>
                </TabsTrigger>
              </TabsList>
            </div>

            <div className="w-full md:w-2/3 bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-10 border border-gray-200 dark:border-gray-700 shadow-xl">
              <TabsContent value="business" className="mt-0">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-right">نموذج عمل متكامل للمشروع</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-8 text-right">
                    يقوم الذكاء الاصطناعي بتحويل فكرتك إلى نموذج عمل كامل يشمل:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                      <h4 className="font-semibold text-nova-700 dark:text-nova-300 mb-2 text-right">تحليل السوق</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 text-right">
                        تحديد حجم السوق المستهدف والفرص المتاحة والعوائق المحتملة
                      </p>
                    </div>
                    
                    <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                      <h4 className="font-semibold text-nova-700 dark:text-nova-300 mb-2 text-right">الهيكل المالي</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 text-right">
                        توقعات مالية دقيقة مع تحليل للتكاليف والإيرادات المتوقعة
                      </p>
                    </div>
                    
                    <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                      <h4 className="font-semibold text-nova-700 dark:text-nova-300 mb-2 text-right">استراتيجية النمو</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 text-right">
                        خطة توسع مدروسة للوصول إلى أكبر قاعدة من المستخدمين
                      </p>
                    </div>
                    
                    <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                      <h4 className="font-semibold text-nova-700 dark:text-nova-300 mb-2 text-right">تحليل المنافسين</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 text-right">
                        رصد لأهم المنافسين وتحديد ميزتك التنافسية
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-8 flex justify-center">
                    <img 
                      src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                      alt="Business Model" 
                      className="rounded-lg w-full max-w-md h-auto shadow-lg"
                    />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="design" className="mt-0">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-right">تصميم واجهة مستخدم مذهلة</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-8 text-right">
                    يقوم الذكاء الاصطناعي بإنشاء تصميم عصري وجذاب يجمع بين الجمال والوظائف:
                  </p>
                  
                  <div className="relative my-10">
                    <div className="absolute inset-0 bg-gradient-to-r from-nova-500/20 to-genesis-600/20 blur-2xl rounded-2xl"></div>
                    <div className="relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-xl">
                      <div className="h-8 bg-gray-100 dark:bg-gray-900 flex items-center px-4 border-b border-gray-200 dark:border-gray-700">
                        <div className="flex gap-1.5">
                          <div className="w-3 h-3 rounded-full bg-gray-300 dark:bg-gray-600"></div>
                          <div className="w-3 h-3 rounded-full bg-gray-300 dark:bg-gray-600"></div>
                          <div className="w-3 h-3 rounded-full bg-gray-300 dark:bg-gray-600"></div>
                        </div>
                      </div>
                      <div className="p-4">
                        <div className="flex flex-col gap-4">
                          <div className="h-16 bg-gray-100 dark:bg-gray-900 rounded-lg animate-pulse"></div>
                          <div className="grid grid-cols-3 gap-4">
                            <div className="h-32 bg-gray-100 dark:bg-gray-900 rounded-lg animate-pulse"></div>
                            <div className="h-32 bg-gray-100 dark:bg-gray-900 rounded-lg animate-pulse"></div>
                            <div className="h-32 bg-gray-100 dark:bg-gray-900 rounded-lg animate-pulse"></div>
                          </div>
                          <div className="h-24 bg-gray-100 dark:bg-gray-900 rounded-lg animate-pulse"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                    <div className="bg-nova-50 dark:bg-nova-900/30 p-4 rounded-lg border border-nova-100 dark:border-nova-800">
                      <h4 className="font-semibold text-nova-700 dark:text-nova-300 mb-2 text-center">تجربة مستخدم مميزة</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                        سهولة الاستخدام مع تصميم سلس وبديهي
                      </p>
                    </div>
                    
                    <div className="bg-genesis-50 dark:bg-genesis-900/30 p-4 rounded-lg border border-genesis-100 dark:border-genesis-800">
                      <h4 className="font-semibold text-genesis-700 dark:text-genesis-300 mb-2 text-center">رسوم متحركة</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                        عناصر تفاعلية تضفي حيوية على التجربة
                      </p>
                    </div>
                    
                    <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg border border-blue-100 dark:border-blue-800">
                      <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2 text-center">تصميم استجابي</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                        يعمل على جميع الأجهزة بكفاءة عالية
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="code" className="mt-0">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-right">تطوير تقني متكامل</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-8 text-right">
                    يقوم الذكاء الاصطناعي بإنشاء كود برمجي متكامل لتنفيذ فكرتك:
                  </p>
                  
                  <div className="relative bg-gray-900 rounded-lg p-4 font-mono text-sm text-green-400 overflow-hidden">
                    <div className="absolute top-0 left-0 h-full w-2 bg-nova-gradient"></div>
                    <div>
                      <span className="text-blue-400">import</span> <span className="text-yellow-400">React</span> <span className="text-blue-400">from</span> <span className="text-yellow-400">'react'</span>;
                    </div>
                    <div>
                      <span className="text-blue-400">import</span> <span className="text-yellow-400">&#123; motion &#125;</span> <span className="text-blue-400">from</span> <span className="text-yellow-400">'framer-motion'</span>;
                    </div>
                    <div>&nbsp;</div>
                    <div>
                      <span className="text-purple-400">const</span> <span className="text-blue-400">DinosaurGame</span> <span className="text-purple-400">=</span> <span className="text-orange-400">()</span> <span className="text-purple-400">=></span> <span className="text-orange-400">&#123;</span>
                    </div>
                    <div>&nbsp;&nbsp;<span className="text-blue-400">// Game logic generated by NovaGenesis AI</span></div>
                    <div>&nbsp;&nbsp;<span className="text-purple-400">const</span> <span className="text-blue-400">planets</span> <span className="text-purple-400">=</span> <span className="text-orange-400">[</span>
                      <span className="text-green-400">'Mars'</span><span className="text-orange-400">,</span> <span className="text-green-400">'Venus'</span><span className="text-orange-400">,</span> <span className="text-green-400">'Jupiter'</span>
                      <span className="text-orange-400">]</span>;
                    </div>
                    <div>&nbsp;</div>
                    <div>&nbsp;&nbsp;<span className="text-purple-400">return</span> <span className="text-orange-400">(</span></div>
                    <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">&lt;div</span> <span className="text-green-400">className</span><span className="text-purple-400">=</span><span className="text-green-400">"game-container"</span><span className="text-blue-400">></span></div>
                    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">&lt;h1></span>Dinosaur Star Planter<span className="text-blue-400">&lt;/h1></span></div>
                    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">&#123;</span>planets.<span className="text-yellow-400">map</span><span className="text-orange-400">((</span>planet<span className="text-orange-400">) =></span> <span className="text-orange-400">(</span></div>
                    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">&lt;motion.div</span></div>
                    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-400">key</span><span className="text-purple-400">=</span><span className="text-orange-400">&#123;</span>planet<span className="text-orange-400">&#125;</span></div>
                    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-400">animate</span><span className="text-purple-400">=</span><span className="text-orange-400">&#123;&#123;</span> <span className="text-blue-400">rotate:</span> <span className="text-purple-400">360</span> <span className="text-orange-400">&#125;&#125;</span></div>
                    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-400">className</span><span className="text-purple-400">=</span><span className="text-green-400">"planet"</span></div>
                    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">></span></div>
                    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-orange-400">&#123;</span>planet<span className="text-orange-400">&#125;</span></div>
                    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">&lt;/motion.div></span></div>
                    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-orange-400">))&#125;</span></div>
                    <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">&lt;/div></span></div>
                    <div>&nbsp;&nbsp;<span className="text-orange-400">);</span></div>
                    <div><span className="text-orange-400">&#125;</span>;</div>
                    <div>&nbsp;</div>
                    <div><span className="text-blue-400">export default</span> DinosaurGame;</div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
                    <div className="col-span-1 md:col-span-4">
                      <h4 className="font-semibold text-lg text-right mb-4">تقنيات متنوعة جاهزة للاستخدام</h4>
                    </div>
                    
                    <div className="text-center p-3 bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-200 dark:border-gray-800">
                      <div className="font-semibold text-blue-600 dark:text-blue-400">React</div>
                    </div>
                    
                    <div className="text-center p-3 bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-200 dark:border-gray-800">
                      <div className="font-semibold text-green-600 dark:text-green-400">Node.js</div>
                    </div>
                    
                    <div className="text-center p-3 bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-200 dark:border-gray-800">
                      <div className="font-semibold text-purple-600 dark:text-purple-400">Three.js</div>
                    </div>
                    
                    <div className="text-center p-3 bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-200 dark:border-gray-800">
                      <div className="font-semibold text-yellow-600 dark:text-yellow-400">Flutter</div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="marketing" className="mt-0">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-right">استراتيجية تسويقية شاملة</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-8 text-right">
                    يقدم الذكاء الاصطناعي خطة تسويقية متكاملة لضمان وصول منتجك إلى الجمهور المستهدف:
                  </p>
                  
                  <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
                    <div className="p-4 border-b border-gray-200 dark:border-gray-700 text-right">
                      <h4 className="font-semibold">فيديو إعلاني مولد بالذكاء الاصطناعي</h4>
                    </div>
                    <div className="aspect-video bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
                      <div className="flex flex-col items-center">
                        <div className="w-16 h-16 rounded-full bg-nova-gradient flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polygon points="5 3 19 12 5 21 5 3"></polygon>
                          </svg>
                        </div>
                        <p className="mt-4 text-gray-500 dark:text-gray-400">اضغط لتشغيل الفيديو</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                    <div className="space-y-4">
                      <h4 className="font-semibold text-lg text-right">محتوى السوشيال ميديا</h4>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-nova-50 dark:bg-nova-900/30 aspect-square rounded-lg border border-nova-100 dark:border-nova-800 flex items-center justify-center p-4">
                          <div className="text-nova-800 dark:text-nova-200 text-sm text-center">منشور انستجرام #1</div>
                        </div>
                        <div className="bg-genesis-50 dark:bg-genesis-900/30 aspect-square rounded-lg border border-genesis-100 dark:border-genesis-800 flex items-center justify-center p-4">
                          <div className="text-genesis-800 dark:text-genesis-200 text-sm text-center">منشور تويتر #1</div>
                        </div>
                        <div className="bg-blue-50 dark:bg-blue-900/30 aspect-square rounded-lg border border-blue-100 dark:border-blue-800 flex items-center justify-center p-4">
                          <div className="text-blue-800 dark:text-blue-200 text-sm text-center">فيديو تيك توك</div>
                        </div>
                        <div className="bg-green-50 dark:bg-green-900/30 aspect-square rounded-lg border border-green-100 dark:border-green-800 flex items-center justify-center p-4">
                          <div className="text-green-800 dark:text-green-200 text-sm text-center">منشور فيسبوك</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <h4 className="font-semibold text-lg text-right">تحليل الجمهور المستهدف</h4>
                      <div className="p-4 bg-white dark:bg-gray-900 rounded-lg shadow border border-gray-200 dark:border-gray-800">
                        <div className="h-48 flex items-center justify-center">
                          <div className="w-full h-full max-w-xs mx-auto bg-gray-100 dark:bg-gray-800 rounded-lg animate-pulse"></div>
                        </div>
                        <div className="mt-4 text-center text-sm text-gray-500">
                          رسم بياني تفاعلي للفئات المستهدفة
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </div>
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default ProcessVisualizer;
