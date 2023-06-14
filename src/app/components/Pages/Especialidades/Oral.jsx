import { BannerSpecialLeft } from '../../Banners/BannerSpecialLeft';
import b4 from '@/app/assets/especialidades/b4.jpg';

export const Oral = () => {

    const background = 'linear-gradient(89.87deg, rgba(33, 32, 81, 0.74) 100%, rgba(81, 79, 163, 0.16) 99.72%)';
    const title = 'Rehabilitación Oral';
    const titleColor = '#fff';
    const text = 'La Rehabilitación Oral tiene por objetivo devolver la estética y funcionalidad a las piezas dentales. Para ello, se realiza un diagnóstico detallado, planificando el tratamiento adecuado para cada caso, trabajando de la mano con distintas especialidades de la Odontología como la Periodoncia, Endodoncia y Ortodoncia.';
    const subTitle = '¿CUANDO DEBO IR A UN R.O.?';
    const textTwo = 'El Rehabilitador Oral comienza su trabajo luego que las otras especialidades han desarrollado sus respectivos tratamientos, para el cual combina en forma integral áreas como  prótesis fija, implantología, prótesis removibles, operatoria, estética y oclusión.';
    const textThree = '';
    const titleAccOne = 'Casos en los que se debe consultar a un R.O';
    const titleAccTwo = 'Algunos de los tratamientos realizados';
    const titleAccThree = 'Pilar de Cicactrización';
    const textAccOne = 'Pérdida de dientes, fractura y reconstrucciones dentales, cambiar restauraciones defectuosas, esgaste excesivo de dientes, prótesis o reemplazo de las mismas, implementación de coronas.';
    const textAccTwo = 'Incrustaciones cerámicas, coronas y puentes, carillas de cerámica, cambiar restauraciones defectuosas, retratamiento de coronas y puentes, prótesis removible parcial y total';
    const textAccThree = '';
    const accState = true;
    const accCountState = false;

    return (
        <>
            {BannerSpecialLeft(b4, background, title, titleColor, text, subTitle, textTwo, textThree, titleAccOne, titleAccTwo, titleAccThree, textAccOne, textAccTwo, textAccThree, accState, accCountState)}
        </>
    )
}