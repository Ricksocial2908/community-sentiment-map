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
  };
  recommendations: {
    highCost: string[];
    mediumCost: string[];
    lowCost: string[];
  };
}