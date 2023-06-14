import { BannerImgCenter } from '../../Banners/BannerImgCenter';
import img from '@/app/assets/sobre-nosotros/piezo.webp';

export const Piezo = () => {

    const titleColor = {
        'background': 'linear-gradient(98.28deg, #BCBCBC 1.38%, #0890DC 99.28%)',
        '-webkit-background-clip': 'text',
        '-webkit-text-fill-color': 'transparent',
        'background-clip': 'text',
    };

    const title = 'PiezoSurgery Ultrasónico';
    const text = 'Esta es una pieza quirúrgica de última tecnología, que nos permite trabajar de forma silenciosa y segura sin recalentar o dañar el hueso y la encía.';

    return (
        <>
            {BannerImgCenter(titleColor, title, text, img)}
        </>
    )
}
