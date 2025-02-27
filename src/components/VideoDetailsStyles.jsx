import styled from "styled-components";

export const Card = styled.div`
    
    width: 100%;
    padding: 10px;
    background-color: ${props => props.isDark ? "black" : "#ffffff"};

   h6{
    color: ${props => props.isDark ? "#fff" : "#222"};
    margin-top: 7px;
    font-size: 16px;
   }

    .player{
       width: 97% !important;
    }
    .like-section{
        display: flex;
        justify-content: space-between;
        padding: 0;
        margin: 0;

        p{
            margin: 0;
            color: gray;
            font-size: 16px;
        }
    }

    .btn-group{
        display: flex;
        gap: 10px;
        align-items: center;
        button{
            border: none;
            outline: none;
            background-color: transparent;
            font-size: 22px;
            color: #64748b ;
        }
    }
`

export const Channel = styled.div`
    display: flex;
    gap: 10px;

    img{
        width: 40px;
        height: 40px;
    }

    .details{
        padding: 0;
        margin: 0;

        h5{
            font-size: 16px;
            padding: 0;
            color: ${props => props.isDark ? "#fbeeee" : "#222"};
            margin: 0;
        }

        p{
            margin: 0;
            color: grey;
            font-size: 13px;
        }
        .des{
            color: ${props => props.isDark ? "#ede9fa" : "#221e28"};
            margin-top: 1rem;
            font-size: 14px;
            letter-spacing: 0.6px;
        }
    }
          
`