'use client';

import MainFlowStep from '@/components/MainFlowStep';
import Visa from '@/icons/Visa';
import { useRouter } from 'next/navigation';
import { useMemo } from 'react';
import { useFormContext } from 'react-hook-form';

export default function Review() {
  const { push } = useRouter();
  const { watch } = useFormContext();

  const lastFour = useMemo(() => {
    const fullNumber: number = watch('number');
    return fullNumber.toString().substring(12);
  }, []);

  return (
    <MainFlowStep
      stepNum={2}
      title="Review and pay"
      shouldSubmit
      continueBtnOnClick={(e) => {
        push('/thank-you');
      }}
      continueBtnTitle="Pay XXX"
    >
      <p className="text-xl mb-6">
        You're about to make a payment of <b>$600.00</b>
      </p>
      <div className="text-sm font-bold text-textSecondary">Payment method</div>
      <div className="flex mb-11 items-center">
        <Visa />
        <span className="text-sm ml-3">Card ending in ****{lastFour}</span>
      </div>
    </MainFlowStep>
  );
}
