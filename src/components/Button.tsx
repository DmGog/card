import styled, {css} from "styled-components";

type ButtonPropsType = {
    btnType?: "primary" | "outlined"
}
export const Button = styled.button<ButtonPropsType>`
    border: none;
    cursor: pointer;
    border-radius: 5px;
    width: 86px;
    height: 30px;
    font-weight: 700;
    font-size: 10px;
    line-height: 200%;
    margin-right: 12px;
    &:last-child{
        margin-right: 0;
    }
    
    ${props => props.btnType==="primary" && css<ButtonPropsType>`
        background-color: #4e71fe;
        color: #fff;

        &:hover {
            background-color: #5e7dfa;
            box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.1);
        }
    `}

    ${props => props.btnType==="outlined" && css<ButtonPropsType>`
        border: 2px solid #4e71fe;
        background-color: #fff;
        color: #4e71fe;

        &:hover {
            border: 2px solid #5e7dfa;
            color: #5e7dfa;
            background-color: #f5f2f2;
        }
    `}
    
`