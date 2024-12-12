"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let router = useRouter()
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

        let response = await axios.post("/api/login",{email,password})
        if(response.data.success == true){
            router.push("/dashboard")
        }
        
        
    } catch (error) {
        console.log(error);
        
    }
    
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white shadow-md rounded-lg">
        <h1 className="text-2xl font-semibold text-center mb-6">Login</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}