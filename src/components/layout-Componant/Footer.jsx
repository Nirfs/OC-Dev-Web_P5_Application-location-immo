import kasaLogoW from '@/assets/logoKasa_w.svg'
import '@/styles/components/footer.scss'

/**
*style disponible dans footer.scss
*/

export function Footer(){
    return(
        <footer>
            <img src={kasaLogoW} alt="logo kasa" aria-hidden="true" />
            <small>© 2020 Kasa. All rights reserved</small>
        </footer>
    )
}