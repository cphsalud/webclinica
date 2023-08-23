import { TitleOneHomeContainer } from '@/app/styles/Home';
import medalla from '@/app/assets/iconos/medalla.svg';
import Image from 'next/image';

export const TitleOneHome = () => {
    return (
        <TitleOneHomeContainer>
            <p>Te ayudamos a <span>recuperar</span> tu autoestima y a <span>sonreír sin miedo</span>.
            </p>
            {/* <Image src={medalla} alt='' /> */}
        </TitleOneHomeContainer>
    )
}
