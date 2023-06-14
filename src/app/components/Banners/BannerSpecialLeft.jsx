import { BannerSepecialLeftContainer } from "@/app/styles/Banners"
import { MyImages } from "../images/MyImages"
import { Fragment, useState } from "react";
import { Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";

export const BannerSpecialLeft = (img, background, title, titleColor, text, subTitle, textTwo, textThree, titleAccOne, titleAccTwo, titleAccThree, textAccOne, textAccTwo, textAccThree, accState, accCountState, textColor) => {

    const [open, setOpen] = useState(0);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };

    const customAnimation = {
        mount: { scale: 1 },
        unmount: { scale: 0.9 },
    };

    return (
        <BannerSepecialLeftContainer>
            <div className="img">
                {MyImages(img)}
            </div>
            <div className="bg" style={{ 'background': background }}>
                <div className="box">
                    <div className="txt">
                        <h1 style={{ 'color': titleColor }}>{title}</h1>
                        <p style={{ 'color': textColor }}>{text} <br /> {textThree}</p>
                        <b style={{ 'color': titleColor }}>{subTitle}</b>
                        <p style={{ 'color': textColor }}>{textTwo}</p>
                        <b style={{ 'color': textColor }}>{textThree}</b>
                    </div>
                    <div className="accordion">
                        {accState &&
                            <Fragment>
                                <Accordion className="bg-slate-300" open={open === 1} animate={customAnimation}>
                                    <AccordionHeader className="text-white hover:text-white" onClick={() => handleOpen(1)}>
                                        {titleAccOne}
                                    </AccordionHeader>
                                    <AccordionBody className="text-white hover:text-white">
                                        {textAccOne}
                                    </AccordionBody>
                                </Accordion>
                                <Accordion open={open === 2} animate={customAnimation}>
                                    <AccordionHeader className="text-white hover:text-white" onClick={() => handleOpen(2)}>
                                        {titleAccTwo}
                                    </AccordionHeader>
                                    <AccordionBody className="text-white hover:text-white">
                                        {textAccTwo}
                                    </AccordionBody>
                                </Accordion>
                                <Accordion style={accCountState === true ? { 'display': 'block' } : { 'display': 'none' }} open={open === 3} animate={customAnimation}>
                                    <AccordionHeader className="text-white hover:text-white" onClick={() => handleOpen(3)}>
                                        {titleAccThree}
                                    </AccordionHeader>
                                    <AccordionBody className="text-white hover:text-white">
                                        {textAccThree}
                                    </AccordionBody>
                                </Accordion>
                            </Fragment>
                        }
                    </div>
                </div>
            </div>

        </BannerSepecialLeftContainer>
    )
}
