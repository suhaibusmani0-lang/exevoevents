export interface Subcategory {
  name: string;
  slug: string;
  image: string;
  description?: string;
}

export interface Category {
  title: string;
  slug: string;
  image: string;
  subcategories: Subcategory[];
}
