import './Table.scss';

const Table = ({ data, config, onClick }) => {
  return (
    <>
      <table className='table'>
        {/* head table */}
        {/* ================= */}
        <thead>
          <tr>
            {config.map((col) => (
              <th key={col.id}>{col.name}</th>
            ))}
          </tr>
        </thead>
        {/* body table  */}
        {/* ================= */}
        <tbody>
          {data.map((row) => (
            <tr key={row.id} onClick={() => onClick(row)}>
              {config.map((col) => (
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
