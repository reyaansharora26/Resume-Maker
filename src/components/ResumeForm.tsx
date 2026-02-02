import { Plus, Trash2 } from 'lucide-react';
import type { ResumeData, WorkExperience, Education, Skill, Certification, Project, CustomSection } from '../types/resume';

interface ResumeFormProps {
  data: ResumeData;
  onChange: (data: ResumeData) => void;
}

export default function ResumeForm({ data, onChange }: ResumeFormProps) {
  const updatePersonalInfo = (field: string, value: string) => {
    onChange({
      ...data,
      personalInfo: { ...data.personalInfo, [field]: value },
    });
  };

  const addWorkExperience = () => {
    const newExp: WorkExperience = {
      id: Date.now().toString(),
      company: '',
      position: '',
      startDate: '',
      endDate: '',
      current: false,
      description: '',
    };
    onChange({ ...data, workExperience: [...data.workExperience, newExp] });
  };

  const updateWorkExperience = (id: string, field: string, value: string | boolean) => {
    onChange({
      ...data,
      workExperience: data.workExperience.map((exp) =>
        exp.id === id ? { ...exp, [field]: value } : exp
      ),
    });
  };

  const removeWorkExperience = (id: string) => {
    onChange({
      ...data,
      workExperience: data.workExperience.filter((exp) => exp.id !== id),
    });
  };

  const addEducation = () => {
    const newEdu: Education = {
      id: Date.now().toString(),
      institution: '',
      degree: '',
      field: '',
      startDate: '',
      endDate: '',
      current: false,
    };
    onChange({ ...data, education: [...data.education, newEdu] });
  };

  const updateEducation = (id: string, field: string, value: string | boolean) => {
    onChange({
      ...data,
      education: data.education.map((edu) =>
        edu.id === id ? { ...edu, [field]: value } : edu
      ),
    });
  };

  const removeEducation = (id: string) => {
    onChange({
      ...data,
      education: data.education.filter((edu) => edu.id !== id),
    });
  };

  const addSkill = () => {
    const newSkill: Skill = {
      id: Date.now().toString(),
      name: '',
    };
    onChange({ ...data, skills: [...data.skills, newSkill] });
  };

  const updateSkill = (id: string, value: string) => {
    onChange({
      ...data,
      skills: data.skills.map((skill) =>
        skill.id === id ? { ...skill, name: value } : skill
      ),
    });
  };

  const removeSkill = (id: string) => {
    onChange({
      ...data,
      skills: data.skills.filter((skill) => skill.id !== id),
    });
  };

  const addCertification = () => {
    const newCert: Certification = {
      id: Date.now().toString(),
      name: '',
      issuer: '',
      date: '',
    };
    onChange({ ...data, certifications: [...data.certifications, newCert] });
  };

  const updateCertification = (id: string, field: string, value: string) => {
    onChange({
      ...data,
      certifications: data.certifications.map((cert) =>
        cert.id === id ? { ...cert, [field]: value } : cert
      ),
    });
  };

  const removeCertification = (id: string) => {
    onChange({
      ...data,
      certifications: data.certifications.filter((cert) => cert.id !== id),
    });
  };

  const addProject = () => {
    const newProject: Project = {
      id: Date.now().toString(),
      title: '',
      description: '',
      link: '',
      technologies: '',
    };
    onChange({ ...data, projects: [...data.projects, newProject] });
  };

  const updateProject = (id: string, field: string, value: string) => {
    onChange({
      ...data,
      projects: data.projects.map((proj) =>
        proj.id === id ? { ...proj, [field]: value } : proj
      ),
    });
  };

  const removeProject = (id: string) => {
    onChange({
      ...data,
      projects: data.projects.filter((proj) => proj.id !== id),
    });
  };

  const addCustomSection = () => {
    const newSection: CustomSection = {
      id: Date.now().toString(),
      title: '',
      items: [],
    };
    onChange({ ...data, customSections: [...data.customSections, newSection] });
  };

  const updateCustomSection = (id: string, field: string, value: string | string[]) => {
    onChange({
      ...data,
      customSections: data.customSections.map((section) =>
        section.id === id ? { ...section, [field]: value } : section
      ),
    });
  };

  const addCustomSectionItem = (sectionId: string) => {
    onChange({
      ...data,
      customSections: data.customSections.map((section) =>
        section.id === sectionId ? { ...section, items: [...section.items, ''] } : section
      ),
    });
  };

  const updateCustomSectionItem = (sectionId: string, itemIndex: number, value: string) => {
    onChange({
      ...data,
      customSections: data.customSections.map((section) =>
        section.id === sectionId
          ? {
              ...section,
              items: section.items.map((item, idx) => (idx === itemIndex ? value : item)),
            }
          : section
      ),
    });
  };

  const removeCustomSectionItem = (sectionId: string, itemIndex: number) => {
    onChange({
      ...data,
      customSections: data.customSections.map((section) =>
        section.id === sectionId
          ? { ...section, items: section.items.filter((_, idx) => idx !== itemIndex) }
          : section
      ),
    });
  };

  const removeCustomSection = (id: string) => {
    onChange({
      ...data,
      customSections: data.customSections.filter((section) => section.id !== id),
    });
  };

  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-xl font-bold mb-4 text-gray-800">Personal Information</h2>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            value={data.personalInfo.fullName}
            onChange={(e) => updatePersonalInfo('fullName', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <input
            type="email"
            placeholder="Email"
            value={data.personalInfo.email}
            onChange={(e) => updatePersonalInfo('email', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <input
            type="tel"
            placeholder="Phone"
            value={data.personalInfo.phone}
            onChange={(e) => updatePersonalInfo('phone', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <input
            type="text"
            placeholder="Location"
            value={data.personalInfo.location}
            onChange={(e) => updatePersonalInfo('location', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <input
            type="url"
            placeholder="Portfolio/Website URL"
            value={data.personalInfo.portfolio}
            onChange={(e) => updatePersonalInfo('portfolio', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <textarea
            placeholder="Professional Summary"
            value={data.personalInfo.summary}
            onChange={(e) => updatePersonalInfo('summary', e.target.value)}
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
          />
          <textarea
            placeholder="Hobbies & Interests"
            value={data.personalInfo.hobbies}
            onChange={(e) => updatePersonalInfo('hobbies', e.target.value)}
            rows={3}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
          />
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-800">Work Experience</h2>
          <button
            onClick={addWorkExperience}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Plus size={20} />
            Add
          </button>
        </div>
        <div className="space-y-6">
          {data.workExperience.map((exp) => (
            <div key={exp.id} className="p-4 border border-gray-200 rounded-lg relative">
              <button
                onClick={() => removeWorkExperience(exp.id)}
                className="absolute top-4 right-4 text-red-600 hover:text-red-700"
              >
                <Trash2 size={20} />
              </button>
              <div className="space-y-3 pr-8">
                <input
                  type="text"
                  placeholder="Company"
                  value={exp.company}
                  onChange={(e) => updateWorkExperience(exp.id, 'company', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <input
                  type="text"
                  placeholder="Position"
                  value={exp.position}
                  onChange={(e) => updateWorkExperience(exp.id, 'position', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="Start Date (e.g., Jan 2020)"
                    value={exp.startDate}
                    onChange={(e) => updateWorkExperience(exp.id, 'startDate', e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <input
                    type="text"
                    placeholder="End Date"
                    value={exp.endDate}
                    onChange={(e) => updateWorkExperience(exp.id, 'endDate', e.target.value)}
                    disabled={exp.current}
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
                  />
                </div>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={exp.current}
                    onChange={(e) => updateWorkExperience(exp.id, 'current', e.target.checked)}
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-700">Currently working here</span>
                </label>
                <textarea
                  placeholder="Job description and achievements"
                  value={exp.description}
                  onChange={(e) => updateWorkExperience(exp.id, 'description', e.target.value)}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-800">Education</h2>
          <button
            onClick={addEducation}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Plus size={20} />
            Add
          </button>
        </div>
        <div className="space-y-6">
          {data.education.map((edu) => (
            <div key={edu.id} className="p-4 border border-gray-200 rounded-lg relative">
              <button
                onClick={() => removeEducation(edu.id)}
                className="absolute top-4 right-4 text-red-600 hover:text-red-700"
              >
                <Trash2 size={20} />
              </button>
              <div className="space-y-3 pr-8">
                <input
                  type="text"
                  placeholder="Institution"
                  value={edu.institution}
                  onChange={(e) => updateEducation(edu.id, 'institution', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <input
                  type="text"
                  placeholder="Degree (e.g., Bachelor of Science)"
                  value={edu.degree}
                  onChange={(e) => updateEducation(edu.id, 'degree', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <input
                  type="text"
                  placeholder="Field of Study"
                  value={edu.field}
                  onChange={(e) => updateEducation(edu.id, 'field', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="Start Date"
                    value={edu.startDate}
                    onChange={(e) => updateEducation(edu.id, 'startDate', e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <input
                    type="text"
                    placeholder="End Date"
                    value={edu.endDate}
                    onChange={(e) => updateEducation(edu.id, 'endDate', e.target.value)}
                    disabled={edu.current}
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
                  />
                </div>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={edu.current}
                    onChange={(e) => updateEducation(edu.id, 'current', e.target.checked)}
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-700">Currently studying</span>
                </label>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-800">Skills</h2>
          <button
            onClick={addSkill}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Plus size={20} />
            Add
          </button>
        </div>
        <div className="space-y-3">
          {data.skills.map((skill) => (
            <div key={skill.id} className="flex items-center gap-3">
              <input
                type="text"
                placeholder="Skill name"
                value={skill.name}
                onChange={(e) => updateSkill(skill.id, e.target.value)}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button
                onClick={() => removeSkill(skill.id)}
                className="text-red-600 hover:text-red-700"
              >
                <Trash2 size={20} />
              </button>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-800">Certifications</h2>
          <button
            onClick={addCertification}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Plus size={20} />
            Add
          </button>
        </div>
        <div className="space-y-6">
          {data.certifications.map((cert) => (
            <div key={cert.id} className="p-4 border border-gray-200 rounded-lg relative">
              <button
                onClick={() => removeCertification(cert.id)}
                className="absolute top-4 right-4 text-red-600 hover:text-red-700"
              >
                <Trash2 size={20} />
              </button>
              <div className="space-y-3 pr-8">
                <input
                  type="text"
                  placeholder="Certification Name"
                  value={cert.name}
                  onChange={(e) => updateCertification(cert.id, 'name', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <input
                  type="text"
                  placeholder="Issuer"
                  value={cert.issuer}
                  onChange={(e) => updateCertification(cert.id, 'issuer', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <input
                  type="text"
                  placeholder="Date (e.g., Jan 2023)"
                  value={cert.date}
                  onChange={(e) => updateCertification(cert.id, 'date', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-800">Projects</h2>
          <button
            onClick={addProject}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Plus size={20} />
            Add
          </button>
        </div>
        <div className="space-y-6">
          {data.projects.map((project) => (
            <div key={project.id} className="p-4 border border-gray-200 rounded-lg relative">
              <button
                onClick={() => removeProject(project.id)}
                className="absolute top-4 right-4 text-red-600 hover:text-red-700"
              >
                <Trash2 size={20} />
              </button>
              <div className="space-y-3 pr-8">
                <input
                  type="text"
                  placeholder="Project Title"
                  value={project.title}
                  onChange={(e) => updateProject(project.id, 'title', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <textarea
                  placeholder="Project Description"
                  value={project.description}
                  onChange={(e) => updateProject(project.id, 'description', e.target.value)}
                  rows={2}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                />
                <input
                  type="url"
                  placeholder="Project Link (optional)"
                  value={project.link || ''}
                  onChange={(e) => updateProject(project.id, 'link', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <input
                  type="text"
                  placeholder="Technologies Used (optional)"
                  value={project.technologies || ''}
                  onChange={(e) => updateProject(project.id, 'technologies', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-800">Custom Sections</h2>
          <button
            onClick={addCustomSection}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Plus size={20} />
            Add
          </button>
        </div>
        <div className="space-y-6">
          {data.customSections.map((section) => (
            <div key={section.id} className="p-4 border border-gray-200 rounded-lg relative">
              <button
                onClick={() => removeCustomSection(section.id)}
                className="absolute top-4 right-4 text-red-600 hover:text-red-700"
              >
                <Trash2 size={20} />
              </button>
              <div className="space-y-3 pr-8">
                <input
                  type="text"
                  placeholder="Section Title (e.g., Languages, Awards)"
                  value={section.title}
                  onChange={(e) => updateCustomSection(section.id, 'title', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent font-semibold"
                />
                <div className="space-y-2">
                  {section.items.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <input
                        type="text"
                        placeholder={`Bullet point ${idx + 1}`}
                        value={item}
                        onChange={(e) => updateCustomSectionItem(section.id, idx, e.target.value)}
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                      <button
                        onClick={() => removeCustomSectionItem(section.id, idx)}
                        className="text-red-600 hover:text-red-700"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => addCustomSectionItem(section.id)}
                  className="text-sm px-3 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors"
                >
                  + Add Bullet Point
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
