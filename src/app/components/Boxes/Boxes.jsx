import { BoxesFullContainer } from '@/app/styles/Boxes'
import { MyImages } from '../images/MyImages'

export const Boxes = (textOne, textTwo, textThree, imgOne, imgTwo, imgThree, background, top) => {

    const boxes = [
        {
            id: 1,
            class: 'box-1',
            img: imgOne,
            txt: textOne,
        },
        {
            id: 2,
            class: 'box-2',
            img: imgTwo,
            txt: textTwo,
        },
        {
            id: 3,
            class: 'box-3',
            img: imgThree,
            txt: textThree,
        },
    ]


    return (
        <BoxesFullContainer style={{ 'marginTop': top }}>
            {boxes?.map((boxes, index) => {
                return (
                    <>
                        <div key={index} className={boxes?.class}>
                            <div className="bg" style={background}></div>
                            <div className="img">
                                {MyImages(boxes?.img)}
                            </div>
                            <div className="title">
                                <p>{boxes?.txt}</p>
                            </div>
                        </div>
                    </>
                )
            })}
        </BoxesFullContainer>
    )
}
