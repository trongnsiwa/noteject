import { Color } from './color.model';

export interface Label {
  id: number;
  name: string;
  color: Color;
}

export interface LabelInput {
  name: string;
  colorId: number;
}
