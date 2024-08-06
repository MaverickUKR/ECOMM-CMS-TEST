import { json } from '@remix-run/node';
import { prisma } from '~/.server/shared/utils/prisma.util';

export const customersLoader = async () => {
  const customers = await prisma.customer.findMany();
  return json({ customers });
};
