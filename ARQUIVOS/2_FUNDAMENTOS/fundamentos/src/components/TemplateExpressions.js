const TemplateExpressions = () => {
    const name = "Mazinho";
    const dados = {
        idade: 39,
        profissao: "DEV",
    }
    return (
        <div>
            {/* Comentário JSX react */}
            <h1>Olá, {name}! Tudo ok?</h1>
            <p>Atualmente você tem {dados.idade} anos e é {dados.profissao}.</p>
        </div>
    )
}

export default TemplateExpressions;