import { Product, Category, ProductImage, ProductReview } from '@prisma/client';
import { TProductDto } from '../dto/products.dto';

export const productMapper = (
  product: Product & {
    category: Category;
    images: ProductImage[];
    reviews: ProductReview[];
  }
): TProductDto => {
  return {
    id: product.id.toString(),
    slug: product.slug,
    title: product.title,
    description: product.description ?? '',
    price: product.price ?? '',
    compareAtPrice: product.compareAtPrice,
    costPerItem: product.costPerItem,
    quantity: product.quantity ?? '',
    sku: product.sku,
    barcode: product.barcode,
    status: product.status,
    avgRating: product.avgRating ?? '',
    totalReviews: product.totalReviews ?? '',
    createdAt: product.createdAt.toISOString(),
    updatedAt: product.updatedAt.toISOString(),
    deletedAt: product.deletedAt ? product.deletedAt.toISOString() : null,
    images: product.images.map((image) => ({
      id: image.id.toString(),
      productId: image.productId,
      image: image.image,
    })),
    reviews: product.reviews.map((review) => ({
      id: review.id.toString(),
      productId: review.productId,
      customerId: review.customerId,
      review: review.review,
      rate: review.rate ?? '',
      createdAt: review.createdAt.toISOString(),
      updatedAt: review.updatedAt.toISOString(),
    })),
    category: {
      id: product.category.id.toString(),
      title: product.category.title,
      description: product.category.description,
      image: product.category.image,
      createdAt: product.category.createdAt.toISOString(),
      updatedAt: product.category.updatedAt.toISOString(),
      deletedAt: product.category.deletedAt
        ? product.category.deletedAt.toISOString()
        : null,
    },
    categoryId: product.categoryId,
  };
};
// // products.mapper.ts
// import { Product, Category, ProductImage, ProductReview } from '@prisma/client';
// import {
//   TProductDto,
//   TCategoryDto,
//   TProductImageDto,
//   TProductReviewDto,
// } from '~/.server/admin/dto/products.dto';

// export const categoryMapper = (category: Category): TCategoryDto => {
//   return {
//     id: String(category.id),
//     title: category.title,
//     description: category.description,
//     image: category.image,
//     createdAt: category.createdAt.toISOString(),
//     updatedAt: category.updatedAt.toISOString(),
//     deletedAt: category.deletedAt ? category.deletedAt.toISOString() : null,
//   };
// };

// export const productImageMapper = (image: ProductImage): TProductImageDto => {
//   return {
//     id: String(image.id),
//     productId: image.productId,
//     image: image.image,
//   };
// };

// export const productReviewMapper = (
//   review: ProductReview
// ): TProductReviewDto => {
//   return {
//     id: String(review.id),
//     productId: review.productId,
//     customerId: review.customerId,
//     review: review.review,
//     rate: review.rate,
//     createdAt: review.createdAt.toISOString(),
//     updatedAt: review.updatedAt.toISOString(),
//   };
// };

// export const productMapper = (
//   product: Product & {
//     category: Category;
//     images: ProductImage[];
//     reviews: ProductReview[];
//   }
// ): TProductDto => {
//   return {
//     id: String(product.id),
//     slug: product.slug,
//     title: product.title,
//     description: product.description,
//     price: String(product.price),
//     compareAtPrice: String(product.compareAtPrice),
//     costPerItem: String(product.costPerItem),
//     quantity: String(product.quantity),
//     sku: product.sku,
//     barcode: product.barcode,
//     status: product.status,
//     avgRating: String(product.avgRating),
//     totalReviews: String(product.totalReviews),
//     createdAt: product.createdAt.toISOString(),
//     updatedAt: product.updatedAt.toISOString(),
//     deletedAt: product.deletedAt ? product.deletedAt.toISOString() : null,
//     category: categoryMapper(product.category),
//     categoryId: product.categoryId,
//     images: product.images.map(productImageMapper),
//     reviews: product.reviews.map(productReviewMapper),
//   };
// };
// import { Product, Category, ProductImage, ProductReview } from '@prisma/client';
// import {
//   TProductDto,
//   TCategoryDto,
//   TProductImageDto,
//   TProductReviewDto,
// } from '~/.server/admin/dto/products.dto';

// export const categoryMapper = (category: Category): TCategoryDto => {
//   return {
//     id: String(category.id),
//     title: category.title,
//     description: category.description,
//     image: category.image,
//     createdAt: category.createdAt.toISOString(),
//     updatedAt: category.updatedAt.toISOString(),
//     deletedAt: category.deletedAt ? category.deletedAt.toISOString() : null,
//   };
// };

// export const productImageMapper = (image: ProductImage): TProductImageDto => {
//   return {
//     id: String(image.id),
//     productId: image.productId,
//     image: image.image,
//   };
// };

// export const productReviewMapper = (
//   review: ProductReview
// ): TProductReviewDto => {
//   return {
//     id: String(review.id),
//     productId: review.productId,
//     customerId: review.customerId,
//     review: review.review,
//     rate: review.rate,
//     createdAt: review.createdAt.toISOString(),
//     updatedAt: review.updatedAt.toISOString(),
//   };
// };

// export const productMapper = (
//   product: Product & {
//     category: Category;
//     images: ProductImage[];
//     reviews: ProductReview[];
//   }
// ): TProductDto => {
//   return {
//     id: String(product.id),
//     slug: product.slug,
//     title: product.title,
//     description: product.description,
//     price: String(product.price),
//     compareAtPrice: product.compareAtPrice
//       ? String(product.compareAtPrice)
//       : null,
//     costPerItem: product.costPerItem ? String(product.costPerItem) : null,
//     quantity: String(product.quantity),
//     sku: product.sku,
//     barcode: product.barcode,
//     status: product.status,
//     avgRating: String(product.avgRating),
//     totalReviews: String(product.totalReviews),
//     createdAt: product.createdAt.toISOString(),
//     updatedAt: product.updatedAt.toISOString(),
//     deletedAt: product.deletedAt ? product.deletedAt.toISOString() : null,
//     category: categoryMapper(product.category),
//     categoryId: product.categoryId,
//     images: product.images.map(productImageMapper),
//     reviews: product.reviews.map(productReviewMapper),
//   };
// };

// products.mapper.ts
