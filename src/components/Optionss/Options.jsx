export default function Options({updateMods, total, onReset}) {
    return (
        <>
            <button onClick={() => updateMods("good")}>Good</button>
            <button onClick={() => updateMods("neutral")}>Neutral</button>
            <button onClick={() => updateMods("bad")}>Bad</button>
            {total ? <button onClick={() => onReset()}>Reset</button> : null}
        </>
    )
}
