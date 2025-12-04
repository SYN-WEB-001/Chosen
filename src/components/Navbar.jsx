import DarkModeToggle from "../components/DarkModeToggle";


export default function Navbar() {
    return (

        <div className="navbar shadow-sm bg-gray-300 h-20 ">
            <div className="flex-1">
                <a className="text-4xl font-bold bg-gradient-to-br from-pink-500 to-purple-600 bg-clip-text text-transparent border-none ml-30">Chosen</a>
            </div>
            <div className="items-center">
                <DarkModeToggle />
            </div>
        </div>


    )
}