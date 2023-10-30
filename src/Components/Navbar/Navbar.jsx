
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [navbar, setNavbar] = useState(false);
    return (
        <nav className="w-full bg-white">
            <div className="justify-between mx-auto md:items-center md:flex">
                <div>
                    <div className="flex items-center justify-between py-3  md:block">
                        <div href="javascript:void(0)">
                            <Link href="/" className="text-3xl font-bold logo">
                                <span className="text-4xl">F</span>orm
                                <span className="text-4xl">W</span>iz
                            </Link>

                        </div>
                        <div className="md:hidden">
                            <button
                                className="p-2 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}  >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        viewBox="0 0 20 20"
                                        fill="currentColor">
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd" />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3  md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
                            }`}  >

                        <ul className="items-center justify-center space-y-4 md:flex  md:space-x-6 md:space-y-0 md:flex-row ">
                            <li><Link href="/" className="hover:text-[#35bdcd]">
                                Home
                            </Link></li>
                            <li><Link href="/blog" className="hover:text-[#35bdcd]">
                                Blog
                            </Link></li>
                            <li><Link href="/portfulio" className="hover:text-[#35bdcd]">
                                Portfulio
                            </Link></li>
                            <li><Link href="/about" className="hover:text-[#35bdcd]">
                                About
                            </Link></li>
                            <li><Link href="/contact" className="hover:text-[#35bdcd]">
                                Contact
                            </Link></li>
                            <li><Link href="/dashboard" className="hover:text-[#35bdcd]">
                                Dashboard
                            </Link></li>

                        </ul>
                    </div>
                </div>
            </div>
        </nav>

    );
};

export default Navbar;