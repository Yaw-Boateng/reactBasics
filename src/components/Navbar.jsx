export default function Navbar() {
  return (
    <nav className="flex justify-between items-center h-24 p-4 w-[90%] mx-auto ">
      <h1 className="text-4xl font-bold">
        <span>Event</span>
        <span className="text-purple-500">Hive</span>
      </h1>
      <div className="flex gap-6 text-lg">
        <button className="hover:bg-purple-500 hover:text-white hover:px-6 hover:py-2 hover:rounded-md">Login</button>
        <button className="bg-purple-500 text-white px-6 py-2 rounded-md">Signup</button>
      </div>
    </nav>
  );
}
