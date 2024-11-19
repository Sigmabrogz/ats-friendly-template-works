import { useState } from "react";
import TemplateSelector from "@/components/ResumeBuilder/TemplateSelector";
import ModernMinimal from "@/components/ResumeBuilder/templates/ModernMinimal";
import { ResumeData, ResumeTemplate } from "@/types/resume";

const Index = () => {
  const [selectedTemplate, setSelectedTemplate] =
    useState<ResumeTemplate>("modern-minimal");

  // Sample data - in a real app this would come from a form
  const sampleResumeData: ResumeData = {
    template: "modern-minimal",
    personalInfo: {
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      phone: "(555) 123-4567",
      location: "San Francisco, CA",
      title: "Senior Software Engineer",
      summary:
        "Experienced software engineer with a passion for building scalable applications and solving complex problems. Specialized in full-stack development with expertise in React, Node.js, and cloud technologies.",
    },
    education: [
      {
        school: "University of California, Berkeley",
        degree: "Bachelor of Science",
        fieldOfStudy: "Computer Science",
        startDate: "2015",
        endDate: "2019",
        description:
          "Focused on software engineering and artificial intelligence. Graduated with honors.",
      },
    ],
    experience: [
      {
        company: "Tech Solutions Inc.",
        position: "Senior Software Engineer",
        location: "San Francisco, CA",
        startDate: "2019",
        endDate: "Present",
        description:
          "Lead developer for the company's main product, managing a team of 5 engineers.",
        achievements: [
          "Improved application performance by 40%",
          "Implemented new CI/CD pipeline",
          "Led migration to microservices architecture",
        ],
      },
    ],
    skills: [
      { name: "React", level: "Expert" },
      { name: "Node.js", level: "Advanced" },
      { name: "TypeScript", level: "Expert" },
      { name: "AWS", level: "Intermediate" },
    ],
    languages: [
      { language: "English", proficiency: "Native" },
      { language: "Spanish", proficiency: "Professional" },
    ],
    projects: [
      {
        name: "E-commerce Platform",
        description: "Built a scalable e-commerce platform using React and Node.js",
        technologies: ["React", "Node.js", "MongoDB"],
        link: "https://github.com/example/project",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-resume-light">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-resume-primary">
            Resume Builder
          </h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-resume-primary mb-4">
              Choose a Template
            </h2>
            <TemplateSelector
              selectedTemplate={selectedTemplate}
              onTemplateSelect={setSelectedTemplate}
            />
          </div>

          <div className="bg-white shadow rounded-lg p-6">
            <ModernMinimal data={sampleResumeData} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;