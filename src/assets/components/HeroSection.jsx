import LeftHero from "./LeftHero"
import RightHero from "./RightHero"

const HeroSection = () => {
  return (
    <div className="bg-[#111326] min-h-screen flex text-white">
      <div className="w-11/20">
        <LeftHero />
      </div>
      <div className="w-9/20">
         <RightHero />
      </div>
     
    </div>
  )
}

export default HeroSection