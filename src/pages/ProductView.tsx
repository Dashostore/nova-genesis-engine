
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { checkIdeaStatus, mockCheckIdeaStatus } from "@/services/api";
import { useToast } from "@/hooks/use-toast";

interface ProductViewProps {}

const ProductView: React.FC<ProductViewProps> = () => {
  const { ideaId } = useParams<{ ideaId: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState<any>(null);
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    const fetchProduct = async () => {
      if (!ideaId) {
        toast({
          title: "خطأ",
          description: "لم يتم العثور على معرف المنتج",
          variant: "destructive",
        });
        navigate("/");
        return;
      }

      try {
        // استخدام واجهة برمجة التطبيقات أو المحاكاة
        const response = await mockCheckIdeaStatus(ideaId, 100);
        
        // التأكد من أن المنتج مكتمل
        if (response.status !== "complete") {
          toast({
            title: "المنتج قيد الإنشاء",
            description: "لا يزال المنتج قيد الإنشاء. سيتم توجيهك إلى الصفحة الرئيسية.",
          });
          navigate("/");
          return;
        }

        // بيانات وهمية للعرض
        setProduct({
          id: response.id,
          title: "منتجك الجديد",
          description: "وصف تفصيلي للمنتج الذي تم إنشاؤه بناءً على فكرتك الأصلية",
          businessModel: {
            revenue: "نموذج الاشتراكات الشهرية مع خطط متعددة",
            costs: "تكاليف استضافة وتطوير وتسويق متوسطة",
            market: "سوق متنامي مع منافسة محدودة"
          },
          design: {
            ui: "واجهة مستخدم عصرية وسهلة الاستخدام",
            colors: "مخطط ألوان يعتمد على الأزرق والأرجواني",
            typography: "خطوط عصرية سهلة القراءة"
          },
          code: {
            frontend: "React Native مع TypeScript",
            backend: "Node.js مع GraphQL",
            database: "MongoDB"
          },
          marketingPlan: {
            channels: "وسائل التواصل الاجتماعي، التسويق بالمحتوى، العلاقات العامة",
            timeline: "إطلاق تجريبي بعد 3 أشهر، إطلاق كامل بعد 6 أشهر",
            budget: "15,000 دولار للإطلاق الأولي"
          }
        });
        
        setLoading(false);
      } catch (error) {
        console.error("خطأ في جلب بيانات المنتج:", error);
        toast({
          title: "خطأ",
          description: "حدث خطأ أثناء تحميل بيانات المنتج",
          variant: "destructive",
        });
        navigate("/");
      }
    };

    fetchProduct();
  }, [ideaId, navigate, toast]);

  if (loading) {
    return (
      <div dir="rtl" className="min-h-screen pt-20 bg-background flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 border-4 border-nova-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="text-xl">جاري تحميل المنتج...</p>
        </div>
      </div>
    );
  }

  return (
    <div dir="rtl" className="min-h-screen pt-20 pb-16 bg-background">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{product.title}</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {product.description}
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full mb-12">
          <TabsList className="grid grid-cols-5 mb-8">
            <TabsTrigger value="overview" className="data-[state=active]:bg-nova-gradient data-[state=active]:text-white">
              نظرة عامة
            </TabsTrigger>
            <TabsTrigger value="business" className="data-[state=active]:bg-nova-gradient data-[state=active]:text-white">
              نموذج العمل
            </TabsTrigger>
            <TabsTrigger value="design" className="data-[state=active]:bg-nova-gradient data-[state=active]:text-white">
              التصميم
            </TabsTrigger>
            <TabsTrigger value="development" className="data-[state=active]:bg-nova-gradient data-[state=active]:text-white">
              التطوير
            </TabsTrigger>
            <TabsTrigger value="marketing" className="data-[state=active]:bg-nova-gradient data-[state=active]:text-white">
              التسويق
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="bg-white dark:bg-gray-900 shadow-lg rounded-xl p-6 border border-gray-200 dark:border-gray-800">
              <h2 className="text-2xl font-bold mb-4">منتجك بنظرة سريعة</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="aspect-square bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                  <p className="text-gray-500">صورة المنتج</p>
                </div>
                <div className="md:col-span-2 space-y-4">
                  <p className="text-gray-600 dark:text-gray-400">
                    تم تطوير هذا المنتج استنادًا إلى فكرتك الأصلية، مع تحسينات وإضافات لضمان قابليته للتنفيذ وجاذبيته في السوق. فيما يلي نظرة عامة على الميزات الرئيسية والفوائد والجمهور المستهدف.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">الميزات الرئيسية</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-1 list-disc list-inside text-gray-600 dark:text-gray-400">
                          <li>ميزة رئيسية 1</li>
                          <li>ميزة رئيسية 2</li>
                          <li>ميزة رئيسية 3</li>
                        </ul>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">الجمهور المستهدف</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-1 list-disc list-inside text-gray-600 dark:text-gray-400">
                          <li>فئة مستهدفة 1</li>
                          <li>فئة مستهدفة 2</li>
                          <li>فئة مستهدفة 3</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="business" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>نموذج العمل</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-bold">مصادر الإيرادات</h3>
                  <p className="text-gray-600 dark:text-gray-400">{product.businessModel.revenue}</p>
                </div>
                <div>
                  <h3 className="font-bold">التكاليف</h3>
                  <p className="text-gray-600 dark:text-gray-400">{product.businessModel.costs}</p>
                </div>
                <div>
                  <h3 className="font-bold">تحليل السوق</h3>
                  <p className="text-gray-600 dark:text-gray-400">{product.businessModel.market}</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="design" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>تصميم المنتج</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-bold">واجهة المستخدم</h3>
                  <p className="text-gray-600 dark:text-gray-400">{product.design.ui}</p>
                </div>
                <div>
                  <h3 className="font-bold">نظام الألوان</h3>
                  <p className="text-gray-600 dark:text-gray-400">{product.design.colors}</p>
                </div>
                <div>
                  <h3 className="font-bold">الخطوط</h3>
                  <p className="text-gray-600 dark:text-gray-400">{product.design.typography}</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="aspect-square bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                      <p className="text-xs text-gray-500">نموذج تصميم {i}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="development" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>تطوير المنتج</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-bold">تقنيات الواجهة الأمامية</h3>
                  <p className="text-gray-600 dark:text-gray-400">{product.code.frontend}</p>
                </div>
                <div>
                  <h3 className="font-bold">تقنيات الخلفية</h3>
                  <p className="text-gray-600 dark:text-gray-400">{product.code.backend}</p>
                </div>
                <div>
                  <h3 className="font-bold">قاعدة البيانات</h3>
                  <p className="text-gray-600 dark:text-gray-400">{product.code.database}</p>
                </div>
                <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg font-mono text-sm overflow-x-auto mt-4">
                  <pre className="text-left text-gray-600 dark:text-gray-400">
                    <code>{`// نموذج كود للمنتج
export async function processUserData(userData) {
  try {
    // معالجة بيانات المستخدم
    const result = await dataProcessor.analyze({
      data: userData,
      options: {
        optimize: true,
        validate: true
      }
    });
    
    return {
      status: "success",
      processed: result.processed,
      insights: result.insights
    };
  } catch (error) {
    console.error("خطأ في معالجة البيانات:", error);
    return { error: "فشل في معالجة البيانات" };
  }
}`}</code>
                  </pre>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="marketing" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>خطة التسويق</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-bold">قنوات التسويق</h3>
                  <p className="text-gray-600 dark:text-gray-400">{product.marketingPlan.channels}</p>
                </div>
                <div>
                  <h3 className="font-bold">الجدول الزمني</h3>
                  <p className="text-gray-600 dark:text-gray-400">{product.marketingPlan.timeline}</p>
                </div>
                <div>
                  <h3 className="font-bold">الميزانية</h3>
                  <p className="text-gray-600 dark:text-gray-400">{product.marketingPlan.budget}</p>
                </div>
                <div className="bg-nova-50 dark:bg-gray-800/50 p-6 rounded-xl mt-4">
                  <h3 className="text-xl font-bold mb-4 text-center">النموذج الترويجي</h3>
                  <div className="aspect-video bg-black/80 rounded-lg flex items-center justify-center">
                    <div className="p-8 text-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mx-auto text-white/50 mb-4">
                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                      </svg>
                      <p className="text-white/70">فيديو ترويجي للمنتج</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="text-center">
          <button className="nova-button text-lg px-10 py-4" onClick={() => navigate('/')}>
            العودة للصفحة الرئيسية
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductView;
