import { BannerSpecialRight } from '../../Banners/BannerSpecialRight';
import b3 from '@/app/assets/especialidades/b3.jpg';

export const Endodoncia = () => {

    const background = 'linear-gradient(89.87deg, rgba(33, 32, 81, 0.74) 100%, rgba(81, 79, 163, 0.16) 99.72%)';
    const title = 'Endodoncia';
    const titleColor = '#fff';
    const text = 'La Endodoncia es el tratamiento que se ocupa de los problemas que presenta el nervio o pulpa dental, lo que genera dolor en los pacientes, el cual va en aumento y puede llevar a la pérdida de la pieza dental';
    const subTitle = '¿EN QUE CONSISTE UNA ENDODONCIA?';
    const textTwo = 'Se realiza un tratamiento de conducto con el que  se desinfecta y sella el diente, retirando el tejido inflamado, frenando de esta forma la infección y permitiendo la reparación de los tejidos.';
    const textThree = 'Este no es un tratamiento doloroso, en general se usa anestesia local para realizarlo y, posterior a éste, se recetan analgésicos y antiinflamatorios para reducir las molestias que se pudiesen presentar.';
    const titleAccOne = 'Planificación';
    const titleAccTwo = 'Quirúrgica';
    const titleAccThree = 'Pilar de Cicactrización';
    const textAccOne = 'Es la fase inicial donde se analiza el scanner y se definen los implantes y procedimientos quirúrgicos a realizar';
    const textAccTwo = 'Es la  intervención en donde se colocarán los implantes dentro del hueso maxilar. Una vez colocados, los implantes quedarán  insertados en el hueso por el tiempo necesario para la óseo – integración (aproximadamente 4 meses para la mandíbula y 6 meses para el maxilar superior) y cubiertos por la encía.';
    const textAccThree = 'Después de 3  a 4 meses se puede comenzar la siguiente fase que consiste en una pequeña cirugía en la encía para conectar los implantes que se encuentran dentro del hueso a través de un aditamento de titanio que se denomina pilar de cicatrización.';
    const accState = false;
    const accCountState = true;

    return (
        <>
            {BannerSpecialRight(b3, background, title, titleColor, text, subTitle, textTwo, textThree, titleAccOne, titleAccTwo, titleAccThree, textAccOne, textAccTwo, textAccThree, accState, accCountState)}
        </>
    )
}
