import React, {useEffect} from "react";
import * as ReactDOM from 'react-dom';
import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './modal.module.css';
import {ModalOverlay} from "../modal-overlay/modal-overlay";
import PropTypes from "prop-types";
import {useLocation} from "react-router-dom";

export function Modal({title, children, setModalOpen, handleModalClose}) {
  const modalRoot = document.getElementById("react-modals");
  const location = useLocation();
  const background = location.state && location.state.background;

  const closeModal = () => {
    if (background) {
      handleModalClose();
    } else {
      setModalOpen(false);
    }
  }

  useEffect(() => {
    const handleEscClick = (e) => {
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
    modalRoot)
}

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  setModalOpen: PropTypes.func,
  handleModalClose: PropTypes.func,
  children: PropTypes.element.isRequired
}