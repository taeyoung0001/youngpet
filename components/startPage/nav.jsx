import Link from "next/link";

export function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">HOME</Link>
        </li>
        <li>
          <Link href="/about">ABOUT</Link>
        </li>
      </ul>
    </nav>
  );
}
