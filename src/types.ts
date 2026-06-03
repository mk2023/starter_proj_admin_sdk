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
  milesRequired: number;
  isVisited: boolean;
}
