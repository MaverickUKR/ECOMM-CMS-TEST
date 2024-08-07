// CustomersSingle.tsx
import { BlockStack, Layout } from '@shopify/polaris';
import { FC } from 'react';
import {
  TCustomerDto,
  TCustomerAddressDto,
} from '~/.server/admin/dto/customer.dto';
import { PrimaryInfoCard } from '~/admin/components/CustomersSingle/PrimaryInfoCard';
import { PrimaryAddressInfoCard } from './PrimaryAddressInfoCard';

export type CustomersSingleProps = {
  customer: TCustomerDto;
  address: TCustomerAddressDto;
};

export const CustomersSingle: FC<CustomersSingleProps> = ({
  customer,
  address,
}) => {
  return (
    <Layout>
      <Layout.Section>
        <BlockStack gap='500'>
          <PrimaryInfoCard customer={customer} />
          <PrimaryAddressInfoCard address={address} />
        </BlockStack>
      </Layout.Section>
    </Layout>
  );
};
