
import { MyImages } from '../images/MyImages';
import { BannerTextCenterContainer } from '@/app/styles/Banners';

export const BannerTextCenter = (img, text) => {
    return (
        <BannerTextCenterContainer>
            <div className="img">
                {MyImages(img)}
            </div>
            <div className="bg">
                <div className="text">
                    <p>{text}</p>
                </div>
            </div>
        </BannerTextCenterContainer>
    )
}
