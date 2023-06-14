import { Boxes } from '../../Boxes/Boxes';
import c1 from '@/app/assets/sobre-nosotros/c1.jpeg';
import c2 from '@/app/assets/home/c2.jpg';
import c3 from '@/app/assets/sobre-nosotros/c3.jpeg';

export const BoxAbout = () => {

    const textOne = 'Ozono dental';
    const textTwo = 'Scanner intraoral';
    const textThree = 'Fresadora CEREC';
    const imgOne = c1;
    const imgTwo = c2;
    const imgThree = c3;
    const background = {
        'background': ' rgba(117, 147, 254, 0.42)'
    };
    const top = '10%';

    return (
        <>
            {Boxes(textOne, textTwo, textThree, imgOne, imgTwo, imgThree, background, top)}
        </>
    )
}
