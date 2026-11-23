import LeftHero from "./LeftHero"
import RightHero from "./RightHero"

const HeroSection = () => {
  return (
    <div className="bg-[#111326] min-h-screen lg:flex min-w-0 text-white">
      <div className="lg:w-11/20 min-w-0">
        <LeftHero />
      </div>

      <div className="lg:w-9/20 min-w-0">
        <RightHero />
      </div>
    </div>
  )
}

export default HeroSection