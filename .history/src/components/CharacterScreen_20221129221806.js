import axios from "axios";
import React, { useEffect, useState } from "react";

const UsingAxios = () => {
  const [users, setUsers] = useState([])

  const fetchData = () => {
    axios.get("https://hp-api.herokuapp.com/api/characters/house/gryffindor").then(response => {
      setUsers(response.data)
    });
  };

  useEffect(() => {
    fetchData()
  }, []);

  return (
    <div>
      {users.length > 0 && (
        <ul>
          {users.slice(0,10).map(user => (
            <li key={user.id}>
              {user.name} <br/><br/>
              {user.image}
              </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UsingAxios
