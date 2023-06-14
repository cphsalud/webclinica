import { TitleOneHomeContainer } from '@/app/styles/Home';
import { MyImages } from '../../images/MyImages';
import health from '@/app/assets/iconos/health.svg';

export const PanelTextTwo = () => {
    return (
        <TitleOneHomeContainer>
            <p>Porque tu seguridad es nuestra prioridad
            </p>
            {MyImages(health)}
        </TitleOneHomeContainer>
    )
}
