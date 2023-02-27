import { useEffect } from 'react'
import { rootContent as content } from "../../content"
import { Link } from 'react-router-dom'
import { GrOverview } from 'react-icons/gr'
import { TablePhonemes, PhonemeCard } from "../../components"

const MainPhonemes = () => {
    const language = 'es'//Redux state
    const phonemes = content.phonemes[language]

    useEffect(() => {
      const cardAnimation = () => {
        requestAnimationFrame(cardAnimation)
      }

      cardAnimation()
    })

  return (
    <section id='phonemes' className='container main-section light right grid-rows-[repeat(3,max-content)_minmax(160px,1fr)_max-content]'>
        <div className='relative col-start-1 row-start-1 row-span-5 w-full min-h-[450px] h-[40vh] overflow-hidden'>
          {
            phonemes.liveTool.cardsPhonemes.map((symbol,i) => (
              <div key={i} className='phoneme-card max-w-[300px] pb-10 h-full w-full absolute bottom-0 left-1/2 -translate-x-1/2'>
                <PhonemeCard
                  phoneme={symbol}
                  layoutSimple={true}
                />
              </div>
            ))
          }
          
        </div>

        <h2 className="title">{phonemes.title}</h2>
        <h3 className="subtitle">{phonemes.subtitle}</h3>
        <p className="description">{phonemes.description}</p>
        
        <div className="w-full h-full py-4 flex items-center">
          <TablePhonemes 
            phonemes={phonemes.liveTool.tablePhonemes}
            headers={['phoneme','associated','examples']}
            gridCols='grid-cols-[max-content_max-content_1fr]'
          />  
        </div>
        
        <Link to='fonemas' className="plain-icon-button inactive ml-auto my-6">{phonemes.link} <GrOverview className="text-lg ml-2" /> </Link>
    </section>
  )
}

export default MainPhonemes