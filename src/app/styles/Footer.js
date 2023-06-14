import styled from 'styled-components'
import { Device } from './Device'

export const FooterContainer = styled.footer`
    position: relative;
    width: 100;
    display: flex;
    align-items: center;
    background: rgba(45, 44, 66, 0.79);
    overflow: hidden;
    @media ${Device.mobileS} {
        justify-content: center;
        height: 250px;
        text-align: center;
        flex-direction: column;
        height: auto;
        padding: 10px 20px;
        margin-top: 100px;
    }
    @media ${Device.tablet} {
        justify-content: space-between;
        padding: 0 20px;
        height: 50px;
        margin-top: 100px;
        flex-direction: revert;
    }
    .text{
        p{
            font-size: var(--fs-xxs);
            color: #fff;
        }
    }
    .logo{
        img{
            position: relative;
            top: 3px;
            width: 100px;
        }
    }
`