import banner from '@/app/assets/bioseguridad/banner.jpg';
import { BannerP } from '../../images/BannerP';

export const Banner = () => {

    const text = 'Bioseguridad';
    const num = '30vw';


    return (
        <>
            {BannerP(banner, text, num)}
        </>
    )
}