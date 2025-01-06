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
  },
  {
    id: 9,
    name: "Africa (Cape Town)",
    coordinates: [18.4241, -33.9249],
    metrics: {
      sentiment: 85,
      articles: 120,
      studentsEnrolled: 1800,
      investmentToDate: 11000000,
      futureRequirements: 7500000,
      socialMetrics: {
        twitter: {
          mentions: 550,
          sentiment: 84
        },
        linkedin: {
          mentions: 420,
          sentiment: 86
        },
        news: {
          mentions: 150,
          sentiment: 85
        }
      }
    },
    recommendations: {
      highCost: [
        "Renewable energy systems",
        "Network infrastructure",
        "Security enhancement"
      ],
      mediumCost: [
        "Cooling optimization",
        "Staff training center",
        "Backup systems"
      ],
      lowCost: [
        "Community education",
        "Local hiring initiatives",
        "Environmental programs"
      ]
    }
  },
  {
    id: 10,
    name: "India (Mumbai)",
    coordinates: [72.8777, 19.0760],
    metrics: {
      sentiment: 87,
      articles: 160,
      studentsEnrolled: 3500,
      investmentToDate: 16000000,
      futureRequirements: 10000000,
      socialMetrics: {
        twitter: {
          mentions: 780,
          sentiment: 86
        },
        linkedin: {
          mentions: 650,
          sentiment: 88
        },
        news: {
          mentions: 230,
          sentiment: 87
        }
      }
    },
    recommendations: {
      highCost: [
        "Data center expansion",
        "Power grid enhancement",
        "Network infrastructure"
      ],
      mediumCost: [
        "Cooling systems upgrade",
        "Security modernization",
        "Staff facilities"
      ],
      lowCost: [
        "Skills development",
        "Community outreach",
        "Energy efficiency"
      ]
    }
  }
];