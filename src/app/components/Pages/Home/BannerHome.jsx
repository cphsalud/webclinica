import { BannerContent } from "@/app/styles/Home";
import b1 from "@/app/assets/home/image.jpg";
import v1 from "@/app/assets/home/video.mp4";
import { MyButtonLine } from "../../Buttons/MyButtonLine";
import { MyImages } from "../../images/MyImages";

export const BannerHome = () => {
    return (
        <BannerContent>
            <div className="box-one">
                <div className="bg-b1"></div>
                {MyImages(b1)}
            </div>
            <div className="box-two">
                <div className="bg-b1"></div>
                <video autoPlay loop muted playsInline>
                    <source src={v1} />
                </video>
                <div className="title">
                    <h1>17 años de experiencia</h1>
                    <p>en <span>Odontología</span> Avanzada</p>
                    <a href="https://a878ac7020d193c1dc78740f7966df3c6a02c5e8.agenda.softwaredentalink.com/agendas/agendaExpress" target='_blank'>
                        {MyButtonLine('Agenda tu Hora')}
                    </a>
                </div>
            </div>
        </BannerContent>
    )
}
