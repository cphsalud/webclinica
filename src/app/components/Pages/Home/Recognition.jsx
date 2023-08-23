import { RecognitionContainer } from "@/app/styles/Home"
import { MyImages } from "../../images/MyImages"
import chile from '@/app/assets/iconos/chile.svg'
import lines from '@/app/assets/home/lines.png'

export const Recognition = () => {
    return (
        <RecognitionContainer>
            <div className="title">
                <h1>Somos <span>un</span></h1>
                <h1>Centro odontológico <span>integral</span></h1>
                <p>Reconocidos por contar con con más de <b>17 años de trayectoria</b> con tratamientos exitosos y de primera calidad. <br />
                    <b>Fundado por el Dr. Francisco Ortiz Lobos,</b> experto en implantes dentales y regeneración ósea avanzada.</p>
            </div>
            <div className="boxes">
                <div className="box">
                    <div className="box-content">
                        <div className="box-text">
                            <h1>La <br /><span>salud oral</span> <br />es el comienzo</h1>
                            <p>de una buena salud integral.</p>
                        </div>
                    </div>
                </div>
                <div className="box">
                    <div className="box-content">
                        {MyImages(lines)}
                        <div className="bg"></div>
                        <div className="box-text">
                            <p><span>¿Por qué elegir a CPHsalud?</span>
                                <br />
                                - Contamos con todas las especialidades  <br />
                                - Contamos con laboratorio propio de última tecnología <br />
                                - Las mejores garantías en la industria dental <br />
                                - Facilidades de pago para tu comodidad
                            </p>
                        </div>
                    </div>
                </div>
                <div className="box">
                    <div className="box-content">
                        <div className="box-text">
                            <p>Contamos con <span>profesionales especializados, equipo técnico y equipo administrativo</span> con gran experiencia, todos enfocados en tratar al paciente de forma integral.
                                <span>Entregando salud y mejorando vidas</span> en pleno corazón de Santiago de Chile.</p>
                        </div>
                        {MyImages(chile)}
                    </div>
                </div>
            </div>
        </RecognitionContainer>
    )
}
