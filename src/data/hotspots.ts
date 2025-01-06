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
  {
    id: 2,
    name: "Amazon Basin Initiative",
    coordinates: [-63.0548, -3.4653],
    metrics: {
      sentiment: 82,
      articles: 203,
      studentsEnrolled: 3200,
      investmentToDate: 15800000,
      futureRequirements: 12000000
    },
    recommendations: {
      highCost: [
        "Build sustainable housing complexes",
        "Install solar power grid",
        "Construct medical facilities"
      ],
      mediumCost: [
        "Develop agricultural training centers",
        "Create river transportation network",
        "Establish waste management system"
      ],
      lowCost: [
        "Implement environmental education programs",
        "Create local artisan support network",
        "Develop eco-tourism initiatives"
      ]
    }
  },
  {
    id: 3,
    name: "Sahel Region Project",
    coordinates: [1.6596, 14.4974],
    metrics: {
      sentiment: 65,
      articles: 142,
      studentsEnrolled: 1850,
      investmentToDate: 9200000,
      futureRequirements: 14500000
    },
    recommendations: {
      highCost: [
        "Implement large-scale irrigation systems",
        "Build drought-resistant infrastructure",
        "Develop renewable water sources"
      ],
      mediumCost: [
        "Create agricultural training facilities",
        "Establish food storage systems",
        "Develop local markets"
      ],
      lowCost: [
        "Train farmers in sustainable practices",
        "Create community seed banks",
        "Implement weather monitoring systems"
      ]
    }
  },
  {
    id: 4,
    name: "Arctic Indigenous Program",
    coordinates: [-105.2551, 66.1605],
    metrics: {
      sentiment: 71,
      articles: 98,
      studentsEnrolled: 890,
      investmentToDate: 7500000,
      futureRequirements: 9800000
    },
    recommendations: {
      highCost: [
        "Build climate-controlled greenhouses",
        "Develop renewable heating systems",
        "Construct all-weather transportation"
      ],
      mediumCost: [
        "Create cultural preservation centers",
        "Establish satellite internet infrastructure",
        "Develop emergency response facilities"
      ],
      lowCost: [
        "Document traditional knowledge",
        "Create youth mentorship programs",
        "Implement wildlife monitoring"
      ]
    }
  },
  {
    id: 5,
    name: "Himalayan Communities",
    coordinates: [86.9250, 27.9881],
    metrics: {
      sentiment: 88,
      articles: 167,
      studentsEnrolled: 1560,
      investmentToDate: 11200000,
      futureRequirements: 8900000
    },
    recommendations: {
      highCost: [
        "Build avalanche protection systems",
        "Develop hydroelectric infrastructure",
        "Create mountain rescue facilities"
      ],
      mediumCost: [
        "Establish mountain farming initiatives",
        "Create textile production centers",
        "Develop eco-tourism facilities"
      ],
      lowCost: [
        "Train local guides",
        "Create artisan cooperatives",
        "Implement weather monitoring"
      ]
    }
  }
];