import React, { useState } from 'react';
import Link from 'next/link';
import { Target, Home, MessageSquare, TrendingUp } from 'lucide-react';

export default function CloseWritrDemo() {
  const [selectedScenario, setSelectedScenario] = useState(null);
  const [showCoaching, setShowCoaching] = useState(false);

  const scenarios = [
    {
      id: 1,
      title: "Price Objection",
      description: "Client says premium is too high compared to current carrier",
      difficulty: "Medium"
    },
    {
      id: 2,
      title: "Coverage Concerns",
      description: "Client questions need for recommended umbrella coverage",
      difficulty: "Easy"
    },
    {
      id: 3,
      title: "Switching Hesitation",
      description: "Client happy with current carrier, resistant to change",
      difficulty: "Hard"
    }
  ];

  const coachingContent = {
    1: {
      objection: '"Your premium is $8,000 more than my current carrier. Why should I pay more?"',
      strategy: [
        "Acknowledge the concern immediately - never dismiss price objections",
        "Reframe from cost to value and risk protection",
        "Use the coverage gap analysis from CoverWritr as proof"
      ],
      response: `"I appreciate you being upfront about the price difference. Let me show you where that $8,000 is actually going...

[Pull up coverage comparison]

Your current policy has you at $1M general liability. At your revenue level and project sizes, that leaves you significantly underinsured. The additional cost breaks down to:

• $4,200 for Umbrella coverage you don't currently have
• $2,400 for increased GL limits ($1M to $2M)  
• $1,400 for higher auto liability limits

Here's the key question: If you had a $1.5M claim tomorrow, where would that extra $500K come from? That's the risk you're carrying right now to save $8,000.

Most contractors your size are at $2M minimum. You're not paying more - you're finally paying what you should be for proper protection."`,
      keyPoints: [
        "Break down the premium increase by coverage enhancement",
        "Use specific dollar amounts to show inadequacy",
        "Frame as 'paying what you should' not 'paying more'"
      ]
    },
    2: {
      objection: '"I\'ve been in business 15 years and never needed umbrella coverage. Why do I need it now?"',
      strategy: [
        "Validate their track record - they've been successful",
        "Shift from past to future risk exposure",
        "Use industry data and what-if scenarios"
      ],
      response: `"You've built an excellent safety record over 15 years - that's exactly WHY this matters now.

Your revenue has grown from $2M to $5.2M. Your average project size has doubled. You're working on commercial projects with stricter requirements. Your exposure isn't what it was 5 years ago.

Here's what I mean: Last year in our market, a contractor similar to your size had a scaffolding collapse. The claim was $2.8M. They had $2M in coverage. That extra $800K came out of their business assets.

The umbrella isn't for what you've done wrong in the past - it's for what could happen despite doing everything right. At $4,200 annually, it's the cheapest risk transfer you can buy."`,
      keyPoints: [
        "Connect growth to increased exposure",
        "Use real local examples (stories sell)",
        "Emphasize 'despite doing everything right'"
      ]
    },
    3: {
      objection: '"I\'ve had the same agent for 10 years. He takes care of me. I\'m not looking to switch."',
      strategy: [
        "Never badmouth the current agent - you'll lose",
        "Position as addition, not replacement",
        "Focus on what's missing, not what's wrong"
      ],
      response: `"I completely understand - loyalty matters, and 10 years says your agent has done something right.

I'm not asking you to fire him. I'm showing you gaps that exist regardless of who your agent is. These coverage inadequacies? They're not his fault - they're what happens when a business grows and the insurance doesn't keep pace.

Here's what I'd suggest: Take this coverage analysis to your current agent. If he can match these recommendations and close these gaps at a better price, you should absolutely stay with him. That's the right move.

But if he can't - or if he's been missing these gaps for years - then the question becomes: How much is that loyalty costing you in unprotected risk?

My goal isn't to take business from your agent. It's to make sure you don't lose YOUR business because of an insurance gap nobody noticed."`,
      keyPoints: [
        "Suggest they take the analysis to current agent",
        "Position yourself as the risk advisor, not the salesperson",
        "Make it about protecting THEIR business, not your commission"
      ]
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 p-8">
      <Link href="/" className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 mb-6">
        <Home className="w-5 h-5" />
        Back to Demos
      </Link>

      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center gap-3 mb-6">
            <Target className="w-8 h-8 text-amber-600" />
            <div>
              <h1 className="text-3xl font-bold text-gray-900">CloseWritr</h1>
              <p className="text-gray-600">Presentation Strategy & Objection Handling</p>
            </div>
          </div>

          {!selectedScenario ? (
            <div>
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Interactive Sales Coaching</h2>
                <p className="text-gray-700 mb-6">
                  CloseWritr uses AI to analyze your client relationship history and prepare you for 
                  common objections. Select a scenario to see coaching in action.
                </p>
              </div>

              <div className="space-y-4">
                {scenarios.map((scenario) => (
                  <button
                    key={scenario.id}
                    onClick={() => {
                      setSelectedScenario(scenario.id);
                      setShowCoaching(true);
                    }}
                    className="w-full text-left p-6 border-2 border-gray-200 rounded-lg hover:border-amber-400 hover:bg-amber-50 transition-all group"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-amber-700">
                          {scenario.title}
                        </h3>
                        <p className="text-gray-600 mt-1">{scenario.description}</p>
                      </div>
                      <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                        scenario.difficulty === 'Easy' ? 'bg-green-100 text-green-700' :
                        scenario.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-red-100 text-red-700'
                      }`}>
                        {scenario.difficulty}
                      </span>
                    </div>
                  </button>
                ))}
              </div>

              <div className="mt-8 bg-amber-50 p-6 rounded-lg">
                <div className="flex items-start gap-3">
                  <MessageSquare className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-amber-900 mb-2">How CloseWritr Works</h3>
                    <ul className="space-y-2 text-sm text-amber-800">
                      <li>• Analyzes CRM data to predict likely objections</li>
                      <li>• Provides scripted responses based on proven techniques</li>
                      <li>• Suggests presentation flow based on client communication style</li>
                      <li>• Tracks what objections you handle well vs. struggle with</li>
                      <li>• Improves with each interaction (machine learning)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ) : showCoaching && coachingContent[selectedScenario] ? (
            <div>
              <div className="mb-6 p-4 bg-amber-50 border-l-4 border-amber-500 rounded">
                <h3 className="font-semibold text-amber-900 mb-2">Client Objection:</h3>
                <p className="text-lg italic text-gray-800">
                  {coachingContent[selectedScenario].objection}
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-amber-600" />
                    Response Strategy
                  </h3>
                  <ul className="space-y-2">
                    {coachingContent[selectedScenario].strategy.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-amber-600 font-bold">•</span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <MessageSquare className="w-5 h-5 text-amber-600" />
                    Recommended Response
                  </h3>
                  <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-amber-500">
                    <p className="text-gray-800 whitespace-pre-line leading-relaxed">
                      {coachingContent[selectedScenario].response}
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Key Points to Remember</h3>
                  <ul className="space-y-2">
                    {coachingContent[selectedScenario].keyPoints.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">✓</span>
                        <span className="text-gray-700">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex gap-4 mt-8">
                <button
                  onClick={() => {
                    setSelectedScenario(null);
                    setShowCoaching(false);
                  }}
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
                >
                  Try Another Scenario
                </button>
                <button className="flex-1 bg-amber-600 text-white py-3 rounded-lg font-semibold hover:bg-amber-700">
                  Practice with AI Role-Play
                </button>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
