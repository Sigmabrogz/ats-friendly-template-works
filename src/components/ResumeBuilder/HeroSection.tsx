import { motion } from "framer-motion";
import { Code2, Coffee, Laptop, Sparkles, Bug, Download, ArrowRight } from "lucide-react";
import { ResumeTemplate } from "@/types/resume";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  selectedTemplate?: ResumeTemplate;
}

const HeroSection = ({ selectedTemplate }: HeroSectionProps) => {
  return (
    <div className="relative bg-gradient-to-br from-purple-100 to-indigo-50 py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated Background Pattern */}
      <div 
        className="absolute inset-0 opacity-10 select-none pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dominant-baseline='middle' font-family='monospace' font-size='14' fill='%236B46C1'%3E%7B %7D %3C/%3E const if else function return import export class interface type let var%3C/text%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
        }}
      />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center relative z-10"
      >
        {/* Floating Icons */}
        <div className="flex justify-center mb-8 space-x-6">
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Coffee className="h-8 w-8 text-purple-600" />
          </motion.div>
          <motion.div
            animate={{ y: [-10, 0, -10] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Code2 className="h-8 w-8 text-indigo-600" />
          </motion.div>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Laptop className="h-8 w-8 text-purple-600" />
          </motion.div>
        </div>
        
        {/* Main Header */}
        <motion.h1 
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4"
        >
          I'm Ritesh, and I Couldn't Pick One Template, So I Made Them All
          <Sparkles className="inline-block ml-2 h-8 w-8 text-yellow-400 animate-spin" />
        </motion.h1>
        
        {/* Subheader */}
        <motion.p 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-xl sm:text-2xl text-gray-600 mb-8"
        >
          A Computer Engineer who solved the hardest problem: making your life easier
        </motion.p>
        
        {/* Main Message */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="bg-white/90 backdrop-blur-sm rounded-xl p-6 mb-8 shadow-lg"
        >
          <p className="text-lg text-gray-700">
            Hey Recruiter, I get it. Choosing the right résumé format is a pain. So, I did the hard part for you—I made all the templates. Pick whichever one you like, or try them all. Either way, the content is pure Ritesh-quality brilliance. Let's save time and get straight to impressing you!
          </p>
        </motion.div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
          <Button 
            size="lg"
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold"
          >
            Pick Your Favorite <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            size="lg"
            variant="outline"
            className="border-purple-600 text-purple-600 hover:bg-purple-50"
          >
            Start Reading <Download className="ml-2 h-5 w-5" />
          </Button>
        </div>
        
        {/* Fine Print */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="text-sm text-gray-500 italic flex items-center justify-center gap-2"
        >
          <Bug className="h-4 w-4" />
          <p>PS: If I get hired, I'll throw in free bug fixes for life!</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroSection;