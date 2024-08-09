import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="h-20 border-b border-slate-200 px-4 py-5 bg-white">
      <Link href="/">
        <Image
          src="/abc-logo.svg"
          alt="ABC Health Systems"
          width="155"
          height="38"
        />
      </Link>
    </header>
  );
}
