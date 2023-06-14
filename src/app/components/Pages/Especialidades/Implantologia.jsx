import { BannerSpecialRight } from '../../Banners/BannerSpecialRight';
import b1 from '@/app/assets/especialidades/b1.jpg';

export const Implantologia = () => {

    const background = 'linear-gradient(89.87deg, rgba(33, 32, 81, 0.74) 100%, rgba(81, 79, 163, 0.16) 99.72%)';
    const title = 'Implantología';
    const titleColor = '#fff';
    const text = '¿Qué es un implante dental? Es un tornillo de titanio (material que se integra al hueso sin provocar rechazo) se coloca en el hueso maxilar y sobre el se levanta un nuevo diente (la corona), permitiéndole al paciente recuperar no solo lo estético, sino que también la funcionalidad de sus piezas dentales.';
    const subTitle = '¿EN QUE CONSISTE LA CIRUGÍA DE IMPLANTES?';
    const textTwo = 'La cirugía de implantes es un intervención que dura entre 30 minutos y 1 hora en donde se instalan los tornillos de titanio en el hueso. y se realiza con anestesia local.';
    const textThree = 'Este procedimiento cuenta con  las siguientes fases:';
    const titleAccOne = 'Planificación';
    const titleAccTwo = 'Quirúrgica';
    const titleAccThree = 'Pilar de Cicactrización';
    const textAccOne = 'Es la fase inicial donde se analiza el scanner y se definen los implantes y procedimientos quirúrgicos a realizar';
    const textAccTwo = 'Es la  intervención en donde se colocarán los implantes dentro del hueso maxilar. Una vez colocados, los implantes quedarán  insertados en el hueso por el tiempo necesario para la óseo – integración (aproximadamente 4 meses para la mandíbula y 6 meses para el maxilar superior) y cubiertos por la encía.';
    const textAccThree = 'Después de 3  a 4 meses se puede comenzar la siguiente fase que consiste en una pequeña cirugía en la encía para conectar los implantes que se encuentran dentro del hueso a través de un aditamento de titanio que se denomina pilar de cicatrización.';
    const accState = true;
    const accCountState = true;

    return (
        <>
            {BannerSpecialRight(b1, background, title, titleColor, text, subTitle, textTwo, textThree, titleAccOne, titleAccTwo, titleAccThree, textAccOne, textAccTwo, textAccThree, accState, accCountState)}
        </>
    )
}
