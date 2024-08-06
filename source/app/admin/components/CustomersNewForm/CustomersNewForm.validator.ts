import { withZod } from '@rvf/zod';
import { z } from 'zod';

export const emailRule = z
  .string()
  .trim()
  .min(1, { message: 'Email is required' })
  .email('Must be a valid email');

export const firstNameRule = z
  .string()
  .trim()
  .min(1, { message: 'First Name is required' });
export const lastNameRule = z
  .string()
  .trim()
  .min(1, { message: 'Last Name is required' });
export const passwordRule = z
  .string()
  .trim()
  .min(8, { message: 'Password must be greater than 8' });
export const phoneRule = z
  .string()
  .trim()
  .regex(/^[0-9]{10,15}$/, { message: 'Must be a valid phone number' });
export const noteRule = z
  .string()
  .trim()
  .max(50, { message: 'Note must be less than 50 characters' });
export const passwordConfirmRule = z.string();

export const customersNewFormValidator = withZod(
  z
    .object({
      email: emailRule,
      firstName: firstNameRule,
      lastName: lastNameRule,
      password: passwordRule,
      passwordConfirm: passwordConfirmRule,
      phone: phoneRule,
      note: noteRule,
    })
    .refine((data) => data.password === data.passwordConfirm, {
      message: "Passwords don't match",
      path: ['passwordConfirm'], // path of error
    })
);
