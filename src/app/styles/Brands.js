import styled from 'styled-components'

export const BrandsContainer = styled.section`
    position: relative;
    width: 100%;
    height: auto;
    overflow: hidden;
    margin-top: 140px;
    div{
        position: relative;
        .img{
            position: relative;
            width: 100%;
            display: flex;
            justify-content: center;
            img{
                width: 200px;
                height: 100px;
                opacity: .5;
            }
        }
        &:nth-child(11){
            img{
                position: relative;
                top: 10px!important;
            }
        }
        
    }    
`