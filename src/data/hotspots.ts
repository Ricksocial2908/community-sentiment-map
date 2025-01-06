import { Hotspot } from '../lib/types';

export const hotspots: Hotspot[] = [
  {
    id: 1,
    name: "Northern Australia Community",
    coordinates: [131.0349, -12.4634],
    metrics: {
      sentiment: 78,
      articles: 156,
      studentsEnrolled: 2450,
      investmentToDate: 12500000,
      futureRequirements: 8750000
    },
    recommendations: {
      highCost: [
        "Establish renewable energy infrastructure",
        "Build new educational facilities",
        "Develop water treatment plant"
      ],
      mediumCost: [
        "Implement vocational training programs",
        "Create community health centers",
        "Upgrade existing school facilities"
      ],
      lowCost: [
        "Launch community engagement programs",
        "Organize cultural preservation workshops",
        "Start mentorship programs"
      ]
    }
  },
  // ... Add more sample data points for other regions
];