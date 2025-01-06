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
          sentiment: 83
        },
        linkedin: {
          mentions: 640,
          sentiment: 87
        },
        news: {
          mentions: 250,
          sentiment: 84
        }
      }
    },
    recommendations: {
      highCost: [
        "Sustainable power solutions",
        "Network infrastructure expansion",
        "Advanced security systems"
      ],
      mediumCost: [
        "Cooling efficiency improvements",
        "Backup system upgrades",
        "Staff training facilities"
      ],
      lowCost: [
        "Green energy initiatives",
        "Local community engagement",
        "Operational optimization"
      ]
    }
  }
];