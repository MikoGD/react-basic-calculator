import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import makeStyles from '@mui/styles/makeStyles';
import CalculatorButtons from './calculator-buttons.component';
import { TEXT_SIZE } from './calculator.container';

interface CalculatorViewProps {
  updateEquation: (element?: string | number) => void;
  runEquation: () => void;
  equation: string;
  textSize: TEXT_SIZE;
}

const useStyles = makeStyles({
  calculatorBody: {
    backgroundColor: '#e8e8e8',
    height: '30rem',
    width: '25rem',
    marginTop: '5rem',
    padding: '0.5rem',
  },
  calculatorScreen: {
    alignItems: 'center',
    backgroundColor: 'white',
    display: 'flex',
    height: '5rem',
    margin: '0.5rem 0 1rem 0',
    paddingLeft: '1rem',
    width: '100%',
    '& > *': {
      wordBreak: 'break-all',
    },
  },
});

const Calculator: React.FC<CalculatorViewProps> = ({ updateEquation, equation, runEquation, textSize }) => {
  const styles = useStyles();
  return (
    <Box className={styles.calculatorBody} border={1} borderColor="primary.main" borderRadius={1}>
      <Box className={styles.calculatorScreen} border={1} borderColor="primary.main" borderRadius={1}>
        <Typography variant={textSize} noWrap={textSize === TEXT_SIZE.lg}>
          {equation}
        </Typography>
      </Box>
      <CalculatorButtons updateEquation={updateEquation} runEquation={runEquation} />
    </Box>
  );
};

export default Calculator;
