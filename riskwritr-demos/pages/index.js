import Link from 'next/link';
import { Building2, FileCheck, FileText, Target } from 'lucide-react';

export default function Home() {
  const demos = [
    {
      name: 'UpWritr',
      description: 'Business Intelligence & Exposure Analysis',
      icon: Building2,
      color: 'from-cyan-500 to-blue-600',
      href: '/upwritr'
    },
    {
      name: 'CoverWritr',
      description: 'Coverage Recommendations & Gap Analysis',
      icon: FileCheck,
      color: 'from-purple-500 to-pink-600',
      href: '/coverwritr'
    },
    {
      name: 'ProWritr',
      description: 'Professional Proposal Generation',
      icon: FileText,
      color: 'from-emerald-500 to-teal-600',
      href: '/prowritr'
    },
    {
      name: 'CloseWritr',
      description: 'Presentation Strategy & Objection Handling',
      icon: Target,
      color: 'from-amber-500 to-orange-600',
      href: '/closewritr'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-gray-900 mb-4">
            RiskWritr
          </h1>
          <p className="text-2xl text-gray-600 mb-2">
            Intelligent Submission Quality for Commercial Insurance
          </p>
          <p className="text-lg text-gray-500">
            Interactive Demo Suite
          </p>
        </div>

        {/* Demo Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {demos.map((demo) => {
            const Icon = demo.icon;
            return (
              <Link 
                key={demo.name}
                href={demo.href}
                className="group"
              >
                <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${demo.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-3">
                    {demo.name}
                  </h2>
                  <p className="text-gray-600 text-lg">
                    {demo.description}
                  </p>
                  <div className="mt-6 flex items-center text-blue-600 font-semibold group-hover:gap-3 transition-all">
                    View Demo
                    <span className="ml-2 group-hover:ml-0 transition-all">→</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Footer */}
        <div className="text-center mt-16 text-gray-500">
          <p className="text-sm">
            Created for Applied Systems / Cytora Solutions Consultant Interview
          </p>
          <p className="text-xs mt-2">
            December 2024
          </p>
        </div>
      </div>
    </div>
  );
}
