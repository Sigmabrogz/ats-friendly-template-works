import { ResumeData } from "@/types/resume";

const ModernMinimal = ({ data }: { data: ResumeData }) => {
  return (
    <div className="max-w-[21cm] mx-auto bg-white p-8 shadow-lg animate-template-fade">
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold text-resume-primary">
          {data.personalInfo.firstName} {data.personalInfo.lastName}
        </h1>
        <p className="text-lg text-resume-secondary mt-2">
          {data.personalInfo.title}
        </p>
        <div className="flex justify-center gap-4 mt-4 text-sm text-resume-secondary">
          <span>{data.personalInfo.email}</span>
          <span>{data.personalInfo.phone}</span>
          <span>{data.personalInfo.location}</span>
        </div>
      </header>

      {/* Summary */}
      <section className="mb-8">
        <p className="text-resume-secondary leading-relaxed">
          {data.personalInfo.summary}
        </p>
      </section>

      {/* Experience */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-resume-primary mb-4 border-b border-resume-muted pb-2">
          Experience
        </h2>
        {data.experience.map((exp, index) => (
          <div key={index} className="mb-6">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-resume-primary">
                  {exp.position}
                </h3>
                <p className="text-resume-secondary">{exp.company}</p>
              </div>
              <p className="text-sm text-resume-secondary">
                {exp.startDate} - {exp.endDate}
              </p>
            </div>
            <p className="mt-2 text-resume-secondary">{exp.description}</p>
            <ul className="mt-2 list-disc list-inside">
              {exp.achievements.map((achievement, i) => (
                <li key={i} className="text-resume-secondary text-sm">
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Education */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-resume-primary mb-4 border-b border-resume-muted pb-2">
          Education
        </h2>
        {data.education.map((edu, index) => (
          <div key={index} className="mb-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-resume-primary">
                  {edu.school}
                </h3>
                <p className="text-resume-secondary">
                  {edu.degree} in {edu.fieldOfStudy}
                </p>
              </div>
              <p className="text-sm text-resume-secondary">
                {edu.startDate} - {edu.endDate}
              </p>
            </div>
            <p className="mt-2 text-resume-secondary text-sm">
              {edu.description}
            </p>
          </div>
        ))}
      </section>

      {/* Skills */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-resume-primary mb-4 border-b border-resume-muted pb-2">
          Skills
        </h2>
        <div className="grid grid-cols-2 gap-4">
          {data.skills.map((skill, index) => (
            <div key={index} className="flex justify-between items-center">
              <span className="text-resume-secondary">{skill.name}</span>
              <span className="text-sm text-resume-accent">{skill.level}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Languages */}
      <section>
        <h2 className="text-xl font-semibold text-resume-primary mb-4 border-b border-resume-muted pb-2">
          Languages
        </h2>
        <div className="grid grid-cols-2 gap-4">
          {data.languages.map((lang, index) => (
            <div key={index} className="flex justify-between items-center">
              <span className="text-resume-secondary">{lang.language}</span>
              <span className="text-sm text-resume-accent">
                {lang.proficiency}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ModernMinimal;