import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col gap-8 pt-8 pb-12 bg-background-secondary border-t text-center">
      <ul className="flex flex-col gap-4">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/landmarks">Landmarks</Link>
        </li>
        <li>
          <Link href="/guide">Guide</Link>
        </li>
      </ul>
      <span className="text-sm">
        © {new Date().getFullYear()}. All rights reserved.{" "}
        <Link href="/disclaimer">Privacy & Terms</Link>
      </span>
    </footer>
  );
}
