import { useState } from "react";
import TemplateSelector from "@/components/ResumeBuilder/TemplateSelector";
import ModernMinimal from "@/components/ResumeBuilder/templates/ModernMinimal";
import ProfessionalClassic from "@/components/ResumeBuilder/templates/ProfessionalClassic";
import CreativeTech from "@/components/ResumeBuilder/templates/CreativeTech";
import BoldImpact from "@/components/ResumeBuilder/templates/BoldImpact";
import ElegantSimple from "@/components/ResumeBuilder/templates/ElegantSimple";
import HeroSection from "@/components/ResumeBuilder/HeroSection";
import { ResumeData, ResumeTemplate } from "@/types/resume";

  const sampleResumeData: ResumeData = {
    template: "modern-minimal",
    personalInfo: {
      firstName: "Ritesh",
      lastName: "Kushwaha",
      email: "rkushitesh@gmail.com",
      phone: "6388797274",
      location: "Lucknow, Uttar Pradesh",
      title: "Computer Engineering Graduate",
      summary: "I am a motivated and detail-oriented Computer Engineering graduate seeking a challenging role where I can apply my skills and knowledge. With a strong foundation in computer engineering principles, I am eager to contribute to advanced projects and take on high-performance tasks that will allow me to grow and develop professionally. I am committed to delivering efficient solutions and am excited about the opportunity to make a meaningful impact in the field.",
    },
    education: [
      {
        school: "Chandigarh University",
        degree: "Master of Computer Application",
        fieldOfStudy: "Computer Application",
        startDate: "2020",
        endDate: "2022",
        description: "Score: 7.75 CGPA",
      },
      {
        school: "BBD University, Lucknow",
        degree: "Bachelor of Computer Application",
        fieldOfStudy: "Computer Application",
        startDate: "2017",
        endDate: "2020",
        description: "Score: 7.14 CGPA",
      },
      {
        school: "S B Devi I C Selharapur B J School",
        degree: "Intermediate",
        fieldOfStudy: "UP Board",
        startDate: "2016",
        endDate: "2017",
        description: "Percentage: 55%",
      },
      {
        school: "M G Convent School Kanpur Road",
        degree: "Matriculation",
        fieldOfStudy: "CBSE",
        startDate: "2012",
        endDate: "2014",
        description: "Percentage: 72%",
      },
    ],
    experience: [
      {
        company: "DIGIPODIUM",
        position: "Team Project Member",
        location: "Remote",
        startDate: "Jan 2020",
        endDate: "May 2020",
        description: "Animal Recognition System - A real-time recognition and tracking system for animals using Python and machine learning algorithms.",
        achievements: [
          "Implemented real-time recognition and tracking for multiple animals",
          "Enhanced accuracy using advanced machine learning algorithms",
          "Designed user-friendly interface for efficient data analysis",
        ],
      },
      {
        company: "Team Project",
        position: "Developer",
        location: "Remote",
        startDate: "Sep 2021",
        endDate: "Dec 2021",
        description: "Food Ordering Management System - A comprehensive system built with PHP & CSS.",
        achievements: [
          "Implemented real-time order status tracking",
          "Integrated multiple secure payment options",
          "Developed personalized recommendation system",
        ],
      },
    ],
    skills: [
      { name: "Python", level: "Advanced" },
      { name: "MySQL", level: "Intermediate" },
      { name: "HTML", level: "Advanced" },
      { name: "CSS", level: "Advanced" },
      { name: "PHP", level: "Intermediate" },
      { name: "Problem Solving", level: "Advanced" },
      { name: "Time Management", level: "Expert" },
      { name: "Team Collaboration", level: "Expert" },
    ],
    languages: [
      { language: "English", proficiency: "Professional" },
      { language: "Hindi", proficiency: "Native" },
    ],
    projects: [
      {
        name: "Animal Recognition System",
        description: "Real-time animal recognition and tracking system using Python and ML",
        technologies: ["Python", "Machine Learning", "Computer Vision"],
        link: "",
      },
      {
        name: "Food Ordering Management System",
        description: "Comprehensive food ordering platform with real-time tracking",
        technologies: ["PHP", "CSS", "MySQL"],
        link: "",
      },
    ],
  };

const Index = () => {
  const [selectedTemplate, setSelectedTemplate] =
    useState<ResumeTemplate>("modern-minimal");

  const renderTemplate = () => {
    switch (selectedTemplate) {
      case "modern-minimal":
        return <ModernMinimal data={sampleResumeData} />;
      case "professional-classic":
        return <ProfessionalClassic data={sampleResumeData} />;
      case "creative-tech":
        return <CreativeTech data={sampleResumeData} />;
      case "bold-impact":
        return <BoldImpact data={sampleResumeData} />;
      case "elegant-simple":
        return <ElegantSimple data={sampleResumeData} />;
      default:
        return <ModernMinimal data={sampleResumeData} />;
    }
  };

  return (
    <div className="min-h-screen bg-resume-light">
      <HeroSection />
      
      <main className="w-full max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-resume-primary mb-4">
              Choose a Template
            </h2>
            <p className="text-resume-secondary max-w-2xl mx-auto mb-8">
              Select from our professionally designed templates to create your perfect resume
            </p>
            <TemplateSelector
              selectedTemplate={selectedTemplate}
              onTemplateSelect={setSelectedTemplate}
            />
          </div>

          <div className="bg-white shadow rounded-lg p-4 sm:p-6 overflow-x-auto">
            {renderTemplate()}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
