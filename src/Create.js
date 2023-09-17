import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

function Create() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const history = useNavigate();

  //const header={"Access-Control-Allow-Origin":"*"}
  function handleSubmit(e) {
    console.log("clicked");
    e.preventDefault();
    axios
      .post("https://64e5da2a09e64530d17f2495.mockapi.io/CRUD", {
        name: name,
        email: email,
        //header,
      })

      .then(() => {
        history("/read");
      });
  }

  return (
    <div className="form">
      <div className="d-flex justify-content-between m-2">
        <h1>Create</h1>
        <Link to="/read">
          <button className="btn btn-primary">Show Data</button>
        </Link>
      </div>

      <form>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Create;
