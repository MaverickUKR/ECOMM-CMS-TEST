import { withZod } from '@rvf/zod';
import { z } from 'zod';

export const productsNewFormValidator = withZod(
  z.object({
    slug: z
      .string()
      .min(1, 'Slug is required')
      .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'Invalid slug format'),
    title: z.string().min(1, 'Title is required'),
    description: z.string().optional(),
    price: z
      .string()
      .refine((val) => !isNaN(Number(val)), 'Price must be a number'),
    compareAtPrice: z
      .string()
      .optional()
      .refine(
        (val) => val === undefined || !isNaN(Number(val)),
        'Compare at price must be a number'
      ),
    costPerItem: z
      .string()
      .optional()
      .refine(
        (val) => val === undefined || !isNaN(Number(val)),
        'Cost per item must be a number'
      ),
    quantity: z
      .string()
      .refine((val) => !isNaN(Number(val)), 'Quantity must be a number'),
    sku: z.string().optional(),
    barcode: z.string().optional(),
    status: z.enum(['ACTIVE', 'DRAFT']),
    categoryId: z.number().positive('Invalid category ID'),
    avgRating: z
      .string()
      .refine((val) => !isNaN(Number(val)), 'Average rating must be a number'),
    totalReviews: z
      .string()
      .refine((val) => !isNaN(Number(val)), 'Total reviews must be a number'),
    images: z
      .array(
        z.object({
          image: z.string().url('Invalid image URL'),
        })
      )
      .optional(),
  })
);
