import {useState} from 'react'

const MenageData = () => {
    let someData = 10;
    let [number, setNumber] = useState(13);
    console.log(number)
    return (
        <div>
            <div>
                <h2>Sem <pre>useState</pre></h2>
                <p>Valor da variável atual: {someData}</p>
                <button onClick={() => (someData+1)}>Somar 1</button>
                <p>Infelizmente nada acontece kkkkkk</p>
            </div>
            <div>
                <h2>Agora com <pre>useSatate</pre></h2>
                <p>Valor da variável atual: {number}</p>
                <button onClick={() => (setNumber(number+1))}>Somar 1</button>
            </div>
        </div>
    );
};

export default MenageData