import { useState } from "react"

const ListRender = () => {
    // esse array não tem index!!!
    const [list] = useState([
        "Alexandre",
        "Fabio",
        "Mazinho",
        "Rafael"
    ])

    const [users, setUsers] = useState([
        {id: 1, name: "Fudêncio", age:12},
        {id: 2, name: "Lula", age:77},
        {id: 3, name: "Bolsonaro", age:62},
        {id: 4, name: "Ciro", age:64},
        {id: 5, name: "Romario", age:63},
        {id: 6, name: "Alkmin", age:69},
    ]);

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * users.length);
        setUsers((prevUsers) => {
            console.log(prevUsers)
            return (
                prevUsers.filter((user) => randomNumber !== user.id)
            );
        });
    };

    return (
    <div>
        <h2>MS4 na área!!!</h2>
        <div>
            <ul>
                {list.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
        </div>
        <div>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name} - {user.age}</li>
                ))}
            </ul>
            <button onClick={deleteRandom}>Deletar usuario aleatorio</button>
        </div>
    </div>
    )
}

export default ListRender