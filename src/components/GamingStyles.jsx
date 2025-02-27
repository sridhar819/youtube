import styled from "styled-components";

export const GamingCard = styled.div`
    width: 30%;
    padding: 0;

    a{
        text-decoration: none;
    }
    .details{
         padding: 5px;
         display: flex;
         flex-direction: column;
         align-items: start;

         h5{
            margin: 0;
            color: ${props => props.isDark ? "#fff" : "#222"};
            font-size: 15px;
            font-weight: 500;
         }
         p{
            color: gray;
         }
    }

    img{
        width: 100%;
    }

    @media (min-width:900px) {
        width: 23%;
        
    }
`