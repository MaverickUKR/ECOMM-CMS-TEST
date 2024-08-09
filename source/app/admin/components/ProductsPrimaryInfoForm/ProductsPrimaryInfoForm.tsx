import { useActionData } from '@remix-run/react';
import { BlockStack, Card, FormLayout, RadioButton } from '@shopify/polaris';
import { ValidatedTextField } from '../../../admin/ui/ValidatedTextField/ValidatedTextField';
import { FormErrors } from '../ProductsNewForm/FormErrors';
import { TProductDto } from '~/.server/admin/dto/products.dto';
import { format } from 'date-fns';

interface ProductsPrimaryInfoFormProps {
  product: TProductDto;
}

export const ProductsPrimaryInfoForm = ({
  product,
}: ProductsPrimaryInfoFormProps) => {
  const actionData = useActionData<FormErrors>();

  const formattedCreatedAt = product.createdAt
    ? format(new Date(product.createdAt), 'Pp')
    : '';
  const formattedUpdatedAt = product.updatedAt
    ? format(new Date(product.updatedAt), 'Pp')
    : '';

  return (
    <Card>
      <BlockStack gap='200'>
        <FormLayout>
          <ValidatedTextField
            label='Title'
            type='text'
            name='title'
            autoComplete='off'
            defaultValue={product.title}
            error={actionData?.title}
          />
          <ValidatedTextField
            label='Description'
            type='text'
            name='description'
            multiline={4}
            autoComplete='off'
            defaultValue={product.description ?? ''}
            error={actionData?.description}
          />
          <FormLayout.Group>
            <ValidatedTextField
              label='Price'
              name='price'
              autoComplete='off'
              defaultValue={product.price ?? ''}
              error={actionData?.price}
            />
            <ValidatedTextField
              label='Compare-at price'
              name='compareAtPrice'
              autoComplete='off'
              defaultValue={product.compareAtPrice ?? ''}
              error={actionData?.compareAtPrice}
            />
          </FormLayout.Group>
          <ValidatedTextField
            label='Cost Per Item'
            name='costPerItem'
            autoComplete='off'
            defaultValue={product.costPerItem ?? ''}
            error={actionData?.costPerItem}
          />
          <ValidatedTextField
            label='Quantity'
            name='quantity'
            autoComplete='off'
            defaultValue={product.quantity ?? ''}
            error={actionData?.quantity}
          />
          <FormLayout.Group>
            <RadioButton
              label='Active'
              id='active'
              name='status'
              value='ACTIVE'
              checked={product.status === 'ACTIVE'}
            />
            <RadioButton
              label='Draft'
              id='draft'
              name='status'
              value='DRAFT'
              checked={product.status === 'DRAFT'}
            />
          </FormLayout.Group>
          <ValidatedTextField
            label='Images'
            name='images'
            autoComplete='off'
            defaultValue={
              product.images
                ? product.images.map((img) => img.image).join(', ')
                : ''
            }
            multiline={4}
            placeholder='Enter image URLs, separated by commas'
          />
          <FormLayout.Group>
            <ValidatedTextField
              label='Created At'
              name='createdAt'
              autoComplete='off'
              defaultValue={formattedCreatedAt}
              readOnly
            />
            <ValidatedTextField
              label='Updated At'
              name='updatedAt'
              autoComplete='off'
              defaultValue={formattedUpdatedAt}
              readOnly
            />
          </FormLayout.Group>
        </FormLayout>
      </BlockStack>
    </Card>
  );
};
