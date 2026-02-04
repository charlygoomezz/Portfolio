import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  email: z.email({
    message: 'Please enter a valid email.',
  }),
  company: z.string().min(2, {
    message: 'Company name must be at least 2 characters.',
  }),
  phone: z
    .string()
    .min(10, {
      message: 'Phone number must be at least 10 digits.',
    })
    .max(15, {
      message: 'Phone number must be at most 15 digits.',
    }),
  message: z.string().min(10, {
    message: 'Message must be at least 10 characters.',
  }),
});

export type ContactFormType = z.infer<typeof contactFormSchema>;
