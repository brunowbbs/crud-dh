import { useState } from "react";
import "./styles.css";

const users = [
  {
    id: "1",
    name: "Wesley Bruno Barbosa Silva",
    email: "engwesleybruno@gmail.com",
    phone: "(38)9988-9988",
    birthDate: "1992-10-30",
  },
  {
    id: "2",
    name: "Bruno Silva Barbosa Wesley",
    email: "engbruno@gmail.com",
    phone: "(18)9988-9988",
    birthDate: "1991-11-20",
  },
];

const App = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    birthDate: "",
  });

  function editUser(id) {
    alert("Editar " + id);
  }

  function removeUser(id) {
    alert("Remover " + id);
  }

  function submitForm() {
    console.log(formData);
  }

  return (
    <div>
      <form>
        <input
          placeholder="Nome"
          value={formData.name}
          onChange={(event) =>
            setFormData({ ...formData, name: event.target.value })
          }
        />
        <input
          placeholder="Email"
          value={formData.email}
          onChange={(event) =>
            setFormData({ ...formData, email: event.target.value })
          }
        />
        <input
          placeholder="Telefone"
          value={formData.phone}
          onChange={(event) =>
            setFormData({ ...formData, phone: event.target.value })
          }
        />
        <input
          placeholder="Data de Nascimento"
          type="date"
          value={formData.birthDate}
          onChange={(event) =>
            setFormData({ ...formData, birthDate: event.target.value })
          }
        />
        <button type="button" onClick={submitForm}>
          Salvar
        </button>
      </form>

      <div className="container-table">
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Email</th>
              <th>Telefone</th>
              <th>Data de nascimento</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.birthDate}</td>
                <td>
                  <button onClick={() => editUser(user.id)}>Editar</button>
                  <button onClick={() => removeUser(user.id)}>Apagar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
