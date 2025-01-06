import { Hotspot } from '@/lib/types';

export const asiaPacificHotspots: Hotspot[] = [
  {
    id: 4,
    name: "Asia Pacific (Tokyo)",
    coordinates: [139.6917, 35.6895],
    metrics: {
      sentiment: 90,
      articles: 210,
      studentsEnrolled: 4200,
      investmentToDate: 22000000,
      futureRequirements: 14000000,
      socialMetrics: {
        twitter: {
          mentions: 1100,
          sentiment: 89,
        },
        linkedin: {
          mentions: 780,
          sentiment: 91,
        },
        news: {
          mentions: 290,
          sentiment: 87,
        }
      }
    },
    recommendations: {
      highCost: [
        "Tokyo Tech Innovation Center",
        "Japan Region Data Center Expansion",
        "APAC Cloud Infrastructure"
      ],
      mediumCost: [
        "Japanese Tech Education Hub",
        "Regional AI Research Center",
        "Local IoT Development Lab"
      ],
      lowCost: [
        "Japanese Dev Community Support",
        "Local Tech Conferences",
        "Regional STEM Programs"
      ]
    }
  },
  {
    id: 5,
    name: "Asia Pacific (Singapore)",
    coordinates: [103.8198, 1.3521],
    metrics: {
      sentiment: 87,
      articles: 175,
      studentsEnrolled: 3100,
      investmentToDate: 17000000,
      futureRequirements: 10000000,
      socialMetrics: {
        twitter: {
          mentions: 890,
          sentiment: 86,
        },
        linkedin: {
          mentions: 680,
          sentiment: 88,
        },
        news: {
          mentions: 260,
          sentiment: 85,
        }
      }
    },
    recommendations: {
      highCost: [
        "ASEAN Region Data Hub",
        "Singapore Innovation Campus",
        "Southeast Asia Cloud Center"
      ],
      mediumCost: [
        "Regional Fintech Lab",
        "ASEAN Tech Training Center",
        "Local Startup Accelerator"
      ],
      lowCost: [
        "Southeast Asian Dev Programs",
        "Local Tech Community Events",
        "Regional STEM Initiatives"
      ]
    }
  }
];