import { useActionData } from '@remix-run/react';
import { BlockStack, Card, FormLayout, RadioButton } from '@shopify/polaris';
import { ValidatedTextField } from '../../../admin/ui/ValidatedTextField/ValidatedTextField';
import { FormErrors } from './FormErrors';
// import { ValidatedNumberField } from '~/admin/ui/ValidatedNumberField/ValidatedNumberField';

export const ProductsPrimaryInfoCard = () => {
  const actionData = useActionData<FormErrors>();

  return (
    <Card>
      <BlockStack gap='200'>
        <FormLayout>
          {/* <ValidatedTextField
            label='Slug'
            type='text'
            name='slug'
            autoComplete='off'
            error={actionData?.errors?.slug}
          /> */}
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
          {/* <ValidatedNumberField
            label='Category ID'
            name='categoryId'
            autoComplete='off'
            error={actionData?.errors?.categoryId}
          /> */}
          {/* <FormLayout.Group>
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
          /> */}
          {/* <ValidatedTextField
            label='SKU'
            type='text'
            name='sku'
            autoComplete='off'
            error={actionData?.errors?.sku}
          />
          <ValidatedTextField
            label='Barcode'
            type='text'
            name='barcode'
            autoComplete='off'
            error={actionData?.errors?.barcode}
          /> */}
          {/* <FormLayout.Group>
            <RadioButton
              label='Active'
              id='active'
              name='status'
              value='ACTIVE'
            />
            <RadioButton label='Draft' id='draft' name='status' value='DRAFT' />
          </FormLayout.Group> */}
          {/* <ValidatedNumberField
            label='Average Rating'
            name='avgRating'
            autoComplete='off'
            error={actionData?.errors?.avgRating}
          /> */}
          {/* <ValidatedNumberField
            label='Total Reviews'
            name='totalReviews'
            autoComplete='off'
            error={actionData?.errors?.totalReviews}
          /> */}
        </FormLayout>
      </BlockStack>
    </Card>
  );
};
