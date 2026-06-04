export interface Run {
  id: string;
  date: string;
  distanceMiles: number;
  durationMinutes: number;
}

export interface Restaurant {
  id: string;
  name: string;
  cuisine: string;
  milesRequired: number
}

export interface VisitedRestaurant {
  id: string;
  name: string;
  cuisine: string;
  visitedAt: string;
}