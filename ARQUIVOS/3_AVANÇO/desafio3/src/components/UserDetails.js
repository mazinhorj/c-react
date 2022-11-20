
const UserDetails = ({nome, idade, profissao}) => {
    return (
        <>
            <hr></hr>
            <ul>
                <li>Nome: {nome}</li>
                <li>Idade: {idade}</li>
                <li>Profissão: {profissao}</li>
            </ul>
            {idade >= 18 ? (<p>Permitir CNH</p>) : (<p>Menor de idade.</p>)}
            {idade >= 65 && <p>Habilitado(a) para RioCard Idoso.</p>}
            <hr></hr>
        </>
    )
}

export default UserDetails