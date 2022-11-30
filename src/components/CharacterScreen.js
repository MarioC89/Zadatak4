import React, { useEffect, useState } from "react";
import CharacterList from "./CharacterList";
import { useFetch } from "../utilities/useFetch";

const gotUrl = "https://hp-api.herokuapp.com/api/characters/house/gryffindor";

const CharacterScreen = () => {
  const { loading, data } = useFetch(gotUrl);
  const checkIfLoading = () => {
    if (loading) {
      return (
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
