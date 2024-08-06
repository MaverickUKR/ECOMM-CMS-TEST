import { Customer, CustomerAddress } from '@prisma/client';

export type CustomerWithAddresses = Customer & {
  addresses: CustomerAddress[];
};
