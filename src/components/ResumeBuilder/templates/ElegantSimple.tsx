import { ResumeData } from "@/types/resume";

const ElegantSimple = ({ data }: { data: ResumeData }) => {
  return (
    <div className="max-w-[21cm] mx-auto bg-white p-12 shadow-lg animate-template-fade">
      {/* Header with elegant minimalist design */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-light text-resume-primary tracking-wide mb-4">
          {data.personalInfo.firstName} {data.personalInfo.lastName}
        </h1>
        <p className="text-xl text-resume-secondary mb-4 italic">
          {data.personalInfo.title}
        </p>
        <div className="flex justify-center gap-6 text-sm text-resume-secondary">
          <span>{data.personalInfo.email}</span>
          <span>|</span>
          <span>{data.personalInfo.phone}</span>
          <span>|</span>
          <span>{data.personalInfo.location}</span>
        </div>
      </header>

      {/* Summary */}
      <section className="mb-12 max-w-2xl mx-auto text-center">
        <p className="text-resume-secondary leading-relaxed italic">
          {data.personalInfo.summary}
        </p>
      </section>

      {/* Experience */}
      <section className="mb-12">
        <h2 className="text-2xl font-light text-resume-primary text-center mb-8 tracking-wide">
          Professional Experience
        </h2>
        {data.experience.map((exp, index) => (
          <div
            key={index}
            className="mb-8 pb-8 border-b border-resume-muted last:border-0"
          >
            <div className="text-center mb-4">
              <h3 className="font-medium text-resume-primary text-xl mb-1">
                {exp.position}
              </h3>
              <p className="text-resume-accent">{exp.company}</p>
              <p className="text-sm text-resume-secondary">
                {exp.startDate} - {exp.endDate}
              </p>
            </div>
            <p className="text-resume-secondary text-center mb-4">
              {exp.description}
            </p>
            <ul className="max-w-2xl mx-auto">
              {exp.achievements.map((achievement, i) => (
                <li
                  key={i}
                  className="text-resume-secondary text-sm text-center mb-2"
                >
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <div className="grid grid-cols-2 gap-12">
        {/* Education */}
        <section>
          <h2 className="text-2xl font-light text-resume-primary text-center mb-8 tracking-wide">
            Education
          </h2>
          {data.education.map((edu, index) => (
            <div key={index} className="mb-6 text-center">
              <h3 className="font-medium text-resume-primary mb-1">
                {edu.school}
              </h3>
              <p className="text-resume-secondary">
                {edu.degree} in {edu.fieldOfStudy}
              </p>
              <p className="text-sm text-resume-accent">
                {edu.startDate} - {edu.endDate}
              </p>
            </div>
          ))}
        </section>

        {/* Skills and Languages */}
        <div>
          <section className="mb-8">
            <h2 className="text-2xl font-light text-resume-primary text-center mb-8 tracking-wide">
              Skills
            </h2>
            <div className="space-y-3">
              {data.skills.map((skill, index) => (
                <div key={index} className="text-center">
                  <span className="text-resume-secondary">{skill.name}</span>
                  <span className="mx-2 text-resume-accent">•</span>
                  <span className="text-sm text-resume-accent">{skill.level}</span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-light text-resume-primary text-center mb-8 tracking-wide">
              Languages
            </h2>
            <div className="space-y-3">
              {data.languages.map((lang, index) => (
                <div key={index} className="text-center">
                  <span className="text-resume-secondary">{lang.language}</span>
                  <span className="mx-2 text-resume-accent">•</span>
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

export default ElegantSimple;