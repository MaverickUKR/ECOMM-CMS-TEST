import { useCallback } from 'react';
import { useLoaderData } from '@remix-run/react';
import { Page } from '@shopify/polaris';
import { adminProductsSingleLoader } from '~/.server/admin/loaders/products.single.loader';
import { EAdminNavigation } from '~/admin/constants/navigation.constant';
import { TProductDto } from '~/.server/admin/dto/products.dto';
import { adminProductsPrimaryAction } from '~/.server/admin/actions/products.primary.action';
import { ProductsPrimaryInfoForm } from '../admin/components/ProductsPrimaryInfoForm/ProductsPrimaryInfoForm';
import { ValidatedForm } from 'remix-validated-form';
import { productsNewFormValidator } from '~/admin/components/ProductsNewForm/ProductsNewForm.validator';
import { ValidatedSubmitButton } from '~/admin/ui/ValidatedSubmitButton/ValidatedSubmitButton';

export const loader = adminProductsSingleLoader;
export const action = adminProductsPrimaryAction;

export default function AdminProductsSingle() {
  const { product } = useLoaderData<{ product: TProductDto }>();

  const primaryAction = useCallback(
    () => <ValidatedSubmitButton text='save' variant='primary' />,
    []
  );

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <ValidatedForm validator={productsNewFormValidator} method='post'>
      <Page
        title={`Edit Info: ${product.title}`}
        backAction={{
          url: EAdminNavigation.products,
        }}
        primaryAction={primaryAction()}
      >
        <ProductsPrimaryInfoForm product={product} />
      </Page>
    </ValidatedForm>
  );
}
