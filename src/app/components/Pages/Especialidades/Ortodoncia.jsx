import { BannerSpecialLeft } from '../../Banners/BannerSpecialLeft';
import b2 from '@/app/assets/especialidades/b2.jpg';

export const Ortodoncia = () => {

    const background = 'linear-gradient(89.87deg, rgba(33, 32, 81, 0.74) 100%, rgba(81, 79, 163, 0.16) 99.72%)';
    const title = 'Ortodoncia';
    const titleColor = '#fff';
    const text = 'Esta especialidad se encarga de la corrección de la posición de los dientes y huesos, además de los problemas de mala oclusión (mordida). Esta especialidad se encarga de la corrección de la posición de los dientes y huesos, además de los problemas de mala oclusión (mordida). Lo primero puede generar dificultades en la higiene bucal, pérdida precoz de piezas dentales debido a caries y otras enfermedades, mientras que lo segundo puede provocar problemas en la musculatura asociada, lo que se traducen en  dolor de cabeza, y rigidez de cuello.';
    const subTitle = '¿LA ORTODONCIA ES PARA TODOS?';
    const textTwo = 'Fijos (Frenillos y Brackets) o Removibles (placas o aparatos de acrílico, alineadores invisibles)';
    const textThree = 'En CPH Salud contamos con los siguientes tratamientos:';
    const titleAccOne = 'Brackets Metálicos';
    const titleAccTwo = 'Brackets de Ceramica';
    const titleAccThree = 'Alineadores Invisibles y Ortodoncia Acelerada';
    const textAccOne = 'Son los más conocidos, de gran resistencia y más económicos que los cerámicos.';
    const textAccTwo = 'Son más estéticos ya que se adaptan al color del diente, además de ser más delicados al roce.';
    const textAccThree = 'Ortodoncia con placas o alienadores transparentes, casi imperceptibles, de la marca Clear Correct |  Y con la ortodoncia acelerada disminuye hasta un 40% el tiempo de tu tratamiento de ortodoncia. ';
    const accState = true;
    const accCountState = true;

    return (
        <>
            {BannerSpecialLeft(b2, background, title, titleColor, text, subTitle, textTwo, textThree, titleAccOne, titleAccTwo, titleAccThree, textAccOne, textAccTwo, textAccThree, accState, accCountState)}
        </>
    )
}
