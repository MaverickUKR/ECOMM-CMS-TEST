import { ActionFunctionArgs, redirect } from '@remix-run/node';
import { authenticator } from '~/.server/admin/services/auth.service';
import { EAdminNavigation } from '~/admin/constants/navigation.constant';
import { validationError } from 'remix-validated-form';
import { customersNewFormValidator } from '~/admin/components/CustomersNewForm/CustomersNewForm.validator';
import { prisma } from '~/.server/shared/utils/prisma.util';
import { hashPassword } from '~/.server/shared/utils/auth.util';
import { joinFirstName } from '~/admin/utils/user.util';

export async function adminUsersNewAction({ request }: ActionFunctionArgs) {
  await authenticator.isAuthenticated(request, {
    failureRedirect: EAdminNavigation.authLogin,
  });

  // validate form data
  const data = await customersNewFormValidator.validate(
    await request.formData()
  );

  if (data.error) {
    return validationError(data.error);
  }

  const { email, password, lastName, firstName, phone, note } = data.data;

  // check unique email
  const exist = await prisma.customer.findFirst({ where: { email } });
  if (exist) {
    return validationError({
      fieldErrors: {
        email: 'Customer already exists',
      },
    });
  }

  // create new Customer
  const newCustomer = await prisma.customer.create({
    data: {
      email,
      password: await hashPassword(password),
      fullName: joinFirstName(firstName, lastName),
      phone,
      note,
    },
  });

  return redirect(`${EAdminNavigation.users}/${newCustomer.id}`);
}