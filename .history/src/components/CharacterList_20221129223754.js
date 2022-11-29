import React from "react";
import Character from "./Character";
import "../App.css";

const CharacterList = (props) => {
    return (
        <>
            {props.chars.slice(0, 10).map((char) => (
                <Character
                    key={char.id}
                    title={char.title}
                    image={char.imageUrl}
                    fullName={char.fullName}
                />
            ))}
        </>
    );
};

export default CharacterList;