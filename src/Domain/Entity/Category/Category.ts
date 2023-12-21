export interface Category {
  id: string;
  name: string;
  description: string;
  imageCover?: string;
  relatedCategories?: string[];
}

export interface CategoryInput {
  name?: string;
  description?: string;
  imageCover?: string;
  relatedCategories?: string[];
}
