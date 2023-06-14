import { ButtonLine } from '@/app/styles/Buttons/Buttons'
import { MyImages } from '../images/MyImages'
import arrow from '@/app/assets/iconos/arrow.svg'

export const MyButtonLine = (textButton) => {
    return (
        <ButtonLine>
            <p>{textButton}</p>
            {MyImages(arrow)}
        </ButtonLine>
    )
}

export const MyButtonLineBlack = (textButton) => {
    return (
        <MyButtonLineBlack>
            <p>{textButton}</p>
            {MyImages(arrow)}
        </MyButtonLineBlack>
    )
}
