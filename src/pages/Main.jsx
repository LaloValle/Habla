import { Hero, Voice } from "./sections"
import MainPhonemes from "./sections/MainPhonemes"

const Main = () => {

  return (
    <>
      <Hero />
      <div className="w-full bg-secondary"> <Voice /> </div>
      <div className="w-full"> <MainPhonemes /> </div>
    </>
  )
}

export default Main