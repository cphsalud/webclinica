
import v1 from '@/app/assets/sobre-nosotros/video.mp4'
import { BannerVideo } from '../../images/BannerVideo'

export const Banner = () => {

    const text = 'Sobre Nosotros';
    const sum = '50vw';

    return (
        <>
            {BannerVideo(v1, text, sum)}
        </>
    )
}
