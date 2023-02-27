import { useState } from "react"
import { IoMale, IoFemale } from 'react-icons/io5'
import CircularIcon from "./CircularIcon"
import PlayControls from "./PlayControls"

import { hola } from "../assets"
import { styles, rootContent as content } from "../content"

const toPhonemes = (word) => 'actuar'

const Translation = () => {
    const language = 'es'//Redux state
    const settings = content.voice[language].liveTool
    
    const [wordPhonemes, setWordPhonemes] = useState(toPhonemes(settings.field.value))
    const [paintedPhonemes, setPaintedPhonemes] = useState('/')
    const [sex, setSex] = useState('m')

    /* Painted Phonemes functions */
    const paintNextPhoneme = () => {
        let aux_str = '/'
        aux_str += wordPhonemes.substring(0, paintedPhonemes.length)
        /* console.log('painted >',paintedPhonemes.length, '  word > ',wordPhonemes.length) */
        if(paintedPhonemes.length === (wordPhonemes.length+1)) aux_str += '/' // Las character added
        else if(paintedPhonemes.length > wordPhonemes.length) return false // Al ready printed whole
        setPaintedPhonemes(() => aux_str)
    }
    const resetNextPhoneme = () => setPaintedPhonemes(() => '/')

    /* Word */
    const newWordPhonemes = (word) => {
        // Stop the reproduction of the animation
        // Translates to phonemes
        //  Should be used the function to translate
        setWordPhonemes(() => word)
        // Verifies if the already painted string is a subset of the new word
        /* console.log(paintedPhonemes,`/${word}`,`/${word}`.match(paintedPhonemes)) */
        if(`/${word}`.match(paintedPhonemes)) return true // No change needed
        else resetNextPhoneme()
    }

    // Events handlers
    const clickMale = () => {
        setSex('m')
    }
    const clickFemale = () => {
        setSex('f')
        paintNextPhoneme()
    }

  return (
    <div className='grid grid-cols-[1fr_1fr_2fr] grid-rows-[max-content_1fr_max_content_repeat(2,1fr)] text-white items-center h-full'>
        <label htmlFor='translate_word' className="text-sm text-gray-400">{settings.field.name}</label>
        <p className="text-sm text-gray-400 justify-self-center">{settings.phonemes}</p>

        <input id='translate_word' type='text' className={`${styles.outlined(styles.palettes.dark)} col-start-1`} defaultValue={settings.field.value} 
            onChange={(e) => newWordPhonemes(e.target.value.toLowerCase())}
        />
        <div className="col-start-2 relative w-max mx-auto">
            <span className="text-3xl text-gray-400 w-full inline-block text-center align-middle tracking-wider" >{`/${wordPhonemes}/`}</span>
            <span className="absolute top-0 left-0 text-3xl text-left text-highlight w-full inline-block align-middle tracking-wider" > {paintedPhonemes}</span>
        </div>

        <hr className='h-1 text-white col-span-2 col-start-1' />

        <h4 className="text-semibold text-highlight col-start-1 col-span-2">{settings.voiceSettings}</h4>

        <div className="col-start-1 flex justify-evenly items-center row-span-2 h-full w-full">
            <CircularIcon 
                icon={(<IoMale className='text-4xl'/>)}
                hoverStyles={['bg-secondary']}
                activeStyle={'bg-primary'}
                onClickHandler={clickMale}
                active={sex == 'm'}
                size='lg'
                />
            <CircularIcon 
                icon={(<IoFemale className='text-4xl'/>)}
                onClickHandler={clickFemale}
                hoverStyles={['bg-secondary']}
                activeStyle={'bg-pink-400'}
                active={sex == 'f'}
                size='lg'
            />
        </div>

        <select name="voiceName" className={`col-start-2 ${styles.outlined(styles.palettes.dark)}`}>
            <option>Dummy</option>
        </select>
        <select name="voiceAge" className={`col-start-2 ${styles.outlined(styles.palettes.dark)}`}>
            <option>Young</option>
        </select>

        {/* Animation div */}
        <div className='col-start-3 row-start-1 row-span-5 w-full h-full relative'>
            <img src={hola} alt="Saludo" className='w-full aspect-auto absolute left-0 bottom-0'/>
            <div className='w-full h-full absolute top-0 left-0 z-20 bg-gradient-to-t from-dark'></div>
        </div>

        <div className='col-start-3'>
            <PlayControls />
        </div>
    </div>
  )
}

export default Translation