import styled from "styled-components";


export const Navbar = styled.nav`
    background-color: ${props => props.isDark ? "#222" : "#e9e5e5"};
    padding: 13px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0px 0px 10px 0px #bfbfbf;
   
    ul{
        display: flex;
        gap: 6px;
    }
    /* The switch - the box around the slider */
.switch {
  font-size: 17px;
  position: relative;
  display: inline-block;
  width: 3.5em;
  height: 1.5em;
  margin-top: 5px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  box-shadow: inset 2px 5px 10px rgba(0,0,0,0.3);
  transition: .4s;
  border-radius: 5px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 1em;
  width: 0.1em;
  border-radius: 0px;
  left: 0.3em;
  bottom: 0.3em;
  background-color: white;
  transition: .4s;
}

input:checked + .slider {
  background-color: #171717;
  box-shadow: inset 2px 5px 10px rgb(0, 0, 0);
}

input:checked + .slider:before {
  transform: translateX(2.8em) rotate(360deg);
}

    img{
         width: 25%;
         background-color: transparent !important;
    }
    
`

export const MenuCard = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 30%;
    left: 0;
    height: 100%;
    z-index: 3;
    background: ${props => props.isDark ? "#454141" : "#fcf3f3"};
    top: 0;
    transition: 1s ease;
    animation: slide 0.5s linear;
    display: flex;
    flex-direction: column;

    .close-btn{
        align-self: end;
        font-weight: 600;
        font-size: 25px;
        color: red;
    }
    ul{
        display: flex;
        flex-direction: column;
        margin-top: 1cm;
        list-style-type: none;
        width: 100%;
        padding: 0;
    }
    li{
        width: 100%;
    }
    .social{
      display: flex;
      flex-direction: column;
      margin-top: auto;
      padding: 10px;
       >div{
        display: flex;
        gap: 5px;
       }
      img{
        width: 30px;
      }
      p{
        color: ${props => props.isDark ? "#fff" : "#222"};
        font-size: 12px;
        font-family: sans-serif;
        margin: 5px 0 5px 0;
        font-weight: 500;
      }
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
        background-color:#87d6b0;
        width: 100%;
        color: red;
        border-right: 5px solid #0df55e;
        border-radius: 0 3px 3px 0;
    }

    @keyframes slide {
        0%{
          transform: translateX(-100%);
        }
        100%{
           transform: translateX(0%);
        }
    }

    @media screen and (min-width: 767px) {
        display: none;
    }
`
