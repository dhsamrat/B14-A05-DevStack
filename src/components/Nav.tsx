import { useState } from "react";
import Logo from "../assets/logo-text.png";

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 py-4">
                {/* Desktop */}
                <div className="hidden md:flex items-center justify-between">
                    <a href="#home">
                        <img
                            src={Logo}
                            alt="Dev Stack"
                            className="w-32" />
                    </a>

                    <ul className="flex gap-6 items-center text-sm font-medium">
                        <li>
                            <a
                                href="#home"
                                className="text-pink-500 hover:text-pink-600">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#technologies" className="hover:text-pink-500">
                                Technologies
                            </a>
                        </li>
                        <li>
                            <a href="#projects" className="hover:text-pink-500">
                                Projects
                            </a>
                        </li>
                        <li>
                            <a href="#about" className="hover:text-pink-500">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className="hover:text-pink-500">
                                Contact
                            </a>
                        </li>
                    </ul>

                    <div className="flex gap-4 items-center">
                        <a
                            href="#signin"
                            className="text-sm font-medium hover:text-pink-500">
                            Sign In
                        </a>

                        <button className="rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 text-white px-5 py-2 text-sm font-medium hover:opacity-90">
                            Sign Up
                        </button>
                    </div>
                </div>

                {/* Mobile */}
                <div className="flex md:hidden items-center justify-between">
                    {/* Hamburger */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="text-2xl">
                        ☰
                    </button>
                    {/* Logo */}
                    <a href="#home">
                        <img
                            src={Logo}
                            alt="Dev Stack"
                            className="w-28" />
                    </a>
                    {/* Buttons */}
                    <div className="flex gap-2 items-center">
                        <a
                            href="#signin"
                            className="text-xs font-medium">
                            Sign In
                        </a>
                        <button className="rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 text-white px-3 py-1.5 text-xs">
                            Sign Up
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {menuOpen && (
                    <ul className="md:hidden mt-4 space-y-2 border-t pt-4 text-sm font-medium">
                        <li>
                            <a
                                href="#home"
                                onClick={() => setMenuOpen(false)}
                                className="block py-2 text-pink-500">
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="#technologies"
                                onClick={() => setMenuOpen(false)}
                                className="block py-2 hover:text-pink-500">
                                Technologies
                            </a>
                        </li>
                        <li>
                            <a
                                href="#projects"
                                onClick={() => setMenuOpen(false)}
                                className="block py-2 hover:text-pink-500">
                                Projects
                            </a>
                        </li>
                        <li>
                            <a
                                href="#about"
                                onClick={() => setMenuOpen(false)}
                                className="block py-2 hover:text-pink-500">
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                href="#contact"
                                onClick={() => setMenuOpen(false)}
                                className="block py-2 hover:text-pink-500">
                                Contact
                            </a>
                        </li>
                    </ul>
                )}
            </div>
        </nav>
    );
};

export default Nav;