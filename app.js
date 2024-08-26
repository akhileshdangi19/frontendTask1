const { useState } = React;

function EditableTable() {
    const initialData = [
        { name: "John Doe", age: 28, email: "john@example.com" },
        { name: "Jane Smith", age: 32, email: "jane@example.com" },
    ];

    const [data, setData] = useState(initialData);

    const handleInputChange = (e, index, key) => {
        const value = e.target.value;
        const newData = [...data];
        newData[index][key] = value;
        setData(newData);
    };

    const handleSave = () => {
        console.log("Data ready to send:", JSON.stringify(data));
    };

    return (
      <>
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>
                                <input
                                    type="text"
                                    value={item.name}
                                    onChange={(e) => handleInputChange(e, index, 'name')}
                                />
                            </td>
                            <td>
                                <input
                                    type="number"
                                    value={item.age}
                                    onChange={(e) => handleInputChange(e, index, 'age')}
                                />
                            </td>
                            <td>
                                <input
                                    type="email"
                                    value={item.email}
                                    onChange={(e) => handleInputChange(e, index, 'email')}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={handleSave}>Save</button>
        </div>
      </>
    );
}

ReactDOM.render(<EditableTable />, document.getElementById('root'));
