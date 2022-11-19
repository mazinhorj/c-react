const Events = () => {
    const handleMyEvent = (e) => {
        
        console.log('Ativado');

        console.log(e);
    };

    const renderizaIsso = (x) => {
        if(x) {
            return <h1>Renderizei o verdadeiro</h1>
        } else {
            return <h1>Renderizei o falso</h1>
        };
    };

    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique aqui!</button>
                <button onClick={() => console.log('Obediente!')}>Clique aqui tambem!</button>
                <button onClick={() => {
                    if(true) {
                        console.log('Aí é ruim!')
                    }
                }}>Clique aqui, vai!</button>
            </div>
            {renderizaIsso(true)};
            {renderizaIsso(false)};
        </div>
    )
};

export default Events;