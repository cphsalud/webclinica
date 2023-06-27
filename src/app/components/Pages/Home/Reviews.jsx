import { ReviewsContainer } from "@/app/styles/Home";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export const Reviews = () => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <ReviewsContainer>
            <div className="box">
                <h1>Nuestros <br />Pacientes</h1>
            </div>
            <div className="box">
                <Slider {...settings}>
                    <div>
                        <div className="card">
                            <div className="card-body">
                                <div className="text">
                                    <p>Soy cliente frecuente. El tratamiento que me hice
                                        lleva 7 años y está impecable... En otros lados
                                        duraba sólo 2 años.Además, tengo una condición
                                        médica y el doctor antes de hacer el tratamiento
                                        me pidió una visita al Nefrólogo, para asegurarse
                                        que no habrían complicaciones. Tienen descuentos
                                        y orientan mucho. Agradecida.</p>
                                </div>
                                <div className="names">
                                    <b>Cristal Caroca J.</b>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="card">
                            <div className="card-body">
                                <div className="text">
                                    <p>Profesionales confiables y preparados,
                                        así definiría a Clínica Padre Hurtado.
                                        Una atención centrada en las necesidades
                                        del paciente y con una atención muy
                                        cercana y diagnóstico certero.
                                        Los precios lejos de ser excesivos,
                                        fueron justos en comparación a otros
                                        presupuestos que ya tenia y me dieron
                                        la confianza de que lo que me estaban
                                        diagnosticando respondía plenamente
                                        a mi situación. Muchas gracias a
                                        todo el equipo!
                                    </p>
                                </div>
                                <div className="names">
                                    <b>Alvaro Vizcarra.</b>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="card">
                            <div className="card-body">
                                <div className="text">
                                    <p>
                                        Hola gente , hoy fui a sacarme una muela del juicio con el doctor Francisco Ortiz Lobos, quería decir que es un excelente profesional, muy cercano con sus pacientes, no me dolió nada, ni sentí cuando me extrajo la muela,
                                        el estuvo pendiente de mi con su asistente todo el tiempo y me conversaba para bajar mi nerviosismo, se los recomiendo al 10000% y mas, muchas gracias por su excelente servicio quede muy feliz saludos .
                                    </p>
                                </div>
                                <div className="names">
                                    <b>Leslie Díaz Garrido</b>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </ReviewsContainer>
    )
}
