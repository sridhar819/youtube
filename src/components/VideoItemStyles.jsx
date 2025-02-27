import styled from "styled-components";

import { Link } from "react-router-dom";

export const VideoItemCard = styled(Link)`
    width: 47%;
    display: flex;
    flex-direction: column;
    padding: 0;
    /* max-height: 300px; */
    text-decoration: none;
    border-radius: 10px;
    
    @media (max-width:556px) {
        width: 100%;

     }

    @media (min-width: 900px) and (max-width:1170px) {
         width: 30%;
    }
     
    @media (min-width:1171px){
        width: 23%;
    }
`

export const ImageCard = styled.div`
          /* height: 50%; */
          width: 100%;

          img{
            width: 100%;
            height: 100%;
            border-radius: 10px;
            min-height: 130px;
          }
         
`

export const DetailsCard = styled.div`
         width: 100%;
         margin-top: 5px;
         display: flex;
         gap: 7px;
         padding: 1px 10px 7px 10px;


      img{
       width: 30px;
        height: 30px;
      }

      .details{
         display: flex;
         flex-direction: column;
         padding: 0;
         align-items: start;
         text-align: start;

         h2{
            font-size: 15px;
            margin: 5px 0 3px 0;
            color: ${props => props.isDark ? "#fff" : "#222"};
         }

         p{
            padding: 0;
            margin: 0;
         }
         
      }

            
         .details > div{
            display: flex;
            p{
                color: #777;
                font-size: 15px;
                margin: 0;
                
            }
         }
         @media (min-width:566px){
            .details > div{
               flex-direction: column;
            }
         }

`

export const Name = styled.p`
    color: red !important;
`