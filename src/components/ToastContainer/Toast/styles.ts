import styled, { css } from 'styled-components';
import { animated } from 'react-spring';

interface ToastProps {
    type?: 'success' | 'error' | 'info'
    hasDescription: boolean
}

const toastTypes = {
  info: css`
        background: #ebf8ff;
        color: #3172b7;
    `,
  success: css`
        background: #e6fffa;
        color: #2e656a;
    `,
  error: css`
        background: #fddede;
        color: #c53030;
    `,
};

export const Container = styled(animated.div)<ToastProps>`

    width: 350px;
    position: relative;
    border-radius: 10px;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);

    padding: 16px 30px 16px 16px;
    display: flex;

    ${({ type }) => toastTypes[type || 'info']}

    > svg {
        margin: 4px 12px 0 0;
    }

    div {
        flex: 1;

        p {
            margin-top: 4px;
            font-size:14px;
            opacity:0.8;
            line-height: 20px;
        }
    }

    button {
        position: absolute;
        right: 16px;
        top: 19px;
        opacity: 0.6;
        border: 0;
        background: transparent;
        color: inherit;
    }

    & + div {
        margin-top: 8px;
    }
`;
