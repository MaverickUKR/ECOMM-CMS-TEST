import { ActionFunctionArgs, redirect } from '@remix-run/node';
import { authenticator } from '~/.server/admin/services/auth.service';
import { EAdminNavigation } from '~/admin/constants/navigation.constant';
import { prisma } from '~/.server/shared/utils/prisma.util';

export async function adminUsersDeleteAction({
  request,
  params,
}: ActionFunctionArgs) {
  await authenticator.isAuthenticated(request, {
    failureRedirect: EAdminNavigation.authLogin,
  });

  const { id } = params;
  if (!id) {
    return redirect(EAdminNavigation.users);
  }

  // Удалить пользователя
  await prisma.user.delete({
    where: { id: Number(id) },
  });

  // Перенаправить на список пользователей
  return redirect(EAdminNavigation.users);
}
