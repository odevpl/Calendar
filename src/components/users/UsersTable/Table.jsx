import './Table.scss';

const Table = ({ data, config, onEdit, onDelete}) => {
  const cols = typeof config === 'function' ? config(onEdit, onDelete) : config;
  return (
    <>
      <table className='table'>
        {/* head table */}
        {/* ================= */}
        <thead>
          <tr>
            {cols.map((col) => (
              <th key={col.id}>{col.name}</th>
            ))}
          </tr>
        </thead>
        {/* body table  */}
        {/* ================= */}
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              {cols.map((col) => (
                <td key={col.id}>
                  {col.render ? col.render(row) : row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
