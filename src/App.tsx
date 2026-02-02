import { useState } from 'react';
import { FileText, Download } from 'lucide-react';
import ResumeForm from './components/ResumeForm';
import ResumePreview from './components/ResumePreview';
import type { ResumeData } from './types/resume';

function App() {
  const [resumeData, setResumeData] = useState<ResumeData>({
    personalInfo: {
      fullName: '',
      email: '',
      phone: '',
      location: '',
      portfolio: '',
      summary: '',
      hobbies: '',
    },
    workExperience: [],
    education: [],
    skills: [],
    certifications: [],
    projects: [],
    customSections: [],
  });

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="print:hidden">
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <FileText className="text-blue-600" size={32} />
                <h1 className="text-3xl font-bold text-gray-900">Resume Maker</h1>
              </div>
              <button
                onClick={handlePrint}
                className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
              >
                <Download size={20} />
                Export PDF
              </button>
            </div>
          </div>
        </header>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-md p-6 h-fit">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Edit Resume</h2>
              <ResumeForm data={resumeData} onChange={setResumeData} />
            </div>

            <div className="lg:sticky lg:top-8 h-fit">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Preview</h2>
              <div className="rounded-xl overflow-hidden shadow-xl">
                <ResumePreview data={resumeData} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden print:block">
        <ResumePreview data={resumeData} />
      </div>
    </div>
  );
}

export default App;
