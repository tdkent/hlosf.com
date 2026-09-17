import Link from "next/link";
import { navLinks } from "@/lib/nav";

export default function Footer() {
  return (
    <footer className="flex flex-col gap-8 pt-8 pb-12 bg-background-secondary border-t text-center">
      <ul className="flex flex-col gap-4">
        {navLinks.map(({ label, href }) => {
          return (
            <li key={label}>
              <Link href={href}>{label}</Link>
            </li>
          );
        })}
      </ul>
      <span className="text-sm">
        © {new Date().getFullYear()}. All rights reserved.{" "}
        <Link href="/disclaimer">Privacy & Terms</Link>
      </span>
    </footer>
  );
}
