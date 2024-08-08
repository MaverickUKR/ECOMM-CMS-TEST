import { ActionFunctionArgs, redirect } from '@remix-run/node';
import { productsNewFormValidator } from '../../../admin/components/ProductsNewForm/ProductsNewForm.validator';
import { prisma } from '../../../.server/shared/utils/prisma.util';
import { EAdminNavigation } from '../../../admin/constants/navigation.constant';
import { validationError } from 'remix-validated-form';

export async function adminProductsNewAction({ request }: ActionFunctionArgs) {
  // validate form data
  console.log('Action called');
  // validate form data
  const formData = await request.formData();
  const data = await productsNewFormValidator.validate(formData);
  console.log('Form data:', formData);
  console.log('Validation result:', data);
  if (data.error) {
    return validationError(data.error);
  }

  const {
    slug,
    title,
    description,
    price,
    compareAtPrice,
    costPerItem,
    quantity,
    sku,
    barcode,
    status,
    categoryId,
    avgRating,
    totalReviews,
    images,
  } = data.data;

  console.log('Data to be inserted:', {
    slug,
    title,
    description,
    price,
    compareAtPrice,
    costPerItem,
    quantity,
    sku,
    barcode,
    status,
    categoryId,
    avgRating,
    totalReviews,
    images,
  });
  // create new Product
  const newProduct = await prisma.product.create({
    data: {
      slug,
      title,
      description,
      price: price ? price.toString() : null,
      compareAtPrice: compareAtPrice ? compareAtPrice.toString() : null,
      costPerItem: costPerItem ? costPerItem.toString() : null,
      quantity: quantity ? quantity.toString() : null,
      sku,
      barcode,
      status,
      categoryId,
      avgRating: avgRating ? avgRating.toString() : null,
      totalReviews: totalReviews ? totalReviews.toString() : null,
      images: {
        create: images,
      },
    },
  });

  return redirect(`${EAdminNavigation.products}/${newProduct.id}`);
}
