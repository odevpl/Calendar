import Table from '../../components/users/UsersTable/Table';
import tableData from '../../data/tableData';
import tableConfig from './tableConfig';

const Users = () => {
  const data = tableData;
  const config = tableConfig;

  const handleRowClick = (row) => {
    console.log('kliknięto wiersz z danymi:', row);
  };

  return (
    <>
      <h1>Users</h1>
      <Table data={data} config={config} onClick={handleRowClick} />
    </>
  );
};

export default Users;
