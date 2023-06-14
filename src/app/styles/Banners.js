import styled from 'styled-components';
import { Device } from './Device';

export const BannerOneContainer = styled.section`
    position: relative;
    width: 100;
    @media ${Device.mobileS} {
        height: 350px;
    }
    @media ${Device.tablet} {
        height: 450px;
    }
    .img{
        position: absolute;
        width: 100%;
        top: 0;
        left: 0;
        img{
            width: 100%;
            object-fit: cover;
            @media ${Device.mobileS} {
                height: 350px;
            }
            @media ${Device.tablet} {
                height: 450px;
            }
        }
    }
    .video{
        position: absolute;
        width: 100%;
        top: 0;
        left: 0;
        background-color: #fff;
        video{
            width: 100%;
            object-fit: cover;
            @media ${Device.mobileS} {
                height: 350px;
            }
            @media ${Device.tablet} {
                height: 450px;
            }
        }
    }
    .bg{
        position: absolute;
        width: 100%;
        left: 0px;
        top: 0px;
        background: linear-gradient(180deg, rgba(0, 0, 0, 0.57) 0%, rgba(0, 0, 0, 0) 100%);
        @media ${Device.mobileS} {
            height: 350px;
        }
        @media ${Device.tablet} {
            height: 450px;
        }
    }
    .title{
        position: relative;
        display: flex;
        justify-content: center;
        flex-direction: column;
        padding: 0 5%;
        @media ${Device.mobileS} {
            height: 350px;
        }
        @media ${Device.tablet} {
            height: 450px;
        }
        h1{
            font-size: var(--fs-mdl);
            color: #fff;
            font-weight: 600!important;
        }
        .line{
            height: 3px;
            background: linear-gradient(90deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 58.85%);
        }
    }
`

export const PanelTextContainer = styled.section`
    position: relative;
    width: 100%;
    height: auto;
    text-align: center;
    padding: 1.8% 6%;
    background: linear-gradient(98.28deg, #BCBCBC -1.38%, #0890DC 99.28%);
    @media ${Device.mobileS} {
        padding: 7% 3%;
    }
    @media ${Device.tablet} {
        padding: 1.8% 6%;
    }
    h1{
        font-size: var(--fs-xs);
        color: #fff;
        font-weight: 400;
        @media ${Device.mobileS} {
            font-size: var(--fs-xxs);
        }
        @media ${Device.tablet} {
            font-size: var(--fs-xs);
        }
    }
`

export const BannerTextLeft = styled.section`
    position: relative;
    width: 100%;
    height: 600px;
    text-align: left;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 1.8% 6%;
    .img{
        position: absolute;
        width: 100%;
        height: 600px;
        top: 0;
        left: 0;
        img{
            width: 100%;
            height: 600px;
            object-fit: cover;
        }
    }
    .bg{
        position: absolute;
        width: 100%;
        height: 600px;
        left: 0px;
        top: 0px;
        z-index: 1;
    }
    .txt{
        position: relative;
        width: 100%;
        max-width: 700px;
        z-index: 2;
        h1{
            font-size: var(--fs-mdl);
            font-weight: 700;
            color: #fff;
        }
        p{
            font-size: var(--fs-xs);
            font-weight: 300;
            color: #fff;
        }
    }
`

export const BannerTextRight = styled.section`
    position: relative;
    width: 100%;
    height: 600px;
    text-align: right;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    flex-direction: column;
    padding: 1.8% 6%;
    .img{
        position: absolute;
        width: 100%;
        height: 600px;
        top: 0;
        left: 0;
        img{
            width: 100%;
            height: 600px;
            object-fit: cover;
        }
    }
    .bg{
        position: absolute;
        width: 100%;
        height: 600px;
        left: 0px;
        top: 0px;
        z-index: 1;
    }
    .txt{
        position: relative;
        width: 100%;
        max-width: 700px;
        z-index: 2;
        h1{
            font-size: var(--fs-mdl);
            font-weight: 700;
            color: #fff;
        }
        p{
            font-size: var(--fs-xs);
            font-weight: 300;
            color: #fff;
        }
    }
`

export const BannerImgCenterContainer = styled.section`
    position: relative;
    width: 100%;
    height: auto;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 8% 6%;
    .txt{
        position: relative;
        width: 100%;
        max-width: 1000px;
        h1{
            font-size: var(--fs-mdl);
            font-weight: 700;
            margin-bottom: 20px;
        }
        p{
            font-size: var(--fs-sm);
            font-weight: 300;
            color: #7C7B8D;
        }
    }
    .img{
        img{
            width: 100%;
            height: 80vw;
            max-height: 600px;
        }
    }
`

export const BannerSepecialRightContainer = styled.section`
    position: relative;
    width: 100%;
    overflow: hidden;
    @media ${Device.mobileS} {
        height: auto;
        min-height: 80vh;
    }
    @media ${Device.tablet} {
        height: 40vw;
    }
    .img{
        position: absolute;
        width: 100%;
        top: 0;
        left: 0;
        img{
            width: 100%;
            object-fit: cover;
            @media ${Device.mobileS} {
                height: auto;
                min-height: 100vh;
            }
            @media ${Device.tablet} {
                height: 40vw;
            }
        }
    }
    .bg{
        position: relative;
        width: 100%;
        z-index: 1;
        height: auto;
        .box{
            position: relative;
            width: 100%;
            z-index: 2;
            @media ${Device.mobileS} {
                display: block;
                padding: 5%;
                height: auto;
                min-height: 90vh;
                padding-top: 60px;
            }
            @media ${Device.tablet} {
                display: grid;
                grid-template-columns: 1fr 1fr;
                height: 40vw;
                padding-top: 0%;
            }
            .txt{
                position: relative;
                width: 100%;
                max-width: 600px;
                z-index: 2;
                text-align: left;
                display: flex;
                justify-content: center;
                align-items: flex-start;
                flex-direction: column;
                @media ${Device.mobileS} {
                    height: auto;
                    max-width: 100%;
                    padding: 0%;
                }
                @media ${Device.tablet} {
                    height: auto;
                    grid-column: 1/1;
                    grid-row: 1;
                    max-width: 700px;
                    padding: 5%;
                }
                h1{
                    font-size: var(--fs-mdl);
                    font-weight: 700;
                    color: #fff;
                    margin-bottom: 10px;
                }
                p{
                    font-size: var(--fs-xxs);
                    font-weight: 300;
                    color: #fff;
                    margin-bottom: 10px;
                }
                b{
                    font-size: var(--fs-xxs);
                    color: #fff;
                    margin-bottom: 10px;
                }
            }
            .accordion{
                position: relative;
                margin: 0 auto;
                z-index: 2;
                text-align: left;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                padding: 0 0px;
                margin-top: 30px;
                @media ${Device.mobileS} {
                    width: 100%;
                    height: auto;
                    grid-column: 1;
                    grid-row: 2;
                    max-width: 100%;
                }
                @media ${Device.tablet} {
                    width: 100%;
                    grid-column: 2/2;
                    grid-row: 1;
                    max-width: 600px;
                }
            }
        }
    }
`

export const BannerSepecialLeftContainer = styled.section`
    position: relative;
    width: 100%;
    overflow: hidden;
    @media ${Device.mobileS} {
        height: auto;
        min-height: 80vh;
    }
    @media ${Device.tablet} {
        height: 40vw;
    }
    .img{
        position: absolute;
        width: 100%;
        top: 0;
        left: 0;
        img{
            width: 100%;
            object-fit: cover;
            @media ${Device.mobileS} {
                height: auto;
                min-height: 100vh;
            }
            @media ${Device.tablet} {
                height: 40vw;
            }
        }
    }
    .bg{
        position: relative;
        width: 100%;
        z-index: 1;
        height: auto;
        .box{
            position: relative;
            width: 100%;
            z-index: 2;
            @media ${Device.mobileS} {
                display: block;
                padding: 5%;
                height: auto;
                min-height: 90vh;
                padding-top: 60px;
            }
            @media ${Device.tablet} {
                display: grid;
                grid-template-columns: 1fr 1fr;
                height: 40vw;
                padding-top: 0%;
            }
            .txt{
                position: relative;
                width: 100%;
                max-width: 500px;
                z-index: 2;
                display: flex;
                justify-content: center;
                flex-direction: column;
                @media ${Device.mobileS} {
                    height: auto;
                    max-width: 100%;
                    padding: 0%;
                    align-items: flex-start;
                    text-align: left;
                }
                @media ${Device.tablet} {
                    height: auto;
                    grid-column: 2/2;
                    grid-row: 1;
                    max-width: 600px;
                    padding: 5%;
                    align-items: flex-end;
                    text-align: right;
                }
                h1{
                    font-size: var(--fs-mdl);
                    font-weight: 700;
                    color: #fff;
                    margin-bottom: 10px;
                }
                p{
                    font-size: var(--fs-xxs);
                    font-weight: 300;
                    color: #fff;
                    margin-bottom: 10px;
                }
                b{
                    font-size: var(--fs-xxs);
                    color: #fff;
                    margin-bottom: 10px;
                }
            }
            .accordion{
                position: relative;
                margin: 0 auto;
                z-index: 2;
                text-align: left;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                padding: 0 0px;
                margin-top: 30px;
                @media ${Device.mobileS} {
                    width: 100%;
                    height: auto;
                    max-width: 100%;
                }
                @media ${Device.tablet} {
                    width: 100%;
                    grid-column: 1/1;
                    grid-row: 1;
                    max-width: 600px;
                }
            }
        }
    }
 
`

export const BannerTextCenterContainer = styled.section`
    position: relative;
    width: 100%;
    height: auto;
    text-align: center;
    overflow: hidden;
    .img{
        position: absolute;
        top: 0;
        left: 0;
        img{
            width: 100%;
            object-fit: cover;
            @media ${Device.mobileS} {
                height: 500px;
            }
            @media ${Device.tablet} {
                height: 45vw;
            }
        }
    }
    .bg{
        position: relative;
        width: 100%;
        height: 40vw;
        z-index: 1;
        background: linear-gradient(180deg, #726EA7 0%, rgba(81, 79, 163, 0.16) 220.97%);
        @media ${Device.mobileS} {
            height: 500px;
        }
        @media ${Device.tablet} {
            height: 45vw;
        }
        .text{
            position: relative;
            width: 100%;
            height: 40vw;
            display: flex;
            justify-content: center;
            align-items: center;
            max-width: 1300px;
            margin: auto;
            padding: 5%;
            @media ${Device.mobileS} {
                height: 500px;
            }
            @media ${Device.tablet} {
                height: 45vw;
            }
            p{
                font-size: var(--fs-sm);
                font-weight: 600;
                color: #fff;
            }
        }
    }
    
`

export const PanelTextInfo = styled.section`
    position: relative;
    width: 100;
    height: 8vw;
    background: #F3F3F3;
    padding-left: 5%;
    display: flex;
    align-items: center;
    h1{
        font-size: var(--fs-md);
        font-weight: 600;
        color: var(--bluedark-text-color);
    }
`