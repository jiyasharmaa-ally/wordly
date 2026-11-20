
import { Sun, Settings } from "lucide-react"
const Nav = () => {
    return (
        <section>
            <div className='h-20 lg:px-10 p-4 flex flex-row bg-[#111326] text-white items-center justify-between border-b-1n'>
                <div className='w-28 h-16'>
                    <img
                        src="/images/logo.png"
                        alt="Wordly logo"
                        className="w-full h-full object-contain"
                    />
                </div>
                <div className="hidden lg:block cursor-pointer text-4xl">
                    <nav>
                        <ul className="flex items-center gap-10 font-wordly">
                            <li className="text-[#C084FC] bg-[#29203F] px-3 py-2 rounded-lg">Home</li>
                            <li className="text-white hover:text-[#22D3EE] transition-colors duration-200">
                                How To Play
                            </li>
                            <li className="text-white hover:text-[#F472B6] transition-colors duration-200">
                                Stats
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="cursor-pointer hidden lg:block text-white hover:text-[#FDE047]  transition-transform duration-300 hover:rotate-45">
                    <Sun size={40} />
                </div>
                <div className="block lg:hidden">
                    <Settings />
                </div>

            </div>

        </section>
    )
}

export default Nav