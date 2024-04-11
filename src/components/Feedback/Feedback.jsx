

export default function Feedback({moods: {good, neutral, bad}, totalMoods, positive}) {
    return (
        <>
            <p>Good:{good}</p>
            <p>Neutral:{neutral}</p>
            <p>Bad:{bad}</p>
            <p>Total:{totalMoods}</p>
            <p>Positive:{positive}%</p>
        </>
    )
}