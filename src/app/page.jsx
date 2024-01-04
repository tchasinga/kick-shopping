import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="flex items-center justify-between">
        <Link className="text-slate-900 text-2xl font-medium" href="/">KICK SHOP</Link>
        <nav className="flex gap-2 items-center">
          <Link href={""}>Home</Link>
          <Link href={""}>Shop</Link>
          <Link href={""}>About</Link>
          <Link href={""}>Contact</Link>
          <Link href={""}>Loging</Link>
        </nav>
      </header>
    </>
  );
}
