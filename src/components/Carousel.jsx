import { useContext, useState } from "react"
import '@/styles/components/carousel.scss'
import { ScreenWidthContext } from "@/hook/ScreenWitdh/ScreenWidthContext"
/**
 * Affiche un carrousel d’images avec des boutons de navigation.
 * 
 * @component
 * @param {Object} props - Les propriétés du composant.
 * @param {string[]} props.pictures - Tableau d'URL des images à afficher.
 * @param {string} props.title - Utilisé pour les `alt` et les `key`.
 * 
 * Appeler dans Accomodation.jsx, scss dispo dans carousel.scss
 */

export function Carousel({pictures, title}){
    const screenWidth = useContext(ScreenWidthContext)
    const screenSizeBreak = 1024

    const [index, setIndex] = useState(0)
    const total = pictures.length

    const handleNextClick = ()=>{
        setIndex(index < pictures.length - 1 ? index + 1 : 0)
    }
    const handlePrevClick = ()=>{
        setIndex(index === 0 ? pictures.length - 1 : index - 1)   
    }

    return(
        <section className="carousel-container">
            <div className="image-container" style={{ transform: `translateX(-${index * 100}%)`}}>
                {pictures.map((picture, index) =>(
                    <img key={title + index }src={picture} alt={title + "photo n° " + index} className="image-slide"/>
                ))}
            </div>
            {pictures.length > 1 &&
                <>
                    <div>
                        <button
                                onClick={handlePrevClick}
                                className="carousel-button"
                                aria-label="Image précédente"
                        >
                                <i className="fa-solid fa-chevron-left"></i>
                        </button>   
                        <button
                                onClick={handleNextClick}
                                className="carousel-button"
                                aria-label="Image suivante"
                        >
                            <i className="fa-solid fa-chevron-right"></i></button>
                    </div>
                    {screenWidth > screenSizeBreak ?
                    <div className="carousel-status" aria-hidden="true">
                        {index + 1}/{total}
                    </div> :
                     null
                    }
                </>
            }
        </section>
    )
}