
import { useNavigate } from "react-router-dom";
import { signInWithGoogle } from "../firebase";

export default function Login() {

  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    const userData = await signInWithGoogle();
    if (userData) {
 
      navigate("/dashboard"); // Redirect to dashboard
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <h1 className="text-2xl font-bold mb-4">Welcome to Task Manager</h1>
        <p className="text-gray-600 mb-6">Sign in to manage your tasks</p>
        <button
          onClick={handleGoogleLogin}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition"
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
}
