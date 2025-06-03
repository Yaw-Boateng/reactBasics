import { Linkedin, Instagram, Facebook } from "lucide-react";

function Footer(){
    return(
      <footer className="bg-blue-900 text-white px-6 py-10">
  {/* Brand */}
  <div className="text-center mb-6">
    <h1 className="text-3xl font-bold">
      <span className="text-white">Event</span>
      <span className="text-purple-500">Hive</span>
    </h1>
  </div>

  {/* Subscribe Form */}
  <form className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
    <input
      type="email"
      placeholder="Enter your mail"
      name="email"
      className="px-4 py-2 rounded-md bg-white  w-full sm:w-64"
    />
    <button
      type="submit"
      className="bg-purple-500 text-white px-6 py-2 rounded-md hover:bg-[#7848F4] transition"
    >
      Subscribe
    </button>
  </form>

  {/* Navigation Links */}
  <div className="flex justify-center flex-wrap gap-6 text-sm mb-8">
    <span className="hover:underline cursor-pointer">Home</span>
    <span className="hover:underline cursor-pointer">About</span>
    <span className="hover:underline cursor-pointer">Services</span>
    <span className="hover:underline cursor-pointer">Get in touch</span>
    <span className="hover:underline cursor-pointer">FAQs</span>
  </div>

  {/* Divider */}
  <hr className="border-gray-400 mb-6" />

  {/* Language and Social Media */}
  <div className="flex flex-col md:flex-row justify-between items-center gap-6">
    <div className="flex gap-4">
      <button className="bg-white text-blue-900 px-3 py-1 rounded hover:bg-gray-200">
        English
      </button>
      <button className="bg-white text-blue-900 px-3 py-1 rounded hover:bg-gray-200">
        French
      </button>
      <button className="bg-white text-blue-900 px-3 py-1 rounded hover:bg-gray-200">
        Hindi
      </button>
    </div>

    <div className="flex gap-4 text-white text-xl">
      <Linkedin className="hover:text-yellow-400 cursor-pointer" />
      <Instagram className="hover:text-yellow-400 cursor-pointer" />
      <Facebook className="hover:text-yellow-400 cursor-pointer" />
    </div>
  </div>

  {/* Copyright */}
  <p className="text-center text-sm mt-8 text-gray-300">
    Non Copyrighted © 2025 upload
  </p>
</footer>

    )
}

export default Footer