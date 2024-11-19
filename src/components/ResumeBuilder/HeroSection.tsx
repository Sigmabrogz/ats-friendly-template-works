import { motion } from "framer-motion";
import { Code2, Coffee, Laptop, Sparkles } from "lucide-react";
import { ResumeTemplate } from "@/types/resume";

interface HeroSectionProps {
  selectedTemplate?: ResumeTemplate;
}

const HeroSection = ({ selectedTemplate }: HeroSectionProps) => {
  return (
    <div className="relative bg-gradient-to-br from-purple-100 to-indigo-50 py-8 sm:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Coding Background */}
      <div 
        className="absolute inset-0 opacity-20 select-none pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dominant-baseline='middle' font-family='monospace' font-size='14' fill='%236B46C1'%3E%7B %7D %3C/%3E const if else function return import export class interface type let var%3C/text%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
        }}
      />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto text-center relative z-10"
      >
        <div className="flex justify-center mb-4 sm:mb-6 space-x-2 sm:space-x-4">
          <Coffee className="h-6 w-6 sm:h-8 sm:w-8 text-purple-600 animate-bounce" />
          <Code2 className="h-6 w-6 sm:h-8 sm:w-8 text-indigo-600 animate-pulse" />
          <Laptop className="h-6 w-6 sm:h-8 sm:w-8 text-purple-600 animate-bounce" />
        </div>
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-2 sm:mb-4">
          Welcome to Ritesh's Resume Hub! 
          <Sparkles className="inline-block ml-2 h-6 w-6 sm:h-8 sm:w-8 text-yellow-400 animate-spin" />
        </h1>
        
        <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-4 sm:mb-8">
          A Computer Engineering graduate who loves turning complex problems into elegant solutions
        </p>
        
        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 sm:p-6 mb-6 sm:mb-8 max-w-2xl mx-auto">
          <p className="text-gray-700 text-base sm:text-lg">
            "Dear Recruiter, I know how precious your time is, so I've made it super easy! Below you'll find my resume in different formats - because why settle for one when you can have the perfect style for your needs? Just pick the format that speaks to you, and let's fast-track this journey together! 🚀 No more back-and-forth about resume formats - how's that for efficiency? 😊"
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;