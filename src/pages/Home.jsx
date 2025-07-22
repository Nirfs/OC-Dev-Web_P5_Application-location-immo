import { useLoaderData } from "react-router-dom";
import { Card } from "@/components/Card";
import { SubHeader } from "@/components/SubHeader";
import { useScreenWidth } from "@/hook/ScreenWidthContext.jsx"

import subHeadercliff from '@/assets/sub_header_cliff.webp'
import '@/styles/Pages/home.scss'

export function Home() {
  const data = useLoaderData()
  const screenWidth = useScreenWidth();
  const screenSizeBreak = screenWidth < 1024;

  return (
    <>
      <SubHeader src={subHeadercliff} alt="paysage de falaise" 
        text={
        <>
        Chez vous,{screenSizeBreak ? <br/> : " "}partout et ailleurs
        </>
        } 
        brightness="dark"
    />
      <section className="gallery" aria-label="Liste des logements">
        {data.map((logement) => (
          <div key={logement.id} >
            
            <Card src={logement.cover} alt={`photo d'un ${logement.title}`} text={logement.title} navLink={`/logement/${logement.id}`}/>
          </div>
        ))}
      </section>
    </>
  )
}
