import MyComponent from "./MyComponent";

const SecondComponent = () => {
    return (
        <div>
            <h3>Segundo componente</h3>
            {/* importação de componente dentro do outro */}
            <p>Abaixo um componente reaproveitado:</p>
            <MyComponent />
        </div>
    );
};

export default SecondComponent;