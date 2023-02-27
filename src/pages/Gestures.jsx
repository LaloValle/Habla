import { DictionaryGestures, GesturesBar } from "./sections"

const Gestures = () => {
  return (
    <section id='gestures' className='container px-4 pb-10'>
      <GesturesBar />
      <DictionaryGestures />
    </section>
  )
}

export default Gestures