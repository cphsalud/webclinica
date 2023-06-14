import { PanelTextInfo } from '@/app/styles/Banners'

export const Horarios = () => {
    return (
        <>
            <PanelTextInfo>
                <h1>Horarios de atención</h1>
            </PanelTextInfo>
            <div className="text-fonsasa">
                <h1>
                    Nuestros <strong>horarios de atención</strong> durante la semana, son:
                </h1>
                <br />
                <h1><strong>Lunes a jueves: 09:30 hrs - 18:000hrs</strong></h1>
                <h1><strong>Viernes: 09:30 hrs - 16:000hrs</strong></h1>
            </div>
        </>
    )
}