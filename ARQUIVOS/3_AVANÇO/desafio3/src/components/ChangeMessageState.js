
const ChangeMessageState = ({handleMessage}) => {
    const messages = ["Oi.", "Perdeu, mané!", "Tchau, querido!"]
    return (
        <>
            <button onClick={() => handleMessage(messages[0])}>MSG 1</button>
            <button onClick={() => handleMessage(messages[1])}>MSG 2</button>
            <button onClick={() => handleMessage(messages[2])}>MSG 3</button>

        </>
    )
}

export default ChangeMessageState