import Link from 'next/link';
import {
  ButtonHTMLAttributes,
  MouseEventHandler,
  PropsWithChildren,
} from 'react';

interface ClickButtonProps {
  className?: string;
  kind: 'button';
  type: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  title: string;
  onClick: MouseEventHandler;
  href?: never;
}

interface LinkButtonProps {
  className?: string;
  kind: 'link';
  type?: never;
  title: string;
  onClick?: never;
  href: string;
}

type Props = ClickButtonProps | LinkButtonProps;

const defaultClassName =
  'flex py-3 px-4 bg-blue rounded-xl text-white font-bold w-full justify-center hover:opacity-90 active:opacity-95 focus:ring-2 focus:ring-offset-2 focus:ring-blue';

export default function Button({
  className,
  kind,
  type,
  onClick,
  href,
  title,
}: Props) {
  return (
    <>
      {kind === 'button' ? (
        <button
          className={`${className} ${defaultClassName}`}
          onClick={onClick}
          type={type}
        >
          {title}
        </button>
      ) : (
        <Link
          className={`${className} ${defaultClassName}`}
          href={href}
        >
          {title}
        </Link>
      )}
    </>
  );
}
