import { FC, useMemo } from 'react';
import { Card, IndexTable, Link, Thumbnail } from '@shopify/polaris';
import type { TProductDto } from '~/.server/admin/dto/products.dto';
import type { NonEmptyArray } from '@shopify/polaris/build/ts/src/types';
import { IndexTableHeading } from '@shopify/polaris/build/ts/src/components/IndexTable/IndexTable';
import { EAdminNavigation } from '../../../admin/constants/navigation.constant';

export interface ProductsTableProps {
  products: TProductDto[];
}

export const AdminProductsTable: FC<ProductsTableProps> = ({ products }) => {
  const resourceName = useMemo(
    () => ({
      singular: 'product',
      plural: 'products',
    }),
    []
  );

  const headings: NonEmptyArray<IndexTableHeading> = useMemo(
    () => [
      { title: 'Image' },
      { title: 'Product' },
      { title: 'Status' },
      { title: 'Quantity' },
      { title: 'Category' },
      { title: 'Created at' },
      { title: 'Updated at' },
      { title: 'Deleted at' },
    ],
    []
  );

  const rowMarkup = products.map(
    (
      {
        images,
        title,
        status,
        id,
        quantity,
        category,
        createdAt,
        updatedAt,
        deletedAt,
      },
      index
    ) => (
      <IndexTable.Row id={id} key={id} position={index}>
        <IndexTable.Cell>
          {images && images.length > 0 ? (
            <Thumbnail
              source={images[0].image}
              size='small'
              alt={title || 'No image available'}
            />
          ) : (
            <Thumbnail
              source='https://via.placeholder.com/50'
              size='small'
              alt='No image available'
            />
          )}
        </IndexTable.Cell>
        <IndexTable.Cell>
          <Link url={`${EAdminNavigation.products}/${id}`}>{title}</Link>
        </IndexTable.Cell>
        <IndexTable.Cell>{status}</IndexTable.Cell>
        <IndexTable.Cell>{quantity}</IndexTable.Cell>
        <IndexTable.Cell>
          {category ? category.title : 'No category'}
        </IndexTable.Cell>
        <IndexTable.Cell>{createdAt}</IndexTable.Cell>
        <IndexTable.Cell>{updatedAt}</IndexTable.Cell>
        <IndexTable.Cell>
          {deletedAt ? deletedAt : 'Not deleted'}
        </IndexTable.Cell>
      </IndexTable.Row>
    )
  );

  return (
    <Card padding='0'>
      <IndexTable
        resourceName={resourceName}
        itemCount={products.length}
        selectable={false}
        headings={headings}
      >
        {rowMarkup}
      </IndexTable>
    </Card>
  );
};
