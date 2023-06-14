import { ServicesContainer } from '@/app/styles/Home';
import { MyImages } from '../images/MyImages';
import logo from '@/app/assets/logos/logocolor.svg';
import { ButtonLineBlack } from '@/app/styles/Buttons/Buttons';

export const Services = () => {
    return (
        <ServicesContainer>
            <div className="bg"></div>
            <div className="services__content">
                <div className="services__title">
                    {MyImages(logo)}
                </div>
                <div className="services__text">
                    <p>Es la nueva forma de <b>vivir la odontología</b> en Chile.</p>
                </div>
                <ButtonLineBlack>Conoce más sobre nuestros servicios</ButtonLineBlack>
            </div>
        </ServicesContainer>
    )
}
