import Button from '@/components/Button';
import CircleStepNum from '@/components/CircleStepNum';
import { MouseEventHandler, PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
  stepNum: number;
  title: string;
  continueBtnOnClick: MouseEventHandler;
  continueBtnTitle: string;
  shouldSubmit?: boolean;
}

export default function MainFlowStep({
  title,
  children,
  stepNum,
  continueBtnOnClick,
  continueBtnTitle,
  shouldSubmit,
}: Readonly<Props>) {
  return (
    <div className="pt-4 pb-8 px-8 bg-white flex-col md:mt-8 md:pt-9">
      <div className="flex items-center mb-5">
        <CircleStepNum stepNum={stepNum} />
        <h1 className="font-bold ml-4 text-xl">{title}</h1>
      </div>
      {children}
      <Button
        kind="button"
        type={shouldSubmit ? 'submit' : 'button'}
        onClick={continueBtnOnClick}
        title={continueBtnTitle}
      />
    </div>
  );
}
