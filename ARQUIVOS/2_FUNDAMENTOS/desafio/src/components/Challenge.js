const Challenge = (a, b) => {
    a = 5;
    b = 7;
    const result = a+b;
    console.log(result);

    return (
        <div>
            <p>A soma entre {a} + {b} é igual a {result}</p>
        </div>
    )
};

export default Challenge;