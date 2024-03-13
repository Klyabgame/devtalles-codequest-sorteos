import Link from "next/link"

const Header = () => {
  return (
    <>
    <header className="w-full text-gray-700 bg-white border-t border-gray-100 shadow-sm body-font">
        <div className="container flex flex-col items-start justify-between p-6 mx-auto md:flex-row">
            <Link  href={"/"} className="flex items-center mb-4 font-medium text-gray-900 title-font md:mb-0">
            <h1 className="text-lg md:text-2xl font-bold text-black">Devtalles <span className="text-purple-500">Sorteos</span></h1>
            </Link>
            <nav className="flex flex-wrap items-center justify-center pl-6 ml-6 text-base border-l border-gray-200 md:mr-auto">
                <Link href={"/"} className="mr-5 font-medium hover:text-gray-900">Home</Link>
                <Link href={"/"} className="mr-5 font-medium hover:text-gray-900">About</Link>
                <Link href={"/"} className="font-medium hover:text-gray-900">Contact</Link>
            </nav>
            <div className="items-center h-full">
                <Link className="mr-5 font-medium hover:text-gray-900" href="/login">Login</Link>
                <a href="#_"
                    className="px-4 py-2 text-xs font-bold text-white uppercase transition-all duration-150 bg-purple-500 rounded shadow outline-none active:bg-purple-600 hover:shadow-md focus:outline-none ease">
                    Sign Up
                </a>
            </div>
        </div>
    </header>
</>
  )
}

export default Header