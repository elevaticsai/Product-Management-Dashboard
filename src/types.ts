import { LucideIcon } from 'lucide-react';

export interface Metric {
  label: string;
  value: string | number;
  icon: LucideIcon;
}

export interface ChartData {
  name: string;
  value: number;
}

export interface Chart {
  title: string;
  data: ChartData[];
}

export interface ListItem {
  label: string;
  value: string | number;
}

export interface List {
  title: string;
  items: ListItem[];
}

export interface Phase {
  id: string;
  title: string;
  metrics: Metric[];
  progress: number;
  gradientFrom: string;
  gradientTo: string;
  charts: {
    pie?: Chart;
    bar?: Chart;
  };
  lists: List[];
}