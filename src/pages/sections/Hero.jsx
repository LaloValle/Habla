import Typed from 'react-typed'
import { useState } from 'react'
import { Form, Link } from 'react-router-dom'
import { FaSearch} from 'react-icons/fa'
import { CgSmileMouthOpen } from 'react-icons/cg'
import { GiSandsOfTime, GiMagicHat } from 'react-icons/gi'
import { BiHide } from 'react-icons/bi'

import { rootContent as content } from '../../content'

const Hero = () => {
    const language = 'en'//Redux state
    const hero = content.hero[language]
  
    const [searchOption, setSearchOption] = useState(0)

  return (
    <div className='container text-center pt-28 pb-20 px-8 relative'>
        
        {/* Messages */}
        {hero?.message && (
          <>
            <input type="checkbox" name="messageCheckbox" id="messageCheckbox" className='absolute hidden'/>
            <label className='block rounded-md cursor-pointer bg-highlight shadow-xl p-3 absolute top-2 left-[50%] translate-x-[-50%] w-full mx-3 opacity-100 transition-all' htmlFor='messageCheckbox' onClick={(e) => setTimeout(() => { e.target.style.display = 'none' }, 300)} >
              <GiSandsOfTime className=' font-bold text-gray-600 text-2xl aspect-auto inline mr-8'/>
              <p className='text-gray-700 inline'>{hero.message}</p>
              <BiHide className='float-right font-bold text-black text-lg'/>
            </label>
          </>
        )}

        {/* Title */}
        <CgSmileMouthOpen className='text-primary inline mr-3 font-bold text-6xl pb-3'/>
        <h1 className='inline font-bold text-4xl'>{hero.title}</h1>
        <Typed 
            className='inline ml-2 font-bold text-4xl text-primary'
            strings={hero.affections}
            fadeOut={true}
            showCursor={false}
            typeSpeed={150}
            loop
        />
        <h2 className=' font-medium text-gray-600 text-xl mt-3'>{hero.subtitle}</h2>

        {/* Search bar */}
        <Form className='w-max-[725px] rounded-md bg-gray-200 h-16 mt-12 pl-3 flex items-center'>
          <select name="search_type" className='pr-5 h-full cursor-pointer border-r-2 border-r-gray-300' id='searchSelect' onChange={(e) => setSearchOption(() => e.target.selectedIndex)}>
            {hero.search.options.map(({value, title}) => <option key={value} value={value}>{title}</option>)}
          </select>
          <input type='search' placeholder={hero.search.placeholders[searchOption]} className='grow text-gray-700 align-middle pl-3 h-full'/>
          <button className=' bg-actions rounded-r-md cursor-pointer h-full aspect-square align-middle'> <FaSearch className='text-white text-lg mx-auto' /> </button>
        </Form>
        <b className='text-sm mt-6 inline'>{hero.search.title}: </b>
        <p className='text-sm inline'>{hero.search.components}</p>

        {/* Action Button */}
        <div className='flex flex-col gap-x-8  items-center justify-end mt-32 group bg-red-500 relative w-max mx-auto'>
          <Link to='#voice' className=' text-gray-700 py-4 border-b-4 h-14 px-6 relative z-20 bg-white border-b-actions'>
            <div className='h-0 group-hover:h-full w-full bg-actions absolute rounded-t-md z-20 bottom-0 left-0 transition-all'></div>
            <span className='relative z-30 group-hover:text-white'>{hero.action}</span>
          </Link>
          <GiMagicHat className='absolute top-0 left-[50%] translate-x-[-50%] z-10 text-secondary text-5xl grow items-end group-hover:translate-y-[-110%] transition-transform delay-150' />
        </div>
      </div>
  )
}

export default Hero