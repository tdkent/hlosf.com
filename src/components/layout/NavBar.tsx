import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="sticky top-0 bg-background-secondary opacity-95 border-y border-border select-none">
      <ul className="w-full my-3 flex flex-row items-center font-light md:text-lg">
        <li className="w-1/3 text-left pl-4 md:pl-8 xl:text-center">
          <Link href="/">Home</Link>
        </li>
        <li className="w-1/3 text-center">
          <Link href="/landmarks">Landmarks</Link>
        </li>
        <li className="w-1/3 text-right xl:text-center pr-4 md:pr-8">
          <Link href="/guide">Guide</Link>
        </li>
      </ul>
    </nav>
  );
}
