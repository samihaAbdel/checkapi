import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Users from './Users'

const ListUsers = () => {
  const [users, setUsers] = useState([])
  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((response) => setUsers(response.data))
      .catch((error) => console.log(error))
  }, [])

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
      }}
    >
      {users.map((user, key) => (
        <Users user={user} key={user.id} />
      ))}
    </div>
  )
}

export default ListUsers
