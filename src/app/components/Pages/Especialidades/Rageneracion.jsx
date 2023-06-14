import { BannerSpecialRight } from '../../Banners/BannerSpecialRight';
import b5 from '@/app/assets/especialidades/b5.jpg';

export const Regeneracion = () => {

    const background = 'linear-gradient(89.87deg, rgba(33, 32, 81, 0.74) 100%, rgba(81, 79, 163, 0.16) 99.72%)';
    const title = 'Regeneración Ósea';
    const titleColor = '#fff';
    const text = 'Por un lado, la regeneración ósea dental por injerto óseo consiste en una intervención quirúrgica que busca reponer el hueso perdido. El hueso trasplantado puede pertenecer al mismo paciente, ser de un donante o de sustitutos óseos comercializados (de origen animal, vegetal o sintético), siempre que sean compatibles con el paciente.';
    const subTitle = '¿QUE ES LA REGENERACIÓN ÓSEA?';
    const textTwo = 'La regeneración ósea es la técnica o conjunto de técnicas quirúrgicas desarrolladas para la obtención de un nuevo hueso regenerado de características idénticas al hueso que la precisa.';
    const textThree = 'El objetivo del procedimiento es la obtención de un hueso vascularizado en continuidad al del huésped y que presente una morfología y propiedades mecánicas similares al hueso objeto de reconstrucción, en la reconstrucción de pérdidas óseas traumáticas o postquirúrgicas. Prácticamente, casi todas las intervenciones pueden realizarse bajo anestesia local.';
    const titleAccOne = 'Planificación';
    const titleAccTwo = 'Quirúrgica';
    const titleAccThree = 'Pilar de Cicactrización';
    const textAccOne = 'Es la fase inicial donde se analiza el scanner y se definen los implantes y procedimientos quirúrgicos a realizar';
    const textAccTwo = 'Es la  intervención en donde se colocarán los implantes dentro del hueso maxilar. Una vez colocados, los implantes quedarán  insertados en el hueso por el tiempo necesario para la óseo – integración (aproximadamente 4 meses para la mandíbula y 6 meses para el maxilar superior) y cubiertos por la encía.';
    const textAccThree = 'Después de 3  a 4 meses se puede comenzar la siguiente fase que consiste en una pequeña cirugía en la encía para conectar los implantes que se encuentran dentro del hueso a través de un aditamento de titanio que se denomina pilar de cicatrización.';
    const accState = false;
    const accCountState = false;

    return (
        <>
            {BannerSpecialRight(b5, background, title, titleColor, text, subTitle, textTwo, textThree, titleAccOne, titleAccTwo, titleAccThree, textAccOne, textAccTwo, textAccThree, accState, accCountState)}
        </>
    )
}
