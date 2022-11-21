import styles from "./CarrosDetalhes.module.css"

const CarrosDetalhes = ({id, marca, modelo, ano, cor, motor, combustivel, km}) => {
    return (
        <div className={styles.single_car}>
            <h2>Carro - {id}</h2>
            <ul>
                <li>Marca: {marca}</li>
                <li>Modelo: {modelo}</li>
                <li>Ano Fabricação/Modelo: {ano}</li>
                <li>Cor: {cor}</li>
                <li>Motorização: {motor}</li>
                <li>Combustível: {combustivel}</li>
                <li>Km: {km}</li>
            </ul>
        </div>
    )
}

export default CarrosDetalhes