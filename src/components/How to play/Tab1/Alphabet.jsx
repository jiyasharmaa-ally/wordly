import Block from './Block'

const Alphabet = ({letters}) => {
    
  
  return (
    <div className='flex justify-center gap-2 pt-10 lg:pb-15 lg:mt-0 -mt-3'>
      {letters.map((letter , index) => (
        <Block key={index} letter={letter} />
      ))}
    </div>
  )
}

export default Alphabet