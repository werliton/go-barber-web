import styled from 'styled-components';
import { shade } from 'polished';
import signUpBackground from '../../assets/register.png';

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
        color: #F4EDE8;
        align-items: center;
        display: flex;
        transition: color 0.2s;

        &:hover{
            color: ${shade(0.2, '#F4EDE8')}
        }

        svg {
            margin-right: 16px;
        }
    }
`;

export const Background = styled.div`
    flex: 1;
    background: url(${signUpBackground}) no-repeat center;
    background-size: cover;
`;
