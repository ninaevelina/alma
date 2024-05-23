"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./nav-links.module.scss";

const links = [
  { name: "Home", href: "/" },
  { name: "Meals", href: "/meals" },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <ul>
      {links.map((link) => {
        return (
          <li key={link.name}>
            <Link
              href={link.href}
              className={`${styles.navlink} ${
                pathname === link.href ? styles.active : ""
              }`}
            >
              {link.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
