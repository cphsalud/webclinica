import b1 from '@/app/assets/bioseguridad/b1.jpg'
import { BannerTextCenter } from '../../Banners/BannerTextCenter'

export const BioTxtOne = () => {

    const text = 'Todas las superficies en los box clínicos, sala de espera, sala de Rayos - X, sala de esterilización, laboratorio, oficinas y baños, son desinfectadas varias veces al día por nuestro personal de limpieza y asistentes dentales. De esta forma garantizamos tu seguridad en todo momento.'

    return (
        <>
            {BannerTextCenter(b1, text)}
        </>
    )
}
