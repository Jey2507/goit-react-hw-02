import clsx from "clsx"
import css from "../Optionss/Optionss.module.css"
import "clsx"

export default function Options({updateMods, total, onReset}) {
    return (
        <div className={css.divButton}>
            <button className={clsx(css.button, css.green)} onClick={() => updateMods("good")}>Good</button>
            <button className={clsx(css.button, css.yellow)} onClick={() => updateMods("neutral")}>Neutral</button>
            <button className={clsx(css.button, css.red)} onClick={() => updateMods("bad")}>Bad</button>
            {total ? <button className={css.button} onClick={() => onReset()}>Reset</button> : null}
        </div>
    )
}
