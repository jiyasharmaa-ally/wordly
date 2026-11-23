import Tiles from "./Tiles"

const Number = ({numbers}) => {
  return (
    <div className='flex justify-center gap-2 lg:pt-8 lg:pb-3 lg:mt-0 mt-5 '>
      {numbers.map((num , index) => (
        <Tiles key={index} num={num} />
      ))}
    </div>
  )
}

export default Number