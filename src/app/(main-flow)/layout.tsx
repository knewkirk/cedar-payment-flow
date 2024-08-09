'use client';

import { useCallback } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

interface PaymentData {
  number: number;
  expires: string;
  securityCode: number;
  name: string;
  zipCode: number;
}

export default function MainFlowLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const methods = useForm<PaymentData>();
  const onSubmit = useCallback((data: PaymentData) => {
    console.log('Form Submitted! Data:', data);
  }, []);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
}
