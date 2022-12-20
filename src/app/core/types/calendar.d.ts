import { Label, Work } from 'src/app/core';

type InfiniteWorkList = {
  works: Work[];
  placeholders: any[];
  loading: boolean;
  pageToLoadNext: number;
  totalPage: number;
};

type InfiniteLabelList = {
  labels: Label[];
  placeholders: any[];
  loading: boolean;
  pageToLoadNext: number;
  totalPage: number;
};
