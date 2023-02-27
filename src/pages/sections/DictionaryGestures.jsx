import { useState } from 'react'

import { gestures } from '../../content'
import { GestureCard } from '../../components'

const DictionaryGestures = () => {
  const language = 'es'//Redux state
  let gesturesData = gestures[language]

  const [gesturesShown, setGesturesShown] = useState([...gesturesData])
  const [activeIndex, setActiveIndex] = useState(-1)

  //Click handler
  const clickGesture = (index) => {
    setActiveIndex(()=>index)
    //Opens the screen with the gesture info
  }

  return (
    <div className='pt-4'>
      <div className='w-full gap-y-8 grid justify-evenly items-left grid-cols-[repeat(auto-fit,minmax(250px,300px))]'>
        {
          gesturesShown.map((gesture,i) => (
            <GestureCard 
              data={gesture}
              index={i}
              activeIndex={activeIndex}
              onClickHandler={clickGesture}
            />
          ))
        }
      </div>
      <span className='border-t-2 border-t-gray-200 mt-4 w-full block py-4 text-sm text-right'>Mostrando {gesturesShown.length} resultados</span>
    </div>
  )
}

export default DictionaryGestures