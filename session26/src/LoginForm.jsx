import { use, useState } from "react";

function LoginForm() {
  // state for form inputs
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


  // handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // stop page reload
    alert(`Username: ${username}, Password: ${password}`);
    
  };

  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md">
      <h2 className="text-xl font-bold mb-4">Login Form</h2>
      <form onSubmit={handleSubmit}>
        {/* Username field */}
        <div className="mb-3">
          <label className="block text-sm font-medium">Username:</label>
          <input
            type="text"
            value={username}
            // event handling
            className="w-full p-2 border rounded"
            placeholder="Enter username"
          />
        </div>

        {/* Password field */}
        <div className="mb-3">
          <label className="block text-sm font-medium">Password:</label>
          <input
            type="password"
            value={password}
            className="w-full p-2 border rounded"
            placeholder="Enter password"
          />
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginForm;