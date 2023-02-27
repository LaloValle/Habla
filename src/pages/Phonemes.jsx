import { useState } from 'react'

import { scribble } from '../assets'
import { phonemes } from '../content'
import { TablePhonemes, PhonemeCard, SideAnimation } from '../components'
import { phonemesDictionary as dict } from '../content'


const Phonemes = () => {
  const language = 'en'
  const content = dict[language]
  const listPhonemes = Object.keys(phonemes)
  
  const [activeIndex, setActiveIndex] = useState(0)
  const [showAnimation, setShowAnimation] = useState(false)
  const [playingAudio, setPlayingAudio] = useState(false)
  const [alreadyAdded, setAlreadyAdded] = useState(false)
  
  // Event Handlers
  const clickRowTable = (index) => {
    setActiveIndex(() => index)
  }
  const clickAnimation = () => {
    // Recovers animation
    setShowAnimation((current) => !current)
  }
  const clickAudio = () => {
    // Recovers audio
    setPlayingAudio((current) => !current)
  }
  const clickAdd = () => {
    if(alreadyAdded) console.log('Gets deleted')
    else console.log('Gets added')
    setAlreadyAdded((current) => !current)
  }

  return (
    <div id='fonemas' className='container p-20'>
      <h1 className='font-bold text-center text-4xl relative'>
        <img src={scribble}  className='absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/4'/>
        <span className='relative z-10'>{content.title}</span>
      </h1>

      <p className='w-full text-center my-10 text-xl font-medium'>{content.description}</p>

      <div id='container-phonemes' className='w-full min-h-[520px] max-h-[570px] relative flex justify-between'>
        <div className='w-1/2 max-h-[550px] overflow-y-scroll'>
          <TablePhonemes 
              phonemes={listPhonemes}
              headers={['phoneme','associated']}
              activeStyle={'text-white bg-primary'}
              hoverStyles={['bg-gray-400', 'text-white']}
              activeIndex={activeIndex}
              onClickHandler={clickRowTable}
            />
        </div>
        <div className={`w-1/2 self-cente max-w-[360px] mx-auto relative`}>
          <div className={`h-full aspect-5/7 absolute top-0 right-full ${showAnimation ? 'block' : 'hidden'}`}>
            <SideAnimation
              phoneme={'Gesto'}
              stateAdd={alreadyAdded}
              onClickAdd={clickAdd}
            />
          </div>
          <PhonemeCard
            phoneme={listPhonemes[activeIndex]}
            stateAudio={playingAudio}
            stateAnimation={showAnimation}
            onClickAnimation={clickAnimation}
            onClickAudio={clickAudio}
          />
        </div>
      </div>
    </div>
  )
}

export default Phonemes