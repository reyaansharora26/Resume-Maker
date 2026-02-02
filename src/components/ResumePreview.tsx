import { Mail, Phone, MapPin, Link } from 'lucide-react';
import type { ResumeData } from '../types/resume';

interface ResumePreviewProps {
  data: ResumeData;
}

export default function ResumePreview({ data }: ResumePreviewProps) {
  return (
    <div id="resume-preview" className="bg-white p-12 shadow-lg min-h-[297mm]">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">
          {data.personalInfo.fullName || 'Your Name'}
        </h1>
        <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
          {data.personalInfo.email && (
            <div className="flex items-center gap-2">
              <Mail size={16} />
              <span>{data.personalInfo.email}</span>
            </div>
          )}
          {data.personalInfo.phone && (
            <div className="flex items-center gap-2">
              <Phone size={16} />
              <span>{data.personalInfo.phone}</span>
            </div>
          )}
          {data.personalInfo.location && (
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>{data.personalInfo.location}</span>
            </div>
          )}
          {data.personalInfo.portfolio && (
            <div className="flex items-center gap-2">
              <Link size={16} />
              <a
                href={data.personalInfo.portfolio}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Portfolio
              </a>
            </div>
          )}
        </div>
        {data.personalInfo.summary && (
          <p className="text-gray-700 leading-relaxed">{data.personalInfo.summary}</p>
        )}
      </div>

      {data.workExperience.length > 0 && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-gray-300">
            Work Experience
          </h2>
          <div className="space-y-6">
            {data.workExperience.map((exp) => (
              <div key={exp.id}>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{exp.position}</h3>
                    <p className="text-gray-700 font-medium">{exp.company}</p>
                  </div>
                  <div className="text-sm text-gray-600 text-right">
                    {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                  </div>
                </div>
                {exp.description && (
                  <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {exp.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {data.education.length > 0 && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-gray-300">
            Education
          </h2>
          <div className="space-y-4">
            {data.education.map((edu) => (
              <div key={edu.id}>
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{edu.degree}</h3>
                    <p className="text-gray-700 font-medium">{edu.institution}</p>
                    {edu.field && <p className="text-gray-600">{edu.field}</p>}
                  </div>
                  <div className="text-sm text-gray-600 text-right">
                    {edu.startDate} - {edu.current ? 'Present' : edu.endDate}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {data.skills.length > 0 && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-gray-300">
            Skills
          </h2>
          <div className="flex flex-wrap gap-3">
            {data.skills.map((skill) => (
              skill.name && (
                <span
                  key={skill.id}
                  className="px-4 py-2 bg-gray-100 text-gray-800 rounded-lg font-medium"
                >
                  {skill.name}
                </span>
              )
            ))}
          </div>
        </div>
      )}

      {data.certifications.length > 0 && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-gray-300">
            Certifications
          </h2>
          <div className="space-y-4">
            {data.certifications.map((cert) => (
              <div key={cert.id}>
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{cert.name}</h3>
                    {cert.issuer && <p className="text-gray-700 font-medium">{cert.issuer}</p>}
                  </div>
                  {cert.date && <div className="text-sm text-gray-600">{cert.date}</div>}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {data.projects.length > 0 && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-gray-300">
            Projects
          </h2>
          <div className="space-y-6">
            {data.projects.map((project) => (
              <div key={project.id}>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{project.title}</h3>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline text-sm"
                      >
                        {project.link}
                      </a>
                    )}
                  </div>
                </div>
                {project.description && (
                  <p className="text-gray-700 leading-relaxed mb-2">{project.description}</p>
                )}
                {project.technologies && (
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Technologies:</span> {project.technologies}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {data.customSections.map((section) => (
        section.items.length > 0 && (
          <div key={section.id} className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-gray-300">
              {section.title}
            </h2>
            <ul className="space-y-2">
              {section.items.map((item, idx) => (
                item && (
                  <li key={idx} className="text-gray-700 flex items-start gap-3">
                    <span className="text-gray-900 font-bold mt-1">•</span>
                    <span>{item}</span>
                  </li>
                )
              ))}
            </ul>
          </div>
        )
      ))}

      {data.personalInfo.hobbies && (
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-gray-300">
            Hobbies & Interests
          </h2>
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">
            {data.personalInfo.hobbies}
          </p>
        </div>
      )}
    </div>
  );
}
