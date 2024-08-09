import { Customer, CustomerAddress } from '@prisma/client';
import {
  TCustomerDto,
  TCustomerAddressDto,
} from '../../../.server/admin/dto/customer.dto';

export const customerMapper = (
  customer: Customer & { addresses: CustomerAddress[] }
): TCustomerDto => {
  return {
    id: String(customer.id),
    firstName: customer.firstName,
    lastName: customer.lastName,
    email: customer.email,
    password: customer.password,
    phone: customer.phone,
    note: customer.note,
    createdAt: customer.createdAt.toJSON(),
    updatedAt: customer.updatedAt.toJSON(),
    deletedAt: customer.deletedAt ? customer.deletedAt.toJSON() : null,
    addresses: customer.addresses.map(customerAddressMapper),
  };
};

export const customerAddressMapper = (
  addresses: CustomerAddress
): TCustomerAddressDto => {
  return {
    id: String(addresses.id),
    customerId: addresses.customerId,
    country: addresses.country,
    firstName: addresses.firstName,
    lastName: addresses.lastName,
    company: addresses.company,
    address: addresses.address,
    apartment: addresses.apartment,
    city: addresses.city,
    postalCode: addresses.postalCode,
    phone: addresses.phone,
    createdAt: addresses.createdAt.toJSON(),
    updatedAt: addresses.updatedAt.toJSON(),
  };
};

// import { Customer, CustomerAddress } from '@prisma/client';
// import {
//   TCustomerDto,
//   TCustomerAddressDto,
// } from '~/.server/admin/dto/customer.dto';

// export const customerMapper = (
//   customer: Customer & { addresses: CustomerAddress[] }
// ): TCustomerDto => {
//   return {
//     id: String(customer.id),
//     firstName: customer.firstName,
//     lastName: customer.lastName,
//     email: customer.email,
//     password: customer.password,
//     phone: customer.phone,
//     note: customer.note,
//     createdAt: customer.createdAt.toJSON(),
//     updatedAt: customer.updatedAt.toJSON(),
//     deletedAt: customer.deletedAt ? customer.deletedAt.toJSON() : null,
//     addresses: customer.addresses.map(customerAddressMapper),
//   };
// };

// export const customerAddressMapper = (
//   addresses: CustomerAddress
// ): TCustomerAddressDto => {
//   return {
//     id: String(addresses.id),
//     customerId: addresses.customerId,
//     country: addresses.country,
//     firstName: addresses.firstName,
//     lastName: addresses.lastName,
//     company: addresses.company,
//     address: String(addresses.address),
//     apartment: addresses.apartment,
//     city: addresses.city,
//     postalCode: addresses.postalCode,
//     phone: addresses.phone,
//     createdAt: addresses.createdAt.toJSON(),
//     updatedAt: addresses.updatedAt.toJSON(),
//   };
// };
