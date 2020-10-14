import styled from 'styled-components';
import { shade } from 'polished';
import signInBackground from '../../assets/sign-in-background.png';

export const Container = styled.div`
    height: 100vh;

    display: flex;
    align-items: stretch;
`;
export const Content = styled.div`
    display: flex;
    flex-direction: column;

    align-items: center;

    place-content: center;

    width: 100%;
    max-width: 700px;

    form {
        margin: 70px 0;
        width: 340px;
        text-align: center;

        h1 {
            margin-bottom: 24px;
        }

        input {
            background: #232129;
            border-radius: 10px;
            border: 2px solid #232129;
            padding: 16px;
            width: 100%;
            color: #f4ede8;

            &::placeholder {
                color: #666360;
            }

            & + input {
                margin-top: 10px;
            }
        }

        button {
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
        }

        a {
            text-decoration: none;
            color: #F4EDE8;
            display: block;
            margin-top: 16px;
            transition: color 0.2s;

            &:hover {
                color: ${shade(0.2, '#F4EDE8')}
            }
        }

    }

    > a {
        text-decoration: none;
        color: #FF9000;
        align-items: center;
        display: flex;
        transition: color 0.2s;

        &:hover{
            color: ${shade(0.2, '#FF9000')}
        }

        svg {
            margin-right: 16px;
        }
    }
`;

export const Background = styled.div`
    flex: 1;
    background: url(${signInBackground}) no-repeat center;
    background-size: cover;
`;
