import styled from 'styled-components'
import { Device } from './Device'
import one from '@/app/assets/doctores/1.jpg'
import two from '@/app/assets/doctores/2.jpg'
import three from '@/app/assets/doctores/3.jpg'
import four from '@/app/assets/doctores/4.jpg'
import five from '@/app/assets/doctores/5.jpg'
import six from '@/app/assets/doctores/6.jpg'
import seven from '@/app/assets/doctores/7.jpg'
import eight from '@/app/assets/doctores/8.jpg'
import nine from '@/app/assets/doctores/9.png'

export const TitleDoctores = styled.section`
    position: relative;
    width: 100%;
    height: 400px;
    text-align: center;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 5%;
    .txt{
        h1{
            font-size: var(--fs-lg);
            background: linear-gradient(98.28deg, #BCBCBC -1.38%, #0890DC 99.28%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            font-weight: 700;
        }
        h3{
            font-size: var(--fs-mdl);
            color: #9F9F9F;
            @media ${Device.mobileS}{
                margin-top: -10px;
            }
            @media ${Device.laptop}{
                margin-top: -20px;
            }
        }
        p{
            font-size: var(--fs-xs);
            color: #7D7D7D;
            @media ${Device.mobileS}{
                margin-top: 10px;
            }
            @media ${Device.laptop}{
                margin-top: 0px;
            }
        }
    }
    .circles{
        position: absolute;
        top: 180px;
        img{
            width: 100%;
            max-width: 800px;
        }
    }
`

export const ProfilesContainer = styled.section`
    position: relative;
    width: 100%;
    margin: 0 auto;
    grid-gap: 20px;
    margin-top: 80px;
    @media ${Device.mobileS}{
        display: block;
        height: auto;
        max-width: 350px;
    }
    @media ${Device.tablet}{
        display: grid;
        grid-template-columns: 1fr 1fr;
        padding: 0 5%;
        height: auto;
        max-width: 900px;
    }
    @media ${Device.laptop}{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        height: auto;
        max-width: 1200px;
    }
    div{
        position: relative;
        width: 100%;
        max-height: 440px;
        border-radius: 6px;
        overflow: hidden;
        img{
            position: absolute;
            width: 100%;
            top: 0;
            object-fit: cover;
            @media ${Device.mobileS}{
                height: 500px;
                max-height: 440px;
            }
            @media ${Device.tablet}{
                height: 48vw;
                max-height: 440px;
            }
            @media ${Device.laptop}{
                height: 500px;
                max-height: 440px;
            }
        }
        .bg{
            position: relative;
            width: 100%;
            height: 100%;
            top: 40px;
            left: 0;
            background: linear-gradient(180deg, rgba(255, 255, 255, 0) 70.41%, rgba(0, 0, 0, 0.9) 100%);
            @media ${Device.mobileS}{
                height: 500px;
                bottom: -30px;
            }
            @media ${Device.tablet}{
                height: 48vw;
                bottom: -10px;
            }
            @media ${Device.laptop}{
                height: 550px;
            }
        }
        .text{
            position: absolute;
            bottom: 0;
            width: 100%;
            display: flex;
            justify-content: flex-end;
            flex-direction: column;
            padding: 15px;
            h3{
                color: #fff;
                font-size: var(--fs-xs);
            }
            p{
                font-size: var(--fs-xxxs);
                color: #fff;
            }
        }
        #eye{
            position: absolute;
            width: 100%;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            z-index: 3;
            top: 10px;
            padding-right: 45px;
            a{
                cursor: pointer;
                transition: .3s all ease-in-out;
                opacity: 1;
                img{
                    width: 30px;
                    height: 20px;
                }
                &:hover{
                    opacity: .5;
                }
            }
            
        }
        @media ${Device.mobileS}{
            height: 500px;
            margin-bottom: 30px;
        }
        @media ${Device.tablet}{
            height: 48vw;
            margin-bottom: 10px;
        }
        @media ${Device.laptop}{
            height: 35vw;
        }
        &:nth-child(1){
            @media ${Device.tablet}{
                grid-column: 1/2;
                grid-row: 1;
            }
            @media ${Device.laptop}{
                grid-column: 1/1;
                grid-row: 1;
            }
        }
           
        &:nth-child(2){
            height: 31vw;
            max-height: 400px;
            @media ${Device.mobileS}{
                height: 500px;
            }
            @media ${Device.tablet}{
                height: 43vw;
                grid-column: 2/2;
                grid-row: 1;
            }
            @media ${Device.laptop}{
                height: 31vw;
                grid-column: 2/2;
                grid-row: 1;
            }
        }
        &:nth-child(3){
            @media ${Device.tablet}{
                grid-column: 1/1;
                grid-row: 2;
            }
            @media ${Device.laptop}{
                grid-column: 3/3;
                grid-row: 1;
            }
            
        }
        &:nth-child(4){
            position: relative;
            @media ${Device.tablet}{
                top: -50px;
                grid-column: 2/2;
                grid-row: 2;
            }
            @media ${Device.laptop}{
                top: 0px;
                grid-column: 1/1;
                grid-row: 2;
            }
        }
        &:nth-child(5){
            position: relative;
            @media ${Device.mobileS}{
                top: 0px;
            }
            @media ${Device.tablet}{
                grid-column: 1/1;
                grid-row: 3;
            }
            @media ${Device.laptop}{
                margin-top: -50px;
                grid-column: 2/2;
                grid-row: 2;
            }
        }
        &:nth-child(6){
            grid-column: 3/3;
            grid-row: 2;
            @media ${Device.tablet}{
                
                grid-column: 1/1;
                grid-row: 3;
            }
            @media ${Device.laptop}{
                grid-column: 3/3;
                grid-row: 2;
            }
           }
        &:nth-child(7){
            grid-column: 1/1;
            grid-row: 3;

        }
        &:nth-child(8){
            grid-column: 2/2;
            grid-row: 3;
            position: relative;

            @media ${Device.mobileS}{
                top: 0px;
            }
            @media ${Device.tablet}{
                top: -4.5vw;
            }
            @media ${Device.laptop}{
                top: -50px;
            }
        }
        &:nth-child(9){
            grid-column: 3/3;
            grid-row: 3;
            }

    }
`