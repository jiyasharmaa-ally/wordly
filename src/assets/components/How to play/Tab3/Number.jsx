import Tiles from "./Tiles"

const Number = ({numbers}) => {
  return (
    <div className='flex justify-center gap-2 pt-8 pb-3  '>
      {numbers.map((num , index) => (
        <Tiles key={index} num={num} />
      ))}
    </div>
  )
}

export default Number