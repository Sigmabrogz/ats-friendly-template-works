import { ResumeData } from "@/types/resume";

const CreativeTech = ({ data }: { data: ResumeData }) => {
  return (
    <div className="max-w-[21cm] mx-auto bg-gradient-to-br from-white to-resume-muted p-8 shadow-lg rounded-lg animate-template-fade">
      {/* Header with modern tech-inspired design */}
      <header className="relative mb-8 bg-resume-primary p-6 rounded-lg text-white">
        <div className="relative z-10">
          <h1 className="text-4xl font-bold tracking-tight">
            {data.personalInfo.firstName} {data.personalInfo.lastName}
          </h1>
          <p className="text-xl mt-2 text-resume-muted">{data.personalInfo.title}</p>
          <div className="flex flex-wrap gap-4 mt-4 text-sm">
            <span>{data.personalInfo.email}</span>
            <span>{data.personalInfo.phone}</span>
            <span>{data.personalInfo.location}</span>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-32 h-32 bg-resume-accent opacity-10 rounded-full transform translate-x-16 -translate-y-16"></div>
      </header>

      {/* Summary with tech accent */}
      <section className="mb-8 bg-white p-6 rounded-lg shadow-sm border border-resume-muted">
        <p className="text-resume-secondary leading-relaxed">
          {data.personalInfo.summary}
        </p>
      </section>

      {/* Experience with modern cards */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-resume-primary mb-6 flex items-center">
          <span className="w-8 h-1 bg-resume-accent mr-3"></span>
          Experience
        </h2>
        <div className="space-y-6">
          {data.experience.map((exp, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-resume-accent hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-resume-primary text-lg">
                    {exp.position}
                  </h3>
                  <p className="text-resume-secondary">{exp.company}</p>
                </div>
                <p className="text-sm text-resume-accent font-mono">
                  {exp.startDate} - {exp.endDate}
                </p>
              </div>
              <p className="mt-3 text-resume-secondary">{exp.description}</p>
              <ul className="mt-3 space-y-1">
                {exp.achievements.map((achievement, i) => (
                  <li
                    key={i}
                    className="text-resume-secondary text-sm flex items-center"
                  >
                    <span className="w-1.5 h-1.5 bg-resume-accent rounded-full mr-2"></span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Two-column layout for Education and Skills */}
      <div className="grid grid-cols-2 gap-8">
        {/* Education */}
        <section>
          <h2 className="text-2xl font-bold text-resume-primary mb-6 flex items-center">
            <span className="w-8 h-1 bg-resume-accent mr-3"></span>
            Education
          </h2>
          {data.education.map((edu, index) => (
            <div
              key={index}
              className="mb-4 bg-white p-4 rounded-lg shadow-sm border border-resume-muted"
            >
              <h3 className="font-bold text-resume-primary">{edu.school}</h3>
              <p className="text-resume-secondary">
                {edu.degree} in {edu.fieldOfStudy}
              </p>
              <p className="text-sm text-resume-accent font-mono">
                {edu.startDate} - {edu.endDate}
              </p>
            </div>
          ))}
        </section>

        {/* Skills and Languages */}
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-resume-primary mb-6 flex items-center">
              <span className="w-8 h-1 bg-resume-accent mr-3"></span>
              Skills
            </h2>
            <div className="grid grid-cols-2 gap-3">
              {data.skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-white p-3 rounded-lg shadow-sm border border-resume-muted flex justify-between items-center"
                >
                  <span className="text-resume-secondary">{skill.name}</span>
                  <span className="text-sm text-resume-accent font-mono px-2 py-1 bg-resume-muted rounded">
                    {skill.level}
                  </span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-resume-primary mb-6 flex items-center">
              <span className="w-8 h-1 bg-resume-accent mr-3"></span>
              Languages
            </h2>
            <div className="grid grid-cols-2 gap-3">
              {data.languages.map((lang, index) => (
                <div
                  key={index}
                  className="bg-white p-3 rounded-lg shadow-sm border border-resume-muted flex justify-between items-center"
                >
                  <span className="text-resume-secondary">{lang.language}</span>
                  <span className="text-sm text-resume-accent font-mono">
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

export default CreativeTech;