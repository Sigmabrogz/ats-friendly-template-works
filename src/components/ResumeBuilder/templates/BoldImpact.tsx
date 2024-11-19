import { ResumeData } from "@/types/resume";

const BoldImpact = ({ data }: { data: ResumeData }) => {
  return (
    <div className="max-w-[21cm] mx-auto bg-white shadow-lg animate-template-fade">
      {/* Header with bold design */}
      <header className="bg-resume-primary text-white p-8">
        <h1 className="text-5xl font-black tracking-tight mb-4">
          {data.personalInfo.firstName}
          <br />
          {data.personalInfo.lastName}
        </h1>
        <p className="text-2xl font-light mb-6">{data.personalInfo.title}</p>
        <div className="grid grid-cols-3 gap-4 text-sm">
          <div className="border-l-2 border-resume-accent pl-3">
            <p className="text-resume-muted">EMAIL</p>
            <p>{data.personalInfo.email}</p>
          </div>
          <div className="border-l-2 border-resume-accent pl-3">
            <p className="text-resume-muted">PHONE</p>
            <p>{data.personalInfo.phone}</p>
          </div>
          <div className="border-l-2 border-resume-accent pl-3">
            <p className="text-resume-muted">LOCATION</p>
            <p>{data.personalInfo.location}</p>
          </div>
        </div>
      </header>

      <div className="p-8">
        {/* Summary */}
        <section className="mb-8 border-l-4 border-resume-accent pl-6">
          <p className="text-resume-secondary leading-relaxed">
            {data.personalInfo.summary}
          </p>
        </section>

        {/* Experience */}
        <section className="mb-8">
          <h2 className="text-3xl font-black text-resume-primary mb-6 uppercase">
            Experience
          </h2>
          {data.experience.map((exp, index) => (
            <div key={index} className="mb-6">
              <div className="flex justify-between items-start border-b-2 border-resume-muted pb-2 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-resume-primary">
                    {exp.position}
                  </h3>
                  <p className="text-resume-accent font-medium">{exp.company}</p>
                </div>
                <p className="text-resume-secondary font-bold">
                  {exp.startDate} - {exp.endDate}
                </p>
              </div>
              <p className="text-resume-secondary mb-3">{exp.description}</p>
              <ul className="space-y-2">
                {exp.achievements.map((achievement, i) => (
                  <li
                    key={i}
                    className="text-resume-secondary flex items-center gap-2"
                  >
                    <span className="w-2 h-2 bg-resume-accent"></span>
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
            <h2 className="text-3xl font-black text-resume-primary mb-6 uppercase">
              Education
            </h2>
            {data.education.map((edu, index) => (
              <div
                key={index}
                className="mb-4 border-l-2 border-resume-accent pl-4"
              >
                <h3 className="font-bold text-resume-primary text-lg">
                  {edu.school}
                </h3>
                <p className="text-resume-secondary">
                  {edu.degree} in {edu.fieldOfStudy}
                </p>
                <p className="text-resume-accent">
                  {edu.startDate} - {edu.endDate}
                </p>
              </div>
            ))}
          </section>

          {/* Skills and Languages */}
          <div>
            <section className="mb-8">
              <h2 className="text-3xl font-black text-resume-primary mb-6 uppercase">
                Skills
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {data.skills.map((skill, index) => (
                  <div
                    key={index}
                    className="border-b-2 border-resume-muted pb-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-resume-primary">
                        {skill.name}
                      </span>
                      <span className="text-resume-accent">{skill.level}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-black text-resume-primary mb-6 uppercase">
                Languages
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {data.languages.map((lang, index) => (
                  <div
                    key={index}
                    className="border-b-2 border-resume-muted pb-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-resume-primary">
                        {lang.language}
                      </span>
                      <span className="text-resume-accent">
                        {lang.proficiency}
                      </span>
                    </div>
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