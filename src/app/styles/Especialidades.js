import styled from 'styled-components';
import { Device } from './Device';

export const PanelTextContainer = styled.section`
    position: relative;
    width: 100;
    max-width: 1300px;
    margin: 0 auto;
    height: auto;
    text-align: center;
    padding: 6% 2%;
    h1{
        font-size: var(--fs-sm);
        color: var(--bluedark-text-color);
        font-weight: 400;
    }
`