import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { use, useRef } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

export const Signin = () => {

const usernameRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)
    const nameRef = useRef<HTMLInputElement>(null)  
    const navigate = useNavigate()

    async function signin() {
        const email = usernameRef.current?.value;
        const password = passwordRef.current?.value;

        try {
            const response : any = await axios.post(`${BACKEND_URL}/api/v1/signin`, {
                email,
                password
            });

            const jwt = response.data.token;
            localStorage.setItem("token", jwt); 
            navigate("/dashboard");  
        } catch (e: any)
         {
            alert("Signup failed: " + (e.response?.data?.message || e.message));
        }
    }

    return (
        <div className="h-screen w-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 flex items-center justify-center">
            <div className="bg-white rounded-xl border shadow-lg min-w-[320px] px-8 py-8 flex flex-col gap-5">
                <h2 className="text-2xl font-bold text-center text-gray-700 mb-2">Sign In</h2>
                <Input placeholder="Email" type="text" ref={usernameRef} />
                <Input placeholder="Password" type="password" ref={passwordRef}/>
                <div className="flex justify-center mt-2">
                    <Button variant="primary" size="md" text="Sign In" onClick={() => {signin()}} />
                </div>
                <div className="text-center text-sm text-gray-500 mt-2">
                    Don't have an account? <a href="/signup" className="text-blue-600 hover:underline">Sign Up</a>
                </div>
            </div>
        </div>
    );
}