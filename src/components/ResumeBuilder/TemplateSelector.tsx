import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ResumeTemplate } from "@/types/resume";

interface TemplateSelectorProps {
  selectedTemplate: ResumeTemplate;
  onTemplateSelect: (template: ResumeTemplate) => void;
}

const templates: { id: ResumeTemplate; name: string; description: string }[] = [
  {
    id: "modern-minimal",
    name: "Modern Minimal",
    description: "Clean and spacious layout perfect for a contemporary look",
  },
  {
    id: "professional-classic",
    name: "Professional Classic",
    description: "Traditional template with a modern twist",
  },
  {
    id: "creative-tech",
    name: "Creative Tech",
    description: "Modern design with subtle tech elements",
  },
  {
    id: "bold-impact",
    name: "Bold Impact",
    description: "Stand out with striking headers and clear sections",
  },
  {
    id: "elegant-simple",
    name: "Elegant Simple",
    description: "Sophisticated minimalist design",
  },
];

const TemplateSelector = ({
  selectedTemplate,
  onTemplateSelect,
}: TemplateSelectorProps) => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      <div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        role="radiogroup"
        aria-label="Resume template selection"
      >
        {templates.map((template) => (
          <Button
            key={template.id}
            variant="outline"
            className={cn(
              "relative h-auto flex flex-col items-start p-6 space-y-3 transition-all text-left min-h-[160px] w-full hover:scale-[1.02] hover:shadow-lg",
              "border-2 hover:border-resume-accent/50",
              selectedTemplate === template.id
                ? "ring-2 ring-resume-accent bg-resume-light shadow-md border-resume-accent"
                : "hover:bg-resume-light/50"
            )}
            onClick={() => onTemplateSelect(template.id)}
            role="radio"
            aria-checked={selectedTemplate === template.id}
            aria-label={`Select ${template.name} template`}
          >
            <h3 className="font-semibold text-lg text-resume-primary w-full">
              {template.name}
            </h3>
            <p className="text-sm leading-relaxed text-resume-secondary break-words w-full whitespace-normal">
              {template.description}
            </p>
            {selectedTemplate === template.id && (
              <div className="absolute top-3 right-3">
                <div className="w-2 h-2 rounded-full bg-resume-accent animate-pulse" />
              </div>
            )}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default TemplateSelector;