import { Gamepad2, Play, BookOpen } from "lucide-react"

const LeftHero = () => {
    return (
        <section className="p-4 px-10 mt-6">
            <div className="flex w-fit p-2 px-5 uppercase gap-3 border-2 border-transparent rounded-4xl items-center [background:linear-gradient(#111326,#111326)_padding-box,linear-gradient(to_right,#c084fc,#22d3ee)_border-box]">
                <Gamepad2 size={40} />
                <div className='font-wordly text-[#C084FC] font-bold text-3xl'>Unlimited word game</div>
            </div>

            <div className="px-5 mt-2 p-2">
                <h1 className="text-7xl font-wordly font-bold">Words are fun.</h1>
                <h2 className="text-7xl font-wordly font-bold text-[#C084FC]">Guess yours!</h2>
                <div className="relative">
                    <span className="absolute block rounded-full w-7.5 h-2.25 rotate-[-40deg] bg-yellow-400 bottom-12 right-50 shadow-[0_0_12px_rgba(250,204,21,0.8)]"></span>
                    <span className="absolute block rounded-full w-10.5 h-2.25 rotate-0  bg-yellow-400 bottom-6 right-45 shadow-[0_0_12px_rgba(250,204,21,0.8)]"></span>
                    <span className="absolute block rounded-full w-7.5 h-2.25 bg-yellow-400 rotate-40 bottom-0 right-50 shadow-[0_0_12px_rgba(250,204,21,0.8)]" ></span>
                </div>
                <p className="mt-5 text-3xl font-wordly">Challenge your brain, find the hidden word and keep your winning streak alive!</p>
            </div>



            <div className="px-5 p-2">
                <div className="flex items-center gap-6">
                    <div className="px-7 p-3 flex items-center gap-4 border rounded-2xl bg-[#964add] border-transparent w-fit hover:bg-[#A855F7] ">
                        <Play size={35} />
                        <button className="text-3xl font-bold font-wordly tracking-wider uppercase cursor-pointer hover:scale-105 transition-all duration-200">Play Now</button>
                    </div>
                    <div className="flex px-7 p-3 gap-4 border-2 rounded-2xl">
                        <BookOpen size={35} />
                        <button className="text-3xl font-bold font-wordly uppercase tracking-wider cursor-pointer hover:scale-105 transition-all duration-200   ">How to play</button>
                    </div>
                </div>


                <div>
                    <div className="flex mt-9 gap-20">
                        <div className="flex gap-2">
                            <img className="w-7 h-7" src="/images/targeting.png" />
                            <p className="font-wordly text-xl">5 Letters</p>
                        </div>
                        <div className="flex gap-2">
                            <img className="w-7 h-7" src="/images/thunder.png" />
                            <p className="font-wordly text-xl">6 Attempts</p>
                        </div>
                        <div className="flex gap-2">
                            <img className="w-7 h-7" src="/images/infinite.png" />
                            <p className="font-wordly text-xl">Unlimited Games</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default LeftHero