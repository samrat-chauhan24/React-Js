import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom"
function Github() {
    // instead of using two hooks -> useLoaderData can be used
    const data = useLoaderData();
    
    // const [data, setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/samrat-chauhan24')
    //     .then((res) => res.json())
    //     .then((data)=>{
    //         setData(data)
    //     })
                  
    // })
    return (
    <>
      <div 
      className="text-center bg-gray-300 text-orange-700 h-30 flex flex-col justify-center items-center" 
      >
      <p>GitHub UserName : {data.login} </p>
      <p>GitHub Followers : {data.followers}</p>
      <p>GitHub Bio : <br />{data.bio} </p>
      <p>GitHub Avatar: </p>
      
      </div>
      <div
        className="flex justify-center bg-gray-300"
      >
        
        <img className="h-50 w-50" src={data.avatar_url} alt="" />

      </div>
    </>
  )
}   

export default Github
export const githubLoaderInfo = async () => {
    const response = await fetch('https://api.github.com/users/samrat-chauhan24');
    return response.json();
}