export interface Item {
  id: number;
  title: string;
  description: string;
  background: string;
  url?: string;
  color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
}
