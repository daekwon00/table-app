import React from "react";
import { useState } from "react";

export default function StaffTable(props) {
  const [people, setPeople] = useState(props.data);
  const [displayForm, setDisplayForm] = useState(false);
  const [newPerson, setNewPerson] = useState({
    name: "",
    age: "",
    number: "",
  });

  const createPerson = () => {
    setPeople([...people, { id: people.length + 1, ...newPerson }]);
    setNewPerson({ name: "", age: "", number: "" });
    setDisplayForm(false);
  };

  const handleOnChange = (e) => {
    setNewPerson({
      ...newPerson,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>name</th>
            <th>age</th>
            <th>number</th>
          </tr>
        </thead>
        <tbody>
          {people.map((row) => (
            <tr>
              <td>{row.id}</td>
              <td>{row.name}</td>
              <td>{row.age}</td>
              <td>{row.number}</td>
              <td>
                <button className="editRow">Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {displayForm ? (
        <div>
          <input
            placeholder="name"
            onChange={handleOnChange}
            value={newPerson.name}
            name="name"
          />
          <input
            placeholder="age"
            onChange={handleOnChange}
            value={newPerson.age}
            name="age"
          />
          <input
            placeholder="number"
            onChange={handleOnChange}
            value={newPerson.number}
            name="number"
          />
          <button onClick={createPerson} className="addRow">
            Create Person
          </button>
        </div>
      ) : (
        <button onClick={() => setDisplayForm(!displayForm)} className="addRow">
          Add Row
        </button>
      )}
    </div>
  );
}
