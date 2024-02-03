import React from 'react'
import styled from 'styled-components';

export enum ButtonType{
    Number,
    Operation,
    Control
}

type Props = React.HTMLProps<HTMLButtonElement> & {
    buttonType?: ButtonType;
    label: string;
    position?: [x: number, y: number]; // позиция для кнопки в сетке
    width?: number;
    /* height?: number; */
}


const StyledButton = styled.button` // оформление кнопок
    background: #FF8A00;
    border: none;
    border-radius: 10px;
    font-size: 24px;
`;

const Button: React.FC<Props> = ({
    buttonType = ButtonType.Operation,
    label, 
    position, 
    width, 
    /* height */
    onClick,

    }) => {
    const styles: React.CSSProperties = {};

    if (position) {
        styles.gridColumnStart = position[0] + 1;
        styles.gridRowStart = position[1] + 1;
    }
    
    if (width) {
        styles.gridColumnEnd = `span ${width}`;
    }

/*
    if (height) {
        styles.gridRowEnd = `span ${height}`;
    }
*/

    if (buttonType === ButtonType.Number) {
        styles.color = '#fff';
        styles.background = '#717171';
    }

    if (buttonType === ButtonType.Control) {
        styles.background = '#1E1E1E';
        styles.color = '#fff';
    }
    
    return (
        <StyledButton onClick = {onClick} style={styles}>{label}</StyledButton>
    )
}

export default Button;