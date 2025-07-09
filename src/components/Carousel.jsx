import { useState } from "react"
import '@/styles/components/carousel.scss'
export function Carousel({data}){
    const [index, setIndex] = useState(0)

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
                <div className="button-container">
                    <i onClick={handlePrevClick} className="fa-solid fa-chevron-left"></i>
                    <i onClick={handleNextClick} className="fa-solid fa-chevron-right"></i>
                </div>
            }
        </div>
    )
}