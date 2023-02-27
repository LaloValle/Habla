import { FaSearch } from 'react-icons/fa'
import { MdWavingHand } from 'react-icons/md'
import { BsSoundwave } from 'react-icons/bs'
import { Form, NavLink } from 'react-router-dom'

import { searchBar } from '../../content'

const SearchingBar = ({show=true}) => {
  const language = 'es' //Redux state

  return (
    <div className='flex p-2 container'>
        <Form className='bg-gray-200 rounded-md pl-3 grow h-9 max-w-[600px] flex'>
          <input type='search' placeholder="Busca letras o símbolos 'r'" className='grow text-sm text-gray-700 align-middle'/>
          <button className=' bg-actions rounded-r-md cursor-pointer h-full px-3 align-middle'> <FaSearch className='text-white text-lg' /> </button>
        </Form>

        <div className='grow flex justify-end gap-x-3 h-full'>
          <NavLink to='/fonemas' className={({isActive}) => `${isActive ? 'active' : 'inactive'} plain-icon-button`}> <BsSoundwave className='inline text-lg mr-2' />{` ${searchBar.buttons.phonemes[language]}`} </NavLink>
          <NavLink to='/gestos' className={({isActive}) => `${isActive ? 'active' : 'inactive'} plain-icon-button`}> <MdWavingHand className='inline text-lg mr-2' />{` ${searchBar.buttons.gestures[language]}`} </NavLink>
        </div>
    </div>
  )
}

export default SearchingBar