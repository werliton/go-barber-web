import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.button`
    background: #FF9000;
    border: 0px;
    width: 100%;
    border-radius: 8px;
    margin-top: 16px;
    padding: 16px;

    font-weight: 500;
    color: #312e38;
    transition: background 0.2s;

    &:hover {
        background: ${shade(0.2, '#FF9000')}
    }
`;
