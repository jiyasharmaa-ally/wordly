
import { CornerDownLeft, Delete } from "lucide-react"

const Keyboard = () => {
    const firstRow = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"]
    const secondRow = ["A", "S", "D", "F", "G", "H", "J", "K", "L"]

    const thirdRow = [
        { label: "ENTER", icon: CornerDownLeft },
        ...["Z", "X", "C", "V", "B", "N", "M"].map(label => ({ label })),
        { label: "BACKSPACE", icon: Delete }
    ]

    const normalKey = `
        flex items-center justify-center
        flex-1 min-w-0 max-w-[64px]
        aspect-[1/1]
        rounded-xl
        border border-[#B779F8]
        bg-gradient-to-b from-[#302044] to-[#20182F]
        text-white font-wordly text-base sm:text-lg lg:text-2xl
        shadow-[inset_0_1px_5px_rgba(255,255,255,0.08),0_0_10px_rgba(168,85,247,0.22)]
        hover:border-[#D8A4FF]
        hover:bg-[#493064]
        hover:shadow-[0_0_16px_rgba(168,85,247,0.4)]
        active:scale-95
        transition-all duration-200 cursor-pointer
    `

    const specialKey = `
        flex items-center justify-center
        flex-[1.5] min-w-0 max-w-[88px]
        aspect-[1/1]
        rounded-xl
        border border-[#B779F8]
        bg-gradient-to-b from-[#542477] to-[#32134F]
        text-white
        shadow-[inset_0_1px_5px_rgba(255,255,255,0.1),0_0_14px_rgba(168,85,247,0.3)]
        hover:bg-[#68318E]
        active:scale-95
        transition-all duration-200 cursor-pointer
    `

    const rowStyle = "flex w-full justify-center gap-1 sm:gap-1.5 lg:gap-2"

    return (
        <div className="w-full min-w-0 flex flex-col items-center gap-2.5 text-white lg:mt-0 mt-10">

            {/* ROW 1 */}
            <div className={rowStyle}>
                {firstRow.map(key => (
                    <button key={key} className={normalKey}>
                        {key}
                    </button>
                ))}
            </div>

            {/* ROW 2 */}
            <div className={`${rowStyle} max-w-[90%]`}>
                {secondRow.map(key => (
                    <button key={key} className={normalKey}>
                        {key}
                    </button>
                ))}
            </div>

            {/* ROW 3 */}
            <div className={rowStyle}>
                {thirdRow.map(key => {
                    const Icon = key.icon

                    return (
                        <button
                            key={key.label}
                            aria-label={key.label}
                            className={key.icon ? specialKey : normalKey}
                        >
                            {Icon ? (
                                <Icon size={22} strokeWidth={2.2} />
                            ) : key.label}
                        </button>
                    )
                })}
            </div>

        </div>
    )
}

export default Keyboard
