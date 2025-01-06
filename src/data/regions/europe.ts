import { Hotspot } from '@/lib/types';

export const europeHotspots: Hotspot[] = [
  {
    id: 3,
    name: "Europe (Ireland)",
    coordinates: [-6.2603, 53.3498],
    metrics: {
      sentiment: 85,
      articles: 165,
      studentsEnrolled: 2800,
      investmentToDate: 16000000,
      futureRequirements: 11000000,
      socialMetrics: {
        twitter: {
          mentions: 820,
          sentiment: 83,
        },
        linkedin: {
          mentions: 640,
          sentiment: 87,
        },
        news: {
          mentions: 250,
          sentiment: 84,
        }
      }
    },
    recommendations: {
      highCost: [
        "European Green Data Center",
        "EU Cloud Innovation Hub",
        "Regional Tech Campus"
      ],
      mediumCost: [
        "EU Tech Skills Program",
        "European Startup Support",
        "Regional Research Center"
      ],
      lowCost: [
        "Local Community Engagement",
        "EU Tech Conferences",
        "Regional Dev Meetups"
      ]
    }
  }
];

export const getIrelandDetailedInfo = (label: string) => {
  switch (label) {
    case "Community Sentiment":
      return {
        sources: [
          "The Irish Times",
          "Irish Independent",
          "Dublin Business Post",
          "Irish Tech News",
          "Dublin Chamber of Commerce",
          "Irish Tech Community",
          "Dublin Tech Forum"
        ],
        breakdown: [
          { source: "Local Media Coverage", value: "85%", sentiment: { positive: "88%", negative: "12%" } },
          { source: "Community Feedback", value: "89%", sentiment: { positive: "91%", negative: "9%" } },
          { source: "Forum Discussions", value: "87%", sentiment: { positive: "89%", negative: "11%" } }
        ],
        sentimentAnalysis: {
          positive: {
            percentage: "89%",
            topTopics: ["AWS Data Center Jobs", "AWS Community Programs", "AWS Environmental Impact", "AWS Skills Development"]
          },
          negative: {
            percentage: "11%",
            topTopics: ["Data Center Energy Usage", "Infrastructure Timeline", "Local Planning"]
          }
        },
        lastUpdated: "2024-03-15"
      };
    default:
      return null;
  }
};
