import React from "react";
import styles from './header-link.module.css'

export function HeaderLink({active, linkRoute, children}) {
  return (
    <a
      href={linkRoute}
      className={`${styles.link} text text_type_main-default ${!active ? 'text_color_inactive' : ''} pt-4 pb-4 pl-5 pr-5`}
    >
      {children}
    </a>
  )
}