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
          sentiment: 89
        },
        linkedin: {
          mentions: 780,
          sentiment: 91
        },
        news: {
          mentions: 290,
          sentiment: 87
        }
      }
    },
    recommendations: {
      highCost: [
        "Earthquake protection systems",
        "Power grid redundancy",
        "Advanced cooling technology"
      ],
      mediumCost: [
        "Network optimization",
        "Security enhancement",
        "Staff facility modernization"
      ],
      lowCost: [
        "Energy efficiency programs",
        "Local talent development",
        "Disaster response training"
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
          sentiment: 86
        },
        linkedin: {
          mentions: 680,
          sentiment: 88
        },
        news: {
          mentions: 260,
          sentiment: 85
        }
      }
    },
    recommendations: {
      highCost: [
        "Cooling system modernization",
        "Network infrastructure upgrade",
        "Security system enhancement"
      ],
      mediumCost: [
        "Power efficiency optimization",
        "Staff facilities improvement",
        "Backup systems upgrade"
      ],
      lowCost: [
        "Environmental monitoring",
        "Staff training programs",
        "Community engagement"
      ]
    }
  }
];