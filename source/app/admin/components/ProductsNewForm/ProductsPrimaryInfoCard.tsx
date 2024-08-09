// ProductsPrimaryInfoCard.tsx
import { useActionData } from '@remix-run/react';
import { BlockStack, Card, FormLayout, RadioButton } from '@shopify/polaris';
import { ValidatedTextField } from '../../../admin/ui/ValidatedTextField/ValidatedTextField';
import { FormErrors } from './FormErrors';

export const ProductsPrimaryInfoCard = () => {
  const actionData = useActionData<FormErrors>();

  return (
    <Card>
      <BlockStack gap='200'>
        <FormLayout>
          <ValidatedTextField
            label='Title'
            type='text'
            name='title'
            autoComplete='off'
            error={actionData?.title}
          />
          <ValidatedTextField
            label='Description'
            type='text'
            name='description'
            multiline={4}
            autoComplete='off'
            error={actionData?.description}
          />
          <FormLayout.Group>
            <ValidatedTextField
              label='Price'
              name='price'
              autoComplete='off'
              error={actionData?.price}
            />
            <ValidatedTextField
              label='Compare-at price'
              name='compareAtPrice'
              autoComplete='off'
              error={actionData?.compareAtPrice}
            />
          </FormLayout.Group>
          <ValidatedTextField
            label='Cost Per Item'
            name='costPerItem'
            autoComplete='off'
            error={actionData?.costPerItem}
          />
          <ValidatedTextField
            label='Quantity'
            name='quantity'
            autoComplete='off'
            error={actionData?.quantity}
          />
          <FormLayout.Group>
            <RadioButton
              label='Active'
              id='active'
              name='status'
              value='ACTIVE'
            />
            <RadioButton label='Draft' id='draft' name='status' value='DRAFT' />
            <ValidatedTextField
              label='Images'
              name='images'
              autoComplete='off'
              multiline={4}
              placeholder='Enter image URLs, separated by commas'
            />
          </FormLayout.Group>
        </FormLayout>
      </BlockStack>
    </Card>
  );
};
