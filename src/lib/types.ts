export interface Hotspot {
  id: number;
  name: string;
  coordinates: [number, number];
  metrics: {
    sentiment: number;
    articles: number;
    studentsEnrolled: number;
    investmentToDate: number;
    futureRequirements: number;
    socialMetrics: SocialMetrics;
  };
  recommendations: {
    highCost: string[];
    mediumCost: string[];
    lowCost: string[];
  };
}

export interface SocialMetrics {
  twitter: {
    mentions: number;
    sentiment: number;
  };
  linkedin: {
    mentions: number;
    sentiment: number;
  };
  news: {
    mentions: number;
    sentiment: number;
  };
}