import styles from "./Preloader.module.css"
import { FC } from "react"

const Preloader: FC = () => {
    return (
        <div className={styles.wrapper}>
            <span className={styles.dot} />
            <div className={styles.dots} />
        </div>
    )
}

export default Preloader
