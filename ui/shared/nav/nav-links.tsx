"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./nav-links.module.css";

const links = [
  { name: "Home", href: "/" },
  { name: "Meals", href: "/meals" },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={`${styles.navlink} ${
              pathname === link.href ? styles.active : ""
            }`}
          >
            {link.name}
          </Link>
        );
      })}
    </>
  );
}