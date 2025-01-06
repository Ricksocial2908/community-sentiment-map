import { Hotspot } from '@/lib/types';

export const otherHotspots: Hotspot[] = [
  {
    id: 6,
    name: "South America (São Paulo)",
    coordinates: [-46.6333, -23.5505],
    metrics: {
      sentiment: 82,
      articles: 145,
      studentsEnrolled: 2400,
      investmentToDate: 14000000,
      futureRequirements: 9000000,
      socialMetrics: {
        twitter: {
          mentions: 680,
          sentiment: 81
        },
        linkedin: {
          mentions: 520,
          sentiment: 84
        },
        news: {
          mentions: 190,
          sentiment: 82
        }
      }
    },
    recommendations: {
      highCost: [
        "Power infrastructure upgrade",
        "Network backbone expansion",
        "Security systems modernization"
      ],
      mediumCost: [
        "Cooling efficiency improvement",
        "Staff facility enhancement",
        "Backup power systems"
      ],
      lowCost: [
        "Local workforce training",
        "Energy optimization",
        "Community programs"
      ]
    }
  },
  {
    id: 8,
    name: "Middle East (Bahrain)",
    coordinates: [50.5875, 26.2167],
    metrics: {
      sentiment: 83,
      articles: 130,
      studentsEnrolled: 2000,
      investmentToDate: 13000000,
      futureRequirements: 8500000,
      socialMetrics: {
        twitter: {
          mentions: 620,
          sentiment: 82
        },
        linkedin: {
          mentions: 480,
          sentiment: 85
        },
        news: {
          mentions: 170,
          sentiment: 83
        }
      }
    },
    recommendations: {
      highCost: [
        "Advanced cooling systems",
        "Power infrastructure upgrade",
        "Network backbone enhancement"
      ],
      mediumCost: [
        "Security system modernization",
        "Staff facility improvement",
        "Backup power solutions"
      ],
      lowCost: [
        "Energy efficiency programs",
        "Local talent development",
        "Environmental monitoring"
      ]
    }
  }
];