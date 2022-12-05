import { Label } from './label.model';

export interface Work {
  id: number;
  title: string;
  description: string | undefined;
  date: Date | undefined;
  isDone: boolean;
  labels: Label[] | undefined;
}
