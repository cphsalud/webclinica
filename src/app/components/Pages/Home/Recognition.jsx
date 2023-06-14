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
                            <p>Utilizamos tratamientos y <span>tecnologías avanzadas para dar con el diagnóstico más certero</span>
                                y no tratar sólo tus dientes, <span>sino ayudarte a sanar y mejorar</span> tu salud oral.
                                <span>Además</span> ofrecemos tratamientos que conjugan <span>función y alta estética,</span>
                                otorgando una <span>larga duración,</span> ocupando materiales biocompatibles.</p>
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
