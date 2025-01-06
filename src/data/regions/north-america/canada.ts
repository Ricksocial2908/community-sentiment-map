import { Hotspot } from "@/lib/types";

export const canadaHotspot: Hotspot = {
  id: 7,
  name: "Canada (Central)",
  coordinates: [-79.3832, 43.6532],
  metrics: {
    sentiment: 86,
    articles: 155,
    studentsEnrolled: 2600,
    investmentToDate: 15000000,
    futureRequirements: 9500000,
    socialMetrics: {
      twitter: {
        mentions: 750,
        sentiment: 84,
      },
      linkedin: {
        mentions: 580,
        sentiment: 89,
      },
      news: {
        mentions: 220,
        sentiment: 86,
      }
    }
  },
  recommendations: {
    highCost: [
      "Canadian Tech Innovation Hub",
      "Ontario Data Center",
      "National Cloud Infrastructure"
    ],
    mediumCost: [
      "Canadian Tech Education",
      "National Startup Support",
      "Regional Research Center"
    ],
    lowCost: [
      "Local Community Programs",
      "Canadian Tech Events",
      "Regional Dev Support"
    ]
  }
};

export const getCanadaDetailedInfo = (label: string) => {
  switch (label) {
    case "Community Sentiment":
      return {
        sources: [
          "The Globe and Mail",
          "Toronto Star",
          "National Post",
          "CBC News",
          "Canadian Tech News",
          "Ontario Tech Forum",
          "Canadian Cloud Community"
        ],
        breakdown: [
          { source: "Local Media Coverage", value: "85%", sentiment: { positive: "87%", negative: "13%" } },
          { source: "Community Feedback", value: "88%", sentiment: { positive: "90%", negative: "10%" } },
          { source: "Forum Discussions", value: "86%", sentiment: { positive: "88%", negative: "12%" } }
        ],
        sentimentAnalysis: {
          positive: {
            percentage: "88%",
            topTopics: ["AWS Data Center Jobs", "AWS Community Programs", "AWS Environmental Impact", "AWS Skills Development"]
          },
          negative: {
            percentage: "12%",
            topTopics: ["Infrastructure Timeline", "Local Resource Usage", "Traffic Impact"]
          }
        },
        lastUpdated: "2024-03-15"
      };
    default:
      return null;
  }
};