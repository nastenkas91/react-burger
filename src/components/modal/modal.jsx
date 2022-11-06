import React, {useEffect, useRef} from "react";
import * as ReactDOM from 'react-dom';
import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './modal.module.css';
import {ModalOverlay} from "../modal-overlay/modal-overlay";
import PropTypes from "prop-types";

export function Modal({title, children, setModalOpen}) {
  Modal.propTypes = {
    title: PropTypes.string.isRequired,
    setModalOpen: PropTypes.func.isRequired,
    children: PropTypes.element.isRequired
  }

  const modalRoot = document.getElementById("react-modals");

  const closeModal = () => {
    setModalOpen(false)
  }

  const handleEscClick = (e) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  }

  useEffect(() => {
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
    modalRoot)
}