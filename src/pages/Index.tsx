import { useState } from "react";
import HeroSection from "@/components/ResumeBuilder/HeroSection";
import TemplateSelector from "@/components/ResumeBuilder/TemplateSelector";
import { ResumeTemplate } from "@/types/resume";

const Index = () => {
  const [selectedTemplate, setSelectedTemplate] = useState<ResumeTemplate>();

  const handleTemplateSelect = (template: ResumeTemplate) => {
    setSelectedTemplate(template);
  };

  return (
    <main className="min-h-screen">
      <HeroSection selectedTemplate={selectedTemplate} />
      <div className="py-8">
        <TemplateSelector
          selectedTemplate={selectedTemplate}
          onTemplateSelect={handleTemplateSelect}
        />
      </div>
    </main>
  );
};

export default Index;