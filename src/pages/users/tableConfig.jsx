import { FaEdit, FaTrash } from 'react-icons/fa';

export const tableConfig = (onEdit, onDelete) => [
    { id: 'login', name: 'Login', key: 'login'},
    { id: 'type', name: 'Type', key: 'type' },
    { id: 'createdAt', name: 'Created', key: 'createdAt' },

    {
        id: 'actions',
        name: 'Actions',
        render: (row) => (
        <div className="actions">
            <button
            className="icon-btn"
            onClick={(e) => {
                e.stopPropagation();
                onEdit(row);
            }}
            >
            <FaEdit />
            </button>

            <button
            className="icon-btn danger"
            onClick={(e) => {
                e.stopPropagation();
                onDelete(row.id);
            }}
            >
            <FaTrash />
            </button>
        </div>
        ),
    },
];

export default tableConfig;