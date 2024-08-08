// // ProductsNewForm.tsx
// import { BlockStack, Layout } from '@shopify/polaris';
// import { ProductsPrimaryInfoCard } from '~/admin/components/ProductsNewForm/ProductsPrimaryInfoCard';
// // import { SecurityCard } from '~/admin/components/CustomersNewForm/SecurityCard';
// // import { PrimaryCustomerAddress } from './PrimaryCustomerAddress';

// export const ProductsNewForm = () => {
//   return (
//     <Layout>
//       <Layout.Section>
//         <BlockStack gap='500'>
//           <ProductsPrimaryInfoCard />
//           {/* <PrimaryCustomerAddress /> */}
//           {/* <SecurityCard /> */}
//         </BlockStack>
//       </Layout.Section>
//     </Layout>
//   );
// };
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
