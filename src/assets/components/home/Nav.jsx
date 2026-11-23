
import { House, Gamepad2, ChartNoAxesColumn, Settings } from "lucide-react"
import { Link, useLocation } from "react-router-dom"
import { useState } from "react"

const Nav = () => {
    const location = useLocation()
    const [settingsOpen, setSettingsOpen] = useState(false)

    const navLinks = [
        {
            name: "Home",
            path: "/",
            icon: House,
            color: "#C084FC"
        },
        {
            name: "How To Play",
            path: "/how-to-play",
            icon: Gamepad2,
            color: "#22D3EE"
        },
        {
            name: "Stats",
            path: "/stats",
            icon: ChartNoAxesColumn,
            color: "#F472B6"
        }
    ]

    return (
        <section className="bg-[#111326] px-4 lg:px-12 py-4 text-white">

            <div className="
                flex flex-row
                lg:h-20
                lg:px-8
                px-4 py-3 lg:py-0
                items-center justify-between
                rounded-3xl lg:rounded-full
                border border-purple-400/30
                bg-[#19172F]/80
                shadow-[0_0_15px_rgba(168,85,247,0.15),inset_0_1px_5px_rgba(255,255,255,0.05)]
            ">

                {/* LOGO */}
                <Link to="/" className="w-28 lg:w-48 h-12 shrink-0">
                    <img
                        src="/images/logo.png"
                        alt="Wordly logo"
                        className="w-full h-full object-contain"
                    />
                </Link>

                {/* DESKTOP NAVIGATION */}
                <nav className="hidden lg:block">
                    <ul className="
                        flex items-center justify-center
                        gap-8
                        font-wordly text-2xl
                    ">
                        {navLinks.map((item) => {
                            const Icon = item.icon
                            const active = location.pathname === item.path

                            return (
                                <li key={item.path}>
                                    <Link
                                        to={item.path}
                                        style={active ? {
                                            color: item.color,
                                            borderColor: item.color,
                                            backgroundColor: `${item.color}15`
                                        } : {}}
                                        className={`
                                            flex items-center gap-2
                                            px-4 py-1.5
                                            rounded-full border
                                            transition-all duration-300
                                            ${active
                                                ? "shadow-[0_0_12px_rgba(34,211,238,0.2)]"
                                                : "border-transparent hover:text-[#22D3EE] hover:bg-white/5"
                                            }
                                        `}
                                    >
                                        <Icon size={22} />
                                        <span>{item.name}</span>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>

                {/* SETTINGS */}
                <div className="relative shrink-0">

                    <button
                        onClick={() => setSettingsOpen(!settingsOpen)}
                        aria-label="Open settings"
                        aria-expanded={settingsOpen}
                        className="
                            p-2.5
                            rounded-2xl
                            border border-purple-400/40
                            bg-purple-500/10
                            hover:bg-purple-500/25
                            hover:rotate-90
                            transition-all duration-300
                            cursor-pointer
                        "
                    >
                        <Settings size={28} />
                    </button>

                    {/* SETTINGS DROPDOWN */}
                    {settingsOpen && (
                        <div className="
                            absolute right-0 top-full mt-3
                            z-50
                            min-w-44
                            p-2
                            rounded-2xl
                            border border-purple-400/40
                            bg-[#19172F]
                            shadow-[0_0_20px_rgba(168,85,247,0.25)]
                        ">
                            <Link
                                to="/stats"
                                onClick={() => setSettingsOpen(false)}
                                className="
                                    flex items-center gap-3
                                    px-4 py-3
                                    rounded-xl
                                    font-wordly text-xl
                                    hover:bg-purple-500/20
                                    hover:text-[#F472B6]
                                    transition-all
                                "
                            >
                                <ChartNoAxesColumn size={22} />
                                Stats
                            </Link>
                        </div>
                    )}

                </div>

            </div>
        </section>
    )
}

export default Nav
