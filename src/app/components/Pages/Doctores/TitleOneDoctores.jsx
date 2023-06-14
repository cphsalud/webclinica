import { TitleDoctores } from '@/app/styles/Doctores'
import circles from '@/app/assets/iconos/circles.svg'
import { MyImages } from '../../images/MyImages'

export const TitleOneDoctores = () => {
    return (
        <TitleDoctores>
            <div className="txt">
                <h1>Cambiando Vidas</h1>
                <h3>con nuestro equipo multidisciplinario</h3>
                <p>Profesionales altamente capacitados para entregarte salud y mejorar tu calidad vida.</p>
            </div>
            <div className="circles">
                {MyImages(circles)}
            </div>
        </TitleDoctores>
    )
}
