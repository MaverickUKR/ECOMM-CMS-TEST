// products.loader.ts
import { json } from '@remix-run/node';
import { prisma } from '../../../.server/shared/utils/prisma.util';
import { productMapper } from '../../../.server/admin/mappers/products.mapper';

export const adminProductsLoader = async () => {
  const products = await prisma.product.findMany({
    include: {
      images: true,
      reviews: true,
      category: true,
    },
  });
  const productDtos = products.map(productMapper);

  return json({ products: productDtos });
};
