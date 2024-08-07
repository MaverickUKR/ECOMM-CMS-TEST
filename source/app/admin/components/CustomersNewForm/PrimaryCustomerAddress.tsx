import { BlockStack, Card, FormLayout, Text } from '@shopify/polaris';
import { ValidatedTextField } from '~/admin/ui/ValidatedTextField/ValidatedTextField';

export const PrimaryCustomerAddress = () => {
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
              name='address.company'
              autoComplete='organization'
            />
            <ValidatedTextField
              label='Country'
              type='text'
              name='address.country'
              autoComplete='country-name'
            />
            <ValidatedTextField
              label='City'
              type='text'
              name='address.city'
              autoComplete='address-level2'
            />
          </FormLayout.Group>
          <FormLayout.Group>
            <ValidatedTextField
              label='Postal Code'
              type='text'
              name='address.postalCode'
              autoComplete='postal-code'
            />
            <ValidatedTextField
              label='Address'
              type='text'
              name='address.address'
              autoComplete='street-address'
            />
            <ValidatedTextField
              label='Apartment'
              type='text'
              name='address.apartment'
              autoComplete='address-line2'
            />
          </FormLayout.Group>
        </FormLayout>
      </BlockStack>
    </Card>
  );
};
