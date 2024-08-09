interface Props {
  className?: string;
}

export default function Alert({ className }: Props) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
    >
      <path
        fill="#C34648"
        fill-rule="evenodd"
        d="M3 12a9 9 0 1 1 18 0 9 9 0 0 1-18 0Zm9-11a11 11 0 1 0 0 22 11 11 0 0 0 0-22Zm-1.5 7c0-1 .5-2 1.5-2s1.5 1 1.5 2 0 6-1.5 6-1.5-5-1.5-6Zm.5 8c0-.6.4-1 1-1a1 1 0 1 1 0 2 1 1 0 0 1-1-1Z"
        clip-rule="evenodd"
      />
    </svg>
  );
}
