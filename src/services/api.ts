
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

export async function mockCheckIdeaStatus(ideaId: string, currentProgress: number): Promise<IdeaResponse> {
  // تقدم المحاكاة بنسبة 10٪ في كل مرة
  const newProgress = Math.min(currentProgress + 10, 100);
  const stepCount = 7; // عدد الخطوات الإجمالي
  const currentStep = Math.min(Math.floor((newProgress / 100) * stepCount), stepCount - 1);
  
  let status: 'analyzing' | 'generating' | 'complete' = 'analyzing';
  if (newProgress >= 100) {
    status = 'complete';
  } else if (newProgress > 30) {
    status = 'generating';
  }
  
  return {
    id: ideaId,
    status,
    progress: newProgress,
    currentStep
  };
}
