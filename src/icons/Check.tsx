interface Props {
  className?: string;
}

export default function Check({ className }: Props) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="24"
      fill="none"
    >
      <path
        stroke="#227C6C"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="m20.5 6-11 11-5-5"
      />
    </svg>
  );
}
