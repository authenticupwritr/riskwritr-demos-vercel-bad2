import React, { useState } from 'react';
import Link from 'next/link';
import { FileCheck, Home, CheckCircle, AlertTriangle } from 'lucide-react';

export default function CoverWritrDemo() {
  const [showRecommendations, setShowRecommendations] = useState(false);

  const businessInfo = {
    name: "ABC Construction LLC",
    industry: "General Contractor",
    revenue: "$5.2M",
    employees: 42
  };

  const coverageRecommendations = [
    {
      type: "Commercial General Liability",
      recommended: "$2M / $4M",
      current: "$1M / $2M",
      status: "insufficient",
      reasoning: "Revenue and project sizes indicate need for higher limits. Industry standard for contractors your size is $2M/$4M aggregate."
    },
    {
      type: "Workers Compensation",
      recommended: "Statutory",
      current: "Statutory",
      status: "adequate",
      reasoning: "Current coverage meets state requirements. Consider Additional Insured endorsements for contractual requirements."
    },
    {
      type: "Commercial Auto Liability",
      recommended: "$1M CSL",
      current: "$500K",
      status: "insufficient",
      reasoning: "Fleet of 12 vehicles requires higher limits. Most GCs require $1M minimum from subcontractors - you should carry the same."
    },
    {
      type: "Umbrella / Excess Liability",
      recommended: "$5M",
      current: "Not Carried",
      status: "critical",
      reasoning: "CRITICAL GAP: With annual revenue over $5M, umbrella coverage is essential. Protects against catastrophic loss scenarios."
    },
    {
      type: "Builders Risk",
      recommended: "Project-Specific",
      current: "Not Carried",
      status: "recommended",
      reasoning: "Recommend project-specific builders risk for projects over $500K. Protects work in progress from damage."
    },
    {
      type: "Professional Liability",
      recommended: "$1M",
      current: "Not Carried",
      status: "recommended",
      reasoning: "As design-build becomes more common, consider professional liability for design services and advice."
    }
  ];

  const getStatusColor = (status) => {
    if (status === 'critical') return 'bg-red-50 border-red-300';
    if (status === 'insufficient') return 'bg-yellow-50 border-yellow-300';
    if (status === 'recommended') return 'bg-blue-50 border-blue-300';
    return 'bg-green-50 border-green-300';
  };

  const getStatusIcon = (status) => {
    if (status === 'critical' || status === 'insufficient') 
      return <AlertTriangle className="w-5 h-5 text-red-600" />;
    if (status === 'recommended')
      return <AlertTriangle className="w-5 h-5 text-blue-600" />;
    return <CheckCircle className="w-5 h-5 text-green-600" />;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 p-8">
      <Link href="/" className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 mb-6">
        <Home className="w-5 h-5" />
        Back to Demos
      </Link>

      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
          <div className="flex items-center gap-3 mb-6">
            <FileCheck className="w-8 h-8 text-purple-600" />
            <div>
              <h1 className="text-3xl font-bold text-gray-900">CoverWritr</h1>
              <p className="text-gray-600">Coverage Recommendations & Gap Analysis</p>
            </div>
          </div>

          {!showRecommendations ? (
            <div>
              <div className="bg-purple-50 p-6 rounded-lg mb-6">
                <h2 className="text-xl font-semibold mb-4">Business Profile</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600">Business Name</p>
                    <p className="font-medium">{businessInfo.name}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Industry</p>
                    <p className="font-medium">{businessInfo.industry}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Annual Revenue</p>
                    <p className="font-medium">{businessInfo.revenue}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Employees</p>
                    <p className="font-medium">{businessInfo.employees}</p>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 mb-6">
                CoverWritr analyzes your business profile and industry standards to recommend appropriate 
                coverage limits and identify gaps in your current insurance program.
              </p>

              <button
                onClick={() => setShowRecommendations(true)}
                className="w-full bg-purple-600 text-white py-4 rounded-lg text-lg font-semibold hover:bg-purple-700"
              >
                Generate Coverage Recommendations
              </button>
            </div>
          ) : (
            <div>
              <div className="mb-6 p-4 bg-purple-50 border border-purple-200 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <AlertTriangle className="w-6 h-6 text-purple-600" />
                  <h3 className="font-semibold text-purple-900">Coverage Analysis Summary</h3>
                </div>
                <p className="text-purple-800">
                  Found 4 coverage gaps and 2 opportunities for improvement
                </p>
              </div>

              <div className="space-y-4">
                {coverageRecommendations.map((coverage, idx) => (
                  <div key={idx} className={`p-5 border-2 rounded-lg ${getStatusColor(coverage.status)}`}>
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        {getStatusIcon(coverage.status)}
                        <h3 className="font-semibold text-gray-900">{coverage.type}</h3>
                      </div>
                      <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                        coverage.status === 'critical' ? 'bg-red-200 text-red-800' :
                        coverage.status === 'insufficient' ? 'bg-yellow-200 text-yellow-800' :
                        coverage.status === 'recommended' ? 'bg-blue-200 text-blue-800' :
                        'bg-green-200 text-green-800'
                      }`}>
                        {coverage.status.toUpperCase()}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-3">
                      <div>
                        <p className="text-sm text-gray-600">Current Coverage</p>
                        <p className="font-medium text-gray-900">{coverage.current}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Recommended</p>
                        <p className="font-medium text-purple-700">{coverage.recommended}</p>
                      </div>
                    </div>

                    <p className="text-sm text-gray-700 leading-relaxed">
                      {coverage.reasoning}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex gap-4 mt-8">
                <button
                  onClick={() => setShowRecommendations(false)}
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
                >
                  Back
                </button>
                <button className="flex-1 bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700">
                  Continue to ProWritr →
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
