import { ResumeData } from "@/types/resume";

const ProfessionalClassic = ({ data }: { data: ResumeData }) => {
  return (
    <div className="max-w-[21cm] mx-auto bg-[#FCFAF8] p-8 shadow-lg animate-template-fade">
      {/* Header with classic serif design */}
      <header className="border-b-2 border-gray-800 pb-6 mb-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end">
          <div>
            <h1 className="text-4xl font-serif font-bold text-gray-800 leading-tight">
              {data.personalInfo.firstName}
              <br />
              {data.personalInfo.lastName}
            </h1>
            <p className="text-xl text-gray-600 mt-2 font-serif italic">
              {data.personalInfo.title}
            </p>
          </div>
          <div className="mt-4 md:mt-0 text-right font-serif">
            <p className="text-gray-600">{data.personalInfo.email}</p>
            <p className="text-gray-600">{data.personalInfo.phone}</p>
            <p className="text-gray-600">{data.personalInfo.location}</p>
          </div>
        </div>
      </header>

      {/* Summary with classic typography */}
      <section className="mb-8">
        <p className="text-gray-700 leading-relaxed font-serif">
          {data.personalInfo.summary}
        </p>
      </section>

      {/* Experience */}
      <section className="mb-8">
        <h2 className="text-2xl font-serif font-bold text-gray-800 mb-6 border-b border-gray-300 pb-2">
          Professional Experience
        </h2>
        {data.experience.map((exp, index) => (
          <div key={index} className="mb-6 last:mb-0">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-serif font-bold text-gray-800 text-lg">
                  {exp.position}
                </h3>
                <p className="text-gray-600 italic">{exp.company}</p>
              </div>
              <p className="text-gray-600 font-serif">
                {exp.startDate} - {exp.endDate}
              </p>
            </div>
            <p className="mt-2 text-gray-700">{exp.description}</p>
            <ul className="mt-2 list-disc list-inside">
              {exp.achievements.map((achievement, i) => (
                <li key={i} className="text-gray-700 font-serif text-sm">
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <div className="grid grid-cols-2 gap-8">
        {/* Education */}
        <section>
          <h2 className="text-2xl font-serif font-bold text-gray-800 mb-6 border-b border-gray-300 pb-2">
            Education
          </h2>
          {data.education.map((edu, index) => (
            <div key={index} className="mb-4">
              <h3 className="font-serif font-bold text-gray-800">
                {edu.school}
              </h3>
              <p className="text-gray-700">
                {edu.degree} in {edu.fieldOfStudy}
              </p>
              <p className="text-gray-600 italic">
                {edu.startDate} - {edu.endDate}
              </p>
            </div>
          ))}
        </section>

        {/* Skills & Languages */}
        <div>
          <section className="mb-8">
            <h2 className="text-2xl font-serif font-bold text-gray-800 mb-6 border-b border-gray-300 pb-2">
              Skills
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {data.skills.map((skill, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center border-b border-gray-200 pb-2"
                >
                  <span className="font-serif text-gray-700">{skill.name}</span>
                  <span className="text-gray-600 italic">{skill.level}</span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-gray-800 mb-6 border-b border-gray-300 pb-2">
              Languages
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {data.languages.map((lang, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center border-b border-gray-200 pb-2"
                >
                  <span className="font-serif text-gray-700">
                    {lang.language}
                  </span>
                  <span className="text-gray-600 italic">
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