import Nav from "../components/home/Nav"
import GameGrid from "../components/Play/GameGrid"
import GameHeader from "../components/Play/GameHeader"
import Keyboard from "../components/Play/Keyboard"

const Play = () => {
    return (
        <div className="flex flex-col gap-4 min-w-0">
            <Nav />
            <GameHeader />

            <div className="
    grid grid-cols-1 lg:grid-cols-[2fr_3fr]
    items-center gap-6
    w-full max-w-[1500px]
    mx-auto
    px-6 lg:px-12 xl:px-16
">
                <div className="min-w-0 flex justify-center">
                    <GameGrid />
                </div>

                <div className="min-w-0 flex justify-center">
                    <Keyboard />
                </div>
            </div>
        </div>
    )
}

export default Play