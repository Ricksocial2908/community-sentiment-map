import { Hotspot } from "@/lib/types";

export const oregonHotspot: Hotspot = {
  id: 2,
  name: "US West (Oregon)",
  coordinates: [-122.6784, 45.5155],
  metrics: {
    sentiment: 88,
    articles: 180,
    studentsEnrolled: 3200,
    investmentToDate: 18000000,
    futureRequirements: 12000000,
    socialMetrics: {
      twitter: {
        mentions: 980,
        sentiment: 82,
      },
      linkedin: {
        mentions: 720,
        sentiment: 88,
      },
      news: {
        mentions: 280,
        sentiment: 85,
      }
    }
  },
  recommendations: {
    highCost: [
      "Pacific Northwest Data Center",
      "Oregon Innovation Hub",
      "West Coast Cloud Center"
    ],
    mediumCost: [
      "Regional Tech Training",
      "West Coast Startup Support",
      "Green Tech Initiatives"
    ],
    lowCost: [
      "Local Community Programs",
      "Pacific Dev Meetups",
      "Regional STEM Support"
    ]
  }
};

export const getOregonDetailedInfo = (label: string) => {
  switch (label) {
    case "Community Sentiment":
      return {
        sources: [
          "The Oregonian",
          "Portland Business Journal",
          "Oregon Business",
          "Willamette Week",
          "Technology Association of Oregon",
          "Portland Tech Forum",
          "Silicon Forest Community"
        ],
        breakdown: [
          { source: "Local Media Coverage", value: "86%", sentiment: { positive: "88%", negative: "12%" } },
          { source: "Community Feedback", value: "90%", sentiment: { positive: "92%", negative: "8%" } },
          { source: "Forum Discussions", value: "88%", sentiment: { positive: "90%", negative: "10%" } }
        ],
        sentimentAnalysis: {
          positive: {
            percentage: "90%",
            topTopics: ["AWS Data Center Jobs", "AWS Community Programs", "AWS Environmental Impact", "AWS Skills Development"]
          },
          negative: {
            percentage: "10%",
            topTopics: ["Data Center Water Usage", "Infrastructure Timeline", "Environmental Impact"]
          }
        },
        lastUpdated: "2024-03-15"
      };
    default:
      return null;
  }
};