import Howtoplay from './Howtoplay'
import Wtile from './Wtile'
import Rtile from './Rtile'
import Star from './Star'


const Top = () => {
  return (

    <section className='text-white mt-5'>
        <Howtoplay />
        <Star />
        <Wtile />
        <Rtile />
        <div className='text-center mt-2 '>
            <h1 className='font-wordly text-5xl'>Ready to crack the world?</h1>
            <p className='mt-3 text-2xl font-wordly'>Guess the secret 5-letter word in 6 tries!</p>
        </div>

    
    </section>
  )
}

export default Top