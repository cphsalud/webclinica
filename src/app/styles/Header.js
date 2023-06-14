import styled from 'styled-components';
import { Device } from './Device';

export const HeaderContent = styled.header`
    position: fixed;
    width: 100%;
    height: auto;
    top: 0;
    left: 0;
    z-index: 9;
    .header-container{
        ul{
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 3%;
            z-index: 100;
            list-style: none;
            position: relative;
            width: 100%;
            height: 50px;
            li{
                position: relative;
                width: 100%;
                display: flex;
                &:nth-child(1){
                    justify-content: flex-start;
                }
                &:nth-child(2){
                    @media ${Device.mobileS}{
                        justify-content: flex-end;
                    }
                    @media ${Device.tablet}{
                        justify-content: center;
                    }
                }
                &:nth-child(3){
                    justify-content: flex-end;
                    @media ${Device.mobileS}{
                        display: none;
                    }
                    @media ${Device.tablet}{
                        display: flex;
                    }
                }
                div{
                    display: flex;
                    height: 50px;
                    align-items: center;
                }
                .open-menu{
                    cursor: pointer;
                    img{
                        width: 100%;
                        max-width: 30px;
                    }
                    p{
                        font-size: 1rem;
                        font-weight: 400;
                        color: #fff;
                        margin-left: 10px;
                    }
                }
                .logo{
                    img{
                        width: 100%;
                        max-width: 120px;
                        margin-top: 5px;
                    }
                }
                .rrss-header{
                    a{
                        padding: 0 5px;
                        margin-top: 0px;
                        &:nth-child(2){
                            img{
                                width: 100%;
                                max-width: 28px;
                            }
                        }
                        &:nth-child(3){
                            img{
                                width: 100%;
                                max-width: 32px;
                            }
                        }
                        img{
                            width: 100%;
                            max-width: 28px;
                        }
                    }
                }
            }
        }
    }
    .header-open{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        z-index: 999999;
        transition: .3s all;
        display: none;
        .bg{
            position: absolute;
            width: 100%;
            height: 100vh;
            background: rgba(0, 0, 0, 0.7);
            padding: 0px;
            opacity: 0;
        }
        .circle{
            position: relative;
            margin-left: 2%;
            margin-top: 2%;
            width: 100%;
            height: 50px;
            z-index: 1;
            @media ${Device.mobileS}{
                margin-top: 30px;
            }
            @media ${Device.tablet}{
                margin-top: 30px;
            }
            .rounded{
                width: 50px;
                height: 50px;
                background: #fff;
                border-radius: 100px;
                position: relative;
                display: flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;
                img{
                    width: 25px;
                }
            }
        }
        nav{
            position: absolute;
            background: #fff;
            border-radius: 8px;
            @media ${Device.mobileS}{
                width: 90vw;
                height: 60vh;
                margin-left: 2%;
                margin-right: 100px;
                margin-top: 10px;
            }
            @media ${Device.tablet}{
                width: 350px;
                margin-left: 2%;
                margin-top: 10px;
                height: 80vh;
            }
            ul{
                padding: 20px;
                li{
                    padding: 15px 0;
                    border-bottom: 1px solid #E0E0E0;
                    a{
                        p{
                            font-size: var(--fs-xxs);
                            font-weight: 500;
                            color: var(--bluedark-text-color);
                            cursor: pointer;
                            @media ${Device.tablet}{
                                &:hover{
                                    font-style: italic;
                                    color: #3CA0E9;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`