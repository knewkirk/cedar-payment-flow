import { PropsWithChildren } from 'react';

interface Props {
  stepNum: number;
}

export default function CircleStepNum({ stepNum }: Props) {
  return (
    <span className="h-6 w-6 bg-blue flex rounded-full align-middle justify-center text-white font-bold">
      {stepNum}
    </span>
  );
}
