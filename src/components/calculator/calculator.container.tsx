import React, { useState, useRef } from 'react';
import CalculatorView from './calculator.view';

export enum TEXT_SIZE {
  lg = 'h3',
  md = 'h4',
  sm = 'h5',
  xsm = 'h6',
}

const CalculatorContainer: React.FC = () => {
  const [equation, setEquation] = useState('');
  const [textSize, setTextSize] = useState<TEXT_SIZE>(TEXT_SIZE.lg);
  const newEquation = useRef(true);

  const handleTextSizeChanges = (length: number) => {
    if (length >= 20) {
      setTextSize(TEXT_SIZE.xsm);
    } else if (length >= 15) {
      setTextSize(TEXT_SIZE.sm);
    } else if (length >= 10) {
      setTextSize(TEXT_SIZE.md);
    } else if (textSize !== TEXT_SIZE.lg) {
      setTextSize(TEXT_SIZE.lg);
    }
  };

  const handleUpdatingEquation = (element?: string | number) => {
    const { length } = equation;

    handleTextSizeChanges(length);

    if (element === undefined) {
      setEquation('');
      return;
    }

    if (!newEquation.current) {
      setEquation('');
      newEquation.current = true;
    } else if (newEquation.current !== true) {
      newEquation.current = true;
    }

    if (typeof element === 'number') {
      setEquation((prev) => `${prev}${element}`);
    } else {
      setEquation((prev) => `${prev} ${element} `);
    }
  };

  const runEquation = () => {
    newEquation.current = false;

    const elements = equation.split(' ');

    const operator1 = Number(elements[0]);
    const operand = elements[1];
    const operator2 = Number(elements[2]);

    let result = 0;

    switch (operand) {
      case '+':
        result = operator1 + operator2;
        break;
      case '-':
        result = operator1 - operator2;
        break;
      case 'x':
        result = operator1 * operator2;
        break;
      case '/':
        result = operator1 / operator2;
        break;
      default:
        newEquation.current = true;
        return;
    }

    setEquation(String(result));
  };

  return (
    <CalculatorView
      equation={equation}
      updateEquation={handleUpdatingEquation}
      runEquation={runEquation}
      textSize={textSize}
    />
  );
};

export default CalculatorContainer;
