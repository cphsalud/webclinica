'use client'

import { BannerOneContainer } from '@/app/styles/Banners'

export const BannerVideo = (video, text, num) => {
    return (
        <BannerOneContainer>
            <div className="video">
                <video autoPlay loop muted playsInline>
                    <source src={video} />
                </video>
            </div>
            <div className="bg"></div>
            <div className="title">
                <h1>{text}</h1>
                <div className="line" style={{ 'width': num }}></div>
            </div>
        </BannerOneContainer>
    )
}
