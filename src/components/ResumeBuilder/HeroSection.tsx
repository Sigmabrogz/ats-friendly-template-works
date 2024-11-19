import { motion } from "framer-motion";
import { Code2, Coffee, Laptop, Sparkles, Rocket, Brain, FileSearch } from "lucide-react";
import { ResumeTemplate } from "@/types/resume";

interface HeroSectionProps {
  selectedTemplate?: ResumeTemplate;
}

const HeroSection = ({ selectedTemplate }: HeroSectionProps) => {
  return (
    <div className="relative bg-gradient-to-br from-purple-100 to-indigo-50 py-8 sm:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dominant-baseline='middle' font-family='monospace' font-size='14' fill='%236B46C1'%3E%7B %7D while(coffee) { code(); }%3C/text%3E%3C/svg%3E")`,
            backgroundSize: '200px 200px',
          }}
        />
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            y: [0, -10, 0],
            x: [0, 5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute top-1/4 left-1/4"
        >
          <Coffee className="h-8 w-8 text-purple-400" />
        </motion.div>
        <motion.div
          animate={{
            y: [0, 10, 0],
            x: [0, -5, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute top-1/3 right-1/4"
        >
          <Code2 className="h-8 w-8 text-indigo-400" />
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto text-center relative z-10"
      >
        <motion.div 
          className="flex justify-center mb-4 space-x-4"
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
        >
          <Coffee className="h-8 w-8 text-purple-600" />
          <Brain className="h-8 w-8 text-indigo-600" />
          <Rocket className="h-8 w-8 text-purple-600" />
        </motion.div>

        <motion.h1 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4"
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
            Resume Format Roulette? Game Over! 🎯
          </span>
          <Sparkles className="inline-block ml-2 h-8 w-8 text-yellow-400 animate-spin" />
        </motion.h1>

        <p className="text-xl sm:text-2xl text-gray-600 mb-6">
          Your friendly neighborhood code wizard who turns 
          <motion.span 
            className="inline-block mx-2 font-semibold text-purple-600"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ☕
          </motion.span> 
          into 
          <motion.span 
            className="inline-block mx-2 font-semibold text-indigo-600"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            💻
          </motion.span>
        </p>

        <motion.div 
          className="bg-white/80 backdrop-blur-sm rounded-lg p-6 mb-8 max-w-2xl mx-auto shadow-lg"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <p className="text-gray-700 text-lg space-y-2">
            <span className="block font-semibold text-xl mb-3">🎭 Plot Twist Alert! 🎭</span>
            "Hey Recruiter! Tired of playing 'Guess the Perfect Resume Format'? Same! That's why I built this magical resume hub! Pick your favorite style below - Modern? Classic? Tech-savvy? You name it! Because life's too short for resume format drama! 
            <motion.span 
              className="inline-block"
              animate={{ rotate: [0, 14, -14, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              🎪
            </motion.span>
            <br />
            <span className="block mt-2 font-medium text-purple-600">
              Bonus: Each click is faster than my coffee getting cold! ⚡
            </span>"
          </p>
        </motion.div>

        <motion.div
          className="flex justify-center space-x-4 text-sm text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <FileSearch className="h-5 w-5 inline" />
          <span>Multiple formats, zero headaches!</span>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroSection;