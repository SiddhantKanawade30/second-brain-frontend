import { Input } from "../components/Input";
import { Button } from "../components/Button";

export const Signin = () => {
    return (
        <div className="h-screen w-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 flex items-center justify-center">
            <div className="bg-white rounded-xl border shadow-lg min-w-[320px] px-8 py-8 flex flex-col gap-5">
                <h2 className="text-2xl font-bold text-center text-gray-700 mb-2">Sign In</h2>
                <Input placeholder="Email" onChange={() => {}} type="text" />
                <Input placeholder="Password" type="password" onChange={() => {}} />
                <div className="flex justify-center mt-2">
                    <Button variant="primary" size="md" text="Sign In" onClick={() => {}} />
                </div>
                <div className="text-center text-sm text-gray-500 mt-2">
                    Don't have an account? <a href="/signup" className="text-blue-600 hover:underline">Sign Up</a>
                </div>
            </div>
        </div>
    );
}