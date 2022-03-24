import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --background: #f6f6f6
    }
    *{
        margin: 0;
        padding: 0 ;

        box-sizing: border-box ;
    }

    body{
        background: var(--background) ;
        -webkit-font-smoothing: antialiased;
    }

    body, button{
        font-family: 'Poppins', sans-serif ;
        font-weight: 400 ;
    }

    html{
        @media(max-width: 1080px){
            font-size: 93.75%;
        }

        @media(max-width: 720px){
            font-size: 87.5%;
        }
    }
`;
