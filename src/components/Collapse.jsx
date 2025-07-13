import { useEffect, useRef, useState } from "react"
import '@/styles/components/collapse.scss'

export function Collapse({title, text, headingLevel = 'h2'}){

    const [open, setOpen] = useState(false)
    const ref = useRef(null)
    const HeadingTag = headingLevel;

    useEffect(() =>{
        const content = ref.current;

        if(content){
            if(open){
                content.style.maxHeight = content.scrollHeight + "px";
            }
            else{
                content.style.maxHeight = "0px";   
            }
        }
    },[open, headingLevel])

    function handleClick(){
        setOpen(!open)
    }
    return(
        <article className="collpase-Container">
            <button  onClick={handleClick} className={open ? "collapse-bar open " : "collapse-bar"} aria-expanded={open} aria-controls={`collapse-content ${title}`}>
                <HeadingTag className="title">{title}</HeadingTag>
                <i className="fa-solid fa-chevron-up fa-xl"></i>
            </button>
            <div ref={ref} className="text">
            {text}
            </div>
        </article>
    )
}