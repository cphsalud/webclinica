import { BannerTextRight } from "@/app/styles/Banners"
import { MyImages } from "../images/MyImages"

export const BannerFullTxtRigth = (img, title, text, top, background, titleStyle, textStyle, addText, textTwo) => {
    return (
        <BannerTextRight style={{ 'marginTop': top }}>
            <div className="img">
                {MyImages(img)}
            </div>
            <div className="bg" style={{ 'background': background }}></div>
            <div className="txt">
                <h1 style={titleStyle}>{title}</h1>
                <p style={textStyle}>{text}</p>
                {addText && <p style={textStyle}>{textTwo}</p>}
            </div>
        </BannerTextRight>
    )
}
