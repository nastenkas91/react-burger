import React from "react";
import styles from './header-link.module.css'

export function HeaderLink(props) {
  return (
    <a
      href={props.linkRoute}
      className={`${styles.link} text text_type_main-default ${!props.active ? 'text_color_inactive' : ''} pt-4 pb-4 pl-5 pr-5`}
    >
      {props.children}
    </a>
  )
}