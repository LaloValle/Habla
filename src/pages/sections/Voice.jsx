import { Translation } from "../../components"
import { rootContent as content } from "../../content"

const Voice = () => {
    const language = 'es'//Redux state
    const voice = content.voice[language]

  return (
    <section id='voice' className='container main-section grid-rows-[repeat(3,max-content)_minmax(max-content,300px)]'>
        <h2 className="title">{voice.title}</h2>
        <h3 className="subtitle">{voice.subtitle}</h3>
        <p className="description">{voice.description}</p>
        <div className=" bg-dark rounded-xl col-span-2 col-start-1 h-full w-full mt-14 p-4">
          <Translation />
        </div>
    </section>
  )
}

export default Voice