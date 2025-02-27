import styled from 'styled-components'


export const LoginContainer = styled.div`
    display: flex;
    align-items: center;
    background-color: ${props => props.isDark ? "#222" : "#FFF"};
    justify-content: center;
    height: 100vh;
`

export const Form = styled.form`
        min-height: 40vh;
        box-shadow: 0px 0 10px 0 #bfbfbf;
         display: flex;
        flex-direction: column;
        padding: 1rem 17px;
        width:60%;
        border-radius:12px;
        

        img{
            width: 40%;
            align-self: center;
            margin-bottom: 2rem;
        }
`

export const Label = styled.label`
     color: ${props => props.isDark ? '#938b8b' : '#625a5a'};
     font-size: 13px;
     font-weight: 400;
     margin-top: 10px;

`

export const Input = styled.input`
    border: none;
    outline: none;
    padding: 10px 12px;
    font-size: 16px;
    background: #f19797;
    color: #100000;
    margin-top: 10px;
    border-radius: 6px;
`