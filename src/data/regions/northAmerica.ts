import { Hotspot } from '@/lib/types';

export const northAmericaHotspots: Hotspot[] = [
  {
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
  }
];