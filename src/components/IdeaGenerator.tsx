
import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface IdeaState {
  status: 'idle' | 'generating' | 'complete';
  progress: number;
  currentStep: number;
}

const steps = [
  "تحليل الفكرة...",
  "إنشاء نموذج عمل...",
  "تصميم واجهة المستخدم...",
  "كتابة الكود البرمجي...",
  "إنشاء خطة تسويقية...",
  "توليد فيديو تسويقي...",
  "اكتمل!"
];

const ideaExamples = [
  "لعبة ديناصور يزرع النجوم على كوكب مارِس",
  "منصة لبيع أحذية تعرضها على قدم المستخدم بالواقع الافتراضي",
  "ساعة ذكية لقياس معدل السكر في الدم",
  "تطبيق يحول الرسومات اليدوية إلى واقع معزز",
  "روبوت منزلي يطهو الطعام العربي التقليدي"
];

const IdeaGenerator = () => {
  const { toast } = useToast();
  const [idea, setIdea] = useState("");
  const [generationState, setGenerationState] = useState<IdeaState>({
    status: 'idle',
    progress: 0,
    currentStep: 0
  });
  const [currentExample, setCurrentExample] = useState(0);

  const startGeneration = () => {
    if (!idea.trim()) {
      toast({
        title: "أدخل فكرتك أولاً",
        description: "يرجى كتابة فكرتك قبل البدء في التوليد",
        variant: "destructive"
      });
      return;
    }

    setGenerationState({
      status: 'generating',
      progress: 0,
      currentStep: 0
    });

    // Simulate generation process with increasing progress
    const intervalTime = 800;
    const stepCount = steps.length;
    let currentProgress = 0;
    
    const interval = setInterval(() => {
      currentProgress += 1;
      const step = Math.min(Math.floor((currentProgress / (stepCount * 3)) * stepCount), stepCount - 1);
      const progress = Math.min((currentProgress / (stepCount * 3)) * 100, 100);
      
      setGenerationState({
        status: progress >= 100 ? 'complete' : 'generating',
        progress,
        currentStep: step
      });
      
      if (progress >= 100) {
        clearInterval(interval);
        toast({
          title: "تم إنشاء المنتج!",
          description: "يمكنك الآن استعراض منتجك الكامل",
        });
      }
    }, intervalTime);
  };

  React.useEffect(() => {
    // Rotate through example ideas every 3 seconds
    const exampleInterval = setInterval(() => {
      setCurrentExample((prev) => (prev + 1) % ideaExamples.length);
    }, 3000);
    
    return () => clearInterval(exampleInterval);
  }, []);

  return (
    <section className="py-16 bg-gradient-to-b from-background to-nova-50/30">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">أدخل فكرتك الآن</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            حتى لو كانت مجرد جملة عشوائية، سنحولها إلى منتج متكامل وجاهز للاستخدام
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="relative mb-6">
            <Input
              className="nova-input text-lg h-16 pr-12 text-right"
              placeholder={ideaExamples[currentExample]}
              value={idea}
              onChange={(e) => setIdea(e.target.value)}
              dir="rtl"
            />
            <div className="absolute inset-y-0 right-4 flex items-center">
              <div className="w-6 h-6 rounded-full bg-gradient-to-r from-nova-400 to-genesis-500"></div>
            </div>
          </div>
          
          <div className="flex justify-center mb-12">
            <button 
              className="nova-button text-lg px-10 py-4"
              onClick={startGeneration}
              disabled={generationState.status === 'generating'}
            >
              {generationState.status === 'generating' ? 'جاري التوليد...' : 'توليد المنتج'}
            </button>
          </div>

          {generationState.status !== 'idle' && (
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-800">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  {generationState.status === 'generating' ? (
                    <div className="w-3 h-3 rounded-full bg-nova-500 animate-pulse"></div>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                  <span className="font-medium">
                    {generationState.status === 'generating' ? 'جاري إنشاء منتجك' : 'تم إنشاء منتجك'}
                  </span>
                </div>
                <span className="text-sm text-gray-500">{Math.round(generationState.progress)}%</span>
              </div>
              
              <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full mb-6 overflow-hidden">
                <div 
                  className="h-full bg-nova-gradient rounded-full transition-all duration-500"
                  style={{ width: `${generationState.progress}%` }}
                ></div>
              </div>
              
              <ul className="space-y-4">
                {steps.map((step, index) => (
                  <li 
                    key={index} 
                    className={`flex items-center gap-3 ${index > generationState.currentStep ? 'opacity-40' : ''}`}
                  >
                    {index < generationState.currentStep ? (
                      <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    ) : index === generationState.currentStep ? (
                      <div className="w-6 h-6 rounded-full bg-nova-gradient animate-pulse"></div>
                    ) : (
                      <div className="w-6 h-6 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                    )}
                    <span>{step}</span>
                  </li>
                ))}
              </ul>

              {generationState.status === 'complete' && (
                <div className="mt-6 flex justify-center">
                  <Button className="nova-button px-8">عرض المنتج النهائي</Button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default IdeaGenerator;
