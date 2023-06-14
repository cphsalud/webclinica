import { BannerP } from '../../images/BannerP';
import img from '@/app/assets/especialidades/banner.jpg'

export const Banner = () => {

    const text = 'Especialidades';
    const num = '42vw';

    return (
        <>
            {BannerP(img, text, num)}
        </>
    )
}
