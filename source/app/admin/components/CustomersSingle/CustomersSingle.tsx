// CustomersSingle.tsx
import { BlockStack, Layout } from '@shopify/polaris';
import { FC } from 'react';
import { TCustomerDto } from '~/.server/admin/dto/customer.dto';
import { PrimaryInfoCard } from '~/admin/components/CustomersSingle/PrimaryInfoCard';

export type CustomersSingleProps = {
  customer: TCustomerDto;
};

export const CustomersSingle: FC<CustomersSingleProps> = ({ customer }) => {
  return (
    <Layout>
      <Layout.Section>
        <BlockStack gap='500'>
          <PrimaryInfoCard customer={customer} />
        </BlockStack>
      </Layout.Section>
    </Layout>
  );
};
