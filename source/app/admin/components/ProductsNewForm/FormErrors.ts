export interface FormErrors {
  slug?: string;
  title?: string;
  description?: string;
  price?: string;
  compareAtPrice?: string;
  costPerItem?: string;
  quantity?: string;
  sku?: string;
  barcode?: string;
  status?: string;
  categoryId?: string;
  avgRating?: string;
  totalReviews?: string;
  images?: { image?: string }[];
}
