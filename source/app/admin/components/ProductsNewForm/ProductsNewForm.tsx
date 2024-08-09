// ProductsNewForm.tsx
import { BlockStack, Layout } from '@shopify/polaris';
import { ProductsPrimaryInfoCard } from '../../../admin/components/ProductsNewForm/ProductsPrimaryInfoCard';

export const ProductsNewForm = () => {
  return (
    <Layout>
      <Layout.Section>
        <BlockStack gap='500'>
          <ProductsPrimaryInfoCard />
        </BlockStack>
      </Layout.Section>
    </Layout>
  );
};
