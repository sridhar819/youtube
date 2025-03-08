import styled from 'styled-components';

export const HomeContainer = styled.div`
  display: flex;
  min-height: 90vh;
  background: ${props => props.isDark ? "black" : "#ffffff"};
`;



export const Big = styled.div`
     width: 30%;
     min-width: 250px;
     flex-shrink: 1;
     max-width: 300px;
     display: flex;
     flex-direction: column;
     height: 92vh;
     background: ${props => props.isDark ? "#222" : "#e9e5e5"};
    ul{
        display: flex;
        flex-direction: column;
        list-style-type: none;
        width: 100%;
        padding: 0;
    }

    .social{
        margin-top: auto;
        padding: 10px;

        >div{
            display: flex;
            gap: 8px;
            img{
                width: 30px;
            }
        }
        p{
            margin: 6px 0 5px 0;
            color: ${props => props.isDark ? "#fff" : "#222"};
        }
    }

    li{
        width: 100%;
    }
    a{
        text-decoration: none;
        padding: 10px ;
        font-size: 15px;
        width: 100%;
        display: flex;
        align-items: center;
        gap: 5px;
        font-weight: 400;
        color: ${props => props.isDark ? "#fff" : "#222"};
    }

    .active{
        background-color:#968f8f;
        width: 100%;
        color: red;
    }

    @media screen and (max-width:769px) {
          display: none;
    }
`

export const Card = styled.div`
      
      height:92vh;
      flex-grow: 1;
      padding: 1rem;

`

export const SearchCard = styled.div`
      display: flex;
      align-items: center;
      background-color: transparent;
      width: 40%;
      max-width: 350px;
      border-radius: 4px;
      color: ${props => props.isDark ? "#fff" : "#222"};
      border: 1px solid gray;

      input{
         width: 85%;
         outline: none;
         border: none;
         border-right: 1px solid gray;
         padding: 5px 12px;
         background-color: transparent;
         color: ${props => props.isDark ? "#fff" : "#222"};
      }

      button{
        border: none;
        outline: none;
        background-color: transparent;
        display: flex;
        color: ${props => props.isDark ? "#fff" : "#222"};
       align-items: center;
       justify-content: center;
       flex-grow: 1;
      }
`

export const VideoCard = styled.ul`
    list-style: none;
    width: 100%;
    margin-top: 1rem;
    padding: 0px;
    height: 82vh;
    overflow-y: auto;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;

    ::-webkit-scrollbar{
        display: none;
    }
    scrollbar-width: none; 

  /* Hide scrollbar for IE and older Edge */
     -ms-overflow-style: none;
`