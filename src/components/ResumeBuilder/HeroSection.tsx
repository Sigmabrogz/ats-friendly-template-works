import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Code2, Coffee, Download, Laptop, Sparkles } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { ResumeTemplate } from "@/types/resume";

interface HeroSectionProps {
  selectedTemplate?: ResumeTemplate;
}

const HeroSection = ({ selectedTemplate }: HeroSectionProps) => {
  const { toast } = useToast();

  const handleDownload = () => {
    if (!selectedTemplate) {
      toast({
        variant: "destructive",
        title: "No Template Selected",
        description: "Please select a template first before downloading your CV.",
      });
      return;
    }

    const cvUrl = "/Ritesh_Kushwaha_CV.pdf";

    // Check if file exists
    fetch(cvUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('CV file not found');
        }
        return response.blob();
      })
      .then(blob => {
        // Create a temporary link element
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "Ritesh_Kushwaha_CV.pdf";
        
        // Append to document, trigger click, and remove
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        toast({
          title: "Download Started",
          description: "Your CV download should begin shortly.",
        });
      })
      .catch(error => {
        toast({
          variant: "destructive",
          title: "Download Failed",
          description: "CV file not found. Please try again later or contact for support.",
        });
        console.error('Download error:', error);
      });
  };

  return (
    <div className="bg-gradient-to-br from-purple-100 to-indigo-50 py-8 sm:py-16 px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto text-center"
      >
        <div className="flex justify-center mb-4 sm:mb-6 space-x-2 sm:space-x-4">
          <Coffee className="h-6 w-6 sm:h-8 sm:w-8 text-purple-600 animate-bounce" />
          <Code2 className="h-6 w-6 sm:h-8 sm:w-8 text-indigo-600 animate-pulse" />
          <Laptop className="h-6 w-6 sm:h-8 sm:w-8 text-purple-600 animate-bounce" />
        </div>
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-2 sm:mb-4">
          Hey! I'm <span className="text-purple-600">Ritesh Kushwaha</span> 
          <Sparkles className="inline-block ml-2 h-6 w-6 sm:h-8 sm:w-8 text-yellow-400 animate-spin" />
        </h1>
        
        <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-4 sm:mb-8">
          A Computer Engineering graduate who turns coffee into code and dreams into digital reality!
        </p>
        
        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 sm:p-6 mb-6 sm:mb-8 max-w-2xl mx-auto">
          <p className="text-gray-700 text-base sm:text-lg">
            "When I'm not implementing real-time animal recognition systems or crafting food ordering platforms, 
            you can find me solving problems faster than my coffee gets cold! 🚀"
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
          <Button 
            variant="outline"
            className="border-purple-600 text-purple-600 hover:bg-purple-50 w-full sm:w-auto"
            size="lg"
            onClick={handleDownload}
          >
            <Download className="mr-2 h-4 w-4" /> Download CV
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;