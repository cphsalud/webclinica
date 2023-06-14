'use client'

import { BannerOneContainer } from '@/app/styles/Banners'
import Image from 'next/image'

export const BannerP = (images, text, num) => {
    return (
        <BannerOneContainer>
            <div className="img">
                <Image src={images} alt="" />
            </div>
            <div className="bg"></div>
            <div className="title">
                <h1>{text}</h1>
                <div className="line" style={{ 'width': num }}></div>
            </div>
        </BannerOneContainer>
    )
}
