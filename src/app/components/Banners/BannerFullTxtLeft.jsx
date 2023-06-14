import { BannerTextLeft } from "@/app/styles/Banners"
import { MyImages } from "../images/MyImages"

export const BannerFullTxtLeft = (img, title, text, top, background) => {
    return (
        <BannerTextLeft style={{ 'marginTop': top }}>
            <div className="img">
                {MyImages(img)}
            </div>
            <div className="bg" style={{ 'background': background }}></div>
            <div className="txt">
                <h1>{title}</h1>
                <p>{text}</p>
            </div>
        </BannerTextLeft>
    )
}
