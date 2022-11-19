const Challenge = (a, b) => {
    a = 5;
    b = 7;
    const result = a+b;
    console.log(result);

    return (
        <div>
            <h1>A soma entre {a} + {b} é igual a ... </h1>
            <button onClick={Challenge}>Clique aqui e veja o resultado no console!</button>
        </div>
    )
};

export default Challenge;