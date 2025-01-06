import { Hotspot } from '../lib/types';

export const hotspots: Hotspot[] = [
  {
    id: 1,
    name: "US East (N. Virginia)",
    coordinates: [-77.0469, 38.8048],
    metrics: {
      sentiment: 92,
      articles: 245,
      studentsEnrolled: 5600,
      investmentToDate: 25000000,
      futureRequirements: 15000000
    },
    recommendations: {
      highCost: [
        "Expand data center capacity",
        "Implement advanced cooling systems",
        "Upgrade power infrastructure"
      ],
      mediumCost: [
        "Enhance security systems",
        "Implement AI monitoring",
        "Upgrade network infrastructure"
      ],
      lowCost: [
        "Staff training programs",
        "Energy efficiency optimization",
        "Regular maintenance schedules"
      ]
    }
  },
  {
    id: 2,
    name: "US West (Oregon)",
    coordinates: [-122.6784, 45.5155],
    metrics: {
      sentiment: 88,
      articles: 180,
      studentsEnrolled: 3200,
      investmentToDate: 18000000,
      futureRequirements: 12000000
    },
    recommendations: {
      highCost: [
        "Renewable energy integration",
        "Network backbone upgrade",
        "Security infrastructure enhancement"
      ],
      mediumCost: [
        "Cooling system optimization",
        "Backup power systems",
        "Staff facilities upgrade"
      ],
      lowCost: [
        "Environmental monitoring",
        "Energy usage optimization",
        "Emergency response training"
      ]
    }
  },
  {
    id: 3,
    name: "Europe (Ireland)",
    coordinates: [-6.2603, 53.3498],
    metrics: {
      sentiment: 85,
      articles: 165,
      studentsEnrolled: 2800,
      investmentToDate: 16000000,
      futureRequirements: 11000000
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
  },
  {
    id: 4,
    name: "Asia Pacific (Tokyo)",
    coordinates: [139.6917, 35.6895],
    metrics: {
      sentiment: 90,
      articles: 210,
      studentsEnrolled: 4200,
      investmentToDate: 22000000,
      futureRequirements: 14000000
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
      futureRequirements: 10000000
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
  },
  {
    id: 6,
    name: "South America (São Paulo)",
    coordinates: [-46.6333, -23.5505],
    metrics: {
      sentiment: 82,
      articles: 145,
      studentsEnrolled: 2400,
      investmentToDate: 14000000,
      futureRequirements: 9000000
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
    id: 7,
    name: "Canada (Central)",
    coordinates: [-79.3832, 43.6532],
    metrics: {
      sentiment: 86,
      articles: 155,
      studentsEnrolled: 2600,
      investmentToDate: 15000000,
      futureRequirements: 9500000
    },
    recommendations: {
      highCost: [
        "Cold weather infrastructure",
        "Network resilience systems",
        "Power grid enhancement"
      ],
      mediumCost: [
        "Heating system optimization",
        "Security infrastructure",
        "Staff comfort facilities"
      ],
      lowCost: [
        "Energy efficiency programs",
        "Winter operation training",
        "Local community engagement"
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
      futureRequirements: 8500000
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