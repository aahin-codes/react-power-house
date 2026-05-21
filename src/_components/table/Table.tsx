import "./_Table.scss";
export const Table = ({ headers = [""], rows = [[""]] }) => {
    return (
        <div className="table-wrapper">
            <table>
                <thead>
                    <tr>
                        {headers && headers?.length > 0 && headers.map((header, index) => (
                            <th key={index}>{header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows && rows?.length > 0 && rows.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {row.map((cell, cellIndex) => (
                                <td key={cellIndex}>{cellIndex == 1 ? <span>{cell}</span> : cell}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
