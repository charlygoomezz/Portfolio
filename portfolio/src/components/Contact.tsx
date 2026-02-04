'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { motion } from 'motion/react';
import { staggerContainer } from '@/lib/animation';
import SectionHeader from '@/components/SectionHeader';
import { Field, FieldDescription, FieldError, FieldGroup, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupTextarea,
} from '@/components/ui/input-group';
import { Button } from '@/components/ui/button';
import { contactFormSchema, type ContactFormType } from '@/schemas/contact';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useForm<ContactFormType>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      company: '',
      phone: '',
      message: '',
    },
  });

  function onSubmit(data: ContactFormType) {
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID!,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID!,
        {
          name: data.name,
          email: data.email,
          company: data.company,
          phone: data.phone,
          message: data.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          toast.success('Message sent successfully 🎉', {
            description: 'Thanks for reaching out. I’ll get back to you soon.',
            position: 'bottom-right',
          });
          form.reset();
        },
        error => {
          console.error('EmailJS error:', error);
          toast.error('Something went wrong ❌', {
            description: 'Please try again later.',
            position: 'bottom-right',
          });
        }
      );
  }

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.8 }}
      variants={staggerContainer(0.6)}
      className="mt-30 scroll-mt-10"
      id="contact"
    >
      <SectionHeader subtitle="Contact" title={`Let's make something awesome together`} />

      <div className="w-full mx-auto mt-10">
        <form id="form-contact" onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FieldGroup>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <Controller
                name="name"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="form-contact-name">Name</FieldLabel>
                    <Input
                      {...field}
                      id="form-contact-name"
                      aria-invalid={fieldState.invalid}
                      placeholder="Your name"
                      autoComplete="off"
                    />
                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                  </Field>
                )}
              />

              <Controller
                name="email"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="form-contact-email">Email</FieldLabel>
                    <Input
                      {...field}
                      id="form-contact-email"
                      aria-invalid={fieldState.invalid}
                      type="email"
                      placeholder="you@example.com"
                      autoComplete="off"
                    />
                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                  </Field>
                )}
              />

              <Controller
                name="company"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="form-contact-company">Company</FieldLabel>
                    <Input
                      {...field}
                      id="form-contact-company"
                      aria-invalid={fieldState.invalid}
                      placeholder="Company name"
                      autoComplete="off"
                    />
                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                  </Field>
                )}
              />

              <Controller
                name="phone"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="form-contact-phone">Phone</FieldLabel>
                    <Input
                      {...field}
                      id="form-contact-phone"
                      aria-invalid={fieldState.invalid}
                      placeholder="+xx xxxxxxxxx"
                      autoComplete="off"
                    />
                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                  </Field>
                )}
              />

              <Controller
                name="message"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid} className="md:col-span-2">
                    <FieldLabel htmlFor="form-contact-message">Message</FieldLabel>
                    <InputGroup>
                      <InputGroupTextarea
                        {...field}
                        id="form-contact-message"
                        placeholder="Write your message..."
                        rows={6}
                        className="min-h-24 resize-none"
                        aria-invalid={fieldState.invalid}
                      />
                      <InputGroupAddon align="block-end">
                        <InputGroupText className="tabular-nums">
                          {field.value.length}/200 characters
                        </InputGroupText>
                      </InputGroupAddon>
                    </InputGroup>
                    <FieldDescription>
                      Include the details of your inquiry or proposal.
                    </FieldDescription>
                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                  </Field>
                )}
              />
            </div>
          </FieldGroup>

          <div className="flex gap-3">
            <Button type="button" variant="outline" onClick={() => form.reset()}>
              Reset
            </Button>
            <Button type="submit">Send message</Button>
          </div>
        </form>
      </div>
    </motion.section>
  );
}
