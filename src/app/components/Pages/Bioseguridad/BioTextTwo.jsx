import b2 from '@/app/assets/bioseguridad/b2.jpg'
import { BannerTextCenter } from '../../Banners/BannerTextCenter'

export const BioTxtTwo = () => {

    const text = 'Todo nuestro instrumental es debidamente lavado, desinfectado y esterilizado en paquetes individuales dentro de autoclaves (esterilizadores a calor húmedo y presión).'

    return (
        <>
            {BannerTextCenter(b2, text)}
        </>
    )
}
