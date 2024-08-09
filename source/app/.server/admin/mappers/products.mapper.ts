import { Product, Category, ProductImage, ProductReview } from '@prisma/client';
import { TProductDto } from '../dto/products.dto';

export const productMapper = (
  product: Product & {
    category: Category | null;
    images: ProductImage[] | null;
    reviews: ProductReview[] | null;
  }
): TProductDto => {
  return {
    id: product.id.toString(),
    title: product.title ?? '',
    description: product.description ?? '',
    price: product.price ?? '',
    compareAtPrice: product.compareAtPrice ?? '',
    costPerItem: product.costPerItem ?? '',
    quantity: product.quantity ?? '',
    sku: product.sku,
    barcode: product.barcode,
    status: product.status,
    avgRating: product.avgRating ?? '',
    totalReviews: product.totalReviews ?? '',
    createdAt: product.createdAt.toISOString(),
    updatedAt: product.updatedAt.toISOString(),
    deletedAt: product.deletedAt ? product.deletedAt.toISOString() : null,
    images: product.images
      ? product.images.map((image) => ({
          id: image.id.toString(),
          productId: image.productId,
          image: image.image,
        }))
      : [],
    reviews: product.reviews
      ? product.reviews.map((review) => ({
          id: review.id.toString(),
          productId: review.productId,
          customerId: review.customerId,
          review: review.review,
          rate: review.rate ?? '',
          createdAt: review.createdAt.toISOString(),
          updatedAt: review.updatedAt.toISOString(),
        }))
      : [],
    category: product.category
      ? {
          id: product.category.id.toString(),
          title: product.category.title,
          description: product.category.description,
          image: product.category.image,
          createdAt: product.category.createdAt.toISOString(),
          updatedAt: product.category.updatedAt.toISOString(),
          deletedAt: product.category.deletedAt
            ? product.category.deletedAt.toISOString()
            : null,
        }
      : null,
    categoryId: product.categoryId,
  };
};
