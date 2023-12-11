import {Product} from '../Product/Product';

export interface SectionFeed {
  title: string;
  query: string;
  data: Product[];
  tag: string;
}
