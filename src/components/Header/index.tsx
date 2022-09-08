import { useRouter } from "next/router"
import { ActiveLink } from "../ActiveLink"

import { SignInButton } from "../SignInButton/index"
import styles from "./styles.module.scss"

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/logo.svg" alt="" />
        <nav>
          <ActiveLink activeClassName={styles.active} href="/">
            <a href="#">Home</a>
          </ActiveLink>
          <ActiveLink activeClassName={styles.active} href="/posts">
            <a>Posts</a>
          </ActiveLink>
        </nav>

        <SignInButton />
      </div>
    </header>
  )
}