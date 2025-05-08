
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ExampleProject {
  id: number;
  title: string;
  description: string;
  image: string;
  category: 'game' | 'app' | 'physical' | 'web';
  tags: string[];
}

const projects: ExampleProject[] = [
  {
    id: 1,
    title: "ديناصور مارس",
    description: "لعبة تفاعلية حيث يزرع ديناصور ودود النجوم على سطح كوكب المريخ لإعادة الحياة إليه",
    image: "https://images.unsplash.com/photo-1635638052453-c359c5047b05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: 'game',
    tags: ['ألعاب', 'فضاء', 'تعليم']
  },
  {
    id: 2,
    title: "أحذية الواقع الافتراضي",
    description: "منصة تسوق تتيح للمستخدمين تجربة الأحذية افتراضيًا قبل الشراء باستخدام تقنية AR",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: 'app',
    tags: ['تسوق', 'واقع معزز', 'موضة']
  },
  {
    id: 3,
    title: "ساعة قياس السكر",
    description: "ساعة ذكية مبتكرة تقيس مستويات السكر في الدم دون الحاجة لوخز الإصبع مع تطبيق مرفق",
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
    category: 'physical',
    tags: ['صحة', 'تكنولوجيا', 'طب']
  },
  {
    id: 4,
    title: "رسومات متحركة",
    description: "تطبيق يحول رسومات الأطفال اليدوية إلى شخصيات متحركة بتقنية الواقع المعزز",
    image: "https://images.unsplash.com/photo-1560762484-813fc97650a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
    category: 'app',
    tags: ['أطفال', 'إبداع', 'تعليم']
  },
  {
    id: 5,
    title: "الشيف الروبوت",
    description: "روبوت منزلي متخصص في تحضير الأطباق العربية التقليدية مع تطبيق للوصفات",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: 'physical',
    tags: ['طعام', 'تكنولوجيا', 'منزل ذكي']
  },
  {
    id: 6,
    title: "عالم التنانين",
    description: "لعبة واقع افتراضي تتيح للمستخدمين استكشاف عالم خيالي مليء بالتنانين والمغامرات",
    image: "https://images.unsplash.com/photo-1471877325906-aee7c2240b5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: 'game',
    tags: ['ألعاب', 'خيال', 'واقع افتراضي']
  }
];

const categoryFilters = [
  { id: 'all', label: 'الكل' },
  { id: 'game', label: 'ألعاب' },
  { id: 'app', label: 'تطبيقات' },
  { id: 'physical', label: 'منتجات مادية' },
  { id: 'web', label: 'مواقع إلكترونية' }
];

const ExampleGallery = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-nova-50 dark:from-gray-900 dark:to-gray-900">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">إبداعات تم إنشاؤها بواسطة NovaGenesis.ai</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            ألق نظرة على بعض المنتجات والأفكار المذهلة التي أنشأها مستخدمون مثلك
          </p>
        </div>
        
        <div className="flex justify-center mb-10 overflow-x-auto pb-4">
          <div className="flex gap-2 flex-nowrap">
            {categoryFilters.map((filter) => (
              <Button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                variant={activeFilter === filter.id ? "default" : "outline"}
                className={`px-6 py-2 rounded-full ${activeFilter === filter.id ? 'bg-nova-gradient' : 'border-2 hover:border-genesis-500'}`}
              >
                {filter.label}
              </Button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card 
              key={project.id}
              className="overflow-hidden transition-shadow duration-300 hover:shadow-xl dark:hover:shadow-nova-500/10 border-gray-200 dark:border-gray-800"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className={`object-cover w-full h-full transition-transform duration-500 ${hoveredProject === project.id ? 'scale-110' : 'scale-100'}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                  <h3 className="text-white text-xl font-bold">{project.title}</h3>
                </div>
              </div>
              
              <CardContent className="pt-6 pb-4 text-right">
                <p className="text-gray-600 dark:text-gray-400">{project.description}</p>
              </CardContent>
              
              <CardFooter className="flex flex-col items-start">
                <div className="flex flex-wrap gap-2 mb-4 w-full justify-end">
                  {project.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary" className="bg-nova-100 text-nova-800 dark:bg-nova-900 dark:text-nova-200">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Button className="w-full nova-button">عرض التفاصيل</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="flex justify-center mt-12">
          <Button variant="outline" className="border-2 text-lg px-8">
            عرض المزيد من المشاريع
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ExampleGallery;
