import { ActionFunctionArgs, redirect } from '@remix-run/node';
import { authenticator } from '~/.server/admin/services/auth.service';
import { EAdminNavigation } from '~/admin/constants/navigation.constant';
import { validationError } from 'remix-validated-form';
import { prisma } from '~/.server/shared/utils/prisma.util';
import { productsNewFormValidator } from '~/admin/components/ProductsNewForm/ProductsNewForm.validator';

export async function adminProductsPrimaryAction({
  request,
  params,
}: ActionFunctionArgs) {
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

  // Validate form data
  const formData = await request.formData();
  const data = await productsNewFormValidator.validate(formData);

  if (data.error) {
    return validationError(data.error);
  }

  const {
    title,
    description,
    price,
    compareAtPrice,
    costPerItem,
    quantity,
    status,
    images,
  } = data.data;

  // Split images string into an array of image URLs
  const imageUrls = images
    ? images.split(',').map((image: string) => ({ image: image.trim() }))
    : [];

  // Update product
  try {
    const updatedProduct = await prisma.product.update({
      where: { id: product.id },
      data: {
        title,
        description,
        price,
        compareAtPrice,
        costPerItem,
        quantity,
        status,
        images: {
          create: imageUrls,
        },
      },
    });

    console.log('Product updated:', updatedProduct);
    // Redirect to product page
    return redirect(`${EAdminNavigation.products}/${updatedProduct.id}`);
  } catch (error) {
    console.error('Error updating product:', error);
    throw error;
  }
}
