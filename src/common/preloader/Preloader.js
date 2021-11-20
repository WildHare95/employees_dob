import style from "./Preloader.module.css"
const Preloader = () => {
    return (
        <div className={style.gooey}>
            <span className={style.dot} />
            <div className={style.dots} />
        </div>
    )
}

export default Preloader
