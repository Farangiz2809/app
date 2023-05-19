import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"

export default function UserCard({users}) {
    const {id} = useParams()
    const [incoming, setIncoming]=useState({})

    useEffect(()=>{
        if(!users) return;
        setIncoming(users.find(user=>{
            return user.id == id}))    
    },[id])

    

    return (
      <div className="h-full flex flex-col items-center text-center">
        <img
          src={incoming.imgSrc}
          className="flex-shrink-0 rounded-lg w-1/8 h-56 object-cover object-center mb-4"
        />
        <div className="w-full">
          <h2 className="title-font font-medium text-lg text-gray-900">
            {incoming.name}
          </h2>
          <h3 className="text-gray-500 mb-3">{incoming.workingIn}</h3>
        </div>
      </div>
    );
}