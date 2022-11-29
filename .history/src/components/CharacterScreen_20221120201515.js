import React, { useState } from "react"

const ButtonClick = () => {
  const [users, setUsers] = useState([])

  const fetchData = () => {
    fetch("https://hp-api.herokuapp.com/api/characters/house/gryffindor")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers(data)
      })
  }

  return (
    <div>
      <button onClick={fetchData}>Fetch Caracters</button>
      {users.length > 0 && (
        <ul>
          {users.map(user => (
            <li key={user.id}>{user.name} {user.image}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default ButtonClick