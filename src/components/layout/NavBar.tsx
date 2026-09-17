import Link from "next/link";
import { navLinks } from "@/lib/nav";

export default function NavBar() {
  return (
    <nav className="sticky top-0 bg-background-secondary opacity-95 border-y select-none z-10">
      <ul className="flex flex-row items-center justify-between max-w-225 mx-auto py-2.5 px-6 md:py-3 lg:py-4 lg:text-lg">
        {navLinks.map(({ label, href }) => {
          return (
            <li key={label} className="">
              <Link href={href} className="link hover:underline">
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
