import { TitleOneHomeContainer } from '@/app/styles/Home';
import medalla from '@/app/assets/iconos/medalla.svg';
import Image from 'next/image';

export const TitleOneHome = () => {
    return (
        <TitleOneHomeContainer>
            <p>Reconocidos a <span>nivel nacional</span> por el <span>éxito y calidad</span> de nuestros tratamientos
            </p>
            <Image src={medalla} alt='' />
        </TitleOneHomeContainer>
    )
}
