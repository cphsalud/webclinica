import { BannerP } from '../../images/BannerP';
import img from '@/app/assets/informacion/banner.jpg'

export const Banner = () => {

    const text = 'Información al Paciente';
    const num = '62vw';

    return (
        <>
            {BannerP(img, text, num)}
        </>
    )
}
