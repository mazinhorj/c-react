import { useState } from "react"


const ConditionalRender = () => {
    const [paz] = useState(true);

    const [name, setName] = useState("Mazo")

    return (
        <div>
            <h2>Condicional</h2>
            {paz && <p>Paz</p>}
            {!paz && <p>Guerra</p>}
            <h2>If ternário</h2>
            {name === "Mazinho" ? (<p>Olá, {name}!</p>):(<p>Você não é conhecido!</p>)}
            <button onClick={() => setName("Mazinho")}>Trocar nome</button>
            <button onClick={() => setName("Pepe")}>Trocar nome de novo</button>

        </div>
    );
};

export default ConditionalRender