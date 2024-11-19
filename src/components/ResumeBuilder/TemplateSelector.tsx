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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
      {templates.map((template) => (
        <Button
          key={template.id}
          variant="outline"
          className={cn(
            "h-auto flex flex-col items-start p-3 sm:p-4 space-y-1 sm:space-y-2 transition-all text-left",
            selectedTemplate === template.id &&
              "ring-2 ring-resume-accent bg-resume-light"
          )}
          onClick={() => onTemplateSelect(template.id)}
        >
          <h3 className="font-semibold text-resume-primary">{template.name}</h3>
          <p className="text-sm text-resume-secondary">{template.description}</p>
        </Button>
      ))}
    </div>
  );
};

export default TemplateSelector;