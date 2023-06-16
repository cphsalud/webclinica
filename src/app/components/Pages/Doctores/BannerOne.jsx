
import doctores from '@/app/assets/doctores/bannerimg.jpg';
import { BannerP } from '../../images/BannerP';

export const BannerOne = () => {

    const text = 'Profesionales';
    const num = '30vw';


    return (
        <>
            {BannerP(doctores, text, num)}
        </>
    )
}
