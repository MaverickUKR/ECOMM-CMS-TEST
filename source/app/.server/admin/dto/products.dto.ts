import { Category, Product, ProductImage, ProductReview } from '@prisma/client';

type ExcludedField = 'id' | 'createdAt' | 'updatedAt' | 'deletedAt';

export type TCategoryDto = Omit<Category, ExcludedField> & {
  id: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
};

export type TProductDto = Omit<Product, ExcludedField> & {
  id: string;
  description: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
  images: TProductImageDto[];
  reviews: TProductReviewDto[];
  category: TCategoryDto;
  // categoryId: string;
  price: string;
  compareAtPrice: string | null;
  costPerItem: string | null;
  quantity: string;
  avgRating: string;
  totalReviews: string;
};

export type TProductImageDto = Omit<ProductImage, ExcludedField> & {
  id: string;
  productId: number;
  image: string;
};

export type TProductReviewDto = Omit<ProductReview, ExcludedField> & {
  id: string;
  productId: number;
  customerId: number;
  review: string;
  rate: string;
  createdAt: string;
  updatedAt: string;
};
