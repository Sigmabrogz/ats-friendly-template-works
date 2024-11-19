import { ResumeData } from "@/types/resume";

const CreativeTech = ({ data }: { data: ResumeData }) => {
  return (
    <div className="max-w-[21cm] mx-auto bg-white p-4 md:p-8 shadow-lg animate-template-fade relative overflow-hidden">
      {/* Decorative tech pattern background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-cyan-500 to-emerald-500 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
      </div>

      {/* Content with glassmorphism effect */}
      <div className="relative z-10">
        <header className="bg-white/80 backdrop-blur-lg border border-white/20 rounded-xl p-4 md:p-8 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                {data.personalInfo.firstName} {data.personalInfo.lastName}
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mt-2">{data.personalInfo.title}</p>
            </div>
            <div className="flex flex-col items-start md:items-end text-sm text-gray-600 w-full md:w-auto">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                {data.personalInfo.email}
              </span>
              <span>{data.personalInfo.phone}</span>
              <span>{data.personalInfo.location}</span>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          {/* Left column */}
          <div className="md:col-span-2 space-y-4 md:space-y-8">
            <section className="bg-white/80 backdrop-blur-lg rounded-xl p-4 md:p-6 border border-white/20">
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center text-white text-sm">Ex</span>
                Experience
              </h2>
              {data.experience.map((exp, index) => (
                <div key={index} className="mb-6 last:mb-0">
                  <div className="flex flex-col md:flex-row justify-between items-start gap-2">
                    <div>
                      <h3 className="font-bold text-gray-800">{exp.position}</h3>
                      <p className="text-purple-600">{exp.company}</p>
                    </div>
                    <span className="text-sm text-gray-500">{exp.startDate} - {exp.endDate}</span>
                  </div>
                  <p className="mt-2 text-gray-600">{exp.description}</p>
                  <ul className="mt-2 space-y-1">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-gray-600 text-sm flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-purple-600 rounded-full"></span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>
          </div>

          {/* Right column */}
          <div className="space-y-4 md:space-y-8">
            <section className="bg-white/80 backdrop-blur-lg rounded-xl p-4 md:p-6 border border-white/20">
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white text-sm">Ed</span>
                Education
              </h2>
              {data.education.map((edu, index) => (
                <div key={index} className="mb-4 last:mb-0">
                  <h3 className="font-bold text-gray-800">{edu.school}</h3>
                  <p className="text-gray-600">{edu.degree} in {edu.fieldOfStudy}</p>
                  <p className="text-sm text-gray-500">{edu.startDate} - {edu.endDate}</p>
                </div>
              ))}
            </section>

            <section className="bg-white/80 backdrop-blur-lg rounded-xl p-4 md:p-6 border border-white/20">
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center text-white text-sm">Sk</span>
                Skills
              </h2>
              <div className="grid grid-cols-2 gap-2">
                {data.skills.map((skill, index) => (
                  <div key={index} className="bg-white/50 px-3 py-1 rounded-full text-sm border border-white/20">
                    <span className="text-gray-800">{skill.name}</span>
                    <span className="text-purple-600 ml-1">{skill.level}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-white/80 backdrop-blur-lg rounded-xl p-4 md:p-6 border border-white/20">
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-cyan-600 rounded-lg flex items-center justify-center text-white text-sm">Lg</span>
                Languages
              </h2>
              <div className="grid grid-cols-2 gap-2">
                {data.languages.map((lang, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-gray-800">{lang.language}</span>
                    <span className="text-purple-600">{lang.proficiency}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreativeTech;