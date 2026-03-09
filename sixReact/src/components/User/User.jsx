import { useParams } from "react-router-dom"

function User() {
    const {userId} = useParams()
    return (
    <>
      <div className="flex items-center justify-center bg-gray-300 h-40 text-3xl text-orange-700">{userId}</div>
    </>
  )
}

export default User