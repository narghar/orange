import Link from "next/link";

export default function Home() {
  return (
    <nav className="h-screen max-w-screen-sm flex items-center justify-center bg-indigo-700 mx-auto">
      <ul className="text-white uppercase text-4xl leading-relaxed">
        <li>
          <Link href="/kariera">
            <a>Kariera</a>
          </Link>
        </li>
        <li>
          <Link href="/kontakt">
            <a>Kontakt</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
