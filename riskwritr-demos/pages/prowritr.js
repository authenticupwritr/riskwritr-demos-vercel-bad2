import React, { useState } from 'react';
import Link from 'next/link';
import { FileText, Home, Download, Eye } from 'lucide-react';

export default function ProWritrDemo() {
  const [generating, setGenerating] = useState(false);
  const [generated, setGenerated] = useState(false);

  const handleGenerate = () => {
    setGenerating(true);
    setTimeout(() => {
      setGenerating(false);
      setGenerated(true);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-100 p-8">
      <Link href="/" className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 mb-6">
        <Home className="w-5 h-5" />
        Back to Demos
      </Link>

      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center gap-3 mb-6">
            <FileText className="w-8 h-8 text-emerald-600" />
            <div>
              <h1 className="text-3xl font-bold text-gray-900">ProWritr</h1>
              <p className="text-gray-600">Professional Proposal Generation</p>
            </div>
          </div>

          {!generated ? (
            <div>
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Ready to Generate Proposal</h2>
                <p className="text-gray-700 mb-6">
                  ProWritr will compile your UpWritr analysis and CoverWritr recommendations into a 
                  comprehensive, client-ready insurance proposal.
                </p>

                <div className="bg-emerald-50 p-6 rounded-lg space-y-4">
                  <h3 className="font-semibold text-emerald-900">Proposal Will Include:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold">✓</span>
                      <span className="text-gray-700">Executive Summary of Business Profile</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold">✓</span>
                      <span className="text-gray-700">Current vs. Recommended Coverage Comparison</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold">✓</span>
                      <span className="text-gray-700">Premium Quote Breakdown by Line of Business</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold">✓</span>
                      <span className="text-gray-700">Coverage Gap Analysis with Risk Impact</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold">✓</span>
                      <span className="text-gray-700">Side-by-Side Carrier Comparison (if multiple quotes)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold">✓</span>
                      <span className="text-gray-700">Next Steps & Implementation Timeline</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold">✓</span>
                      <span className="text-gray-700">DocuSign-Ready Application Forms</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold">✓</span>
                      <span className="text-gray-700">Premium Finance Application (if applicable)</span>
                    </li>
                  </ul>
                </div>
              </div>

              <button
                onClick={handleGenerate}
                disabled={generating}
                className="w-full bg-emerald-600 text-white py-4 rounded-lg text-lg font-semibold hover:bg-emerald-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                {generating ? 'Generating Proposal...' : 'Generate Professional Proposal'}
              </button>

              {generating && (
                <div className="mt-6">
                  <div className="flex items-center justify-center gap-3 text-emerald-600">
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-emerald-600"></div>
                    <span>Compiling proposal components...</span>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div>
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <span className="text-green-600 text-xl">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-green-900">Proposal Generated Successfully</h3>
                    <p className="text-sm text-green-700">Ready for client delivery</p>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-lg p-8 mb-6">
                <h2 className="text-2xl font-bold mb-2">Insurance Proposal</h2>
                <h3 className="text-xl text-emerald-600 mb-6">ABC Construction LLC</h3>

                <div className="space-y-6 text-gray-700">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Executive Summary</h4>
                    <p className="leading-relaxed">
                      We have conducted a comprehensive review of ABC Construction LLC's insurance needs 
                      based on your operations, revenue profile, and industry exposures. This proposal 
                      outlines recommended coverage enhancements to address identified gaps...
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Premium Summary</h4>
                    <div className="bg-gray-50 p-4 rounded">
                      <div className="flex justify-between mb-2">
                        <span>Commercial General Liability:</span>
                        <span className="font-semibold">$18,450</span>
                      </div>
                      <div className="flex justify-between mb-2">
                        <span>Workers Compensation:</span>
                        <span className="font-semibold">$24,680</span>
                      </div>
                      <div className="flex justify-between mb-2">
                        <span>Commercial Auto:</span>
                        <span className="font-semibold">$12,340</span>
                      </div>
                      <div className="flex justify-between mb-2">
                        <span>Umbrella Liability (NEW):</span>
                        <span className="font-semibold">$4,200</span>
                      </div>
                      <div className="border-t-2 border-gray-300 pt-2 mt-2 flex justify-between">
                        <span className="font-bold">Total Annual Premium:</span>
                        <span className="font-bold text-emerald-600">$59,670</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 italic">
                    [Full proposal includes detailed coverage analysis, carrier comparison, 
                    policy forms, and next steps...]
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <button className="flex items-center justify-center gap-2 px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700">
                  <Download className="w-5 h-5" />
                  Download PDF
                </button>
                <button className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-emerald-600 text-emerald-600 rounded-lg hover:bg-emerald-50">
                  <Eye className="w-5 h-5" />
                  Preview Full Proposal
                </button>
                <button className="col-span-2 bg-gray-600 text-white py-3 rounded-lg font-semibold hover:bg-gray-700">
                  Continue to CloseWritr →
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
