import { BannerP } from '../../images/BannerP';
import img from '@/app/assets/politicas/b1.jpg'

export const Banner = () => {

    const text = 'Políticas de Privacidad';
    const num = '62vw';

    return (
        <>
            {BannerP(img, text, num)}
        </>
    )
}
