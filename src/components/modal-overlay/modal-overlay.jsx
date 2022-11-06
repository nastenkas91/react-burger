import styles from './modal-overlay.module.css'
import PropTypes from "prop-types";

export function ModalOverlay({closeModal}) {
  ModalOverlay.propTypes = {
    closeModal: PropTypes.func.isRequired
  }
  return (
    <div className={`${styles.overlay}`} onClick={closeModal}></div>
  )
}