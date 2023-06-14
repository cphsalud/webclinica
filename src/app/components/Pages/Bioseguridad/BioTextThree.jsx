import b3 from '@/app/assets/bioseguridad/b3.jpg';
import { BannerFullTxtRigth } from '../../Banners/BannerFullTxtRight'

export const BioTextThree = () => {

    const title = '';
    const text = 'Previo a la evaluación clínica, le entregamos al paciente un vaso desechable con un colutorio de clorhexidina al 0.12 % (solución antiséptica) con el que debe enjuagarse durante 1 minuto.';
    const titleStyle = {
        'color': '#2D2C42',
        'fontWeight': 400,
        'font-size': 'var(--fs-sm)'
    };
    const textStyle = {
        'color': '#2D2C42',
        'fontWeight': 400,
        'font-size': 'var(--fs-sm)',
        'marginBottom': '20px'
    };
    const top = '6%';
    const background = 'linear-gradient(270deg, #FFFFFF 36.82%, rgba(255, 255, 255, 0) 107.11%)';
    const textTwo = 'Esto permite reducir en gran medida la carga bacteriana y viral en boca.';
    const addText = true;


    return (
        <>
            {BannerFullTxtRigth(b3, title, text, top, background, titleStyle, textStyle, addText, textTwo)}
        </>
    )
}
