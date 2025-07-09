import { useEffect, useRef, useState } from "react"
import '@/styles/components/collapse.scss'

export function Collapse({title, text}){

    const [open, setOpen] = useState(false)
    const ref = useRef(null)

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
    },[open])

    function handleClick(){
        setOpen(!open)
    }
    return(
        <div onClick={handleClick} className="collpase-Container">
            <div className={open ? "collapse-bar open " : "collapse-bar"}>
                <p className="title">{title}</p>
                <i className="fa-solid fa-chevron-up fa-xl"></i>
            </div>
            <div ref={ref} className="text">
            {text}
            </div>
        </div>
    )
}