import styled from 'styled-components';
import { Device } from './Device';


export const BoxesFullContainer = styled.section`
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
        position: relative;
        display: flex;
        justify-content: center;
        width: 100%;
        border-radius: 10px;
        overflow: hidden;
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
        .bg{
            position: absolute;
            width: 100%;
            top: 0;
            left: 0;
            z-index: 1;
            @media ${Device.mobileS}{
                height: 80vw;
            }
            @media ${Device.tablet}{
                height: 32vw;
            }
            @media ${Device.laptop}{
                height: 22vw;
            }
        }
        .img{
            position: absolute;
            width: 100%;
            top: 0;
            left: 0;
            img{
                width: 100%;
                object-fit: cover;
                @media ${Device.mobileS}{
                    height: 80vw;
                }
                @media ${Device.tablet}{
                    height: 32vw;

                }
                @media ${Device.laptop}{
                    height: 22vw;
                }
            }
        }
        .title{
            position: relative;
            width: 100%;
            display: flex;
            justify-content: flex-start;
            align-items: flex-end;
            padding: 10%;
            z-index: 2;
            @media ${Device.tablet}{
                height: 32vw;
            }
            @media ${Device.laptop}{
                height: 22vw;
            }
            p{
                font-size: var(--fs-sm);
                color: #fff;
                font-weight: 500;
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
        @media ${Device.tablet}{
            grid-column: 2/2;
            grid-row: 1;
            img{
                position: relative;
                height: 36vw!important;
            }
           
        }
        @media ${Device.laptop}{
            grid-column: 2/2;
            grid-row: 1;
            img{
                position: relative;
                height: 29vw!important;
            }
        }
    }
    .box-3{
        width: 100%;
        @media ${Device.tablet}{
            grid-column: 1/3;
            grid-row: 2;
            img{
                position: relative;
                height: 80vw!important;
                top: -100px;
            }
        }      
        @media ${Device.laptop}{
            grid-column: 3/3;
            grid-row: 1;
            img{
                top: 0px;
                height: 30vw!important;
            }
        }
    }
`