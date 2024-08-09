import { Product } from '@prisma/client';
import { redirect } from '@remix-run/react';
import { validationError } from 'remix-validated-form';
import { prisma } from '~/.server/shared/utils/prisma.util';
import { EAdminNavigation } from '~/admin/constants/navigation.constant';

export async function adminProductsDeleteAction(product: Product) {
  if (product.deletedAt) {
    return validationError({
      fieldErrors: { error: 'Product already deleted' },
    });
  }

  await prisma.product.update({
    where: { id: product.id },
    data: { deletedAt: new Date() },
  });
  return redirect(EAdminNavigation.products);
}
