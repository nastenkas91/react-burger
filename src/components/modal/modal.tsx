import React, {FC, ReactNode, useEffect} from "react";
import * as ReactDOM from 'react-dom';
import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './modal.module.css';
import {ModalOverlay} from "../modal-overlay/modal-overlay";
import {TCloseModal} from "../../utils/types";

type ModalProps = TCloseModal & {
  title?: string,
  children: ReactNode
}

export const Modal: FC<ModalProps> = ({title, children, closeModal}): JSX.Element => {
  const modalRoot = document.getElementById("react-modals");

  useEffect(() => {
    const handleEscClick = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    }
    document.addEventListener('keydown', handleEscClick);

    return () => {
      document.removeEventListener('keydown', handleEscClick);
    }
  }, [])

  return ReactDOM.createPortal(
    <>
      <ModalOverlay closeModal={closeModal}/>
      <div className={styles.modal__container}>
        <h2 className={styles.modal__title}>
          <span className={`text text_type_main-large`}>{title}</span>
          <button className={`${styles.modal__button}`} type={"button"} onClick={closeModal}>
            <CloseIcon type={"primary"} />
          </button>
        </h2>
        {children}
      </div>
    </>,
    modalRoot!)
}
