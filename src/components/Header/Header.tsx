import classNames from "classnames";
import styles from "./index.module.scss";
import { navs } from "./navigation";
import Link from "next/link";

export const Header = () => {
  const headerContainer = classNames("container", styles.flex);
  return (
    <header className={styles.header}>
      <div className={headerContainer}>
        <h1>Pokemon world</h1>
        <nav>
          <ul className={styles.navList}>
            {navs.map((nav) => (
              <Link key={nav.name} href={nav.link}>
                {nav.name}
              </Link>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};
