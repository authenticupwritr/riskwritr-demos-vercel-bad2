import React, { useState } from 'react';
import Link from 'next/link';
import { Building2, AlertCircle, CheckCircle, ChevronRight, FileText, Home } from 'lucide-react';

export default function UpWritrDemo() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    businessName: '',
    industry: '',
    revenue: '',
    employees: '',
    workType: [],
    hazmat: '',
    certificates: '',
    internationalOps: ''
  });
  const [appetiteScore, setAppetiteScore] = useState(null);
  const [showReport, setShowReport] = useState(false);

  const questions = [
    {
      id: 'basic',
      title: 'Tell me about this business',
      fields: [
        { name: 'businessName', label: 'Business Name', type: 'text', placeholder: 'ABC Construction LLC' },
        { name: 'industry', label: 'Industry', type: 'select', options: ['General Contractor', 'HVAC', 'Plumbing', 'Electrical', 'Roofing', 'Landscaping'] },
        { name: 'revenue', label: 'Annual Revenue', type: 'text', placeholder: '$5,200,000' },
        { name: 'employees', label: 'Number of Employees', type: 'number', placeholder: '42' }
      ]
    },
    {
      id: 'operations',
      title: 'What type of work do you perform?',
      subtitle: 'Select all that apply',
      fields: [
        { name: 'workType', label: '', type: 'multicheck', options: [
          'Residential Construction',
          'Commercial Construction',
          'Heavy Civil/Infrastructure',
          'Tenant Improvements',
          'Ground-up Construction',
          'Renovation/Remodel'
        ]}
      ]
    },
    {
      id: 'exposures',
      title: 'Risk Exposure Questions',
      fields: [
        { name: 'hazmat', label: 'Do you handle hazardous materials?', type: 'radio', options: ['Yes', 'No', 'Sometimes'] },
        { name: 'certificates', label: 'Do you require COIs from subcontractors?', type: 'radio', options: ['Always', 'Sometimes', 'No'] },
        { name: 'internationalOps', label: 'Do you have any international operations?', type: 'radio', options: ['Yes', 'No'] }
      ]
    }
  ];

  const handleInputChange = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleMultiCheck = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: prev[name].includes(value)
        ? prev[name].filter(v => v !== value)
        : [...prev[name], value]
    }));
  };

  const handleNext = () => {
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      calculateAppetite();
    }
  };

  const calculateAppetite = () => {
    let score = 85;
    if (formData.hazmat === 'Yes') score -= 15;
    if (formData.certificates !== 'Always') score -= 10;
    if (formData.internationalOps === 'Yes') score -= 5;
    if (formData.workType.includes('Heavy Civil/Infrastructure')) score -= 10;
    setAppetiteScore(score);
  };

  const generateReport = () => {
    setShowReport(true);
  };

  const getAppetiteColor = (score) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getAppetiteLabel = (score) => {
    if (score >= 80) return 'Strong Match';
    if (score >= 60) return 'Borderline Match';
    return 'Outside Appetite';
  };

  const getAppetiteIcon = (score) => {
    if (score >= 80) return <CheckCircle className="w-6 h-6 text-green-600" />;
    if (score >= 60) return <AlertCircle className="w-6 h-6 text-yellow-600" />;
    return <AlertCircle className="w-6 h-6 text-red-600" />;
  };

  if (showReport) {
    return (
      <div className="min-h-screen bg-gray-50 p-8">
        <Link href="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6">
          <Home className="w-5 h-5" />
          Back to Demos
        </Link>
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center gap-3 mb-6">
            <FileText className="w-8 h-8 text-cyan-600" />
            <h1 className="text-2xl font-bold text-gray-900">Business Risk Assessment Report</h1>
          </div>

          <div className="space-y-6">
            <div className="border-b pb-4">
              <h2 className="text-xl font-semibold mb-4">Business Profile</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600">Business Name</p>
                  <p className="font-medium">{formData.businessName}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Industry</p>
                  <p className="font-medium">{formData.industry}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Annual Revenue</p>
                  <p className="font-medium">{formData.revenue}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Employees</p>
                  <p className="font-medium">{formData.employees}</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Carrier Appetite Match</h2>
              <div className="flex items-center gap-4">
                {getAppetiteIcon(appetiteScore)}
                <div>
                  <p className={`text-2xl font-bold ${getAppetiteColor(appetiteScore)}`}>
                    {appetiteScore}% Match
                  </p>
                  <p className="text-gray-600">{getAppetiteLabel(appetiteScore)}</p>
                </div>
              </div>
              {appetiteScore >= 80 && (
                <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded">
                  <p className="text-green-800 font-medium">✓ Proceed with submission - strong appetite match</p>
                </div>
              )}
            </div>

            <div className="flex gap-4 pt-4">
              <button 
                onClick={() => {setShowReport(false); setStep(0); setAppetiteScore(null);}}
                className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
              >
                Start New Assessment
              </button>
              <button className="px-6 py-3 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700">
                Export to Submission
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (appetiteScore !== null) {
    return (
      <div className="min-h-screen bg-gray-50 p-8">
        <Link href="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6">
          <Home className="w-5 h-5" />
          Back to Demos
        </Link>
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-4">Risk Assessment Complete</h1>
          </div>

          <div className="bg-gradient-to-r from-cyan-50 to-blue-100 p-8 rounded-lg mb-8">
            <div className="flex items-center justify-center gap-6">
              {getAppetiteIcon(appetiteScore)}
              <div className="text-center">
                <p className={`text-5xl font-bold ${getAppetiteColor(appetiteScore)}`}>
                  {appetiteScore}%
                </p>
                <p className="text-xl text-gray-700 mt-2">{getAppetiteLabel(appetiteScore)}</p>
              </div>
            </div>
          </div>

          <button 
            onClick={generateReport}
            className="w-full bg-cyan-600 text-white py-4 rounded-lg text-lg font-semibold hover:bg-cyan-700"
          >
            Generate Full Business Analysis Report
          </button>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[step];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-blue-100 p-8">
      <Link href="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6">
        <Home className="w-5 h-5" />
        Back to Demos
      </Link>
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <Building2 className="w-8 h-8 text-cyan-600" />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">UpWritr</h1>
              <p className="text-sm text-gray-600">Business Risk Assessment - Guided Interview</p>
            </div>
          </div>
          
          <div className="flex gap-2 mt-4">
            {questions.map((_, idx) => (
              <div 
                key={idx}
                className={`h-2 flex-1 rounded-full ${idx <= step ? 'bg-cyan-600' : 'bg-gray-200'}`}
              />
            ))}
          </div>
          <p className="text-sm text-gray-600 mt-2">Step {step + 1} of {questions.length}</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">{currentQuestion.title}</h2>
          {currentQuestion.subtitle && (
            <p className="text-gray-600 mb-6">{currentQuestion.subtitle}</p>
          )}

          <div className="space-y-6">
            {currentQuestion.fields.map(field => (
              <div key={field.name}>
                {field.type === 'text' || field.type === 'number' ? (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      value={formData[field.name]}
                      onChange={(e) => handleInputChange(field.name, e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    />
                  </div>
                ) : field.type === 'select' ? (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {field.label}
                    </label>
                    <select
                      value={formData[field.name]}
                      onChange={(e) => handleInputChange(field.name, e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500"
                    >
                      <option value="">Select...</option>
                      {field.options.map(opt => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                ) : field.type === 'radio' ? (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      {field.label}
                    </label>
                    <div className="space-y-2">
                      {field.options.map(opt => (
                        <label key={opt} className="flex items-center gap-3 p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                          <input
                            type="radio"
                            name={field.name}
                            value={opt}
                            checked={formData[field.name] === opt}
                            onChange={(e) => handleInputChange(field.name, e.target.value)}
                            className="w-4 h-4 text-cyan-600"
                          />
                          <span className="text-gray-700">{opt}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                ) : field.type === 'multicheck' ? (
                  <div className="space-y-2">
                    {field.options.map(opt => (
                      <label key={opt} className="flex items-center gap-3 p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                        <input
                          type="checkbox"
                          checked={formData[field.name].includes(opt)}
                          onChange={() => handleMultiCheck(field.name, opt)}
                          className="w-4 h-4 text-cyan-600 rounded"
                        />
                        <span className="text-gray-700">{opt}</span>
                      </label>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
          </div>

          <div className="flex gap-4 mt-8">
            {step > 0 && (
              <button
                onClick={() => setStep(step - 1)}
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
              >
                Back
              </button>
            )}
            <button
              onClick={handleNext}
              className="flex-1 bg-cyan-600 text-white py-3 rounded-lg font-semibold hover:bg-cyan-700 flex items-center justify-center gap-2"
            >
              {step < questions.length - 1 ? 'Continue' : 'Calculate Appetite Match'}
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
