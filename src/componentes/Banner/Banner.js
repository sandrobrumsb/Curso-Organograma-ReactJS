import './Banner.css'
import imagemBanner from "./imagens/banner.png"

export const Banner = () => {
    // JSX
    return (
        <header className="banner">
            <img src={imagemBanner} alt="O banner principal da página do Organo"/>
        </header>
    )
}