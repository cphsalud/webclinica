import b4 from '@/app/assets/bioseguridad/b4.jpg';
import { BannerFullTxtRigth } from '../../Banners/BannerFullTxtRight'

export const BioTextFour = () => {

    const title = 'Pautas de Seguridad';
    const text = '- Si el paciente muestra algún síntoma de resfriado o infección debe evitar asistir a consulta.';
    const titleStyle = {
        'color': '#fff',
        'fontWeight': 700,
        'font-size': 'var(--fs-md)'
    };
    const textStyle = {
        'color': '#fff',
        'fontWeight': 400,
        'font-size': 'var(--fs-sm)',
        'marginBottom': '20px'
    };
    const top = '6%';
    const background = 'linear-gradient(269.95deg, rgba(115, 111, 167, 0.66) 0.04%, rgba(157, 150, 220, 0.0858) 137.91%);';
    const textTwo = '- Si el paciente presenta lesión por herpes labial el tratamiento debe ser pospuesto, debido a que es una lesión altamente contagiosa.';
    const addText = true;


    return (
        <>
            {BannerFullTxtRigth(b4, title, text, top, background, titleStyle, textStyle, addText, textTwo)}
        </>
    )
}
