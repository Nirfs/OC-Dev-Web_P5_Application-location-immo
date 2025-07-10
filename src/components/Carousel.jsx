import { useState } from "react"
import '@/styles/components/carousel.scss'
import { useScreenWidth } from "@/hook/useScreenWidth.jsx"

export function Carousel({data}){
    const screenWidth = useScreenWidth()
    const screenSizeBreak = 768

    const [index, setIndex] = useState(0)
    const total = data.pictures.length

    const handleNextClick = ()=>{
        setIndex(index < data.pictures.length - 1 ? index + 1 : 0)
    }
    const handlePrevClick = ()=>{
        setIndex(index === 0 ? data.pictures.length - 1 : index - 1)   
    }

    return(
        <div className="carousel-container">
            <img src={data.pictures[index]} alt={data.title + "photo n° " + index + 1}/>
            {data.pictures.length > 1 &&
                <>
                    <div>
                        <button
                                onClick={handleNextClick}
                                className="carousel-button"
                                aria-label="Image suivante"
                        >
                                <i onClick={handlePrevClick} className="fa-solid fa-chevron-left"></i>
                        </button>   
                        <button
                                onClick={handleNextClick}
                                className="carousel-button"
                                aria-label="Image precédente"
                        >
                            <i onClick={handleNextClick} className="fa-solid fa-chevron-right"></i></button>
                    </div>
                    {screenWidth > screenSizeBreak ?
                    <div className="carousel-status" aria-hidden="true">
                        {index + 1}/{total}
                    </div> :
                     null
                    }
                </>
            }
        </div>
    )
}