import { useLoaderData } from "react-router-dom";
import { Card } from "@/components/Card";
import { SubHeader } from "@/components/SubHeader";
import { useScollTo } from "@/hook/ScrollTo/useScrollTo";
import subHeadercliff from '@/assets/sub_header_cliff.webp'
import '@/styles/Pages/home.scss'
import { ScreenWidthContext } from "@/hook/ScreenWitdh/ScreenWidthContext";
import { useContext } from "react";


export function Home() {    
  const scrollToTop = useScollTo();

  const AnnoncesList = useLoaderData()
  const screenWidth = useContext(ScreenWidthContext);
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
        {AnnoncesList.map((logement) => (
          <div key={logement.id} >
            
            <Card src={logement.cover} alt={`photo d'un ${logement.title}`} text={logement.title} navLink={`/logement/${logement.id}`}/>
          </div>
        ))}
      </section>
    </>
  )
}
