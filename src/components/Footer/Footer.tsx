"use client"
import classNames from "classnames";
import styles from "./index.module.scss";
import { navs } from "./navigation";

export const Footer = () => {
  const footerContainer = classNames("container", styles.flex);
  return (
    <footer className={styles.footer}>
      <div className={footerContainer}>
        <h3 className={styles.title}>Developed by <span className="highlight">pyropetrick</span></h3>
        <nav>
          <ul className={styles.navList}>
            {navs.map((nav, index) => (
              <li key={index}>
                <a href={nav.link} target="_blank">
                  {nav.icon}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
};
