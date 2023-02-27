import { NavLink } from "react-router-dom"
import { gesturesDictionary } from "../../content"
import { TbSortAscendingLetters, TbSortDescendingLetters } from 'react-icons/tb'
import { CircularIcon } from "../../components"
import { useState } from "react"
import { filter } from "domutils"

const Filter = ({value, title, icon, onClickHandler=()=>'', activeStyles=''}) => {
  const [active, setActive] = useState(false)

  return (
    <div className={`p-1 w-max h-max cursor-pointer flex items-center ${active ? activeStyles : ''}`}
      onClick={() => {
        onClickHandler(active,value)
        setActive((current) => !current)
      }}
    >
      <CircularIcon 
        icon={icon}
        active={active}
        activeStyle={'bg-primary text-white'}
        extraStyles={'text-gray-700'}
        size={'xsm'}
      />
      <span value={value} className='text-sm inline ml-2'>{title}</span>
    </div>
  )
}

const GesturesBar = () => {
  const language = 'en'
  const data = gesturesDictionary[language].bar

  const [filtersApplied, setFiltersApplied] = useState([])
  const [order, setOrder] = useState('d') //Descendant

  //Event handlers
  const clickFilter = (active, name) => {
    console.log('Click > ', active, name, filtersApplied, typeof filtersApplied)
    if(active && name in filtersApplied)
      setFiltersApplied((current) => current.filter((value) => value != name))
    else
      filtersApplied.push(name)
  }
  const clickOrder = () =>{ setOrder((current)=> current === 'd' ? 'a' : 'd') }

  return (
    <div className="w-full h-max my-2">
      {/* Tabs */}
      <div className="border-b-2 border-b-gray-300">
        {
          data.tabs.titles.map((title,i) => (
            <NavLink key={i} to={data.tabs.links[i]} className={({isActive}) => `${isActive ? 'border-b-2 border-b-gray-500' : ''} relative top-[2px] text-sm px-2 py-3 inline-block font-light`}>{title}</NavLink>
          ))
        }
      </div>

      {/* Filters */}
      <div className="w-full h-max flex flex-row-reverse justify-between pt-2 px-2">
        <div className="grow flex gap-x-2 justify-end">
          {
            data.filters.categories.map((cat,i) => (
              <Filter 
                value={data.filters.values[i]}
                title={cat}
                icon={data.filters.icons[i]}
                onClickHandler={clickFilter}
              />
            ))
          }
        </div>
        <div className="flex h-full gap-x-3 items-center">
          <CircularIcon
            icon={(<TbSortDescendingLetters className=" text-lg"/>)}
            active={order == 'd'}
            activeStyle={'bg-gray-800 text-white'}
            hoverStyles={['bg-gray-300']}
            onClickHandler={clickOrder}
            size={'sm'}
          />
          <CircularIcon
            icon={(<TbSortAscendingLetters className=" text-lg"/>)}
            active={order == 'a'}
            activeStyle={'bg-gray-800 text-white'}
            hoverStyles={['bg-gray-300']}
            onClickHandler={clickOrder}
            size={'sm'}
          />
        </div>
      </div>
    </div>
/*     <div className='w-full mt-4 border-b-2 bg-slate-400 border-b-gray-400'>
        {
          data.tabs.titles.map((title,i) => (
            <NavLink key={i} to={data.tabs.links[i]} className={(isActive) => `${isActive ? 'border-b-2 border-b-red-500' : ''} py-6 mx-2`}>{title}</NavLink>
          ))
        }
    </div> */
  )
}

export default GesturesBar