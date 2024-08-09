import { json, LoaderFunctionArgs, redirect } from '@remix-run/node';
import { authenticator } from '~/.server/admin/services/auth.service';
import { EAdminNavigation } from '~/admin/constants/navigation.constant';
import { productMapper } from '~/.server/admin/mappers/products.mapper';
import { prisma } from '~/.server/shared/utils/prisma.util';

export async function adminProductsSingleLoader({
  request,
  params,
}: LoaderFunctionArgs) {
  await authenticator.isAuthenticated(request, {
    failureRedirect: EAdminNavigation.authLogin,
  });

  const { id } = params;
  if (!id) {
    return redirect(EAdminNavigation.products);
  }

  // Get product
  const product = await prisma.product.findFirst({
    where: { id: Number(id) },
  });

  // If not exist
  if (!product) {
    return redirect(EAdminNavigation.products);
  }

  return json({ product: productMapper(product) });
}
