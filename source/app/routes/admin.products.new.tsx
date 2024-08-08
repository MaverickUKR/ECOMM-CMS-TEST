import { useCallback } from 'react';
import { Page } from '@shopify/polaris';
import { EAdminNavigation } from '../admin/constants/navigation.constant';
import { ProductsNewForm } from '../admin/components/ProductsNewForm/ProductsNewForm';
import { productsNewFormValidator } from '../admin/components/ProductsNewForm/ProductsNewForm.validator';
import { ValidatedForm } from 'remix-validated-form';
import { ValidatedSubmitButton } from '../admin/ui/ValidatedSubmitButton/ValidatedSubmitButton';
import { adminProductsNewAction } from '../.server/admin/actions/products.new.action';

export const action = adminProductsNewAction;

export default function AdminProductsNew() {
  const primaryAction = useCallback(
    () => <ValidatedSubmitButton text='save' variant='primary' />,
    []
  );

  return (
    <ValidatedForm validator={productsNewFormValidator} method='post'>
      <Page
        title='Create new product'
        backAction={{
          url: EAdminNavigation.products,
        }}
        primaryAction={primaryAction()}
      >
        <ProductsNewForm />
      </Page>
    </ValidatedForm>
  );
}
// import { ActionFunctionArgs, redirect } from '@remix-run/node';
// import { authenticator } from '~/.server/admin/services/auth.service';
// import { EAdminNavigation } from '~/admin/constants/navigation.constant';
// import { validationError } from 'remix-validated-form';
// import { customersNewFormValidator } from '~/admin/components/CustomersNewForm/CustomersNewForm.validator';
// import { prisma } from '~/.server/shared/utils/prisma.util';
// import { hashPassword } from '~/.server/shared/utils/auth.util';

// export async function adminCustomersNewAction({ request }: ActionFunctionArgs) {
//   await authenticator.isAuthenticated(request, {
//     failureRedirect: EAdminNavigation.authLogin,
//   });

//   // validate form data
//   const data = await customersNewFormValidator.validate(
//     await request.formData()
//   );

//   if (data.error) {
//     return validationError(data.error);
//   }
//   const { email, password, lastName, firstName, phone, note, addresses } =
//     data.data;

//   // check unique email
//   const exist = await prisma.customer.findFirst({ where: { email } });
//   if (exist) {
//     return validationError({
//       fieldErrors: {
//         email: 'Customer already exists',
//       },
//     });
//   }

//   // create new Customer
//   const newCustomer = await prisma.customer.create({
//     data: {
//       firstName,
//       lastName,
//       email,
//       password: await hashPassword(password),
//       phone,
//       note,
//       addresses: {
//         create: address,
//       },
//     },
//   });

//   return redirect(`${EAdminNavigation.customers}/${newCustomer.id}`);
// }
