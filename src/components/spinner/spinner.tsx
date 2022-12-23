import styles from './spinner.module.css';
import {RotatingLines} from "react-loader-spinner";
import {FC} from "react";

export const Spinner: FC = (): JSX.Element => {
  return (
    <div className={`${styles.spinner__container}`}>
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </div>
  )
}