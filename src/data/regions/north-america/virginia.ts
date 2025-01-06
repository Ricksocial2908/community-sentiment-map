import { Hotspot } from "@/lib/types";

export const virginiaHotspot: Hotspot = {
  id: 1,
  name: "US East (N. Virginia)",
  coordinates: [-77.0469, 38.8048],
  metrics: {
    sentiment: 92,
    articles: 245,
    studentsEnrolled: 5600,
    investmentToDate: 25000000,
    futureRequirements: 15000000,
    socialMetrics: {
      twitter: {
        mentions: 1200,
        sentiment: 85,
      },
      linkedin: {
        mentions: 850,
        sentiment: 92,
      },
      news: {
        mentions: 320,
        sentiment: 88,
      }
    }
  },
  recommendations: {
    highCost: [
      "East Coast Innovation Center",
      "Virginia Tech Corridor",
      "Regional Data Hub Expansion"
    ],
    mediumCost: [
      "DC Metro Area Tech Programs",
      "East Coast Startup Hub",
      "Regional Cloud Academy"
    ],
    lowCost: [
      "Local STEM Education",
      "Community Tech Events",
      "Regional Dev Programs"
    ]
  }
};

export const getVirginiaDetailedInfo = (label: string) => {
  switch (label) {
    case "Community Sentiment":
      return {
        sources: [
          "The Washington Post",
          "Virginia Business",
          "Inside NoVA",
          "Washington Business Journal",
          "Northern Virginia Technology Council",
          "Dulles Tech Forum",
          "Loudoun County Business Alliance"
        ],
        breakdown: [
          { source: "Local Media Coverage", value: "88%", sentiment: { positive: "90%", negative: "10%" } },
          { source: "Community Feedback", value: "92%", sentiment: { positive: "94%", negative: "6%" } },
          { source: "Forum Discussions", value: "89%", sentiment: { positive: "91%", negative: "9%" } }
        ],
        sentimentAnalysis: {
          positive: {
            percentage: "92%",
            topTopics: ["AWS Data Center Jobs", "AWS Community Programs", "AWS Environmental Impact", "AWS Skills Development"]
          },
          negative: {
            percentage: "8%",
            topTopics: ["Data Center Expansion", "Infrastructure Timeline", "Power Grid Impact"]
          }
        },
        lastUpdated: "2024-03-15"
      };
    default:
      return null;
  }
};