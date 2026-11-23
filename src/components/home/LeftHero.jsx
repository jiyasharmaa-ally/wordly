import { Gamepad2, Play, BookOpen } from "lucide-react"
import { Link } from "react-router-dom"

const LeftHero = () => {
    return (
        <section className="lg:p-4 py-2 px-10  lg:mt-6">
            <div className="flex w-fit lg:mx-5 mx-auto justify-center p-2 lg:px-5 px-8 max-[400px]:px-4 uppercase gap-3 border-2 border-transparent rounded-4xl items-center [background:linear-gradient(#111326,#111326)_padding-box,linear-gradient(to_right,#c084fc,#22d3ee)_border-box]">
                <Gamepad2 size={40} />
                <div className="font-wordly text-[#C084FC] font-bold text-xl max-[400px]:text-lg lg:text-3xl">
                    Unlimited word game
                </div>
            </div>

            <div className="px-5 mt-2 p-2 lg:text-start text-center">
                <h1 className="lg:text-7xl text-6xl max-[400px]:text-5xl font-wordly font-bold">Words are fun.</h1>
                <h2 className="lg:text-7xl text-6xl max-[400px]:text-5xl font-wordly font-bold text-[#C084FC] mt-3">Guess yours!</h2>
                <div className="relative ">
                    <span className="absolute block rounded-full lg:w-7.5 w-[20px]  h-2.25 rotate-[-40deg] bg-yellow-400 bottom-12 lg:right-65 max-[400px]:-right-2 right-0 shadow-[0_0_12px_rgba(250,204,21,0.8)]"></span>
                    <span className="absolute block rounded-full lg:w-10.5 w-[25px] h-2.25 rotate-0  bg-yellow-400 bottom-6 lg:right-60 -right-2  max-[400px]:-right-4 shadow-[0_0_12px_rgba(250,204,21,0.8)]"></span>
                    <span className="absolute block rounded-full lg:w-7.5 w-[20px]  h-2.25 bg-yellow-400 rotate-40 bottom-0  lg:right-65 right-0 max-[400px]:-right-2 shadow-[0_0_12px_rgba(250,204,21,0.8)]" ></span>
                </div>
                <p className="mt-5 lg:text-3xl text-xl font-wordly">Challenge your brain, find the hidden word and keep your winning streak alive!</p>
            </div>


            <div className="px-5 p-2 ">
                <div className="flex flex-col lg:flex-row items-center lg:justify-start justify-center gap-3">
                    <div className="lg:px-7 lg:p-3 p-2 px-15 justify-center flex  items-center gap-4 border rounded-2xl bg-[#964add] border-transparent w-fit hover:bg-[#A855F7]">
                        <Play size={35} strokeWidth={3}
                            fill="white" />
                        <Link
                            to="/play"
                            className="flex lg:text-3xl justify-center text-2xl w-full font-bold font-wordly lg:tracking-wider uppercase cursor-pointer hover:scale-105 transition-all duration-200"
                        >
                            Play Now
                        </Link>
                    </div>

                    <div className="flex lg:px-7 lg:p-3 p-2 px-13 max-[400px]:px-11 justify-center w-fit gap-4 border-2 rounded-2xl">
                        <BookOpen size={35} />
                        <Link
                            to="/how-to-play"
                            className="lg:text-3xl text-xl font-bold font-wordly uppercase tracking-wider cursor-pointer hover:scale-105 transition-all duration-200"
                        >
                            How to play
                        </Link>
                    </div>
                </div>


                <div>
                    <div className="flex flex-wrap lg:justify-start justify-center lg:flex-nowrap lg:mt-5 mt-3 lg:gap-20 gap-x-4 gap-y-2 max-[400px]:gap-x-2">

                        <div className="flex items-center gap-2 max-[400px]:gap-1 shrink-0">
                            <img className="w-6 h-6" src="/images/targeting.png" />
                            <p className="font-wordly whitespace-nowrap lg:text-xl text-sm">
                                5 Letters
                            </p>
                        </div>

                        <div className="flex items-center gap-2 shrink-0">
                            <img className="w-6 h-6" src="/images/thunder.png" />
                            <p className="font-wordly whitespace-nowrap lg:text-xl text-sm">
                                6 Attempts
                            </p>
                        </div>

                        <div className="flex items-center gap-2 shrink-0 basis-full justify-center lg:basis-auto">
                            <img className="w-6 h-6" src="/images/infinite.png" />
                            <p className="font-wordly whitespace-nowrap lg:text-xl text-sm">
                                Unlimited Games
                            </p>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    )
}

export default LeftHero