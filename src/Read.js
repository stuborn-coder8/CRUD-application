import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Read() {
  const [data, setData] = useState([]);
  const [tabledark, setTableDark] = useState("");

  useEffect(() => {
    getData();
  }, []);

  function setToLocalStorage(id, name, email) {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("email", email); //set item to local storage with key of 'id' and value of the id passed in as a
  }

  function handleDelete(id) {
    axios
      .delete(`https://64e5da2a09e64530d17f2495.mockapi.io/CRUD/${id}`)
      .then(() => {
        getData();
      });
  }

  function getData() {
    axios
      .get("https://64e5da2a09e64530d17f2495.mockapi.io/CRUD")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  return (
    <>
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          id="flexSwitchCheckDefault"
          onClick={() => {
            if (tabledark === "table-dark") setTableDark("");
            else setTableDark("table-dark");
          }}
        />
      </div>

      <div className="d-flex justify-content-between m-2">
        <h2>Read Operation</h2>
        <Link to="/">
          <button className="btn btn-secondry">Create</button>
        </Link>
      </div>
      <table className={`table ${tabledark}`}>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {data.map((element) => (
            <tr>
              <th scope="row">{element.id}</th>
              <td>{element.name}</td>
              <td>{element.email}</td>
              <td>
                <Link
                  to="/update"
                  onClick={() =>
                    setToLocalStorage(element.id, element.name, element.email)
                  }
                >
                  <button className="btn-success">Edit</button>
                </Link>
              </td>
              <td>
                <button
                  className="btn-danger"
                  onClick={() => handleDelete(element.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Read;
