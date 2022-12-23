import styles from './modal-overlay.module.css'
import {FC} from "react";
import {TCloseModal} from '../../utils/types'

export const ModalOverlay: FC<TCloseModal> = ({closeModal}) => {
  return (
    <div className={`${styles.overlay}`} onClick={closeModal}></div>
  )
}
