import { ResumeData } from "@/types/resume";

const BoldImpact = ({ data }: { data: ResumeData }) => {
  return (
    <div className="max-w-[21cm] mx-auto bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8 shadow-lg animate-template-fade">
      {/* Header with bold asymmetric design */}
      <header className="relative mb-12">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-yellow-400 to-orange-600 rounded-bl-[80px]"></div>
        <div className="relative z-10">
          <h1 className="text-7xl font-black tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
            {data.personalInfo.firstName}
            <br />
            {data.personalInfo.lastName}
          </h1>
          <p className="text-2xl font-light text-gray-400 mb-6">{data.personalInfo.title}</p>
          <div className="flex flex-wrap gap-6 text-sm">
            <div className="bg-gray-700/50 px-4 py-2 rounded-lg">
              {data.personalInfo.email}
            </div>
            <div className="bg-gray-700/50 px-4 py-2 rounded-lg">
              {data.personalInfo.phone}
            </div>
            <div className="bg-gray-700/50 px-4 py-2 rounded-lg">
              {data.personalInfo.location}
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Main content */}
        <div className="md:col-span-8 space-y-8">
          <section>
            <h2 className="text-3xl font-bold mb-6 flex items-center">
              <span className="w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center text-gray-900 mr-4">
                Ex
              </span>
              Experience
            </h2>
            {data.experience.map((exp, index) => (
              <div key={index} className="mb-8 last:mb-0 relative">
                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-yellow-500 to-orange-600"></div>
                <div className="pl-6">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-xl font-bold">{exp.position}</h3>
                      <p className="text-yellow-500">{exp.company}</p>
                    </div>
                    <span className="text-sm text-gray-400">{exp.startDate} - {exp.endDate}</span>
                  </div>
                  <p className="text-gray-400 mb-4">{exp.description}</p>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-gray-400 flex items-center gap-2">
                        <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </section>
        </div>

        {/* Sidebar */}
        <div className="md:col-span-4 space-y-8">
          <section className="bg-gray-800 p-6 rounded-xl border border-gray-700">
            <h2 className="text-2xl font-bold mb-4">Education</h2>
            {data.education.map((edu, index) => (
              <div key={index} className="mb-4 last:mb-0">
                <h3 className="font-bold">{edu.school}</h3>
                <p className="text-gray-400">{edu.degree} in {edu.fieldOfStudy}</p>
                <p className="text-sm text-yellow-500">{edu.startDate} - {edu.endDate}</p>
              </div>
            ))}
          </section>

          {/* Skills and Languages in horizontal layout */}
          <div className="grid grid-cols-2 gap-4">
            <section className="bg-gray-800 p-6 rounded-xl border border-gray-700">
              <h2 className="text-2xl font-bold mb-4">Skills</h2>
              <div className="space-y-3">
                {data.skills.map((skill, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-gray-400">{skill.name}</span>
                    <span className="text-yellow-500">{skill.level}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-gray-800 p-6 rounded-xl border border-gray-700">
              <h2 className="text-2xl font-bold mb-4">Languages</h2>
              <div className="space-y-3">
                {data.languages.map((lang, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-gray-400">{lang.language}</span>
                    <span className="text-yellow-500">{lang.proficiency}</span>
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

export default BoldImpact;
