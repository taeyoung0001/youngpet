"use client";
import Link from "next/link";
import classes from "./nav.module.scss";
import useAuth from "@/hooks/useAuth";
import { FaCartPlus } from "react-icons/fa6";

const Navbar = () => {
  const user = useAuth();
  console.log(user);

  const linkData = [
    { href: "/home", title: "산책", subTitle: ["walk"] },
    { href: "/home", title: "서비스", subTitle: ["training", "care "] },
    { href: "/home", title: "정기케어", subTitle: ["Regular care"] },
    {
      href: "/home",
      title: "COMMUNITY",
      subTitle: ["about us", "Q&A", "EVENT"],
    },
  ];

  return (
    <div className={classes.section}>
      <div className={classes.headSection}>
        <Link href="/">NOTICE</Link>
        <Link href="/">
          <h2 className={classes.logo}>LOGO</h2>
        </Link>

        <div className={classes.userContainer}>
          {user ? (
            <div className={classes.userName}>welcome, {user.name}</div>
          ) : (
            <div className={classes.userWrap}>
              <Link href="/login">Login</Link>
              <span>/</span>
              <Link href="/login">MYPAGE</Link>
            </div>
          )}
        </div>
      </div>
      <nav className={classes.manuSection}>
        <div className={classes.manuWrap}>
          {linkData.map((links, index) => (
            <div key={index}>
              <Link className={classes.mainTitle} href={links.href}>
                {links.title}
              </Link>
              <div className={classes.subTitle}>
                {links.subTitle.map((sub, subIndex) => (
                  <Link key={subIndex} className={classes.subWrap} href={"/"}>
                    {sub}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className={classes.cart}>
          <FaCartPlus />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
