import { useContext, useState } from "react"
import UserContext from "../context/UserContext"

function Profile() {
  const {user} = useContext(UserContext);
  
  console.log(user); 
  if(!user || !user.username) return <div>please login</div>  
  return (
    <>
      <div className="text-center m-auto">welcome {user.username}</div>
    </>
  )
}

export default Profile