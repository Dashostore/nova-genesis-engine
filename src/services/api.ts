
import { useToast } from "@/hooks/use-toast";

// واجهة لإرسال فكرة وتلقي استجابة
export interface IdeaRequest {
  idea: string;
}

export interface IdeaResponse {
  id: string;
  status: 'analyzing' | 'generating' | 'complete';
  progress: number;
  currentStep: number;
  result?: {
    title: string;
    description: string;
    businessModel: string;
    design: string;
    code: string;
    marketingPlan: string;
  };
}

// احفظ API Key في ثابت لاستخدامه في الطلبات
// في الإنتاج يجب تخزين المفتاح في بيئة خادم آمنة
const API_KEY = "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";
const API_URL = "https://api.novagenesis.ai"; // استبدل هذا بعنوان URL الفعلي لواجهة برمجة التطبيقات الخاصة بك

// دالة لإرسال فكرة إلى API
export async function submitIdea(ideaText: string): Promise<IdeaResponse> {
  try {
    const response = await fetch(`${API_URL}/ideas`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`
      },
      body: JSON.stringify({ idea: ideaText })
    });

    if (!response.ok) {
      throw new Error(`خطأ في الشبكة: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("خطأ في إرسال الفكرة:", error);
    throw error;
  }
}

// دالة لاستعلام حالة الفكرة من API
export async function checkIdeaStatus(ideaId: string): Promise<IdeaResponse> {
  try {
    const response = await fetch(`${API_URL}/ideas/${ideaId}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${API_KEY}`
      }
    });

    if (!response.ok) {
      throw new Error(`خطأ في الشبكة: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("خطأ في استعلام حالة الفكرة:", error);
    throw error;
  }
}

// محاكاة واجهة برمجة التطبيقات عندما لا يمكن الوصول إلى الخادم الفعلي
export async function mockSubmitIdea(ideaText: string): Promise<IdeaResponse> {
  return {
    id: `idea-${Date.now()}`,
    status: 'analyzing',
    progress: 0,
    currentStep: 0
  };
}

// تخزين متغير لتتبع آخر وقت تم فيه استدعاء mockCheckIdeaStatus
const mockProgressData = new Map<string, { progress: number, lastUpdate: number }>();

// دالة محسنة لمحاكاة التحقق من حالة الفكرة مع تقدم حقيقي
export async function mockCheckIdeaStatus(ideaId: string, currentProgress?: number): Promise<IdeaResponse> {
  // تحقق مما إذا كانت بيانات التقدم موجودة لهذا المعرف
  if (!mockProgressData.has(ideaId)) {
    mockProgressData.set(ideaId, { progress: 0, lastUpdate: Date.now() });
  }

  const data = mockProgressData.get(ideaId)!;
  const elapsedTime = Date.now() - data.lastUpdate;
  
  // تحديث التقدم كل 2 ثانية بنسبة 10%
  if (elapsedTime > 2000) {
    data.progress += 10;
    if (data.progress > 100) data.progress = 100;
    data.lastUpdate = Date.now();
    mockProgressData.set(ideaId, data);
  }
  
  // استخدم القيمة المخزنة بدلاً من currentProgress
  const newProgress = data.progress;
  const stepCount = 7; // عدد الخطوات الإجمالي
  const currentStep = Math.min(Math.floor((newProgress / 100) * stepCount), stepCount - 1);
  
  let status: 'analyzing' | 'generating' | 'complete' = 'analyzing';
  if (newProgress >= 100) {
    status = 'complete';
  } else if (newProgress > 30) {
    status = 'generating';
  }
  
  // إضافة نتيجة عند اكتمال التوليد
  let result;
  if (status === 'complete') {
    result = {
      title: "منتجك الجديد",
      description: "وصف تفصيلي للمنتج الذي تم إنشاؤه بناءً على فكرتك الأصلية",
      businessModel: "نموذج الاشتراكات الشهرية مع خطط متعددة",
      design: "واجهة مستخدم عصرية وسهلة الاستخدام",
      code: "React Native مع TypeScript",
      marketingPlan: "وسائل التواصل الاجتماعي، التسويق بالمحتوى، العلاقات العامة"
    };
  }
  
  return {
    id: ideaId,
    status,
    progress: newProgress,
    currentStep,
    result
  };
}
