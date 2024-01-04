import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="flex items-center justify-between">
        <Link className="text-slate-900 text-2xl font-medium" href="/">KICK SHOP</Link>
        <nav className="flex gap-2 items-center text-slate-800 font-normal ">
          <Link className="hover:font-medium" href={""}>Home</Link>
          <Link className="hover:font-medium" href={""}>Shop</Link>
          <Link className="hover:font-medium" href={""}>About</Link>
          <Link className="hover:font-medium" href={""}>Contact</Link>
          <Link className="hover:font-medium" href={""}>Loging</Link>
        </nav>
      </header>
    </>
  );
}
