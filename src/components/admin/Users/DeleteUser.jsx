import React, { useEffect, useState } from "react";
import { getUsers, deleteUser } from "../../../services/api/userInfo";
import Button from "../../input/Button";

const DeleteUser = () => {
  const [users, setUsers] = useState([]);
  const [newPassword, setNewPassword] = useState("");
  const [selectedUserId, setSelectedUserId] = useState(null);

  useEffect(() => {
    getUsers()
      .then((data) => {
        setUsers(data['hydra:member']);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des utilisateurs :", error);
      });
  }, []);

  const handleDelete = (userId) => {
    deleteUser(userId)
      .then(() => {
        getUsers().then((data) => {
          setUsers(data['hydra:member']);
        });
      })
      .catch((error) => {
        console.error("Erreur lors de la suppression de l'utilisateur :", error);
      });
  };

  return (
    <div>
      <h1>Liste des utilisateurs</h1>
      <ul>
        {users.length > 0 ? (
          users.map((user) => (
            <li key={user.id}>
              <strong>Email:</strong> {user.email}
              {user.id === selectedUserId ? (
                <div>
                  <input
                    type="password"
                    placeholder="Nouveau mot de passe"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                  <Button content="Changer le mot de passe" onClick={() => handleChangePassword(user.id)} />
                </div>
              ) : (
                <div>
                  <Button content="Supprimer" onClick={() => handleDelete(user.id)} />
                </div>
              )}
            </li>
          ))
        ) : (
          <li>Aucun utilisateur trouvé.</li>
        )}
      </ul>
    </div>
  );
};

export default DeleteUser;
