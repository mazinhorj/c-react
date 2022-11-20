

const CarDetails = ({id, marca, modelo, ano, novo}) => {
    
    return (
        <div>
            <h2>Detalhes do carro:</h2>
            <ul>
                <li>Registro: {id}</li>
                <li>Marca: {marca}</li>
                <li>Modelo: {modelo}</li>
                <li>Ano: {ano}</li>
            </ul>
            {novo ? (<p>Carro zero!</p>) : (<p>Carro usado</p>)}
        </div>
    )
}

export default CarDetails