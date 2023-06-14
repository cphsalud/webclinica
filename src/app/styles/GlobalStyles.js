import { createGlobalStyle } from 'styled-components';
import { Device } from './Device';

export const GlobalStyle = createGlobalStyle`

   :root{
    
    --gray-text-color: #6D6D6D;
    --bluedark-text-color: #3f3e66;  
    
    @media ${Device.mobileS}{
      --fs-lg: 2.5rem;
      --fs-mdl: 1.75rem;
      --fs-md: 1.50rem;
      --fs-sm: 1.25rem;
      --fs-xs: 1.25rem;
      --fs-xxs: .9rem;
      --fs-xxxs: 0.7rem;
    }
    @media ${Device.tablet}{
      --fs-lg: 3rem;
      --fs-mdl: 2.5rem;
      --fs-md: 2rem;
      --fs-sm: 1.5rem;
      --fs-xs: .9rem;
      --fs-xxs: 0.75rem;
      --fs-xxxs: 0.7rem;
    }
    @media ${Device.laptop}{
      --fs-lg: 4rem;
      --fs-mdl: 3rem;
      --fs-md: 2.5rem;
      --fs-sm: 2rem;
      --fs-xs: 1.2rem;
      --fs-xxs: 0.75rem;
      --fs-xxxs: 0.5rem;
    }
    @media ${Device.laptopL}{
      --fs-lg: 5rem;
      --fs-mdl: 3.2rem;
      --fs-md: 3rem;
      --fs-sm: 2rem;
      --fs-xs: 1.5rem;
      --fs-xxs: 1rem;
      --fs-xxxs: 0.7rem;
    }
    @media ${Device.desktop}{
      --fs-lg: 7rem;
      --fs-mdl: 5rem;
      --fs-md: 4rem;
      --fs-sm: 3.5rem;
      --fs-xs: 2.5rem;
      --fs-xxs: 1.5rem;
    }

  }

 

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    scroll-behavior: smooth;
  }

  .header-down{
    background: rgba(45, 44, 66, 0.79);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    transition: .4s all ease-in-out;
  }

  body > section > section.sc-cLuaVy.ftOTyY > div:nth-child(2) > div > h3{
    position: relative;
    top: -20px;
  }
  body > section > section.sc-kbXxHg.kuDCaN > div:nth-child(2) > div{
    position: relative;
    top: -40px!important;
  }

  .img-derecho{
    position: relative;
    width: 100%;
    padding: 3%;
    display: flex;
    justify-content: center;
    img{
      width: 100%;
      
    }
  }

  .text-fonsasa{
    position: relative;
    width: 100%;
    max-width: 1350px;
    margin: auto;
    padding: 5% 2%;
    h1{
      font-weight: 400;
      font-size: var(--fs-xs);
    }
    a{
      button{
        margin-top: 30px;
      }
    }
    ul{
      margin: 3% 0;
      padding-left: 3%;
      list-style: disc;
    }
  }

  .text-garantias{
    position: relative;
    width: 100%;
    max-width: 1350px;
    margin: auto;
    padding: 5% 2%;
    @media ${Device.mobileS}{
      padding: 5% 5%;
    }
    @media ${Device.tablet}{
      padding: 5% 2%;
    }
    h1{
      font-weight: 400;
      font-size: var(--fs-xs);
    }
    a{
      button{
        margin-top: 30px;
      }
    }
    ul{
      margin: 3% 0;
      padding-left: 3%;
      list-style: disc;
      li{
        font-weight: 300;
        font-size: var(--fs-xs);
      }
    }
  }

`;
