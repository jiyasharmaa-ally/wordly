import { Sun, Settings } from "lucide-react"
import { Link, useLocation } from "react-router-dom";

const Nav = () => {
    const location = useLocation();
    return (
        <section className="bg-[#111326] text-white lg:border-b">

            <div className="
                flex flex-col
                lg:flex-row
                lg:h-20
                lg:px-10
                px-4 py-3
                lg:py-0
                items-center
                justify-between
            ">

                {/* TOP ROW: LOGO + MENU */}
                <div className="flex w-full lg:w-auto items-center justify-between">

                    <div className="w-28 h-12">
                        <img
                            src="/images/logo.png"
                            alt="Wordly logo"
                            className="w-full h-full object-contain"
                        />
                    </div>

                    {/* Mobile menu icon */}
                    <div className="lg:hidden cursor-pointer">
                        <Settings size={28} />
                    </div>

                </div>

                {/* NAVIGATION LINKS */}
                <nav className="mt-1 lg:mt-0">
                    <ul className="
                        flex items-center justify-center
                        gap-7 lg:gap-10
                        font-wordly
                        text-lg lg:text-4xl
                    ">
                        <Link
                            to="/"
                            className={`${location.pathname === "/"
                                ? "text-[#C084FC] bg-[#C084FC]/15 px-2 rounded-xl"
                                : "hover:text-[#22D3EE]"
                                } transition-all duration-200`}
                        >
                            Home
                        </Link>

                        <Link
                            to="/how-to-play"
                            className={`${location.pathname === "/how-to-play"
                                ? "text-[#22D3EE] bg-[#22D3EE]/15 px-2 rounded-xl"
                                : "hover:text-[#22D3EE]"
                                } transition-all duration-200`}
                        >
                            How To Play
                        </Link>

                        <li>
                            <Link
                                to="/stats"
                                className={`${location.pathname === "/stats"
                                    ? "text-[#F472B6] bg-[#F472B6]/15 px-2 rounded-xl"
                                    : "hover:text-[#F472B6]"
                                    } transition-all duration-200`}
                            >
                                Stats
                            </Link>
                        </li>
                    </ul>
                </nav>

                {/* DESKTOP THEME ICON */}
                <div className="
                    hidden lg:block
                    cursor-pointer
                    hover:text-[#FDE047]
                    transition-transform duration-300
                    hover:rotate-45
                ">
                    <Sun size={40} />
                </div>

            </div>
        </section>
    )
}

export default Nav