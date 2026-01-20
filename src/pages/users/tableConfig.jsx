import { FaSyncAlt, FaEdit, FaTrash } from 'react-icons/fa';

const iconMap = {
  refresh: <FaSyncAlt />,
  edit: <FaEdit />,
  delete: <FaTrash />,
};

const tableConfig = [
  { id: 'name', name: 'Name', key: 'name' },
  { id: 'id', name: 'ID', key: 'id' },
  { id: 'description', name: 'Description', key: 'description' },
  { id: 'dateCreated', name: 'Date created', key: 'dateCreated' },
  { id: 'createdBy', name: 'Created by', key: 'createdBy' },
  { id: 'lastImport', name: 'Last import', key: 'lastImport' },
  { id: 'noOfUsers', name: 'No. of users', key: 'noOfUsers' },
  { id: 'lastRefreshed', name: 'Last refreshed', key: 'lastRefreshed' },
  {
    id: 'actions',
    name: 'Actions',
    key: 'icons',
    render: (row) =>
      row.icons.map((icon) => (
        <button key={icon} className='icon-btn'>
          {iconMap[icon]}
        </button>
      )),
  },
];

export default tableConfig;
