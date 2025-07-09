import '@/styles/components/subHeader.scss'

export function SubHeader({src, alt, text}){
    return(
        
            <section className='sub-header-container'>
                <img src={src} alt={alt}></img>
                <h1>{text}</h1>
            </section>
        
    )
}