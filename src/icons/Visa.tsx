interface Props {
  className?: string;
}

export default function Visa({ className }: Props) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
    >
      <path
        fill="#224DBA"
        fill-rule="evenodd"
        d="M0 6.3C0 5 1 4 2.3 4h19.4C23 4 24 5 24 6.3v12.4c0 1.3-1 2.3-2.3 2.3H2.3C1 21 0 20 0 18.7V6.3Z"
        clip-rule="evenodd"
      />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M8.2 15.3H6.8l-1-4-.4-.5-1.3-.4v-.2h2.3c.3 0 .5.3.6.5l.5 3L9 10.2h1.4l-2.1 5.1Zm2.9 0H9.7l1.1-5h1.4l-1.1 5Zm2.8-3.6c0-.3.3-.5.5-.5.5 0 1 0 1.3.3l.3-1.1c-.4-.2-.9-.3-1.3-.3-1.2 0-2.2.7-2.2 1.7 0 .8.7 1.1 1.1 1.4.6.2.7.4.7.6 0 .4-.4.5-.8.5s-1-.1-1.3-.3l-.3 1.1 1.5.3c1.4 0 2.3-.7 2.3-1.7 0-1.4-1.8-1.5-1.8-2Zm6.5 3.6-1-5h-1.2c-.3 0-.5 0-.6.3l-2 4.7H17l.3-.7H19l.2.7h1.2Zm-2-3.7.4 2h-1.1l.7-2Z"
        clip-rule="evenodd"
      />
    </svg>
  );
}
