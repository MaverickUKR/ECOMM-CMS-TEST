import { BlockStack, Button, Card, InlineGrid, Text } from '@shopify/polaris';
import { EAdminNavigation } from '~/admin/constants/navigation.constant';
import { EditIcon } from '@shopify/polaris-icons';
import { FC } from 'react';
import {
  TCustomerAddressDto,
  TCustomerDto,
} from '~/.server/admin/dto/customer.dto';

export type PrimaryAddressInfoCardProps = {
  address: TCustomerAddressDto;
  customer: TCustomerDto;
};

export const PrimaryAddressInfoCard: FC<PrimaryAddressInfoCardProps> = ({
  address,
  customer,
}) => {
  return (
    <Card>
      <BlockStack gap='200'>
        <InlineGrid columns='1fr auto'>
          <Text as='h2' variant='headingSm'>
            Primary info
          </Text>
          {/* <Button
            url={`${EAdminNavigation.customers}/${customer.id}/primary`}
            accessibilityLabel='Export variants'
            icon={EditIcon}
          /> */}
        </InlineGrid>
        <BlockStack gap='200'>
          <Text as='h3' variant='headingXs' fontWeight='medium'>
            Company
          </Text>
          <Text as='p' variant='bodyMd'>
            {address?.company}
          </Text>
          <Text as='h3' variant='headingXs' fontWeight='medium'>
            Country
          </Text>
          <Text as='p' variant='bodyMd'>
            {address?.country}
          </Text>
        </BlockStack>
        <BlockStack gap='200'>
          <Text as='h3' variant='headingXs' fontWeight='medium'>
            City
          </Text>
          <Text as='p' variant='bodyMd'>
            {address?.city}
          </Text>
        </BlockStack>
        <BlockStack gap='200'>
          <Text as='h3' variant='headingXs' fontWeight='medium'>
            Address
          </Text>
          <Text as='p' variant='bodyMd'>
            {address?.address}
          </Text>
        </BlockStack>
        <BlockStack gap='200'>
          <Text as='h3' variant='headingXs' fontWeight='medium'>
            Postal code
          </Text>
          <Text as='p' variant='bodyMd'>
            {address?.postalCode}
          </Text>
        </BlockStack>
      </BlockStack>
    </Card>
  );
};
