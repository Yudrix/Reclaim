import Image from "next/image";
import Link from "next/link";

export default function home() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gradient-to-r from-purple-600 to-blue-500 text-#fff">
        <div className="container align-center py-2 border-2px-gray-solid border-rounded-10">
          <nav className="flex items-center justify-between py-4 bg-white shadow rounded-lg border-2px-gray-solid border-rounded-10 ">
            <div className="text-4xl font-bold flex items-center justify-between m-10">Reclaim</div>
          </nav>
        </div>
      </header>
    </div>
  )
}