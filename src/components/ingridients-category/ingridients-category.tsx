import React, {FC, ReactNode} from "react";
import styles from './ingridients-category.module.css';

interface Category {
  title: string,
  children: ReactNode
}

export const IngridientsCategory: FC<Category> = ({title, children}): JSX.Element => {
  return (
    <>
      <h2 className={`text text_type_main-medium mb-6`}>{title}</h2>
      <div className={`${styles.category__container} pl-4 pr-2`}>
        {children}
      </div>
    </>
  )
}
