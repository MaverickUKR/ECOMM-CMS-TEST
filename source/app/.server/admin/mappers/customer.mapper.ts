import { Customer } from '@prisma/client';
import { TCustomerDto } from '~/.server/admin/dto/customer.dto';

export const customerMapper = (customer: Customer): TCustomerDto => {
  return {
    id: String(customer.id),
    email: customer.email,
    phone: customer.phone,
    note: customer.note,
    fullName: customer.fullName,
    createdAt: customer.createdAt.toJSON(),
    updatedAt: customer.updatedAt.toJSON(),
    deletedAt: customer.deletedAt ? customer.deletedAt.toJSON() : null,
  };
};
