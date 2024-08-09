import { useState } from 'react';
import { useLoaderData } from '@remix-run/react';
import { Page } from '@shopify/polaris';
import { customersSingleLoader } from '~/.server/admin/loaders/customers.single.loader';
import { adminCustomersCrudActions } from '~/.server/admin/actions/customers.crud.actions';
import { EAdminNavigation } from '~/admin/constants/navigation.constant';
import { CustomersSingle } from '~/admin/components/CustomersSingle/CustomersSingle';
import { DeleteCustomerModal } from '~/admin/components/CustomersSingle/DeleteCustomerModal';

export const loader = customersSingleLoader;

export const action = adminCustomersCrudActions;

export default function AdminCustomerSingle() {
  const { customer } = useLoaderData<typeof loader>();
  const [modalActive, setModalActive] = useState(false);

  return (
    <Page
      title={`${customer.firstName} ${customer.lastName}`}
      backAction={{ url: EAdminNavigation.customers }}
      secondaryActions={[
        {
          content: 'Delete customer',
          accessibilityLabel: 'Delete customer',
          destructive: true,
          onAction: () => setModalActive((s) => !s),
        },
        {
          content: 'Security',
          accessibilityLabel: 'Security',
          url: `${EAdminNavigation.customers}/${customer.id}/security`,
        },
      ]}
    >
      <CustomersSingle customer={customer} />
      <DeleteCustomerModal
        id={customer.id}
        modalActive={modalActive}
        setModalActive={setModalActive}
      />
    </Page>
  );
}
