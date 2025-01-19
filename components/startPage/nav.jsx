"use client";
import Link from "next/link";
import classes from "./nav.module.scss";
import useAuth from "@/hooks/useAuth";

const Navbar = () => {
  const user = useAuth();
  const linkData = [
    { href: "/home", title: "HOME" },
    { href: "/home", title: "산책" },
    { href: "/home", title: "케어서비스" },
    { href: "/home", title: "정기케어" },
    { href: "/home", title: "COMMUNITY" },
  ];
  return (
    <div className={classes.section}>
      <div className={classes.headSection}>
        <Link href="/">LOGO</Link>

        {user ? (
          <div>welcome,{user.name}</div>
        ) : (
          <div className={classes.userWrap}>
            <Link href="/login">Login</Link>
            <Link href="/login">MYPAGE</Link>
          </div>
        )}
      </div>
      <nav className={classes.manuSection}>
        <ul>
          {linkData.map((links) => {
            return (
              <li key={links.title}>
                <Link href={links.href}>{links.title}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
