import Image from "next/image";
import Link from "next/link";

export default function home() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gradient-to-r from-purple-600 to-blue-500 ">
        <div className="container mx-auto px-2 py-2">
          <nav className="flex items-center justify-between py-4 shadow rounded-lg px-6 bg-white ">
            <div className="text-4xl font-bold flex items-center justify-between m-10 text-black">Reclaim</div>
          </nav>
        </div>
      </header>
    </div>
  )
}