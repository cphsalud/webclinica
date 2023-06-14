import styled from 'styled-components'

export const ButtonLine = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 40px;
    height: 45px;
    background: transparent;
    border: 1.5px solid #FFFFFF;
    border-radius: 100px;
    text-align: center;
    transition: .3s all ease-in-out;
    cursor: pointer;
    &:hover{
        background-color: #08B1DC;
        border: 1.5px solid #08B1DC;
    }
    p{
        font-size: 1rem!important;
        margin: 0!important;
        font-weight: 500;
        color: #FFFFFF!important;
    }
    picture{
        padding-left: 20px;
        img{
            width: 100%;
            max-width: 9px!important;
            margin-top: 4px;  
        }
    }
`

export const ButtonLineBlack = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 40px;
    height: 45px;
    background: transparent;
    border: 1.5px solid #000;
    border-radius: 100px;
    text-align: center;
    transition: .3s all ease-in-out;
    cursor: pointer;
    z-index: 1;
    &:hover{
        background-color: #08B1DC;
        border: 1.5px solid #08B1DC;
    }
    p{
        font-size: 1rem!important;
        margin: 0!important;
        font-weight: 500;
        color: #FFFFFF!important;
    }
    picture{
        padding-left: 20px;
        img{
            width: 100%;
            max-width: 9px!important;
            margin-top: 4px;  
        }
    }
`

export const ButtonComplete = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 26px;
    height: 30px;
    background: #fff;
    border-radius: 100px;
    text-align: center;
    transition: .3s all ease-in-out;
    color: var(--bluedark-text-color);
    cursor: pointer;
    z-index: 1;
    &:hover{
        background-color: #08B1DC;
        color: #fff;
    }
    p{
        font-size: .8rem!important;
        margin: 0!important;
        font-weight: 500;
    }
`