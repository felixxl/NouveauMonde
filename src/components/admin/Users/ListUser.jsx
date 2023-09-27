import React, { useEffect, useState } from "react";
import { getUsers } from "../../../services/api/userInfo";
import Button from "../../input/Button";

const UsersList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers()
      .then((data) => {
        setUsers(data['hydra:member']);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des utilisateurs :", error);
      });
  }, []);

  return (
    <div>
      <h1>Liste des utilisateurs</h1>
      <ul>
        {users.length > 0 ? (
          users.map((user) => (
            <li key={user.id}>
              <strong>Contact </strong> {user.email}
            </li>
          ))
        ) : (
          <li>Aucun utilisateur trouvé.</li>
        )}
      </ul>
    </div>
  );
};

export default UsersList;
