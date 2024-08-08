import { Card, IndexTable, Link } from '@shopify/polaris';
import { FC, useMemo } from 'react';
import type { TProductDto } from '~/.server/admin/dto/products.dto';
import type { NonEmptyArray } from '@shopify/polaris/build/ts/src/types';
import { IndexTableHeading } from '@shopify/polaris/build/ts/src/components/IndexTable/IndexTable';
import { EAdminNavigation } from '../../../admin/constants/navigation.constant';
// import { UserRoleBadge } from '~/admin/components/UsersTable/UserRoleBadge';
// import type { TAdminUsersLoaderData } from '~/.server/admin/loaders/users.loader';
// import { AdminUsersTableFilters } from '~/admin/components/UsersTable/UsersTableFilters';
// import { IOffsetPaginationInfoDto } from '~/.server/shared/dto/offset-pagination-info.dto';
// import { usePagination } from '~/admin/hooks/usePagination';

export interface ProductsTableProps {
  products: TProductDto[];
  // query?: TAdminUsersLoaderData['query'];
  // pagination: IOffsetPaginationInfoDto;
}

export const AdminProductsTable: FC<ProductsTableProps> = ({
  products,
  // query,
  // pagination,
}) => {
  // const paginationProps = usePagination(pagination);
  const resourceName = useMemo(
    () => ({
      singular: 'product',
      plural: 'products',
    }),
    []
  );

  const headings: NonEmptyArray<IndexTableHeading> = useMemo(
    () => [
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
          <Link url={`${EAdminNavigation.products}/${id}`}>{title}</Link>
        </IndexTable.Cell>
        <IndexTable.Cell>{title}</IndexTable.Cell>
        <IndexTable.Cell>{status}</IndexTable.Cell>
        <IndexTable.Cell>{quantity}</IndexTable.Cell>
        <IndexTable.Cell>{category.title}</IndexTable.Cell>
        <IndexTable.Cell>{createdAt}</IndexTable.Cell>
        <IndexTable.Cell>{updatedAt}</IndexTable.Cell>
        <IndexTable.Cell>{deletedAt}</IndexTable.Cell>
      </IndexTable.Row>
    )
  );

  return (
    <Card padding='0'>
      {/* <AdminUsersTableFilters query={query} /> */}
      <IndexTable
        resourceName={resourceName}
        itemCount={products.length}
        selectable={false}
        headings={headings}
        // pagination={paginationProps}
      >
        {rowMarkup}
      </IndexTable>
    </Card>
  );
};
