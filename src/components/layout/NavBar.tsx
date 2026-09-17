"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/lib/nav";
import { getActiveLink } from "@/lib/nav/getActiveLink";

export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 bg-background-secondary opacity-95 border-y select-none z-10">
      <ul className="flex flex-row items-center justify-between max-w-225 mx-auto py-2.5 px-6 font-normal md:py-3 lg:py-4">
        {navLinks.map(({ label, href }) => {
          const isActive = getActiveLink(pathname, href);
          return (
            <li key={label} className="">
              <Link
                href={href}
                className={`link hover:underline ${isActive ? "text-foreground-muted" : ""}`}
              >
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
