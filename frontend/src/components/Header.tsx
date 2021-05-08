import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineUser } from "react-icons/ai";

import styles from "../styles/header.module.scss";

export default function Header() {

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a href="#">
          <GiHamburgerMenu />
        </a>

        <a href="/">
          <img src="/images/Logo.png" alt="logo"/>
        </a>

        <a href="">
          <AiOutlineUser />
        </a>
      </div>
    </header>
  )
}