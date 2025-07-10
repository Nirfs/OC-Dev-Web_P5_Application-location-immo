import '@/styles/components/subHeader.scss'

export function SubHeader({src, alt, text, brightness}){
    return(
        
            <section className="sub-header-container">
                <img src={src} alt={alt} className={brightness}></img>
                {text && <h2>{text}</h2>}
            </section>
        
    )
}