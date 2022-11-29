import axios from "axios";
import React, { useEffect, useState } from "react";
import CharacterList from "./CharacterList";
import { PacmanLoader } from "react-spinners";
import { useFetch } from "../utilities/useFetch";

/* const UsingAxios = () => {
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
              {user.name} <br/>
              {user.image}<br/>
              </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UsingAxios */


const gotUrl = "https://thronesapi.com/api/v2/Characters";

const CharacterScreen = () => {
  const { loading, data } = useFetch(gotUrl);
  const checkIfLoading = () => {
    if (loading) {
      return (
        // <PacmanLoader
        //   color="yellow"
        //   size="50"
        //   style={{ position: "fixed", top: "50%", left: "50%" }}
        // />
        <h1 style={{ color: "blue" }}>...loading</h1>
      );
    }
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          paddingTop: "20px",
        }}
      >
        <CharacterList chars={data} />
      </div>
    );
  };

  return (
    <>
      <div style={{ backgroundColor: "black", minHeight: "100vh" }}>
        <div
          style={{ display: "flex", justifyContent: "center", paddingTop: 20 }}
        >
          <button style={{ width: "20%", borderRadius: 100 }}>
            Fetch Characters
          </button>
        </div>
        {checkIfLoading()}
      </div>
    </>
  );
};
export default CharacterScreen;
