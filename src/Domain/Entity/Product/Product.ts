import {DISCOUNT_TYPE} from '../../../Enum/Types';
export interface Product {
  id: string;
  categoryId: string[];
  title: string;
  subtitle: string;
  price: number;
  imageUri: string;
  /* FALTA POR AGREGAR COSAS */
  album: string[];
  characteristics: Characteristics[];
  stock: number;
  sellerId?: string;
  discount?: Discount;
}

export interface Discount {
  name: string;
  amount: number;
  type: DISCOUNT_TYPE.FIXED | DISCOUNT_TYPE.PERCENTAGE;
}
export interface Characteristics {
  icon: string;
  title: string;
  description: string;
}
