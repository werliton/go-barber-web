import styled, { css } from 'styled-components';

interface ContainerProps {
    isFocus: boolean;
    isFilled: boolean
}

export const Container = styled.div<ContainerProps>`
    background: #232129;
    border-radius: 10px;
    border: 2px solid #232129;
    padding: 16px;
    width: 100%;
    color: #666360;
    display: flex;
    align-items:center;

    & + div {
        margin-top: 10px;
    }

    ${({ isFocus }) => isFocus && css`
        color:#FF9000;
        border-color: #FF9000;
    `}
    ${({ isFilled }) => isFilled && css`
        color:#FF9000;
    `}
    input {
        color: #f4ede8;
        background: transparent;
        border: 0;
        flex: 1;

        &::placeholder {
            color: #666360;
        }
    }

    svg {
        margin-right: 16px;
    }
`;
