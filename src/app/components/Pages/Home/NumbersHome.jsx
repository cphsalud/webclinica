import { NumbersContent } from "@/app/styles/Home"
import { MyImages } from "../../images/MyImages"
import circles from '@/app/assets/iconos/circles.svg'


export const NumbersHome = () => {
    return (
        <NumbersContent>
            <div className="circles">
                {MyImages(circles)}
            </div>
            <div className="boxes">
                <div>
                    <h1>15k+</h1>
                    <p>Implantes realizados</p>
                </div>
                <div>
                    <h1>40k+</h1>
                    <p>Pacientess felices</p>
                </div>
                <div>
                    <h1>120+</h1>
                    <p>Cirugías de alta complejidad</p>
                </div>
                <div>
                    <h1>17+</h1>
                    <p>Años de experiencias</p>
                </div>
            </div>
        </NumbersContent>
    )
}
