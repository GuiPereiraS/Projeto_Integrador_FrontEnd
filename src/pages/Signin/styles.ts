import styled from 'styled-components';
import SignInBackground from '../../assets/login.png';
import { cover, shade } from 'polished';
import { url } from 'inspector';
import { ClientRequest } from 'http';

export const Container  = styled.div`
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
        margin: 80px;
        width: 340px;
        text-align: center;
    
        h1 {
            margin-bottom: 24px;
            color: rgba(255, 144, 0, 1);
        }
    
        input {
            background: #FFFFFF;
            border-radius: 10px;
            border: 2px solid #FFFFFF;
            padding: 16px;
            width: 100%;
            /*color: #f4ede8; */

            &::placeholder{
                color:#666360;
            }

            & + input{
            margin-top: 8px;
            }
        
        }
        
        Buttom {
            background: rgba(255, 144, 0, 1);
            height: 56px;
            border-radius: 10px;
            border: 0;
            padding: 0 16px;
            color: rgba(255, 255, 255, 1);
            width: 100%;
            font-weight: 500;
            margin-top: 16px;
            transition: background-color 0.2s;

            &:hover {
                background: ${shade(0.1, 'rgba(255, 144, 0, 1)')}
            }
        }

        a {
            color: rgba(255, 144, 0, 1);
            display: block;
            margin-top: 24px;
            text-decoration: none;
            transition: color 0.2s;
            
            &:hover {
                color: ${shade(0.1, 'rgba(255, 144, 0, 1)')}
            }
            
        }

    }

    > a {
        color: #ff9000;
        display: block;
        margin-top: 24px;
        text-decoration: none;
        transition: color 0.2s;

        display: flex;
        align-items: center;

        svg {
            margin-right: 16px;
        }

        &:hover {
            color: ${shade(0.1, 'rgba(255, 144, 0, 1)')}
        }
    }   
    
`;

export const Background = styled.div`
     flex: 1;
     background: url(${SignInBackground}) no-repeat center;
     background-size: cover;

     `;