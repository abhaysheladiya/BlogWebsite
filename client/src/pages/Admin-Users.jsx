import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { Link } from "react-router-dom";

export const Adminusers = () => {
  const [users, setUsers] = useState([]);

  const { authorizationToken } = useAuth();

  const getAllUsersData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/admin/users", {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      const data = await response.json();
      console.log(`users ${data}`);
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  //delete the user on delete button
  const deleteUser = async (id)=>{
    try {
        const response = await fetch(`http://localhost:5000/api/admin/users/delete/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: authorizationToken,
        },
      });
      const data = await response.json();
     console.log(`user after delete: ${data}`);

     if(response.ok){
        getAllUsersData();
     }
  }

 catch (error) {
        console.log(error);
    }
}

  useEffect(() => {
    getAllUsersData();
  }, []);

  return (
    <>
      <section className="admin-user-section">
        <div className="container">
          <h2>Admin User Data</h2>
        </div>
        <div className="container admin-user">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {users.map((curUser, index)=>{
                return(
                    <tr key={index}>
                        <td>{curUser.username}</td>
                        <td>{curUser.email}</td>
                        <td>{curUser.phone}</td>
                        <td>
                            <Link to={`/admin/users/${curUser._id}/edit`} className="edit-link">Edit</Link>
                        </td>
                        <td>
                            <button onClick={()=> deleteUser(curUser._id)}>Delete</button>
                        </td>
                    </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};
