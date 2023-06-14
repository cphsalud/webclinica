
import { BannerOneContainer } from '@/app/styles/Banners'
import Image from 'next/image'

export const bannerOne = (img) => {
    return (
        <BannerOneContainer>
            <div className="img">
                <Image src={img} alt="" />
            </div>
            <div className="bg"></div>
            <div className="title">
                <h1>as</h1>
                <div className="line" style={{ 'width': 11 }}></div>
            </div>
        </BannerOneContainer>
    )
}
