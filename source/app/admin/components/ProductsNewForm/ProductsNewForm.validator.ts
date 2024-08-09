import { withZod } from '@rvf/zod';
import { z } from 'zod';

export const productsNewFormValidator = withZod(
  z.object({
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
    status: z.enum(['ACTIVE', 'DRAFT']),
    images: z.string().optional(), // Assume images are provided as a comma-separated string
  })
);
