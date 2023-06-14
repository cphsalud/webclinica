import { BannerSpecialLeft } from '../../Banners/BannerSpecialLeft';
import b6 from '@/app/assets/especialidades/b6.jpg';

export const Periodoncia = () => {

    const background = 'linear-gradient(89.87deg, rgba(33, 32, 81, 0.74) 100%, rgba(81, 79, 163, 0.16) 99.72%)';
    const title = 'Periodoncia';
    const titleColor = '#fff';
    const text = 'Se preocupa de la prevención, diagnóstico y tratamiento de las enfermedades y condiciones que afectan a los tejidos que dan soporte a los órganos dentarios (encía, ligamento periodontal, cemento radicular y hueso alveolar) y a los substitutos implantados, para el mantenimiento de la salud, función y estética de los dientes y sus tejidos adyacentes.';
    const subTitle = '¿QUE ES UNA ENFERMEDAD PERIODONTAL?';
    const textTwo = `La enfermedad periodontal se manifiesta como una gingivitis (inflamación y sangrado de la encía sin afectar el hueso) o periodontitis, donde ocurre la destrucción del hueso que soporta el diente. Si no es tratado a tiempo puede ocasionar la pérdida de los dientes.  Un tratamiento periodontal consiste desde la corrección de la técnica de higiene para el control de la placa bacteriana, hasta la eliminación de los factores desencadenantes de la misma (cálculos dentarios o sarro y bolsas periodontales)`;
    const textThree = '';
    const titleAccOne = 'Casos en los que se debe consultar a un R.O';
    const titleAccTwo = 'Algunos de los tratamientos realizados';
    const titleAccThree = 'Pilar de Cicactrización';
    const textAccOne = 'Pérdida de dientes, fractura y reconstrucciones dentales, cambiar restauraciones defectuosas, esgaste excesivo de dientes, prótesis o reemplazo de las mismas, implementación de coronas.';
    const textAccTwo = 'Incrustaciones cerámicas, coronas y puentes, carillas de cerámica, cambiar restauraciones defectuosas, retratamiento de coronas y puentes, prótesis removible parcial y total';
    const textAccThree = '';
    const accState = false;
    const accCountState = false;

    return (
        <>
            {BannerSpecialLeft(b6, background, title, titleColor, text, subTitle, textTwo, textThree, titleAccOne, titleAccTwo, titleAccThree, textAccOne, textAccTwo, textAccThree, accState, accCountState)}
        </>
    )
}