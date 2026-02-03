import { useEffect, useState } from 'react';
import  UserEditModal  from './UserEditModal';

import Table from '../UsersTable/Table';
import { getUsers, deleteUser } from '../../utils/api/users';
import { tableConfig } from '../../../pages/users/tableConfig';

const Users = ({ translate }) => {
  const [users, setUsers] = useState([]);
  const [editedUser, setEditedUser] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getUsers();
        setUsers(data);
      } catch {
        alert('Nie udało się pobrać użytkowników');
      }
    };
    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteUser(id);
      const data = await getUsers();
      setUsers(data);
    } catch {
      alert('Nie udało się usunąć użytkownika');
    }
  };

  // Edycja użytkownika
  const handleEdit = (user) => {
    setEditedUser(user);
  };

  return (
    <>
      <h1>{translate.users.title}</h1>

      <Table data={users} config={tableConfig(handleEdit, handleDelete)} />

      {editedUser && (
        <UserEditModal
          user={editedUser}
          onClose={() => setEditedUser(null)}
          onSaved={async () => {
            const data = await getUsers();
            setUsers(data);
          }}
        />
      )}
    </>
  );
};

export default Users;