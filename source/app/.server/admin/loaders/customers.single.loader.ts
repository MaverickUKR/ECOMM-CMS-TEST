import { json } from '@remix-run/node';
import { prisma } from '~/.server/shared/utils/prisma.util';

export const customersSingleLoader = async ({ params }) => {
  const customer = await prisma.customer.findUnique({
    where: { id: Number(params.id) },
    include: { addresses: true },
  });

  if (!customer) {
    throw new Response('Customer not found', { status: 404 });
  }

  return json({ customer });
};
