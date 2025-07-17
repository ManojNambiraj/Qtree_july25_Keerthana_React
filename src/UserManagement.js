import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function UserManagement() {

    const [users, setUsers] = useState([])

    useEffect(() => {
      getData()
    }, []);

    const getData = async () => {
        const userData = await axios.get(
          `https://68750643dd06792b9c965d5b.mockapi.io/emp`
        );

        setUsers(userData.data);
    }

  return (
    <div>
      <Link to={"/create"} className="btn btn-primary m-4">
        Create user
      </Link>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Email</th>
            <th scope="col">Mobile</th>
            <th scope="col">Password</th>
          </tr>
        </thead>
        <tbody>
          {users.map((item) => {
            return (
              <tr>
                <th scope="row">{item.id}</th>
                <td>{item.Name}</td>
                <td>{item.Age}</td>
                <td>{item.Email}</td>
                <td>{item.Mobile}</td>
                <td>{item.Password}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default UserManagement;


// CRUD --> Create   Read    Update    Delete

// Http -->  POST    GET     PUT       DELETE