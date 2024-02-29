import React, { useState, useEffect } from "react";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    fetch("http://127.0.0.1:5555/user")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error.message);
      });
  };

  const handleRoleChange = (id, newRole) => {
    fetch(`http://127.0.0.1:5555/user/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        role: newRole,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        // Update user locally
        setUsers((prevUsers) =>
          prevUsers.map((user) =>
            user.id === id ? { ...user, role: newRole } : user
          )
        );
        console.log(`Role changed to ${newRole}`);
      })
      .catch((error) => {
        console.error("Error changing role:", error.message);
      });
  };

  const handleDeleteUser = (id) => {
    fetch(`http://127.0.0.1:5555/user/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        // Remove user from the list
        setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
        console.log("User deleted successfully");
      })
      .catch((error) => {
        console.error("Error deleting user:", error.message);
      });
  };

  return (
    <div className="container"
      style={{
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        padding: "20px",
        width: "1500px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1 style={{ textAlign: "center", marginBottom: "20px", color: "blue", textShadow: "1px 1px 2px black" }}>Manage Users</h1>
      <div style={{ width: "50%" }}>
        <table className="table">
          <thead style={{ backgroundColor :"blue" }}>
            <tr>
              <th style={{ color: "blue", fontSize: "30px" }}>Name</th>
              <th style={{ color: "blue", fontSize: "30px" }}>Role</th>
              <th style={{ color: "blue", fontSize: "30px" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td style={{ color: "blue", textShadow: "1px 1px 2px black" }}>{user.username}</td>
                <td style={{ color: "black", textShadow: "1px 1px 2px black" }}>{user.role}</td>
                <td>
                  <div className="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle"
                      type="button"
                      id={`dropdown-${user.id}`}
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      style={{ backgroundColor: "rgb 000, 000, 000, 0.2)", boxShadow: "1px 1px 2px black" }}
                    >
                      Actions
                    </button>
                    <ul className="dropdown-menu" aria-labelledby={`dropdown-${user.id}`}>
                      <li>
                        <button
                        // style={{backgrpound}}
                          className="dropdown-item"
                          onClick={() => handleRoleChange(user.id, "nurse")}
                        >
                          Make Nurse
                        </button>
                      </li>
                      <li>
                        <button
                          className="dropdown-item"
                          onClick={() => handleRoleChange(user.id, "receptionist")}
                        >
                          Make Receptionist
                        </button>
                      </li>
                      <li>
                        <button
                          className="dropdown-item text-danger"
                          onClick={() => handleDeleteUser(user.id)}
                        >
                          Delete User 🚮
                        </button>
                      </li>
                    </ul>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
