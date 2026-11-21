import { Sun,  Settings } from "lucide-react"

const Nav = () => {
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
                        <li className="text-[#C084FC] bg-[#29203F] px-3 py-2 rounded-lg">
                            Home
                        </li>

                        <li className="hover:text-[#22D3EE] transition-colors duration-200">
                            How To Play
                        </li>

                        <li className="hover:text-[#F472B6] transition-colors duration-200">
                            Stats
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