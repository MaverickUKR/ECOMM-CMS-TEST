// products.new.action.ts
import { ActionFunctionArgs, redirect } from '@remix-run/node';
import { productsNewFormValidator } from '../../../admin/components/ProductsNewForm/ProductsNewForm.validator';
import { prisma } from '../../../.server/shared/utils/prisma.util';
import { EAdminNavigation } from '../../../admin/constants/navigation.constant';
import { validationError } from 'remix-validated-form';

export async function adminProductsNewAction({ request }: ActionFunctionArgs) {
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

  const imageUrls = images
    ? images.split(',').map((image: string) => ({ image: image.trim() }))
    : [];

  try {
    // create new Product
    const newProduct = await prisma.product.create({
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

    console.log('Product created:', newProduct);
    return redirect(`${EAdminNavigation.products}`);
  } catch (error) {
    console.error('Error creating product:', error);
    throw error;
  }
}
