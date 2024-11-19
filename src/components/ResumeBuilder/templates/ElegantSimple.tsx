import { ResumeData } from "@/types/resume";

const ElegantSimple = ({ data }: { data: ResumeData }) => {
  return (
    <div className="max-w-[21cm] mx-auto bg-white p-12 shadow-lg animate-template-fade">
      {/* Header with elegant minimalist design */}
      <header className="text-center mb-16 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-rose-200 via-rose-300 to-rose-200"></div>
        <h1 className="text-5xl font-light tracking-[0.2em] text-gray-800 mt-8 mb-4">
          {data.personalInfo.firstName}
          <span className="font-extralight"> {data.personalInfo.lastName}</span>
        </h1>
        <p className="text-xl text-gray-600 mb-6 font-light tracking-widest">
          {data.personalInfo.title}
        </p>
        <div className="flex justify-center gap-8 text-sm text-gray-600 font-light tracking-wider">
          <span>{data.personalInfo.email}</span>
          <span className="text-rose-300">•</span>
          <span>{data.personalInfo.phone}</span>
          <span className="text-rose-300">•</span>
          <span>{data.personalInfo.location}</span>
        </div>
      </header>

      {/* Summary with elegant typography */}
      <section className="mb-16 max-w-2xl mx-auto text-center">
        <p className="text-gray-600 leading-relaxed font-light tracking-wide">
          {data.personalInfo.summary}
        </p>
      </section>

      {/* Experience */}
      <section className="mb-16">
        <h2 className="text-2xl font-light text-gray-800 text-center mb-8 tracking-[0.2em]">
          EXPERIENCE
        </h2>
        {data.experience.map((exp, index) => (
          <div
            key={index}
            className="mb-12 last:mb-0 max-w-3xl mx-auto text-center"
          >
            <div className="mb-4">
              <h3 className="font-medium text-gray-800 text-xl mb-1">
                {exp.position}
              </h3>
              <p className="text-rose-400">{exp.company}</p>
              <p className="text-sm text-gray-600 tracking-wider">
                {exp.startDate} - {exp.endDate}
              </p>
            </div>
            <p className="text-gray-600 mb-4 font-light">
              {exp.description}
            </p>
            <ul className="space-y-2">
              {exp.achievements.map((achievement, i) => (
                <li
                  key={i}
                  className="text-gray-600 text-sm font-light tracking-wide"
                >
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Two-column layout for Education and Skills */}
      <div className="grid grid-cols-2 gap-16">
        {/* Education */}
        <section>
          <h2 className="text-2xl font-light text-gray-800 text-center mb-8 tracking-[0.2em]">
            EDUCATION
          </h2>
          {data.education.map((edu, index) => (
            <div key={index} className="mb-6 text-center">
              <h3 className="font-medium text-gray-800 mb-1">
                {edu.school}
              </h3>
              <p className="text-gray-600 font-light">
                {edu.degree} in {edu.fieldOfStudy}
              </p>
              <p className="text-sm text-rose-400 tracking-wider">
                {edu.startDate} - {edu.endDate}
              </p>
            </div>
          ))}
        </section>

        {/* Skills and Languages */}
        <div className="space-y-16">
          <section>
            <h2 className="text-2xl font-light text-gray-800 text-center mb-8 tracking-[0.2em]">
              SKILLS
            </h2>
            <div className="space-y-3">
              {data.skills.map((skill, index) => (
                <div key={index} className="text-center">
                  <span className="text-gray-600 font-light">{skill.name}</span>
                  <span className="mx-2 text-rose-300">•</span>
                  <span className="text-sm text-rose-400">{skill.level}</span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-light text-gray-800 text-center mb-8 tracking-[0.2em]">
              LANGUAGES
            </h2>
            <div className="space-y-3">
              {data.languages.map((lang, index) => (
                <div key={index} className="text-center">
                  <span className="text-gray-600 font-light">{lang.language}</span>
                  <span className="mx-2 text-rose-300">•</span>
                  <span className="text-sm text-rose-400">
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