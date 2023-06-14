'use client'

import { BoxesHome } from '../../Boxes/BoxesHome'
import { Services } from '../../Contact/Services'
import { BannerHome } from './BannerHome'
import { Recognition } from './Recognition'
import { Reviews } from './Reviews'
import { TitleOneHome } from './TitleOneHome'
import { NumbersHome } from './NumbersHome'

export const HomeDefault = () => {
    return (
        <>
            <BannerHome />
            <TitleOneHome />
            <BoxesHome />
            <NumbersHome />
            <Recognition />
            <Services />
            <Reviews />
        </>
    )
}