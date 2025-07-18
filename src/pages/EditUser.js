import axios from "axios";
import React, { use, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditUser() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [userInput, setUserInput] = useState({
    Name: "",
    Age: "",
    Mobile: "",
    Email: "",
    Password: "",
  });

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    const userData = await axios.get(
      `https://68750643dd06792b9c965d5b.mockapi.io/emp/${id}`
    );

    setUserInput(userData.data);
  };

  const handleChange = ({ target: { value, name } }) => {
    setUserInput({ ...userInput, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { Name, Age, Mobile, Email, Password } = userInput;

    const updatedData = await axios.put(
      `https://68750643dd06792b9c965d5b.mockapi.io/emp/${id}`,
      {
        Name,
        Age,
        Mobile,
        Email,
        Password,
      }
    );

    if (updatedData) {
      navigate("/");
    }
  };

  return (
    <div className="form_main_container">
      <form onSubmit={handleSubmit}>
        <h2 style={{ textAlign: "center", paddingBottom: "30px" }}>
          Updating Form
        </h2>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Name
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="Name"
            onChange={handleChange}
            value={userInput.Name}
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Age
          </label>
          <input
            type="number"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="Age"
            onChange={handleChange}
            value={userInput.Age}
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Mobile
          </label>
          <input
            type="number"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="Mobile"
            onChange={handleChange}
            value={userInput.Mobile}
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="Email"
            onChange={handleChange}
            value={userInput.Email}
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            name="Password"
            onChange={handleChange}
            value={userInput.Password}
          />
        </div>

        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default EditUser;
