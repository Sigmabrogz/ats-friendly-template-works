import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Code2, Coffee, Laptop, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-br from-purple-100 to-indigo-50 py-16 px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto text-center"
      >
        <div className="flex justify-center mb-6 space-x-4">
          <Coffee className="h-8 w-8 text-purple-600 animate-bounce" />
          <Code2 className="h-8 w-8 text-indigo-600 animate-pulse" />
          <Laptop className="h-8 w-8 text-purple-600 animate-bounce" />
        </div>
        
        <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-4">
          Hey! I'm <span className="text-purple-600">Ritesh Kushwaha</span> 
          <Sparkles className="inline-block ml-2 h-8 w-8 text-yellow-400 animate-spin" />
        </h1>
        
        <p className="text-xl sm:text-2xl text-gray-600 mb-8">
          A Computer Engineering graduate who turns coffee into code and dreams into digital reality!
        </p>
        
        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 mb-8 max-w-2xl mx-auto">
          <p className="text-gray-700 text-lg">
            "When I'm not implementing real-time animal recognition systems or crafting food ordering platforms, 
            you can find me solving problems faster than my coffee gets cold! 🚀"
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <Button 
            variant="default"
            className="bg-purple-600 hover:bg-purple-700"
            size="lg"
          >
            View My Projects
          </Button>
          <Button 
            variant="outline"
            className="border-purple-600 text-purple-600 hover:bg-purple-50"
            size="lg"
          >
            Download CV
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;