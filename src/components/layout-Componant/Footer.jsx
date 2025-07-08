import kasaLogoW from '@/assets/logoKasa_w.svg'
import '@/styles/footer.scss'

export function Footer(){
    return(
        <footer>
            <img src={kasaLogoW} alt="logo kasa"/>
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}