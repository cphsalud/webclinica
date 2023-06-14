import rx from '@/app/assets/sobre-nosotros/rx.jpeg';
import { BannerFullTxtLeft } from '../../Banners/BannerFullTxtLeft';

export const RayosX = () => {

    const title = 'Sala de Rayos X';
    const text = 'Nuestros equipos de rayos - x exponen al paciente a mínimos niveles de radiación, esencial en nuestra filosofía biológica.Estos rayos - x nos ayudan, a diagnosticar diversas patologías como caries , abscesos, fracturas, entre otras.';
    const top = '6%';
    const background = 'linear-gradient(89.87deg, rgba(80, 79, 163, 0.74) 0.11%, rgba(81, 79, 163, 0.16) 99.72%)';

    return (
        <>
            {BannerFullTxtLeft(rx, title, text, top, background)}
        </>
    )
}
