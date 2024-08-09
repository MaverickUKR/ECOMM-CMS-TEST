// PrimaryCustomerAddress.tsx
import { BlockStack, Card, FormLayout, Text } from '@shopify/polaris';
import { ValidatedTextField } from '~/admin/ui/ValidatedTextField/ValidatedTextField';
import { FC } from 'react';
import { TCustomerAddressDto } from '~/.server/admin/dto/customer.dto';

export type PrimaryCustomerAddressProps = {
  addresses?: Partial<TCustomerAddressDto>;
};

export const PrimaryCustomerAddress: FC<PrimaryCustomerAddressProps> = ({
  addresses = {},
}) => {
  return (
    <Card>
      <BlockStack gap='200'>
        <Text as='h2' variant='headingSm'>
          Address info
        </Text>
        <FormLayout>
          <FormLayout.Group>
            <ValidatedTextField
              label='Company'
              type='text'
              name='company'
              autoComplete='organization'
              defaultValue={addresses.company || ''}
            />
            <ValidatedTextField
              label='Country'
              type='text'
              name='country'
              autoComplete='country-name'
              defaultValue={addresses.country || ''}
            />
            <ValidatedTextField
              label='City'
              type='text'
              name='city'
              autoComplete='address-level2'
              defaultValue={addresses.city || ''}
            />
          </FormLayout.Group>
          <FormLayout.Group>
            <ValidatedTextField
              label='Postal Code'
              type='text'
              name='postalCode'
              autoComplete='postal-code'
              defaultValue={addresses.postalCode || ''}
            />
            <ValidatedTextField
              label='Address'
              type='text'
              name='address'
              autoComplete='street-address'
              defaultValue={addresses.address || ''}
            />
            <ValidatedTextField
              label='Apartment'
              type='text'
              name='apartment'
              autoComplete='address-line2'
              defaultValue={addresses.apartment || ''}
            />
          </FormLayout.Group>
        </FormLayout>
      </BlockStack>
    </Card>
  );
};
