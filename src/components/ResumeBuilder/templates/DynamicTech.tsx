import { ResumeData } from "@/types/resume";

const DynamicTech = ({ data }: { data: ResumeData }) => {
  return (
    <div className="max-w-[21cm] mx-auto bg-[#0F172A] text-white p-8 shadow-2xl animate-template-fade relative overflow-hidden">
      {/* Dynamic background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-600 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-purple-600 via-pink-500 to-orange-500 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <header className="mb-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 border-b border-white/10 pb-8">
            <div>
              <h1 className="text-6xl font-black bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-4">
                {data.personalInfo.firstName} {data.personalInfo.lastName}
              </h1>
              <p className="text-2xl text-gray-400 font-light">
                {data.personalInfo.title}
              </p>
            </div>
            <div className="space-y-2 text-right">
              <p className="text-cyan-400">{data.personalInfo.email}</p>
              <p className="text-blue-400">{data.personalInfo.phone}</p>
              <p className="text-purple-400">{data.personalInfo.location}</p>
            </div>
          </div>
        </header>

        {/* Summary */}
        <section className="mb-12 bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
          <p className="text-gray-300 leading-relaxed">
            {data.personalInfo.summary}
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-8">
            <section className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="bg-gradient-to-r from-cyan-500 to-blue-500 w-10 h-10 rounded-xl flex items-center justify-center text-white">
                  Ex
                </span>
                Experience
              </h2>
              {data.experience.map((exp, index) => (
                <div key={index} className="mb-8 last:mb-0">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-xl font-bold text-cyan-400">
                        {exp.position}
                      </h3>
                      <p className="text-gray-400">{exp.company}</p>
                    </div>
                    <span className="text-sm text-gray-500">
                      {exp.startDate} - {exp.endDate}
                    </span>
                  </div>
                  <p className="text-gray-300 mb-4">{exp.description}</p>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li
                        key={i}
                        className="text-gray-400 flex items-center gap-2 text-sm"
                      >
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <section className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="bg-gradient-to-r from-blue-500 to-purple-500 w-10 h-10 rounded-xl flex items-center justify-center">
                  Ed
                </span>
                Education
              </h2>
              {data.education.map((edu, index) => (
                <div key={index} className="mb-4 last:mb-0">
                  <h3 className="font-bold text-blue-400">{edu.school}</h3>
                  <p className="text-gray-300">
                    {edu.degree} in {edu.fieldOfStudy}
                  </p>
                  <p className="text-sm text-gray-500">
                    {edu.startDate} - {edu.endDate}
                  </p>
                </div>
              ))}
            </section>

            <section className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 w-10 h-10 rounded-xl flex items-center justify-center">
                  Sk
                </span>
                Skills
              </h2>
              <div className="flex flex-wrap gap-2">
                {data.skills.map((skill, index) => (
                  <div
                    key={index}
                    className="bg-white/10 px-3 py-1.5 rounded-lg text-sm border border-white/5"
                  >
                    <span className="text-purple-400">{skill.name}</span>
                    <span className="text-gray-500 ml-2">{skill.level}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="bg-gradient-to-r from-pink-500 to-orange-500 w-10 h-10 rounded-xl flex items-center justify-center">
                  Lg
                </span>
                Languages
              </h2>
              {data.languages.map((lang, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center mb-2 last:mb-0"
                >
                  <span className="text-pink-400">{lang.language}</span>
                  <span className="text-gray-500">{lang.proficiency}</span>
                </div>
              ))}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicTech;