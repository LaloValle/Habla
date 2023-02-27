import { useState } from "react"
import { BsFillMegaphoneFill } from "react-icons/bs"

import { cuerpoHorizontal } from "../assets"
import { CircularIcon } from '../components'

const GestureCard = ({data, index, activeIndex, onClickHandler=()=>''}) => {
    const [playingAudio, setPlayingAudio] = useState(false)

    //Event Handlers
    const clickAudio = () => {
        setPlayingAudio((current)=>!current)
    }

  return (
    <div className={`w-full h-max rounded-xl p-3 flex flex-col ${index == activeIndex ? 'bg-primary text-white' : 'bg-gray-200'}`}>
        {/* Video animation */}
        <div className='bg-gradient-to-t from-secondary to-secondary/80 w-full aspect-4/3 relative'>
            {/* Image */}
            <img src={cuerpoHorizontal} alt="Cuerpo 4:3" className="w-full aspect-4/3 cursor-pointer"
                onClick={()=>onClickHandler(index)}
            />
            <CircularIcon 
                icon={(<BsFillMegaphoneFill className='text-md text-white/50'/>)}
                hoverStyles={['bg-dark']}
                activeStyle={'bg-white !text-dark'}
                extraStyles={`absolute bg-secondary bottom-2 right-2 z-30`}
                onClickHandler={clickAudio}
                active={playingAudio}
            />
        </div>

        {/* info */}
        <div className="w-full py-1 px-2 flex justify-between items-center">
            <span className={`text-2xl text-semibold ${index == activeIndex ? 'text-highlight' : 'text-primary'}`}>/{data.phonemes}/</span>
            <p className={`text-xl ${index == activeIndex ? 'text-white' : 'text-gray-400'}`}>{Array.from(data.spelling).join(', ')}</p>
        </div>
    </div>
  )
}

export default GestureCard