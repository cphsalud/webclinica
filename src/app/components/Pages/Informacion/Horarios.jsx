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
                <br />
                <h1>También puedes acceder al formulario de: <a style={{ 'color': 'blue' }} href="https://forms.gle/iFwuX2jY3KKmsEfL6" target="_blank">reclamos, sugerencias o felicitaciones.</a></h1>
            </div>
        </>
    )
}