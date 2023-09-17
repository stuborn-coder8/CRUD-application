import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

function Update() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setEmail(localStorage.getItem("email"));
  }, []);

  function handleUpdate(e) {
    e.preventDefault();
    axios
      .put(`https://64e5da2a09e64530d17f2495.mockapi.io/CRUD/${id}`, {
        name: name,
        email: email,
        // header,
      })
      .then(() => {
        navigate("/read");
      });
  }

  return (
    <div className="update">
      <h1>Update</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          mx-2
          onClick={handleUpdate}
        >
          Update
        </button>
        <Link to="/read">
          <button className="btn btn-secondry" mx-2>
            Back
          </button>
        </Link>
      </form>
    </div>
  );
}

export default Update;
