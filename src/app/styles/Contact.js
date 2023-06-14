import styled from 'styled-components';
import { Device } from './Device';

export const ContactContainer = styled.section`
    position: relative;
    width: 100;
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #F1F0F0;
    margin-top: 130px;
    @media ${Device.mobileS} {
        height: auto;
        padding: 50px 20px;
    }
    @media ${Device.tablet} {
        height: 400px;
        padding: 50px 20px 80px;
    }
    .title{
        text-align: center;
        h1{
            font-size: var(--fs-sm);
            color: var(--bluedark-text-color);
            font-weight: 700;
        }
        p{
            font-size: var(--fs-xs);
            color: var(--gray-text-color);
            font-weight: 400;
        }
    }
    .boxes{
        position: relative;
        width: 100%;
        @media ${Device.mobileS} {
            display: block;
        }
        @media ${Device.tablet} {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
        }
        .box{
            padding-top: 60px;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            text-align: center;
            p{
                font-weight: 500;
            }
            a{
                font-weight: 500;
                color: #3CA0E9;
            }
        }
        &:nth-child(1){
            grid-column: 1 / 1;
            grid-row: 1;
        }
        &:nth-child(2){
            grid-column: 2 / 2;
            grid-row: 1;
        }
        &:nth-child(3){
            grid-column: 3 / 3;
            grid-row: 1;
        }

    }
`