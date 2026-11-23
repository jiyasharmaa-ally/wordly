import Howtoplay from './Howtoplay'
import Wtile from './Wtile'
import Rtile from './Rtile'
import Star from './Star'


const Top = () => {
  return (

    <section className='relative text-white mt-5'>
        <Howtoplay />
        <Star />
        <Wtile />
        <Rtile />
        <div className='text-center mt-2 '>
            <h1 className='font-wordly lg:text-5xl text-2xl'>Ready to crack the <span className='text-[#C084FC]'>word?</span></h1>
            <p className='lg:mt-2 mt-1 lg:text-2xl text-xl font-wordly'>Guess the secret 5-letter word in 6 tries!</p>
            <div className="absolute lg:top-[40%] lg:right-[30%] top-[45%] right-[28%] lg:rotate-20 rotate-10 lg:w-10 h-10">
                <span className="absolute lg:w-1.5 lg:h-5 w-1 h-4 bg-yellow-400 rounded-full rotate-12 -top-6 left-4"></span>
                <span className="absolute lg:w-1.5 lg:h-5 w-1 h-4 bg-yellow-400 rounded-full rotate-45 -top-5 left-8"></span>
                <span className="absolute lg:w-1.5 lg:h-5 w-1 h-4 bg-yellow-400 rounded-full rotate-75 -top-1 left-10"></span>
            </div>
        </div>

    
    </section>
  )
}

export default Top