import { ResumeData } from "@/types/resume";

const ProfessionalClassic = ({ data }: { data: ResumeData }) => {
  return (
    <div className="max-w-[21cm] mx-auto bg-white p-8 shadow-lg border-l-4 border-resume-accent animate-template-fade">
      {/* Header */}
      <header className="border-b-2 border-resume-primary pb-4 mb-6">
        <h1 className="text-4xl font-serif font-bold text-resume-primary">
          {data.personalInfo.firstName} {data.personalInfo.lastName}
        </h1>
        <p className="text-xl text-resume-secondary mt-2 font-serif">
          {data.personalInfo.title}
        </p>
        <div className="flex flex-wrap gap-4 mt-4 text-sm text-resume-secondary">
          <span>{data.personalInfo.email}</span>
          <span>•</span>
          <span>{data.personalInfo.phone}</span>
          <span>•</span>
          <span>{data.personalInfo.location}</span>
        </div>
      </header>

      {/* Summary */}
      <section className="mb-6">
        <p className="text-resume-secondary leading-relaxed font-serif">
          {data.personalInfo.summary}
        </p>
      </section>

      {/* Experience */}
      <section className="mb-6">
        <h2 className="text-2xl font-serif font-bold text-resume-primary mb-4">
          Professional Experience
        </h2>
        {data.experience.map((exp, index) => (
          <div key={index} className="mb-4 border-l-2 border-resume-muted pl-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold text-resume-primary">{exp.position}</h3>
                <p className="text-resume-secondary">{exp.company}</p>
              </div>
              <p className="text-sm text-resume-secondary italic">
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

      {/* Rest of the sections */}
      <div className="grid grid-cols-2 gap-6">
        {/* Education */}
        <section>
          <h2 className="text-2xl font-serif font-bold text-resume-primary mb-4">
            Education
          </h2>
          {data.education.map((edu, index) => (
            <div key={index} className="mb-4">
              <h3 className="font-bold text-resume-primary">{edu.school}</h3>
              <p className="text-resume-secondary">
                {edu.degree} in {edu.fieldOfStudy}
              </p>
              <p className="text-sm text-resume-secondary italic">
                {edu.startDate} - {edu.endDate}
              </p>
            </div>
          ))}
        </section>

        {/* Skills & Languages */}
        <div>
          <section className="mb-6">
            <h2 className="text-2xl font-serif font-bold text-resume-primary mb-4">
              Skills
            </h2>
            <div className="grid grid-cols-2 gap-2">
              {data.skills.map((skill, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center border-b border-resume-muted py-1"
                >
                  <span className="text-resume-secondary">{skill.name}</span>
                  <span className="text-sm text-resume-accent">{skill.level}</span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-resume-primary mb-4">
              Languages
            </h2>
            <div className="grid grid-cols-2 gap-2">
              {data.languages.map((lang, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center border-b border-resume-muted py-1"
                >
                  <span className="text-resume-secondary">{lang.language}</span>
                  <span className="text-sm text-resume-accent">
                    {lang.proficiency}
                  </span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalClassic;
