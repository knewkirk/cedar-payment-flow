'use client';

import Input from '@/components/Input';
import MainFlowStep from '@/components/MainFlowStep';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';
import { useFormContext } from 'react-hook-form';

export default function PaymentInformation() {
  const { push } = useRouter();

  const {
    formState: { errors },
    handleSubmit,
  } = useFormContext();

  const onContinue = useCallback(
    handleSubmit(() => {
      if (!Object.keys(errors).length) {
        push('/review');
      }
    }),
    [errors]
  );

  return (
    <MainFlowStep
      stepNum={1}
      title="Payment information"
      continueBtnTitle="Continue"
      continueBtnOnClick={onContinue}
    >
      <Input
        className="mb-4"
        label="Card number"
        type="number"
        name="number"
        options={{
          required: true,
          minLength: 16,
          maxLength: 16,
        }}
        placeholder="1234567812345678"
      />
      <div className="flex mb-4">
        <Input
          className="mr-4"
          label="Expires (MM/YY)"
          type="text"
          name="expires"
          options={{
            required: true,
            pattern: /\d{2}\/\d{2}/,
          }}
          placeholder="12/34"
        />
        <Input
          label="Security code (CVV)"
          type="text"
          name="securityCode"
          options={{
            required: true,
            minLength: 3,
            maxLength: 3,
          }}
          placeholder="321"
        />
      </div>
      <Input
        className="mb-4"
        label="Name on card"
        type="text"
        name="name"
        options={{ required: true }}
        placeholder="Jane Doe"
      />
      <Input
        className="mb-4"
        label="ZIP code"
        type="number"
        name="zip"
        options={{ required: true, minLength: 5, maxLength: 5 }}
        placeholder="98765"
      />
    </MainFlowStep>
  );
}
