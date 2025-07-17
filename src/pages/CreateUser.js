import React, { useState } from "react";
import "./CreateUser.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateUser() {

    const navigate = useNavigate()

    const [userInput, setUserInput] = useState({
      name:"",
      age: "",
      mobile: "",
      email: "",
      password: ""
    });

    const handleChange = ({target: {value, name}}) => {
      setUserInput({...userInput, [name]: value})
    };

    const handleSubmit = async (e) => {
      e.preventDefault()

      const {name, age, mobile, email, password} = userInput

      const postData = await axios.post(
        `https://68750643dd06792b9c965d5b.mockapi.io/emp`,
        {
          Name: name,
          Age: age,
          Mobile: mobile,
          Email: email,
          Password: password,
        }
      );

      if(postData){
        navigate("/")
      }
    }
    
  return (
    <div className="form_main_container">
      <form onSubmit={handleSubmit}>
        <h2 style={{ textAlign: "center", paddingBottom: "30px" }}>
          User Register Form
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
            name="name"
            onChange={handleChange}
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
            name="age"
            onChange={handleChange}
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
            name="mobile"
            onChange={handleChange}
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
            name="email"
            onChange={handleChange}
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
            name="password"
            onChange={handleChange}
          />
        </div>

        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default CreateUser;
