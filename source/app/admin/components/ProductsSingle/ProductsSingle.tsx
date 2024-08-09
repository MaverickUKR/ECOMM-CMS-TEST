import { BlockStack, Layout } from '@shopify/polaris';
import { FC } from 'react';
import { TProductDto } from '~/.server/admin/dto/products.dto';
import { ProductsPrimaryInfoForm } from '~/admin/components/ProductsPrimaryInfoForm/ProductsPrimaryInfoForm';
// import { RoleCard } from '~/admin/components/UsersSingle/RoleCard';

export type ProductsSingleProps = {
  product: TProductDto;
};

export const ProductsSingle: FC<ProductsSingleProps> = ({ product }) => {
  return (
    <Layout>
      <Layout.Section>
        <BlockStack gap='500'>
          <ProductsPrimaryInfoForm product={product} />
        </BlockStack>
      </Layout.Section>

      {/* <Layout.Section variant='oneThird'> */}
      {/* <RoleCard user={user} /> */}
      {/* </Layout.Section> */}
    </Layout>
  );
};
