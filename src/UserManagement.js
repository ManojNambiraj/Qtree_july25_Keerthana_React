import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ChartsDemo from "./components/ChartsDemo";

function UserManagement() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const userData = await axios.get(
      `https://68750643dd06792b9c965d5b.mockapi.io/emp`
    );

    setUsers(userData.data);
  };

  const handleDelete = async (id) => {
    const deletedData = await axios.delete(
      `https://68750643dd06792b9c965d5b.mockapi.io/emp/${id}`
    );

    if(deletedData){
      getData()
    }
  };

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
            <th scope="col">Actions</th>
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
                <td>
                  <Link
                    to={`/edit/${item.id}`}
                    className="btn btn-sm btn-success"
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => {
                      handleDelete(item.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

     
    </div>
  );
}

export default UserManagement;
