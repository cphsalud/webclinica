import styled from 'styled-components'
import { Device } from './Device'
import c1 from '../assets/home/c1.jpg'
import c2 from '../assets/home/c2.jpg'
import c3 from '../assets/home/c3.jpg'
import sangre from '../assets/home/sacandosangre.jpg'

export const BannerContent = styled.section`
    position: relative;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    overflow: hidden;
    @media ${Device.mobileS}{
        display: block;
        height: 70vh;
    }
    @media ${Device.tablet}{
        height: 80vh;
        display: grid;
    }
    .box-one{
        width: 100%;
        grid-column: 1/1;
        grid-row: 1;
        img{
            width: 100%;
            height: 80vh;
            object-fit: cover;
        }
        @media ${Device.mobileS}{
            display: none;
        }
        @media ${Device.tablet}{
            display: block;
        }
    }
    .box-two{
        width: 100%;
        grid-column: 2/2;
        grid-row: 1;
        video{
            width: 100%;
            object-fit: cover;
            @media ${Device.mobileS}{
                height: 70vh;
            }
            @media ${Device.tablet}{
                height: 80vh;
            }
        }
        .title{
            position: absolute;
            width: 50%;
            top: 0;
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: flex-end;
            right: 30px;
            z-index: 2;
            text-align: right;
            @media ${Device.mobileS}{
                text-align: center;
                width: 100%;
                align-items: center;
                right: 0px;
                height: 70vh;
            }
            @media ${Device.tablet}{
                text-align: right;
                width: 50%;
                align-items: flex-end;
                right: 30px;
                height: 80vh;
            }
            h1{
                font-size: var(--fs-lg);
                color: #08B1DC;
                font-weight: 700;
                line-height: 80px;
                @media ${Device.mobileS}{
                    line-height: 100%;
                }
                @media ${Device.tablet}{
                    line-height: 80px;
                }
            }
            p{
                font-size: var(--fs-md);
                color: #fff;
                font-weight: 300;
                margin-bottom: 20px;
                @media ${Device.mobileS}{
                    margin-top: 10px;
                }
                @media ${Device.tablet}{
                    margin-top: -10px;
                }
                @media ${Device.laptopL}{
                    font-size: var(--fs-mdl);
                }
                span{
                    font-weight: 500;
                }
            }
        }
    }
    div{
        .bg-b1{
            position: absolute;
            left: 0;
            top: 0;
            width:  100%;
            height: 80vh;
            z-index: 1;
            background: #000;
            opacity: .2;
        }
    }
`

export const TitleOneHomeContainer = styled.div`
    position: relative;
    width: 100%;
    height: auto;
    margin-top: 1%;
    padding: 3% 8%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    p{
        position: relative;
        text-align: center;
        font-size: var(--fs-sm);
        font-weight: 300;
        color: var(--gray-text-color);
        span{
            font-weight: 500;
            color: var(--bluedark-text-color);
        }
    }
    img{
            width: 40px; 
        }
    
`

export const BoxesContainer = styled.section`
    position: relative;
    width: 100%;
    height: auto;
    padding: 10px 20px;
    grid-gap: 20px;
    @media ${Device.mobileS}{
        display: block;
    }
    @media ${Device.tablet}{
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
    @media ${Device.laptop}{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
    }
    div{
        display: flex;
        justify-content: center;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        width: 100%;
        @media ${Device.mobileS}{
            height: 300px;
            margin-bottom: 20px;
        }
        @media ${Device.tablet}{
            height: 32vw;
        }
        @media ${Device.laptop}{
            height: 22vw;
        }
        .title{
            position: relative;
            text-align: center;
            display: flex;
            flex-direction: column;
            @media ${Device.tablet}{
                height: 32vw;
            }
            @media ${Device.laptop}{
                height: 22vw;
            }
            justify-content: center;
            align-items: center;
            p{
                font-size: var(--fs-sm);
                color: #fff;
                font-weight: 400;
            }
            b{
                font-size: var(--fs-sm);
                color: #fff;
                font-weight: 500;
            }
            
        }
    }
    .box-1{
        width: 100%;
        background-image: url(${c1.src});
        border-radius: 8px;
        @media ${Device.tablet}{
            grid-column: 1/1;
            grid-row: 1;
        }
        @media ${Device.laptop}{
            grid-column: 1/1;
            grid-row: 1;
        }
    }
    .box-2{
        width: 100%;
        grid-column: 2/2;
        grid-row: 1;
        background-image: url(${c2.src});
        border-radius: 8px;
        @media ${Device.tablet}{
            grid-column: 2/2;
            grid-row: 1;
        }
        @media ${Device.laptop}{
            grid-column: 2/2;
            grid-row: 1;
        }
    }
    .box-3{
        width: 100%;
        background-image: url(${c3.src});
        border-radius: 8px;
        @media ${Device.tablet}{
            grid-column: 1/3;
            grid-row: 2;
        }      
        @media ${Device.laptop}{
            grid-column: 3/3;
            grid-row: 1;
        }
    }
`

export const NumbersContent = styled.section`
    position: relative;
    width: 100%;
    padding: 10px 20px;
    overflow: hidden;
    @media ${Device.mobileS}{
        height: auto;
    }
    @media ${Device.tablet}{
        height: 400px;
    }
    @media ${Device.laptop}{
        height: 22vw;
    }
    .circles{
        position: absolute;
        width: 100%;
        height: 22vw;
        top: 0;
        left: 0;
        display: flex;
        justify-content: center;
        @media ${Device.mobileS}{
            height: 300px;
            align-items: flex-end;
        }
        @media ${Device.laptop}{
            height: 22vw;
        }
        img{
            @media ${Device.mobileS}{
                width: 500px;
                height: 150px;
            }
            @media ${Device.tablet}{
                width: 70vw;
                height: 17vw;
            }
        }
    }
    .boxes{
        position: relative;
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        @media ${Device.mobileS}{
            display: block;
        }
        @media ${Device.tablet}{
            height: 300px;
            display: grid;
            grid-template-columns: 1fr 1fr;
        }
        @media ${Device.laptop}{
            height: 22vw;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr;
        }
        div{
            position: relative;
            width: 100%;
            height: 22vw;
            @media ${Device.mobileS}{
                height: 150px;
            }
            @media ${Device.tablet}{
                height: 22vw;
            }
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            h1{
                font-weight: 700;
                @media ${Device.mobileS}{
                    font-size: var(--fs-lg);
                }
                @media ${Device.tablet}{
                    font-size: var(--fs-mdl);
                }
            }
            p{
                font-weight: 300;
                font-size: 1rem;
            }
        }
        &:nth-child(1){
            grid-column: 1/1;
            grid-row: 1;
        }
        &:nth-child(2){
            grid-column: 2/2;
            grid-row: 1;
        }
        &:nth-child(3){
            grid-column: 3/3;
            grid-row: 1;
        }
        &:nth-child(4){
            grid-column: 4/4;
            grid-row: 1;
        }
    }
    
`

export const RecognitionContainer = styled.section`
    position: relative;
    width: 100%;
    height: auto;
    padding: 10px 0px;
    margin-top: 10vw;
    .title{
        padding-top: 100px;
        position: relative;
        width: 100%;
        height: auto;
        text-align: center;
        padding: 0 10%;
        h1{
            font-weight: 700;
            &:nth-child(1){
                font-size: var(--fs-md);
                color: var(--bluedark-text-color);
                span{
                    color: #BCBCBC;
                }
            }
            &:nth-child(2){
                font-size: var(--fs-lg);
                background: linear-gradient(98.28deg, #BCBCBC -1.38%, #0890DC 99.28%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
                @media ${Device.mobileS}{
                    margin-top: 0px;
                    line-height: 40px;
                    margin-bottom: 20px;
                }
                @media ${Device.tablet}{
                    margin-top: -5px;
                    line-height: 100%;
                    margin-bottom: 10px;
                }
                @media ${Device.laptopL}{
                    margin-top: -15px;
                    line-height: 100%;
                    margin-bottom: 10px;
                }
                span{
                    color: var(--bluedark-text-color)!important;
                    -webkit-text-fill-color: var(--bluedark-text-color)!important;
                }
            }
        }
        p{
            font-size: .9rem;
            @media ${Device.tablet}{
                font-size: var(--fs-xs);
            }
            b{
                &:nth-child(1){
                    color: #08B1DC;
                }
            }
        }
    }
    .boxes{
        position: relative;
        width: 100%;
        height: auto;
        display: grid;
        grid-template-columns: 1fr 1fr;
        margin-top: 60px;
        border-width: 1px 0px;
        border-style: solid;
        border-color: #CCC9C9;
        @media ${Device.mobileS}{
            display: block;
        }
        @media ${Device.tablet}{
            display: grid;
        }
        .box{
            position: relative;
            text-align: left;
            .box-content{
                .box-text{
                    padding: 12%;
                }
            }
            &:nth-child(1){
                grid-column: 1/1;
                grid-row: 1;
                border-bottom: 1px solid #DFDDDD;
                border-right: 1px solid #DFDDDD;
                .box-content{
                    position: relative;
                    width: 100%;
                    display: flex;
                    align-items: center;
                    @media ${Device.mobileS}{
                        height: 300px;
                    }
                    @media ${Device.tablet}{
                        height: 24vw;
                    }
                    .box-text{
                        h1{
                            font-size: var(--fs-lg);
                            letter-spacing: -0.035em;
                            font-weight: 700;
                            color: #FFFFFF; 
                            text-shadow: 0px 1px 4px rgba(0, 0, 0, 0.7);
                            @media ${Device.mobileS}{
                                line-height: 36px;
                                letter-spacing: -0.035em;
                            }
                            @media ${Device.tablet}{
                                line-height: 43px;
                                letter-spacing: -0.035em;
                            }
                            @media ${Device.laptop}{
                                line-height: 65px;
                                letter-spacing: -0.035em;
                            }
                            @media ${Device.desktop}{
                                line-height: 90px;
                                letter-spacing: -0.035em;
                            }
                            span{
                                color: #429ED2;
                                text-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
                            }
                        }
                        p{
                            font-size: var(--fs-sm);
                            color: #7D7D7D;
                            
                        }
                    }
                }
            }
            &:nth-child(2){
                grid-column: 1/1;
                grid-row: 2;
                border-right: 1px solid #DFDDDD;
                .box-content{
                    position: relative;
                    width: 100%;
                    display: flex;
                    align-items: center;
                    @media ${Device.mobileS}{
                        height: 500px;
                    }
                    @media ${Device.tablet}{
                        height: 24vw;
                    }
                    img{
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        object-fit: cover;
                        @media ${Device.mobileS}{
                            height: 500px;
                        }
                        @media ${Device.tablet}{
                            height: 24vw;
                        }
                    }
                    .bg{
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        z-index: 1;
                        background: radial-gradient(182.91% 182.91% at 50% 50%, #7AB1D0 0%, rgba(187, 186, 255, 0) 100%);
                        @media ${Device.mobileS}{
                            height: 500px;
                        }
                        @media ${Device.tablet}{
                            height: 24vw;
                        }
                    }
                    .box-text{
                        position: relative;
                        z-index: 2;
                        p{
                            font-size: var(--fs-xs);
                            font-weight: 500;
                            color: #FFFFFF;
                           
                            span{
                                color: var(--bluedark-text-color);
                            }
                        }
                    }
                }
            }
            &:nth-child(3){
                grid-column: 2/2;
                grid-row: 1/3;
                .box-content{
                    position: relative;
                    width: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-direction: column;
                    @media ${Device.mobileS}{
                        height: 500px;
                    }
                    @media ${Device.tablet}{
                        height: 48vw;
                    }
                    .box-text{
                        position: relative;
                        z-index: 2;
                        p{
                            font-weight: 500;
                            color: #A1A1A1;
                            @media ${Device.mobileS}{
                                font-size: var(--fs-sm);
                            }
                            @media ${Device.tablet}{
                                font-size: var(--fs-xs);
                            }
                            @media ${Device.laptop}{
                                font-size: var(--fs-sm);
                            }
                            span{
                                color: var(--bluedark-text-color);
                            }
                        }
                    }
                    img{
                        position: relative;
                        margin-top: -40px;
                        width: 80px;
                    }
                }
            }

        }
    }
`

export const ServicesContainer = styled.section`
    position: relative;
    width: 100%;
    height: auto;
    margin-top: 50px;
    .bg{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 400px;
        z-index: 1;
        background: linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0.44) 77.47%);
    }
    .services__content{
        position: relative;
        width: 100%;
        height: 400px;
        background-image: url(${sangre.src});
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 30px;
        .services__title{
            z-index: 2;
            margin-top: -50px;
            img{
                width: 100%;
                max-width: 500px;
            }
        }
        .services__text{
            text-align: center;
            z-index: 2;
            margin-bottom: 20px;
            p{
                font-size: var(--fs-sm);
            }
        }
    }

`

export const ReviewsContainer = styled.section`
    position: relative;
    width: 100%;
    height: auto;
    margin-top: 50px;
    @media ${Device.mobileS}{
        display: block;
    }
    @media ${Device.tablet}{
        display: grid;
        grid-template-columns: .5fr 1fr;
    }
    .box{
        position: relative;
        width: 100%;
        height: 350px;
        overflow-x: hidden;
        display: flex;
        flex-direction: column;
        justify-content: center;
        @media ${Device.laptop}{
            height: 400px;
        }
        @media ${Device.laptopL}{
            height: 400px;
        }
        &:nth-child(1){
            position: relative;
            width: 100%;
            align-items: center;
            @media ${Device.mobileS}{
                height: 100px;
            }
            @media ${Device.tablet}{
                height: 350px;
            }
            @media ${Device.desktop}{
                height: 450px;
            }
            h1{
                font-weight: 800;
                font-size: var(--fs-mdl);
                background: linear-gradient(98.28deg, #BCBCBC -1.38%, #0890DC 99.28%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
                @media ${Device.mobileS}{
                    line-height: 30px;
                }
                @media ${Device.tablet}{
                    line-height: 4vw;
                }
                @media ${Device.laptop}{
                    line-height: 3vw;
                }
            }
        }
        .card{
            position: relative;
            width: 100%;
            padding: 20px;
            .card-body{
                position: relative;
                width: 100%;
                height: 250px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                background: #FFFFFF;
                box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                border-radius: 31px;
                padding: 20px;
                @media ${Device.mobileS}{
                    height: 300px;
                }
                @media ${Device.laptopL}{
                    height: 300px;
                }
                .text{
                    p{
                        color: #474747;
                        font-size: var(--fs-xxs);
                    }
                }
                .names{
                    padding-top: 20px;
                    text-align: right;
                    b{
                        color: #474747;
                        font-size: var(--fs-xxs);
                    }
                }
            }
        }
    }
`


