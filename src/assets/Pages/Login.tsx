const Login = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 shadow-md rounded w-96">
        <h2 className="text-xl font-bold mb-6 text-center text-blue-600">Login</h2>
        <form>
          <input type="email" placeholder="Email" className="w-full mb-4 px-4 py-2 border rounded" />
          <input type="password" placeholder="Password" className="w-full mb-6 px-4 py-2 border rounded" />
          <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
