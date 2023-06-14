import { BannerImgCenterContainer } from '@/app/styles/Banners';
import { MyImages } from '../images/MyImages';


export const BannerImgCenter = (titleColor, title, text, img) => {
    return (
        <BannerImgCenterContainer>
            <div className="txt">
                <h1 style={titleColor}>{title}</h1>
                <p>{text}</p>
            </div>
            <div className="img">
                {MyImages(img)}
            </div>
        </BannerImgCenterContainer>
    )
}
