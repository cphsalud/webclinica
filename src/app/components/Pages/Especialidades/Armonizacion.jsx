import { BannerSpecialRight } from '../../Banners/BannerSpecialRight';
import b7 from '@/app/assets/especialidades/b7.png';

export const Armonizacion = () => {

    const background = 'linear-gradient(89.87deg, rgba(33, 32, 81, 0.74) 100%, rgba(81, 79, 163, 0.16) 99.72%)';
    const title = 'Armonización Facial';
    const titleColor = '#fff';
    const text = 'En CPH Salud ofrecemos tratamientos de rejuvenecimiento facial, orientados a detener el paso del tiempo y a mantener un rostro sano y radiante.';
    const subTitle = '';
    const textTwo = ``;
    const textThree = '';
    const titleAccOne = '';
    const titleAccTwo = '';
    const titleAccThree = '';
    const textAccOne = '';
    const textAccTwo = '';
    const textAccThree = '';
    const accState = false;
    const accCountState = false;

    return (
        <>
            {BannerSpecialRight(b7, background, title, titleColor, text, subTitle, textTwo, textThree, titleAccOne, titleAccTwo, titleAccThree, textAccOne, textAccTwo, textAccThree, accState, accCountState)}
        </>
    )
}