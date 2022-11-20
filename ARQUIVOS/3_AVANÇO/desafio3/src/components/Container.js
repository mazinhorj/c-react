

const Container = ({children, meuValor}) => {
    return (
        <>
            <h2>Título do Container Reaproveitado</h2>
            {children}
            <p>Vem do App: {meuValor}</p>
        </>
    )
}

export default Container