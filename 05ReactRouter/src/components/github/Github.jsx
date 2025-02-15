import React, { useEffect, useState } from 'react'

function Github() {
    const[data , setData] = useState([])
    useEffect( () => {
     fetch('https://api.github.com/users/Student-Stuti')
     .then(response => response.json())
     .then(data => {
        setData(data)
     })
    },[])
  return (
    <div >Github followers : {data.followers}</div>
  )
}

export default Github