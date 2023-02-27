import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineLogin, AiOutlineMenu, AiFillCloseCircle } from 'react-icons/ai'

import { logo } from "../../assets"
import { navLinks } from "../../content"
 
const Navbar = () => {
  const language = 'es' //Redux state
  const [showMenu, setShowMenu] = useState(true)

  return (
    <nav className="container w-full flex py-4 px-6 gap-x-3">
        <Link to='/'> <img src={logo} alt="Logo" className="h-7 mr-10" /> </Link>
        {/* Desktop */}
        <div className="hidden md:flex flex-1 gap-x-6">
          { navLinks.map(({ path, title }) => <Link key={title[language]} className='cursor-pointer align-middle' to={path} > {title[language]} </Link>) }
        </div>
        <div className="hidden md:flex gap-x-8 items-center">
          <span className="font-bold uppercase cursor-pointer text-lg">{language}</span> 
          <Link to='/login' > <AiOutlineLogin className='navbar-icon'/> </Link>
        </div>

        {/* Mobile */}
        <div className='flex md:hidden flex-1 justify-end'>
          { showMenu
            ? (<AiOutlineMenu className='navbar-icon' onClick={() => setShowMenu((showing) => !showing )} />)
            : (
              <>
                <AiFillCloseCircle className='navbar-icon' onClick={() => setShowMenu((showing) => !showing )} />
                <div className='absolute top-0 left-0 h-screen z-10 w-[90vw] bg-white shadow-lg flex flex-col gap-y-2 py-4 px-6'> 
                  <Link className=' mb-12' to='/'> <img src={logo} alt="Logo" className="h-7" /> </Link>         
                  { navLinks.map(({ path, title }) => <Link key={title[language]} className='cursor-pointer align-middle px-6 py-6 text-lg transition-colors hover:bg-secondary hover:text-white' to={path} > {title[language]} </Link>) }
                  <div className=' w-full self-end flex flex-end justify-end gap-x-8 grow items-end pb-6'>
                    <span className="font-bold uppercase cursor-pointer text-lg">{language}</span> 
                    <Link to='/login' > <AiOutlineLogin className='navbar-icon'/> </Link>
                  </div>
                </div>
              </>
            )
          }
          
          
        </div>
    </nav>
  )
}

export default Navbar