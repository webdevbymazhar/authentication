"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

const Page = () => {

    let router = useRouter()

    const LogOutBtn = () =>{
        cookies().delete("Token")
        router.push("/login")

    }

  return (
    <div className="w-full h-[100vh] flex flex-col justify-center items-center">
     <h1 className="text-5xl font-bold">This is my Dashboard</h1>
     <button onClick={LogOutBtn} className="mt-5 px-5 py-2 bg-black text-white rounded-md hover:bg-white hover:text-black hover:border-2 hover:border-black hover:delay-150">Log Out</button>
     </div>
  )
}

export default Page
