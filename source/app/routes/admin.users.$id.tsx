import { useState, useEffect } from 'react';
import { useLoaderData, useSubmit } from '@remix-run/react';
import { Page } from '@shopify/polaris';
import { adminUsersSingleLoader } from '~/.server/admin/loaders/users.single.loader';
import { adminUsersRoleAction } from '~/.server/admin/actions/users.role.action';
import { adminUsersDeleteAction } from '~/.server/admin/actions/users.delete.action';
import { EAdminNavigation } from '~/admin/constants/navigation.constant';
import { UsersSingle } from '~/admin/components/UsersSingle/UsersSingle';
import { LoaderFunctionArgs } from '@remix-run/node';
import { TUserDto } from '~/.server/admin/dto/user.dto';
import DeleteCard from '~/admin/components/UsersSingle/DeleteCard';

export const loader = adminUsersSingleLoader;

export const action = async (args: LoaderFunctionArgs) => {
  const method = args.request.method;

  method === 'DELETE'
    ? adminUsersDeleteAction(args)
    : adminUsersRoleAction(args);
  return null;
};

export default function AdminUsersSingle() {
  const data = useLoaderData<{ user: TUserDto }>();
  const [active, setActive] = useState(false);
  const [mounted, setMounted] = useState(false);
  const submit = useSubmit();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!data || !data.user) {
    return <div>Загрузка...</div>;
  }

  const { user } = data;

  const handleDelete = () => {
    setActive(false);
    submit(null, { method: 'delete', action: `/admin/users/${user.id}` });
  };

  const handleChange = () => setActive(!active);

  return (
    <Page
      title={user.fullName || ''}
      backAction={{
        url: EAdminNavigation.users,
      }}
      secondaryActions={[
        {
          content: 'Remove',
          onAction: handleChange,
          destructive: true,
          accessibilityLabel: 'Delete User',
        },
        {
          content: 'Security',
          accessibilityLabel: 'Security',
          url: `${EAdminNavigation.users}/${user.id}/security`,
        },
      ]}
    >
      <UsersSingle user={user} />
      {mounted && (
        <DeleteCard
          active={active}
          handleChange={handleChange}
          handleDelete={handleDelete}
        />
      )}
    </Page>
  );
}
