import styled, { css } from 'styled-components';
import Tooltip from '../Tooltip';

interface ContainerProps {
    isFocus: boolean;
    isFilled: boolean;
    isError: boolean;
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

    ${({ isError }) => isError && css`
        color:#c53030;
        border-color: #c53030;
    `}

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

    span {
        font-size:12px;
        color: #fff;
    }
`;

export const Error = styled(Tooltip)`
    height: 20px;
    margin-left: 16px;

    svg {
        margin-right:0px;
    }

    span {
        background: #c53030;
        color: #fff;

        &::before {
            border-color: #c53030 transparent;
        }
    }
`;
