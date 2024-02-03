import React, { useState } from 'react';
import styled from 'styled-components'
import Button, { ButtonType } from './Button';
import Calc, { CalcInput, InputType, OperatorType } from '../modules/calc';

const Container = styled.div`
    
    // flex: 1;
`;

const Grid = styled.div`
    display: grid;
    grid-gap: 10px; // размер отступа для линий сетки
    grid-template-columns: repeat(4, 80px); // 4 колонки по 80 пикселей
    grid-template-rows: 120px repeat(5, 80px); // 5 строк по 80 пикселей
`;

const Display = styled.div` // экран со значениями
    // align-items: center;
    // justify-items: flex-end;
    background: #DADADA;
    border-radius: 8px;
    // display: flex;
    font-size: 48px;
    text-align: right;
    padding: 28px 24px;
    grid-column-end: span 4; // ширина 4 столбика
`;

const Calculator: React.FC<{}> = () => {
    const [inputs, setInputs] = useState<Array<CalcInput>>([]);
    const state = Calc.getState(inputs);

    const appendInput = (input: CalcInput): void => {
        setInputs(prev => [...prev, input])
    };

    const handleNumerical = (value: number) => () => 
        appendInput({type: InputType.Numerical, value})

    const handleOperator = (operator: OperatorType) => () => 
        appendInput({type: InputType.Operator,  operator})

    const handleClear = () => setInputs([]);

    const handleUndo = () => setInputs((prev) => prev.slice(0, -1));


    return (
       <Container>
            <Grid>
                <Display>{state.displayValue}</Display>
                <Button buttonType = {ButtonType.Control} label='C' position = {[0, 1]} width = {2} onClick = {handleClear} />
                <Button buttonType = {ButtonType.Control} label='Undo' position = {[2, 1]} width = {2} onClick = {handleUndo} />
                <Button label='=' position = {[1, 5]} width = {2} onClick={handleOperator(OperatorType.Equals)} />
                <Button label='+' position = {[3, 5]} onClick={handleOperator(OperatorType.Add)} />
                <Button label='-' position = {[3, 4]} onClick={handleOperator(OperatorType.Subtract)} />
                <Button label='÷' position = {[3, 2]} onClick={handleOperator(OperatorType.Division)} />
                <Button label='×' position = {[3, 3]} onClick={handleOperator(OperatorType.Multiply)} />
                <Button buttonType = {ButtonType.Number} label='9' position = {[2, 2]} onClick = {handleNumerical(9)} />
                <Button buttonType = {ButtonType.Number} label='8' position = {[1, 2]} onClick = {handleNumerical(8)} />
                <Button buttonType = {ButtonType.Number} label='7' position = {[0, 2]} onClick = {handleNumerical(7)} />
                <Button buttonType = {ButtonType.Number} label='6' position = {[2, 3]} onClick = {handleNumerical(6)} />
                <Button buttonType = {ButtonType.Number} label='5' position = {[1, 3]} onClick = {handleNumerical(5)} />
                <Button buttonType = {ButtonType.Number} label='4' position = {[0, 3]} onClick = {handleNumerical(4)} />
                <Button buttonType = {ButtonType.Number} label='3' position = {[2, 4]} onClick = {handleNumerical(3)} />
                <Button buttonType = {ButtonType.Number} label='2' position = {[1, 4]} onClick = {handleNumerical(2)} />
                <Button buttonType = {ButtonType.Number} label='1' position = {[0, 4]} onClick = {handleNumerical(1)} />
                <Button buttonType = {ButtonType.Number} label='0' position = {[0, 5]} onClick = {handleNumerical(0)} />
            </Grid>
       </Container>
    )
};

export default Calculator;