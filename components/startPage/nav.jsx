"use client";
import Link from "next/link";
import classes from "./nav.module.scss";
import useAuth from "@/hooks/useAuth";
import { FaCartPlus } from "react-icons/fa6";
import { IoPersonSharp } from "react-icons/io5";

const Navbar = () => {
  const user = useAuth();

  const linkData = [
    { href: "/walk", title: "산책", subTitle: ["walk"] },
    { href: "/service", title: "서비스", subTitle: ["training", "care "] },
    { href: "/care", title: "정기케어", subTitle: ["Regular care"] },
    {
      href: "/community",
      title: "COMMUNITY",
      subTitle: ["about us", "faq", "event"],
    },
  ];

  return (
    <div className={classes.section}>
      <div className={classes.headSection}>
        <Link href="/">NOTICE</Link>
        <Link href="/">
          <img className={classes.logo} src="/logo.png" alt="" />
        </Link>

        <div className={classes.userContainer}>
          {user ? (
            <div className={classes.userName}>welcome, {user.name}님</div>
          ) : (
            <div className={classes.userWrap}>
              <Link href="/login">Login</Link>
              <span>/</span>
              <Link href="/login">MYPAGE</Link>
            </div>
          )}
          <div className={classes.mobileCart}>
            <FaCartPlus />
          </div>
          <div className={classes.mobileAbout}>
            <IoPersonSharp />
          </div>
        </div>
      </div>
      <nav className={classes.manuSection}>
        <div className={classes.manuWrap}>
          {linkData.map((links, index) => (
            <div className={classes.manublock} key={index}>
              <Link className={classes.mainTitle} href={links.href}>
                {links.title}
              </Link>
              <div className={classes.subTitle}>
                {links.subTitle.map((sub, subIndex) => (
                  <Link
                    key={subIndex}
                    className={classes.subWrap}
                    href={`/${sub}`}
                  >
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
