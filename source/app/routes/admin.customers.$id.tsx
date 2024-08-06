// import { useLoaderData, Link, Form } from '@remix-run/react';
// import { customersSingleLoader } from '../.server/admin/loaders/customers.single.loader';
// import { customersDeleteAction } from '../.server/admin/actions/customers.delete.action';
// import { ActionFunction, LoaderFunction } from '@remix-run/node';

// export const loader: LoaderFunction = async (args) => {
//   return customersSingleLoader(args);
// };

// export const action: ActionFunction = async (args) => {
//   return customersDeleteAction(args);
// };

// export default function CustomerDetails() {
//   // const { customer } = useLoaderData();
//   const customer = useLoaderData<typeof loader>();

//   return (
//     <div>
//       <h1>
//         {customer.firstName} {customer.lastName}
//       </h1>
//       <p>Email: {customer.email}</p>
//       <p>Phone: {customer.phone}</p>
//       <p>Note: {customer.note}</p>
//       <h2>Addresses</h2>
//       <ul>
//         {customer.addresses.map((address) => (
//           <li key={address.id}>
//             {address.address}, {address.city}, {address.country}
//           </li>
//         ))}
//       </ul>
//       <Link to={`/admin/customers/${customer.id}/edit`}>Edit</Link>
//       <Form method='post'>
//         <input type='hidden' name='_method' value='delete' />
//         <button type='submit'>Delete</button>
//       </Form>
//     </div>
//   );
// }

// routes/admin/customers/$id.tsx
import { LoaderFunction, ActionFunction } from '@remix-run/node';
import { customersSingleLoader } from '../.server/admin/loaders/customers.single.loader';
import { customersDeleteAction } from '../.server/admin/actions/customers.delete.action';
import CustomerDetails from '../admin/components/CustomersTable/CustomerDetails';

export const loader: LoaderFunction = async (args) => {
  return customersSingleLoader(args);
};

export const action: ActionFunction = async (args) => {
  return customersDeleteAction(args);
};

export default CustomerDetails;
