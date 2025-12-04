import { useEffect, useState } from "react";
import DarkModeToggle from "../components/DarkModeToggle";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            className={`
                navbar h-20 sticky top-0 z-50 transition-all duration-300
                ${isScrolled ? "bg-transparent backdrop-blur-lg shadow-none" : "bg-gray-300 shadow-sm"}
            `}
        >
            <div className="flex-1">
                <a className="text-4xl font-bold bg-gradient-to-br from-pink-500 to-purple-600 bg-clip-text text-transparent border-none ml-30">
                    Chosen
                </a>
            </div>

            <div className="items-center">
                <DarkModeToggle />
            </div>
        </div>
    );
}
