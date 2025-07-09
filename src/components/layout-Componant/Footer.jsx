import kasaLogoW from '@/assets/logoKasa_w.svg'
import '@/styles/components/footer.scss'

export function Footer(){
    return(
        <footer>
            <img src={kasaLogoW} alt="" aria-hidden="true" />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}